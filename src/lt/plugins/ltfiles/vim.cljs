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

(defn vim-toggle-comment-selection
  "Turns off visual mode, v or V, after comment operation"
  []
  (cmd/exec! :toggle-comment-selection)
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

(defn show-registers []
  (popup/info
   (->> (.-registers (CodeMirror.Vim.getRegisterController))
        js->clj
        (remove #(#{"-" "\""} (first %)))
        (map (fn [[k v]]
               (str k ": " (pr-str (first (get v "keyBuffer")))))))
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
                       (s/replace-first (subs string 0 ch) #"\s*$" "")
                       (s/replace-first (subs string ch) #"^\s*" ""))]
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
