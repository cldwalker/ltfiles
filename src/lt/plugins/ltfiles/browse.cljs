(ns lt.plugins.ltfiles.browse
  "Browser related commands"
  (:require [lt.plugins.ltfiles.util :as util]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.objs.platform :as platform]
            [lt.objs.app :as app]
            [lt.objs.notifos :as notifos]
            [clojure.string :as s]
            [lt.objs.command :as cmd]))

(defn tab-open-current-url []
  (let [current-word (util/current-word)
        commands [:ltfiles.ensure-and-focus-second-tabset
                  :add-browser-tab
                  :browser.url-bar.focus
                  [:browser.url-bar.navigate! current-word]
                  :browser.focus-content]]
    (util/exec-commands commands)))

(cmd/command {:command :ltfiles.tab-open-current-url
              :desc "ltfiles: opens url under cursor in another tabset and browser"
              :exec tab-open-current-url})


(defn system-open-current-url []
  (platform/open (util/current-word)))

(cmd/command {:command :ltfiles.system-open-current-url
              :desc "ltfiles: opens url under cursor in system browser"
              :exec system-open-current-url})

(def plugin-selector
  (selector/selector {:items (fn []
                               (sort-by :name
                                        (vals (:lt.objs.plugins/plugins @app/app))))
                      :key :name}))

;; could use github api to see if there's an actual changelog
(defn system-open-plugin-changelog [plugin]
  (platform/open
   (str (s/replace-first (:source plugin) #"\.git$" "")
        "/compare/" (:version plugin) "...master")))

;; useful to see before upgrading
(cmd/command {:command :ltfiles.system-open-plugin-changelog
              :desc "ltfiles: opens changelog/diff of plugin"
              :options plugin-selector
              :exec system-open-plugin-changelog})
