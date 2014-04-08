(ns lt.plugins.ltfiles.outliner
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
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
