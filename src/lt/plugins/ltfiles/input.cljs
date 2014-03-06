(ns lt.plugins.ltfiles.input
  "Generic input, thanks to https://github.com/kuznicki-me/gitlight/blob/master/src/lt/plugins/gitlight/commit.cljs"
  (:require [lt.objs.popup :as popup]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui input [this]
  [:input.option {:type "text" :placeholder (bound this :placeholder) :value (bound this #(str (:value %)))}]
  :keyup (fn [e]
           (this-as me
                    (println "input: " (dom/val me)))))

(object/object* ::basic-input
                :tags #{:basic-input}
                :commit (atom nil)
                :init (fn [this opts]
                        (input this)))

(defn ->input [attrs]
  (doto (object/create ::basic-input)
      (object/merge! attrs)))

(def basic-input (->input {:placeholder "todo"}))


(comment
  ;; TODO
  (popup/popup! {:header  "Enter something"
                 :body (input basic-input)
                 :buttons [{:label "Submit"
                            :action (fn []
                                      (prn "SUBMIT"))}
                           {:label "Cancel"
                            :action (fn [] (prn "CANCEL"))}]})
  )
