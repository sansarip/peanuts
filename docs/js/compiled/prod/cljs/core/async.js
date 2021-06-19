// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22231 = arguments.length;
switch (G__22231) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22232 = (function (f,blockable,meta22233){
this.f = f;
this.blockable = blockable;
this.meta22233 = meta22233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22234,meta22233__$1){
var self__ = this;
var _22234__$1 = this;
return (new cljs.core.async.t_cljs$core$async22232(self__.f,self__.blockable,meta22233__$1));
}));

(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22234){
var self__ = this;
var _22234__$1 = this;
return self__.meta22233;
}));

(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22233","meta22233",307231366,null)], null);
}));

(cljs.core.async.t_cljs$core$async22232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22232");

(cljs.core.async.t_cljs$core$async22232.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22232.
 */
cljs.core.async.__GT_t_cljs$core$async22232 = (function cljs$core$async$__GT_t_cljs$core$async22232(f__$1,blockable__$1,meta22233){
return (new cljs.core.async.t_cljs$core$async22232(f__$1,blockable__$1,meta22233));
});

}

return (new cljs.core.async.t_cljs$core$async22232(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22238 = arguments.length;
switch (G__22238) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22241 = arguments.length;
switch (G__22241) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22244 = arguments.length;
switch (G__22244) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22246 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22246);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_22246);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22248 = arguments.length;
switch (G__22248) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___22250 = n;
var x_22251 = (0);
while(true){
if((x_22251 < n__4706__auto___22250)){
(a[x_22251] = (0));

var G__22252 = (x_22251 + (1));
x_22251 = G__22252;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22253 = (i + (1));
i = G__22253;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22254 = (function (flag,meta22255){
this.flag = flag;
this.meta22255 = meta22255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22256,meta22255__$1){
var self__ = this;
var _22256__$1 = this;
return (new cljs.core.async.t_cljs$core$async22254(self__.flag,meta22255__$1));
}));

(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22256){
var self__ = this;
var _22256__$1 = this;
return self__.meta22255;
}));

(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22255","meta22255",-877559653,null)], null);
}));

(cljs.core.async.t_cljs$core$async22254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22254");

(cljs.core.async.t_cljs$core$async22254.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22254.
 */
cljs.core.async.__GT_t_cljs$core$async22254 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22254(flag__$1,meta22255){
return (new cljs.core.async.t_cljs$core$async22254(flag__$1,meta22255));
});

}

return (new cljs.core.async.t_cljs$core$async22254(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22257 = (function (flag,cb,meta22258){
this.flag = flag;
this.cb = cb;
this.meta22258 = meta22258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22259,meta22258__$1){
var self__ = this;
var _22259__$1 = this;
return (new cljs.core.async.t_cljs$core$async22257(self__.flag,self__.cb,meta22258__$1));
}));

(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22259){
var self__ = this;
var _22259__$1 = this;
return self__.meta22258;
}));

(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22258","meta22258",-1830269850,null)], null);
}));

(cljs.core.async.t_cljs$core$async22257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22257");

(cljs.core.async.t_cljs$core$async22257.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22257.
 */
cljs.core.async.__GT_t_cljs$core$async22257 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22257(flag__$1,cb__$1,meta22258){
return (new cljs.core.async.t_cljs$core$async22257(flag__$1,cb__$1,meta22258));
});

}

