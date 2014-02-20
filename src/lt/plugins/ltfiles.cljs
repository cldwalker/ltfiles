(ns lt.plugins.ltfiles
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.workspace :as workspace]
            [lt.objs.notifos :as notifos]
            [lt.objs.settings :as settings]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.app :as app]
            [lt.objs.files :as files]
            #_[goog.string]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from ltfiles"])

(object/object* ::ltfiles.hello
                :tags [:ltfiles.hello]
                :name "ltfiles"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::ltfiles.hello))

(cmd/command {:command ::say-hello
              :desc "ltfiles: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})

;; cmds to toggle behaviors by changing workspace behavior
;; is there a more localized way of doing this?
;; --------------------------------------------
(defn toggle-line-numbers
  "Sets line number first time this is called and toggles on subsequent calls"
  []
  (let [ws-behavior (settings/safe-read (:ws-behaviors @workspace/current-ws) "workspace.behaviors")
        show-line-numbers (some #(= :lt.objs.editor/hide-line-numbers %) (get-in ws-behavior [:+ :editor]))
        line-behavior (if show-line-numbers :lt.objs.editor/line-numbers :lt.objs.editor/hide-line-numbers)
        behavior-string  (->> (get-in ws-behavior [:+ :editor])
                              (remove #{:lt.objs.editor/line-numbers :lt.objs.editor/hide-line-numbers})
                              (cons line-behavior)
                              vec
                              (assoc-in ws-behavior [:+ :editor])
                              pr-str)]
    (swap! workspace/current-ws assoc :ws-behaviors behavior-string)
    (cmd/exec! :behaviors.reload)))

(cmd/command {:command :ltfiles.toggle-line-numbers
              :desc "ltfiles: toggles line numbers"
              :exec toggle-line-numbers})

(defn toggle-strip-whitespace
  "Disables stripping whitespace on first call and toggles on subsequent calls"
  []
  (let [ws-behavior (settings/safe-read (:ws-behaviors @workspace/current-ws) "workspace.behaviors")
        strip-whitespace (some #(= :lt.objs.editor.file/remove-trailing-whitespace %) (get-in ws-behavior [:- :editor.file-backed]))
        add-behavior-fn (if strip-whitespace identity #(cons :lt.objs.editor.file/remove-trailing-whitespace %))
        behavior-string (->> (get-in ws-behavior [:- :editor.file-backed])
                             (remove #{:lt.objs.editor.file/remove-trailing-whitespace})
                             add-behavior-fn
                             vec
                             (assoc-in ws-behavior [:- :editor.file-backed])
                             pr-str)]
    (swap! workspace/current-ws assoc :ws-behaviors behavior-string)
    (cmd/exec! :behaviors.reload)
    ;; timeout needed to override reload msg
    (js/setTimeout
     (fn []
       (notifos/set-msg! (str "Stripping whitespace on save "
                           (if strip-whitespace "enabled." "disabled."))))
     500)))

(cmd/command {:command :ltfiles.toggle-strip-whitespace
              :desc "ltfiles: toggles stripping whitespace on save"
              :exec toggle-strip-whitespace})

;; Misc
;; ----

;; Caution: This will not find an inline result if it moves a different line after the eval
(defn toggle-current-inline-result []
  (when-let [ed (pool/last-active)]
    (let [current-line (if (editor/selection? ed)
                         (-> ed editor/selection-bounds :to :line)
                         (:line (editor/->cursor ed)))]
      (when-let [inline (->> (:widgets @ed)
                             (some (fn [[[l t] widget]]
                                     (when (and (= t :inline)
                                                (= current-line (editor/lh->line ed l)))
                                       widget))))]
        (if (:open @inline)
          (object/raise inline :double-click)
          (object/raise inline :click))))))

;; This also works for a selection. Note: you cannot bind this to vim/map-keys
;; because something about invoking it disables s selection
(cmd/command {:command :ltfiles.toggle-current-inline-result
              :desc "ltfiles: toggles current inline result"
              :exec toggle-current-inline-result})


;; override vim's v

(def last-selection nil)

;; currently only works with a key that is NOT 'v' and defined in user.keymap
(defn visual-mode-with-history []
  (when-let [ed (pool/last-active)]
    (when (editor/selection? ed)
      (prn "SELECTED" (editor/selection-bounds ed))
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

;; open console log so I can search console!

(defn open-console-log-file []
  (cmd/exec! :open-path
             (files/join (files/lt-user-dir "logs") (str "window" (app/window-number) ".log"))))

(cmd/command {:command :ltfiles.open-console-log-file
              :desc "ltfiles: open current console log as an editable/searchable file"
              :exec open-console-log-file})

(comment
  (clojure.string/split (.-source lt.objs.files/ignore-pattern) #"\|")
  (re-find (prn lt.objs.files/ignore-pattern) #"e$" #_(re-pattern (goog.string/regExpEscape "e$")) "me$dude")
  (cmd/exec! :ltfiles.open-console-log-file)
  (keyboard/cmd->current-binding :smart-indent-selection)
  (identity @keyboard/key-map))
