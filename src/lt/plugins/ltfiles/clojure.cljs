(ns lt.plugins.ltfiles.clojure
  (:require [lt.plugins.ltfiles.util :as util]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.find :as find]))

;; consider passing regex to current-word so regex is cursor aware
;; e.g. highlight command of cmd/command
(defn find-next-clojure-word []
  (let [word (re-find #"[a-zA-Z-!?/_>:\.]+" (util/current-word))]
    (find/set-val find/bar word) ;; necessary for find.next to work
    (object/raise find/bar :search! word)))

(cmd/command {:command :ltfiles.find-next-clojure-word
              :desc "ltfiles: Finds next clojure word"
              :exec find-next-clojure-word})
