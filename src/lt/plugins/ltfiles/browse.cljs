(ns lt.plugins.ltfiles.browse
  "Browser related commands"
  (:require [lt.objs.tabs :as tabs]
            [lt.plugins.ltfiles.util :as util]
            [lt.plugins.ltfiles.input :as input]
            [lt.objs.platform :as platform]
            [lt.objs.app :as app]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd]))

(defn tab-open-current-url []
  (let [current-word (util/current-word)
        pre-commands (if (< (-> @tabs/multi :tabsets count) 2)
                       [:tabset.new] [])
        commands (into pre-commands
                       [:add-browser-tab
                        :tabs.move-next-tabset
                        :browser.url-bar.focus
                        [:browser.url-bar.navigate! current-word]
                        :browser.focus-content])]
    (doseq [c commands]
      (if (coll? c)
        (apply cmd/exec! c)
        (cmd/exec! c)))))

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
  (input/popup input/url-input open-plugin-changelog))

;; useful to see before upgrading
(cmd/command {:command :ltfiles.system-open-plugin-changelog
              :desc "ltfiles: opens changelog/diff of plugin"
              :exec system-open-plugin-changelog})

(comment
  (util/sh "ls")
  )

