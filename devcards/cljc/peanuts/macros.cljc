(ns peanuts.macros
  (:require
    [clojure.pprint :refer [pprint]]
    [cljstache.core :refer [render]]))

(defmacro defcard-rg+
  ([n s f args opts]
   (let [ds (render "{{#s}}`{{&s}} \uD83D\uDC47`\n\n{{/s}}```clojure\n{{&f}}\n```" {:s s :f (with-out-str (pprint f))})]
     `(devcards.core/defcard-rg ~n ~ds ~f ~args ~opts)))
  ([n s f args]
   `(defcard-rg+ ~n ~s ~f ~args {}))
  ([n s f]
   `(defcard-rg+ ~n ~s ~f nil))
  ([n f]
   `(defcard-rg+ ~n nil ~f)))