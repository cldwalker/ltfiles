(ns lt.plugins.ltfiles.browse
  "Browser related commands"
  (:require [lt.plugins.ltfiles.util :as util]
            [lt.plugins.ltfiles.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.app :as app]
            [lt.objs.notifos :as notifos]
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

;; could use github api to see if there's an actual changelog
(defn open-plugin-changelog [plugin]
  (if-let [url (some-> (:lt.objs.plugins/plugins @app/app)
                       (get plugin)
                       (as-> m
                             (str (:source m) "/compare/" (:version m) "...master") ))]
    (platform/open url)
    (notifos/set-msg! (str "Plugin " plugin " not found"))))

(defn system-open-plugin-changelog []
  (popup/input popup/basic-input open-plugin-changelog
               :header "Enter Plugin"
               :placeholder "PLUGIN"))

;; useful to see before upgrading
(cmd/command {:command :ltfiles.system-open-plugin-changelog
              :desc "ltfiles: opens changelog/diff of plugin"
              :exec system-open-plugin-changelog})

(comment
  (util/sh "ls")
  )

