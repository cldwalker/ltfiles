(ns lt.plugins.ltfiles.vim
  "Cmds that depend on using vim mode. Commands that implement common vimisms are
  spread across other namespaces."
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.vim :as vim]
            [lt.plugins.ltfiles.util :as util]
            [cljs.reader :as reader]
            [clojure.string :as s]
            [lt.plugins.ltfiles.popup :as popup]
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

;; exact same as lt.objs.files except for {:indent true}
;; TODO: PR upstream
(cmd/command {:command :ltfiles.toggle-comment-selection
              :desc "ltfiles: Toggle comment line(s)"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (let [cursor (editor/->cursor cur "start")
                              [start end] (if (editor/selection? cur)
                                            [cursor (editor/->cursor cur "end")]
                                            [cursor cursor])]
                          (when-not (editor/uncomment cur start end)
                            (editor/line-comment cur cursor (editor/->cursor cur "end") {:indent true})))))})

(defn vim-toggle-comment-selection
  "Turns off visual mode, v or V, after comment operation"
  []
  (cmd/exec! :ltfiles.toggle-comment-selection)
  (when (editor/selection? (pool/last-active))
    (if (-> (util/current-ed) .-state .-vim .-visualLine)
      (cmd/exec! :vim.send-key "V")
      (cmd/exec! :vim.send-key "v"))))

(cmd/command {:command :ltfiles.vim-toggle-comment-selection
              :desc "ltfiles: toggle comment selection that also handles visual mode"
              :exec vim-toggle-comment-selection})


;; Should use higher-level .pushText. Couldn't pass the correct register
(defn set-vim-yank [text]
  (.set (.-unamedRegister (CodeMirror.Vim.getRegisterController)) text true))

(defn replace-prefix-whitespace-for-latest-yank [new-wspace]
  (set-vim-yank
   (str new-wspace
        (->> (.-text (.-unamedRegister (CodeMirror.Vim.getRegisterController)))
             (re-find #"^\s*(.*)")
             second)
        ;; ensure newline lost by re-find
        "\n")))

(defn vim-indent-paste-above []
  (replace-prefix-whitespace-for-latest-yank
   (re-find #"^\s*" (util/relative-line)))
  (js/CodeMirror.Vim.handleKey (util/current-ed) "P"))

;; Unlike vim, these pastes do modify the existing yank. That's fine for now
(cmd/command {:command :ltfiles.vim-indent-paste-above
              :desc "ltfiles: P current yank at current indent"
              :exec vim-indent-paste-above})

(defn vim-indent-paste-below []
  (replace-prefix-whitespace-for-latest-yank
   (re-find #"^\s*" (util/relative-line)))
  (js/CodeMirror.Vim.handleKey (util/current-ed) "p"))

(cmd/command {:command :ltfiles.vim-indent-paste-below
              :desc "p current yank at current indent"
              :exec vim-indent-paste-below})

(defn show-registers []
  (popup/info
   (->> (.-registers (CodeMirror.Vim.getRegisterController))
        js->clj
        (remove #(#{"-" "\""} (first %)))
        (map (fn [[k v]]
               (str k ": " (pr-str (get v "text"))))))
   :header "Registers"))

(cmd/command {:command :ltfiles.show-registers
              :desc "show vim's registers"
              :exec show-registers})

;; like :ltexec but execs multiple commands
(vim/ex-command {:name "ltexec_clj"
                 :func (fn [cm info]
                         (util/exec-commands (reader/read-string (.-argString info))))})
(defn smart-join-line
  []
  (when-let [ed (pool/last-active)]
    (let [cursor (editor/->cursor ed)
          string (editor/line ed (:line cursor))
          ch (:ch cursor)
          joined-line (str
                       (s/replace-first (subs string 0 ch) #"\)\s*$" ")")
                       (s/replace-first (subs string ch) #"^\s*\)" ")"))]
      (editor/set-line ed (:line cursor) joined-line))))

(defn smart-join []
  (js/CodeMirror.Vim.handleKey (util/current-ed) "J")
  (smart-join-line))


(cmd/command {:command :ltfiles.smart-join
              :desc "ltfiles: a smarter paredit-like J(oin)"
              :exec smart-join})

(comment
  (.-text (.-unamedRegister (CodeMirror.Vim.getRegisterController)))
  (.pushText
   (CodeMirror.Vim.getRegisterController)
   (js-obj "\"") "yank" "some thing" false))
