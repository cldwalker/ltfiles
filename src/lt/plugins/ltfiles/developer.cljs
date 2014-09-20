(ns lt.plugins.ltfiles.developer
  "LT Developer tools i.e. inspect objects, behaviors, tags and cmds"
  (:require [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.aleph :as aleph]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.plugins.ltfiles.search :as lsearch]
            [lt.objs.search :as search]
            [goog.string :as gs]
            [clojure.set :as cset]
            [cljs.reader :as reader]
            [lt.objs.clients.local :as local]
            [lt.objs.context :as context]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
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
                      :placeholder "object"}))

;; This can't distinguish between objects that have same name e.g. a/navigate and b/navigate
(def jump-to-object
  (partial jump-to-first-result
           #(str "/object\\*\\s+::" (gs/regExpEscape (name (:name %))) "(\\s+|$)/")))

(cmd/command {:command :ltfiles.jump-to-object
              :desc "ltfiles: jump to chosen object definition"
              :options object-selector
              :exec jump-to-object})


;; Misc
;; ====

;; Faster than mousing around. Only needs to be done once
(cmd/command {:command :ltfiles.connect-to-lt-ui
              :desc "ltfiles: Connect to LT UI via a keystroke"
              :exec local/init})

(cmd/command {:command :ltfiles.print-context
              :desc "ltfiles: Print context"
              :exec (fn [] (prn (context/current)))})


(defn validate-behaviors-file
  "Detects invalid keywords in .behaviors file"
  []
  (let [ed (pool/last-active)
        behaviors-edn (-> @ed :doc deref :doc .getValue reader/read-string)
        user-behaviors (->> behaviors-edn
                            vals
                            (mapcat
                             (fn [diff-map]
                               (mapcat (fn [behaviors]
                                         (map #(if (sequential? %) (first %) %) behaviors))
                                       (vals diff-map))))
                            set)
        invalid-behaviors (cset/difference user-behaviors  (-> @object/behaviors keys set))
        user-tags (->> behaviors-edn vals (mapcat keys) set)
        ;; doesn't handle :editor.keys.vim.normal yet
        invalid-tags (cset/difference user-tags (-> @object/tags keys sort))
        invalid (cond-> {}
                        (seq invalid-behaviors) (assoc :behaviors invalid-behaviors)
                        (seq invalid-tags) (assoc :tags invalid-tags))]
    (if (seq invalid)
      (do
        (prn "Invalid .behaviors" invalid)
        (notifos/set-msg! (str "Behaviors file is invalid: " invalid)
                       {:class  "error"}))
      (notifos/set-msg! "Behaviors are valid"))))

(cmd/command {:command :ltfiles.validate-behaviors-file
              :desc "ltfiles: Validate current behaviors file"
              :exec validate-behaviors-file})

(defn validate-keymap-file
  "Detects invalid keywords in .keymap file"
  []
  (let [ed (pool/last-active) ;; (first (pool/containing-path "user.keymap"))
        keymap-edn (-> @ed :doc deref :doc .getValue reader/read-string)
        user-commands (->> keymap-edn
                           vals
                           (mapcat
                            (fn [diff-map]
                              (mapcat (fn [keymap]
                                        (mapcat (fn [cmds]
                                                  (map #(if (sequential? %) (first %) %) cmds))
                                                (vals keymap)))
                                      (vals diff-map))))
                           set)
        invalid-commands (cset/difference user-commands (-> @cmd/manager :commands keys set))
        invalid (cond-> {}
                        (seq invalid-commands) (assoc :commands invalid-commands))]
    (if (seq invalid)
      (do
        (prn "Invalid .keymap" invalid)
        (notifos/set-msg! (str "Keymap file is invalid: " invalid)
                       {:class  "error"}))
      (notifos/set-msg! "Keymaps are valid"))))

(cmd/command {:command :ltfiles.validate-keymap-file
              :desc "ltfiles: Validate current keymap file"
              :exec validate-keymap-file})
