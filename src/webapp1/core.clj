;;; from timothy baldridge's talk clojure/async

(require 'cljs.repl.browser)

(cemerick.piggieback/cljs-repl
  :repl-env (cljs.repl.browser/repl-env :port 9000))

(ns webapp1.core
  (:require [cljs.core.async :refer [chan put! take! timeout] :as async]
            [clojure.walk :refer [prewalk]]
            [goog.net.XhrIo])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn http-get [url]
  (let [c (chan 1)]
    (goog.net.XhrIo/send url (fn [e]
                               (->> e
                                    .-target
                                    .getResponseJson
                                    js->clj
                                    fixup-keys
                                    (put! c))))
    c))
(js/alert "clojure")

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
