(ns lt.plugins.ltfiles.reminisce
  "Extension to reminisce plugin"
  (:require [lt.objs.app :as app]
            [lt.objs.cache :as cache]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

(defn call-behavior-reaction [id & args]
  (let [behavior-fn (:reaction (object/->behavior id))]
    (assert behavior-fn)
    (apply behavior-fn args)))

;; Modified version of restore-workspace behavior that doesn't clobber windows > 1 with invalid restores
(behavior ::restore-workspace
          :triggers #{:post-init}
          :reaction (fn []
                      (when (zero? (app/window-number))
                        (call-behavior-reaction :lt.plugins.reminisce/restore-workspace app/app))))

(behavior ::restore-tabs
          :triggers #{:post-init}
          :reaction (fn [this]
                      (when (zero? (app/window-number))
                        (call-behavior-reaction :lt.plugins.reminisce/restore-tabs app/app))))
