(ns lt.plugins.user.keybindings
  "Misc fns related to keybindings"
  (:require [lt.objs.keyboard :as keyboard]
            [lt.objs.command :as cmd]
            [lt.plugins.user.selector :as selector]
            [lt.objs.settings :as settings]
            [lt.objs.files :as files]
            [goog.string :as gstring]
            [lt.plugins.user.popup :as popup]))

;; A more user-friendly keyboard/cmd->current-binding
;; This purposely doesn't find all cmds in a vec of fns e.g.
;;   "key" [:cmd1 :cmd2 :cmd3]
;; This purposely stringifies a val which will search the body of fn calls e.g.
;;   "key"  [(:cmd1 "arg1")]
(defn search-keybindings [query key-map]
  (filter (fn [[k v]]
            (some #(re-find (re-pattern query) (str %))
                  v)) key-map))

;; TODO: pull in mappings from :lt.plugins.vim/map-keys
(defn find-command-keybindings* [query key-map]
  (let [results (search-keybindings query key-map)]
    (println "Matched" (count results) "keybindings:")
    (prn results)))

(defn find-command-keybindings [keymap]
  (println "Searching " (count keymap) "keybindings...")
  (popup/input
   #(find-command-keybindings* % keymap)
   :placeholder "regex"
   :header "Enter command regex"))

;; consider a separate cmd that pulls result using autocompleted widget
(cmd/command {:command :user.find-command-keybindings
              :desc "User: Finds keybindings that use a command for the given regex"
              ;; pull out keymap early so it searches a broader set
              ;; reading keymap inside a command or input narrows visible keys
              ;; Note: this may only be pulling the right keys when repl testing
              :exec (partial find-command-keybindings @keyboard/key-map)})

(defn vim-map-keys []
  (-> (files/open-sync settings/user-behaviors-path)
      :content
      (settings/safe-read "user.behaviors")
      (get-in [:+ :app])
      (as-> behaviors
            (some #(when (= (first %) :lt.plugins.vim/map-keys)
                     (second %)) behaviors))))

(def key-selector
  (selector/selector {:items (fn []
                               (->> (vim-map-keys)
                                    (merge @keyboard/key-map)
                                    (map (fn [[k v]]
                                           {:index (gstring/htmlEscape (str k ": " v)) :key k :commands v}))
                                    (sort-by :index)))
                      :key :index
                      :transform #(str "<p class='binding'>" %3 "</p>")}))

(cmd/command {:command :user.keybinding-bar
              :desc "User: Search keybinding or command of keys"
              :options key-selector
              :exec prn})
(comment
  (keyboard/cmd->current-binding :user.tab-open-current-url)
  (->> @keyboard/key-map vals (take 5)))
