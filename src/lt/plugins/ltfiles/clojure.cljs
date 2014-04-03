(ns lt.plugins.ltfiles.clojure
  (:require [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clojure]
            [lt.objs.find :as find]))

(defn current-word []
  (:string (clojure/find-symbol-at-cursor (pool/last-active))))

(defn find-next-clojure-word []
  (let [word (current-word)]
    (find/set-val find/bar word) ;; necessary for find.next to work
    (object/raise find/bar :search! word)))

(cmd/command {:command :ltfiles.find-next-clojure-word
              :desc "ltfiles: Finds next clojure word"
              :exec find-next-clojure-word})
