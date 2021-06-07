(ns peanuts.macros
  (:require
    #?(:cljs [cljs.pprint :refer [pprint]]
       :clj  [clojure.pprint :refer [pprint]])
    [cljs.env :as env]
    [clojure.string :as string]))

(defmacro assoc-component-state [component key value]
  `(do (set! (.. ~component -state ~key) ~value)
       (-> ~component (.setState (.. ~component -state)))))

(defmacro defcard-ide
  ([n s ide [_ fn-args & fn-body] args opts]
   `(devcards.core/defcard-rg
      ~n
      ~s
      (~'fn ~fn-args
        [:> ~ide
         {:default-input ~(string/join (map #(with-out-str (pprint %)) fn-body))}])
      ~args ~opts))
  ([n s ide f args]
   `(defcard-ide ~n ~s ~ide ~f ~args {}))
  ([n s ide f]
   `(defcard-ide ~n ~s ~ide ~f nil))
  ([n ide f]
   `(defcard-ide ~n nil ~ide ~f)))

(defmacro analyzer-state [[_ ns-sym]]
  `'~(get-in @env/*compiler* [:cljs.analyzer/namespaces ns-sym]))