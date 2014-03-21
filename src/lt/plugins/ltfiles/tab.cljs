(ns lt.plugins.ltfiles.tab
  (:require [lt.objs.context :as context]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]))

;; This could be done in a behavior but I didn't want to make this a global default yet
(defn smart-tab-close []
  (let [ts (context/->obj :tabset)
        tabs (some-> ts deref :objs count)]
    (cmd/exec! :tabs.close)
    (when (= 1 tabs)
      (cmd/exec! :tabset.close))))

(cmd/command {:command :ltfiles.smart-tab-close
              :desc "ltfiles: closes a tab and tabset if last tab"
              :exec smart-tab-close})

(defn close-current-tabs []
  (let [ts (context/->obj :tabset)]
    (doseq [tab (:objs @ts)]
      (object/raise tab :close)))
  (cmd/exec! :tabset.close))

(cmd/command {:command :ltfiles.close-current-tabs
              :desc "ltfiles: closes a tabset completely - including all of its tabs"
              :exec close-current-tabs})


(defn ensure-and-focus-second-tabset []
  (when (< (-> @tabs/multi :tabsets count) 2)
      (cmd/exec! :tabset.new))
  (cmd/exec! :tabset.next))

(cmd/command {:command :ltfiles.ensure-and-focus-second-tabset
              :desc "ltfiles: Ensure second tabset and focus it"
              :exec ensure-and-focus-second-tabset})
