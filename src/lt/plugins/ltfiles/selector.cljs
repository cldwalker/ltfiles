(ns lt.plugins.ltfiles.selector
  "Easy to use selector a.k.a fuzzy finder"
  (:require [lt.objs.sidebar.command :as scmd]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))
