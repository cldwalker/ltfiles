(ns lt.plugins.ltfiles
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.workspace :as workspace]
            [lt.objs.settings :as settings]
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

(defn toggle-line-numbers []
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


(comment
  (cmd/exec! :ltfiles.toggle-line-numbers)
  (keyboard/cmd->current-binding :save)
  (identity @keyboard/key-map))
