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

(defn jump-to-first-result [->search selection]
  (object/add-behavior! search/searcher ::open-first-search-result)
  ;; TODO: pass next 3 lines as searcher.search args once that works upstream
  (lsearch/set-search search/searcher (->search selection))
  (lsearch/set-location search/searcher "<workspace>")
  (lsearch/set-replace search/searcher nil)
  (cmd/exec! :searcher.search))

(def jump-to-command
  (partial jump-to-first-result
           #(str "/:command\\s+" (gs/regExpEscape (:command %)) "(\\s+|$)/")))

(cmd/command {:command :ltfiles.jump-to-command
              :desc "ltfiles: jump to chosen command"
              :options cmd-selector
              :exec jump-to-command})


(def behavior-selector
  (selector/selector {:items (fn []
                               (->> (vals @object/behaviors)
                                    (map #(assoc
                                            (select-keys % [:name :desc])
                                            :name-desc
                                            (str (:name %) ": " (:desc %))))
                                    (sort-by :name-desc)))
                      :key :name-desc
                      :placeholder "name or description"
                      :transform #(str "<p class='binding'>" %3 "</p>")}))

;; This can't distinguish between behaviors that have same name e.g. a/close! and b/close!
(def jump-to-behavior
  (partial jump-to-first-result
           #(str "/behavior\\s+::" (gs/regExpEscape (name (:name %))) "(\\s+|$)/")))

(cmd/command {:command :ltfiles.jump-to-behavior
              :desc "ltfiles: jump to chosen behavior"
              :options behavior-selector
              :exec jump-to-behavior})

(def object-selector
  (selector/selector {:items (fn []
                               (->> (keys @object/object-defs)
                                    (map #(hash-map :name % :index (str %)))
                                    (sort-by :index)))
                      :key :index
                      :placeholder "object"
                      :dtransform #(str "<p class='binding'>" %3 "</p>")}))

;; This can't distinguish between objects that have same name e.g. a/navigate and b/navigate
(def jump-to-object
  (partial jump-to-first-result
           #(str "/object\\*\\s+::" (gs/regExpEscape (name (:name %))) "(\\s+|$)/")))

(cmd/command {:command :ltfiles.jump-to-object
              :desc "ltfiles: jump to chosen object"
              :options object-selector
              :exec jump-to-object})
