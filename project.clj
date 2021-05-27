(defproject peanuts "0.4.3"
  :description "Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions"
  :url "https://github.com/sansarip/peanuts"
  :signing {:gpg-key "pehrans@gmail.com"}
  :source-paths ["src/cljc" "src/cljs"]
  :test-paths ["test/cljc"]
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/test.check "1.0.0"]]
  :repl-options {:init-ns peanuts.core}
  :profiles {:dev {:source-paths ["dev/cljc"]}})
