(ns lt.plugins.ltfiles.developer
  "LT Developer tools i.e. inspect objects, behaviors, tags and cmds"
  (:require [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.aleph :as aleph]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.plugins.ltfiles.search :as lsearch]
            [lt.objs.search :as search]
            [goog.string :as gs]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

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

;; Can't be used to open another command using selector/selector
(cmd/command {:command :ltfiles.commandbar
              :desc "ltfiles: executes a command by its id or desc"
              :options cmd-selector
              :exec (fn [cmd]
                      ((:exec cmd)))})

(behavior ::open-first-search-result
          :triggers #{:done-searching}
          :reaction (fn [this v]
                      ;; disable to avoid effecting other searches
                      (object/rem-behavior! search/searcher ::open-first-search-result)
                      (cmd/exec! :searcher.next)))

(defn search-lt-command [command]
  (object/add-behavior! search/searcher ::open-first-search-result)
  ;; TODO: pass next 3 lines as searcher.search args once that works upstream
  (lsearch/set-search search/searcher
                      (str "/:command\\s+" (gs/regExpEscape (:command command)) "(\\s+|$)/"))
  (lsearch/set-location search/searcher "<workspace>")
  (lsearch/set-replace search/searcher nil)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.jump-to-command
              :desc "ltfiles: jump to chosen command"
              :options cmd-selector
              :exec search-lt-command})
