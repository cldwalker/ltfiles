(ns lt.plugins.user.paredit
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.plugins.paredit-plus :as paredit-plus]))


(defn newline-before-pair-close []
  (when-let [ed (pool/last-active)]
    (editor/operation ed (fn []
                           (paredit-plus/move-cursor-along-pair ed (editor/->cursor ed) :forward :before)
                           (cmd/exec! :editor.new-line-indent)))))

(cmd/command {:command :user.paredit-newline-before-pair-close
              :desc "User: Newline before a pair close"
              :exec newline-before-pair-close})

(defn editor-replace
  [ed from to s]
  (cmd/exec! :user.vim-yank (editor/range ed from to))
  (editor/replace ed from to s))

;; modified version of paredit-splice-sexp-kill
(defn paredit-kill-backword [ed l]
  (when-let [[c loc] (first (paredit-plus/find-unbalanced ed l (paredit-plus/pair-chars :close) :forward))]
    (when-let [mloc (paredit-plus/find-match ed loc c)]
      (editor/operation ed (fn []
                             (editor-replace ed loc (editor/adjust-loc loc 1) "")
                             ;; inc to avoid deleting parent
                             (editor-replace ed (update-in mloc [:ch] inc) l ""))))))


(cmd/command {:command :user.paredit-kill-backword
              :desc "User: kill backword up to paredit parent"
              :exec (fn []
                       (when-let [ed (pool/last-active)]
                         (paredit-kill-backword ed (editor/->cursor ed))))})


;; modified version of paredit-plus/paredit-kill that sets clipboard on yanked range
(defn paredit-kill [ed]
  (let [startloc (editor/->cursor ed)
        c (paredit-plus/char-at-loc ed startloc)
        all-pair-chars (paredit-plus/pair-chars :all)]
    (if (contains? all-pair-chars c)
      (when-let [matchloc (paredit-plus/find-match ed startloc c)]
        (if (> (editor/pos->index ed matchloc) (editor/pos->index ed startloc))
          (editor-replace ed startloc (editor/adjust-loc matchloc 1) "")
          (editor-replace ed (editor/adjust-loc startloc 1) matchloc "")))
      (let [line (:line startloc)
            chars (take-while (fn [[c loc]] (= line (:line loc))) (paredit-plus/locate-chars ed startloc all-pair-chars :forward))]
        (if (empty? chars)
          ;; TODO: set killed-line
          (cmd/exec! :editor.kill-line)
          (if-let [kl (some (fn [[c loc]]
                              (when-let [mloc (paredit-plus/find-match ed loc c)]
                                (when (paredit-plus/loc> ed startloc mloc)
                                  loc))) (filter (fn [[c _]] (contains? (paredit-plus/pair-chars :close) c)) chars))]
            (editor-replace ed startloc kl "")
            (if-let [kl (some (fn [[c loc]]
                                (when-let [mloc (paredit-plus/find-match ed loc c)]
                                  (when (> (:line mloc) (:line loc))
                                    mloc))) (filter (fn [[c _]] (contains? (paredit-plus/pair-chars :open) c)) chars))]
              (editor-replace ed startloc (editor/adjust-loc kl 1) "")
              (cmd/exec! :editor.kill-line))))
        ))))


(cmd/command {:command :user.paredit-kill
              :desc "User: paredit kill and  to clipboard"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (paredit-kill ed)))})
