(ns lt.plugins.user.vim
  "Cmds that depend on using vim mode. Commands that implement common vimisms are
  spread across other namespaces."
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.user.util :as util]
            [cljs.reader :as reader]
            [clojure.string :as s]
            [lt.plugins.user.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.command :as cmd]))

(defn vim-toggle-comment-selection
  "Turns off visual mode, v or V, after comment operation"
  []
  (cmd/exec! :toggle-comment-selection)
  (when (editor/selection? (pool/last-active))
    (if (-> (util/current-ed) .-state .-vim .-visualLine)
      (cmd/exec! :vim.send-key "V")
      (cmd/exec! :vim.send-key "v"))))

(cmd/command {:command :user.vim-toggle-comment-selection
              :desc "User: toggle comment selection that also handles visual mode"
              :exec vim-toggle-comment-selection})

;; Should use the 0th register. Multiple calls to this shouldn't clobber the yank stack
(defn set-vim-yank [text]
  (.setText (.-unnamedRegister (CodeMirror.Vim.getRegisterController)) text))

;; TODO: Make this editor-agnostic so I can PR this and call from core commands
(cmd/command {:command :user.vim-yank
              :desc "User: Sets text to latest yank"
              :exec set-vim-yank})

(defn get-register-value [register]
  (-> (.-registers (CodeMirror.Vim.getRegisterController))
      (aget register) ;; pick a register
      (aget "keyBuffer")
      first))

(cmd/command {:command :user.copy-latest-vim-register
              :desc "User: Copies latest vim yank to system clipboard"
              :exec (fn []
                      (platform/copy (get-register-value "0")))})

(cmd/command {:command :user.copy-clipboard-to-vim
              :desc "User: Copies clipboard to vim register"
              :exec (fn []
                      (set-vim-yank (platform/paste)))})

(defn show-registers []
  (popup/info
   (->> (.-registers (CodeMirror.Vim.getRegisterController))
        js->clj
        (remove #(#{"-" "\""} (first %)))
        (map (fn [[k v]]
               (str k ": " (pr-str (first (get v "keyBuffer")))))))
   :header "Registers"))

(cmd/command {:command :user.show-registers
              :desc "show vim's registers"
              :exec show-registers})

(defn smart-join-line
  []
  (when-let [ed (pool/last-active)]
    (let [cursor (editor/->cursor ed)
          string (editor/line ed (:line cursor))
          ch (:ch cursor)
          joined-line (str
                       (s/replace-first (subs string 0 ch) #"\s*$" "")
                       (s/replace-first (subs string ch) #"^\s*" ""))]
      (editor/set-line ed (:line cursor) joined-line))))

(defn smart-join []
  (js/CodeMirror.Vim.handleKey (util/current-ed) "J")
  (smart-join-line))


(cmd/command {:command :user.smart-join
              :desc "User: a smarter paredit-like J(oin)"
              :exec smart-join})

(comment
  (def ed (pool/last-active))
  (js/CodeMirror.Vim.handleEx (editor/->cm-ed ed) ":sort")
  (.-text (.-unamedRegister (CodeMirror.Vim.getRegisterController)))
  (.pushText
   (CodeMirror.Vim.getRegisterController)
   (js-obj "\"") "yank" "some thing" false))
