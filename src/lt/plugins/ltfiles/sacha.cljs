(ns lt.plugins.ltfiles.sacha
  "Experimental extensions to sacha"
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
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
(def tag-pattern (re-pattern (str tag-prefix "[^ \\t\\n:.,?]+")))

(defn text->tags [text]
  (map
   #(subs % 1)
   (re-seq tag-pattern text)))

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

(defn ed->nodes [ed]
  (let [line (.-line (editor/cursor ed))
        lines (if-let [selection (editor/selection-bounds ed)]
                (range (get-in selection [:from :line])
                       (inc (get-in selection [:to :line])))
                (range line (c/safe-next-non-child-line ed line)))]
    (->tagged-nodes ed lines)))

(defn types-counts [ed]
  (let [nodes (ed->nodes ed)
        types-config (dynamic-config nodes)]
    (map
     #(vector %
              (type-counts (get-in types-config [:types %]) nodes))
     (keys (:types types-config)))))

(cmd/command {:command :ltfiles.types-counts
              :desc "ltfiles: tag counts of each type for current branch or selection"
              :exec (fn []
                      (prn (types-counts (pool/last-active))))})

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

(defn indent-nodes [nodes indent tab-size]
  (let [tag-indent (+ indent tab-size)
        node-indent (+ indent tab-size tab-size)
        desc-indent (+ indent tab-size tab-size tab-size)]
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

(defn ->type-view
  "Creates a type view given a type and the editor (branch) to use. A type view
  pivots a current branch by changing the top-level parents of a branch to the new type."
  [ed type]
  (let [nodes (ed->nodes ed)
        types-config (dynamic-config nodes)
        tags-nodes (type-map (get-in types-config [:types type]) nodes)
        tags-nodes (save-tags tags-nodes)
        new-nodes (mapcat
                   (fn [tag]
                     (when-let [children (get tags-nodes tag)]
                       (into [{:type-tag true :text (str tag-prefix (name tag))}] children)))
                   (get-in types-config [:types type :names]))
        indented-nodes (indent-nodes new-nodes
                                     (c/line-indent ed (.-line (editor/cursor ed)))
                                     (editor/option ed "tabSize"))]
    (str (s/join "\n" indented-nodes) "\n")))

(def type-selector
  (selector/selector {:items (fn []
                               (map #(hash-map :name %) (keys (:types config))))
                      :key :name}))

(defn check-types-counts [ed editor-fn]
  (let [before-replace-counts (types-counts ed)]
    (editor-fn)
    (let [after-replace-counts (types-counts ed)]
      (when-not (= before-replace-counts after-replace-counts)
        (println "Types counts not equal. Please submit your outline as an issue.")
        (println "BEFORE: " before-replace-counts "\nAFTER: " after-replace-counts)))))

(cmd/command {:command :ltfiles.replace-type-branch
              :desc "ltfiles: replaces current branch with new type view"
              :options type-selector
              :exec (fn [type]
                      (let [ed (pool/last-active)
                            end-line (c/safe-next-non-child-line ed (.-line (editor/cursor ed)))]
                        (check-types-counts
                         ed
                         (fn []
                           (editor/replace (editor/->cm-ed ed)
                                           {:line (inc (:line (editor/->cursor ed))) :ch 0}
                                           {:line end-line :ch 0}
                                           (->type-view ed (:name type)))))))})

(cmd/command {:command :ltfiles.insert-type-branch
              :desc "ltfiles: inserts new type view for current branch"
              :options type-selector
              :exec (fn [type]
                      (let [ed (pool/last-active)]
                        (util/insert-at-next-line ed (->type-view ed (:name type)))))})

(comment

  (let [ed (pool/last-active)]
    (->tagged-counts ed (range 9 19))
    #_(->tagged-nodes ed (range 9 19)))

  (editor/line-handle (pool/last-active) 5))
