(defproject webapp1 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.5.1"]
		 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [http-kit "2.1.10"]
                 [cheshire "5.2.0"]
                 [org.clojure/clojurescript "0.0-2014"]
                 [com.cemerick/austin "0.1.3"]]
  :profiles {:dev {:repl-options {:init-ns user}
                   :plugins [[com.cemerick/austin "0.1.0"]
                             [lein-cljsbuild "0.3.2"]]
                   :cljsbuild {:builds [
                                        {
                                         :source-paths ["src-cljs"]
                                         :compiler
                                         {:output-to "app.js"
                                          :optimizations :simple
                                          :pretty-print true}}
                                        ]}}})