return (new cljs.core.async.t_cljs$core$async22257(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22260_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22261_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22261_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22262 = (i + (1));
i = G__22262;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4221__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22267 = arguments.length;
var i__4830__auto___22268 = (0);
while(true){
if((i__4830__auto___22268 < len__4829__auto___22267)){
args__4835__auto__.push((arguments[i__4830__auto___22268]));

var G__22269 = (i__4830__auto___22268 + (1));
i__4830__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22265){
var map__22266 = p__22265;
var map__22266__$1 = cljs.core.__destructure_map.call(null,map__22266);
var opts = map__22266__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22263){
var G__22264 = cljs.core.first.call(null,seq22263);
var seq22263__$1 = cljs.core.next.call(null,seq22263);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22264,seq22263__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22271 = arguments.length;
switch (G__22271) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22171__auto___22317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22295){
var state_val_22296 = (state_22295[(1)]);
if((state_val_22296 === (7))){
var inst_22291 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
var statearr_22297_22318 = state_22295__$1;
(statearr_22297_22318[(2)] = inst_22291);

(statearr_22297_22318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (1))){
var state_22295__$1 = state_22295;
var statearr_22298_22319 = state_22295__$1;
(statearr_22298_22319[(2)] = null);

(statearr_22298_22319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (4))){
var inst_22274 = (state_22295[(7)]);
var inst_22274__$1 = (state_22295[(2)]);
var inst_22275 = (inst_22274__$1 == null);
var state_22295__$1 = (function (){var statearr_22299 = state_22295;
(statearr_22299[(7)] = inst_22274__$1);

return statearr_22299;
})();
if(cljs.core.truth_(inst_22275)){
var statearr_22300_22320 = state_22295__$1;
(statearr_22300_22320[(1)] = (5));

} else {
var statearr_22301_22321 = state_22295__$1;
(statearr_22301_22321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (13))){
var state_22295__$1 = state_22295;
var statearr_22302_22322 = state_22295__$1;
(statearr_22302_22322[(2)] = null);

(statearr_22302_22322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (6))){
var inst_22274 = (state_22295[(7)]);
var state_22295__$1 = state_22295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22295__$1,(11),to,inst_22274);
} else {
if((state_val_22296 === (3))){
var inst_22293 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22295__$1,inst_22293);
} else {
if((state_val_22296 === (12))){
var state_22295__$1 = state_22295;
var statearr_22303_22323 = state_22295__$1;
(statearr_22303_22323[(2)] = null);

(statearr_22303_22323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (2))){
var state_22295__$1 = state_22295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22295__$1,(4),from);
} else {
if((state_val_22296 === (11))){
var inst_22284 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
if(cljs.core.truth_(inst_22284)){
var statearr_22304_22324 = state_22295__$1;
(statearr_22304_22324[(1)] = (12));

} else {
var statearr_22305_22325 = state_22295__$1;
(statearr_22305_22325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (9))){
var state_22295__$1 = state_22295;
var statearr_22306_22326 = state_22295__$1;
(statearr_22306_22326[(2)] = null);

(statearr_22306_22326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (5))){
var state_22295__$1 = state_22295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22307_22327 = state_22295__$1;
(statearr_22307_22327[(1)] = (8));

} else {
var statearr_22308_22328 = state_22295__$1;
(statearr_22308_22328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (14))){
var inst_22289 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
var statearr_22309_22329 = state_22295__$1;
(statearr_22309_22329[(2)] = inst_22289);

(statearr_22309_22329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (10))){
var inst_22281 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
var statearr_22310_22330 = state_22295__$1;
(statearr_22310_22330[(2)] = inst_22281);

(statearr_22310_22330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (8))){
var inst_22278 = cljs.core.async.close_BANG_.call(null,to);
var state_22295__$1 = state_22295;
var statearr_22311_22331 = state_22295__$1;
(statearr_22311_22331[(2)] = inst_22278);

(statearr_22311_22331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_22312 = [null,null,null,null,null,null,null,null];
(statearr_22312[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_22312[(1)] = (1));

return statearr_22312;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_22295){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22313){if((e22313 instanceof Object)){
var ex__22078__auto__ = e22313;
var statearr_22314_22332 = state_22295;
(statearr_22314_22332[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22333 = state_22295;
state_22295 = G__22333;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_22295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_22295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22315 = f__22172__auto__.call(null);
(statearr_22315[(6)] = c__22171__auto___22317);

return statearr_22315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__22334){
var vec__22335 = p__22334;
var v = cljs.core.nth.call(null,vec__22335,(0),null);
var p = cljs.core.nth.call(null,vec__22335,(1),null);
var job = vec__22335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22171__auto___22506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22342){
var state_val_22343 = (state_22342[(1)]);
if((state_val_22343 === (1))){
var state_22342__$1 = state_22342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22342__$1,(2),res,v);
} else {
if((state_val_22343 === (2))){
var inst_22339 = (state_22342[(2)]);
var inst_22340 = cljs.core.async.close_BANG_.call(null,res);
var state_22342__$1 = (function (){var statearr_22344 = state_22342;
(statearr_22344[(7)] = inst_22339);

return statearr_22344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22342__$1,inst_22340);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_22345 = [null,null,null,null,null,null,null,null];
(statearr_22345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__);

(statearr_22345[(1)] = (1));

return statearr_22345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1 = (function (state_22342){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22346){if((e22346 instanceof Object)){
var ex__22078__auto__ = e22346;
var statearr_22347_22507 = state_22342;
(statearr_22347_22507[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22508 = state_22342;
state_22342 = G__22508;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = function(state_22342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1.call(this,state_22342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22348 = f__22172__auto__.call(null);
(statearr_22348[(6)] = c__22171__auto___22506);

return statearr_22348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__22349){
var vec__22350 = p__22349;
var v = cljs.core.nth.call(null,vec__22350,(0),null);
var p = cljs.core.nth.call(null,vec__22350,(1),null);
var job = vec__22350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4706__auto___22509 = n;
var __22510 = (0);
while(true){
if((__22510 < n__4706__auto___22509)){
var G__22353_22511 = type;
var G__22353_22512__$1 = (((G__22353_22511 instanceof cljs.core.Keyword))?G__22353_22511.fqn:null);
switch (G__22353_22512__$1) {
case "compute":
var c__22171__auto___22514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22510,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = ((function (__22510,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function (state_22366){
var state_val_22367 = (state_22366[(1)]);
if((state_val_22367 === (1))){
var state_22366__$1 = state_22366;
var statearr_22368_22515 = state_22366__$1;
(statearr_22368_22515[(2)] = null);

(statearr_22368_22515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22367 === (2))){
var state_22366__$1 = state_22366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22366__$1,(4),jobs);
} else {
if((state_val_22367 === (3))){
var inst_22364 = (state_22366[(2)]);
var state_22366__$1 = state_22366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22366__$1,inst_22364);
} else {
if((state_val_22367 === (4))){
var inst_22356 = (state_22366[(2)]);
var inst_22357 = process.call(null,inst_22356);
var state_22366__$1 = state_22366;
if(cljs.core.truth_(inst_22357)){
var statearr_22369_22516 = state_22366__$1;
(statearr_22369_22516[(1)] = (5));

} else {
var statearr_22370_22517 = state_22366__$1;
(statearr_22370_22517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22367 === (5))){
var state_22366__$1 = state_22366;
var statearr_22371_22518 = state_22366__$1;
(statearr_22371_22518[(2)] = null);

(statearr_22371_22518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22367 === (6))){
var state_22366__$1 = state_22366;
var statearr_22372_22519 = state_22366__$1;
(statearr_22372_22519[(2)] = null);

(statearr_22372_22519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22367 === (7))){
var inst_22362 = (state_22366[(2)]);
var state_22366__$1 = state_22366;
var statearr_22373_22520 = state_22366__$1;
(statearr_22373_22520[(2)] = inst_22362);

(statearr_22373_22520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22510,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
;
return ((function (__22510,switch__22074__auto__,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_22374 = [null,null,null,null,null,null,null];
(statearr_22374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__);

(statearr_22374[(1)] = (1));

return statearr_22374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1 = (function (state_22366){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22375){if((e22375 instanceof Object)){
var ex__22078__auto__ = e22375;
var statearr_22376_22521 = state_22366;
(statearr_22376_22521[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22522 = state_22366;
state_22366 = G__22522;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = function(state_22366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1.call(this,state_22366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__;
})()
;})(__22510,switch__22074__auto__,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
})();
var state__22173__auto__ = (function (){var statearr_22377 = f__22172__auto__.call(null);
(statearr_22377[(6)] = c__22171__auto___22514);

return statearr_22377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
});})(__22510,c__22171__auto___22514,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
);


break;
case "async":
var c__22171__auto___22523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22510,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = ((function (__22510,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function (state_22390){
var state_val_22391 = (state_22390[(1)]);
if((state_val_22391 === (1))){
var state_22390__$1 = state_22390;
var statearr_22392_22524 = state_22390__$1;
(statearr_22392_22524[(2)] = null);

(statearr_22392_22524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (2))){
var state_22390__$1 = state_22390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22390__$1,(4),jobs);
} else {
if((state_val_22391 === (3))){
var inst_22388 = (state_22390[(2)]);
var state_22390__$1 = state_22390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22390__$1,inst_22388);
} else {
if((state_val_22391 === (4))){
var inst_22380 = (state_22390[(2)]);
var inst_22381 = async.call(null,inst_22380);
var state_22390__$1 = state_22390;
if(cljs.core.truth_(inst_22381)){
var statearr_22393_22525 = state_22390__$1;
(statearr_22393_22525[(1)] = (5));

} else {
var statearr_22394_22526 = state_22390__$1;
(statearr_22394_22526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (5))){
var state_22390__$1 = state_22390;
var statearr_22395_22527 = state_22390__$1;
(statearr_22395_22527[(2)] = null);

(statearr_22395_22527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (6))){
var state_22390__$1 = state_22390;
var statearr_22396_22528 = state_22390__$1;
(statearr_22396_22528[(2)] = null);

(statearr_22396_22528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22391 === (7))){
var inst_22386 = (state_22390[(2)]);
var state_22390__$1 = state_22390;
var statearr_22397_22529 = state_22390__$1;
(statearr_22397_22529[(2)] = inst_22386);

(statearr_22397_22529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22510,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
;
return ((function (__22510,switch__22074__auto__,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_22398 = [null,null,null,null,null,null,null];
(statearr_22398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__);

(statearr_22398[(1)] = (1));

return statearr_22398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1 = (function (state_22390){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22399){if((e22399 instanceof Object)){
var ex__22078__auto__ = e22399;
var statearr_22400_22530 = state_22390;
(statearr_22400_22530[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22531 = state_22390;
state_22390 = G__22531;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = function(state_22390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1.call(this,state_22390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__;
})()
;})(__22510,switch__22074__auto__,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
})();
var state__22173__auto__ = (function (){var statearr_22401 = f__22172__auto__.call(null);
(statearr_22401[(6)] = c__22171__auto___22523);

return statearr_22401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
});})(__22510,c__22171__auto___22523,G__22353_22511,G__22353_22512__$1,n__4706__auto___22509,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22353_22512__$1)].join('')));

}

var G__22532 = (__22510 + (1));
__22510 = G__22532;
continue;
} else {
}
break;
}

var c__22171__auto___22533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22423){
var state_val_22424 = (state_22423[(1)]);
if((state_val_22424 === (7))){
var inst_22419 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
var statearr_22425_22534 = state_22423__$1;
(statearr_22425_22534[(2)] = inst_22419);

(statearr_22425_22534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (1))){
var state_22423__$1 = state_22423;
var statearr_22426_22535 = state_22423__$1;
(statearr_22426_22535[(2)] = null);

(statearr_22426_22535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (4))){
var inst_22404 = (state_22423[(7)]);
var inst_22404__$1 = (state_22423[(2)]);
var inst_22405 = (inst_22404__$1 == null);
var state_22423__$1 = (function (){var statearr_22427 = state_22423;
(statearr_22427[(7)] = inst_22404__$1);

return statearr_22427;
})();
if(cljs.core.truth_(inst_22405)){
var statearr_22428_22536 = state_22423__$1;
(statearr_22428_22536[(1)] = (5));

} else {
var statearr_22429_22537 = state_22423__$1;
(statearr_22429_22537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (6))){
var inst_22409 = (state_22423[(8)]);
var inst_22404 = (state_22423[(7)]);
var inst_22409__$1 = cljs.core.async.chan.call(null,(1));
var inst_22410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22411 = [inst_22404,inst_22409__$1];
var inst_22412 = (new cljs.core.PersistentVector(null,2,(5),inst_22410,inst_22411,null));
var state_22423__$1 = (function (){var statearr_22430 = state_22423;
(statearr_22430[(8)] = inst_22409__$1);

return statearr_22430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22423__$1,(8),jobs,inst_22412);
} else {
if((state_val_22424 === (3))){
var inst_22421 = (state_22423[(2)]);
var state_22423__$1 = state_22423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22423__$1,inst_22421);
} else {
if((state_val_22424 === (2))){
var state_22423__$1 = state_22423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22423__$1,(4),from);
} else {
if((state_val_22424 === (9))){
var inst_22416 = (state_22423[(2)]);
var state_22423__$1 = (function (){var statearr_22431 = state_22423;
(statearr_22431[(9)] = inst_22416);

return statearr_22431;
})();
var statearr_22432_22538 = state_22423__$1;
(statearr_22432_22538[(2)] = null);

(statearr_22432_22538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (5))){
var inst_22407 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22423__$1 = state_22423;
var statearr_22433_22539 = state_22423__$1;
(statearr_22433_22539[(2)] = inst_22407);

(statearr_22433_22539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22424 === (8))){
var inst_22409 = (state_22423[(8)]);
var inst_22414 = (state_22423[(2)]);
var state_22423__$1 = (function (){var statearr_22434 = state_22423;
(statearr_22434[(10)] = inst_22414);

return statearr_22434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22423__$1,(9),results,inst_22409);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_22435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__);

(statearr_22435[(1)] = (1));

return statearr_22435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1 = (function (state_22423){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22436){if((e22436 instanceof Object)){
var ex__22078__auto__ = e22436;
var statearr_22437_22540 = state_22423;
(statearr_22437_22540[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22541 = state_22423;
state_22423 = G__22541;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = function(state_22423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1.call(this,state_22423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22438 = f__22172__auto__.call(null);
(statearr_22438[(6)] = c__22171__auto___22533);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


var c__22171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22476){
var state_val_22477 = (state_22476[(1)]);
if((state_val_22477 === (7))){
var inst_22472 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
var statearr_22478_22542 = state_22476__$1;
(statearr_22478_22542[(2)] = inst_22472);

(statearr_22478_22542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (20))){
var state_22476__$1 = state_22476;
var statearr_22479_22543 = state_22476__$1;
(statearr_22479_22543[(2)] = null);

(statearr_22479_22543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (1))){
var state_22476__$1 = state_22476;
var statearr_22480_22544 = state_22476__$1;
(statearr_22480_22544[(2)] = null);

(statearr_22480_22544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (4))){
var inst_22441 = (state_22476[(7)]);
var inst_22441__$1 = (state_22476[(2)]);
var inst_22442 = (inst_22441__$1 == null);
var state_22476__$1 = (function (){var statearr_22481 = state_22476;
(statearr_22481[(7)] = inst_22441__$1);

return statearr_22481;
})();
if(cljs.core.truth_(inst_22442)){
var statearr_22482_22545 = state_22476__$1;
(statearr_22482_22545[(1)] = (5));

} else {
var statearr_22483_22546 = state_22476__$1;
(statearr_22483_22546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (15))){
var inst_22454 = (state_22476[(8)]);
var state_22476__$1 = state_22476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22476__$1,(18),to,inst_22454);
} else {
if((state_val_22477 === (21))){
var inst_22467 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
var statearr_22484_22547 = state_22476__$1;
(statearr_22484_22547[(2)] = inst_22467);

(statearr_22484_22547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (13))){
var inst_22469 = (state_22476[(2)]);
var state_22476__$1 = (function (){var statearr_22485 = state_22476;
(statearr_22485[(9)] = inst_22469);

return statearr_22485;
})();
var statearr_22486_22548 = state_22476__$1;
(statearr_22486_22548[(2)] = null);

(statearr_22486_22548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (6))){
var inst_22441 = (state_22476[(7)]);
var state_22476__$1 = state_22476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22476__$1,(11),inst_22441);
} else {
if((state_val_22477 === (17))){
var inst_22462 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
if(cljs.core.truth_(inst_22462)){
var statearr_22487_22549 = state_22476__$1;
(statearr_22487_22549[(1)] = (19));

} else {
var statearr_22488_22550 = state_22476__$1;
(statearr_22488_22550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (3))){
var inst_22474 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22476__$1,inst_22474);
} else {
if((state_val_22477 === (12))){
var inst_22451 = (state_22476[(10)]);
var state_22476__$1 = state_22476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22476__$1,(14),inst_22451);
} else {
if((state_val_22477 === (2))){
var state_22476__$1 = state_22476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22476__$1,(4),results);
} else {
if((state_val_22477 === (19))){
var state_22476__$1 = state_22476;
var statearr_22489_22551 = state_22476__$1;
(statearr_22489_22551[(2)] = null);

(statearr_22489_22551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (11))){
var inst_22451 = (state_22476[(2)]);
var state_22476__$1 = (function (){var statearr_22490 = state_22476;
(statearr_22490[(10)] = inst_22451);

return statearr_22490;
})();
var statearr_22491_22552 = state_22476__$1;
(statearr_22491_22552[(2)] = null);

(statearr_22491_22552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (9))){
var state_22476__$1 = state_22476;
var statearr_22492_22553 = state_22476__$1;
(statearr_22492_22553[(2)] = null);

(statearr_22492_22553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (5))){
var state_22476__$1 = state_22476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22493_22554 = state_22476__$1;
(statearr_22493_22554[(1)] = (8));

} else {
var statearr_22494_22555 = state_22476__$1;
(statearr_22494_22555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (14))){
var inst_22456 = (state_22476[(11)]);
var inst_22454 = (state_22476[(8)]);
var inst_22454__$1 = (state_22476[(2)]);
var inst_22455 = (inst_22454__$1 == null);
var inst_22456__$1 = cljs.core.not.call(null,inst_22455);
var state_22476__$1 = (function (){var statearr_22495 = state_22476;
(statearr_22495[(11)] = inst_22456__$1);

(statearr_22495[(8)] = inst_22454__$1);

return statearr_22495;
})();
if(inst_22456__$1){
var statearr_22496_22556 = state_22476__$1;
(statearr_22496_22556[(1)] = (15));

} else {
var statearr_22497_22557 = state_22476__$1;
(statearr_22497_22557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (16))){
var inst_22456 = (state_22476[(11)]);
var state_22476__$1 = state_22476;
var statearr_22498_22558 = state_22476__$1;
(statearr_22498_22558[(2)] = inst_22456);

(statearr_22498_22558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (10))){
var inst_22448 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
var statearr_22499_22559 = state_22476__$1;
(statearr_22499_22559[(2)] = inst_22448);

(statearr_22499_22559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (18))){
var inst_22459 = (state_22476[(2)]);
var state_22476__$1 = state_22476;
var statearr_22500_22560 = state_22476__$1;
(statearr_22500_22560[(2)] = inst_22459);

(statearr_22500_22560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22477 === (8))){
var inst_22445 = cljs.core.async.close_BANG_.call(null,to);
var state_22476__$1 = state_22476;
var statearr_22501_22561 = state_22476__$1;
(statearr_22501_22561[(2)] = inst_22445);

(statearr_22501_22561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_22502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__);

(statearr_22502[(1)] = (1));

return statearr_22502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1 = (function (state_22476){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22503){if((e22503 instanceof Object)){
var ex__22078__auto__ = e22503;
var statearr_22504_22562 = state_22476;
(statearr_22504_22562[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22563 = state_22476;
state_22476 = G__22563;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__ = function(state_22476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1.call(this,state_22476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22505 = f__22172__auto__.call(null);
(statearr_22505[(6)] = c__22171__auto__);

return statearr_22505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));

return c__22171__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22565 = arguments.length;
switch (G__22565) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22568 = arguments.length;
switch (G__22568) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22571 = arguments.length;
switch (G__22571) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22171__auto___22620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22597){
var state_val_22598 = (state_22597[(1)]);
if((state_val_22598 === (7))){
var inst_22593 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
var statearr_22599_22621 = state_22597__$1;
(statearr_22599_22621[(2)] = inst_22593);

(statearr_22599_22621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (1))){
var state_22597__$1 = state_22597;
var statearr_22600_22622 = state_22597__$1;
(statearr_22600_22622[(2)] = null);

(statearr_22600_22622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (4))){
var inst_22574 = (state_22597[(7)]);
var inst_22574__$1 = (state_22597[(2)]);
var inst_22575 = (inst_22574__$1 == null);
var state_22597__$1 = (function (){var statearr_22601 = state_22597;
(statearr_22601[(7)] = inst_22574__$1);

return statearr_22601;
})();
if(cljs.core.truth_(inst_22575)){
var statearr_22602_22623 = state_22597__$1;
(statearr_22602_22623[(1)] = (5));

} else {
var statearr_22603_22624 = state_22597__$1;
(statearr_22603_22624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (13))){
var state_22597__$1 = state_22597;
var statearr_22604_22625 = state_22597__$1;
(statearr_22604_22625[(2)] = null);

(statearr_22604_22625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (6))){
var inst_22574 = (state_22597[(7)]);
var inst_22580 = p.call(null,inst_22574);
var state_22597__$1 = state_22597;
if(cljs.core.truth_(inst_22580)){
var statearr_22605_22626 = state_22597__$1;
(statearr_22605_22626[(1)] = (9));

} else {
var statearr_22606_22627 = state_22597__$1;
(statearr_22606_22627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (3))){
var inst_22595 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22597__$1,inst_22595);
} else {
if((state_val_22598 === (12))){
var state_22597__$1 = state_22597;
var statearr_22607_22628 = state_22597__$1;
(statearr_22607_22628[(2)] = null);

(statearr_22607_22628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (2))){
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22597__$1,(4),ch);
} else {
if((state_val_22598 === (11))){
var inst_22574 = (state_22597[(7)]);
var inst_22584 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22597__$1,(8),inst_22584,inst_22574);
} else {
if((state_val_22598 === (9))){
var state_22597__$1 = state_22597;
var statearr_22608_22629 = state_22597__$1;
(statearr_22608_22629[(2)] = tc);

(statearr_22608_22629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (5))){
var inst_22577 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22578 = cljs.core.async.close_BANG_.call(null,fc);
var state_22597__$1 = (function (){var statearr_22609 = state_22597;
(statearr_22609[(8)] = inst_22577);

return statearr_22609;
})();
var statearr_22610_22630 = state_22597__$1;
(statearr_22610_22630[(2)] = inst_22578);

(statearr_22610_22630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (14))){
var inst_22591 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
var statearr_22611_22631 = state_22597__$1;
(statearr_22611_22631[(2)] = inst_22591);

(statearr_22611_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (10))){
var state_22597__$1 = state_22597;
var statearr_22612_22632 = state_22597__$1;
(statearr_22612_22632[(2)] = fc);

(statearr_22612_22632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (8))){
var inst_22586 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
if(cljs.core.truth_(inst_22586)){
var statearr_22613_22633 = state_22597__$1;
(statearr_22613_22633[(1)] = (12));

} else {
var statearr_22614_22634 = state_22597__$1;
(statearr_22614_22634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_22615 = [null,null,null,null,null,null,null,null,null];
(statearr_22615[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_22615[(1)] = (1));

return statearr_22615;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_22597){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22616){if((e22616 instanceof Object)){
var ex__22078__auto__ = e22616;
var statearr_22617_22635 = state_22597;
(statearr_22617_22635[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22636 = state_22597;
state_22597 = G__22636;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_22597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_22597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22618 = f__22172__auto__.call(null);
(statearr_22618[(6)] = c__22171__auto___22620);

return statearr_22618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22657){
var state_val_22658 = (state_22657[(1)]);
if((state_val_22658 === (7))){
var inst_22653 = (state_22657[(2)]);
var state_22657__$1 = state_22657;
var statearr_22659_22677 = state_22657__$1;
(statearr_22659_22677[(2)] = inst_22653);

(statearr_22659_22677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (1))){
var inst_22637 = init;
var state_22657__$1 = (function (){var statearr_22660 = state_22657;
(statearr_22660[(7)] = inst_22637);

return statearr_22660;
})();
var statearr_22661_22678 = state_22657__$1;
(statearr_22661_22678[(2)] = null);

(statearr_22661_22678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (4))){
var inst_22640 = (state_22657[(8)]);
var inst_22640__$1 = (state_22657[(2)]);
var inst_22641 = (inst_22640__$1 == null);
var state_22657__$1 = (function (){var statearr_22662 = state_22657;
(statearr_22662[(8)] = inst_22640__$1);

return statearr_22662;
})();
if(cljs.core.truth_(inst_22641)){
var statearr_22663_22679 = state_22657__$1;
(statearr_22663_22679[(1)] = (5));

} else {
var statearr_22664_22680 = state_22657__$1;
(statearr_22664_22680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (6))){
var inst_22637 = (state_22657[(7)]);
var inst_22640 = (state_22657[(8)]);
var inst_22644 = (state_22657[(9)]);
var inst_22644__$1 = f.call(null,inst_22637,inst_22640);
var inst_22645 = cljs.core.reduced_QMARK_.call(null,inst_22644__$1);
var state_22657__$1 = (function (){var statearr_22665 = state_22657;
(statearr_22665[(9)] = inst_22644__$1);

return statearr_22665;
})();
if(inst_22645){
var statearr_22666_22681 = state_22657__$1;
(statearr_22666_22681[(1)] = (8));

} else {
var statearr_22667_22682 = state_22657__$1;
(statearr_22667_22682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (3))){
var inst_22655 = (state_22657[(2)]);
var state_22657__$1 = state_22657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22657__$1,inst_22655);
} else {
if((state_val_22658 === (2))){
var state_22657__$1 = state_22657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22657__$1,(4),ch);
} else {
if((state_val_22658 === (9))){
var inst_22644 = (state_22657[(9)]);
var inst_22637 = inst_22644;
var state_22657__$1 = (function (){var statearr_22668 = state_22657;
(statearr_22668[(7)] = inst_22637);

return statearr_22668;
})();
var statearr_22669_22683 = state_22657__$1;
(statearr_22669_22683[(2)] = null);

(statearr_22669_22683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (5))){
var inst_22637 = (state_22657[(7)]);
var state_22657__$1 = state_22657;
var statearr_22670_22684 = state_22657__$1;
(statearr_22670_22684[(2)] = inst_22637);

(statearr_22670_22684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (10))){
var inst_22651 = (state_22657[(2)]);
var state_22657__$1 = state_22657;
var statearr_22671_22685 = state_22657__$1;
(statearr_22671_22685[(2)] = inst_22651);

(statearr_22671_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22658 === (8))){
var inst_22644 = (state_22657[(9)]);
var inst_22647 = cljs.core.deref.call(null,inst_22644);
var state_22657__$1 = state_22657;
var statearr_22672_22686 = state_22657__$1;
(statearr_22672_22686[(2)] = inst_22647);

(statearr_22672_22686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__22075__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22075__auto____0 = (function (){
var statearr_22673 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22673[(0)] = cljs$core$async$reduce_$_state_machine__22075__auto__);

(statearr_22673[(1)] = (1));

return statearr_22673;
});
var cljs$core$async$reduce_$_state_machine__22075__auto____1 = (function (state_22657){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22674){if((e22674 instanceof Object)){
var ex__22078__auto__ = e22674;
var statearr_22675_22687 = state_22657;
(statearr_22675_22687[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22688 = state_22657;
state_22657 = G__22688;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22075__auto__ = function(state_22657){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22075__auto____1.call(this,state_22657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22075__auto____0;
cljs$core$async$reduce_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22075__auto____1;
return cljs$core$async$reduce_$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22676 = f__22172__auto__.call(null);
(statearr_22676[(6)] = c__22171__auto__);

return statearr_22676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));

return c__22171__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22694){
var state_val_22695 = (state_22694[(1)]);
if((state_val_22695 === (1))){
var inst_22689 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22694__$1,(2),inst_22689);
} else {
if((state_val_22695 === (2))){
var inst_22691 = (state_22694[(2)]);
var inst_22692 = f__$1.call(null,inst_22691);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22694__$1,inst_22692);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__22075__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22075__auto____0 = (function (){
var statearr_22696 = [null,null,null,null,null,null,null];
(statearr_22696[(0)] = cljs$core$async$transduce_$_state_machine__22075__auto__);

(statearr_22696[(1)] = (1));

return statearr_22696;
});
var cljs$core$async$transduce_$_state_machine__22075__auto____1 = (function (state_22694){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22697){if((e22697 instanceof Object)){
var ex__22078__auto__ = e22697;
var statearr_22698_22700 = state_22694;
(statearr_22698_22700[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22701 = state_22694;
state_22694 = G__22701;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22075__auto__ = function(state_22694){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22075__auto____1.call(this,state_22694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22075__auto____0;
cljs$core$async$transduce_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22075__auto____1;
return cljs$core$async$transduce_$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22699 = f__22172__auto__.call(null);
(statearr_22699[(6)] = c__22171__auto__);

return statearr_22699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));

return c__22171__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22703 = arguments.length;
switch (G__22703) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22728){
var state_val_22729 = (state_22728[(1)]);
if((state_val_22729 === (7))){
var inst_22710 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
var statearr_22730_22751 = state_22728__$1;
(statearr_22730_22751[(2)] = inst_22710);

(statearr_22730_22751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (1))){
var inst_22704 = cljs.core.seq.call(null,coll);
var inst_22705 = inst_22704;
var state_22728__$1 = (function (){var statearr_22731 = state_22728;
(statearr_22731[(7)] = inst_22705);

return statearr_22731;
})();
var statearr_22732_22752 = state_22728__$1;
(statearr_22732_22752[(2)] = null);

(statearr_22732_22752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (4))){
var inst_22705 = (state_22728[(7)]);
var inst_22708 = cljs.core.first.call(null,inst_22705);
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22728__$1,(7),ch,inst_22708);
} else {
if((state_val_22729 === (13))){
var inst_22722 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
var statearr_22733_22753 = state_22728__$1;
(statearr_22733_22753[(2)] = inst_22722);

(statearr_22733_22753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (6))){
var inst_22713 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
if(cljs.core.truth_(inst_22713)){
var statearr_22734_22754 = state_22728__$1;
(statearr_22734_22754[(1)] = (8));

} else {
var statearr_22735_22755 = state_22728__$1;
(statearr_22735_22755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (3))){
var inst_22726 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22728__$1,inst_22726);
} else {
if((state_val_22729 === (12))){
var state_22728__$1 = state_22728;
var statearr_22736_22756 = state_22728__$1;
(statearr_22736_22756[(2)] = null);

(statearr_22736_22756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (2))){
var inst_22705 = (state_22728[(7)]);
var state_22728__$1 = state_22728;
if(cljs.core.truth_(inst_22705)){
var statearr_22737_22757 = state_22728__$1;
(statearr_22737_22757[(1)] = (4));

} else {
var statearr_22738_22758 = state_22728__$1;
(statearr_22738_22758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (11))){
var inst_22719 = cljs.core.async.close_BANG_.call(null,ch);
var state_22728__$1 = state_22728;
var statearr_22739_22759 = state_22728__$1;
(statearr_22739_22759[(2)] = inst_22719);

(statearr_22739_22759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (9))){
var state_22728__$1 = state_22728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22740_22760 = state_22728__$1;
(statearr_22740_22760[(1)] = (11));

} else {
var statearr_22741_22761 = state_22728__$1;
(statearr_22741_22761[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (5))){
var inst_22705 = (state_22728[(7)]);
var state_22728__$1 = state_22728;
var statearr_22742_22762 = state_22728__$1;
(statearr_22742_22762[(2)] = inst_22705);

(statearr_22742_22762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (10))){
var inst_22724 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
var statearr_22743_22763 = state_22728__$1;
(statearr_22743_22763[(2)] = inst_22724);

(statearr_22743_22763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (8))){
var inst_22705 = (state_22728[(7)]);
var inst_22715 = cljs.core.next.call(null,inst_22705);
var inst_22705__$1 = inst_22715;
var state_22728__$1 = (function (){var statearr_22744 = state_22728;
(statearr_22744[(7)] = inst_22705__$1);

return statearr_22744;
})();
var statearr_22745_22764 = state_22728__$1;
(statearr_22745_22764[(2)] = null);

(statearr_22745_22764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_22746 = [null,null,null,null,null,null,null,null];
(statearr_22746[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_22746[(1)] = (1));

return statearr_22746;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_22728){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22747){if((e22747 instanceof Object)){
var ex__22078__auto__ = e22747;
var statearr_22748_22765 = state_22728;
(statearr_22748_22765[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22766 = state_22728;
state_22728 = G__22766;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_22728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_22728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22749 = f__22172__auto__.call(null);
(statearr_22749[(6)] = c__22171__auto__);

return statearr_22749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));

return c__22171__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22767 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22767.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22768 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22768.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22769 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22769.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22770 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22770.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22771 = (function (ch,cs,meta22772){
this.ch = ch;
this.cs = cs;
this.meta22772 = meta22772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22773,meta22772__$1){
var self__ = this;
var _22773__$1 = this;
return (new cljs.core.async.t_cljs$core$async22771(self__.ch,self__.cs,meta22772__$1));
}));

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22773){
var self__ = this;
var _22773__$1 = this;
return self__.meta22772;
}));

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22772","meta22772",1916494846,null)], null);
}));

(cljs.core.async.t_cljs$core$async22771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22771");

(cljs.core.async.t_cljs$core$async22771.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22771.
 */
cljs.core.async.__GT_t_cljs$core$async22771 = (function cljs$core$async$mult_$___GT_t_cljs$core$async22771(ch__$1,cs__$1,meta22772){
return (new cljs.core.async.t_cljs$core$async22771(ch__$1,cs__$1,meta22772));
});

}

return (new cljs.core.async.t_cljs$core$async22771(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__22171__auto___22993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_22908){
var state_val_22909 = (state_22908[(1)]);
if((state_val_22909 === (7))){
var inst_22904 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22910_22994 = state_22908__$1;
(statearr_22910_22994[(2)] = inst_22904);

(statearr_22910_22994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (20))){
var inst_22807 = (state_22908[(7)]);
var inst_22819 = cljs.core.first.call(null,inst_22807);
var inst_22820 = cljs.core.nth.call(null,inst_22819,(0),null);
var inst_22821 = cljs.core.nth.call(null,inst_22819,(1),null);
var state_22908__$1 = (function (){var statearr_22911 = state_22908;
(statearr_22911[(8)] = inst_22820);

return statearr_22911;
})();
if(cljs.core.truth_(inst_22821)){
var statearr_22912_22995 = state_22908__$1;
(statearr_22912_22995[(1)] = (22));

} else {
var statearr_22913_22996 = state_22908__$1;
(statearr_22913_22996[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (27))){
var inst_22851 = (state_22908[(9)]);
var inst_22856 = (state_22908[(10)]);
var inst_22776 = (state_22908[(11)]);
var inst_22849 = (state_22908[(12)]);
var inst_22856__$1 = cljs.core._nth.call(null,inst_22849,inst_22851);
var inst_22857 = cljs.core.async.put_BANG_.call(null,inst_22856__$1,inst_22776,done);
var state_22908__$1 = (function (){var statearr_22914 = state_22908;
(statearr_22914[(10)] = inst_22856__$1);

return statearr_22914;
})();
if(cljs.core.truth_(inst_22857)){
var statearr_22915_22997 = state_22908__$1;
(statearr_22915_22997[(1)] = (30));

} else {
var statearr_22916_22998 = state_22908__$1;
(statearr_22916_22998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (1))){
var state_22908__$1 = state_22908;
var statearr_22917_22999 = state_22908__$1;
(statearr_22917_22999[(2)] = null);

(statearr_22917_22999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (24))){
var inst_22807 = (state_22908[(7)]);
var inst_22826 = (state_22908[(2)]);
var inst_22827 = cljs.core.next.call(null,inst_22807);
var inst_22785 = inst_22827;
var inst_22786 = null;
var inst_22787 = (0);
var inst_22788 = (0);
var state_22908__$1 = (function (){var statearr_22918 = state_22908;
(statearr_22918[(13)] = inst_22786);

(statearr_22918[(14)] = inst_22787);

(statearr_22918[(15)] = inst_22826);

(statearr_22918[(16)] = inst_22788);

(statearr_22918[(17)] = inst_22785);

return statearr_22918;
})();
var statearr_22919_23000 = state_22908__$1;
(statearr_22919_23000[(2)] = null);

(statearr_22919_23000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (39))){
var state_22908__$1 = state_22908;
var statearr_22923_23001 = state_22908__$1;
(statearr_22923_23001[(2)] = null);

(statearr_22923_23001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (4))){
var inst_22776 = (state_22908[(11)]);
var inst_22776__$1 = (state_22908[(2)]);
var inst_22777 = (inst_22776__$1 == null);
var state_22908__$1 = (function (){var statearr_22924 = state_22908;
(statearr_22924[(11)] = inst_22776__$1);

return statearr_22924;
})();
if(cljs.core.truth_(inst_22777)){
var statearr_22925_23002 = state_22908__$1;
(statearr_22925_23002[(1)] = (5));

} else {
var statearr_22926_23003 = state_22908__$1;
(statearr_22926_23003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (15))){
var inst_22786 = (state_22908[(13)]);
var inst_22787 = (state_22908[(14)]);
var inst_22788 = (state_22908[(16)]);
var inst_22785 = (state_22908[(17)]);
var inst_22803 = (state_22908[(2)]);
var inst_22804 = (inst_22788 + (1));
var tmp22920 = inst_22786;
var tmp22921 = inst_22787;
var tmp22922 = inst_22785;
var inst_22785__$1 = tmp22922;
var inst_22786__$1 = tmp22920;
var inst_22787__$1 = tmp22921;
var inst_22788__$1 = inst_22804;
var state_22908__$1 = (function (){var statearr_22927 = state_22908;
(statearr_22927[(13)] = inst_22786__$1);

(statearr_22927[(14)] = inst_22787__$1);

(statearr_22927[(18)] = inst_22803);

(statearr_22927[(16)] = inst_22788__$1);

(statearr_22927[(17)] = inst_22785__$1);

return statearr_22927;
})();
var statearr_22928_23004 = state_22908__$1;
(statearr_22928_23004[(2)] = null);

(statearr_22928_23004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (21))){
var inst_22830 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22932_23005 = state_22908__$1;
(statearr_22932_23005[(2)] = inst_22830);

(statearr_22932_23005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (31))){
var inst_22856 = (state_22908[(10)]);
var inst_22860 = done.call(null,null);
var inst_22861 = cljs.core.async.untap_STAR_.call(null,m,inst_22856);
var state_22908__$1 = (function (){var statearr_22933 = state_22908;
(statearr_22933[(19)] = inst_22860);

return statearr_22933;
})();
var statearr_22934_23006 = state_22908__$1;
(statearr_22934_23006[(2)] = inst_22861);

(statearr_22934_23006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (32))){
var inst_22850 = (state_22908[(20)]);
var inst_22851 = (state_22908[(9)]);
var inst_22848 = (state_22908[(21)]);
var inst_22849 = (state_22908[(12)]);
var inst_22863 = (state_22908[(2)]);
var inst_22864 = (inst_22851 + (1));
var tmp22929 = inst_22850;
var tmp22930 = inst_22848;
var tmp22931 = inst_22849;
var inst_22848__$1 = tmp22930;
var inst_22849__$1 = tmp22931;
var inst_22850__$1 = tmp22929;
var inst_22851__$1 = inst_22864;
var state_22908__$1 = (function (){var statearr_22935 = state_22908;
(statearr_22935[(20)] = inst_22850__$1);

(statearr_22935[(9)] = inst_22851__$1);

(statearr_22935[(21)] = inst_22848__$1);

(statearr_22935[(22)] = inst_22863);

(statearr_22935[(12)] = inst_22849__$1);

return statearr_22935;
})();
var statearr_22936_23007 = state_22908__$1;
(statearr_22936_23007[(2)] = null);

(statearr_22936_23007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (40))){
var inst_22876 = (state_22908[(23)]);
var inst_22880 = done.call(null,null);
var inst_22881 = cljs.core.async.untap_STAR_.call(null,m,inst_22876);
var state_22908__$1 = (function (){var statearr_22937 = state_22908;
(statearr_22937[(24)] = inst_22880);

return statearr_22937;
})();
var statearr_22938_23008 = state_22908__$1;
(statearr_22938_23008[(2)] = inst_22881);

(statearr_22938_23008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (33))){
var inst_22867 = (state_22908[(25)]);
var inst_22869 = cljs.core.chunked_seq_QMARK_.call(null,inst_22867);
var state_22908__$1 = state_22908;
if(inst_22869){
var statearr_22939_23009 = state_22908__$1;
(statearr_22939_23009[(1)] = (36));

} else {
var statearr_22940_23010 = state_22908__$1;
(statearr_22940_23010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (13))){
var inst_22797 = (state_22908[(26)]);
var inst_22800 = cljs.core.async.close_BANG_.call(null,inst_22797);
var state_22908__$1 = state_22908;
var statearr_22941_23011 = state_22908__$1;
(statearr_22941_23011[(2)] = inst_22800);

(statearr_22941_23011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (22))){
var inst_22820 = (state_22908[(8)]);
var inst_22823 = cljs.core.async.close_BANG_.call(null,inst_22820);
var state_22908__$1 = state_22908;
var statearr_22942_23012 = state_22908__$1;
(statearr_22942_23012[(2)] = inst_22823);

(statearr_22942_23012[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (36))){
var inst_22867 = (state_22908[(25)]);
var inst_22871 = cljs.core.chunk_first.call(null,inst_22867);
var inst_22872 = cljs.core.chunk_rest.call(null,inst_22867);
var inst_22873 = cljs.core.count.call(null,inst_22871);
var inst_22848 = inst_22872;
var inst_22849 = inst_22871;
var inst_22850 = inst_22873;
var inst_22851 = (0);
var state_22908__$1 = (function (){var statearr_22943 = state_22908;
(statearr_22943[(20)] = inst_22850);

(statearr_22943[(9)] = inst_22851);

(statearr_22943[(21)] = inst_22848);

(statearr_22943[(12)] = inst_22849);

return statearr_22943;
})();
var statearr_22944_23013 = state_22908__$1;
(statearr_22944_23013[(2)] = null);

(statearr_22944_23013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (41))){
var inst_22867 = (state_22908[(25)]);
var inst_22883 = (state_22908[(2)]);
var inst_22884 = cljs.core.next.call(null,inst_22867);
var inst_22848 = inst_22884;
var inst_22849 = null;
var inst_22850 = (0);
var inst_22851 = (0);
var state_22908__$1 = (function (){var statearr_22945 = state_22908;
(statearr_22945[(20)] = inst_22850);

(statearr_22945[(9)] = inst_22851);

(statearr_22945[(21)] = inst_22848);

(statearr_22945[(27)] = inst_22883);

(statearr_22945[(12)] = inst_22849);

return statearr_22945;
})();
var statearr_22946_23014 = state_22908__$1;
(statearr_22946_23014[(2)] = null);

(statearr_22946_23014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (43))){
var state_22908__$1 = state_22908;
var statearr_22947_23015 = state_22908__$1;
(statearr_22947_23015[(2)] = null);

(statearr_22947_23015[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (29))){
var inst_22892 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22948_23016 = state_22908__$1;
(statearr_22948_23016[(2)] = inst_22892);

(statearr_22948_23016[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (44))){
var inst_22901 = (state_22908[(2)]);
var state_22908__$1 = (function (){var statearr_22949 = state_22908;
(statearr_22949[(28)] = inst_22901);

return statearr_22949;
})();
var statearr_22950_23017 = state_22908__$1;
(statearr_22950_23017[(2)] = null);

(statearr_22950_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (6))){
var inst_22840 = (state_22908[(29)]);
var inst_22839 = cljs.core.deref.call(null,cs);
var inst_22840__$1 = cljs.core.keys.call(null,inst_22839);
var inst_22841 = cljs.core.count.call(null,inst_22840__$1);
var inst_22842 = cljs.core.reset_BANG_.call(null,dctr,inst_22841);
var inst_22847 = cljs.core.seq.call(null,inst_22840__$1);
var inst_22848 = inst_22847;
var inst_22849 = null;
var inst_22850 = (0);
var inst_22851 = (0);
var state_22908__$1 = (function (){var statearr_22951 = state_22908;
(statearr_22951[(20)] = inst_22850);

(statearr_22951[(30)] = inst_22842);

(statearr_22951[(9)] = inst_22851);

(statearr_22951[(29)] = inst_22840__$1);

(statearr_22951[(21)] = inst_22848);

(statearr_22951[(12)] = inst_22849);

return statearr_22951;
})();
var statearr_22952_23018 = state_22908__$1;
(statearr_22952_23018[(2)] = null);

(statearr_22952_23018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (28))){
var inst_22867 = (state_22908[(25)]);
var inst_22848 = (state_22908[(21)]);
var inst_22867__$1 = cljs.core.seq.call(null,inst_22848);
var state_22908__$1 = (function (){var statearr_22953 = state_22908;
(statearr_22953[(25)] = inst_22867__$1);

return statearr_22953;
})();
if(inst_22867__$1){
var statearr_22954_23019 = state_22908__$1;
(statearr_22954_23019[(1)] = (33));

} else {
var statearr_22955_23020 = state_22908__$1;
(statearr_22955_23020[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (25))){
var inst_22850 = (state_22908[(20)]);
var inst_22851 = (state_22908[(9)]);
var inst_22853 = (inst_22851 < inst_22850);
var inst_22854 = inst_22853;
var state_22908__$1 = state_22908;
if(cljs.core.truth_(inst_22854)){
var statearr_22956_23021 = state_22908__$1;
(statearr_22956_23021[(1)] = (27));

} else {
var statearr_22957_23022 = state_22908__$1;
(statearr_22957_23022[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (34))){
var state_22908__$1 = state_22908;
var statearr_22958_23023 = state_22908__$1;
(statearr_22958_23023[(2)] = null);

(statearr_22958_23023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (17))){
var state_22908__$1 = state_22908;
var statearr_22959_23024 = state_22908__$1;
(statearr_22959_23024[(2)] = null);

(statearr_22959_23024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (3))){
var inst_22906 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22908__$1,inst_22906);
} else {
if((state_val_22909 === (12))){
var inst_22835 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22960_23025 = state_22908__$1;
(statearr_22960_23025[(2)] = inst_22835);

(statearr_22960_23025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (2))){
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22908__$1,(4),ch);
} else {
if((state_val_22909 === (23))){
var state_22908__$1 = state_22908;
var statearr_22961_23026 = state_22908__$1;
(statearr_22961_23026[(2)] = null);

(statearr_22961_23026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (35))){
var inst_22890 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22962_23027 = state_22908__$1;
(statearr_22962_23027[(2)] = inst_22890);

(statearr_22962_23027[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (19))){
var inst_22807 = (state_22908[(7)]);
var inst_22811 = cljs.core.chunk_first.call(null,inst_22807);
var inst_22812 = cljs.core.chunk_rest.call(null,inst_22807);
var inst_22813 = cljs.core.count.call(null,inst_22811);
var inst_22785 = inst_22812;
var inst_22786 = inst_22811;
var inst_22787 = inst_22813;
var inst_22788 = (0);
var state_22908__$1 = (function (){var statearr_22963 = state_22908;
(statearr_22963[(13)] = inst_22786);

(statearr_22963[(14)] = inst_22787);

(statearr_22963[(16)] = inst_22788);

(statearr_22963[(17)] = inst_22785);

return statearr_22963;
})();
var statearr_22964_23028 = state_22908__$1;
(statearr_22964_23028[(2)] = null);

(statearr_22964_23028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (11))){
var inst_22807 = (state_22908[(7)]);
var inst_22785 = (state_22908[(17)]);
var inst_22807__$1 = cljs.core.seq.call(null,inst_22785);
var state_22908__$1 = (function (){var statearr_22965 = state_22908;
(statearr_22965[(7)] = inst_22807__$1);

return statearr_22965;
})();
if(inst_22807__$1){
var statearr_22966_23029 = state_22908__$1;
(statearr_22966_23029[(1)] = (16));

} else {
var statearr_22967_23030 = state_22908__$1;
(statearr_22967_23030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (9))){
var inst_22837 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22968_23031 = state_22908__$1;
(statearr_22968_23031[(2)] = inst_22837);

(statearr_22968_23031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (5))){
var inst_22783 = cljs.core.deref.call(null,cs);
var inst_22784 = cljs.core.seq.call(null,inst_22783);
var inst_22785 = inst_22784;
var inst_22786 = null;
var inst_22787 = (0);
var inst_22788 = (0);
var state_22908__$1 = (function (){var statearr_22969 = state_22908;
(statearr_22969[(13)] = inst_22786);

(statearr_22969[(14)] = inst_22787);

(statearr_22969[(16)] = inst_22788);

(statearr_22969[(17)] = inst_22785);

return statearr_22969;
})();
var statearr_22970_23032 = state_22908__$1;
(statearr_22970_23032[(2)] = null);

(statearr_22970_23032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (14))){
var state_22908__$1 = state_22908;
var statearr_22971_23033 = state_22908__$1;
(statearr_22971_23033[(2)] = null);

(statearr_22971_23033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (45))){
var inst_22898 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22972_23034 = state_22908__$1;
(statearr_22972_23034[(2)] = inst_22898);

(statearr_22972_23034[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (26))){
var inst_22840 = (state_22908[(29)]);
var inst_22894 = (state_22908[(2)]);
var inst_22895 = cljs.core.seq.call(null,inst_22840);
var state_22908__$1 = (function (){var statearr_22973 = state_22908;
(statearr_22973[(31)] = inst_22894);

return statearr_22973;
})();
if(inst_22895){
var statearr_22974_23035 = state_22908__$1;
(statearr_22974_23035[(1)] = (42));

} else {
var statearr_22975_23036 = state_22908__$1;
(statearr_22975_23036[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (16))){
var inst_22807 = (state_22908[(7)]);
var inst_22809 = cljs.core.chunked_seq_QMARK_.call(null,inst_22807);
var state_22908__$1 = state_22908;
if(inst_22809){
var statearr_22976_23037 = state_22908__$1;
(statearr_22976_23037[(1)] = (19));

} else {
var statearr_22977_23038 = state_22908__$1;
(statearr_22977_23038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (38))){
var inst_22887 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22978_23039 = state_22908__$1;
(statearr_22978_23039[(2)] = inst_22887);

(statearr_22978_23039[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (30))){
var state_22908__$1 = state_22908;
var statearr_22979_23040 = state_22908__$1;
(statearr_22979_23040[(2)] = null);

(statearr_22979_23040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (10))){
var inst_22786 = (state_22908[(13)]);
var inst_22788 = (state_22908[(16)]);
var inst_22796 = cljs.core._nth.call(null,inst_22786,inst_22788);
var inst_22797 = cljs.core.nth.call(null,inst_22796,(0),null);
var inst_22798 = cljs.core.nth.call(null,inst_22796,(1),null);
var state_22908__$1 = (function (){var statearr_22980 = state_22908;
(statearr_22980[(26)] = inst_22797);

return statearr_22980;
})();
if(cljs.core.truth_(inst_22798)){
var statearr_22981_23041 = state_22908__$1;
(statearr_22981_23041[(1)] = (13));

} else {
var statearr_22982_23042 = state_22908__$1;
(statearr_22982_23042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (18))){
var inst_22833 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22983_23043 = state_22908__$1;
(statearr_22983_23043[(2)] = inst_22833);

(statearr_22983_23043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (42))){
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22908__$1,(45),dchan);
} else {
if((state_val_22909 === (37))){
var inst_22876 = (state_22908[(23)]);
var inst_22867 = (state_22908[(25)]);
var inst_22776 = (state_22908[(11)]);
var inst_22876__$1 = cljs.core.first.call(null,inst_22867);
var inst_22877 = cljs.core.async.put_BANG_.call(null,inst_22876__$1,inst_22776,done);
var state_22908__$1 = (function (){var statearr_22984 = state_22908;
(statearr_22984[(23)] = inst_22876__$1);

return statearr_22984;
})();
if(cljs.core.truth_(inst_22877)){
var statearr_22985_23044 = state_22908__$1;
(statearr_22985_23044[(1)] = (39));

} else {
var statearr_22986_23045 = state_22908__$1;
(statearr_22986_23045[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (8))){
var inst_22787 = (state_22908[(14)]);
var inst_22788 = (state_22908[(16)]);
var inst_22790 = (inst_22788 < inst_22787);
var inst_22791 = inst_22790;
var state_22908__$1 = state_22908;
if(cljs.core.truth_(inst_22791)){
var statearr_22987_23046 = state_22908__$1;
(statearr_22987_23046[(1)] = (10));

} else {
var statearr_22988_23047 = state_22908__$1;
(statearr_22988_23047[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__22075__auto__ = null;
var cljs$core$async$mult_$_state_machine__22075__auto____0 = (function (){
var statearr_22989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22989[(0)] = cljs$core$async$mult_$_state_machine__22075__auto__);

(statearr_22989[(1)] = (1));

return statearr_22989;
});
var cljs$core$async$mult_$_state_machine__22075__auto____1 = (function (state_22908){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_22908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e22990){if((e22990 instanceof Object)){
var ex__22078__auto__ = e22990;
var statearr_22991_23048 = state_22908;
(statearr_22991_23048[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23049 = state_22908;
state_22908 = G__23049;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22075__auto__ = function(state_22908){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22075__auto____1.call(this,state_22908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22075__auto____0;
cljs$core$async$mult_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22075__auto____1;
return cljs$core$async$mult_$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_22992 = f__22172__auto__.call(null);
(statearr_22992[(6)] = c__22171__auto___22993);

return statearr_22992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23051 = arguments.length;
switch (G__23051) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23053 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23053.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23054 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23054.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23055 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23055.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23056 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,state_map);
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23056.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23057 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,mode);
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23057.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___23067 = arguments.length;
var i__4830__auto___23068 = (0);
while(true){
if((i__4830__auto___23068 < len__4829__auto___23067)){
args__4835__auto__.push((arguments[i__4830__auto___23068]));

var G__23069 = (i__4830__auto___23068 + (1));
i__4830__auto___23068 = G__23069;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23062){
var map__23063 = p__23062;
var map__23063__$1 = cljs.core.__destructure_map.call(null,map__23063);
var opts = map__23063__$1;
var statearr_23064_23070 = state;
(statearr_23064_23070[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23065_23071 = state;
(statearr_23065_23071[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23066_23072 = state;
(statearr_23066_23072[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23058){
var G__23059 = cljs.core.first.call(null,seq23058);
var seq23058__$1 = cljs.core.next.call(null,seq23058);
var G__23060 = cljs.core.first.call(null,seq23058__$1);
var seq23058__$2 = cljs.core.next.call(null,seq23058__$1);
var G__23061 = cljs.core.first.call(null,seq23058__$2);
var seq23058__$3 = cljs.core.next.call(null,seq23058__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23059,G__23060,G__23061,seq23058__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23073 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23074){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23074 = meta23074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23075,meta23074__$1){
var self__ = this;
var _23075__$1 = this;
return (new cljs.core.async.t_cljs$core$async23073(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23074__$1));
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23075){
var self__ = this;
var _23075__$1 = this;
return self__.meta23074;
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23073.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23074","meta23074",-1671465044,null)], null);
}));

(cljs.core.async.t_cljs$core$async23073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23073");

(cljs.core.async.t_cljs$core$async23073.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23073.
 */
cljs.core.async.__GT_t_cljs$core$async23073 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23073(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23074){
return (new cljs.core.async.t_cljs$core$async23073(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23074));
});

}

return (new cljs.core.async.t_cljs$core$async23073(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22171__auto___23187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23143){
var state_val_23144 = (state_23143[(1)]);
if((state_val_23144 === (7))){
var inst_23103 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
if(cljs.core.truth_(inst_23103)){
var statearr_23145_23188 = state_23143__$1;
(statearr_23145_23188[(1)] = (8));

} else {
var statearr_23146_23189 = state_23143__$1;
(statearr_23146_23189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (20))){
var inst_23096 = (state_23143[(7)]);
var state_23143__$1 = state_23143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23143__$1,(23),out,inst_23096);
} else {
if((state_val_23144 === (1))){
var inst_23079 = calc_state.call(null);
var inst_23080 = cljs.core.__destructure_map.call(null,inst_23079);
var inst_23081 = cljs.core.get.call(null,inst_23080,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23082 = cljs.core.get.call(null,inst_23080,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23083 = cljs.core.get.call(null,inst_23080,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23084 = inst_23079;
var state_23143__$1 = (function (){var statearr_23147 = state_23143;
(statearr_23147[(8)] = inst_23081);

(statearr_23147[(9)] = inst_23082);

(statearr_23147[(10)] = inst_23084);

(statearr_23147[(11)] = inst_23083);

return statearr_23147;
})();
var statearr_23148_23190 = state_23143__$1;
(statearr_23148_23190[(2)] = null);

(statearr_23148_23190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (24))){
var inst_23087 = (state_23143[(12)]);
var inst_23084 = inst_23087;
var state_23143__$1 = (function (){var statearr_23149 = state_23143;
(statearr_23149[(10)] = inst_23084);

return statearr_23149;
})();
var statearr_23150_23191 = state_23143__$1;
(statearr_23150_23191[(2)] = null);

(statearr_23150_23191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (4))){
var inst_23096 = (state_23143[(7)]);
var inst_23098 = (state_23143[(13)]);
var inst_23095 = (state_23143[(2)]);
var inst_23096__$1 = cljs.core.nth.call(null,inst_23095,(0),null);
var inst_23097 = cljs.core.nth.call(null,inst_23095,(1),null);
var inst_23098__$1 = (inst_23096__$1 == null);
var state_23143__$1 = (function (){var statearr_23151 = state_23143;
(statearr_23151[(7)] = inst_23096__$1);

(statearr_23151[(14)] = inst_23097);

(statearr_23151[(13)] = inst_23098__$1);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23098__$1)){
var statearr_23152_23192 = state_23143__$1;
(statearr_23152_23192[(1)] = (5));

} else {
var statearr_23153_23193 = state_23143__$1;
(statearr_23153_23193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (15))){
var inst_23088 = (state_23143[(15)]);
var inst_23117 = (state_23143[(16)]);
var inst_23117__$1 = cljs.core.empty_QMARK_.call(null,inst_23088);
var state_23143__$1 = (function (){var statearr_23154 = state_23143;
(statearr_23154[(16)] = inst_23117__$1);

return statearr_23154;
})();
if(inst_23117__$1){
var statearr_23155_23194 = state_23143__$1;
(statearr_23155_23194[(1)] = (17));

} else {
var statearr_23156_23195 = state_23143__$1;
(statearr_23156_23195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (21))){
var inst_23087 = (state_23143[(12)]);
var inst_23084 = inst_23087;
var state_23143__$1 = (function (){var statearr_23157 = state_23143;
(statearr_23157[(10)] = inst_23084);

return statearr_23157;
})();
var statearr_23158_23196 = state_23143__$1;
(statearr_23158_23196[(2)] = null);

(statearr_23158_23196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (13))){
var inst_23110 = (state_23143[(2)]);
var inst_23111 = calc_state.call(null);
var inst_23084 = inst_23111;
var state_23143__$1 = (function (){var statearr_23159 = state_23143;
(statearr_23159[(17)] = inst_23110);

(statearr_23159[(10)] = inst_23084);

return statearr_23159;
})();
var statearr_23160_23197 = state_23143__$1;
(statearr_23160_23197[(2)] = null);

(statearr_23160_23197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (22))){
var inst_23137 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23161_23198 = state_23143__$1;
(statearr_23161_23198[(2)] = inst_23137);

(statearr_23161_23198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (6))){
var inst_23097 = (state_23143[(14)]);
var inst_23101 = cljs.core._EQ_.call(null,inst_23097,change);
var state_23143__$1 = state_23143;
var statearr_23162_23199 = state_23143__$1;
(statearr_23162_23199[(2)] = inst_23101);

(statearr_23162_23199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (25))){
var state_23143__$1 = state_23143;
var statearr_23163_23200 = state_23143__$1;
(statearr_23163_23200[(2)] = null);

(statearr_23163_23200[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (17))){
var inst_23089 = (state_23143[(18)]);
var inst_23097 = (state_23143[(14)]);
var inst_23119 = inst_23089.call(null,inst_23097);
var inst_23120 = cljs.core.not.call(null,inst_23119);
var state_23143__$1 = state_23143;
var statearr_23164_23201 = state_23143__$1;
(statearr_23164_23201[(2)] = inst_23120);

(statearr_23164_23201[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (3))){
var inst_23141 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23143__$1,inst_23141);
} else {
if((state_val_23144 === (12))){
var state_23143__$1 = state_23143;
var statearr_23165_23202 = state_23143__$1;
(statearr_23165_23202[(2)] = null);

(statearr_23165_23202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (2))){
var inst_23087 = (state_23143[(12)]);
var inst_23084 = (state_23143[(10)]);
var inst_23087__$1 = cljs.core.__destructure_map.call(null,inst_23084);
var inst_23088 = cljs.core.get.call(null,inst_23087__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23089 = cljs.core.get.call(null,inst_23087__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23090 = cljs.core.get.call(null,inst_23087__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23143__$1 = (function (){var statearr_23166 = state_23143;
(statearr_23166[(12)] = inst_23087__$1);

(statearr_23166[(18)] = inst_23089);

(statearr_23166[(15)] = inst_23088);

return statearr_23166;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23143__$1,(4),inst_23090);
} else {
if((state_val_23144 === (23))){
var inst_23128 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
if(cljs.core.truth_(inst_23128)){
var statearr_23167_23203 = state_23143__$1;
(statearr_23167_23203[(1)] = (24));

} else {
var statearr_23168_23204 = state_23143__$1;
(statearr_23168_23204[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (19))){
var inst_23123 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23169_23205 = state_23143__$1;
(statearr_23169_23205[(2)] = inst_23123);

(statearr_23169_23205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (11))){
var inst_23097 = (state_23143[(14)]);
var inst_23107 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23097);
var state_23143__$1 = state_23143;
var statearr_23170_23206 = state_23143__$1;
(statearr_23170_23206[(2)] = inst_23107);

(statearr_23170_23206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (9))){
var inst_23097 = (state_23143[(14)]);
var inst_23088 = (state_23143[(15)]);
var inst_23114 = (state_23143[(19)]);
var inst_23114__$1 = inst_23088.call(null,inst_23097);
var state_23143__$1 = (function (){var statearr_23171 = state_23143;
(statearr_23171[(19)] = inst_23114__$1);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23114__$1)){
var statearr_23172_23207 = state_23143__$1;
(statearr_23172_23207[(1)] = (14));

} else {
var statearr_23173_23208 = state_23143__$1;
(statearr_23173_23208[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (5))){
var inst_23098 = (state_23143[(13)]);
var state_23143__$1 = state_23143;
var statearr_23174_23209 = state_23143__$1;
(statearr_23174_23209[(2)] = inst_23098);

(statearr_23174_23209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (14))){
var inst_23114 = (state_23143[(19)]);
var state_23143__$1 = state_23143;
var statearr_23175_23210 = state_23143__$1;
(statearr_23175_23210[(2)] = inst_23114);

(statearr_23175_23210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (26))){
var inst_23133 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23176_23211 = state_23143__$1;
(statearr_23176_23211[(2)] = inst_23133);

(statearr_23176_23211[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (16))){
var inst_23125 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
if(cljs.core.truth_(inst_23125)){
var statearr_23177_23212 = state_23143__$1;
(statearr_23177_23212[(1)] = (20));

} else {
var statearr_23178_23213 = state_23143__$1;
(statearr_23178_23213[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (10))){
var inst_23139 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23179_23214 = state_23143__$1;
(statearr_23179_23214[(2)] = inst_23139);

(statearr_23179_23214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (18))){
var inst_23117 = (state_23143[(16)]);
var state_23143__$1 = state_23143;
var statearr_23180_23215 = state_23143__$1;
(statearr_23180_23215[(2)] = inst_23117);

(statearr_23180_23215[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (8))){
var inst_23096 = (state_23143[(7)]);
var inst_23105 = (inst_23096 == null);
var state_23143__$1 = state_23143;
if(cljs.core.truth_(inst_23105)){
var statearr_23181_23216 = state_23143__$1;
(statearr_23181_23216[(1)] = (11));

} else {
var statearr_23182_23217 = state_23143__$1;
(statearr_23182_23217[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__22075__auto__ = null;
var cljs$core$async$mix_$_state_machine__22075__auto____0 = (function (){
var statearr_23183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23183[(0)] = cljs$core$async$mix_$_state_machine__22075__auto__);

(statearr_23183[(1)] = (1));

return statearr_23183;
});
var cljs$core$async$mix_$_state_machine__22075__auto____1 = (function (state_23143){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23184){if((e23184 instanceof Object)){
var ex__22078__auto__ = e23184;
var statearr_23185_23218 = state_23143;
(statearr_23185_23218[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23143;
state_23143 = G__23219;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22075__auto__ = function(state_23143){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22075__auto____1.call(this,state_23143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22075__auto____0;
cljs$core$async$mix_$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22075__auto____1;
return cljs$core$async$mix_$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23186 = f__22172__auto__.call(null);
(statearr_23186[(6)] = c__22171__auto___23187);

return statearr_23186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23222 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23222.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23223 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23223.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23224 = (function() {
var G__23225 = null;
var G__23225__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__23225__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__23225 = function(p,v){
switch(arguments.length){
case 1:
return G__23225__1.call(this,p);
case 2:
return G__23225__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23225.cljs$core$IFn$_invoke$arity$1 = G__23225__1;
G__23225.cljs$core$IFn$_invoke$arity$2 = G__23225__2;
return G__23225;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23221 = arguments.length;
switch (G__23221) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23224.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23224.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23229 = arguments.length;
switch (G__23229) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__23227_SHARP_){
if(cljs.core.truth_(p1__23227_SHARP_.call(null,topic))){
return p1__23227_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23227_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23230 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23231){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23231 = meta23231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23232,meta23231__$1){
var self__ = this;
var _23232__$1 = this;
return (new cljs.core.async.t_cljs$core$async23230(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23231__$1));
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23232){
var self__ = this;
var _23232__$1 = this;
return self__.meta23231;
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23231","meta23231",-1051178705,null)], null);
}));

(cljs.core.async.t_cljs$core$async23230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23230");

(cljs.core.async.t_cljs$core$async23230.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23230.
 */
cljs.core.async.__GT_t_cljs$core$async23230 = (function cljs$core$async$__GT_t_cljs$core$async23230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23231){
return (new cljs.core.async.t_cljs$core$async23230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23231));
});

}

return (new cljs.core.async.t_cljs$core$async23230(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22171__auto___23350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23304){
var state_val_23305 = (state_23304[(1)]);
if((state_val_23305 === (7))){
var inst_23300 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23306_23351 = state_23304__$1;
(statearr_23306_23351[(2)] = inst_23300);

(statearr_23306_23351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (20))){
var state_23304__$1 = state_23304;
var statearr_23307_23352 = state_23304__$1;
(statearr_23307_23352[(2)] = null);

(statearr_23307_23352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (1))){
var state_23304__$1 = state_23304;
var statearr_23308_23353 = state_23304__$1;
(statearr_23308_23353[(2)] = null);

(statearr_23308_23353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (24))){
var inst_23283 = (state_23304[(7)]);
var inst_23292 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23283);
var state_23304__$1 = state_23304;
var statearr_23309_23354 = state_23304__$1;
(statearr_23309_23354[(2)] = inst_23292);

(statearr_23309_23354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (4))){
var inst_23235 = (state_23304[(8)]);
var inst_23235__$1 = (state_23304[(2)]);
var inst_23236 = (inst_23235__$1 == null);
var state_23304__$1 = (function (){var statearr_23310 = state_23304;
(statearr_23310[(8)] = inst_23235__$1);

return statearr_23310;
})();
if(cljs.core.truth_(inst_23236)){
var statearr_23311_23355 = state_23304__$1;
(statearr_23311_23355[(1)] = (5));

} else {
var statearr_23312_23356 = state_23304__$1;
(statearr_23312_23356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (15))){
var inst_23277 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23313_23357 = state_23304__$1;
(statearr_23313_23357[(2)] = inst_23277);

(statearr_23313_23357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (21))){
var inst_23297 = (state_23304[(2)]);
var state_23304__$1 = (function (){var statearr_23314 = state_23304;
(statearr_23314[(9)] = inst_23297);

return statearr_23314;
})();
var statearr_23315_23358 = state_23304__$1;
(statearr_23315_23358[(2)] = null);

(statearr_23315_23358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (13))){
var inst_23259 = (state_23304[(10)]);
var inst_23261 = cljs.core.chunked_seq_QMARK_.call(null,inst_23259);
var state_23304__$1 = state_23304;
if(inst_23261){
var statearr_23316_23359 = state_23304__$1;
(statearr_23316_23359[(1)] = (16));

} else {
var statearr_23317_23360 = state_23304__$1;
(statearr_23317_23360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (22))){
var inst_23289 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
if(cljs.core.truth_(inst_23289)){
var statearr_23318_23361 = state_23304__$1;
(statearr_23318_23361[(1)] = (23));

} else {
var statearr_23319_23362 = state_23304__$1;
(statearr_23319_23362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (6))){
var inst_23285 = (state_23304[(11)]);
var inst_23235 = (state_23304[(8)]);
var inst_23283 = (state_23304[(7)]);
var inst_23283__$1 = topic_fn.call(null,inst_23235);
var inst_23284 = cljs.core.deref.call(null,mults);
var inst_23285__$1 = cljs.core.get.call(null,inst_23284,inst_23283__$1);
var state_23304__$1 = (function (){var statearr_23320 = state_23304;
(statearr_23320[(11)] = inst_23285__$1);

(statearr_23320[(7)] = inst_23283__$1);

return statearr_23320;
})();
if(cljs.core.truth_(inst_23285__$1)){
var statearr_23321_23363 = state_23304__$1;
(statearr_23321_23363[(1)] = (19));

} else {
var statearr_23322_23364 = state_23304__$1;
(statearr_23322_23364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (25))){
var inst_23294 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23323_23365 = state_23304__$1;
(statearr_23323_23365[(2)] = inst_23294);

(statearr_23323_23365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (17))){
var inst_23259 = (state_23304[(10)]);
var inst_23268 = cljs.core.first.call(null,inst_23259);
var inst_23269 = cljs.core.async.muxch_STAR_.call(null,inst_23268);
var inst_23270 = cljs.core.async.close_BANG_.call(null,inst_23269);
var inst_23271 = cljs.core.next.call(null,inst_23259);
var inst_23245 = inst_23271;
var inst_23246 = null;
var inst_23247 = (0);
var inst_23248 = (0);
var state_23304__$1 = (function (){var statearr_23324 = state_23304;
(statearr_23324[(12)] = inst_23270);

(statearr_23324[(13)] = inst_23247);

(statearr_23324[(14)] = inst_23246);

(statearr_23324[(15)] = inst_23245);

(statearr_23324[(16)] = inst_23248);

return statearr_23324;
})();
var statearr_23325_23366 = state_23304__$1;
(statearr_23325_23366[(2)] = null);

(statearr_23325_23366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (3))){
var inst_23302 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23304__$1,inst_23302);
} else {
if((state_val_23305 === (12))){
var inst_23279 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23326_23367 = state_23304__$1;
(statearr_23326_23367[(2)] = inst_23279);

(statearr_23326_23367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (2))){
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23304__$1,(4),ch);
} else {
if((state_val_23305 === (23))){
var state_23304__$1 = state_23304;
var statearr_23327_23368 = state_23304__$1;
(statearr_23327_23368[(2)] = null);

(statearr_23327_23368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (19))){
var inst_23285 = (state_23304[(11)]);
var inst_23235 = (state_23304[(8)]);
var inst_23287 = cljs.core.async.muxch_STAR_.call(null,inst_23285);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23304__$1,(22),inst_23287,inst_23235);
} else {
if((state_val_23305 === (11))){
var inst_23259 = (state_23304[(10)]);
var inst_23245 = (state_23304[(15)]);
var inst_23259__$1 = cljs.core.seq.call(null,inst_23245);
var state_23304__$1 = (function (){var statearr_23328 = state_23304;
(statearr_23328[(10)] = inst_23259__$1);

return statearr_23328;
})();
if(inst_23259__$1){
var statearr_23329_23369 = state_23304__$1;
(statearr_23329_23369[(1)] = (13));

} else {
var statearr_23330_23370 = state_23304__$1;
(statearr_23330_23370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (9))){
var inst_23281 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23331_23371 = state_23304__$1;
(statearr_23331_23371[(2)] = inst_23281);

(statearr_23331_23371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (5))){
var inst_23242 = cljs.core.deref.call(null,mults);
var inst_23243 = cljs.core.vals.call(null,inst_23242);
var inst_23244 = cljs.core.seq.call(null,inst_23243);
var inst_23245 = inst_23244;
var inst_23246 = null;
var inst_23247 = (0);
var inst_23248 = (0);
var state_23304__$1 = (function (){var statearr_23332 = state_23304;
(statearr_23332[(13)] = inst_23247);

(statearr_23332[(14)] = inst_23246);

(statearr_23332[(15)] = inst_23245);

(statearr_23332[(16)] = inst_23248);

return statearr_23332;
})();
var statearr_23333_23372 = state_23304__$1;
(statearr_23333_23372[(2)] = null);

(statearr_23333_23372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (14))){
var state_23304__$1 = state_23304;
var statearr_23337_23373 = state_23304__$1;
(statearr_23337_23373[(2)] = null);

(statearr_23337_23373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (16))){
var inst_23259 = (state_23304[(10)]);
var inst_23263 = cljs.core.chunk_first.call(null,inst_23259);
var inst_23264 = cljs.core.chunk_rest.call(null,inst_23259);
var inst_23265 = cljs.core.count.call(null,inst_23263);
var inst_23245 = inst_23264;
var inst_23246 = inst_23263;
var inst_23247 = inst_23265;
var inst_23248 = (0);
var state_23304__$1 = (function (){var statearr_23338 = state_23304;
(statearr_23338[(13)] = inst_23247);

(statearr_23338[(14)] = inst_23246);

(statearr_23338[(15)] = inst_23245);

(statearr_23338[(16)] = inst_23248);

return statearr_23338;
})();
var statearr_23339_23374 = state_23304__$1;
(statearr_23339_23374[(2)] = null);

(statearr_23339_23374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (10))){
var inst_23247 = (state_23304[(13)]);
var inst_23246 = (state_23304[(14)]);
var inst_23245 = (state_23304[(15)]);
var inst_23248 = (state_23304[(16)]);
var inst_23253 = cljs.core._nth.call(null,inst_23246,inst_23248);
var inst_23254 = cljs.core.async.muxch_STAR_.call(null,inst_23253);
var inst_23255 = cljs.core.async.close_BANG_.call(null,inst_23254);
var inst_23256 = (inst_23248 + (1));
var tmp23334 = inst_23247;
var tmp23335 = inst_23246;
var tmp23336 = inst_23245;
var inst_23245__$1 = tmp23336;
var inst_23246__$1 = tmp23335;
var inst_23247__$1 = tmp23334;
var inst_23248__$1 = inst_23256;
var state_23304__$1 = (function (){var statearr_23340 = state_23304;
(statearr_23340[(17)] = inst_23255);

(statearr_23340[(13)] = inst_23247__$1);

(statearr_23340[(14)] = inst_23246__$1);

(statearr_23340[(15)] = inst_23245__$1);

(statearr_23340[(16)] = inst_23248__$1);

return statearr_23340;
})();
var statearr_23341_23375 = state_23304__$1;
(statearr_23341_23375[(2)] = null);

(statearr_23341_23375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (18))){
var inst_23274 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23342_23376 = state_23304__$1;
(statearr_23342_23376[(2)] = inst_23274);

(statearr_23342_23376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (8))){
var inst_23247 = (state_23304[(13)]);
var inst_23248 = (state_23304[(16)]);
var inst_23250 = (inst_23248 < inst_23247);
var inst_23251 = inst_23250;
var state_23304__$1 = state_23304;
if(cljs.core.truth_(inst_23251)){
var statearr_23343_23377 = state_23304__$1;
(statearr_23343_23377[(1)] = (10));

} else {
var statearr_23344_23378 = state_23304__$1;
(statearr_23344_23378[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23345[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23345[(1)] = (1));

return statearr_23345;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23304){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23346){if((e23346 instanceof Object)){
var ex__22078__auto__ = e23346;
var statearr_23347_23379 = state_23304;
(statearr_23347_23379[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23380 = state_23304;
state_23304 = G__23380;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23348 = f__22172__auto__.call(null);
(statearr_23348[(6)] = c__22171__auto___23350);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__23382 = arguments.length;
switch (G__23382) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23385 = arguments.length;
switch (G__23385) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__23388 = arguments.length;
switch (G__23388) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__22171__auto___23455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23427){
var state_val_23428 = (state_23427[(1)]);
if((state_val_23428 === (7))){
var state_23427__$1 = state_23427;
var statearr_23429_23456 = state_23427__$1;
(statearr_23429_23456[(2)] = null);

(statearr_23429_23456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (1))){
var state_23427__$1 = state_23427;
var statearr_23430_23457 = state_23427__$1;
(statearr_23430_23457[(2)] = null);

(statearr_23430_23457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (4))){
var inst_23391 = (state_23427[(7)]);
var inst_23393 = (inst_23391 < cnt);
var state_23427__$1 = state_23427;
if(cljs.core.truth_(inst_23393)){
var statearr_23431_23458 = state_23427__$1;
(statearr_23431_23458[(1)] = (6));

} else {
var statearr_23432_23459 = state_23427__$1;
(statearr_23432_23459[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (15))){
var inst_23423 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23433_23460 = state_23427__$1;
(statearr_23433_23460[(2)] = inst_23423);

(statearr_23433_23460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (13))){
var inst_23416 = cljs.core.async.close_BANG_.call(null,out);
var state_23427__$1 = state_23427;
var statearr_23434_23461 = state_23427__$1;
(statearr_23434_23461[(2)] = inst_23416);

(statearr_23434_23461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (6))){
var state_23427__$1 = state_23427;
var statearr_23435_23462 = state_23427__$1;
(statearr_23435_23462[(2)] = null);

(statearr_23435_23462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (3))){
var inst_23425 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23427__$1,inst_23425);
} else {
if((state_val_23428 === (12))){
var inst_23413 = (state_23427[(8)]);
var inst_23413__$1 = (state_23427[(2)]);
var inst_23414 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23413__$1);
var state_23427__$1 = (function (){var statearr_23436 = state_23427;
(statearr_23436[(8)] = inst_23413__$1);

return statearr_23436;
})();
if(cljs.core.truth_(inst_23414)){
var statearr_23437_23463 = state_23427__$1;
(statearr_23437_23463[(1)] = (13));

} else {
var statearr_23438_23464 = state_23427__$1;
(statearr_23438_23464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (2))){
var inst_23390 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23391 = (0);
var state_23427__$1 = (function (){var statearr_23439 = state_23427;
(statearr_23439[(7)] = inst_23391);

(statearr_23439[(9)] = inst_23390);

return statearr_23439;
})();
var statearr_23440_23465 = state_23427__$1;
(statearr_23440_23465[(2)] = null);

(statearr_23440_23465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (11))){
var inst_23391 = (state_23427[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23427,(10),Object,null,(9));
var inst_23400 = chs__$1.call(null,inst_23391);
var inst_23401 = done.call(null,inst_23391);
var inst_23402 = cljs.core.async.take_BANG_.call(null,inst_23400,inst_23401);
var state_23427__$1 = state_23427;
var statearr_23441_23466 = state_23427__$1;
(statearr_23441_23466[(2)] = inst_23402);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (9))){
var inst_23391 = (state_23427[(7)]);
var inst_23404 = (state_23427[(2)]);
var inst_23405 = (inst_23391 + (1));
var inst_23391__$1 = inst_23405;
var state_23427__$1 = (function (){var statearr_23442 = state_23427;
(statearr_23442[(7)] = inst_23391__$1);

(statearr_23442[(10)] = inst_23404);

return statearr_23442;
})();
var statearr_23443_23467 = state_23427__$1;
(statearr_23443_23467[(2)] = null);

(statearr_23443_23467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (5))){
var inst_23411 = (state_23427[(2)]);
var state_23427__$1 = (function (){var statearr_23444 = state_23427;
(statearr_23444[(11)] = inst_23411);

return statearr_23444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23427__$1,(12),dchan);
} else {
if((state_val_23428 === (14))){
var inst_23413 = (state_23427[(8)]);
var inst_23418 = cljs.core.apply.call(null,f,inst_23413);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23427__$1,(16),out,inst_23418);
} else {
if((state_val_23428 === (16))){
var inst_23420 = (state_23427[(2)]);
var state_23427__$1 = (function (){var statearr_23445 = state_23427;
(statearr_23445[(12)] = inst_23420);

return statearr_23445;
})();
var statearr_23446_23468 = state_23427__$1;
(statearr_23446_23468[(2)] = null);

(statearr_23446_23468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (10))){
var inst_23395 = (state_23427[(2)]);
var inst_23396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23427__$1 = (function (){var statearr_23447 = state_23427;
(statearr_23447[(13)] = inst_23395);

return statearr_23447;
})();
var statearr_23448_23469 = state_23427__$1;
(statearr_23448_23469[(2)] = inst_23396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (8))){
var inst_23409 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23449_23470 = state_23427__$1;
(statearr_23449_23470[(2)] = inst_23409);

(statearr_23449_23470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23450[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23450[(1)] = (1));

return statearr_23450;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23427){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23451){if((e23451 instanceof Object)){
var ex__22078__auto__ = e23451;
var statearr_23452_23471 = state_23427;
(statearr_23452_23471[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23472 = state_23427;
state_23427 = G__23472;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23453 = f__22172__auto__.call(null);
(statearr_23453[(6)] = c__22171__auto___23455);

return statearr_23453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23475 = arguments.length;
switch (G__23475) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___23529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23507){
var state_val_23508 = (state_23507[(1)]);
if((state_val_23508 === (7))){
var inst_23486 = (state_23507[(7)]);
var inst_23487 = (state_23507[(8)]);
var inst_23486__$1 = (state_23507[(2)]);
var inst_23487__$1 = cljs.core.nth.call(null,inst_23486__$1,(0),null);
var inst_23488 = cljs.core.nth.call(null,inst_23486__$1,(1),null);
var inst_23489 = (inst_23487__$1 == null);
var state_23507__$1 = (function (){var statearr_23509 = state_23507;
(statearr_23509[(9)] = inst_23488);

(statearr_23509[(7)] = inst_23486__$1);

(statearr_23509[(8)] = inst_23487__$1);

return statearr_23509;
})();
if(cljs.core.truth_(inst_23489)){
var statearr_23510_23530 = state_23507__$1;
(statearr_23510_23530[(1)] = (8));

} else {
var statearr_23511_23531 = state_23507__$1;
(statearr_23511_23531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (1))){
var inst_23476 = cljs.core.vec.call(null,chs);
var inst_23477 = inst_23476;
var state_23507__$1 = (function (){var statearr_23512 = state_23507;
(statearr_23512[(10)] = inst_23477);

return statearr_23512;
})();
var statearr_23513_23532 = state_23507__$1;
(statearr_23513_23532[(2)] = null);

(statearr_23513_23532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (4))){
var inst_23477 = (state_23507[(10)]);
var state_23507__$1 = state_23507;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23507__$1,(7),inst_23477);
} else {
if((state_val_23508 === (6))){
var inst_23503 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
var statearr_23514_23533 = state_23507__$1;
(statearr_23514_23533[(2)] = inst_23503);

(statearr_23514_23533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (3))){
var inst_23505 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23507__$1,inst_23505);
} else {
if((state_val_23508 === (2))){
var inst_23477 = (state_23507[(10)]);
var inst_23479 = cljs.core.count.call(null,inst_23477);
var inst_23480 = (inst_23479 > (0));
var state_23507__$1 = state_23507;
if(cljs.core.truth_(inst_23480)){
var statearr_23516_23534 = state_23507__$1;
(statearr_23516_23534[(1)] = (4));

} else {
var statearr_23517_23535 = state_23507__$1;
(statearr_23517_23535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (11))){
var inst_23477 = (state_23507[(10)]);
var inst_23496 = (state_23507[(2)]);
var tmp23515 = inst_23477;
var inst_23477__$1 = tmp23515;
var state_23507__$1 = (function (){var statearr_23518 = state_23507;
(statearr_23518[(11)] = inst_23496);

(statearr_23518[(10)] = inst_23477__$1);

return statearr_23518;
})();
var statearr_23519_23536 = state_23507__$1;
(statearr_23519_23536[(2)] = null);

(statearr_23519_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (9))){
var inst_23487 = (state_23507[(8)]);
var state_23507__$1 = state_23507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23507__$1,(11),out,inst_23487);
} else {
if((state_val_23508 === (5))){
var inst_23501 = cljs.core.async.close_BANG_.call(null,out);
var state_23507__$1 = state_23507;
var statearr_23520_23537 = state_23507__$1;
(statearr_23520_23537[(2)] = inst_23501);

(statearr_23520_23537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (10))){
var inst_23499 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
var statearr_23521_23538 = state_23507__$1;
(statearr_23521_23538[(2)] = inst_23499);

(statearr_23521_23538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (8))){
var inst_23488 = (state_23507[(9)]);
var inst_23477 = (state_23507[(10)]);
var inst_23486 = (state_23507[(7)]);
var inst_23487 = (state_23507[(8)]);
var inst_23491 = (function (){var cs = inst_23477;
var vec__23482 = inst_23486;
var v = inst_23487;
var c = inst_23488;
return (function (p1__23473_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23473_SHARP_);
});
})();
var inst_23492 = cljs.core.filterv.call(null,inst_23491,inst_23477);
var inst_23477__$1 = inst_23492;
var state_23507__$1 = (function (){var statearr_23522 = state_23507;
(statearr_23522[(10)] = inst_23477__$1);

return statearr_23522;
})();
var statearr_23523_23539 = state_23507__$1;
(statearr_23523_23539[(2)] = null);

(statearr_23523_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23524[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23524[(1)] = (1));

return statearr_23524;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23507){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23525){if((e23525 instanceof Object)){
var ex__22078__auto__ = e23525;
var statearr_23526_23540 = state_23507;
(statearr_23526_23540[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23541 = state_23507;
state_23507 = G__23541;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23527 = f__22172__auto__.call(null);
(statearr_23527[(6)] = c__22171__auto___23529);

return statearr_23527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23543 = arguments.length;
switch (G__23543) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___23588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23567){
var state_val_23568 = (state_23567[(1)]);
if((state_val_23568 === (7))){
var inst_23549 = (state_23567[(7)]);
var inst_23549__$1 = (state_23567[(2)]);
var inst_23550 = (inst_23549__$1 == null);
var inst_23551 = cljs.core.not.call(null,inst_23550);
var state_23567__$1 = (function (){var statearr_23569 = state_23567;
(statearr_23569[(7)] = inst_23549__$1);

return statearr_23569;
})();
if(inst_23551){
var statearr_23570_23589 = state_23567__$1;
(statearr_23570_23589[(1)] = (8));

} else {
var statearr_23571_23590 = state_23567__$1;
(statearr_23571_23590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (1))){
var inst_23544 = (0);
var state_23567__$1 = (function (){var statearr_23572 = state_23567;
(statearr_23572[(8)] = inst_23544);

return statearr_23572;
})();
var statearr_23573_23591 = state_23567__$1;
(statearr_23573_23591[(2)] = null);

(statearr_23573_23591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (4))){
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23567__$1,(7),ch);
} else {
if((state_val_23568 === (6))){
var inst_23562 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23574_23592 = state_23567__$1;
(statearr_23574_23592[(2)] = inst_23562);

(statearr_23574_23592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (3))){
var inst_23564 = (state_23567[(2)]);
var inst_23565 = cljs.core.async.close_BANG_.call(null,out);
var state_23567__$1 = (function (){var statearr_23575 = state_23567;
(statearr_23575[(9)] = inst_23564);

return statearr_23575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23567__$1,inst_23565);
} else {
if((state_val_23568 === (2))){
var inst_23544 = (state_23567[(8)]);
var inst_23546 = (inst_23544 < n);
var state_23567__$1 = state_23567;
if(cljs.core.truth_(inst_23546)){
var statearr_23576_23593 = state_23567__$1;
(statearr_23576_23593[(1)] = (4));

} else {
var statearr_23577_23594 = state_23567__$1;
(statearr_23577_23594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (11))){
var inst_23544 = (state_23567[(8)]);
var inst_23554 = (state_23567[(2)]);
var inst_23555 = (inst_23544 + (1));
var inst_23544__$1 = inst_23555;
var state_23567__$1 = (function (){var statearr_23578 = state_23567;
(statearr_23578[(8)] = inst_23544__$1);

(statearr_23578[(10)] = inst_23554);

return statearr_23578;
})();
var statearr_23579_23595 = state_23567__$1;
(statearr_23579_23595[(2)] = null);

(statearr_23579_23595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (9))){
var state_23567__$1 = state_23567;
var statearr_23580_23596 = state_23567__$1;
(statearr_23580_23596[(2)] = null);

(statearr_23580_23596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (5))){
var state_23567__$1 = state_23567;
var statearr_23581_23597 = state_23567__$1;
(statearr_23581_23597[(2)] = null);

(statearr_23581_23597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (10))){
var inst_23559 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23582_23598 = state_23567__$1;
(statearr_23582_23598[(2)] = inst_23559);

(statearr_23582_23598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (8))){
var inst_23549 = (state_23567[(7)]);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23567__$1,(11),out,inst_23549);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23583[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23583[(1)] = (1));

return statearr_23583;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23567){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23584){if((e23584 instanceof Object)){
var ex__22078__auto__ = e23584;
var statearr_23585_23599 = state_23567;
(statearr_23585_23599[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23600 = state_23567;
state_23567 = G__23600;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23586 = f__22172__auto__.call(null);
(statearr_23586[(6)] = c__22171__auto___23588);

return statearr_23586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23602 = (function (f,ch,meta23603){
this.f = f;
this.ch = ch;
this.meta23603 = meta23603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23604,meta23603__$1){
var self__ = this;
var _23604__$1 = this;
return (new cljs.core.async.t_cljs$core$async23602(self__.f,self__.ch,meta23603__$1));
}));

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23604){
var self__ = this;
var _23604__$1 = this;
return self__.meta23603;
}));

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23605 = (function (f,ch,meta23603,_,fn1,meta23606){
this.f = f;
this.ch = ch;
this.meta23603 = meta23603;
this._ = _;
this.fn1 = fn1;
this.meta23606 = meta23606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23607,meta23606__$1){
var self__ = this;
var _23607__$1 = this;
return (new cljs.core.async.t_cljs$core$async23605(self__.f,self__.ch,self__.meta23603,self__._,self__.fn1,meta23606__$1));
}));

(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23607){
var self__ = this;
var _23607__$1 = this;
return self__.meta23606;
}));

(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__23601_SHARP_){
return f1.call(null,(((p1__23601_SHARP_ == null))?null:self__.f.call(null,p1__23601_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async23605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23603","meta23603",1701112037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23602","cljs.core.async/t_cljs$core$async23602",1159635431,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23606","meta23606",-201881407,null)], null);
}));

(cljs.core.async.t_cljs$core$async23605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23605");

(cljs.core.async.t_cljs$core$async23605.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23605.
 */
cljs.core.async.__GT_t_cljs$core$async23605 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23605(f__$1,ch__$1,meta23603__$1,___$2,fn1__$1,meta23606){
return (new cljs.core.async.t_cljs$core$async23605(f__$1,ch__$1,meta23603__$1,___$2,fn1__$1,meta23606));
});

}

return (new cljs.core.async.t_cljs$core$async23605(self__.f,self__.ch,self__.meta23603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23603","meta23603",1701112037,null)], null);
}));

(cljs.core.async.t_cljs$core$async23602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23602");

(cljs.core.async.t_cljs$core$async23602.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23602.
 */
cljs.core.async.__GT_t_cljs$core$async23602 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23602(f__$1,ch__$1,meta23603){
return (new cljs.core.async.t_cljs$core$async23602(f__$1,ch__$1,meta23603));
});

}

return (new cljs.core.async.t_cljs$core$async23602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23608 = (function (f,ch,meta23609){
this.f = f;
this.ch = ch;
this.meta23609 = meta23609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23610,meta23609__$1){
var self__ = this;
var _23610__$1 = this;
return (new cljs.core.async.t_cljs$core$async23608(self__.f,self__.ch,meta23609__$1));
}));

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23610){
var self__ = this;
var _23610__$1 = this;
return self__.meta23609;
}));

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async23608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23609","meta23609",-1106122007,null)], null);
}));

(cljs.core.async.t_cljs$core$async23608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23608");

(cljs.core.async.t_cljs$core$async23608.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23608.
 */
cljs.core.async.__GT_t_cljs$core$async23608 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23608(f__$1,ch__$1,meta23609){
return (new cljs.core.async.t_cljs$core$async23608(f__$1,ch__$1,meta23609));
});

}

return (new cljs.core.async.t_cljs$core$async23608(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23611 = (function (p,ch,meta23612){
this.p = p;
this.ch = ch;
this.meta23612 = meta23612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23613,meta23612__$1){
var self__ = this;
var _23613__$1 = this;
return (new cljs.core.async.t_cljs$core$async23611(self__.p,self__.ch,meta23612__$1));
}));

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23613){
var self__ = this;
var _23613__$1 = this;
return self__.meta23612;
}));

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23612","meta23612",-1843547802,null)], null);
}));

(cljs.core.async.t_cljs$core$async23611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23611");

(cljs.core.async.t_cljs$core$async23611.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23611.
 */
cljs.core.async.__GT_t_cljs$core$async23611 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23611(p__$1,ch__$1,meta23612){
return (new cljs.core.async.t_cljs$core$async23611(p__$1,ch__$1,meta23612));
});

}

return (new cljs.core.async.t_cljs$core$async23611(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23615 = arguments.length;
switch (G__23615) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___23655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23636){
var state_val_23637 = (state_23636[(1)]);
if((state_val_23637 === (7))){
var inst_23632 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23638_23656 = state_23636__$1;
(statearr_23638_23656[(2)] = inst_23632);

(statearr_23638_23656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (1))){
var state_23636__$1 = state_23636;
var statearr_23639_23657 = state_23636__$1;
(statearr_23639_23657[(2)] = null);

(statearr_23639_23657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (4))){
var inst_23618 = (state_23636[(7)]);
var inst_23618__$1 = (state_23636[(2)]);
var inst_23619 = (inst_23618__$1 == null);
var state_23636__$1 = (function (){var statearr_23640 = state_23636;
(statearr_23640[(7)] = inst_23618__$1);

return statearr_23640;
})();
if(cljs.core.truth_(inst_23619)){
var statearr_23641_23658 = state_23636__$1;
(statearr_23641_23658[(1)] = (5));

} else {
var statearr_23642_23659 = state_23636__$1;
(statearr_23642_23659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (6))){
var inst_23618 = (state_23636[(7)]);
var inst_23623 = p.call(null,inst_23618);
var state_23636__$1 = state_23636;
if(cljs.core.truth_(inst_23623)){
var statearr_23643_23660 = state_23636__$1;
(statearr_23643_23660[(1)] = (8));

} else {
var statearr_23644_23661 = state_23636__$1;
(statearr_23644_23661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (3))){
var inst_23634 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23636__$1,inst_23634);
} else {
if((state_val_23637 === (2))){
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23636__$1,(4),ch);
} else {
if((state_val_23637 === (11))){
var inst_23626 = (state_23636[(2)]);
var state_23636__$1 = state_23636;
var statearr_23645_23662 = state_23636__$1;
(statearr_23645_23662[(2)] = inst_23626);

(statearr_23645_23662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (9))){
var state_23636__$1 = state_23636;
var statearr_23646_23663 = state_23636__$1;
(statearr_23646_23663[(2)] = null);

(statearr_23646_23663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (5))){
var inst_23621 = cljs.core.async.close_BANG_.call(null,out);
var state_23636__$1 = state_23636;
var statearr_23647_23664 = state_23636__$1;
(statearr_23647_23664[(2)] = inst_23621);

(statearr_23647_23664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (10))){
var inst_23629 = (state_23636[(2)]);
var state_23636__$1 = (function (){var statearr_23648 = state_23636;
(statearr_23648[(8)] = inst_23629);

return statearr_23648;
})();
var statearr_23649_23665 = state_23636__$1;
(statearr_23649_23665[(2)] = null);

(statearr_23649_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23637 === (8))){
var inst_23618 = (state_23636[(7)]);
var state_23636__$1 = state_23636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23636__$1,(11),out,inst_23618);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23636){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__22078__auto__ = e23651;
var statearr_23652_23666 = state_23636;
(statearr_23652_23666[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23667 = state_23636;
state_23636 = G__23667;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23653 = f__22172__auto__.call(null);
(statearr_23653[(6)] = c__22171__auto___23655);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23669 = arguments.length;
switch (G__23669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23732){
var state_val_23733 = (state_23732[(1)]);
if((state_val_23733 === (7))){
var inst_23728 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23734_23772 = state_23732__$1;
(statearr_23734_23772[(2)] = inst_23728);

(statearr_23734_23772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (20))){
var inst_23698 = (state_23732[(7)]);
var inst_23709 = (state_23732[(2)]);
var inst_23710 = cljs.core.next.call(null,inst_23698);
var inst_23684 = inst_23710;
var inst_23685 = null;
var inst_23686 = (0);
var inst_23687 = (0);
var state_23732__$1 = (function (){var statearr_23735 = state_23732;
(statearr_23735[(8)] = inst_23687);

(statearr_23735[(9)] = inst_23709);

(statearr_23735[(10)] = inst_23684);

(statearr_23735[(11)] = inst_23685);

(statearr_23735[(12)] = inst_23686);

return statearr_23735;
})();
var statearr_23736_23773 = state_23732__$1;
(statearr_23736_23773[(2)] = null);

(statearr_23736_23773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (1))){
var state_23732__$1 = state_23732;
var statearr_23737_23774 = state_23732__$1;
(statearr_23737_23774[(2)] = null);

(statearr_23737_23774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (4))){
var inst_23673 = (state_23732[(13)]);
var inst_23673__$1 = (state_23732[(2)]);
var inst_23674 = (inst_23673__$1 == null);
var state_23732__$1 = (function (){var statearr_23738 = state_23732;
(statearr_23738[(13)] = inst_23673__$1);

return statearr_23738;
})();
if(cljs.core.truth_(inst_23674)){
var statearr_23739_23775 = state_23732__$1;
(statearr_23739_23775[(1)] = (5));

} else {
var statearr_23740_23776 = state_23732__$1;
(statearr_23740_23776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (15))){
var state_23732__$1 = state_23732;
var statearr_23744_23777 = state_23732__$1;
(statearr_23744_23777[(2)] = null);

(statearr_23744_23777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (21))){
var state_23732__$1 = state_23732;
var statearr_23745_23778 = state_23732__$1;
(statearr_23745_23778[(2)] = null);

(statearr_23745_23778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (13))){
var inst_23687 = (state_23732[(8)]);
var inst_23684 = (state_23732[(10)]);
var inst_23685 = (state_23732[(11)]);
var inst_23686 = (state_23732[(12)]);
var inst_23694 = (state_23732[(2)]);
var inst_23695 = (inst_23687 + (1));
var tmp23741 = inst_23684;
var tmp23742 = inst_23685;
var tmp23743 = inst_23686;
var inst_23684__$1 = tmp23741;
var inst_23685__$1 = tmp23742;
var inst_23686__$1 = tmp23743;
var inst_23687__$1 = inst_23695;
var state_23732__$1 = (function (){var statearr_23746 = state_23732;
(statearr_23746[(8)] = inst_23687__$1);

(statearr_23746[(10)] = inst_23684__$1);

(statearr_23746[(14)] = inst_23694);

(statearr_23746[(11)] = inst_23685__$1);

(statearr_23746[(12)] = inst_23686__$1);

return statearr_23746;
})();
var statearr_23747_23779 = state_23732__$1;
(statearr_23747_23779[(2)] = null);

(statearr_23747_23779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (22))){
var state_23732__$1 = state_23732;
var statearr_23748_23780 = state_23732__$1;
(statearr_23748_23780[(2)] = null);

(statearr_23748_23780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (6))){
var inst_23673 = (state_23732[(13)]);
var inst_23682 = f.call(null,inst_23673);
var inst_23683 = cljs.core.seq.call(null,inst_23682);
var inst_23684 = inst_23683;
var inst_23685 = null;
var inst_23686 = (0);
var inst_23687 = (0);
var state_23732__$1 = (function (){var statearr_23749 = state_23732;
(statearr_23749[(8)] = inst_23687);

(statearr_23749[(10)] = inst_23684);

(statearr_23749[(11)] = inst_23685);

(statearr_23749[(12)] = inst_23686);

return statearr_23749;
})();
var statearr_23750_23781 = state_23732__$1;
(statearr_23750_23781[(2)] = null);

(statearr_23750_23781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (17))){
var inst_23698 = (state_23732[(7)]);
var inst_23702 = cljs.core.chunk_first.call(null,inst_23698);
var inst_23703 = cljs.core.chunk_rest.call(null,inst_23698);
var inst_23704 = cljs.core.count.call(null,inst_23702);
var inst_23684 = inst_23703;
var inst_23685 = inst_23702;
var inst_23686 = inst_23704;
var inst_23687 = (0);
var state_23732__$1 = (function (){var statearr_23751 = state_23732;
(statearr_23751[(8)] = inst_23687);

(statearr_23751[(10)] = inst_23684);

(statearr_23751[(11)] = inst_23685);

(statearr_23751[(12)] = inst_23686);

return statearr_23751;
})();
var statearr_23752_23782 = state_23732__$1;
(statearr_23752_23782[(2)] = null);

(statearr_23752_23782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (3))){
var inst_23730 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23732__$1,inst_23730);
} else {
if((state_val_23733 === (12))){
var inst_23718 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23753_23783 = state_23732__$1;
(statearr_23753_23783[(2)] = inst_23718);

(statearr_23753_23783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (2))){
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23732__$1,(4),in$);
} else {
if((state_val_23733 === (23))){
var inst_23726 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23754_23784 = state_23732__$1;
(statearr_23754_23784[(2)] = inst_23726);

(statearr_23754_23784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (19))){
var inst_23713 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23755_23785 = state_23732__$1;
(statearr_23755_23785[(2)] = inst_23713);

(statearr_23755_23785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (11))){
var inst_23698 = (state_23732[(7)]);
var inst_23684 = (state_23732[(10)]);
var inst_23698__$1 = cljs.core.seq.call(null,inst_23684);
var state_23732__$1 = (function (){var statearr_23756 = state_23732;
(statearr_23756[(7)] = inst_23698__$1);

return statearr_23756;
})();
if(inst_23698__$1){
var statearr_23757_23786 = state_23732__$1;
(statearr_23757_23786[(1)] = (14));

} else {
var statearr_23758_23787 = state_23732__$1;
(statearr_23758_23787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (9))){
var inst_23720 = (state_23732[(2)]);
var inst_23721 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23732__$1 = (function (){var statearr_23759 = state_23732;
(statearr_23759[(15)] = inst_23720);

return statearr_23759;
})();
if(cljs.core.truth_(inst_23721)){
var statearr_23760_23788 = state_23732__$1;
(statearr_23760_23788[(1)] = (21));

} else {
var statearr_23761_23789 = state_23732__$1;
(statearr_23761_23789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (5))){
var inst_23676 = cljs.core.async.close_BANG_.call(null,out);
var state_23732__$1 = state_23732;
var statearr_23762_23790 = state_23732__$1;
(statearr_23762_23790[(2)] = inst_23676);

(statearr_23762_23790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (14))){
var inst_23698 = (state_23732[(7)]);
var inst_23700 = cljs.core.chunked_seq_QMARK_.call(null,inst_23698);
var state_23732__$1 = state_23732;
if(inst_23700){
var statearr_23763_23791 = state_23732__$1;
(statearr_23763_23791[(1)] = (17));

} else {
var statearr_23764_23792 = state_23732__$1;
(statearr_23764_23792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (16))){
var inst_23716 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23765_23793 = state_23732__$1;
(statearr_23765_23793[(2)] = inst_23716);

(statearr_23765_23793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (10))){
var inst_23687 = (state_23732[(8)]);
var inst_23685 = (state_23732[(11)]);
var inst_23692 = cljs.core._nth.call(null,inst_23685,inst_23687);
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23732__$1,(13),out,inst_23692);
} else {
if((state_val_23733 === (18))){
var inst_23698 = (state_23732[(7)]);
var inst_23707 = cljs.core.first.call(null,inst_23698);
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23732__$1,(20),out,inst_23707);
} else {
if((state_val_23733 === (8))){
var inst_23687 = (state_23732[(8)]);
var inst_23686 = (state_23732[(12)]);
var inst_23689 = (inst_23687 < inst_23686);
var inst_23690 = inst_23689;
var state_23732__$1 = state_23732;
if(cljs.core.truth_(inst_23690)){
var statearr_23766_23794 = state_23732__$1;
(statearr_23766_23794[(1)] = (10));

} else {
var statearr_23767_23795 = state_23732__$1;
(statearr_23767_23795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____0 = (function (){
var statearr_23768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__);

(statearr_23768[(1)] = (1));

return statearr_23768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____1 = (function (state_23732){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23769){if((e23769 instanceof Object)){
var ex__22078__auto__ = e23769;
var statearr_23770_23796 = state_23732;
(statearr_23770_23796[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23797 = state_23732;
state_23732 = G__23797;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__ = function(state_23732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____1.call(this,state_23732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22075__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23771 = f__22172__auto__.call(null);
(statearr_23771[(6)] = c__22171__auto__);

return statearr_23771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));

return c__22171__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23799 = arguments.length;
switch (G__23799) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23802 = arguments.length;
switch (G__23802) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23805 = arguments.length;
switch (G__23805) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___23852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23829){
var state_val_23830 = (state_23829[(1)]);
if((state_val_23830 === (7))){
var inst_23824 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23831_23853 = state_23829__$1;
(statearr_23831_23853[(2)] = inst_23824);

(statearr_23831_23853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (1))){
var inst_23806 = null;
var state_23829__$1 = (function (){var statearr_23832 = state_23829;
(statearr_23832[(7)] = inst_23806);

return statearr_23832;
})();
var statearr_23833_23854 = state_23829__$1;
(statearr_23833_23854[(2)] = null);

(statearr_23833_23854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (4))){
var inst_23809 = (state_23829[(8)]);
var inst_23809__$1 = (state_23829[(2)]);
var inst_23810 = (inst_23809__$1 == null);
var inst_23811 = cljs.core.not.call(null,inst_23810);
var state_23829__$1 = (function (){var statearr_23834 = state_23829;
(statearr_23834[(8)] = inst_23809__$1);

return statearr_23834;
})();
if(inst_23811){
var statearr_23835_23855 = state_23829__$1;
(statearr_23835_23855[(1)] = (5));

} else {
var statearr_23836_23856 = state_23829__$1;
(statearr_23836_23856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (6))){
var state_23829__$1 = state_23829;
var statearr_23837_23857 = state_23829__$1;
(statearr_23837_23857[(2)] = null);

(statearr_23837_23857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (3))){
var inst_23826 = (state_23829[(2)]);
var inst_23827 = cljs.core.async.close_BANG_.call(null,out);
var state_23829__$1 = (function (){var statearr_23838 = state_23829;
(statearr_23838[(9)] = inst_23826);

return statearr_23838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23829__$1,inst_23827);
} else {
if((state_val_23830 === (2))){
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23829__$1,(4),ch);
} else {
if((state_val_23830 === (11))){
var inst_23809 = (state_23829[(8)]);
var inst_23818 = (state_23829[(2)]);
var inst_23806 = inst_23809;
var state_23829__$1 = (function (){var statearr_23839 = state_23829;
(statearr_23839[(7)] = inst_23806);

(statearr_23839[(10)] = inst_23818);

return statearr_23839;
})();
var statearr_23840_23858 = state_23829__$1;
(statearr_23840_23858[(2)] = null);

(statearr_23840_23858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (9))){
var inst_23809 = (state_23829[(8)]);
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23829__$1,(11),out,inst_23809);
} else {
if((state_val_23830 === (5))){
var inst_23806 = (state_23829[(7)]);
var inst_23809 = (state_23829[(8)]);
var inst_23813 = cljs.core._EQ_.call(null,inst_23809,inst_23806);
var state_23829__$1 = state_23829;
if(inst_23813){
var statearr_23842_23859 = state_23829__$1;
(statearr_23842_23859[(1)] = (8));

} else {
var statearr_23843_23860 = state_23829__$1;
(statearr_23843_23860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (10))){
var inst_23821 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23844_23861 = state_23829__$1;
(statearr_23844_23861[(2)] = inst_23821);

(statearr_23844_23861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (8))){
var inst_23806 = (state_23829[(7)]);
var tmp23841 = inst_23806;
var inst_23806__$1 = tmp23841;
var state_23829__$1 = (function (){var statearr_23845 = state_23829;
(statearr_23845[(7)] = inst_23806__$1);

return statearr_23845;
})();
var statearr_23846_23862 = state_23829__$1;
(statearr_23846_23862[(2)] = null);

(statearr_23846_23862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23847[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23847[(1)] = (1));

return statearr_23847;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23829){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23848){if((e23848 instanceof Object)){
var ex__22078__auto__ = e23848;
var statearr_23849_23863 = state_23829;
(statearr_23849_23863[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23864 = state_23829;
state_23829 = G__23864;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23850 = f__22172__auto__.call(null);
(statearr_23850[(6)] = c__22171__auto___23852);

return statearr_23850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23866 = arguments.length;
switch (G__23866) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___23932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23904){
var state_val_23905 = (state_23904[(1)]);
if((state_val_23905 === (7))){
var inst_23900 = (state_23904[(2)]);
var state_23904__$1 = state_23904;
var statearr_23906_23933 = state_23904__$1;
(statearr_23906_23933[(2)] = inst_23900);

(statearr_23906_23933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (1))){
var inst_23867 = (new Array(n));
var inst_23868 = inst_23867;
var inst_23869 = (0);
var state_23904__$1 = (function (){var statearr_23907 = state_23904;
(statearr_23907[(7)] = inst_23868);

(statearr_23907[(8)] = inst_23869);

return statearr_23907;
})();
var statearr_23908_23934 = state_23904__$1;
(statearr_23908_23934[(2)] = null);

(statearr_23908_23934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (4))){
var inst_23872 = (state_23904[(9)]);
var inst_23872__$1 = (state_23904[(2)]);
var inst_23873 = (inst_23872__$1 == null);
var inst_23874 = cljs.core.not.call(null,inst_23873);
var state_23904__$1 = (function (){var statearr_23909 = state_23904;
(statearr_23909[(9)] = inst_23872__$1);

return statearr_23909;
})();
if(inst_23874){
var statearr_23910_23935 = state_23904__$1;
(statearr_23910_23935[(1)] = (5));

} else {
var statearr_23911_23936 = state_23904__$1;
(statearr_23911_23936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (15))){
var inst_23894 = (state_23904[(2)]);
var state_23904__$1 = state_23904;
var statearr_23912_23937 = state_23904__$1;
(statearr_23912_23937[(2)] = inst_23894);

(statearr_23912_23937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (13))){
var state_23904__$1 = state_23904;
var statearr_23913_23938 = state_23904__$1;
(statearr_23913_23938[(2)] = null);

(statearr_23913_23938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (6))){
var inst_23869 = (state_23904[(8)]);
var inst_23890 = (inst_23869 > (0));
var state_23904__$1 = state_23904;
if(cljs.core.truth_(inst_23890)){
var statearr_23914_23939 = state_23904__$1;
(statearr_23914_23939[(1)] = (12));

} else {
var statearr_23915_23940 = state_23904__$1;
(statearr_23915_23940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (3))){
var inst_23902 = (state_23904[(2)]);
var state_23904__$1 = state_23904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23904__$1,inst_23902);
} else {
if((state_val_23905 === (12))){
var inst_23868 = (state_23904[(7)]);
var inst_23892 = cljs.core.vec.call(null,inst_23868);
var state_23904__$1 = state_23904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23904__$1,(15),out,inst_23892);
} else {
if((state_val_23905 === (2))){
var state_23904__$1 = state_23904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23904__$1,(4),ch);
} else {
if((state_val_23905 === (11))){
var inst_23884 = (state_23904[(2)]);
var inst_23885 = (new Array(n));
var inst_23868 = inst_23885;
var inst_23869 = (0);
var state_23904__$1 = (function (){var statearr_23916 = state_23904;
(statearr_23916[(7)] = inst_23868);

(statearr_23916[(8)] = inst_23869);

(statearr_23916[(10)] = inst_23884);

return statearr_23916;
})();
var statearr_23917_23941 = state_23904__$1;
(statearr_23917_23941[(2)] = null);

(statearr_23917_23941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (9))){
var inst_23868 = (state_23904[(7)]);
var inst_23882 = cljs.core.vec.call(null,inst_23868);
var state_23904__$1 = state_23904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23904__$1,(11),out,inst_23882);
} else {
if((state_val_23905 === (5))){
var inst_23868 = (state_23904[(7)]);
var inst_23877 = (state_23904[(11)]);
var inst_23869 = (state_23904[(8)]);
var inst_23872 = (state_23904[(9)]);
var inst_23876 = (inst_23868[inst_23869] = inst_23872);
var inst_23877__$1 = (inst_23869 + (1));
var inst_23878 = (inst_23877__$1 < n);
var state_23904__$1 = (function (){var statearr_23918 = state_23904;
(statearr_23918[(11)] = inst_23877__$1);

(statearr_23918[(12)] = inst_23876);

return statearr_23918;
})();
if(cljs.core.truth_(inst_23878)){
var statearr_23919_23942 = state_23904__$1;
(statearr_23919_23942[(1)] = (8));

} else {
var statearr_23920_23943 = state_23904__$1;
(statearr_23920_23943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (14))){
var inst_23897 = (state_23904[(2)]);
var inst_23898 = cljs.core.async.close_BANG_.call(null,out);
var state_23904__$1 = (function (){var statearr_23922 = state_23904;
(statearr_23922[(13)] = inst_23897);

return statearr_23922;
})();
var statearr_23923_23944 = state_23904__$1;
(statearr_23923_23944[(2)] = inst_23898);

(statearr_23923_23944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (10))){
var inst_23888 = (state_23904[(2)]);
var state_23904__$1 = state_23904;
var statearr_23924_23945 = state_23904__$1;
(statearr_23924_23945[(2)] = inst_23888);

(statearr_23924_23945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23905 === (8))){
var inst_23868 = (state_23904[(7)]);
var inst_23877 = (state_23904[(11)]);
var tmp23921 = inst_23868;
var inst_23868__$1 = tmp23921;
var inst_23869 = inst_23877;
var state_23904__$1 = (function (){var statearr_23925 = state_23904;
(statearr_23925[(7)] = inst_23868__$1);

(statearr_23925[(8)] = inst_23869);

return statearr_23925;
})();
var statearr_23926_23946 = state_23904__$1;
(statearr_23926_23946[(2)] = null);

(statearr_23926_23946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_23927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23927[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_23927[(1)] = (1));

return statearr_23927;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23904){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e23928){if((e23928 instanceof Object)){
var ex__22078__auto__ = e23928;
var statearr_23929_23947 = state_23904;
(statearr_23929_23947[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23948 = state_23904;
state_23904 = G__23948;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_23930 = f__22172__auto__.call(null);
(statearr_23930[(6)] = c__22171__auto___23932);

return statearr_23930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23950 = arguments.length;
switch (G__23950) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22171__auto___24027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22172__auto__ = (function (){var switch__22074__auto__ = (function (state_23995){
var state_val_23996 = (state_23995[(1)]);
if((state_val_23996 === (7))){
var inst_23991 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_23997_24028 = state_23995__$1;
(statearr_23997_24028[(2)] = inst_23991);

(statearr_23997_24028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (1))){
var inst_23951 = [];
var inst_23952 = inst_23951;
var inst_23953 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23995__$1 = (function (){var statearr_23998 = state_23995;
(statearr_23998[(7)] = inst_23953);

(statearr_23998[(8)] = inst_23952);

return statearr_23998;
})();
var statearr_23999_24029 = state_23995__$1;
(statearr_23999_24029[(2)] = null);

(statearr_23999_24029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (4))){
var inst_23956 = (state_23995[(9)]);
var inst_23956__$1 = (state_23995[(2)]);
var inst_23957 = (inst_23956__$1 == null);
var inst_23958 = cljs.core.not.call(null,inst_23957);
var state_23995__$1 = (function (){var statearr_24000 = state_23995;
(statearr_24000[(9)] = inst_23956__$1);

return statearr_24000;
})();
if(inst_23958){
var statearr_24001_24030 = state_23995__$1;
(statearr_24001_24030[(1)] = (5));

} else {
var statearr_24002_24031 = state_23995__$1;
(statearr_24002_24031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (15))){
var inst_23952 = (state_23995[(8)]);
var inst_23983 = cljs.core.vec.call(null,inst_23952);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23995__$1,(18),out,inst_23983);
} else {
if((state_val_23996 === (13))){
var inst_23978 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24003_24032 = state_23995__$1;
(statearr_24003_24032[(2)] = inst_23978);

(statearr_24003_24032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (6))){
var inst_23952 = (state_23995[(8)]);
var inst_23980 = inst_23952.length;
var inst_23981 = (inst_23980 > (0));
var state_23995__$1 = state_23995;
if(cljs.core.truth_(inst_23981)){
var statearr_24004_24033 = state_23995__$1;
(statearr_24004_24033[(1)] = (15));

} else {
var statearr_24005_24034 = state_23995__$1;
(statearr_24005_24034[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (17))){
var inst_23988 = (state_23995[(2)]);
var inst_23989 = cljs.core.async.close_BANG_.call(null,out);
var state_23995__$1 = (function (){var statearr_24006 = state_23995;
(statearr_24006[(10)] = inst_23988);

return statearr_24006;
})();
var statearr_24007_24035 = state_23995__$1;
(statearr_24007_24035[(2)] = inst_23989);

(statearr_24007_24035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (3))){
var inst_23993 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23995__$1,inst_23993);
} else {
if((state_val_23996 === (12))){
var inst_23952 = (state_23995[(8)]);
var inst_23971 = cljs.core.vec.call(null,inst_23952);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23995__$1,(14),out,inst_23971);
} else {
if((state_val_23996 === (2))){
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23995__$1,(4),ch);
} else {
if((state_val_23996 === (11))){
var inst_23956 = (state_23995[(9)]);
var inst_23960 = (state_23995[(11)]);
var inst_23952 = (state_23995[(8)]);
var inst_23968 = inst_23952.push(inst_23956);
var tmp24008 = inst_23952;
var inst_23952__$1 = tmp24008;
var inst_23953 = inst_23960;
var state_23995__$1 = (function (){var statearr_24009 = state_23995;
(statearr_24009[(7)] = inst_23953);

(statearr_24009[(8)] = inst_23952__$1);

(statearr_24009[(12)] = inst_23968);

return statearr_24009;
})();
var statearr_24010_24036 = state_23995__$1;
(statearr_24010_24036[(2)] = null);

(statearr_24010_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (9))){
var inst_23953 = (state_23995[(7)]);
var inst_23964 = cljs.core.keyword_identical_QMARK_.call(null,inst_23953,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23995__$1 = state_23995;
var statearr_24011_24037 = state_23995__$1;
(statearr_24011_24037[(2)] = inst_23964);

(statearr_24011_24037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (5))){
var inst_23956 = (state_23995[(9)]);
var inst_23953 = (state_23995[(7)]);
var inst_23960 = (state_23995[(11)]);
var inst_23961 = (state_23995[(13)]);
var inst_23960__$1 = f.call(null,inst_23956);
var inst_23961__$1 = cljs.core._EQ_.call(null,inst_23960__$1,inst_23953);
var state_23995__$1 = (function (){var statearr_24012 = state_23995;
(statearr_24012[(11)] = inst_23960__$1);

(statearr_24012[(13)] = inst_23961__$1);

return statearr_24012;
})();
if(inst_23961__$1){
var statearr_24013_24038 = state_23995__$1;
(statearr_24013_24038[(1)] = (8));

} else {
var statearr_24014_24039 = state_23995__$1;
(statearr_24014_24039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (14))){
var inst_23956 = (state_23995[(9)]);
var inst_23960 = (state_23995[(11)]);
var inst_23973 = (state_23995[(2)]);
var inst_23974 = [];
var inst_23975 = inst_23974.push(inst_23956);
var inst_23952 = inst_23974;
var inst_23953 = inst_23960;
var state_23995__$1 = (function (){var statearr_24015 = state_23995;
(statearr_24015[(14)] = inst_23975);

(statearr_24015[(15)] = inst_23973);

(statearr_24015[(7)] = inst_23953);

(statearr_24015[(8)] = inst_23952);

return statearr_24015;
})();
var statearr_24016_24040 = state_23995__$1;
(statearr_24016_24040[(2)] = null);

(statearr_24016_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (16))){
var state_23995__$1 = state_23995;
var statearr_24017_24041 = state_23995__$1;
(statearr_24017_24041[(2)] = null);

(statearr_24017_24041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (10))){
var inst_23966 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
if(cljs.core.truth_(inst_23966)){
var statearr_24018_24042 = state_23995__$1;
(statearr_24018_24042[(1)] = (11));

} else {
var statearr_24019_24043 = state_23995__$1;
(statearr_24019_24043[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (18))){
var inst_23985 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24020_24044 = state_23995__$1;
(statearr_24020_24044[(2)] = inst_23985);

(statearr_24020_24044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (8))){
var inst_23961 = (state_23995[(13)]);
var state_23995__$1 = state_23995;
var statearr_24021_24045 = state_23995__$1;
(statearr_24021_24045[(2)] = inst_23961);

(statearr_24021_24045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__22075__auto__ = null;
var cljs$core$async$state_machine__22075__auto____0 = (function (){
var statearr_24022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24022[(0)] = cljs$core$async$state_machine__22075__auto__);

(statearr_24022[(1)] = (1));

return statearr_24022;
});
var cljs$core$async$state_machine__22075__auto____1 = (function (state_23995){
while(true){
var ret_value__22076__auto__ = (function (){try{while(true){
var result__22077__auto__ = switch__22074__auto__.call(null,state_23995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22077__auto__;
}
break;
}
}catch (e24023){if((e24023 instanceof Object)){
var ex__22078__auto__ = e24023;
var statearr_24024_24046 = state_23995;
(statearr_24024_24046[(5)] = ex__22078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24047 = state_23995;
state_23995 = G__24047;
continue;
} else {
return ret_value__22076__auto__;
}
break;
}
});
cljs$core$async$state_machine__22075__auto__ = function(state_23995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22075__auto____1.call(this,state_23995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22075__auto____0;
cljs$core$async$state_machine__22075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22075__auto____1;
return cljs$core$async$state_machine__22075__auto__;
})()
})();
var state__22173__auto__ = (function (){var statearr_24025 = f__22172__auto__.call(null);
(statearr_24025[(6)] = c__22171__auto___24027);

return statearr_24025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22173__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

