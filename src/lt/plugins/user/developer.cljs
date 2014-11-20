(ns lt.plugins.user.developer
  "LT Developer tools i.e. inspect objects, behaviors, tags and cmds"
  (:require [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.plugins.user.selector :as selector]
            [lt.plugins.user.search :as lsearch]
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
(cmd/command {:command :user.commandbar
              :desc "User: executes a command by its id or desc"
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

(cmd/command {:command :user.jump-to-command
              :desc "User: jump to chosen command"
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

(cmd/command {:command :user.jump-to-behavior
              :desc "User: jump to chosen behavior"
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

(cmd/command {:command :user.jump-to-object
              :desc "User: jump to chosen object definition"
              :options object-selector
              :exec jump-to-object})


;; Misc
;; ====

;; Faster than mousing around. Only needs to be done once
(cmd/command {:command :user.connect-to-lt-ui
              :desc "User: Connect to LT UI via a keystroke"
              :exec local/init})

(cmd/command {:command :user.print-context
              :desc "User: Print context"
              :exec (fn [] (prn (context/current)))})


(defn ->user-behaviors [behaviors-edn]
  (->> behaviors-edn
       vals
       (mapcat
        (fn [diff-map]
          (mapcat (fn [behaviors]
                    (map #(if (sequential? %) (first %) %) behaviors))
                  (vals diff-map))))
       set))

(defn validate-behaviors-file
  "Detects invalid keywords in .behaviors file"
  []
  (let [ed (pool/last-active)
        behaviors-edn (-> @ed :doc deref :doc .getValue reader/read-string)
        user-behaviors (->user-behaviors behaviors-edn)
        invalid-behaviors (cset/difference user-behaviors  (-> @object/behaviors keys set))
        user-tags (->> behaviors-edn vals (mapcat keys) set)
        ;; doesn't handle :editor.keys.vim.normal yet
        invalid-tags (cset/difference user-tags (-> @object/tags keys set))
        invalid (cond-> {}
                        (seq invalid-behaviors) (assoc :behaviors invalid-behaviors)
                        (seq invalid-tags) (assoc :tags invalid-tags))]
    (if (seq invalid)
      (do
        (prn "Invalid .behaviors" invalid)
        (notifos/set-msg! (str "Behaviors file is invalid: " invalid)
                       {:class  "error"}))
      (notifos/set-msg! "Behaviors are valid"))))

(cmd/command {:command :user.validate-behaviors-file
              :desc "User: Validate current behaviors file"
              :exec validate-behaviors-file})

(cmd/command {:command :user.unused-lt-behaviors
              :desc "User: Find defined behaviors that aren't in default.behaviors file"
              :exec (fn []
                      (let [ed (pool/last-active)
                            behaviors-edn (-> @ed :doc deref :doc .getValue reader/read-string)
                            user-behaviors (->user-behaviors behaviors-edn)
                            system-behaviors (->> @object/behaviors
                                                  keys
                                                  ;; does miss a few LT core plugins
                                                  (remove #(.startsWith (namespace %) "lt.plugins"))
                                                  set)
                            unused-behaviors (cset/difference system-behaviors user-behaviors)]
                        (prn "Unused behaviors:" unused-behaviors)))})

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

(cmd/command {:command :user.validate-keymap-file
              :desc "User: Validate current keymap file"
              :exec validate-keymap-file})
