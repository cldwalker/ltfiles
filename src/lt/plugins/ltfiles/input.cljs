(ns lt.plugins.ltfiles.input
  "Generic input, thanks to https://github.com/kuznicki-me/gitlight/blob/master/src/lt/plugins/gitlight/commit.cljs"
  (:require [lt.objs.popup :as popup]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui input [this]
  [:input.option {:type "text" :placeholder (bound this :placeholder)}]
  ;; this is a hack to get at the input value on submit
  :keyup (fn [e]
           (this-as me
                    (swap! this assoc :input-value (dom/val me)))))

(object/object* ::basic-input
                :tags #{:basic-input}
                :init (fn [this opts]
                        (input this)))

(defn ->input [attrs]
  (doto (object/create ::basic-input)
      (object/merge! attrs)))

(def url-input (->input {:placeholder "URL"}))

;; TODO: focus should be on input, not cancel
;; autofocus nor tabindex work
(defn popup [input-obj action-fn & {:as opts}]
  (popup/popup! {:header  (or (:header opts) "Enter value")
                 :body (input input-obj)
                 :buttons [{:label "Submit"
                            :action (fn []
                                      ;; why can't we just read from the input elem here?
                                      (action-fn (-> input-obj deref :input-value))) }
                           {:label "Cancel"}]}))

(comment
  (do
    (popup url-input #(prn "SUBMIT" %)
           :header "Enter url")
    (.focus (-> @basic-input :content)))
  )
