(ns lt.plugins.ltfiles.clojure
  (:require [lt.plugins.ltfiles.util :as util]
            [lt.objs.command :as cmd]
            [lt.objs.find :as find]))

(defn find-next-clojure-word []
  (let [word (re-find #"[a-zA-Z-!?_:]+" (util/current-word))]
    (js/CodeMirror.commands.find (find/current-ed) word)
    (js/CodeMirror.commands.findNext (lt.objs.find/current-ed) false)))

(cmd/command {:command :ltfiles.find-next-clojure-word
              :desc "ltfiles: Finds next clojure word"
              :exec find-next-clojure-word})
