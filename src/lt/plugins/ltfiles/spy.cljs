(ns lt.plugins.ltfiles.spy
  "Spy on functions with ease"
  (:require [goog.object :as object]
            [clojure.string]))

;; from http://stackoverflow.com/questions/16656481/how-can-i-get-the-clojurescript-namespace-i-am-in-from-within-a-clojurescript-pr
(defn ->ns [namespace]
  (reduce (fn [ns n] (aget ns n))
          js/window
          (clojure.string/split namespace #"\.")))

(defn ns-fns [namespace]
  (->> (object/getKeys namespace)
       js->clj
       (filter #(fn? (aget namespace %)))))

(def spies (atom {}))

(defn ->spy [f fname]
  (fn [& args]
    (println (str "ARGUMENTS for " fname ": " (pr-str args)))
    (apply f args)))

(defn unspy
  "Unsets spying and resets fn back to original."
  [namespace fname]
  (aset namespace fname (get-in @spies [namespace fname])))

(defn spy
  "Spies on a given fn. By default prints args"
  [namespace fname]
  (let [f (aget namespace fname)]
    (swap! spies update-in [namespace fname] (constantly f))
    (aset namespace fname (->spy f fname))))


(comment
  (aget lt.plugins.ltfiles.spy "ns_fns")
  (unspy lt.plugins.ltfiles.spy "some_dude")
  )
