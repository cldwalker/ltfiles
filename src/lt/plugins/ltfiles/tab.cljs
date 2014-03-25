(ns lt.plugins.ltfiles.tab
  (:require [lt.objs.context :as context]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.objs.opener :as opener]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

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

;; File opener

(def opened-files (atom #{}))

(behavior ::track-open-files
          :triggers #{:open}
          :reaction (fn [this ed]
                      (when-let [path (-> @ed :info :path)]
                        (swap! opened-files conj path))))

(object/add-behavior! opener/opener ::track-open-files)

;; TODO: format files same as navigate filter-list
(def file-selector
  (selector/selector {:items (fn []
                               (map #(hash-map :name %) @opened-files))
                      :key :name
                      :transform #(str "<p>" (lt.objs.files/basename %) "</p><p class='binding'>" %3 "</p>")}))

;; Currently only looks at files opened through opener. Could consider workspace files
;; This aims to be the same as vim's :buffers command
(cmd/command {:command :ltfiles.open-buffers
              :desc "ltfiles: Opens any file that has been opened since LT started"
              :options file-selector
              :exec (fn [file]
                      (cmd/exec! :open-path (:name file)))})

(comment
  (-> (:files @lt.objs.sidebar.navigate/sidebar-navigate)
      first)
  (prn opened-files))
