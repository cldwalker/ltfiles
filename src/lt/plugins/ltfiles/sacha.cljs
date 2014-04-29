(ns lt.plugins.ltfiles.sacha
  "Experimental extensions to sacha"
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
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

(defn text->tags [text]
  (map
   #(subs % 1)
   (re-seq #"#\S+" text)))

(defn parent->tag [text]
  (re-find #"\S+" text))

(defn update-tags [tags new-tag]
  (-> (filter #(< (:indent %) (:indent new-tag)) tags)
      (conj (assoc new-tag
              :tag-text (parent->tag (:text new-tag))))))

(defn ->tagged-nodes
  "Returns nodes with :line, :indent, :text and :tags properties.
  Tags are picked up from parents and any words starting with '#'."
  [ed lines]
  (->> lines
       (map #(hash-map :line %
                       :indent (c/line-indent ed %)
                       :text (editor/line ed %)))
       (partition 2 1)
       (reduce
        (fn [accum [curr next]]
          (cond-> accum
                  (parent-node? curr next)
                  (update-in [:tags] update-tags curr)

                  (and (not (parent-node? curr next))
                       (not (desc-node? curr)))
                  (update-in [:nodes] conj (assoc curr
                                             :tags (into (map :tag-text (:tags accum))
                                                         (text->tags (:text curr)))))))
        {:tags #{} :nodes []})
       :nodes))

(comment

  (let [ed (pool/last-active)]
    (->tagged-nodes ed (range 9 19)))

  (editor/line-handle (pool/last-active) 5))
