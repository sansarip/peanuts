(defproject peanuts "0.1.0"
  :description "Packing peanut macros for Reagent/Re-frame Form-1 components"
  :url "https://github.com/sansarip/peanuts"
  :source-paths ["src/cljc"]
  :test-paths ["test/cljc"]
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/test.check "1.0.0"]]
  :repl-options {:init-ns peanuts.core})
