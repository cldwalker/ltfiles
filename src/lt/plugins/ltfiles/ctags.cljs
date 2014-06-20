(ns lt.plugins.ltfiles.ctags
  "Builds on the ctags plugin"
  (:require [lt.plugins.ctags :as ctags]
            [lt.plugins.ltfiles.selector :as selector]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]))

(def token-selector
  (selector/selector {:items (fn []
                               (->> @ctags/ctags
                                    :ctags
                                    vals
                                    (mapcat identity)
                                    (map #(update-in % [:token] name))
                                    (sort-by :token)))
                      :key :token
                      :placeholder "token"}))

(cmd/command {:command :ltfiles.jump-to-ctag
              :desc "ltfiles: Select a ctag token from a ctags file"
              :options token-selector
              :exec (fn [selection]
                      (ctags/lookup-tag (pool/last-active) selection))})
