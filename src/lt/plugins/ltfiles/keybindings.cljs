(ns lt.plugins.ltfiles.keybindings
  "Misc fns related to keybindings"
  (:require [lt.objs.keyboard :as keyboard]
            [lt.objs.command :as cmd]
            [lt.plugins.ltfiles.input :as input]))

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
  (input/popup input/url-input #(find-command-keybindings* % keymap)))

;; consider a separate cmd that pulls result using autocompleted widget
(cmd/command {:command :ltfiles.find-command-keybindings
              :desc "ltfiles: Finds keybinds that use a command for the given regex"
              ;; pull out keymap early so it searches a broader set
              ;; reading keymap inside a command or input narrows visible keys
              :exec (partial find-command-keybindings @keyboard/key-map)})

(comment
  (search-keybindings "eval.custom" @keyboard/key-map)
  (keyboard/cmd->current-binding :ltfiles.tab-open-current-url)
  (->> @keyboard/key-map vals (take 5)))
