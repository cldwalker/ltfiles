(ns lt.plugins.ltfiles.developer
  "LT Developer tools i.e. inspect objects, behaviors, tags and cmds"
  (:require [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.aleph :as aleph]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.object :as object]))

(defn show-and-focus-filter-list [flist]
  (cmd/exec! :aleph.browse)
  (->> (object/->content flist)
       (dom/$ :.search)
       .focus))

(cmd/command {:command :ltfiles.behavior-bar
              :desc "ltfiles: Search behaviors in aleph"
              :exec (partial show-and-focus-filter-list aleph/b-list)})

(cmd/command {:command :ltfiles.object-bar
              :desc "ltfiles: Search objects in aleph"
              :exec (partial show-and-focus-filter-list aleph/o-list)})

(cmd/command {:command :ltfiles.tag-bar
              :desc "ltfiles: Search tags in aleph"
              :exec (partial show-and-focus-filter-list aleph/t-list)})

(def cmd-selector
  (selector/selector {:items (fn []
                               (->> (:commands @cmd/manager)
                                    vals
                                    (map #(assoc %
                                            :command-desc
                                            (str (:command %) ": " (:desc %))))
                                    (sort-by :command-desc)))
                      :key :command-desc
                      :placeholder "command or description"
                      :transform #(str "<p class='binding'>" %3 "</p>")}))

(cmd/command {:command :ltfiles.commandbar
              :desc "ltfiles: executes a command by its id or desc"
              :options cmd-selector
              :exec (fn [cmd]
                      ((:exec cmd)))})
