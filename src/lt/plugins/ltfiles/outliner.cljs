(ns lt.plugins.ltfiles.outliner
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]))


(cmd/command {:command :ltfiles.indent-fold
              :desc "ltfiles: fold by indent"
              :exec (fn []
                      (let [e (pool/last-active)]
                        (.foldCode (editor/->cm-ed e) (editor/cursor e)
                                   #js {:rangeFinder js/CodeMirror.fold.indent})))})
