(ns lt.plugins.ltfiles.search
 (:require [lt.objs.search :as search]
           [lt.object :as object]
           [lt.util.dom :as dom]
           [lt.objs.command :as cmd]
           [lt.plugins.ltfiles.util :as util]))

(defmethod search/location "<file>" [_]
  [(util/current-file)])

(defmethod search/location "<folder>" [_]
  [(util/current-folder)])

(defn set-location [this v]
  (dom/val (dom/$ :input.loc (object/->content this)) v))

(defn search-current-folder []
  (set-location search/searcher "<folder>")
  (cmd/exec! :searcher.show))

(cmd/command {:command :ltfiles.search-current-folder
              :desc "Searches current folder"
              :exec search-current-folder})

(defn search-current-file []
  (set-location search/searcher "<file>")
  (cmd/exec! :searcher.show))

(cmd/command {:command :ltfiles.search-current-file
              :desc "Searches current file"
              :exec search-current-file})
