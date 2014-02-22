(ns lt.plugins.ltfiles.browse
  (:require [lt.objs.tabs :as tabs]
            [lt.plugins.ltfiles.util :as util]
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
  (let [exec (.-exec (js/require "child_process"))]
    ;; OSX-specific for now
    (exec (str "open " (util/current-word))
          (fn [err stdout stderr]
            (when (seq stdout) (println "STDOUT: " stdout))
            (when (seq stderr) (println "STDERR: " stderr))))))

(cmd/command {:command :ltfiles.system-open-current-url
              :desc "ltfiles: opens url under cursor in system browser"
              :exec system-open-current-url})

