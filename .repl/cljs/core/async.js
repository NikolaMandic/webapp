// Compiled by ClojureScript 0.0-2014
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9786 = (function (f,fn_handler,meta9787){
this.f = f;
this.fn_handler = fn_handler;
this.meta9787 = meta9787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9786.cljs$lang$type = true;
cljs.core.async.t9786.cljs$lang$ctorStr = "cljs.core.async/t9786";
cljs.core.async.t9786.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9786");
});
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9788){var self__ = this;
var _9788__$1 = this;return self__.meta9787;
});
cljs.core.async.t9786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9788,meta9787__$1){var self__ = this;
var _9788__$1 = this;return (new cljs.core.async.t9786(self__.f,self__.fn_handler,meta9787__$1));
});
cljs.core.async.__GT_t9786 = (function __GT_t9786(f__$1,fn_handler__$1,meta9787){return (new cljs.core.async.t9786(f__$1,fn_handler__$1,meta9787));
});
}
return (new cljs.core.async.t9786(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9790 = buff;if(G__9790)
{var bit__5395__auto__ = null;if(cljs.core.truth_((function (){var or__4777__auto__ = bit__5395__auto__;if(cljs.core.truth_(or__4777__auto__))
{return or__4777__auto__;
} else
{return G__9790.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9790.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9790);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9791 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9791);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9791);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4768__auto__ = ret;if(cljs.core.truth_(and__4768__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4768__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5540__auto___9792 = n;var x_9793 = 0;while(true){
if((x_9793 < n__5540__auto___9792))
{(a[x_9793] = 0);
{
var G__9794 = (x_9793 + 1);
x_9793 = G__9794;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9795 = (i + 1);
i = G__9795;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9799 = (function (flag,alt_flag,meta9800){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9800 = meta9800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9799.cljs$lang$type = true;
cljs.core.async.t9799.cljs$lang$ctorStr = "cljs.core.async/t9799";
cljs.core.async.t9799.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9799");
});
cljs.core.async.t9799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9801){var self__ = this;
var _9801__$1 = this;return self__.meta9800;
});
cljs.core.async.t9799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9801,meta9800__$1){var self__ = this;
var _9801__$1 = this;return (new cljs.core.async.t9799(self__.flag,self__.alt_flag,meta9800__$1));
});
cljs.core.async.__GT_t9799 = (function __GT_t9799(flag__$1,alt_flag__$1,meta9800){return (new cljs.core.async.t9799(flag__$1,alt_flag__$1,meta9800));
});
}
return (new cljs.core.async.t9799(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9805 = (function (cb,flag,alt_handler,meta9806){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9806 = meta9806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9805.cljs$lang$type = true;
cljs.core.async.t9805.cljs$lang$ctorStr = "cljs.core.async/t9805";
cljs.core.async.t9805.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9805");
});
cljs.core.async.t9805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9807){var self__ = this;
var _9807__$1 = this;return self__.meta9806;
});
cljs.core.async.t9805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9807,meta9806__$1){var self__ = this;
var _9807__$1 = this;return (new cljs.core.async.t9805(self__.cb,self__.flag,self__.alt_handler,meta9806__$1));
});
cljs.core.async.__GT_t9805 = (function __GT_t9805(cb__$1,flag__$1,alt_handler__$1,meta9806){return (new cljs.core.async.t9805(cb__$1,flag__$1,alt_handler__$1,meta9806));
});
}
return (new cljs.core.async.t9805(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9808_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__9808_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__4777__auto__ = wport;if(cljs.core.truth_(or__4777__auto__))
{return or__4777__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__9809 = (i + 1);
i = G__9809;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4777__auto__ = ret;if(cljs.core.truth_(or__4777__auto__))
{return or__4777__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4768__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4768__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4768__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9810){var map__9812 = p__9810;var map__9812__$1 = ((cljs.core.seq_QMARK_.call(null,map__9812))?cljs.core.apply.call(null,cljs.core.hash_map,map__9812):map__9812);var opts = map__9812__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9810 = null;if (arguments.length > 1) {
  p__9810 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9810);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9813){
var ports = cljs.core.first(arglist__9813);
var p__9810 = cljs.core.rest(arglist__9813);
return alts_BANG___delegate(ports,p__9810);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9821 = (function (ch,f,map_LT_,meta9822){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9822 = meta9822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9821.cljs$lang$type = true;
cljs.core.async.t9821.cljs$lang$ctorStr = "cljs.core.async/t9821";
cljs.core.async.t9821.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9821");
});
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9824 = (function (fn1,_,meta9822,ch,f,map_LT_,meta9825){
this.fn1 = fn1;
this._ = _;
this.meta9822 = meta9822;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9825 = meta9825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9824.cljs$lang$type = true;
cljs.core.async.t9824.cljs$lang$ctorStr = "cljs.core.async/t9824";
cljs.core.async.t9824.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9824");
});
cljs.core.async.t9824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9824.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9814_SHARP_){return f1.call(null,(((p1__9814_SHARP_ == null))?null:self__.f.call(null,p1__9814_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9826){var self__ = this;
var _9826__$1 = this;return self__.meta9825;
});
cljs.core.async.t9824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9826,meta9825__$1){var self__ = this;
var _9826__$1 = this;return (new cljs.core.async.t9824(self__.fn1,self__._,self__.meta9822,self__.ch,self__.f,self__.map_LT_,meta9825__$1));
});
cljs.core.async.__GT_t9824 = (function __GT_t9824(fn1__$1,___$2,meta9822__$1,ch__$2,f__$2,map_LT___$2,meta9825){return (new cljs.core.async.t9824(fn1__$1,___$2,meta9822__$1,ch__$2,f__$2,map_LT___$2,meta9825));
});
}
return (new cljs.core.async.t9824(fn1,___$1,self__.meta9822,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4768__auto__ = ret;if(cljs.core.truth_(and__4768__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4768__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9823){var self__ = this;
var _9823__$1 = this;return self__.meta9822;
});
cljs.core.async.t9821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9823,meta9822__$1){var self__ = this;
var _9823__$1 = this;return (new cljs.core.async.t9821(self__.ch,self__.f,self__.map_LT_,meta9822__$1));
});
cljs.core.async.__GT_t9821 = (function __GT_t9821(ch__$1,f__$1,map_LT___$1,meta9822){return (new cljs.core.async.t9821(ch__$1,f__$1,map_LT___$1,meta9822));
});
}
return (new cljs.core.async.t9821(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9830 = (function (ch,f,map_GT_,meta9831){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9831 = meta9831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9830.cljs$lang$type = true;
cljs.core.async.t9830.cljs$lang$ctorStr = "cljs.core.async/t9830";
cljs.core.async.t9830.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9830");
});
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9832){var self__ = this;
var _9832__$1 = this;return self__.meta9831;
});
cljs.core.async.t9830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9832,meta9831__$1){var self__ = this;
var _9832__$1 = this;return (new cljs.core.async.t9830(self__.ch,self__.f,self__.map_GT_,meta9831__$1));
});
cljs.core.async.__GT_t9830 = (function __GT_t9830(ch__$1,f__$1,map_GT___$1,meta9831){return (new cljs.core.async.t9830(ch__$1,f__$1,map_GT___$1,meta9831));
});
}
return (new cljs.core.async.t9830(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9836 = (function (ch,p,filter_GT_,meta9837){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9837 = meta9837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9836.cljs$lang$type = true;
cljs.core.async.t9836.cljs$lang$ctorStr = "cljs.core.async/t9836";
cljs.core.async.t9836.cljs$lang$ctorPrWriter = (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t9836");
});
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9838){var self__ = this;
var _9838__$1 = this;return self__.meta9837;
});
cljs.core.async.t9836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9838,meta9837__$1){var self__ = this;
var _9838__$1 = this;return (new cljs.core.async.t9836(self__.ch,self__.p,self__.filter_GT_,meta9837__$1));
});
cljs.core.async.__GT_t9836 = (function __GT_t9836(ch__$1,p__$1,filter_GT___$1,meta9837){return (new cljs.core.async.t9836(ch__$1,p__$1,filter_GT___$1,meta9837));
});
}
return (new cljs.core.async.t9836(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___9921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_9900){var state_val_9901 = (state_9900[1]);if((state_val_9901 === 1))
{var state_9900__$1 = state_9900;var statearr_9902_9922 = state_9900__$1;(statearr_9902_9922[2] = null);
(statearr_9902_9922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 2))
{var state_9900__$1 = state_9900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9900__$1,4,ch);
} else
{if((state_val_9901 === 3))
{var inst_9898 = (state_9900[2]);var state_9900__$1 = state_9900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9900__$1,inst_9898);
} else
{if((state_val_9901 === 4))
{var inst_9882 = (state_9900[7]);var inst_9882__$1 = (state_9900[2]);var inst_9883 = (inst_9882__$1 == null);var state_9900__$1 = (function (){var statearr_9903 = state_9900;(statearr_9903[7] = inst_9882__$1);
return statearr_9903;
})();if(cljs.core.truth_(inst_9883))
{var statearr_9904_9923 = state_9900__$1;(statearr_9904_9923[1] = 5);
} else
{var statearr_9905_9924 = state_9900__$1;(statearr_9905_9924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 5))
{var inst_9885 = cljs.core.async.close_BANG_.call(null,out);var state_9900__$1 = state_9900;var statearr_9906_9925 = state_9900__$1;(statearr_9906_9925[2] = inst_9885);
(statearr_9906_9925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 6))
{var inst_9882 = (state_9900[7]);var inst_9887 = p.call(null,inst_9882);var state_9900__$1 = state_9900;if(cljs.core.truth_(inst_9887))
{var statearr_9907_9926 = state_9900__$1;(statearr_9907_9926[1] = 8);
} else
{var statearr_9908_9927 = state_9900__$1;(statearr_9908_9927[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 7))
{var inst_9896 = (state_9900[2]);var state_9900__$1 = state_9900;var statearr_9909_9928 = state_9900__$1;(statearr_9909_9928[2] = inst_9896);
(statearr_9909_9928[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 8))
{var inst_9882 = (state_9900[7]);var state_9900__$1 = state_9900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9900__$1,11,out,inst_9882);
} else
{if((state_val_9901 === 9))
{var state_9900__$1 = state_9900;var statearr_9910_9929 = state_9900__$1;(statearr_9910_9929[2] = null);
(statearr_9910_9929[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 10))
{var inst_9893 = (state_9900[2]);var state_9900__$1 = (function (){var statearr_9911 = state_9900;(statearr_9911[8] = inst_9893);
return statearr_9911;
})();var statearr_9912_9930 = state_9900__$1;(statearr_9912_9930[2] = null);
(statearr_9912_9930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9901 === 11))
{var inst_9890 = (state_9900[2]);var state_9900__$1 = state_9900;var statearr_9913_9931 = state_9900__$1;(statearr_9913_9931[2] = inst_9890);
(statearr_9913_9931[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_9917 = (new Array(9));(statearr_9917[0] = state_machine__7436__auto__);
(statearr_9917[1] = 1);
return statearr_9917;
});
var state_machine__7436__auto____1 = (function (state_9900){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_9900);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e9918){if((e9918 instanceof Object))
{var ex__7439__auto__ = e9918;var statearr_9919_9932 = state_9900;(statearr_9919_9932[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9933 = state_9900;
state_9900 = G__9933;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_9900){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_9900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_9920 = f__7506__auto__.call(null);(statearr_9920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___9921);
return statearr_9920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7505__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10085){var state_val_10086 = (state_10085[1]);if((state_val_10086 === 1))
{var state_10085__$1 = state_10085;var statearr_10087_10124 = state_10085__$1;(statearr_10087_10124[2] = null);
(statearr_10087_10124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 2))
{var state_10085__$1 = state_10085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10085__$1,4,in$);
} else
{if((state_val_10086 === 3))
{var inst_10083 = (state_10085[2]);var state_10085__$1 = state_10085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10085__$1,inst_10083);
} else
{if((state_val_10086 === 4))
{var inst_10031 = (state_10085[7]);var inst_10031__$1 = (state_10085[2]);var inst_10032 = (inst_10031__$1 == null);var state_10085__$1 = (function (){var statearr_10088 = state_10085;(statearr_10088[7] = inst_10031__$1);
return statearr_10088;
})();if(cljs.core.truth_(inst_10032))
{var statearr_10089_10125 = state_10085__$1;(statearr_10089_10125[1] = 5);
} else
{var statearr_10090_10126 = state_10085__$1;(statearr_10090_10126[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 5))
{var inst_10034 = cljs.core.async.close_BANG_.call(null,out);var state_10085__$1 = state_10085;var statearr_10091_10127 = state_10085__$1;(statearr_10091_10127[2] = inst_10034);
(statearr_10091_10127[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 6))
{var inst_10031 = (state_10085[7]);var inst_10036 = f.call(null,inst_10031);var inst_10041 = cljs.core.seq.call(null,inst_10036);var inst_10042 = inst_10041;var inst_10043 = null;var inst_10044 = 0;var inst_10045 = 0;var state_10085__$1 = (function (){var statearr_10092 = state_10085;(statearr_10092[8] = inst_10042);
(statearr_10092[9] = inst_10043);
(statearr_10092[10] = inst_10045);
(statearr_10092[11] = inst_10044);
return statearr_10092;
})();var statearr_10093_10128 = state_10085__$1;(statearr_10093_10128[2] = null);
(statearr_10093_10128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 7))
{var inst_10081 = (state_10085[2]);var state_10085__$1 = state_10085;var statearr_10094_10129 = state_10085__$1;(statearr_10094_10129[2] = inst_10081);
(statearr_10094_10129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 8))
{var inst_10045 = (state_10085[10]);var inst_10044 = (state_10085[11]);var inst_10047 = (inst_10045 < inst_10044);var inst_10048 = inst_10047;var state_10085__$1 = state_10085;if(cljs.core.truth_(inst_10048))
{var statearr_10095_10130 = state_10085__$1;(statearr_10095_10130[1] = 10);
} else
{var statearr_10096_10131 = state_10085__$1;(statearr_10096_10131[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 9))
{var inst_10078 = (state_10085[2]);var state_10085__$1 = (function (){var statearr_10097 = state_10085;(statearr_10097[12] = inst_10078);
return statearr_10097;
})();var statearr_10098_10132 = state_10085__$1;(statearr_10098_10132[2] = null);
(statearr_10098_10132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 10))
{var inst_10043 = (state_10085[9]);var inst_10045 = (state_10085[10]);var inst_10050 = cljs.core._nth.call(null,inst_10043,inst_10045);var state_10085__$1 = state_10085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10085__$1,13,out,inst_10050);
} else
{if((state_val_10086 === 11))
{var inst_10042 = (state_10085[8]);var inst_10056 = (state_10085[13]);var inst_10056__$1 = cljs.core.seq.call(null,inst_10042);var state_10085__$1 = (function (){var statearr_10102 = state_10085;(statearr_10102[13] = inst_10056__$1);
return statearr_10102;
})();if(inst_10056__$1)
{var statearr_10103_10133 = state_10085__$1;(statearr_10103_10133[1] = 14);
} else
{var statearr_10104_10134 = state_10085__$1;(statearr_10104_10134[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 12))
{var inst_10076 = (state_10085[2]);var state_10085__$1 = state_10085;var statearr_10105_10135 = state_10085__$1;(statearr_10105_10135[2] = inst_10076);
(statearr_10105_10135[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 13))
{var inst_10042 = (state_10085[8]);var inst_10043 = (state_10085[9]);var inst_10045 = (state_10085[10]);var inst_10044 = (state_10085[11]);var inst_10052 = (state_10085[2]);var inst_10053 = (inst_10045 + 1);var tmp10099 = inst_10042;var tmp10100 = inst_10043;var tmp10101 = inst_10044;var inst_10042__$1 = tmp10099;var inst_10043__$1 = tmp10100;var inst_10044__$1 = tmp10101;var inst_10045__$1 = inst_10053;var state_10085__$1 = (function (){var statearr_10106 = state_10085;(statearr_10106[8] = inst_10042__$1);
(statearr_10106[9] = inst_10043__$1);
(statearr_10106[14] = inst_10052);
(statearr_10106[10] = inst_10045__$1);
(statearr_10106[11] = inst_10044__$1);
return statearr_10106;
})();var statearr_10107_10136 = state_10085__$1;(statearr_10107_10136[2] = null);
(statearr_10107_10136[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 14))
{var inst_10056 = (state_10085[13]);var inst_10058 = cljs.core.chunked_seq_QMARK_.call(null,inst_10056);var state_10085__$1 = state_10085;if(inst_10058)
{var statearr_10108_10137 = state_10085__$1;(statearr_10108_10137[1] = 17);
} else
{var statearr_10109_10138 = state_10085__$1;(statearr_10109_10138[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 15))
{var state_10085__$1 = state_10085;var statearr_10110_10139 = state_10085__$1;(statearr_10110_10139[2] = null);
(statearr_10110_10139[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 16))
{var inst_10074 = (state_10085[2]);var state_10085__$1 = state_10085;var statearr_10111_10140 = state_10085__$1;(statearr_10111_10140[2] = inst_10074);
(statearr_10111_10140[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 17))
{var inst_10056 = (state_10085[13]);var inst_10060 = cljs.core.chunk_first.call(null,inst_10056);var inst_10061 = cljs.core.chunk_rest.call(null,inst_10056);var inst_10062 = cljs.core.count.call(null,inst_10060);var inst_10042 = inst_10061;var inst_10043 = inst_10060;var inst_10044 = inst_10062;var inst_10045 = 0;var state_10085__$1 = (function (){var statearr_10112 = state_10085;(statearr_10112[8] = inst_10042);
(statearr_10112[9] = inst_10043);
(statearr_10112[10] = inst_10045);
(statearr_10112[11] = inst_10044);
return statearr_10112;
})();var statearr_10113_10141 = state_10085__$1;(statearr_10113_10141[2] = null);
(statearr_10113_10141[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 18))
{var inst_10056 = (state_10085[13]);var inst_10065 = cljs.core.first.call(null,inst_10056);var state_10085__$1 = state_10085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10085__$1,20,out,inst_10065);
} else
{if((state_val_10086 === 19))
{var inst_10071 = (state_10085[2]);var state_10085__$1 = state_10085;var statearr_10114_10142 = state_10085__$1;(statearr_10114_10142[2] = inst_10071);
(statearr_10114_10142[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10086 === 20))
{var inst_10056 = (state_10085[13]);var inst_10067 = (state_10085[2]);var inst_10068 = cljs.core.next.call(null,inst_10056);var inst_10042 = inst_10068;var inst_10043 = null;var inst_10044 = 0;var inst_10045 = 0;var state_10085__$1 = (function (){var statearr_10115 = state_10085;(statearr_10115[8] = inst_10042);
(statearr_10115[9] = inst_10043);
(statearr_10115[10] = inst_10045);
(statearr_10115[11] = inst_10044);
(statearr_10115[15] = inst_10067);
return statearr_10115;
})();var statearr_10116_10143 = state_10085__$1;(statearr_10116_10143[2] = null);
(statearr_10116_10143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10120 = (new Array(16));(statearr_10120[0] = state_machine__7436__auto__);
(statearr_10120[1] = 1);
return statearr_10120;
});
var state_machine__7436__auto____1 = (function (state_10085){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10085);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10121){if((e10121 instanceof Object))
{var ex__7439__auto__ = e10121;var statearr_10122_10144 = state_10085;(statearr_10122_10144[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10145 = state_10085;
state_10085 = G__10145;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10085){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10123 = f__7506__auto__.call(null);(statearr_10123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto__);
return statearr_10123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return c__7505__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7505__auto___10226 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10205){var state_val_10206 = (state_10205[1]);if((state_val_10206 === 1))
{var state_10205__$1 = state_10205;var statearr_10207_10227 = state_10205__$1;(statearr_10207_10227[2] = null);
(statearr_10207_10227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 2))
{var state_10205__$1 = state_10205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10205__$1,4,from);
} else
{if((state_val_10206 === 3))
{var inst_10203 = (state_10205[2]);var state_10205__$1 = state_10205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10205__$1,inst_10203);
} else
{if((state_val_10206 === 4))
{var inst_10188 = (state_10205[7]);var inst_10188__$1 = (state_10205[2]);var inst_10189 = (inst_10188__$1 == null);var state_10205__$1 = (function (){var statearr_10208 = state_10205;(statearr_10208[7] = inst_10188__$1);
return statearr_10208;
})();if(cljs.core.truth_(inst_10189))
{var statearr_10209_10228 = state_10205__$1;(statearr_10209_10228[1] = 5);
} else
{var statearr_10210_10229 = state_10205__$1;(statearr_10210_10229[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 5))
{var state_10205__$1 = state_10205;if(cljs.core.truth_(close_QMARK_))
{var statearr_10211_10230 = state_10205__$1;(statearr_10211_10230[1] = 8);
} else
{var statearr_10212_10231 = state_10205__$1;(statearr_10212_10231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 6))
{var inst_10188 = (state_10205[7]);var state_10205__$1 = state_10205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10205__$1,11,to,inst_10188);
} else
{if((state_val_10206 === 7))
{var inst_10201 = (state_10205[2]);var state_10205__$1 = state_10205;var statearr_10213_10232 = state_10205__$1;(statearr_10213_10232[2] = inst_10201);
(statearr_10213_10232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 8))
{var inst_10192 = cljs.core.async.close_BANG_.call(null,to);var state_10205__$1 = state_10205;var statearr_10214_10233 = state_10205__$1;(statearr_10214_10233[2] = inst_10192);
(statearr_10214_10233[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 9))
{var state_10205__$1 = state_10205;var statearr_10215_10234 = state_10205__$1;(statearr_10215_10234[2] = null);
(statearr_10215_10234[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 10))
{var inst_10195 = (state_10205[2]);var state_10205__$1 = state_10205;var statearr_10216_10235 = state_10205__$1;(statearr_10216_10235[2] = inst_10195);
(statearr_10216_10235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10206 === 11))
{var inst_10198 = (state_10205[2]);var state_10205__$1 = (function (){var statearr_10217 = state_10205;(statearr_10217[8] = inst_10198);
return statearr_10217;
})();var statearr_10218_10236 = state_10205__$1;(statearr_10218_10236[2] = null);
(statearr_10218_10236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10222 = (new Array(9));(statearr_10222[0] = state_machine__7436__auto__);
(statearr_10222[1] = 1);
return statearr_10222;
});
var state_machine__7436__auto____1 = (function (state_10205){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10205);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10223){if((e10223 instanceof Object))
{var ex__7439__auto__ = e10223;var statearr_10224_10237 = state_10205;(statearr_10224_10237[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10238 = state_10205;
state_10205 = G__10238;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10205){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10225 = f__7506__auto__.call(null);(statearr_10225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___10226);
return statearr_10225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7505__auto___10325 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10303){var state_val_10304 = (state_10303[1]);if((state_val_10304 === 1))
{var state_10303__$1 = state_10303;var statearr_10305_10326 = state_10303__$1;(statearr_10305_10326[2] = null);
(statearr_10305_10326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 2))
{var state_10303__$1 = state_10303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10303__$1,4,ch);
} else
{if((state_val_10304 === 3))
{var inst_10301 = (state_10303[2]);var state_10303__$1 = state_10303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10303__$1,inst_10301);
} else
{if((state_val_10304 === 4))
{var inst_10284 = (state_10303[7]);var inst_10284__$1 = (state_10303[2]);var inst_10285 = (inst_10284__$1 == null);var state_10303__$1 = (function (){var statearr_10306 = state_10303;(statearr_10306[7] = inst_10284__$1);
return statearr_10306;
})();if(cljs.core.truth_(inst_10285))
{var statearr_10307_10327 = state_10303__$1;(statearr_10307_10327[1] = 5);
} else
{var statearr_10308_10328 = state_10303__$1;(statearr_10308_10328[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 5))
{var inst_10287 = cljs.core.async.close_BANG_.call(null,tc);var inst_10288 = cljs.core.async.close_BANG_.call(null,fc);var state_10303__$1 = (function (){var statearr_10309 = state_10303;(statearr_10309[8] = inst_10287);
return statearr_10309;
})();var statearr_10310_10329 = state_10303__$1;(statearr_10310_10329[2] = inst_10288);
(statearr_10310_10329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 6))
{var inst_10284 = (state_10303[7]);var inst_10290 = p.call(null,inst_10284);var state_10303__$1 = state_10303;if(cljs.core.truth_(inst_10290))
{var statearr_10311_10330 = state_10303__$1;(statearr_10311_10330[1] = 9);
} else
{var statearr_10312_10331 = state_10303__$1;(statearr_10312_10331[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 7))
{var inst_10299 = (state_10303[2]);var state_10303__$1 = state_10303;var statearr_10313_10332 = state_10303__$1;(statearr_10313_10332[2] = inst_10299);
(statearr_10313_10332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 8))
{var inst_10296 = (state_10303[2]);var state_10303__$1 = (function (){var statearr_10314 = state_10303;(statearr_10314[9] = inst_10296);
return statearr_10314;
})();var statearr_10315_10333 = state_10303__$1;(statearr_10315_10333[2] = null);
(statearr_10315_10333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 9))
{var state_10303__$1 = state_10303;var statearr_10316_10334 = state_10303__$1;(statearr_10316_10334[2] = tc);
(statearr_10316_10334[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 10))
{var state_10303__$1 = state_10303;var statearr_10317_10335 = state_10303__$1;(statearr_10317_10335[2] = fc);
(statearr_10317_10335[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10304 === 11))
{var inst_10284 = (state_10303[7]);var inst_10294 = (state_10303[2]);var state_10303__$1 = state_10303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10303__$1,8,inst_10294,inst_10284);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10321 = (new Array(10));(statearr_10321[0] = state_machine__7436__auto__);
(statearr_10321[1] = 1);
return statearr_10321;
});
var state_machine__7436__auto____1 = (function (state_10303){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10303);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10322){if((e10322 instanceof Object))
{var ex__7439__auto__ = e10322;var statearr_10323_10336 = state_10303;(statearr_10323_10336[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10337 = state_10303;
state_10303 = G__10337;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10303){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10324 = f__7506__auto__.call(null);(statearr_10324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___10325);
return statearr_10324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7505__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10384){var state_val_10385 = (state_10384[1]);if((state_val_10385 === 7))
{var inst_10380 = (state_10384[2]);var state_10384__$1 = state_10384;var statearr_10386_10402 = state_10384__$1;(statearr_10386_10402[2] = inst_10380);
(statearr_10386_10402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 6))
{var inst_10373 = (state_10384[7]);var inst_10370 = (state_10384[8]);var inst_10377 = f.call(null,inst_10370,inst_10373);var inst_10370__$1 = inst_10377;var state_10384__$1 = (function (){var statearr_10387 = state_10384;(statearr_10387[8] = inst_10370__$1);
return statearr_10387;
})();var statearr_10388_10403 = state_10384__$1;(statearr_10388_10403[2] = null);
(statearr_10388_10403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 5))
{var inst_10370 = (state_10384[8]);var state_10384__$1 = state_10384;var statearr_10389_10404 = state_10384__$1;(statearr_10389_10404[2] = inst_10370);
(statearr_10389_10404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 4))
{var inst_10373 = (state_10384[7]);var inst_10373__$1 = (state_10384[2]);var inst_10374 = (inst_10373__$1 == null);var state_10384__$1 = (function (){var statearr_10390 = state_10384;(statearr_10390[7] = inst_10373__$1);
return statearr_10390;
})();if(cljs.core.truth_(inst_10374))
{var statearr_10391_10405 = state_10384__$1;(statearr_10391_10405[1] = 5);
} else
{var statearr_10392_10406 = state_10384__$1;(statearr_10392_10406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 3))
{var inst_10382 = (state_10384[2]);var state_10384__$1 = state_10384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10384__$1,inst_10382);
} else
{if((state_val_10385 === 2))
{var state_10384__$1 = state_10384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10384__$1,4,ch);
} else
{if((state_val_10385 === 1))
{var inst_10370 = init;var state_10384__$1 = (function (){var statearr_10393 = state_10384;(statearr_10393[8] = inst_10370);
return statearr_10393;
})();var statearr_10394_10407 = state_10384__$1;(statearr_10394_10407[2] = null);
(statearr_10394_10407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10398 = (new Array(9));(statearr_10398[0] = state_machine__7436__auto__);
(statearr_10398[1] = 1);
return statearr_10398;
});
var state_machine__7436__auto____1 = (function (state_10384){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10384);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10399){if((e10399 instanceof Object))
{var ex__7439__auto__ = e10399;var statearr_10400_10408 = state_10384;(statearr_10400_10408[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10409 = state_10384;
state_10384 = G__10409;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10384){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10401 = f__7506__auto__.call(null);(statearr_10401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto__);
return statearr_10401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return c__7505__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7505__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10471){var state_val_10472 = (state_10471[1]);if((state_val_10472 === 1))
{var inst_10451 = cljs.core.seq.call(null,coll);var inst_10452 = inst_10451;var state_10471__$1 = (function (){var statearr_10473 = state_10471;(statearr_10473[7] = inst_10452);
return statearr_10473;
})();var statearr_10474_10492 = state_10471__$1;(statearr_10474_10492[2] = null);
(statearr_10474_10492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 2))
{var inst_10452 = (state_10471[7]);var state_10471__$1 = state_10471;if(cljs.core.truth_(inst_10452))
{var statearr_10475_10493 = state_10471__$1;(statearr_10475_10493[1] = 4);
} else
{var statearr_10476_10494 = state_10471__$1;(statearr_10476_10494[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 3))
{var inst_10469 = (state_10471[2]);var state_10471__$1 = state_10471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10471__$1,inst_10469);
} else
{if((state_val_10472 === 4))
{var inst_10452 = (state_10471[7]);var inst_10455 = cljs.core.first.call(null,inst_10452);var state_10471__$1 = state_10471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10471__$1,7,ch,inst_10455);
} else
{if((state_val_10472 === 5))
{var state_10471__$1 = state_10471;if(cljs.core.truth_(close_QMARK_))
{var statearr_10477_10495 = state_10471__$1;(statearr_10477_10495[1] = 8);
} else
{var statearr_10478_10496 = state_10471__$1;(statearr_10478_10496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 6))
{var inst_10467 = (state_10471[2]);var state_10471__$1 = state_10471;var statearr_10479_10497 = state_10471__$1;(statearr_10479_10497[2] = inst_10467);
(statearr_10479_10497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 7))
{var inst_10452 = (state_10471[7]);var inst_10457 = (state_10471[2]);var inst_10458 = cljs.core.next.call(null,inst_10452);var inst_10452__$1 = inst_10458;var state_10471__$1 = (function (){var statearr_10480 = state_10471;(statearr_10480[7] = inst_10452__$1);
(statearr_10480[8] = inst_10457);
return statearr_10480;
})();var statearr_10481_10498 = state_10471__$1;(statearr_10481_10498[2] = null);
(statearr_10481_10498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 8))
{var inst_10462 = cljs.core.async.close_BANG_.call(null,ch);var state_10471__$1 = state_10471;var statearr_10482_10499 = state_10471__$1;(statearr_10482_10499[2] = inst_10462);
(statearr_10482_10499[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 9))
{var state_10471__$1 = state_10471;var statearr_10483_10500 = state_10471__$1;(statearr_10483_10500[2] = null);
(statearr_10483_10500[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10472 === 10))
{var inst_10465 = (state_10471[2]);var state_10471__$1 = state_10471;var statearr_10484_10501 = state_10471__$1;(statearr_10484_10501[2] = inst_10465);
(statearr_10484_10501[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10488 = (new Array(9));(statearr_10488[0] = state_machine__7436__auto__);
(statearr_10488[1] = 1);
return statearr_10488;
});
var state_machine__7436__auto____1 = (function (state_10471){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10471);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10489){if((e10489 instanceof Object))
{var ex__7439__auto__ = e10489;var statearr_10490_10502 = state_10471;(statearr_10490_10502[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10503 = state_10471;
state_10471 = G__10503;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10471){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10491 = f__7506__auto__.call(null);(statearr_10491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto__);
return statearr_10491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return c__7505__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4768__auto__ = _;if(and__4768__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4768__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5372__auto__ = (((_ == null))?null:_);return (function (){var or__4777__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10718 = (function (cs,ch,mult,meta10719){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10719 = meta10719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10718.cljs$lang$type = true;
cljs.core.async.t10718.cljs$lang$ctorStr = "cljs.core.async/t10718";
cljs.core.async.t10718.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t10718");
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10720){var self__ = this;
var _10720__$1 = this;return self__.meta10719;
});})(cs))
;
cljs.core.async.t10718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10720,meta10719__$1){var self__ = this;
var _10720__$1 = this;return (new cljs.core.async.t10718(self__.cs,self__.ch,self__.mult,meta10719__$1));
});})(cs))
;
cljs.core.async.__GT_t10718 = ((function (cs){
return (function __GT_t10718(cs__$1,ch__$1,mult__$1,meta10719){return (new cljs.core.async.t10718(cs__$1,ch__$1,mult__$1,meta10719));
});})(cs))
;
}
return (new cljs.core.async.t10718(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7505__auto___10932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_10850){var state_val_10851 = (state_10850[1]);if((state_val_10851 === 32))
{var inst_10799 = (state_10850[7]);var inst_10723 = (state_10850[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10850,31,Object,null,30);var inst_10806 = cljs.core.async.put_BANG_.call(null,inst_10799,inst_10723,done);var state_10850__$1 = state_10850;var statearr_10852_10933 = state_10850__$1;(statearr_10852_10933[2] = inst_10806);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 1))
{var state_10850__$1 = state_10850;var statearr_10853_10934 = state_10850__$1;(statearr_10853_10934[2] = null);
(statearr_10853_10934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 33))
{var inst_10812 = (state_10850[9]);var inst_10814 = cljs.core.chunked_seq_QMARK_.call(null,inst_10812);var state_10850__$1 = state_10850;if(inst_10814)
{var statearr_10854_10935 = state_10850__$1;(statearr_10854_10935[1] = 36);
} else
{var statearr_10855_10936 = state_10850__$1;(statearr_10855_10936[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 2))
{var state_10850__$1 = state_10850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10850__$1,4,ch);
} else
{if((state_val_10851 === 34))
{var state_10850__$1 = state_10850;var statearr_10856_10937 = state_10850__$1;(statearr_10856_10937[2] = null);
(statearr_10856_10937[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 3))
{var inst_10848 = (state_10850[2]);var state_10850__$1 = state_10850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10850__$1,inst_10848);
} else
{if((state_val_10851 === 35))
{var inst_10837 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10857_10938 = state_10850__$1;(statearr_10857_10938[2] = inst_10837);
(statearr_10857_10938[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 4))
{var inst_10723 = (state_10850[8]);var inst_10723__$1 = (state_10850[2]);var inst_10724 = (inst_10723__$1 == null);var state_10850__$1 = (function (){var statearr_10858 = state_10850;(statearr_10858[8] = inst_10723__$1);
return statearr_10858;
})();if(cljs.core.truth_(inst_10724))
{var statearr_10859_10939 = state_10850__$1;(statearr_10859_10939[1] = 5);
} else
{var statearr_10860_10940 = state_10850__$1;(statearr_10860_10940[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 36))
{var inst_10812 = (state_10850[9]);var inst_10816 = cljs.core.chunk_first.call(null,inst_10812);var inst_10817 = cljs.core.chunk_rest.call(null,inst_10812);var inst_10818 = cljs.core.count.call(null,inst_10816);var inst_10791 = inst_10817;var inst_10792 = inst_10816;var inst_10793 = inst_10818;var inst_10794 = 0;var state_10850__$1 = (function (){var statearr_10861 = state_10850;(statearr_10861[10] = inst_10794);
(statearr_10861[11] = inst_10793);
(statearr_10861[12] = inst_10792);
(statearr_10861[13] = inst_10791);
return statearr_10861;
})();var statearr_10862_10941 = state_10850__$1;(statearr_10862_10941[2] = null);
(statearr_10862_10941[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 5))
{var inst_10730 = cljs.core.deref.call(null,cs);var inst_10731 = cljs.core.seq.call(null,inst_10730);var inst_10732 = inst_10731;var inst_10733 = null;var inst_10734 = 0;var inst_10735 = 0;var state_10850__$1 = (function (){var statearr_10863 = state_10850;(statearr_10863[14] = inst_10735);
(statearr_10863[15] = inst_10734);
(statearr_10863[16] = inst_10732);
(statearr_10863[17] = inst_10733);
return statearr_10863;
})();var statearr_10864_10942 = state_10850__$1;(statearr_10864_10942[2] = null);
(statearr_10864_10942[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 37))
{var inst_10812 = (state_10850[9]);var inst_10821 = cljs.core.first.call(null,inst_10812);var state_10850__$1 = (function (){var statearr_10865 = state_10850;(statearr_10865[18] = inst_10821);
return statearr_10865;
})();var statearr_10866_10943 = state_10850__$1;(statearr_10866_10943[2] = null);
(statearr_10866_10943[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 6))
{var inst_10782 = cljs.core.deref.call(null,cs);var inst_10783 = cljs.core.keys.call(null,inst_10782);var inst_10784 = cljs.core.count.call(null,inst_10783);var inst_10785 = cljs.core.reset_BANG_.call(null,dctr,inst_10784);var inst_10790 = cljs.core.seq.call(null,inst_10783);var inst_10791 = inst_10790;var inst_10792 = null;var inst_10793 = 0;var inst_10794 = 0;var state_10850__$1 = (function (){var statearr_10867 = state_10850;(statearr_10867[19] = inst_10785);
(statearr_10867[10] = inst_10794);
(statearr_10867[11] = inst_10793);
(statearr_10867[12] = inst_10792);
(statearr_10867[13] = inst_10791);
return statearr_10867;
})();var statearr_10868_10944 = state_10850__$1;(statearr_10868_10944[2] = null);
(statearr_10868_10944[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 38))
{var inst_10834 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10869_10945 = state_10850__$1;(statearr_10869_10945[2] = inst_10834);
(statearr_10869_10945[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 7))
{var inst_10846 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10870_10946 = state_10850__$1;(statearr_10870_10946[2] = inst_10846);
(statearr_10870_10946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 39))
{var inst_10812 = (state_10850[9]);var inst_10830 = (state_10850[2]);var inst_10831 = cljs.core.next.call(null,inst_10812);var inst_10791 = inst_10831;var inst_10792 = null;var inst_10793 = 0;var inst_10794 = 0;var state_10850__$1 = (function (){var statearr_10871 = state_10850;(statearr_10871[20] = inst_10830);
(statearr_10871[10] = inst_10794);
(statearr_10871[11] = inst_10793);
(statearr_10871[12] = inst_10792);
(statearr_10871[13] = inst_10791);
return statearr_10871;
})();var statearr_10872_10947 = state_10850__$1;(statearr_10872_10947[2] = null);
(statearr_10872_10947[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 8))
{var inst_10735 = (state_10850[14]);var inst_10734 = (state_10850[15]);var inst_10737 = (inst_10735 < inst_10734);var inst_10738 = inst_10737;var state_10850__$1 = state_10850;if(cljs.core.truth_(inst_10738))
{var statearr_10873_10948 = state_10850__$1;(statearr_10873_10948[1] = 10);
} else
{var statearr_10874_10949 = state_10850__$1;(statearr_10874_10949[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 40))
{var inst_10821 = (state_10850[18]);var inst_10822 = (state_10850[2]);var inst_10823 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10824 = cljs.core.async.untap_STAR_.call(null,m,inst_10821);var state_10850__$1 = (function (){var statearr_10875 = state_10850;(statearr_10875[21] = inst_10823);
(statearr_10875[22] = inst_10822);
return statearr_10875;
})();var statearr_10876_10950 = state_10850__$1;(statearr_10876_10950[2] = inst_10824);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 9))
{var inst_10780 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10877_10951 = state_10850__$1;(statearr_10877_10951[2] = inst_10780);
(statearr_10877_10951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 41))
{var inst_10821 = (state_10850[18]);var inst_10723 = (state_10850[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10850,40,Object,null,39);var inst_10828 = cljs.core.async.put_BANG_.call(null,inst_10821,inst_10723,done);var state_10850__$1 = state_10850;var statearr_10878_10952 = state_10850__$1;(statearr_10878_10952[2] = inst_10828);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 10))
{var inst_10735 = (state_10850[14]);var inst_10733 = (state_10850[17]);var inst_10741 = cljs.core._nth.call(null,inst_10733,inst_10735);var inst_10742 = cljs.core.nth.call(null,inst_10741,0,null);var inst_10743 = cljs.core.nth.call(null,inst_10741,1,null);var state_10850__$1 = (function (){var statearr_10879 = state_10850;(statearr_10879[23] = inst_10742);
return statearr_10879;
})();if(cljs.core.truth_(inst_10743))
{var statearr_10880_10953 = state_10850__$1;(statearr_10880_10953[1] = 13);
} else
{var statearr_10881_10954 = state_10850__$1;(statearr_10881_10954[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 42))
{var inst_10843 = (state_10850[2]);var state_10850__$1 = (function (){var statearr_10882 = state_10850;(statearr_10882[24] = inst_10843);
return statearr_10882;
})();var statearr_10883_10955 = state_10850__$1;(statearr_10883_10955[2] = null);
(statearr_10883_10955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 11))
{var inst_10752 = (state_10850[25]);var inst_10732 = (state_10850[16]);var inst_10752__$1 = cljs.core.seq.call(null,inst_10732);var state_10850__$1 = (function (){var statearr_10884 = state_10850;(statearr_10884[25] = inst_10752__$1);
return statearr_10884;
})();if(inst_10752__$1)
{var statearr_10885_10956 = state_10850__$1;(statearr_10885_10956[1] = 16);
} else
{var statearr_10886_10957 = state_10850__$1;(statearr_10886_10957[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 12))
{var inst_10778 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10887_10958 = state_10850__$1;(statearr_10887_10958[2] = inst_10778);
(statearr_10887_10958[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 13))
{var inst_10742 = (state_10850[23]);var inst_10745 = cljs.core.async.close_BANG_.call(null,inst_10742);var state_10850__$1 = state_10850;var statearr_10891_10959 = state_10850__$1;(statearr_10891_10959[2] = inst_10745);
(statearr_10891_10959[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 14))
{var state_10850__$1 = state_10850;var statearr_10892_10960 = state_10850__$1;(statearr_10892_10960[2] = null);
(statearr_10892_10960[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 15))
{var inst_10735 = (state_10850[14]);var inst_10734 = (state_10850[15]);var inst_10732 = (state_10850[16]);var inst_10733 = (state_10850[17]);var inst_10748 = (state_10850[2]);var inst_10749 = (inst_10735 + 1);var tmp10888 = inst_10734;var tmp10889 = inst_10732;var tmp10890 = inst_10733;var inst_10732__$1 = tmp10889;var inst_10733__$1 = tmp10890;var inst_10734__$1 = tmp10888;var inst_10735__$1 = inst_10749;var state_10850__$1 = (function (){var statearr_10893 = state_10850;(statearr_10893[14] = inst_10735__$1);
(statearr_10893[15] = inst_10734__$1);
(statearr_10893[26] = inst_10748);
(statearr_10893[16] = inst_10732__$1);
(statearr_10893[17] = inst_10733__$1);
return statearr_10893;
})();var statearr_10894_10961 = state_10850__$1;(statearr_10894_10961[2] = null);
(statearr_10894_10961[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 16))
{var inst_10752 = (state_10850[25]);var inst_10754 = cljs.core.chunked_seq_QMARK_.call(null,inst_10752);var state_10850__$1 = state_10850;if(inst_10754)
{var statearr_10895_10962 = state_10850__$1;(statearr_10895_10962[1] = 19);
} else
{var statearr_10896_10963 = state_10850__$1;(statearr_10896_10963[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 17))
{var state_10850__$1 = state_10850;var statearr_10897_10964 = state_10850__$1;(statearr_10897_10964[2] = null);
(statearr_10897_10964[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 18))
{var inst_10776 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10898_10965 = state_10850__$1;(statearr_10898_10965[2] = inst_10776);
(statearr_10898_10965[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 19))
{var inst_10752 = (state_10850[25]);var inst_10756 = cljs.core.chunk_first.call(null,inst_10752);var inst_10757 = cljs.core.chunk_rest.call(null,inst_10752);var inst_10758 = cljs.core.count.call(null,inst_10756);var inst_10732 = inst_10757;var inst_10733 = inst_10756;var inst_10734 = inst_10758;var inst_10735 = 0;var state_10850__$1 = (function (){var statearr_10899 = state_10850;(statearr_10899[14] = inst_10735);
(statearr_10899[15] = inst_10734);
(statearr_10899[16] = inst_10732);
(statearr_10899[17] = inst_10733);
return statearr_10899;
})();var statearr_10900_10966 = state_10850__$1;(statearr_10900_10966[2] = null);
(statearr_10900_10966[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 20))
{var inst_10752 = (state_10850[25]);var inst_10762 = cljs.core.first.call(null,inst_10752);var inst_10763 = cljs.core.nth.call(null,inst_10762,0,null);var inst_10764 = cljs.core.nth.call(null,inst_10762,1,null);var state_10850__$1 = (function (){var statearr_10901 = state_10850;(statearr_10901[27] = inst_10763);
return statearr_10901;
})();if(cljs.core.truth_(inst_10764))
{var statearr_10902_10967 = state_10850__$1;(statearr_10902_10967[1] = 22);
} else
{var statearr_10903_10968 = state_10850__$1;(statearr_10903_10968[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 21))
{var inst_10773 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10904_10969 = state_10850__$1;(statearr_10904_10969[2] = inst_10773);
(statearr_10904_10969[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 22))
{var inst_10763 = (state_10850[27]);var inst_10766 = cljs.core.async.close_BANG_.call(null,inst_10763);var state_10850__$1 = state_10850;var statearr_10905_10970 = state_10850__$1;(statearr_10905_10970[2] = inst_10766);
(statearr_10905_10970[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 23))
{var state_10850__$1 = state_10850;var statearr_10906_10971 = state_10850__$1;(statearr_10906_10971[2] = null);
(statearr_10906_10971[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 24))
{var inst_10752 = (state_10850[25]);var inst_10769 = (state_10850[2]);var inst_10770 = cljs.core.next.call(null,inst_10752);var inst_10732 = inst_10770;var inst_10733 = null;var inst_10734 = 0;var inst_10735 = 0;var state_10850__$1 = (function (){var statearr_10907 = state_10850;(statearr_10907[14] = inst_10735);
(statearr_10907[15] = inst_10734);
(statearr_10907[28] = inst_10769);
(statearr_10907[16] = inst_10732);
(statearr_10907[17] = inst_10733);
return statearr_10907;
})();var statearr_10908_10972 = state_10850__$1;(statearr_10908_10972[2] = null);
(statearr_10908_10972[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 25))
{var inst_10794 = (state_10850[10]);var inst_10793 = (state_10850[11]);var inst_10796 = (inst_10794 < inst_10793);var inst_10797 = inst_10796;var state_10850__$1 = state_10850;if(cljs.core.truth_(inst_10797))
{var statearr_10909_10973 = state_10850__$1;(statearr_10909_10973[1] = 27);
} else
{var statearr_10910_10974 = state_10850__$1;(statearr_10910_10974[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 26))
{var inst_10841 = (state_10850[2]);var state_10850__$1 = (function (){var statearr_10911 = state_10850;(statearr_10911[29] = inst_10841);
return statearr_10911;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10850__$1,42,dchan);
} else
{if((state_val_10851 === 27))
{var inst_10794 = (state_10850[10]);var inst_10792 = (state_10850[12]);var inst_10799 = cljs.core._nth.call(null,inst_10792,inst_10794);var state_10850__$1 = (function (){var statearr_10912 = state_10850;(statearr_10912[7] = inst_10799);
return statearr_10912;
})();var statearr_10913_10975 = state_10850__$1;(statearr_10913_10975[2] = null);
(statearr_10913_10975[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 28))
{var inst_10812 = (state_10850[9]);var inst_10791 = (state_10850[13]);var inst_10812__$1 = cljs.core.seq.call(null,inst_10791);var state_10850__$1 = (function (){var statearr_10917 = state_10850;(statearr_10917[9] = inst_10812__$1);
return statearr_10917;
})();if(inst_10812__$1)
{var statearr_10918_10976 = state_10850__$1;(statearr_10918_10976[1] = 33);
} else
{var statearr_10919_10977 = state_10850__$1;(statearr_10919_10977[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 29))
{var inst_10839 = (state_10850[2]);var state_10850__$1 = state_10850;var statearr_10920_10978 = state_10850__$1;(statearr_10920_10978[2] = inst_10839);
(statearr_10920_10978[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 30))
{var inst_10794 = (state_10850[10]);var inst_10793 = (state_10850[11]);var inst_10792 = (state_10850[12]);var inst_10791 = (state_10850[13]);var inst_10808 = (state_10850[2]);var inst_10809 = (inst_10794 + 1);var tmp10914 = inst_10793;var tmp10915 = inst_10792;var tmp10916 = inst_10791;var inst_10791__$1 = tmp10916;var inst_10792__$1 = tmp10915;var inst_10793__$1 = tmp10914;var inst_10794__$1 = inst_10809;var state_10850__$1 = (function (){var statearr_10921 = state_10850;(statearr_10921[30] = inst_10808);
(statearr_10921[10] = inst_10794__$1);
(statearr_10921[11] = inst_10793__$1);
(statearr_10921[12] = inst_10792__$1);
(statearr_10921[13] = inst_10791__$1);
return statearr_10921;
})();var statearr_10922_10979 = state_10850__$1;(statearr_10922_10979[2] = null);
(statearr_10922_10979[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10851 === 31))
{var inst_10799 = (state_10850[7]);var inst_10800 = (state_10850[2]);var inst_10801 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10802 = cljs.core.async.untap_STAR_.call(null,m,inst_10799);var state_10850__$1 = (function (){var statearr_10923 = state_10850;(statearr_10923[31] = inst_10801);
(statearr_10923[32] = inst_10800);
return statearr_10923;
})();var statearr_10924_10980 = state_10850__$1;(statearr_10924_10980[2] = inst_10802);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_10928 = (new Array(33));(statearr_10928[0] = state_machine__7436__auto__);
(statearr_10928[1] = 1);
return statearr_10928;
});
var state_machine__7436__auto____1 = (function (state_10850){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_10850);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e10929){if((e10929 instanceof Object))
{var ex__7439__auto__ = e10929;var statearr_10930_10981 = state_10850;(statearr_10930_10981[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10850);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10982 = state_10850;
state_10850 = G__10982;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_10850){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_10850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_10931 = f__7506__auto__.call(null);(statearr_10931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___10932);
return statearr_10931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4768__auto__ = m;if(and__4768__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5372__auto__ = (((m == null))?null:m);return (function (){var or__4777__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11092 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11092 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11093){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11093 = meta11093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11092.cljs$lang$type = true;
cljs.core.async.t11092.cljs$lang$ctorStr = "cljs.core.async/t11092";
cljs.core.async.t11092.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t11092");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11094){var self__ = this;
var _11094__$1 = this;return self__.meta11093;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11094,meta11093__$1){var self__ = this;
var _11094__$1 = this;return (new cljs.core.async.t11092(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11093__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11092 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11092(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11093){return (new cljs.core.async.t11092(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11093));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11092(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7505__auto___11201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11159){var state_val_11160 = (state_11159[1]);if((state_val_11160 === 1))
{var inst_11098 = (state_11159[7]);var inst_11098__$1 = calc_state.call(null);var inst_11099 = cljs.core.seq_QMARK_.call(null,inst_11098__$1);var state_11159__$1 = (function (){var statearr_11161 = state_11159;(statearr_11161[7] = inst_11098__$1);
return statearr_11161;
})();if(inst_11099)
{var statearr_11162_11202 = state_11159__$1;(statearr_11162_11202[1] = 2);
} else
{var statearr_11163_11203 = state_11159__$1;(statearr_11163_11203[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 2))
{var inst_11098 = (state_11159[7]);var inst_11101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11098);var state_11159__$1 = state_11159;var statearr_11164_11204 = state_11159__$1;(statearr_11164_11204[2] = inst_11101);
(statearr_11164_11204[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 3))
{var inst_11098 = (state_11159[7]);var state_11159__$1 = state_11159;var statearr_11165_11205 = state_11159__$1;(statearr_11165_11205[2] = inst_11098);
(statearr_11165_11205[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 4))
{var inst_11098 = (state_11159[7]);var inst_11104 = (state_11159[2]);var inst_11105 = cljs.core.get.call(null,inst_11104,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11106 = cljs.core.get.call(null,inst_11104,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11107 = cljs.core.get.call(null,inst_11104,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11108 = inst_11098;var state_11159__$1 = (function (){var statearr_11166 = state_11159;(statearr_11166[8] = inst_11108);
(statearr_11166[9] = inst_11105);
(statearr_11166[10] = inst_11106);
(statearr_11166[11] = inst_11107);
return statearr_11166;
})();var statearr_11167_11206 = state_11159__$1;(statearr_11167_11206[2] = null);
(statearr_11167_11206[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 5))
{var inst_11108 = (state_11159[8]);var inst_11111 = cljs.core.seq_QMARK_.call(null,inst_11108);var state_11159__$1 = state_11159;if(inst_11111)
{var statearr_11168_11207 = state_11159__$1;(statearr_11168_11207[1] = 7);
} else
{var statearr_11169_11208 = state_11159__$1;(statearr_11169_11208[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 6))
{var inst_11157 = (state_11159[2]);var state_11159__$1 = state_11159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11159__$1,inst_11157);
} else
{if((state_val_11160 === 7))
{var inst_11108 = (state_11159[8]);var inst_11113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11108);var state_11159__$1 = state_11159;var statearr_11170_11209 = state_11159__$1;(statearr_11170_11209[2] = inst_11113);
(statearr_11170_11209[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 8))
{var inst_11108 = (state_11159[8]);var state_11159__$1 = state_11159;var statearr_11171_11210 = state_11159__$1;(statearr_11171_11210[2] = inst_11108);
(statearr_11171_11210[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 9))
{var inst_11116 = (state_11159[12]);var inst_11116__$1 = (state_11159[2]);var inst_11117 = cljs.core.get.call(null,inst_11116__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11118 = cljs.core.get.call(null,inst_11116__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11119 = cljs.core.get.call(null,inst_11116__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11159__$1 = (function (){var statearr_11172 = state_11159;(statearr_11172[13] = inst_11119);
(statearr_11172[12] = inst_11116__$1);
(statearr_11172[14] = inst_11118);
return statearr_11172;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11159__$1,10,inst_11117);
} else
{if((state_val_11160 === 10))
{var inst_11124 = (state_11159[15]);var inst_11123 = (state_11159[16]);var inst_11122 = (state_11159[2]);var inst_11123__$1 = cljs.core.nth.call(null,inst_11122,0,null);var inst_11124__$1 = cljs.core.nth.call(null,inst_11122,1,null);var inst_11125 = (inst_11123__$1 == null);var inst_11126 = cljs.core._EQ_.call(null,inst_11124__$1,change);var inst_11127 = (inst_11125) || (inst_11126);var state_11159__$1 = (function (){var statearr_11173 = state_11159;(statearr_11173[15] = inst_11124__$1);
(statearr_11173[16] = inst_11123__$1);
return statearr_11173;
})();if(cljs.core.truth_(inst_11127))
{var statearr_11174_11211 = state_11159__$1;(statearr_11174_11211[1] = 11);
} else
{var statearr_11175_11212 = state_11159__$1;(statearr_11175_11212[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 11))
{var inst_11123 = (state_11159[16]);var inst_11129 = (inst_11123 == null);var state_11159__$1 = state_11159;if(cljs.core.truth_(inst_11129))
{var statearr_11176_11213 = state_11159__$1;(statearr_11176_11213[1] = 14);
} else
{var statearr_11177_11214 = state_11159__$1;(statearr_11177_11214[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 12))
{var inst_11138 = (state_11159[17]);var inst_11119 = (state_11159[13]);var inst_11124 = (state_11159[15]);var inst_11138__$1 = inst_11119.call(null,inst_11124);var state_11159__$1 = (function (){var statearr_11178 = state_11159;(statearr_11178[17] = inst_11138__$1);
return statearr_11178;
})();if(cljs.core.truth_(inst_11138__$1))
{var statearr_11179_11215 = state_11159__$1;(statearr_11179_11215[1] = 17);
} else
{var statearr_11180_11216 = state_11159__$1;(statearr_11180_11216[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 13))
{var inst_11155 = (state_11159[2]);var state_11159__$1 = state_11159;var statearr_11181_11217 = state_11159__$1;(statearr_11181_11217[2] = inst_11155);
(statearr_11181_11217[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 14))
{var inst_11124 = (state_11159[15]);var inst_11131 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11124);var state_11159__$1 = state_11159;var statearr_11182_11218 = state_11159__$1;(statearr_11182_11218[2] = inst_11131);
(statearr_11182_11218[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 15))
{var state_11159__$1 = state_11159;var statearr_11183_11219 = state_11159__$1;(statearr_11183_11219[2] = null);
(statearr_11183_11219[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 16))
{var inst_11134 = (state_11159[2]);var inst_11135 = calc_state.call(null);var inst_11108 = inst_11135;var state_11159__$1 = (function (){var statearr_11184 = state_11159;(statearr_11184[8] = inst_11108);
(statearr_11184[18] = inst_11134);
return statearr_11184;
})();var statearr_11185_11220 = state_11159__$1;(statearr_11185_11220[2] = null);
(statearr_11185_11220[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 17))
{var inst_11138 = (state_11159[17]);var state_11159__$1 = state_11159;var statearr_11186_11221 = state_11159__$1;(statearr_11186_11221[2] = inst_11138);
(statearr_11186_11221[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 18))
{var inst_11119 = (state_11159[13]);var inst_11124 = (state_11159[15]);var inst_11118 = (state_11159[14]);var inst_11141 = cljs.core.empty_QMARK_.call(null,inst_11119);var inst_11142 = inst_11118.call(null,inst_11124);var inst_11143 = cljs.core.not.call(null,inst_11142);var inst_11144 = (inst_11141) && (inst_11143);var state_11159__$1 = state_11159;var statearr_11187_11222 = state_11159__$1;(statearr_11187_11222[2] = inst_11144);
(statearr_11187_11222[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 19))
{var inst_11146 = (state_11159[2]);var state_11159__$1 = state_11159;if(cljs.core.truth_(inst_11146))
{var statearr_11188_11223 = state_11159__$1;(statearr_11188_11223[1] = 20);
} else
{var statearr_11189_11224 = state_11159__$1;(statearr_11189_11224[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 20))
{var inst_11123 = (state_11159[16]);var state_11159__$1 = state_11159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11159__$1,23,out,inst_11123);
} else
{if((state_val_11160 === 21))
{var state_11159__$1 = state_11159;var statearr_11190_11225 = state_11159__$1;(statearr_11190_11225[2] = null);
(statearr_11190_11225[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 22))
{var inst_11116 = (state_11159[12]);var inst_11152 = (state_11159[2]);var inst_11108 = inst_11116;var state_11159__$1 = (function (){var statearr_11191 = state_11159;(statearr_11191[8] = inst_11108);
(statearr_11191[19] = inst_11152);
return statearr_11191;
})();var statearr_11192_11226 = state_11159__$1;(statearr_11192_11226[2] = null);
(statearr_11192_11226[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11160 === 23))
{var inst_11149 = (state_11159[2]);var state_11159__$1 = state_11159;var statearr_11193_11227 = state_11159__$1;(statearr_11193_11227[2] = inst_11149);
(statearr_11193_11227[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11197 = (new Array(20));(statearr_11197[0] = state_machine__7436__auto__);
(statearr_11197[1] = 1);
return statearr_11197;
});
var state_machine__7436__auto____1 = (function (state_11159){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11159);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11198){if((e11198 instanceof Object))
{var ex__7439__auto__ = e11198;var statearr_11199_11228 = state_11159;(statearr_11199_11228[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11229 = state_11159;
state_11159 = G__11229;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11159){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11200 = f__7506__auto__.call(null);(statearr_11200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11201);
return statearr_11200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4768__auto__ = p;if(and__4768__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4768__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5372__auto__ = (((p == null))?null:p);return (function (){var or__4777__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4768__auto__ = p;if(and__4768__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4768__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5372__auto__ = (((p == null))?null:p);return (function (){var or__4777__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4768__auto__ = p;if(and__4768__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4768__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5372__auto__ = (((p == null))?null:p);return (function (){var or__4777__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4768__auto__ = p;if(and__4768__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4768__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5372__auto__ = (((p == null))?null:p);return (function (){var or__4777__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5372__auto__)]);if(or__4777__auto__)
{return or__4777__auto__;
} else
{var or__4777__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4777__auto____$1)
{return or__4777__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4777__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4777__auto__))
{return or__4777__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4777__auto__,mults){
return (function (p1__11230_SHARP_){if(cljs.core.truth_(p1__11230_SHARP_.call(null,topic)))
{return p1__11230_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11230_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4777__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11355 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11356){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11356 = meta11356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11355.cljs$lang$type = true;
cljs.core.async.t11355.cljs$lang$ctorStr = "cljs.core.async/t11355";
cljs.core.async.t11355.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5313__auto__,writer__5314__auto__,opt__5315__auto__){return cljs.core._write.call(null,writer__5314__auto__,"cljs.core.async/t11355");
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11355.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11357){var self__ = this;
var _11357__$1 = this;return self__.meta11356;
});})(mults,ensure_mult))
;
cljs.core.async.t11355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11357,meta11356__$1){var self__ = this;
var _11357__$1 = this;return (new cljs.core.async.t11355(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11356__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11355 = ((function (mults,ensure_mult){
return (function __GT_t11355(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11356){return (new cljs.core.async.t11355(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11356));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11355(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7505__auto___11479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11431){var state_val_11432 = (state_11431[1]);if((state_val_11432 === 1))
{var state_11431__$1 = state_11431;var statearr_11433_11480 = state_11431__$1;(statearr_11433_11480[2] = null);
(statearr_11433_11480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 2))
{var state_11431__$1 = state_11431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11431__$1,4,ch);
} else
{if((state_val_11432 === 3))
{var inst_11429 = (state_11431[2]);var state_11431__$1 = state_11431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11431__$1,inst_11429);
} else
{if((state_val_11432 === 4))
{var inst_11360 = (state_11431[7]);var inst_11360__$1 = (state_11431[2]);var inst_11361 = (inst_11360__$1 == null);var state_11431__$1 = (function (){var statearr_11434 = state_11431;(statearr_11434[7] = inst_11360__$1);
return statearr_11434;
})();if(cljs.core.truth_(inst_11361))
{var statearr_11435_11481 = state_11431__$1;(statearr_11435_11481[1] = 5);
} else
{var statearr_11436_11482 = state_11431__$1;(statearr_11436_11482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 5))
{var inst_11367 = cljs.core.deref.call(null,mults);var inst_11368 = cljs.core.vals.call(null,inst_11367);var inst_11369 = cljs.core.seq.call(null,inst_11368);var inst_11370 = inst_11369;var inst_11371 = null;var inst_11372 = 0;var inst_11373 = 0;var state_11431__$1 = (function (){var statearr_11437 = state_11431;(statearr_11437[8] = inst_11373);
(statearr_11437[9] = inst_11371);
(statearr_11437[10] = inst_11372);
(statearr_11437[11] = inst_11370);
return statearr_11437;
})();var statearr_11438_11483 = state_11431__$1;(statearr_11438_11483[2] = null);
(statearr_11438_11483[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 6))
{var inst_11410 = (state_11431[12]);var inst_11408 = (state_11431[13]);var inst_11360 = (state_11431[7]);var inst_11408__$1 = topic_fn.call(null,inst_11360);var inst_11409 = cljs.core.deref.call(null,mults);var inst_11410__$1 = cljs.core.get.call(null,inst_11409,inst_11408__$1);var state_11431__$1 = (function (){var statearr_11439 = state_11431;(statearr_11439[12] = inst_11410__$1);
(statearr_11439[13] = inst_11408__$1);
return statearr_11439;
})();if(cljs.core.truth_(inst_11410__$1))
{var statearr_11440_11484 = state_11431__$1;(statearr_11440_11484[1] = 19);
} else
{var statearr_11441_11485 = state_11431__$1;(statearr_11441_11485[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 7))
{var inst_11427 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11442_11486 = state_11431__$1;(statearr_11442_11486[2] = inst_11427);
(statearr_11442_11486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 8))
{var inst_11373 = (state_11431[8]);var inst_11372 = (state_11431[10]);var inst_11375 = (inst_11373 < inst_11372);var inst_11376 = inst_11375;var state_11431__$1 = state_11431;if(cljs.core.truth_(inst_11376))
{var statearr_11446_11487 = state_11431__$1;(statearr_11446_11487[1] = 10);
} else
{var statearr_11447_11488 = state_11431__$1;(statearr_11447_11488[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 9))
{var inst_11406 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11448_11489 = state_11431__$1;(statearr_11448_11489[2] = inst_11406);
(statearr_11448_11489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 10))
{var inst_11373 = (state_11431[8]);var inst_11371 = (state_11431[9]);var inst_11372 = (state_11431[10]);var inst_11370 = (state_11431[11]);var inst_11378 = cljs.core._nth.call(null,inst_11371,inst_11373);var inst_11379 = cljs.core.async.muxch_STAR_.call(null,inst_11378);var inst_11380 = cljs.core.async.close_BANG_.call(null,inst_11379);var inst_11381 = (inst_11373 + 1);var tmp11443 = inst_11371;var tmp11444 = inst_11372;var tmp11445 = inst_11370;var inst_11370__$1 = tmp11445;var inst_11371__$1 = tmp11443;var inst_11372__$1 = tmp11444;var inst_11373__$1 = inst_11381;var state_11431__$1 = (function (){var statearr_11449 = state_11431;(statearr_11449[8] = inst_11373__$1);
(statearr_11449[9] = inst_11371__$1);
(statearr_11449[10] = inst_11372__$1);
(statearr_11449[11] = inst_11370__$1);
(statearr_11449[14] = inst_11380);
return statearr_11449;
})();var statearr_11450_11490 = state_11431__$1;(statearr_11450_11490[2] = null);
(statearr_11450_11490[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 11))
{var inst_11370 = (state_11431[11]);var inst_11384 = (state_11431[15]);var inst_11384__$1 = cljs.core.seq.call(null,inst_11370);var state_11431__$1 = (function (){var statearr_11451 = state_11431;(statearr_11451[15] = inst_11384__$1);
return statearr_11451;
})();if(inst_11384__$1)
{var statearr_11452_11491 = state_11431__$1;(statearr_11452_11491[1] = 13);
} else
{var statearr_11453_11492 = state_11431__$1;(statearr_11453_11492[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 12))
{var inst_11404 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11454_11493 = state_11431__$1;(statearr_11454_11493[2] = inst_11404);
(statearr_11454_11493[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 13))
{var inst_11384 = (state_11431[15]);var inst_11386 = cljs.core.chunked_seq_QMARK_.call(null,inst_11384);var state_11431__$1 = state_11431;if(inst_11386)
{var statearr_11455_11494 = state_11431__$1;(statearr_11455_11494[1] = 16);
} else
{var statearr_11456_11495 = state_11431__$1;(statearr_11456_11495[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 14))
{var state_11431__$1 = state_11431;var statearr_11457_11496 = state_11431__$1;(statearr_11457_11496[2] = null);
(statearr_11457_11496[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 15))
{var inst_11402 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11458_11497 = state_11431__$1;(statearr_11458_11497[2] = inst_11402);
(statearr_11458_11497[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 16))
{var inst_11384 = (state_11431[15]);var inst_11388 = cljs.core.chunk_first.call(null,inst_11384);var inst_11389 = cljs.core.chunk_rest.call(null,inst_11384);var inst_11390 = cljs.core.count.call(null,inst_11388);var inst_11370 = inst_11389;var inst_11371 = inst_11388;var inst_11372 = inst_11390;var inst_11373 = 0;var state_11431__$1 = (function (){var statearr_11459 = state_11431;(statearr_11459[8] = inst_11373);
(statearr_11459[9] = inst_11371);
(statearr_11459[10] = inst_11372);
(statearr_11459[11] = inst_11370);
return statearr_11459;
})();var statearr_11460_11498 = state_11431__$1;(statearr_11460_11498[2] = null);
(statearr_11460_11498[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 17))
{var inst_11384 = (state_11431[15]);var inst_11393 = cljs.core.first.call(null,inst_11384);var inst_11394 = cljs.core.async.muxch_STAR_.call(null,inst_11393);var inst_11395 = cljs.core.async.close_BANG_.call(null,inst_11394);var inst_11396 = cljs.core.next.call(null,inst_11384);var inst_11370 = inst_11396;var inst_11371 = null;var inst_11372 = 0;var inst_11373 = 0;var state_11431__$1 = (function (){var statearr_11461 = state_11431;(statearr_11461[8] = inst_11373);
(statearr_11461[9] = inst_11371);
(statearr_11461[10] = inst_11372);
(statearr_11461[11] = inst_11370);
(statearr_11461[16] = inst_11395);
return statearr_11461;
})();var statearr_11462_11499 = state_11431__$1;(statearr_11462_11499[2] = null);
(statearr_11462_11499[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 18))
{var inst_11399 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11463_11500 = state_11431__$1;(statearr_11463_11500[2] = inst_11399);
(statearr_11463_11500[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 19))
{var state_11431__$1 = state_11431;var statearr_11464_11501 = state_11431__$1;(statearr_11464_11501[2] = null);
(statearr_11464_11501[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 20))
{var state_11431__$1 = state_11431;var statearr_11465_11502 = state_11431__$1;(statearr_11465_11502[2] = null);
(statearr_11465_11502[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 21))
{var inst_11424 = (state_11431[2]);var state_11431__$1 = (function (){var statearr_11466 = state_11431;(statearr_11466[17] = inst_11424);
return statearr_11466;
})();var statearr_11467_11503 = state_11431__$1;(statearr_11467_11503[2] = null);
(statearr_11467_11503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 22))
{var inst_11421 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11468_11504 = state_11431__$1;(statearr_11468_11504[2] = inst_11421);
(statearr_11468_11504[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 23))
{var inst_11408 = (state_11431[13]);var inst_11412 = (state_11431[2]);var inst_11413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11408);var state_11431__$1 = (function (){var statearr_11469 = state_11431;(statearr_11469[18] = inst_11412);
return statearr_11469;
})();var statearr_11470_11505 = state_11431__$1;(statearr_11470_11505[2] = inst_11413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11431__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11432 === 24))
{var inst_11410 = (state_11431[12]);var inst_11360 = (state_11431[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11431,23,Object,null,22);var inst_11417 = cljs.core.async.muxch_STAR_.call(null,inst_11410);var state_11431__$1 = state_11431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11431__$1,25,inst_11417,inst_11360);
} else
{if((state_val_11432 === 25))
{var inst_11419 = (state_11431[2]);var state_11431__$1 = state_11431;var statearr_11471_11506 = state_11431__$1;(statearr_11471_11506[2] = inst_11419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11431__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11475 = (new Array(19));(statearr_11475[0] = state_machine__7436__auto__);
(statearr_11475[1] = 1);
return statearr_11475;
});
var state_machine__7436__auto____1 = (function (state_11431){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11431);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11476){if((e11476 instanceof Object))
{var ex__7439__auto__ = e11476;var statearr_11477_11507 = state_11431;(statearr_11477_11507[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11508 = state_11431;
state_11431 = G__11508;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11431){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11478 = f__7506__auto__.call(null);(statearr_11478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11479);
return statearr_11478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7505__auto___11645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11615){var state_val_11616 = (state_11615[1]);if((state_val_11616 === 1))
{var state_11615__$1 = state_11615;var statearr_11617_11646 = state_11615__$1;(statearr_11617_11646[2] = null);
(statearr_11617_11646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 2))
{var inst_11578 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11579 = 0;var state_11615__$1 = (function (){var statearr_11618 = state_11615;(statearr_11618[7] = inst_11578);
(statearr_11618[8] = inst_11579);
return statearr_11618;
})();var statearr_11619_11647 = state_11615__$1;(statearr_11619_11647[2] = null);
(statearr_11619_11647[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 3))
{var inst_11613 = (state_11615[2]);var state_11615__$1 = state_11615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11615__$1,inst_11613);
} else
{if((state_val_11616 === 4))
{var inst_11579 = (state_11615[8]);var inst_11581 = (inst_11579 < cnt);var state_11615__$1 = state_11615;if(cljs.core.truth_(inst_11581))
{var statearr_11620_11648 = state_11615__$1;(statearr_11620_11648[1] = 6);
} else
{var statearr_11621_11649 = state_11615__$1;(statearr_11621_11649[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 5))
{var inst_11599 = (state_11615[2]);var state_11615__$1 = (function (){var statearr_11622 = state_11615;(statearr_11622[9] = inst_11599);
return statearr_11622;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11615__$1,12,dchan);
} else
{if((state_val_11616 === 6))
{var state_11615__$1 = state_11615;var statearr_11623_11650 = state_11615__$1;(statearr_11623_11650[2] = null);
(statearr_11623_11650[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 7))
{var state_11615__$1 = state_11615;var statearr_11624_11651 = state_11615__$1;(statearr_11624_11651[2] = null);
(statearr_11624_11651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 8))
{var inst_11597 = (state_11615[2]);var state_11615__$1 = state_11615;var statearr_11625_11652 = state_11615__$1;(statearr_11625_11652[2] = inst_11597);
(statearr_11625_11652[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 9))
{var inst_11579 = (state_11615[8]);var inst_11592 = (state_11615[2]);var inst_11593 = (inst_11579 + 1);var inst_11579__$1 = inst_11593;var state_11615__$1 = (function (){var statearr_11626 = state_11615;(statearr_11626[8] = inst_11579__$1);
(statearr_11626[10] = inst_11592);
return statearr_11626;
})();var statearr_11627_11653 = state_11615__$1;(statearr_11627_11653[2] = null);
(statearr_11627_11653[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 10))
{var inst_11583 = (state_11615[2]);var inst_11584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11615__$1 = (function (){var statearr_11628 = state_11615;(statearr_11628[11] = inst_11583);
return statearr_11628;
})();var statearr_11629_11654 = state_11615__$1;(statearr_11629_11654[2] = inst_11584);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11615__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 11))
{var inst_11579 = (state_11615[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11615,10,Object,null,9);var inst_11588 = chs__$1.call(null,inst_11579);var inst_11589 = done.call(null,inst_11579);var inst_11590 = cljs.core.async.take_BANG_.call(null,inst_11588,inst_11589);var state_11615__$1 = state_11615;var statearr_11630_11655 = state_11615__$1;(statearr_11630_11655[2] = inst_11590);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11615__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 12))
{var inst_11601 = (state_11615[12]);var inst_11601__$1 = (state_11615[2]);var inst_11602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11601__$1);var state_11615__$1 = (function (){var statearr_11631 = state_11615;(statearr_11631[12] = inst_11601__$1);
return statearr_11631;
})();if(cljs.core.truth_(inst_11602))
{var statearr_11632_11656 = state_11615__$1;(statearr_11632_11656[1] = 13);
} else
{var statearr_11633_11657 = state_11615__$1;(statearr_11633_11657[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 13))
{var inst_11604 = cljs.core.async.close_BANG_.call(null,out);var state_11615__$1 = state_11615;var statearr_11634_11658 = state_11615__$1;(statearr_11634_11658[2] = inst_11604);
(statearr_11634_11658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 14))
{var inst_11601 = (state_11615[12]);var inst_11606 = cljs.core.apply.call(null,f,inst_11601);var state_11615__$1 = state_11615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11615__$1,16,out,inst_11606);
} else
{if((state_val_11616 === 15))
{var inst_11611 = (state_11615[2]);var state_11615__$1 = state_11615;var statearr_11635_11659 = state_11615__$1;(statearr_11635_11659[2] = inst_11611);
(statearr_11635_11659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11616 === 16))
{var inst_11608 = (state_11615[2]);var state_11615__$1 = (function (){var statearr_11636 = state_11615;(statearr_11636[13] = inst_11608);
return statearr_11636;
})();var statearr_11637_11660 = state_11615__$1;(statearr_11637_11660[2] = null);
(statearr_11637_11660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11641 = (new Array(14));(statearr_11641[0] = state_machine__7436__auto__);
(statearr_11641[1] = 1);
return statearr_11641;
});
var state_machine__7436__auto____1 = (function (state_11615){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11615);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11642){if((e11642 instanceof Object))
{var ex__7439__auto__ = e11642;var statearr_11643_11661 = state_11615;(statearr_11643_11661[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11662 = state_11615;
state_11615 = G__11662;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11615){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11644 = f__7506__auto__.call(null);(statearr_11644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11645);
return statearr_11644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___11770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11746){var state_val_11747 = (state_11746[1]);if((state_val_11747 === 1))
{var inst_11717 = cljs.core.vec.call(null,chs);var inst_11718 = inst_11717;var state_11746__$1 = (function (){var statearr_11748 = state_11746;(statearr_11748[7] = inst_11718);
return statearr_11748;
})();var statearr_11749_11771 = state_11746__$1;(statearr_11749_11771[2] = null);
(statearr_11749_11771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 2))
{var inst_11718 = (state_11746[7]);var inst_11720 = cljs.core.count.call(null,inst_11718);var inst_11721 = (inst_11720 > 0);var state_11746__$1 = state_11746;if(cljs.core.truth_(inst_11721))
{var statearr_11750_11772 = state_11746__$1;(statearr_11750_11772[1] = 4);
} else
{var statearr_11751_11773 = state_11746__$1;(statearr_11751_11773[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 3))
{var inst_11744 = (state_11746[2]);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11746__$1,inst_11744);
} else
{if((state_val_11747 === 4))
{var inst_11718 = (state_11746[7]);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11746__$1,7,inst_11718);
} else
{if((state_val_11747 === 5))
{var inst_11740 = cljs.core.async.close_BANG_.call(null,out);var state_11746__$1 = state_11746;var statearr_11752_11774 = state_11746__$1;(statearr_11752_11774[2] = inst_11740);
(statearr_11752_11774[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 6))
{var inst_11742 = (state_11746[2]);var state_11746__$1 = state_11746;var statearr_11753_11775 = state_11746__$1;(statearr_11753_11775[2] = inst_11742);
(statearr_11753_11775[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 7))
{var inst_11725 = (state_11746[8]);var inst_11726 = (state_11746[9]);var inst_11725__$1 = (state_11746[2]);var inst_11726__$1 = cljs.core.nth.call(null,inst_11725__$1,0,null);var inst_11727 = cljs.core.nth.call(null,inst_11725__$1,1,null);var inst_11728 = (inst_11726__$1 == null);var state_11746__$1 = (function (){var statearr_11754 = state_11746;(statearr_11754[8] = inst_11725__$1);
(statearr_11754[10] = inst_11727);
(statearr_11754[9] = inst_11726__$1);
return statearr_11754;
})();if(cljs.core.truth_(inst_11728))
{var statearr_11755_11776 = state_11746__$1;(statearr_11755_11776[1] = 8);
} else
{var statearr_11756_11777 = state_11746__$1;(statearr_11756_11777[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 8))
{var inst_11718 = (state_11746[7]);var inst_11725 = (state_11746[8]);var inst_11727 = (state_11746[10]);var inst_11726 = (state_11746[9]);var inst_11730 = (function (){var c = inst_11727;var v = inst_11726;var vec__11723 = inst_11725;var cs = inst_11718;return ((function (c,v,vec__11723,cs,inst_11718,inst_11725,inst_11727,inst_11726,state_val_11747){
return (function (p1__11663_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11663_SHARP_);
});
;})(c,v,vec__11723,cs,inst_11718,inst_11725,inst_11727,inst_11726,state_val_11747))
})();var inst_11731 = cljs.core.filterv.call(null,inst_11730,inst_11718);var inst_11718__$1 = inst_11731;var state_11746__$1 = (function (){var statearr_11757 = state_11746;(statearr_11757[7] = inst_11718__$1);
return statearr_11757;
})();var statearr_11758_11778 = state_11746__$1;(statearr_11758_11778[2] = null);
(statearr_11758_11778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 9))
{var inst_11726 = (state_11746[9]);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11746__$1,11,out,inst_11726);
} else
{if((state_val_11747 === 10))
{var inst_11738 = (state_11746[2]);var state_11746__$1 = state_11746;var statearr_11760_11779 = state_11746__$1;(statearr_11760_11779[2] = inst_11738);
(statearr_11760_11779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11747 === 11))
{var inst_11718 = (state_11746[7]);var inst_11735 = (state_11746[2]);var tmp11759 = inst_11718;var inst_11718__$1 = tmp11759;var state_11746__$1 = (function (){var statearr_11761 = state_11746;(statearr_11761[7] = inst_11718__$1);
(statearr_11761[11] = inst_11735);
return statearr_11761;
})();var statearr_11762_11780 = state_11746__$1;(statearr_11762_11780[2] = null);
(statearr_11762_11780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11766 = (new Array(12));(statearr_11766[0] = state_machine__7436__auto__);
(statearr_11766[1] = 1);
return statearr_11766;
});
var state_machine__7436__auto____1 = (function (state_11746){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11746);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11767){if((e11767 instanceof Object))
{var ex__7439__auto__ = e11767;var statearr_11768_11781 = state_11746;(statearr_11768_11781[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11782 = state_11746;
state_11746 = G__11782;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11746){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11769 = f__7506__auto__.call(null);(statearr_11769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11770);
return statearr_11769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___11875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11852){var state_val_11853 = (state_11852[1]);if((state_val_11853 === 1))
{var inst_11829 = 0;var state_11852__$1 = (function (){var statearr_11854 = state_11852;(statearr_11854[7] = inst_11829);
return statearr_11854;
})();var statearr_11855_11876 = state_11852__$1;(statearr_11855_11876[2] = null);
(statearr_11855_11876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 2))
{var inst_11829 = (state_11852[7]);var inst_11831 = (inst_11829 < n);var state_11852__$1 = state_11852;if(cljs.core.truth_(inst_11831))
{var statearr_11856_11877 = state_11852__$1;(statearr_11856_11877[1] = 4);
} else
{var statearr_11857_11878 = state_11852__$1;(statearr_11857_11878[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 3))
{var inst_11849 = (state_11852[2]);var inst_11850 = cljs.core.async.close_BANG_.call(null,out);var state_11852__$1 = (function (){var statearr_11858 = state_11852;(statearr_11858[8] = inst_11849);
return statearr_11858;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11852__$1,inst_11850);
} else
{if((state_val_11853 === 4))
{var state_11852__$1 = state_11852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11852__$1,7,ch);
} else
{if((state_val_11853 === 5))
{var state_11852__$1 = state_11852;var statearr_11859_11879 = state_11852__$1;(statearr_11859_11879[2] = null);
(statearr_11859_11879[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 6))
{var inst_11847 = (state_11852[2]);var state_11852__$1 = state_11852;var statearr_11860_11880 = state_11852__$1;(statearr_11860_11880[2] = inst_11847);
(statearr_11860_11880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 7))
{var inst_11834 = (state_11852[9]);var inst_11834__$1 = (state_11852[2]);var inst_11835 = (inst_11834__$1 == null);var inst_11836 = cljs.core.not.call(null,inst_11835);var state_11852__$1 = (function (){var statearr_11861 = state_11852;(statearr_11861[9] = inst_11834__$1);
return statearr_11861;
})();if(inst_11836)
{var statearr_11862_11881 = state_11852__$1;(statearr_11862_11881[1] = 8);
} else
{var statearr_11863_11882 = state_11852__$1;(statearr_11863_11882[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 8))
{var inst_11834 = (state_11852[9]);var state_11852__$1 = state_11852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11852__$1,11,out,inst_11834);
} else
{if((state_val_11853 === 9))
{var state_11852__$1 = state_11852;var statearr_11864_11883 = state_11852__$1;(statearr_11864_11883[2] = null);
(statearr_11864_11883[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 10))
{var inst_11844 = (state_11852[2]);var state_11852__$1 = state_11852;var statearr_11865_11884 = state_11852__$1;(statearr_11865_11884[2] = inst_11844);
(statearr_11865_11884[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11853 === 11))
{var inst_11829 = (state_11852[7]);var inst_11839 = (state_11852[2]);var inst_11840 = (inst_11829 + 1);var inst_11829__$1 = inst_11840;var state_11852__$1 = (function (){var statearr_11866 = state_11852;(statearr_11866[7] = inst_11829__$1);
(statearr_11866[10] = inst_11839);
return statearr_11866;
})();var statearr_11867_11885 = state_11852__$1;(statearr_11867_11885[2] = null);
(statearr_11867_11885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11871 = (new Array(11));(statearr_11871[0] = state_machine__7436__auto__);
(statearr_11871[1] = 1);
return statearr_11871;
});
var state_machine__7436__auto____1 = (function (state_11852){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11852);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11872){if((e11872 instanceof Object))
{var ex__7439__auto__ = e11872;var statearr_11873_11886 = state_11852;(statearr_11873_11886[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11887 = state_11852;
state_11852 = G__11887;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11852){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11874 = f__7506__auto__.call(null);(statearr_11874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11875);
return statearr_11874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___11984 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_11959){var state_val_11960 = (state_11959[1]);if((state_val_11960 === 1))
{var inst_11936 = null;var state_11959__$1 = (function (){var statearr_11961 = state_11959;(statearr_11961[7] = inst_11936);
return statearr_11961;
})();var statearr_11962_11985 = state_11959__$1;(statearr_11962_11985[2] = null);
(statearr_11962_11985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 2))
{var state_11959__$1 = state_11959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11959__$1,4,ch);
} else
{if((state_val_11960 === 3))
{var inst_11956 = (state_11959[2]);var inst_11957 = cljs.core.async.close_BANG_.call(null,out);var state_11959__$1 = (function (){var statearr_11963 = state_11959;(statearr_11963[8] = inst_11956);
return statearr_11963;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11959__$1,inst_11957);
} else
{if((state_val_11960 === 4))
{var inst_11939 = (state_11959[9]);var inst_11939__$1 = (state_11959[2]);var inst_11940 = (inst_11939__$1 == null);var inst_11941 = cljs.core.not.call(null,inst_11940);var state_11959__$1 = (function (){var statearr_11964 = state_11959;(statearr_11964[9] = inst_11939__$1);
return statearr_11964;
})();if(inst_11941)
{var statearr_11965_11986 = state_11959__$1;(statearr_11965_11986[1] = 5);
} else
{var statearr_11966_11987 = state_11959__$1;(statearr_11966_11987[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 5))
{var inst_11936 = (state_11959[7]);var inst_11939 = (state_11959[9]);var inst_11943 = cljs.core._EQ_.call(null,inst_11939,inst_11936);var state_11959__$1 = state_11959;if(inst_11943)
{var statearr_11967_11988 = state_11959__$1;(statearr_11967_11988[1] = 8);
} else
{var statearr_11968_11989 = state_11959__$1;(statearr_11968_11989[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 6))
{var state_11959__$1 = state_11959;var statearr_11970_11990 = state_11959__$1;(statearr_11970_11990[2] = null);
(statearr_11970_11990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 7))
{var inst_11954 = (state_11959[2]);var state_11959__$1 = state_11959;var statearr_11971_11991 = state_11959__$1;(statearr_11971_11991[2] = inst_11954);
(statearr_11971_11991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 8))
{var inst_11936 = (state_11959[7]);var tmp11969 = inst_11936;var inst_11936__$1 = tmp11969;var state_11959__$1 = (function (){var statearr_11972 = state_11959;(statearr_11972[7] = inst_11936__$1);
return statearr_11972;
})();var statearr_11973_11992 = state_11959__$1;(statearr_11973_11992[2] = null);
(statearr_11973_11992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 9))
{var inst_11939 = (state_11959[9]);var state_11959__$1 = state_11959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11959__$1,11,out,inst_11939);
} else
{if((state_val_11960 === 10))
{var inst_11951 = (state_11959[2]);var state_11959__$1 = state_11959;var statearr_11974_11993 = state_11959__$1;(statearr_11974_11993[2] = inst_11951);
(statearr_11974_11993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11960 === 11))
{var inst_11939 = (state_11959[9]);var inst_11948 = (state_11959[2]);var inst_11936 = inst_11939;var state_11959__$1 = (function (){var statearr_11975 = state_11959;(statearr_11975[10] = inst_11948);
(statearr_11975[7] = inst_11936);
return statearr_11975;
})();var statearr_11976_11994 = state_11959__$1;(statearr_11976_11994[2] = null);
(statearr_11976_11994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_11980 = (new Array(11));(statearr_11980[0] = state_machine__7436__auto__);
(statearr_11980[1] = 1);
return statearr_11980;
});
var state_machine__7436__auto____1 = (function (state_11959){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_11959);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e11981){if((e11981 instanceof Object))
{var ex__7439__auto__ = e11981;var statearr_11982_11995 = state_11959;(statearr_11982_11995[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11996 = state_11959;
state_11959 = G__11996;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_11959){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_11959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_11983 = f__7506__auto__.call(null);(statearr_11983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___11984);
return statearr_11983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___12131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_12101){var state_val_12102 = (state_12101[1]);if((state_val_12102 === 1))
{var inst_12064 = (new Array(n));var inst_12065 = inst_12064;var inst_12066 = 0;var state_12101__$1 = (function (){var statearr_12103 = state_12101;(statearr_12103[7] = inst_12066);
(statearr_12103[8] = inst_12065);
return statearr_12103;
})();var statearr_12104_12132 = state_12101__$1;(statearr_12104_12132[2] = null);
(statearr_12104_12132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 2))
{var state_12101__$1 = state_12101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12101__$1,4,ch);
} else
{if((state_val_12102 === 3))
{var inst_12099 = (state_12101[2]);var state_12101__$1 = state_12101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12101__$1,inst_12099);
} else
{if((state_val_12102 === 4))
{var inst_12069 = (state_12101[9]);var inst_12069__$1 = (state_12101[2]);var inst_12070 = (inst_12069__$1 == null);var inst_12071 = cljs.core.not.call(null,inst_12070);var state_12101__$1 = (function (){var statearr_12105 = state_12101;(statearr_12105[9] = inst_12069__$1);
return statearr_12105;
})();if(inst_12071)
{var statearr_12106_12133 = state_12101__$1;(statearr_12106_12133[1] = 5);
} else
{var statearr_12107_12134 = state_12101__$1;(statearr_12107_12134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 5))
{var inst_12066 = (state_12101[7]);var inst_12065 = (state_12101[8]);var inst_12074 = (state_12101[10]);var inst_12069 = (state_12101[9]);var inst_12073 = (inst_12065[inst_12066] = inst_12069);var inst_12074__$1 = (inst_12066 + 1);var inst_12075 = (inst_12074__$1 < n);var state_12101__$1 = (function (){var statearr_12108 = state_12101;(statearr_12108[10] = inst_12074__$1);
(statearr_12108[11] = inst_12073);
return statearr_12108;
})();if(cljs.core.truth_(inst_12075))
{var statearr_12109_12135 = state_12101__$1;(statearr_12109_12135[1] = 8);
} else
{var statearr_12110_12136 = state_12101__$1;(statearr_12110_12136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 6))
{var inst_12066 = (state_12101[7]);var inst_12087 = (inst_12066 > 0);var state_12101__$1 = state_12101;if(cljs.core.truth_(inst_12087))
{var statearr_12112_12137 = state_12101__$1;(statearr_12112_12137[1] = 12);
} else
{var statearr_12113_12138 = state_12101__$1;(statearr_12113_12138[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 7))
{var inst_12097 = (state_12101[2]);var state_12101__$1 = state_12101;var statearr_12114_12139 = state_12101__$1;(statearr_12114_12139[2] = inst_12097);
(statearr_12114_12139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 8))
{var inst_12065 = (state_12101[8]);var inst_12074 = (state_12101[10]);var tmp12111 = inst_12065;var inst_12065__$1 = tmp12111;var inst_12066 = inst_12074;var state_12101__$1 = (function (){var statearr_12115 = state_12101;(statearr_12115[7] = inst_12066);
(statearr_12115[8] = inst_12065__$1);
return statearr_12115;
})();var statearr_12116_12140 = state_12101__$1;(statearr_12116_12140[2] = null);
(statearr_12116_12140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 9))
{var inst_12065 = (state_12101[8]);var inst_12079 = cljs.core.vec.call(null,inst_12065);var state_12101__$1 = state_12101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12101__$1,11,out,inst_12079);
} else
{if((state_val_12102 === 10))
{var inst_12085 = (state_12101[2]);var state_12101__$1 = state_12101;var statearr_12117_12141 = state_12101__$1;(statearr_12117_12141[2] = inst_12085);
(statearr_12117_12141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 11))
{var inst_12081 = (state_12101[2]);var inst_12082 = (new Array(n));var inst_12065 = inst_12082;var inst_12066 = 0;var state_12101__$1 = (function (){var statearr_12118 = state_12101;(statearr_12118[7] = inst_12066);
(statearr_12118[8] = inst_12065);
(statearr_12118[12] = inst_12081);
return statearr_12118;
})();var statearr_12119_12142 = state_12101__$1;(statearr_12119_12142[2] = null);
(statearr_12119_12142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 12))
{var inst_12065 = (state_12101[8]);var inst_12089 = cljs.core.vec.call(null,inst_12065);var state_12101__$1 = state_12101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12101__$1,15,out,inst_12089);
} else
{if((state_val_12102 === 13))
{var state_12101__$1 = state_12101;var statearr_12120_12143 = state_12101__$1;(statearr_12120_12143[2] = null);
(statearr_12120_12143[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 14))
{var inst_12094 = (state_12101[2]);var inst_12095 = cljs.core.async.close_BANG_.call(null,out);var state_12101__$1 = (function (){var statearr_12121 = state_12101;(statearr_12121[13] = inst_12094);
return statearr_12121;
})();var statearr_12122_12144 = state_12101__$1;(statearr_12122_12144[2] = inst_12095);
(statearr_12122_12144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12102 === 15))
{var inst_12091 = (state_12101[2]);var state_12101__$1 = state_12101;var statearr_12123_12145 = state_12101__$1;(statearr_12123_12145[2] = inst_12091);
(statearr_12123_12145[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_12127 = (new Array(14));(statearr_12127[0] = state_machine__7436__auto__);
(statearr_12127[1] = 1);
return statearr_12127;
});
var state_machine__7436__auto____1 = (function (state_12101){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_12101);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e12128){if((e12128 instanceof Object))
{var ex__7439__auto__ = e12128;var statearr_12129_12146 = state_12101;(statearr_12129_12146[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12147 = state_12101;
state_12101 = G__12147;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_12101){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_12101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_12130 = f__7506__auto__.call(null);(statearr_12130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___12131);
return statearr_12130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7505__auto___12290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7506__auto__ = (function (){var switch__7435__auto__ = (function (state_12260){var state_val_12261 = (state_12260[1]);if((state_val_12261 === 1))
{var inst_12219 = (new Array(0));var inst_12220 = inst_12219;var inst_12221 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12260__$1 = (function (){var statearr_12262 = state_12260;(statearr_12262[7] = inst_12220);
(statearr_12262[8] = inst_12221);
return statearr_12262;
})();var statearr_12263_12291 = state_12260__$1;(statearr_12263_12291[2] = null);
(statearr_12263_12291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 2))
{var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,4,ch);
} else
{if((state_val_12261 === 3))
{var inst_12258 = (state_12260[2]);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12260__$1,inst_12258);
} else
{if((state_val_12261 === 4))
{var inst_12224 = (state_12260[9]);var inst_12224__$1 = (state_12260[2]);var inst_12225 = (inst_12224__$1 == null);var inst_12226 = cljs.core.not.call(null,inst_12225);var state_12260__$1 = (function (){var statearr_12264 = state_12260;(statearr_12264[9] = inst_12224__$1);
return statearr_12264;
})();if(inst_12226)
{var statearr_12265_12292 = state_12260__$1;(statearr_12265_12292[1] = 5);
} else
{var statearr_12266_12293 = state_12260__$1;(statearr_12266_12293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 5))
{var inst_12221 = (state_12260[8]);var inst_12228 = (state_12260[10]);var inst_12224 = (state_12260[9]);var inst_12228__$1 = f.call(null,inst_12224);var inst_12229 = cljs.core._EQ_.call(null,inst_12228__$1,inst_12221);var inst_12230 = cljs.core.keyword_identical_QMARK_.call(null,inst_12221,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12231 = (inst_12229) || (inst_12230);var state_12260__$1 = (function (){var statearr_12267 = state_12260;(statearr_12267[10] = inst_12228__$1);
return statearr_12267;
})();if(cljs.core.truth_(inst_12231))
{var statearr_12268_12294 = state_12260__$1;(statearr_12268_12294[1] = 8);
} else
{var statearr_12269_12295 = state_12260__$1;(statearr_12269_12295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 6))
{var inst_12220 = (state_12260[7]);var inst_12245 = inst_12220.length;var inst_12246 = (inst_12245 > 0);var state_12260__$1 = state_12260;if(cljs.core.truth_(inst_12246))
{var statearr_12271_12296 = state_12260__$1;(statearr_12271_12296[1] = 12);
} else
{var statearr_12272_12297 = state_12260__$1;(statearr_12272_12297[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 7))
{var inst_12256 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12273_12298 = state_12260__$1;(statearr_12273_12298[2] = inst_12256);
(statearr_12273_12298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 8))
{var inst_12220 = (state_12260[7]);var inst_12228 = (state_12260[10]);var inst_12224 = (state_12260[9]);var inst_12233 = inst_12220.push(inst_12224);var tmp12270 = inst_12220;var inst_12220__$1 = tmp12270;var inst_12221 = inst_12228;var state_12260__$1 = (function (){var statearr_12274 = state_12260;(statearr_12274[7] = inst_12220__$1);
(statearr_12274[8] = inst_12221);
(statearr_12274[11] = inst_12233);
return statearr_12274;
})();var statearr_12275_12299 = state_12260__$1;(statearr_12275_12299[2] = null);
(statearr_12275_12299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 9))
{var inst_12220 = (state_12260[7]);var inst_12236 = cljs.core.vec.call(null,inst_12220);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12260__$1,11,out,inst_12236);
} else
{if((state_val_12261 === 10))
{var inst_12243 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12276_12300 = state_12260__$1;(statearr_12276_12300[2] = inst_12243);
(statearr_12276_12300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 11))
{var inst_12228 = (state_12260[10]);var inst_12224 = (state_12260[9]);var inst_12238 = (state_12260[2]);var inst_12239 = (new Array(0));var inst_12240 = inst_12239.push(inst_12224);var inst_12220 = inst_12239;var inst_12221 = inst_12228;var state_12260__$1 = (function (){var statearr_12277 = state_12260;(statearr_12277[7] = inst_12220);
(statearr_12277[8] = inst_12221);
(statearr_12277[12] = inst_12240);
(statearr_12277[13] = inst_12238);
return statearr_12277;
})();var statearr_12278_12301 = state_12260__$1;(statearr_12278_12301[2] = null);
(statearr_12278_12301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 12))
{var inst_12220 = (state_12260[7]);var inst_12248 = cljs.core.vec.call(null,inst_12220);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12260__$1,15,out,inst_12248);
} else
{if((state_val_12261 === 13))
{var state_12260__$1 = state_12260;var statearr_12279_12302 = state_12260__$1;(statearr_12279_12302[2] = null);
(statearr_12279_12302[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 14))
{var inst_12253 = (state_12260[2]);var inst_12254 = cljs.core.async.close_BANG_.call(null,out);var state_12260__$1 = (function (){var statearr_12280 = state_12260;(statearr_12280[14] = inst_12253);
return statearr_12280;
})();var statearr_12281_12303 = state_12260__$1;(statearr_12281_12303[2] = inst_12254);
(statearr_12281_12303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12261 === 15))
{var inst_12250 = (state_12260[2]);var state_12260__$1 = state_12260;var statearr_12282_12304 = state_12260__$1;(statearr_12282_12304[2] = inst_12250);
(statearr_12282_12304[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7435__auto__){
return (function() {
var state_machine__7436__auto__ = null;
var state_machine__7436__auto____0 = (function (){var statearr_12286 = (new Array(15));(statearr_12286[0] = state_machine__7436__auto__);
(statearr_12286[1] = 1);
return statearr_12286;
});
var state_machine__7436__auto____1 = (function (state_12260){while(true){
var ret_value__7437__auto__ = (function (){try{while(true){
var result__7438__auto__ = switch__7435__auto__.call(null,state_12260);if(cljs.core.keyword_identical_QMARK_.call(null,result__7438__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7438__auto__;
}
break;
}
}catch (e12287){if((e12287 instanceof Object))
{var ex__7439__auto__ = e12287;var statearr_12288_12305 = state_12260;(statearr_12288_12305[5] = ex__7439__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7437__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12306 = state_12260;
state_12260 = G__12306;
continue;
}
} else
{return ret_value__7437__auto__;
}
break;
}
});
state_machine__7436__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return state_machine__7436__auto____0.call(this);
case 1:
return state_machine__7436__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7436__auto____0;
state_machine__7436__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7436__auto____1;
return state_machine__7436__auto__;
})()
;})(switch__7435__auto__))
})();var state__7507__auto__ = (function (){var statearr_12289 = f__7506__auto__.call(null);(statearr_12289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7505__auto___12290);
return statearr_12289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7507__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
