(ns lt.plugins.ltfiles.outliner
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]))

(defn fold-code
  "Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor"
  [ed pos opts force]
  (.foldCode (editor/->cm-ed ed) pos opts force))

;; from https://groups.google.com/forum/#!searchin/codemirror/foldall/codemirror/u3IYL-5g0t4/4YGdXEBFgZoJ
;; consider just writing this in JS
(defn fold-all
  ([condition]
   (let [ed (pool/last-active)]
     (fold-all condition (range (editor/first-line ed) (inc (editor/last-line ed))))))
  ([condition lines]
   (let [ed (pool/last-active)]
     (editor/operation ed
                       (fn []
                         (doseq [line lines]
                           (when (condition (line-level ed line))
                             (fold-code ed
                                        #js {:line line :ch 0}
                                        #js {:rangeFinder js/CodeMirror.fold.indent}
                                        "fold"))))))))


(defn unfold-all
  ([condition]
   (let [ed (pool/last-active)]
     (unfold-all condition (range (editor/first-line ed) (inc (editor/last-line ed))))))
  ([condition lines]
   (let [ed (pool/last-active)]
     (editor/operation ed
                       (fn []
                         (doseq [line lines]
                           (when (condition (line-level ed line))
                             (fold-code ed
                                        #js {:line line :ch 0}
                                        #js {:rangeFinder js/CodeMirror.fold.indent}
                                        "unfold"))))))))

(cmd/command {:command :ltfiles.fold-all
              :desc "ltfiles: fold the whole file"
              :exec (partial fold-all (constantly true))})


(cmd/command {:command :ltfiles.unfold-all
              :desc "ltfiles: unfold the whole file"
              :exec (partial unfold-all (constantly true))})

(doseq [num (range 1 10)]
  (cmd/command {:command (keyword (str "ltfiles.fold-level-" num))
                :desc (str "ltfiles: fold level " num " nodes")
                :exec (fn []
                        (let [tabsize (editor/option (pool/last-active) "tabSize")
                              level (* (dec num) tabsize)]
                          (unfold-all #(< % level))
                          (fold-all #(= % level))))}))


(cmd/command {:command :ltfiles.indent-fold
              :desc "ltfiles: fold by indent"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (fold-code ed
                                   (editor/cursor ed)
                                   #js {:rangeFinder js/CodeMirror.fold.indent}
                                   nil)))})

;; same as getIndent() embedded in fold.indent
(defn line-level [ed line]
  (js/CodeMirror.countColumn
   (editor/line ed line) nil (editor/option ed "tabSize")))

;; doesn't assume direction
(defn find-first-sibling [lines level]
  (let [ed (pool/last-active)]
    (some #(when (= level (line-level ed %)) %)
          lines)))

;; assumes downward direction
(defn find-first-non-child [lines level]
  (let [ed (pool/last-active)]
    (some #(when (>= level (line-level ed %)) %)
          lines)))

;; assumes upward direction
(defn find-parent [lines level]
  (let [ed (pool/last-active)]
    (some #(when (> level (line-level ed %)) %)
          lines)))

(defn jump-to-parent []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [parent-line (find-parent
                          (range (dec line) -1 -1) level)]
      ;; assume parent is one level less though this isn't true for disjointed outlines
      (editor/move-cursor ed {:line parent-line
                              :ch (- level (editor/option ed "tabSize"))})
      (notifos/set-msg! "No parent found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-to-parent
              :desc "ltfiles: jump to parent"
              :exec jump-to-parent})

(defn jump-forward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [next-line (find-first-sibling
                        (range (inc line) (inc (editor/last-line ed))) level)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line next-line :ch level})
      (notifos/set-msg! "No next line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-forward-on-same-level
              :desc "ltfiles: jump to next line on same level"
              :exec jump-forward-on-same-level})

(defn jump-backward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [prev-line (find-first-sibling
                        (range (dec line) -1 -1) level)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line prev-line :ch level})
      (notifos/set-msg! "No previous line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-backward-on-same-level
              :desc "ltfiles: jump to previous line on same level"
              :exec jump-backward-on-same-level})

(defn select-current-tree []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)
        non-child-line (find-first-non-child
                        (range (inc line) (inc (editor/last-line ed)))
                        level)]
    (editor/set-selection
     ed
     {:line line :ch 0}
     {:line (dec non-child-line) :ch 1000})))

;; handy for deleting, yanking, indent, outdenting
(cmd/command {:command :ltfiles.select-current-tree
              :desc "ltfiles: select current tree"
              :exec select-current-tree})

(defn fold-fn-for-current-tree [fold-fn]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)
        non-child-line (find-first-non-child
                        (range (inc line) (inc (editor/last-line ed)))
                        level)]
    (fold-fn (constantly true)
             (range line non-child-line))))

(cmd/command {:command :ltfiles.fold-all-for-current-tree
              :desc "ltfiles: fold all for current tree"
              :exec (partial fold-fn-for-current-tree fold-all)})

(cmd/command {:command :ltfiles.unfold-all-for-current-tree
              :desc "ltfiles: unfold all for current tree"
              :exec (partial fold-fn-for-current-tree unfold-all)})


(comment
  (line-level (pool/last-active) 1))
