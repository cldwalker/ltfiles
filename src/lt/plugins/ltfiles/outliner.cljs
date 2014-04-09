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
(defn fold-all []
  (let [ed (pool/last-active)]
    (editor/operation ed
                    (fn []
                      (doseq [line (range (editor/first-line ed) (inc (editor/last-line ed)))]
                        (fold-code ed
                                   #js {:line line :ch 0}
                                   #js {:rangeFinder js/CodeMirror.fold.indent}
                                   "fold"))))))


(defn unfold-all []
  (let [ed (pool/last-active)]
    (editor/operation ed
                    (fn []
                      (doseq [line (range (editor/first-line ed) (inc (editor/last-line ed)))]
                        (fold-code ed
                                   #js {:line line :ch 0}
                                   #js {:rangeFinder js/CodeMirror.fold.indent}
                                   "unfold"))))))

;; getIndent fn embedded in fold.indent
(defn line-level [ed line]
  (js/CodeMirror.countColumn
   (editor/line ed line) nil (editor/option ed "tabSize")))

;; Assume forward for now
(defn find-first-line-with-level [lines level]
  (let [ed (pool/last-active)]
    (some #(when (= level (line-level ed %)) %)
          lines)))

(cmd/command {:command :ltfiles.fold-all
              :desc "ltfiles: fold the whole file"
              :exec fold-all})


(cmd/command {:command :ltfiles.unfold-all
              :desc "ltfiles: unfold the whole file"
              :exec unfold-all})

(cmd/command {:command :ltfiles.indent-fold
              :desc "ltfiles: fold by indent"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (fold-code ed
                                   (editor/cursor ed)
                                   #js {:rangeFinder js/CodeMirror.fold.indent}
                                   nil)))})


(defn jump-forward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [next-line (find-first-line-with-level
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
    (if-let [prev-line (find-first-line-with-level
                        (range (dec line) -1 -1) level)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line prev-line :ch level})
      (notifos/set-msg! "No previous line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-backward-on-same-level
              :desc "ltfiles: jump to previous line on same level"
              :exec jump-backward-on-same-level})
