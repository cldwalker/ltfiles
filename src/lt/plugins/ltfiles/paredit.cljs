(ns lt.plugins.ltfiles.paredit
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit-plus :as paredit-plus]))


(defn newline-before-pair-close []
  (when-let [ed (pool/last-active)]
    (editor/operation ed (fn []
                           (paredit-plus/move-cursor-along-pair ed (editor/->cursor ed) :forward :before)
                           (cmd/exec! :editor.new-line-indent)))))

(cmd/command {:command :ltfiles.paredit-newline-before-pair-close
              :desc "ltfiles: Newline before a pair close"
              :exec newline-before-pair-close})

;; modified version of paredit-splice-sexp-kill
(defn paredit-kill-backword [ed l]
  (when-let [[c loc] (first (paredit-plus/find-unbalanced ed l (paredit-plus/pair-chars :close) :forward))]
    (when-let [mloc (paredit-plus/find-match ed loc c)]
      (editor/operation ed (fn []
                             (editor/replace ed loc (editor/adjust-loc loc 1) "")
                             ;; inc to avoid deleting parent
                             (editor/replace ed (update-in mloc [:ch] inc) l ""))))))


(cmd/command {:command :ltfiles.paredit-kill-backword
              :desc "ltfiles: kill backword up to paredit parent"
              :exec (fn []
                       (when-let [ed (pool/last-active)]
                         (paredit-kill-backword ed (editor/->cursor ed))))})
