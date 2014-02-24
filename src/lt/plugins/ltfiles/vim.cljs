(ns lt.plugins.ltfiles.vim
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]))

;; override vim's v

(def last-selection nil)

;; currently only works with a key that is NOT 'v' and defined in user.keymap
(defn visual-mode-with-history []
  (when-let [ed (pool/last-active)]
    (when (editor/selection? ed)
      (def last-selection (editor/selection-bounds ed)))
    (.handleKey CodeMirror.Vim (editor/->cm-ed ed) "v")))

(cmd/command {:command :ltfiles.vim-visual-mode
              :desc "ltfiles: vim visual mode with history"
              :exec visual-mode-with-history})

;; implement gv
(defn vim-reselect-visual []
  (when-let [ed (pool/last-active)]
    (when last-selection
      (editor/set-selection ed (:from last-selection) (:to last-selection)))))

;; This works with any cljs selection e.g. paredit.select.parent as long as this is called
;; to turn off the selection
;; This will not work with a codemirror de-selection e.g. v and then y
(cmd/command {:command :ltfiles.vim-reselect-visual
              :desc "ltfiles: reselects last visual mode turned off by :ltfiles.vim-visual-mode"
              :exec vim-reselect-visual})
