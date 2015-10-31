(ns lt.plugins.user.codemirror
  "Commands around lower level CodeMirror i.e. addons, modes"
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]))


(cmd/command {:command :user.jump-to-matching-tag
              :desc "User: Jump to matching tag using matchtags.js addon"
              :exec (fn []
                      (let [cm (editor/->cm-ed (pool/last-active))
                            _ (js/CodeMirror.commands.toMatchingTag cm)
                            cursor (.getCursor cm)]
                        ;; Decrement to get around bug which puts cursor outside of tag and prevents
                        ;; jumping back and forth
                        (set! (.-ch cursor) (dec (.-ch cursor)))
                        ;; Unselect selection. Not a problem in CM demo
                        (.setSelection cm cursor cursor)))})
