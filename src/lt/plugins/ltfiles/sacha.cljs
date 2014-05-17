(ns lt.plugins.ltfiles.sacha
  "Experimental extensions to sacha"
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.notifos :as notifos]
            [clojure.set :as cset]
            [clojure.string :as s]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.plugins.ltfiles.util :as util]
            [lt.plugins.sacha.codemirror :as c]))

;; An example outline to practice on
  "
      p0
        convert tabs to spaces *.otl #big
        #cmd - raise node over parent like paredit raise
        upgrade #cm for [p and ]p and setSelections #big
          +also indented system paste
      p9
        zoom,hoisting - requries linked docs or tempfiles #big #cm
        #cmd - open child/sibling/parent above/below
        autocomplete only #tags
  "

(defn desc-node? [node]
  (re-find #"^\s*\+" (:text node)))

(defn parent-node? [curr next]
  (when next
    (and (> (:indent next) (:indent curr))
         (not (desc-node? next)))))

(def tag-prefix "#")

;; This regex returns pairs of matches but only the latter is useful. This
;; is a necessary evil caused by no negative-lookbehind in JS
(def tag-pattern
  "Regex for pulling out tags with tag-prefix. To escape having a tag parsed,
  put a backslash before it e.g. \\#escaped"
  (re-pattern (str "(?:[^\\\\]|^)"
                   "(" tag-prefix "[^ \\t\\n:.,;]+" ")")))

(defn text->tags [text]
  (map
   #(subs % 1)
   (map second (re-seq tag-pattern text))))

(defn add-node-with-tags [nodes node tags]
  (conj nodes (assoc node :tags tags)))

(defn ->tagged-nodes
  "Returns nodes with :line, :indent, :text and :tags properties.
  Tags are picked up from parents and any words starting with '#'."
  [ed lines]
  (->> lines
       (map #(hash-map :line %
                       :indent (c/line-indent ed %)
                       :text (editor/line ed %)))
       ;; [] needed to include last element
       (partition 2 1 [])
       (reduce
        (fn [accum [curr next]]
          (cond
           (parent-node? curr next)
           (update-in accum [:tags]
                      #(add-node-with-tags
                        (remove (fn [tag] (= (:indent tag) (:indent curr))) %)
                        curr
                        (text->tags (:text curr))))

           (desc-node? curr)
           (update-in accum
                      [:nodes (dec (count (:nodes accum))) :desc]
                      (fnil conj [])
                      curr)
           :else
           (update-in accum [:nodes]
                      (fn [nodes]
                        (add-node-with-tags
                         nodes
                         curr
                         (into (mapcat :tags (filter #(< (:indent %) (:indent curr)) (:tags accum)))
                               (text->tags (:text curr))))))))
        ;; :nodes - contains all nodes/non-tag lines in the given lines
        ;; :tags - contains all tags but only keeps the latest tag for a given indent
        {:tags #{} :nodes []})
       :nodes))

(defn ->tagged-counts
  "For given lines, returns map of tags and how many nodes have that tag."
  [ed lines]
  (->> (->tagged-nodes ed lines)
       (mapcat :tags)
       frequencies))

(cmd/command {:command :ltfiles.tag-counts
              :desc "ltfiles: tag counts in current branch's nodes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            line (.-line (editor/cursor ed))]
                        (prn (->tagged-counts
                         ed
                         (range line (c/safe-next-non-child-line ed line))))))})


(def unknown-type :unknown)

;; TODO: make this dynamic per branch
(def config
  {:types {:priority {:names ["p0" "p1" "p2" "p9" "p?" "later"]
                      :default "p?"}
           :duration {:names ["small" "big"]
                      :default "small"}
           unknown-type {:names ["leftover"]
                         :default "leftover"}}})

(defn type-nodes->tag-map
  "Reduces a type's nodes to a tag map with a reducer fn."
  [f type-config nodes]
  (let [default-tag (or (:default type-config) "leftover")]
    (reduce
     (fn [accum node]
       (let [type-tags (cset/intersection (set (:tags node))
                                          (set (:names type-config)))
             type-tags (if (empty? type-tags) [default-tag] type-tags)]
         #_(prn node type-tags)
         (reduce #(f %1 %2 node) accum type-tags)))
     {}
     nodes)))

(def type-counts (partial type-nodes->tag-map #(update-in %1 [%2] inc)))

(defn dynamic-config
  "Types config which calculates certain types based on nodes e.g. unknown type
  which accounts for typeless tags."
  [nodes]
  (let [unaccounted-tags (cset/difference (set (mapcat :tags nodes))
                                          (set (->> config :types vals (mapcat :names))))]
    (update-in config [:types unknown-type :names] #(into unaccounted-tags %))))

(defn ed->nodes
  ([ed] (ed->nodes ed nil))
  ([ed lines]
   (let [lines (or lines
                   (if-let [selection (editor/selection-bounds ed)]
                     (range (get-in selection [:from :line])
                            (inc (get-in selection [:to :line])))
                     (let [line (.-line (editor/cursor ed))]
                       (range line (c/safe-next-non-child-line ed line)))))]
     (->tagged-nodes ed lines))))

(defn types-counts [ed lines]
  (let [nodes (ed->nodes ed lines)
        types-config (dynamic-config nodes)]
    (map
     #(vector %
              (type-counts (get-in types-config [:types %]) nodes))
     (keys (:types types-config)))))

(cmd/command {:command :ltfiles.types-counts
              :desc "ltfiles: tag counts of each type for current branch or selection"
              :exec (fn []
                      (prn (types-counts (pool/last-active) nil)))})

(cmd/command {:command :ltfiles.debug-nodes
              :desc "ltfiles: prints nodes for current branch or selection"
              :exec (fn []
                      (println (s/join "\n" (ed->nodes (pool/last-active)))))})

;; Type view commands
;; ==================

(def type-map (partial type-nodes->tag-map #(update-in %1 [%2] (fnil conj []) %3)))

(defn indent-node [node indent]
  (s/replace-first
   (:text node)
   #"^\s*"
   (apply str (repeat indent " "))))

(defn indent-nodes [nodes indent tab-size offset-level]
  (let [offset (* offset-level tab-size)
        tag-indent (+ indent offset)
        node-indent (+ indent offset tab-size)
        desc-indent (+ indent offset tab-size tab-size)]
    (mapcat
     #(if (:type-tag %)
        [(str (apply str (repeat tag-indent " "))
              (:text %))]
        (into [(indent-node % node-indent)]
              (map (fn [x] (indent-node x desc-indent))
                   (:desc %))))
     nodes)))

(defn save-tags
  "Saves tags to node's text in order to not lose tags when switching views."
  [tags-nodes]
  (reduce-kv
   (fn [accum tag nodes]
     (assoc accum tag
       (map (fn [node]
              (let [tags-to-add (cset/difference (set (:tags node))
                                                 #{tag}
                                                 (set (text->tags (:text node))))]
                (update-in node [:text] str
                           (s/join (map #(str " " tag-prefix %) tags-to-add)))))
            nodes)))
   {}
   tags-nodes))

(defn ensure-unique-nodes
  "Ensures duplicate nodes are removed from least popular tags, leaving
  a duplicate node in its most popular tag."
  [tags-nodes]
  (let [freqs (frequencies (mapcat second tags-nodes))
        dups (keep (fn [[node c]]
                     (when (> c 1) node)) freqs)
        most-popular-tag #(first (apply max-key
                                        (fn [[tag nodes]]
                                          (when ((set %) tag)
                                            (count nodes))) tags-nodes))
        ;; pairs of allowed tag and dup nodes
        tag-dups (map #(vector (most-popular-tag (:tags %)) %) dups)
        disallowed-node? (fn [node tag]
                           (some (fn [[allowed-tag dup-node]]
                                   (and (= dup-node node) (not= allowed-tag tag)))
                                 tag-dups))]
    (doseq [[tag node] tag-dups]
      (println (str "Line '" (:text node) "' has overlapping tags. Put line under " tag-prefix tag)))
    (into {}
          (keep
           (fn [[tag nodes]]
             (let [new-nodes (remove #(disallowed-node? % tag) nodes)]
               (when (seq new-nodes)
                 [tag (vec new-nodes)])))
           tags-nodes))))

(defn ->view
  "Creates a view given a type or a view config and the editor (branch) to use. A view
  pivots the current branch by changing the parents of a branch."
  ([ed type-or-view] (->view ed type-or-view 1))
  ([ed type-or-view indent-level]
   (let [nodes (ed->nodes ed)
         view-config (if (map? type-or-view)
                       type-or-view
                       (get-in (dynamic-config nodes) [:types type-or-view]))
         tags-nodes (type-map view-config nodes)
         tags-nodes (ensure-unique-nodes tags-nodes)
         tags-nodes (save-tags tags-nodes)
         new-nodes (mapcat
                    (fn [tag]
                      (when-let [children (get tags-nodes tag)]
                        (into [{:type-tag true :text (str tag-prefix (name tag))}] children)))
                    (:names view-config))
         indented-nodes (indent-nodes new-nodes
                                      (c/line-indent ed (.-line (editor/cursor ed)))
                                      (editor/option ed "tabSize")
                                      indent-level)]
     (str (s/join "\n" indented-nodes) "\n"))))

(def type-selector
  (selector/selector {:items (fn []
                               (map #(hash-map :name (name %)) (keys (:types config))))
                      :key :name}))

(defn check-types-counts
  ([ed editor-fn] (check-types-counts ed editor-fn nil))
  ([ed editor-fn lines]
   (let [before-replace-counts (types-counts ed lines)
         new-body-count (count (s/split-lines (editor-fn)))
         new-lines (when lines (range (first lines) (+ new-body-count (first lines))))
         after-replace-counts (types-counts ed new-lines)]
         (when-not (= before-replace-counts after-replace-counts)
           (cmd/exec! :editor.undo)
           (notifos/set-msg! "Before and after type counts not equal. Please submit your outline as an issue." {:class "error"})
           (println "BEFORE: " before-replace-counts "\nAFTER: " after-replace-counts)))))

(cmd/command {:command :ltfiles.type-replace-children
              :desc "ltfiles: replaces current children with new type view"
              :options type-selector
              :exec (fn [type]
                      (let [ed (pool/last-active)
                            end-line (c/safe-next-non-child-line ed (.-line (editor/cursor ed)))]
                        (check-types-counts
                         ed
                         (fn []
                           (let [new-body (->view ed (keyword (:name type)))]
                             (editor/replace (editor/->cm-ed ed)
                                             {:line (inc (:line (editor/->cursor ed))) :ch 0}
                                             {:line end-line :ch 0}
                                             new-body)
                             new-body)))))})

(cmd/command {:command :ltfiles.type-replace-branch
              :desc "ltfiles: replaces current branch with new type view"
              :options type-selector
              :exec (fn [type]
                      (let [ed (pool/last-active)
                            line (.-line (editor/cursor ed))
                            end-line (c/safe-next-non-child-line ed line)]
                        (check-types-counts
                         ed
                         (fn []
                           (let [new-body (->view ed (keyword (:name type)) 0)]
                             (editor/replace (editor/->cm-ed ed)
                                             {:line (:line (editor/->cursor ed)) :ch 0}
                                             {:line end-line :ch 0}
                                             new-body)
                             new-body))
                         (range line end-line))))})

(cmd/command {:command :ltfiles.insert-type-branch
              :desc "ltfiles: inserts new type view for current branch"
              :options type-selector
              :exec (fn [type]
                      (let [ed (pool/last-active)]
                        (util/insert-at-next-line ed (->view ed (keyword (:name type))))))})

(defn ->query-view
  "Create a view given a query. There are two formats.
  With parent:    #type: tag1, tag2
  Without parent: tag1, tag2"
  [ed query]
  (let [tags-string (-> (re-find #"^\s*(\S+:|)\s*(.*)$" query) (get 2))
        tags (when tags-string (s/split tags-string #"\s*,\s*"))
        view-config {:names (conj tags "leftover") :default "leftover"}]
    (->view ed view-config)))

(cmd/command {:command :ltfiles.query-replace-children
              :desc "ltfiles: replaces current children based on current node's query"
              :exec (fn []
                      (let [ed (pool/last-active)
                            end-line (c/safe-next-non-child-line ed (.-line (editor/cursor ed)))]
                        (let [line (:line (editor/->cursor ed))
                              new-body (->query-view ed (editor/line ed line))]
                             (editor/replace (editor/->cm-ed ed)
                                             {:line (inc line) :ch 0}
                                             {:line end-line :ch 0}
                                             new-body))))})

(comment

  (let [ed (pool/last-active)]
    (->tagged-counts ed (range 9 19))
    #_(->tagged-nodes ed (range 9 19)))

  (editor/line-handle (pool/last-active) 5))
