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
var G__22232 = arguments.length;
switch (G__22232) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22233 = (function (f,blockable,meta22234){
this.f = f;
this.blockable = blockable;
this.meta22234 = meta22234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22235,meta22234__$1){
var self__ = this;
var _22235__$1 = this;
return (new cljs.core.async.t_cljs$core$async22233(self__.f,self__.blockable,meta22234__$1));
}));

(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22235){
var self__ = this;
var _22235__$1 = this;
return self__.meta22234;
}));

(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22234","meta22234",-1632635306,null)], null);
}));

(cljs.core.async.t_cljs$core$async22233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22233");

(cljs.core.async.t_cljs$core$async22233.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22233.
 */
cljs.core.async.__GT_t_cljs$core$async22233 = (function cljs$core$async$__GT_t_cljs$core$async22233(f__$1,blockable__$1,meta22234){
return (new cljs.core.async.t_cljs$core$async22233(f__$1,blockable__$1,meta22234));
});

}

return (new cljs.core.async.t_cljs$core$async22233(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22239 = arguments.length;
switch (G__22239) {
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
var G__22242 = arguments.length;
switch (G__22242) {
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
var G__22245 = arguments.length;
switch (G__22245) {
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
var val_22247 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22247);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_22247);
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
var G__22249 = arguments.length;
switch (G__22249) {
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
var n__4706__auto___22251 = n;
var x_22252 = (0);
while(true){
if((x_22252 < n__4706__auto___22251)){
(a[x_22252] = (0));

var G__22253 = (x_22252 + (1));
x_22252 = G__22253;
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

var G__22254 = (i + (1));
i = G__22254;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22255 = (function (flag,meta22256){
this.flag = flag;
this.meta22256 = meta22256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22257,meta22256__$1){
var self__ = this;
var _22257__$1 = this;
return (new cljs.core.async.t_cljs$core$async22255(self__.flag,meta22256__$1));
}));

(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22257){
var self__ = this;
var _22257__$1 = this;
return self__.meta22256;
}));

(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22256","meta22256",-12220030,null)], null);
}));

(cljs.core.async.t_cljs$core$async22255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22255");

(cljs.core.async.t_cljs$core$async22255.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22255.
 */
cljs.core.async.__GT_t_cljs$core$async22255 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22255(flag__$1,meta22256){
return (new cljs.core.async.t_cljs$core$async22255(flag__$1,meta22256));
});

}

return (new cljs.core.async.t_cljs$core$async22255(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22258 = (function (flag,cb,meta22259){
this.flag = flag;
this.cb = cb;
this.meta22259 = meta22259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22260,meta22259__$1){
var self__ = this;
var _22260__$1 = this;
return (new cljs.core.async.t_cljs$core$async22258(self__.flag,self__.cb,meta22259__$1));
}));

(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22260){
var self__ = this;
var _22260__$1 = this;
return self__.meta22259;
}));

(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22259","meta22259",880094220,null)], null);
}));

(cljs.core.async.t_cljs$core$async22258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22258");

(cljs.core.async.t_cljs$core$async22258.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22258.
 */
cljs.core.async.__GT_t_cljs$core$async22258 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22258(flag__$1,cb__$1,meta22259){
return (new cljs.core.async.t_cljs$core$async22258(flag__$1,cb__$1,meta22259));
});

}

return (new cljs.core.async.t_cljs$core$async22258(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22261_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22261_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22262_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22262_SHARP_,port], null));
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
var G__22263 = (i + (1));
i = G__22263;
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
var len__4829__auto___22268 = arguments.length;
var i__4830__auto___22269 = (0);
while(true){
if((i__4830__auto___22269 < len__4829__auto___22268)){
args__4835__auto__.push((arguments[i__4830__auto___22269]));

var G__22270 = (i__4830__auto___22269 + (1));
i__4830__auto___22269 = G__22270;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22266){
var map__22267 = p__22266;
var map__22267__$1 = cljs.core.__destructure_map.call(null,map__22267);
var opts = map__22267__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22264){
var G__22265 = cljs.core.first.call(null,seq22264);
var seq22264__$1 = cljs.core.next.call(null,seq22264);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22265,seq22264__$1);
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
var G__22272 = arguments.length;
switch (G__22272) {
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
var c__22172__auto___22318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22296){
var state_val_22297 = (state_22296[(1)]);
if((state_val_22297 === (7))){
var inst_22292 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22298_22319 = state_22296__$1;
(statearr_22298_22319[(2)] = inst_22292);

(statearr_22298_22319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (1))){
var state_22296__$1 = state_22296;
var statearr_22299_22320 = state_22296__$1;
(statearr_22299_22320[(2)] = null);

(statearr_22299_22320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (4))){
var inst_22275 = (state_22296[(7)]);
var inst_22275__$1 = (state_22296[(2)]);
var inst_22276 = (inst_22275__$1 == null);
var state_22296__$1 = (function (){var statearr_22300 = state_22296;
(statearr_22300[(7)] = inst_22275__$1);

return statearr_22300;
})();
if(cljs.core.truth_(inst_22276)){
var statearr_22301_22321 = state_22296__$1;
(statearr_22301_22321[(1)] = (5));

} else {
var statearr_22302_22322 = state_22296__$1;
(statearr_22302_22322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (13))){
var state_22296__$1 = state_22296;
var statearr_22303_22323 = state_22296__$1;
(statearr_22303_22323[(2)] = null);

(statearr_22303_22323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (6))){
var inst_22275 = (state_22296[(7)]);
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22296__$1,(11),to,inst_22275);
} else {
if((state_val_22297 === (3))){
var inst_22294 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22296__$1,inst_22294);
} else {
if((state_val_22297 === (12))){
var state_22296__$1 = state_22296;
var statearr_22304_22324 = state_22296__$1;
(statearr_22304_22324[(2)] = null);

(statearr_22304_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (2))){
var state_22296__$1 = state_22296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22296__$1,(4),from);
} else {
if((state_val_22297 === (11))){
var inst_22285 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
if(cljs.core.truth_(inst_22285)){
var statearr_22305_22325 = state_22296__$1;
(statearr_22305_22325[(1)] = (12));

} else {
var statearr_22306_22326 = state_22296__$1;
(statearr_22306_22326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (9))){
var state_22296__$1 = state_22296;
var statearr_22307_22327 = state_22296__$1;
(statearr_22307_22327[(2)] = null);

(statearr_22307_22327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (5))){
var state_22296__$1 = state_22296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22308_22328 = state_22296__$1;
(statearr_22308_22328[(1)] = (8));

} else {
var statearr_22309_22329 = state_22296__$1;
(statearr_22309_22329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (14))){
var inst_22290 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22310_22330 = state_22296__$1;
(statearr_22310_22330[(2)] = inst_22290);

(statearr_22310_22330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (10))){
var inst_22282 = (state_22296[(2)]);
var state_22296__$1 = state_22296;
var statearr_22311_22331 = state_22296__$1;
(statearr_22311_22331[(2)] = inst_22282);

(statearr_22311_22331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22297 === (8))){
var inst_22279 = cljs.core.async.close_BANG_.call(null,to);
var state_22296__$1 = state_22296;
var statearr_22312_22332 = state_22296__$1;
(statearr_22312_22332[(2)] = inst_22279);

(statearr_22312_22332[(1)] = (10));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_22313 = [null,null,null,null,null,null,null,null];
(statearr_22313[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_22313[(1)] = (1));

return statearr_22313;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_22296){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22314){if((e22314 instanceof Object)){
var ex__22079__auto__ = e22314;
var statearr_22315_22333 = state_22296;
(statearr_22315_22333[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22334 = state_22296;
state_22296 = G__22334;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_22296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_22296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22316 = f__22173__auto__.call(null);
(statearr_22316[(6)] = c__22172__auto___22318);

return statearr_22316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var process = (function (p__22335){
var vec__22336 = p__22335;
var v = cljs.core.nth.call(null,vec__22336,(0),null);
var p = cljs.core.nth.call(null,vec__22336,(1),null);
var job = vec__22336;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22172__auto___22507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22343){
var state_val_22344 = (state_22343[(1)]);
if((state_val_22344 === (1))){
var state_22343__$1 = state_22343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22343__$1,(2),res,v);
} else {
if((state_val_22344 === (2))){
var inst_22340 = (state_22343[(2)]);
var inst_22341 = cljs.core.async.close_BANG_.call(null,res);
var state_22343__$1 = (function (){var statearr_22345 = state_22343;
(statearr_22345[(7)] = inst_22340);

return statearr_22345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22343__$1,inst_22341);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_22346 = [null,null,null,null,null,null,null,null];
(statearr_22346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__);

(statearr_22346[(1)] = (1));

return statearr_22346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1 = (function (state_22343){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22347){if((e22347 instanceof Object)){
var ex__22079__auto__ = e22347;
var statearr_22348_22508 = state_22343;
(statearr_22348_22508[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22509 = state_22343;
state_22343 = G__22509;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = function(state_22343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1.call(this,state_22343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22349 = f__22173__auto__.call(null);
(statearr_22349[(6)] = c__22172__auto___22507);

return statearr_22349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__22350){
var vec__22351 = p__22350;
var v = cljs.core.nth.call(null,vec__22351,(0),null);
var p = cljs.core.nth.call(null,vec__22351,(1),null);
var job = vec__22351;
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
var n__4706__auto___22510 = n;
var __22511 = (0);
while(true){
if((__22511 < n__4706__auto___22510)){
var G__22354_22512 = type;
var G__22354_22513__$1 = (((G__22354_22512 instanceof cljs.core.Keyword))?G__22354_22512.fqn:null);
switch (G__22354_22513__$1) {
case "compute":
var c__22172__auto___22515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22511,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = ((function (__22511,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function (state_22367){
var state_val_22368 = (state_22367[(1)]);
if((state_val_22368 === (1))){
var state_22367__$1 = state_22367;
var statearr_22369_22516 = state_22367__$1;
(statearr_22369_22516[(2)] = null);

(statearr_22369_22516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (2))){
var state_22367__$1 = state_22367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22367__$1,(4),jobs);
} else {
if((state_val_22368 === (3))){
var inst_22365 = (state_22367[(2)]);
var state_22367__$1 = state_22367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22367__$1,inst_22365);
} else {
if((state_val_22368 === (4))){
var inst_22357 = (state_22367[(2)]);
var inst_22358 = process.call(null,inst_22357);
var state_22367__$1 = state_22367;
if(cljs.core.truth_(inst_22358)){
var statearr_22370_22517 = state_22367__$1;
(statearr_22370_22517[(1)] = (5));

} else {
var statearr_22371_22518 = state_22367__$1;
(statearr_22371_22518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (5))){
var state_22367__$1 = state_22367;
var statearr_22372_22519 = state_22367__$1;
(statearr_22372_22519[(2)] = null);

(statearr_22372_22519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (6))){
var state_22367__$1 = state_22367;
var statearr_22373_22520 = state_22367__$1;
(statearr_22373_22520[(2)] = null);

(statearr_22373_22520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22368 === (7))){
var inst_22363 = (state_22367[(2)]);
var state_22367__$1 = state_22367;
var statearr_22374_22521 = state_22367__$1;
(statearr_22374_22521[(2)] = inst_22363);

(statearr_22374_22521[(1)] = (3));


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
});})(__22511,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
;
return ((function (__22511,switch__22075__auto__,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_22375 = [null,null,null,null,null,null,null];
(statearr_22375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__);

(statearr_22375[(1)] = (1));

return statearr_22375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1 = (function (state_22367){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22376){if((e22376 instanceof Object)){
var ex__22079__auto__ = e22376;
var statearr_22377_22522 = state_22367;
(statearr_22377_22522[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22523 = state_22367;
state_22367 = G__22523;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = function(state_22367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1.call(this,state_22367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__;
})()
;})(__22511,switch__22075__auto__,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
})();
var state__22174__auto__ = (function (){var statearr_22378 = f__22173__auto__.call(null);
(statearr_22378[(6)] = c__22172__auto___22515);

return statearr_22378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
});})(__22511,c__22172__auto___22515,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
);


break;
case "async":
var c__22172__auto___22524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22511,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = ((function (__22511,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (1))){
var state_22391__$1 = state_22391;
var statearr_22393_22525 = state_22391__$1;
(statearr_22393_22525[(2)] = null);

(statearr_22393_22525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (2))){
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22391__$1,(4),jobs);
} else {
if((state_val_22392 === (3))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
} else {
if((state_val_22392 === (4))){
var inst_22381 = (state_22391[(2)]);
var inst_22382 = async.call(null,inst_22381);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22382)){
var statearr_22394_22526 = state_22391__$1;
(statearr_22394_22526[(1)] = (5));

} else {
var statearr_22395_22527 = state_22391__$1;
(statearr_22395_22527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var state_22391__$1 = state_22391;
var statearr_22396_22528 = state_22391__$1;
(statearr_22396_22528[(2)] = null);

(statearr_22396_22528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var state_22391__$1 = state_22391;
var statearr_22397_22529 = state_22391__$1;
(statearr_22397_22529[(2)] = null);

(statearr_22397_22529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (7))){
var inst_22387 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22398_22530 = state_22391__$1;
(statearr_22398_22530[(2)] = inst_22387);

(statearr_22398_22530[(1)] = (3));


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
});})(__22511,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
;
return ((function (__22511,switch__22075__auto__,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_22399 = [null,null,null,null,null,null,null];
(statearr_22399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__);

(statearr_22399[(1)] = (1));

return statearr_22399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1 = (function (state_22391){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22400){if((e22400 instanceof Object)){
var ex__22079__auto__ = e22400;
var statearr_22401_22531 = state_22391;
(statearr_22401_22531[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22532 = state_22391;
state_22391 = G__22532;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__;
})()
;})(__22511,switch__22075__auto__,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
})();
var state__22174__auto__ = (function (){var statearr_22402 = f__22173__auto__.call(null);
(statearr_22402[(6)] = c__22172__auto___22524);

return statearr_22402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
});})(__22511,c__22172__auto___22524,G__22354_22512,G__22354_22513__$1,n__4706__auto___22510,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22354_22513__$1)].join('')));

}

var G__22533 = (__22511 + (1));
__22511 = G__22533;
continue;
} else {
}
break;
}

var c__22172__auto___22534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22424){
var state_val_22425 = (state_22424[(1)]);
if((state_val_22425 === (7))){
var inst_22420 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22426_22535 = state_22424__$1;
(statearr_22426_22535[(2)] = inst_22420);

(statearr_22426_22535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (1))){
var state_22424__$1 = state_22424;
var statearr_22427_22536 = state_22424__$1;
(statearr_22427_22536[(2)] = null);

(statearr_22427_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (4))){
var inst_22405 = (state_22424[(7)]);
var inst_22405__$1 = (state_22424[(2)]);
var inst_22406 = (inst_22405__$1 == null);
var state_22424__$1 = (function (){var statearr_22428 = state_22424;
(statearr_22428[(7)] = inst_22405__$1);

return statearr_22428;
})();
if(cljs.core.truth_(inst_22406)){
var statearr_22429_22537 = state_22424__$1;
(statearr_22429_22537[(1)] = (5));

} else {
var statearr_22430_22538 = state_22424__$1;
(statearr_22430_22538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (6))){
var inst_22405 = (state_22424[(7)]);
var inst_22410 = (state_22424[(8)]);
var inst_22410__$1 = cljs.core.async.chan.call(null,(1));
var inst_22411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22412 = [inst_22405,inst_22410__$1];
var inst_22413 = (new cljs.core.PersistentVector(null,2,(5),inst_22411,inst_22412,null));
var state_22424__$1 = (function (){var statearr_22431 = state_22424;
(statearr_22431[(8)] = inst_22410__$1);

return statearr_22431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,(8),jobs,inst_22413);
} else {
if((state_val_22425 === (3))){
var inst_22422 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22424__$1,inst_22422);
} else {
if((state_val_22425 === (2))){
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22424__$1,(4),from);
} else {
if((state_val_22425 === (9))){
var inst_22417 = (state_22424[(2)]);
var state_22424__$1 = (function (){var statearr_22432 = state_22424;
(statearr_22432[(9)] = inst_22417);

return statearr_22432;
})();
var statearr_22433_22539 = state_22424__$1;
(statearr_22433_22539[(2)] = null);

(statearr_22433_22539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (5))){
var inst_22408 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22424__$1 = state_22424;
var statearr_22434_22540 = state_22424__$1;
(statearr_22434_22540[(2)] = inst_22408);

(statearr_22434_22540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (8))){
var inst_22410 = (state_22424[(8)]);
var inst_22415 = (state_22424[(2)]);
var state_22424__$1 = (function (){var statearr_22435 = state_22424;
(statearr_22435[(10)] = inst_22415);

return statearr_22435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,(9),results,inst_22410);
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
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_22436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__);

(statearr_22436[(1)] = (1));

return statearr_22436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1 = (function (state_22424){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22437){if((e22437 instanceof Object)){
var ex__22079__auto__ = e22437;
var statearr_22438_22541 = state_22424;
(statearr_22438_22541[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22542 = state_22424;
state_22424 = G__22542;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = function(state_22424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1.call(this,state_22424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22439 = f__22173__auto__.call(null);
(statearr_22439[(6)] = c__22172__auto___22534);

return statearr_22439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


var c__22172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22477){
var state_val_22478 = (state_22477[(1)]);
if((state_val_22478 === (7))){
var inst_22473 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
var statearr_22479_22543 = state_22477__$1;
(statearr_22479_22543[(2)] = inst_22473);

(statearr_22479_22543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (20))){
var state_22477__$1 = state_22477;
var statearr_22480_22544 = state_22477__$1;
(statearr_22480_22544[(2)] = null);

(statearr_22480_22544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (1))){
var state_22477__$1 = state_22477;
var statearr_22481_22545 = state_22477__$1;
(statearr_22481_22545[(2)] = null);

(statearr_22481_22545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (4))){
var inst_22442 = (state_22477[(7)]);
var inst_22442__$1 = (state_22477[(2)]);
var inst_22443 = (inst_22442__$1 == null);
var state_22477__$1 = (function (){var statearr_22482 = state_22477;
(statearr_22482[(7)] = inst_22442__$1);

return statearr_22482;
})();
if(cljs.core.truth_(inst_22443)){
var statearr_22483_22546 = state_22477__$1;
(statearr_22483_22546[(1)] = (5));

} else {
var statearr_22484_22547 = state_22477__$1;
(statearr_22484_22547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (15))){
var inst_22455 = (state_22477[(8)]);
var state_22477__$1 = state_22477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22477__$1,(18),to,inst_22455);
} else {
if((state_val_22478 === (21))){
var inst_22468 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
var statearr_22485_22548 = state_22477__$1;
(statearr_22485_22548[(2)] = inst_22468);

(statearr_22485_22548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (13))){
var inst_22470 = (state_22477[(2)]);
var state_22477__$1 = (function (){var statearr_22486 = state_22477;
(statearr_22486[(9)] = inst_22470);

return statearr_22486;
})();
var statearr_22487_22549 = state_22477__$1;
(statearr_22487_22549[(2)] = null);

(statearr_22487_22549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (6))){
var inst_22442 = (state_22477[(7)]);
var state_22477__$1 = state_22477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22477__$1,(11),inst_22442);
} else {
if((state_val_22478 === (17))){
var inst_22463 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
if(cljs.core.truth_(inst_22463)){
var statearr_22488_22550 = state_22477__$1;
(statearr_22488_22550[(1)] = (19));

} else {
var statearr_22489_22551 = state_22477__$1;
(statearr_22489_22551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (3))){
var inst_22475 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22477__$1,inst_22475);
} else {
if((state_val_22478 === (12))){
var inst_22452 = (state_22477[(10)]);
var state_22477__$1 = state_22477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22477__$1,(14),inst_22452);
} else {
if((state_val_22478 === (2))){
var state_22477__$1 = state_22477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22477__$1,(4),results);
} else {
if((state_val_22478 === (19))){
var state_22477__$1 = state_22477;
var statearr_22490_22552 = state_22477__$1;
(statearr_22490_22552[(2)] = null);

(statearr_22490_22552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (11))){
var inst_22452 = (state_22477[(2)]);
var state_22477__$1 = (function (){var statearr_22491 = state_22477;
(statearr_22491[(10)] = inst_22452);

return statearr_22491;
})();
var statearr_22492_22553 = state_22477__$1;
(statearr_22492_22553[(2)] = null);

(statearr_22492_22553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (9))){
var state_22477__$1 = state_22477;
var statearr_22493_22554 = state_22477__$1;
(statearr_22493_22554[(2)] = null);

(statearr_22493_22554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (5))){
var state_22477__$1 = state_22477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22494_22555 = state_22477__$1;
(statearr_22494_22555[(1)] = (8));

} else {
var statearr_22495_22556 = state_22477__$1;
(statearr_22495_22556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (14))){
var inst_22457 = (state_22477[(11)]);
var inst_22455 = (state_22477[(8)]);
var inst_22455__$1 = (state_22477[(2)]);
var inst_22456 = (inst_22455__$1 == null);
var inst_22457__$1 = cljs.core.not.call(null,inst_22456);
var state_22477__$1 = (function (){var statearr_22496 = state_22477;
(statearr_22496[(11)] = inst_22457__$1);

(statearr_22496[(8)] = inst_22455__$1);

return statearr_22496;
})();
if(inst_22457__$1){
var statearr_22497_22557 = state_22477__$1;
(statearr_22497_22557[(1)] = (15));

} else {
var statearr_22498_22558 = state_22477__$1;
(statearr_22498_22558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (16))){
var inst_22457 = (state_22477[(11)]);
var state_22477__$1 = state_22477;
var statearr_22499_22559 = state_22477__$1;
(statearr_22499_22559[(2)] = inst_22457);

(statearr_22499_22559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (10))){
var inst_22449 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
var statearr_22500_22560 = state_22477__$1;
(statearr_22500_22560[(2)] = inst_22449);

(statearr_22500_22560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (18))){
var inst_22460 = (state_22477[(2)]);
var state_22477__$1 = state_22477;
var statearr_22501_22561 = state_22477__$1;
(statearr_22501_22561[(2)] = inst_22460);

(statearr_22501_22561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22478 === (8))){
var inst_22446 = cljs.core.async.close_BANG_.call(null,to);
var state_22477__$1 = state_22477;
var statearr_22502_22562 = state_22477__$1;
(statearr_22502_22562[(2)] = inst_22446);

(statearr_22502_22562[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_22503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__);

(statearr_22503[(1)] = (1));

return statearr_22503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1 = (function (state_22477){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22504){if((e22504 instanceof Object)){
var ex__22079__auto__ = e22504;
var statearr_22505_22563 = state_22477;
(statearr_22505_22563[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22564 = state_22477;
state_22477 = G__22564;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__ = function(state_22477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1.call(this,state_22477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22506 = f__22173__auto__.call(null);
(statearr_22506[(6)] = c__22172__auto__);

return statearr_22506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));

return c__22172__auto__;
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
var G__22566 = arguments.length;
switch (G__22566) {
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
var G__22569 = arguments.length;
switch (G__22569) {
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
var G__22572 = arguments.length;
switch (G__22572) {
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
var c__22172__auto___22621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22598){
var state_val_22599 = (state_22598[(1)]);
if((state_val_22599 === (7))){
var inst_22594 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22600_22622 = state_22598__$1;
(statearr_22600_22622[(2)] = inst_22594);

(statearr_22600_22622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (1))){
var state_22598__$1 = state_22598;
var statearr_22601_22623 = state_22598__$1;
(statearr_22601_22623[(2)] = null);

(statearr_22601_22623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (4))){
var inst_22575 = (state_22598[(7)]);
var inst_22575__$1 = (state_22598[(2)]);
var inst_22576 = (inst_22575__$1 == null);
var state_22598__$1 = (function (){var statearr_22602 = state_22598;
(statearr_22602[(7)] = inst_22575__$1);

return statearr_22602;
})();
if(cljs.core.truth_(inst_22576)){
var statearr_22603_22624 = state_22598__$1;
(statearr_22603_22624[(1)] = (5));

} else {
var statearr_22604_22625 = state_22598__$1;
(statearr_22604_22625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (13))){
var state_22598__$1 = state_22598;
var statearr_22605_22626 = state_22598__$1;
(statearr_22605_22626[(2)] = null);

(statearr_22605_22626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (6))){
var inst_22575 = (state_22598[(7)]);
var inst_22581 = p.call(null,inst_22575);
var state_22598__$1 = state_22598;
if(cljs.core.truth_(inst_22581)){
var statearr_22606_22627 = state_22598__$1;
(statearr_22606_22627[(1)] = (9));

} else {
var statearr_22607_22628 = state_22598__$1;
(statearr_22607_22628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (3))){
var inst_22596 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22598__$1,inst_22596);
} else {
if((state_val_22599 === (12))){
var state_22598__$1 = state_22598;
var statearr_22608_22629 = state_22598__$1;
(statearr_22608_22629[(2)] = null);

(statearr_22608_22629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (2))){
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,(4),ch);
} else {
if((state_val_22599 === (11))){
var inst_22575 = (state_22598[(7)]);
var inst_22585 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22598__$1,(8),inst_22585,inst_22575);
} else {
if((state_val_22599 === (9))){
var state_22598__$1 = state_22598;
var statearr_22609_22630 = state_22598__$1;
(statearr_22609_22630[(2)] = tc);

(statearr_22609_22630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (5))){
var inst_22578 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22579 = cljs.core.async.close_BANG_.call(null,fc);
var state_22598__$1 = (function (){var statearr_22610 = state_22598;
(statearr_22610[(8)] = inst_22578);

return statearr_22610;
})();
var statearr_22611_22631 = state_22598__$1;
(statearr_22611_22631[(2)] = inst_22579);

(statearr_22611_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (14))){
var inst_22592 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22612_22632 = state_22598__$1;
(statearr_22612_22632[(2)] = inst_22592);

(statearr_22612_22632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (10))){
var state_22598__$1 = state_22598;
var statearr_22613_22633 = state_22598__$1;
(statearr_22613_22633[(2)] = fc);

(statearr_22613_22633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (8))){
var inst_22587 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
if(cljs.core.truth_(inst_22587)){
var statearr_22614_22634 = state_22598__$1;
(statearr_22614_22634[(1)] = (12));

} else {
var statearr_22615_22635 = state_22598__$1;
(statearr_22615_22635[(1)] = (13));

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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_22616 = [null,null,null,null,null,null,null,null,null];
(statearr_22616[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_22616[(1)] = (1));

return statearr_22616;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_22598){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22617){if((e22617 instanceof Object)){
var ex__22079__auto__ = e22617;
var statearr_22618_22636 = state_22598;
(statearr_22618_22636[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22637 = state_22598;
state_22598 = G__22637;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_22598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_22598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22619 = f__22173__auto__.call(null);
(statearr_22619[(6)] = c__22172__auto___22621);

return statearr_22619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var c__22172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22658){
var state_val_22659 = (state_22658[(1)]);
if((state_val_22659 === (7))){
var inst_22654 = (state_22658[(2)]);
var state_22658__$1 = state_22658;
var statearr_22660_22678 = state_22658__$1;
(statearr_22660_22678[(2)] = inst_22654);

(statearr_22660_22678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (1))){
var inst_22638 = init;
var state_22658__$1 = (function (){var statearr_22661 = state_22658;
(statearr_22661[(7)] = inst_22638);

return statearr_22661;
})();
var statearr_22662_22679 = state_22658__$1;
(statearr_22662_22679[(2)] = null);

(statearr_22662_22679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (4))){
var inst_22641 = (state_22658[(8)]);
var inst_22641__$1 = (state_22658[(2)]);
var inst_22642 = (inst_22641__$1 == null);
var state_22658__$1 = (function (){var statearr_22663 = state_22658;
(statearr_22663[(8)] = inst_22641__$1);

return statearr_22663;
})();
if(cljs.core.truth_(inst_22642)){
var statearr_22664_22680 = state_22658__$1;
(statearr_22664_22680[(1)] = (5));

} else {
var statearr_22665_22681 = state_22658__$1;
(statearr_22665_22681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (6))){
var inst_22638 = (state_22658[(7)]);
var inst_22641 = (state_22658[(8)]);
var inst_22645 = (state_22658[(9)]);
var inst_22645__$1 = f.call(null,inst_22638,inst_22641);
var inst_22646 = cljs.core.reduced_QMARK_.call(null,inst_22645__$1);
var state_22658__$1 = (function (){var statearr_22666 = state_22658;
(statearr_22666[(9)] = inst_22645__$1);

return statearr_22666;
})();
if(inst_22646){
var statearr_22667_22682 = state_22658__$1;
(statearr_22667_22682[(1)] = (8));

} else {
var statearr_22668_22683 = state_22658__$1;
(statearr_22668_22683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (3))){
var inst_22656 = (state_22658[(2)]);
var state_22658__$1 = state_22658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22658__$1,inst_22656);
} else {
if((state_val_22659 === (2))){
var state_22658__$1 = state_22658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22658__$1,(4),ch);
} else {
if((state_val_22659 === (9))){
var inst_22645 = (state_22658[(9)]);
var inst_22638 = inst_22645;
var state_22658__$1 = (function (){var statearr_22669 = state_22658;
(statearr_22669[(7)] = inst_22638);

return statearr_22669;
})();
var statearr_22670_22684 = state_22658__$1;
(statearr_22670_22684[(2)] = null);

(statearr_22670_22684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (5))){
var inst_22638 = (state_22658[(7)]);
var state_22658__$1 = state_22658;
var statearr_22671_22685 = state_22658__$1;
(statearr_22671_22685[(2)] = inst_22638);

(statearr_22671_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (10))){
var inst_22652 = (state_22658[(2)]);
var state_22658__$1 = state_22658;
var statearr_22672_22686 = state_22658__$1;
(statearr_22672_22686[(2)] = inst_22652);

(statearr_22672_22686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (8))){
var inst_22645 = (state_22658[(9)]);
var inst_22648 = cljs.core.deref.call(null,inst_22645);
var state_22658__$1 = state_22658;
var statearr_22673_22687 = state_22658__$1;
(statearr_22673_22687[(2)] = inst_22648);

(statearr_22673_22687[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__22076__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22076__auto____0 = (function (){
var statearr_22674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22674[(0)] = cljs$core$async$reduce_$_state_machine__22076__auto__);

(statearr_22674[(1)] = (1));

return statearr_22674;
});
var cljs$core$async$reduce_$_state_machine__22076__auto____1 = (function (state_22658){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22675){if((e22675 instanceof Object)){
var ex__22079__auto__ = e22675;
var statearr_22676_22688 = state_22658;
(statearr_22676_22688[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22689 = state_22658;
state_22658 = G__22689;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22076__auto__ = function(state_22658){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22076__auto____1.call(this,state_22658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22076__auto____0;
cljs$core$async$reduce_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22076__auto____1;
return cljs$core$async$reduce_$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22677 = f__22173__auto__.call(null);
(statearr_22677[(6)] = c__22172__auto__);

return statearr_22677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));

return c__22172__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22695){
var state_val_22696 = (state_22695[(1)]);
if((state_val_22696 === (1))){
var inst_22690 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22695__$1 = state_22695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22695__$1,(2),inst_22690);
} else {
if((state_val_22696 === (2))){
var inst_22692 = (state_22695[(2)]);
var inst_22693 = f__$1.call(null,inst_22692);
var state_22695__$1 = state_22695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22695__$1,inst_22693);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__22076__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22076__auto____0 = (function (){
var statearr_22697 = [null,null,null,null,null,null,null];
(statearr_22697[(0)] = cljs$core$async$transduce_$_state_machine__22076__auto__);

(statearr_22697[(1)] = (1));

return statearr_22697;
});
var cljs$core$async$transduce_$_state_machine__22076__auto____1 = (function (state_22695){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22698){if((e22698 instanceof Object)){
var ex__22079__auto__ = e22698;
var statearr_22699_22701 = state_22695;
(statearr_22699_22701[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22702 = state_22695;
state_22695 = G__22702;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22076__auto__ = function(state_22695){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22076__auto____1.call(this,state_22695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22076__auto____0;
cljs$core$async$transduce_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22076__auto____1;
return cljs$core$async$transduce_$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22700 = f__22173__auto__.call(null);
(statearr_22700[(6)] = c__22172__auto__);

return statearr_22700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));

return c__22172__auto__;
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
var G__22704 = arguments.length;
switch (G__22704) {
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
var c__22172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22729){
var state_val_22730 = (state_22729[(1)]);
if((state_val_22730 === (7))){
var inst_22711 = (state_22729[(2)]);
var state_22729__$1 = state_22729;
var statearr_22731_22752 = state_22729__$1;
(statearr_22731_22752[(2)] = inst_22711);

(statearr_22731_22752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (1))){
var inst_22705 = cljs.core.seq.call(null,coll);
var inst_22706 = inst_22705;
var state_22729__$1 = (function (){var statearr_22732 = state_22729;
(statearr_22732[(7)] = inst_22706);

return statearr_22732;
})();
var statearr_22733_22753 = state_22729__$1;
(statearr_22733_22753[(2)] = null);

(statearr_22733_22753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (4))){
var inst_22706 = (state_22729[(7)]);
var inst_22709 = cljs.core.first.call(null,inst_22706);
var state_22729__$1 = state_22729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22729__$1,(7),ch,inst_22709);
} else {
if((state_val_22730 === (13))){
var inst_22723 = (state_22729[(2)]);
var state_22729__$1 = state_22729;
var statearr_22734_22754 = state_22729__$1;
(statearr_22734_22754[(2)] = inst_22723);

(statearr_22734_22754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (6))){
var inst_22714 = (state_22729[(2)]);
var state_22729__$1 = state_22729;
if(cljs.core.truth_(inst_22714)){
var statearr_22735_22755 = state_22729__$1;
(statearr_22735_22755[(1)] = (8));

} else {
var statearr_22736_22756 = state_22729__$1;
(statearr_22736_22756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (3))){
var inst_22727 = (state_22729[(2)]);
var state_22729__$1 = state_22729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22729__$1,inst_22727);
} else {
if((state_val_22730 === (12))){
var state_22729__$1 = state_22729;
var statearr_22737_22757 = state_22729__$1;
(statearr_22737_22757[(2)] = null);

(statearr_22737_22757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (2))){
var inst_22706 = (state_22729[(7)]);
var state_22729__$1 = state_22729;
if(cljs.core.truth_(inst_22706)){
var statearr_22738_22758 = state_22729__$1;
(statearr_22738_22758[(1)] = (4));

} else {
var statearr_22739_22759 = state_22729__$1;
(statearr_22739_22759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (11))){
var inst_22720 = cljs.core.async.close_BANG_.call(null,ch);
var state_22729__$1 = state_22729;
var statearr_22740_22760 = state_22729__$1;
(statearr_22740_22760[(2)] = inst_22720);

(statearr_22740_22760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (9))){
var state_22729__$1 = state_22729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22741_22761 = state_22729__$1;
(statearr_22741_22761[(1)] = (11));

} else {
var statearr_22742_22762 = state_22729__$1;
(statearr_22742_22762[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (5))){
var inst_22706 = (state_22729[(7)]);
var state_22729__$1 = state_22729;
var statearr_22743_22763 = state_22729__$1;
(statearr_22743_22763[(2)] = inst_22706);

(statearr_22743_22763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (10))){
var inst_22725 = (state_22729[(2)]);
var state_22729__$1 = state_22729;
var statearr_22744_22764 = state_22729__$1;
(statearr_22744_22764[(2)] = inst_22725);

(statearr_22744_22764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22730 === (8))){
var inst_22706 = (state_22729[(7)]);
var inst_22716 = cljs.core.next.call(null,inst_22706);
var inst_22706__$1 = inst_22716;
var state_22729__$1 = (function (){var statearr_22745 = state_22729;
(statearr_22745[(7)] = inst_22706__$1);

return statearr_22745;
})();
var statearr_22746_22765 = state_22729__$1;
(statearr_22746_22765[(2)] = null);

(statearr_22746_22765[(1)] = (2));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_22747 = [null,null,null,null,null,null,null,null];
(statearr_22747[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_22747[(1)] = (1));

return statearr_22747;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_22729){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22748){if((e22748 instanceof Object)){
var ex__22079__auto__ = e22748;
var statearr_22749_22766 = state_22729;
(statearr_22749_22766[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22767 = state_22729;
state_22729 = G__22767;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_22729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_22729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22750 = f__22173__auto__.call(null);
(statearr_22750[(6)] = c__22172__auto__);

return statearr_22750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));

return c__22172__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_22768 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_22768.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22769 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_22769.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22770 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_22770.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22771 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_22771.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22772 = (function (ch,cs,meta22773){
this.ch = ch;
this.cs = cs;
this.meta22773 = meta22773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22774,meta22773__$1){
var self__ = this;
var _22774__$1 = this;
return (new cljs.core.async.t_cljs$core$async22772(self__.ch,self__.cs,meta22773__$1));
}));

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22774){
var self__ = this;
var _22774__$1 = this;
return self__.meta22773;
}));

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22772.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22773","meta22773",-1565691070,null)], null);
}));

(cljs.core.async.t_cljs$core$async22772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22772");

(cljs.core.async.t_cljs$core$async22772.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22772.
 */
cljs.core.async.__GT_t_cljs$core$async22772 = (function cljs$core$async$mult_$___GT_t_cljs$core$async22772(ch__$1,cs__$1,meta22773){
return (new cljs.core.async.t_cljs$core$async22772(ch__$1,cs__$1,meta22773));
});

}

return (new cljs.core.async.t_cljs$core$async22772(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22172__auto___22994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_22909){
var state_val_22910 = (state_22909[(1)]);
if((state_val_22910 === (7))){
var inst_22905 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22911_22995 = state_22909__$1;
(statearr_22911_22995[(2)] = inst_22905);

(statearr_22911_22995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (20))){
var inst_22808 = (state_22909[(7)]);
var inst_22820 = cljs.core.first.call(null,inst_22808);
var inst_22821 = cljs.core.nth.call(null,inst_22820,(0),null);
var inst_22822 = cljs.core.nth.call(null,inst_22820,(1),null);
var state_22909__$1 = (function (){var statearr_22912 = state_22909;
(statearr_22912[(8)] = inst_22821);

return statearr_22912;
})();
if(cljs.core.truth_(inst_22822)){
var statearr_22913_22996 = state_22909__$1;
(statearr_22913_22996[(1)] = (22));

} else {
var statearr_22914_22997 = state_22909__$1;
(statearr_22914_22997[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (27))){
var inst_22850 = (state_22909[(9)]);
var inst_22777 = (state_22909[(10)]);
var inst_22857 = (state_22909[(11)]);
var inst_22852 = (state_22909[(12)]);
var inst_22857__$1 = cljs.core._nth.call(null,inst_22850,inst_22852);
var inst_22858 = cljs.core.async.put_BANG_.call(null,inst_22857__$1,inst_22777,done);
var state_22909__$1 = (function (){var statearr_22915 = state_22909;
(statearr_22915[(11)] = inst_22857__$1);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22858)){
var statearr_22916_22998 = state_22909__$1;
(statearr_22916_22998[(1)] = (30));

} else {
var statearr_22917_22999 = state_22909__$1;
(statearr_22917_22999[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (1))){
var state_22909__$1 = state_22909;
var statearr_22918_23000 = state_22909__$1;
(statearr_22918_23000[(2)] = null);

(statearr_22918_23000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (24))){
var inst_22808 = (state_22909[(7)]);
var inst_22827 = (state_22909[(2)]);
var inst_22828 = cljs.core.next.call(null,inst_22808);
var inst_22786 = inst_22828;
var inst_22787 = null;
var inst_22788 = (0);
var inst_22789 = (0);
var state_22909__$1 = (function (){var statearr_22919 = state_22909;
(statearr_22919[(13)] = inst_22786);

(statearr_22919[(14)] = inst_22787);

(statearr_22919[(15)] = inst_22827);

(statearr_22919[(16)] = inst_22788);

(statearr_22919[(17)] = inst_22789);

return statearr_22919;
})();
var statearr_22920_23001 = state_22909__$1;
(statearr_22920_23001[(2)] = null);

(statearr_22920_23001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (39))){
var state_22909__$1 = state_22909;
var statearr_22924_23002 = state_22909__$1;
(statearr_22924_23002[(2)] = null);

(statearr_22924_23002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (4))){
var inst_22777 = (state_22909[(10)]);
var inst_22777__$1 = (state_22909[(2)]);
var inst_22778 = (inst_22777__$1 == null);
var state_22909__$1 = (function (){var statearr_22925 = state_22909;
(statearr_22925[(10)] = inst_22777__$1);

return statearr_22925;
})();
if(cljs.core.truth_(inst_22778)){
var statearr_22926_23003 = state_22909__$1;
(statearr_22926_23003[(1)] = (5));

} else {
var statearr_22927_23004 = state_22909__$1;
(statearr_22927_23004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (15))){
var inst_22786 = (state_22909[(13)]);
var inst_22787 = (state_22909[(14)]);
var inst_22788 = (state_22909[(16)]);
var inst_22789 = (state_22909[(17)]);
var inst_22804 = (state_22909[(2)]);
var inst_22805 = (inst_22789 + (1));
var tmp22921 = inst_22786;
var tmp22922 = inst_22787;
var tmp22923 = inst_22788;
var inst_22786__$1 = tmp22921;
var inst_22787__$1 = tmp22922;
var inst_22788__$1 = tmp22923;
var inst_22789__$1 = inst_22805;
var state_22909__$1 = (function (){var statearr_22928 = state_22909;
(statearr_22928[(18)] = inst_22804);

(statearr_22928[(13)] = inst_22786__$1);

(statearr_22928[(14)] = inst_22787__$1);

(statearr_22928[(16)] = inst_22788__$1);

(statearr_22928[(17)] = inst_22789__$1);

return statearr_22928;
})();
var statearr_22929_23005 = state_22909__$1;
(statearr_22929_23005[(2)] = null);

(statearr_22929_23005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (21))){
var inst_22831 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22933_23006 = state_22909__$1;
(statearr_22933_23006[(2)] = inst_22831);

(statearr_22933_23006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (31))){
var inst_22857 = (state_22909[(11)]);
var inst_22861 = done.call(null,null);
var inst_22862 = cljs.core.async.untap_STAR_.call(null,m,inst_22857);
var state_22909__$1 = (function (){var statearr_22934 = state_22909;
(statearr_22934[(19)] = inst_22861);

return statearr_22934;
})();
var statearr_22935_23007 = state_22909__$1;
(statearr_22935_23007[(2)] = inst_22862);

(statearr_22935_23007[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (32))){
var inst_22850 = (state_22909[(9)]);
var inst_22851 = (state_22909[(20)]);
var inst_22852 = (state_22909[(12)]);
var inst_22849 = (state_22909[(21)]);
var inst_22864 = (state_22909[(2)]);
var inst_22865 = (inst_22852 + (1));
var tmp22930 = inst_22850;
var tmp22931 = inst_22851;
var tmp22932 = inst_22849;
var inst_22849__$1 = tmp22932;
var inst_22850__$1 = tmp22930;
var inst_22851__$1 = tmp22931;
var inst_22852__$1 = inst_22865;
var state_22909__$1 = (function (){var statearr_22936 = state_22909;
(statearr_22936[(9)] = inst_22850__$1);

(statearr_22936[(20)] = inst_22851__$1);

(statearr_22936[(22)] = inst_22864);

(statearr_22936[(12)] = inst_22852__$1);

(statearr_22936[(21)] = inst_22849__$1);

return statearr_22936;
})();
var statearr_22937_23008 = state_22909__$1;
(statearr_22937_23008[(2)] = null);

(statearr_22937_23008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (40))){
var inst_22877 = (state_22909[(23)]);
var inst_22881 = done.call(null,null);
var inst_22882 = cljs.core.async.untap_STAR_.call(null,m,inst_22877);
var state_22909__$1 = (function (){var statearr_22938 = state_22909;
(statearr_22938[(24)] = inst_22881);

return statearr_22938;
})();
var statearr_22939_23009 = state_22909__$1;
(statearr_22939_23009[(2)] = inst_22882);

(statearr_22939_23009[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (33))){
var inst_22868 = (state_22909[(25)]);
var inst_22870 = cljs.core.chunked_seq_QMARK_.call(null,inst_22868);
var state_22909__$1 = state_22909;
if(inst_22870){
var statearr_22940_23010 = state_22909__$1;
(statearr_22940_23010[(1)] = (36));

} else {
var statearr_22941_23011 = state_22909__$1;
(statearr_22941_23011[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (13))){
var inst_22798 = (state_22909[(26)]);
var inst_22801 = cljs.core.async.close_BANG_.call(null,inst_22798);
var state_22909__$1 = state_22909;
var statearr_22942_23012 = state_22909__$1;
(statearr_22942_23012[(2)] = inst_22801);

(statearr_22942_23012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (22))){
var inst_22821 = (state_22909[(8)]);
var inst_22824 = cljs.core.async.close_BANG_.call(null,inst_22821);
var state_22909__$1 = state_22909;
var statearr_22943_23013 = state_22909__$1;
(statearr_22943_23013[(2)] = inst_22824);

(statearr_22943_23013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (36))){
var inst_22868 = (state_22909[(25)]);
var inst_22872 = cljs.core.chunk_first.call(null,inst_22868);
var inst_22873 = cljs.core.chunk_rest.call(null,inst_22868);
var inst_22874 = cljs.core.count.call(null,inst_22872);
var inst_22849 = inst_22873;
var inst_22850 = inst_22872;
var inst_22851 = inst_22874;
var inst_22852 = (0);
var state_22909__$1 = (function (){var statearr_22944 = state_22909;
(statearr_22944[(9)] = inst_22850);

(statearr_22944[(20)] = inst_22851);

(statearr_22944[(12)] = inst_22852);

(statearr_22944[(21)] = inst_22849);

return statearr_22944;
})();
var statearr_22945_23014 = state_22909__$1;
(statearr_22945_23014[(2)] = null);

(statearr_22945_23014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (41))){
var inst_22868 = (state_22909[(25)]);
var inst_22884 = (state_22909[(2)]);
var inst_22885 = cljs.core.next.call(null,inst_22868);
var inst_22849 = inst_22885;
var inst_22850 = null;
var inst_22851 = (0);
var inst_22852 = (0);
var state_22909__$1 = (function (){var statearr_22946 = state_22909;
(statearr_22946[(9)] = inst_22850);

(statearr_22946[(27)] = inst_22884);

(statearr_22946[(20)] = inst_22851);

(statearr_22946[(12)] = inst_22852);

(statearr_22946[(21)] = inst_22849);

return statearr_22946;
})();
var statearr_22947_23015 = state_22909__$1;
(statearr_22947_23015[(2)] = null);

(statearr_22947_23015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (43))){
var state_22909__$1 = state_22909;
var statearr_22948_23016 = state_22909__$1;
(statearr_22948_23016[(2)] = null);

(statearr_22948_23016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (29))){
var inst_22893 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22949_23017 = state_22909__$1;
(statearr_22949_23017[(2)] = inst_22893);

(statearr_22949_23017[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (44))){
var inst_22902 = (state_22909[(2)]);
var state_22909__$1 = (function (){var statearr_22950 = state_22909;
(statearr_22950[(28)] = inst_22902);

return statearr_22950;
})();
var statearr_22951_23018 = state_22909__$1;
(statearr_22951_23018[(2)] = null);

(statearr_22951_23018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (6))){
var inst_22841 = (state_22909[(29)]);
var inst_22840 = cljs.core.deref.call(null,cs);
var inst_22841__$1 = cljs.core.keys.call(null,inst_22840);
var inst_22842 = cljs.core.count.call(null,inst_22841__$1);
var inst_22843 = cljs.core.reset_BANG_.call(null,dctr,inst_22842);
var inst_22848 = cljs.core.seq.call(null,inst_22841__$1);
var inst_22849 = inst_22848;
var inst_22850 = null;
var inst_22851 = (0);
var inst_22852 = (0);
var state_22909__$1 = (function (){var statearr_22952 = state_22909;
(statearr_22952[(30)] = inst_22843);

(statearr_22952[(9)] = inst_22850);

(statearr_22952[(20)] = inst_22851);

(statearr_22952[(29)] = inst_22841__$1);

(statearr_22952[(12)] = inst_22852);

(statearr_22952[(21)] = inst_22849);

return statearr_22952;
})();
var statearr_22953_23019 = state_22909__$1;
(statearr_22953_23019[(2)] = null);

(statearr_22953_23019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (28))){
var inst_22868 = (state_22909[(25)]);
var inst_22849 = (state_22909[(21)]);
var inst_22868__$1 = cljs.core.seq.call(null,inst_22849);
var state_22909__$1 = (function (){var statearr_22954 = state_22909;
(statearr_22954[(25)] = inst_22868__$1);

return statearr_22954;
})();
if(inst_22868__$1){
var statearr_22955_23020 = state_22909__$1;
(statearr_22955_23020[(1)] = (33));

} else {
var statearr_22956_23021 = state_22909__$1;
(statearr_22956_23021[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (25))){
var inst_22851 = (state_22909[(20)]);
var inst_22852 = (state_22909[(12)]);
var inst_22854 = (inst_22852 < inst_22851);
var inst_22855 = inst_22854;
var state_22909__$1 = state_22909;
if(cljs.core.truth_(inst_22855)){
var statearr_22957_23022 = state_22909__$1;
(statearr_22957_23022[(1)] = (27));

} else {
var statearr_22958_23023 = state_22909__$1;
(statearr_22958_23023[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (34))){
var state_22909__$1 = state_22909;
var statearr_22959_23024 = state_22909__$1;
(statearr_22959_23024[(2)] = null);

(statearr_22959_23024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (17))){
var state_22909__$1 = state_22909;
var statearr_22960_23025 = state_22909__$1;
(statearr_22960_23025[(2)] = null);

(statearr_22960_23025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (3))){
var inst_22907 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22909__$1,inst_22907);
} else {
if((state_val_22910 === (12))){
var inst_22836 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22961_23026 = state_22909__$1;
(statearr_22961_23026[(2)] = inst_22836);

(statearr_22961_23026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (2))){
var state_22909__$1 = state_22909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22909__$1,(4),ch);
} else {
if((state_val_22910 === (23))){
var state_22909__$1 = state_22909;
var statearr_22962_23027 = state_22909__$1;
(statearr_22962_23027[(2)] = null);

(statearr_22962_23027[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (35))){
var inst_22891 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22963_23028 = state_22909__$1;
(statearr_22963_23028[(2)] = inst_22891);

(statearr_22963_23028[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (19))){
var inst_22808 = (state_22909[(7)]);
var inst_22812 = cljs.core.chunk_first.call(null,inst_22808);
var inst_22813 = cljs.core.chunk_rest.call(null,inst_22808);
var inst_22814 = cljs.core.count.call(null,inst_22812);
var inst_22786 = inst_22813;
var inst_22787 = inst_22812;
var inst_22788 = inst_22814;
var inst_22789 = (0);
var state_22909__$1 = (function (){var statearr_22964 = state_22909;
(statearr_22964[(13)] = inst_22786);

(statearr_22964[(14)] = inst_22787);

(statearr_22964[(16)] = inst_22788);

(statearr_22964[(17)] = inst_22789);

return statearr_22964;
})();
var statearr_22965_23029 = state_22909__$1;
(statearr_22965_23029[(2)] = null);

(statearr_22965_23029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (11))){
var inst_22786 = (state_22909[(13)]);
var inst_22808 = (state_22909[(7)]);
var inst_22808__$1 = cljs.core.seq.call(null,inst_22786);
var state_22909__$1 = (function (){var statearr_22966 = state_22909;
(statearr_22966[(7)] = inst_22808__$1);

return statearr_22966;
})();
if(inst_22808__$1){
var statearr_22967_23030 = state_22909__$1;
(statearr_22967_23030[(1)] = (16));

} else {
var statearr_22968_23031 = state_22909__$1;
(statearr_22968_23031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (9))){
var inst_22838 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22969_23032 = state_22909__$1;
(statearr_22969_23032[(2)] = inst_22838);

(statearr_22969_23032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (5))){
var inst_22784 = cljs.core.deref.call(null,cs);
var inst_22785 = cljs.core.seq.call(null,inst_22784);
var inst_22786 = inst_22785;
var inst_22787 = null;
var inst_22788 = (0);
var inst_22789 = (0);
var state_22909__$1 = (function (){var statearr_22970 = state_22909;
(statearr_22970[(13)] = inst_22786);

(statearr_22970[(14)] = inst_22787);

(statearr_22970[(16)] = inst_22788);

(statearr_22970[(17)] = inst_22789);

return statearr_22970;
})();
var statearr_22971_23033 = state_22909__$1;
(statearr_22971_23033[(2)] = null);

(statearr_22971_23033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (14))){
var state_22909__$1 = state_22909;
var statearr_22972_23034 = state_22909__$1;
(statearr_22972_23034[(2)] = null);

(statearr_22972_23034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (45))){
var inst_22899 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22973_23035 = state_22909__$1;
(statearr_22973_23035[(2)] = inst_22899);

(statearr_22973_23035[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (26))){
var inst_22841 = (state_22909[(29)]);
var inst_22895 = (state_22909[(2)]);
var inst_22896 = cljs.core.seq.call(null,inst_22841);
var state_22909__$1 = (function (){var statearr_22974 = state_22909;
(statearr_22974[(31)] = inst_22895);

return statearr_22974;
})();
if(inst_22896){
var statearr_22975_23036 = state_22909__$1;
(statearr_22975_23036[(1)] = (42));

} else {
var statearr_22976_23037 = state_22909__$1;
(statearr_22976_23037[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (16))){
var inst_22808 = (state_22909[(7)]);
var inst_22810 = cljs.core.chunked_seq_QMARK_.call(null,inst_22808);
var state_22909__$1 = state_22909;
if(inst_22810){
var statearr_22977_23038 = state_22909__$1;
(statearr_22977_23038[(1)] = (19));

} else {
var statearr_22978_23039 = state_22909__$1;
(statearr_22978_23039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (38))){
var inst_22888 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22979_23040 = state_22909__$1;
(statearr_22979_23040[(2)] = inst_22888);

(statearr_22979_23040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (30))){
var state_22909__$1 = state_22909;
var statearr_22980_23041 = state_22909__$1;
(statearr_22980_23041[(2)] = null);

(statearr_22980_23041[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (10))){
var inst_22787 = (state_22909[(14)]);
var inst_22789 = (state_22909[(17)]);
var inst_22797 = cljs.core._nth.call(null,inst_22787,inst_22789);
var inst_22798 = cljs.core.nth.call(null,inst_22797,(0),null);
var inst_22799 = cljs.core.nth.call(null,inst_22797,(1),null);
var state_22909__$1 = (function (){var statearr_22981 = state_22909;
(statearr_22981[(26)] = inst_22798);

return statearr_22981;
})();
if(cljs.core.truth_(inst_22799)){
var statearr_22982_23042 = state_22909__$1;
(statearr_22982_23042[(1)] = (13));

} else {
var statearr_22983_23043 = state_22909__$1;
(statearr_22983_23043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (18))){
var inst_22834 = (state_22909[(2)]);
var state_22909__$1 = state_22909;
var statearr_22984_23044 = state_22909__$1;
(statearr_22984_23044[(2)] = inst_22834);

(statearr_22984_23044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (42))){
var state_22909__$1 = state_22909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22909__$1,(45),dchan);
} else {
if((state_val_22910 === (37))){
var inst_22877 = (state_22909[(23)]);
var inst_22868 = (state_22909[(25)]);
var inst_22777 = (state_22909[(10)]);
var inst_22877__$1 = cljs.core.first.call(null,inst_22868);
var inst_22878 = cljs.core.async.put_BANG_.call(null,inst_22877__$1,inst_22777,done);
var state_22909__$1 = (function (){var statearr_22985 = state_22909;
(statearr_22985[(23)] = inst_22877__$1);

return statearr_22985;
})();
if(cljs.core.truth_(inst_22878)){
var statearr_22986_23045 = state_22909__$1;
(statearr_22986_23045[(1)] = (39));

} else {
var statearr_22987_23046 = state_22909__$1;
(statearr_22987_23046[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22910 === (8))){
var inst_22788 = (state_22909[(16)]);
var inst_22789 = (state_22909[(17)]);
var inst_22791 = (inst_22789 < inst_22788);
var inst_22792 = inst_22791;
var state_22909__$1 = state_22909;
if(cljs.core.truth_(inst_22792)){
var statearr_22988_23047 = state_22909__$1;
(statearr_22988_23047[(1)] = (10));

} else {
var statearr_22989_23048 = state_22909__$1;
(statearr_22989_23048[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__22076__auto__ = null;
var cljs$core$async$mult_$_state_machine__22076__auto____0 = (function (){
var statearr_22990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22990[(0)] = cljs$core$async$mult_$_state_machine__22076__auto__);

(statearr_22990[(1)] = (1));

return statearr_22990;
});
var cljs$core$async$mult_$_state_machine__22076__auto____1 = (function (state_22909){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_22909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e22991){if((e22991 instanceof Object)){
var ex__22079__auto__ = e22991;
var statearr_22992_23049 = state_22909;
(statearr_22992_23049[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23050 = state_22909;
state_22909 = G__23050;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22076__auto__ = function(state_22909){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22076__auto____1.call(this,state_22909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22076__auto____0;
cljs$core$async$mult_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22076__auto____1;
return cljs$core$async$mult_$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_22993 = f__22173__auto__.call(null);
(statearr_22993[(6)] = c__22172__auto___22994);

return statearr_22993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var G__23052 = arguments.length;
switch (G__23052) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_23054 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_23054.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23055 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_23055.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23056 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23056.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23057 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_23057.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23058 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23058.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___23068 = arguments.length;
var i__4830__auto___23069 = (0);
while(true){
if((i__4830__auto___23069 < len__4829__auto___23068)){
args__4835__auto__.push((arguments[i__4830__auto___23069]));

var G__23070 = (i__4830__auto___23069 + (1));
i__4830__auto___23069 = G__23070;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23063){
var map__23064 = p__23063;
var map__23064__$1 = cljs.core.__destructure_map.call(null,map__23064);
var opts = map__23064__$1;
var statearr_23065_23071 = state;
(statearr_23065_23071[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23066_23072 = state;
(statearr_23066_23072[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23067_23073 = state;
(statearr_23067_23073[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23059){
var G__23060 = cljs.core.first.call(null,seq23059);
var seq23059__$1 = cljs.core.next.call(null,seq23059);
var G__23061 = cljs.core.first.call(null,seq23059__$1);
var seq23059__$2 = cljs.core.next.call(null,seq23059__$1);
var G__23062 = cljs.core.first.call(null,seq23059__$2);
var seq23059__$3 = cljs.core.next.call(null,seq23059__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23060,G__23061,G__23062,seq23059__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23074 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23075){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23075 = meta23075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23076,meta23075__$1){
var self__ = this;
var _23076__$1 = this;
return (new cljs.core.async.t_cljs$core$async23074(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23075__$1));
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23076){
var self__ = this;
var _23076__$1 = this;
return self__.meta23075;
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23075","meta23075",-545065707,null)], null);
}));

(cljs.core.async.t_cljs$core$async23074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23074");

(cljs.core.async.t_cljs$core$async23074.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23074.
 */
cljs.core.async.__GT_t_cljs$core$async23074 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23075){
return (new cljs.core.async.t_cljs$core$async23074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23075));
});

}

return (new cljs.core.async.t_cljs$core$async23074(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22172__auto___23188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23144){
var state_val_23145 = (state_23144[(1)]);
if((state_val_23145 === (7))){
var inst_23104 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
if(cljs.core.truth_(inst_23104)){
var statearr_23146_23189 = state_23144__$1;
(statearr_23146_23189[(1)] = (8));

} else {
var statearr_23147_23190 = state_23144__$1;
(statearr_23147_23190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (20))){
var inst_23097 = (state_23144[(7)]);
var state_23144__$1 = state_23144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23144__$1,(23),out,inst_23097);
} else {
if((state_val_23145 === (1))){
var inst_23080 = calc_state.call(null);
var inst_23081 = cljs.core.__destructure_map.call(null,inst_23080);
var inst_23082 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23083 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23084 = cljs.core.get.call(null,inst_23081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23085 = inst_23080;
var state_23144__$1 = (function (){var statearr_23148 = state_23144;
(statearr_23148[(8)] = inst_23085);

(statearr_23148[(9)] = inst_23082);

(statearr_23148[(10)] = inst_23084);

(statearr_23148[(11)] = inst_23083);

return statearr_23148;
})();
var statearr_23149_23191 = state_23144__$1;
(statearr_23149_23191[(2)] = null);

(statearr_23149_23191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (24))){
var inst_23088 = (state_23144[(12)]);
var inst_23085 = inst_23088;
var state_23144__$1 = (function (){var statearr_23150 = state_23144;
(statearr_23150[(8)] = inst_23085);

return statearr_23150;
})();
var statearr_23151_23192 = state_23144__$1;
(statearr_23151_23192[(2)] = null);

(statearr_23151_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (4))){
var inst_23099 = (state_23144[(13)]);
var inst_23097 = (state_23144[(7)]);
var inst_23096 = (state_23144[(2)]);
var inst_23097__$1 = cljs.core.nth.call(null,inst_23096,(0),null);
var inst_23098 = cljs.core.nth.call(null,inst_23096,(1),null);
var inst_23099__$1 = (inst_23097__$1 == null);
var state_23144__$1 = (function (){var statearr_23152 = state_23144;
(statearr_23152[(13)] = inst_23099__$1);

(statearr_23152[(7)] = inst_23097__$1);

(statearr_23152[(14)] = inst_23098);

return statearr_23152;
})();
if(cljs.core.truth_(inst_23099__$1)){
var statearr_23153_23193 = state_23144__$1;
(statearr_23153_23193[(1)] = (5));

} else {
var statearr_23154_23194 = state_23144__$1;
(statearr_23154_23194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (15))){
var inst_23089 = (state_23144[(15)]);
var inst_23118 = (state_23144[(16)]);
var inst_23118__$1 = cljs.core.empty_QMARK_.call(null,inst_23089);
var state_23144__$1 = (function (){var statearr_23155 = state_23144;
(statearr_23155[(16)] = inst_23118__$1);

return statearr_23155;
})();
if(inst_23118__$1){
var statearr_23156_23195 = state_23144__$1;
(statearr_23156_23195[(1)] = (17));

} else {
var statearr_23157_23196 = state_23144__$1;
(statearr_23157_23196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (21))){
var inst_23088 = (state_23144[(12)]);
var inst_23085 = inst_23088;
var state_23144__$1 = (function (){var statearr_23158 = state_23144;
(statearr_23158[(8)] = inst_23085);

return statearr_23158;
})();
var statearr_23159_23197 = state_23144__$1;
(statearr_23159_23197[(2)] = null);

(statearr_23159_23197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (13))){
var inst_23111 = (state_23144[(2)]);
var inst_23112 = calc_state.call(null);
var inst_23085 = inst_23112;
var state_23144__$1 = (function (){var statearr_23160 = state_23144;
(statearr_23160[(8)] = inst_23085);

(statearr_23160[(17)] = inst_23111);

return statearr_23160;
})();
var statearr_23161_23198 = state_23144__$1;
(statearr_23161_23198[(2)] = null);

(statearr_23161_23198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (22))){
var inst_23138 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23162_23199 = state_23144__$1;
(statearr_23162_23199[(2)] = inst_23138);

(statearr_23162_23199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (6))){
var inst_23098 = (state_23144[(14)]);
var inst_23102 = cljs.core._EQ_.call(null,inst_23098,change);
var state_23144__$1 = state_23144;
var statearr_23163_23200 = state_23144__$1;
(statearr_23163_23200[(2)] = inst_23102);

(statearr_23163_23200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (25))){
var state_23144__$1 = state_23144;
var statearr_23164_23201 = state_23144__$1;
(statearr_23164_23201[(2)] = null);

(statearr_23164_23201[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (17))){
var inst_23098 = (state_23144[(14)]);
var inst_23090 = (state_23144[(18)]);
var inst_23120 = inst_23090.call(null,inst_23098);
var inst_23121 = cljs.core.not.call(null,inst_23120);
var state_23144__$1 = state_23144;
var statearr_23165_23202 = state_23144__$1;
(statearr_23165_23202[(2)] = inst_23121);

(statearr_23165_23202[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (3))){
var inst_23142 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23144__$1,inst_23142);
} else {
if((state_val_23145 === (12))){
var state_23144__$1 = state_23144;
var statearr_23166_23203 = state_23144__$1;
(statearr_23166_23203[(2)] = null);

(statearr_23166_23203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (2))){
var inst_23085 = (state_23144[(8)]);
var inst_23088 = (state_23144[(12)]);
var inst_23088__$1 = cljs.core.__destructure_map.call(null,inst_23085);
var inst_23089 = cljs.core.get.call(null,inst_23088__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23090 = cljs.core.get.call(null,inst_23088__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23091 = cljs.core.get.call(null,inst_23088__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23144__$1 = (function (){var statearr_23167 = state_23144;
(statearr_23167[(15)] = inst_23089);

(statearr_23167[(18)] = inst_23090);

(statearr_23167[(12)] = inst_23088__$1);

return statearr_23167;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23144__$1,(4),inst_23091);
} else {
if((state_val_23145 === (23))){
var inst_23129 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
if(cljs.core.truth_(inst_23129)){
var statearr_23168_23204 = state_23144__$1;
(statearr_23168_23204[(1)] = (24));

} else {
var statearr_23169_23205 = state_23144__$1;
(statearr_23169_23205[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (19))){
var inst_23124 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23170_23206 = state_23144__$1;
(statearr_23170_23206[(2)] = inst_23124);

(statearr_23170_23206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (11))){
var inst_23098 = (state_23144[(14)]);
var inst_23108 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23098);
var state_23144__$1 = state_23144;
var statearr_23171_23207 = state_23144__$1;
(statearr_23171_23207[(2)] = inst_23108);

(statearr_23171_23207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (9))){
var inst_23089 = (state_23144[(15)]);
var inst_23115 = (state_23144[(19)]);
var inst_23098 = (state_23144[(14)]);
var inst_23115__$1 = inst_23089.call(null,inst_23098);
var state_23144__$1 = (function (){var statearr_23172 = state_23144;
(statearr_23172[(19)] = inst_23115__$1);

return statearr_23172;
})();
if(cljs.core.truth_(inst_23115__$1)){
var statearr_23173_23208 = state_23144__$1;
(statearr_23173_23208[(1)] = (14));

} else {
var statearr_23174_23209 = state_23144__$1;
(statearr_23174_23209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (5))){
var inst_23099 = (state_23144[(13)]);
var state_23144__$1 = state_23144;
var statearr_23175_23210 = state_23144__$1;
(statearr_23175_23210[(2)] = inst_23099);

(statearr_23175_23210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (14))){
var inst_23115 = (state_23144[(19)]);
var state_23144__$1 = state_23144;
var statearr_23176_23211 = state_23144__$1;
(statearr_23176_23211[(2)] = inst_23115);

(statearr_23176_23211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (26))){
var inst_23134 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23177_23212 = state_23144__$1;
(statearr_23177_23212[(2)] = inst_23134);

(statearr_23177_23212[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (16))){
var inst_23126 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
if(cljs.core.truth_(inst_23126)){
var statearr_23178_23213 = state_23144__$1;
(statearr_23178_23213[(1)] = (20));

} else {
var statearr_23179_23214 = state_23144__$1;
(statearr_23179_23214[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (10))){
var inst_23140 = (state_23144[(2)]);
var state_23144__$1 = state_23144;
var statearr_23180_23215 = state_23144__$1;
(statearr_23180_23215[(2)] = inst_23140);

(statearr_23180_23215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (18))){
var inst_23118 = (state_23144[(16)]);
var state_23144__$1 = state_23144;
var statearr_23181_23216 = state_23144__$1;
(statearr_23181_23216[(2)] = inst_23118);

(statearr_23181_23216[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23145 === (8))){
var inst_23097 = (state_23144[(7)]);
var inst_23106 = (inst_23097 == null);
var state_23144__$1 = state_23144;
if(cljs.core.truth_(inst_23106)){
var statearr_23182_23217 = state_23144__$1;
(statearr_23182_23217[(1)] = (11));

} else {
var statearr_23183_23218 = state_23144__$1;
(statearr_23183_23218[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__22076__auto__ = null;
var cljs$core$async$mix_$_state_machine__22076__auto____0 = (function (){
var statearr_23184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23184[(0)] = cljs$core$async$mix_$_state_machine__22076__auto__);

(statearr_23184[(1)] = (1));

return statearr_23184;
});
var cljs$core$async$mix_$_state_machine__22076__auto____1 = (function (state_23144){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23185){if((e23185 instanceof Object)){
var ex__22079__auto__ = e23185;
var statearr_23186_23219 = state_23144;
(statearr_23186_23219[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23220 = state_23144;
state_23144 = G__23220;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22076__auto__ = function(state_23144){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22076__auto____1.call(this,state_23144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22076__auto____0;
cljs$core$async$mix_$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22076__auto____1;
return cljs$core$async$mix_$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23187 = f__22173__auto__.call(null);
(statearr_23187[(6)] = c__22172__auto___23188);

return statearr_23187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_23223 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_23223.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23224 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_23224.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23225 = (function() {
var G__23226 = null;
var G__23226__1 = (function (p){
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
var G__23226__2 = (function (p,v){
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
G__23226 = function(p,v){
switch(arguments.length){
case 1:
return G__23226__1.call(this,p);
case 2:
return G__23226__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23226.cljs$core$IFn$_invoke$arity$1 = G__23226__1;
G__23226.cljs$core$IFn$_invoke$arity$2 = G__23226__2;
return G__23226;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23222 = arguments.length;
switch (G__23222) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23225.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23225.call(null,p,v);
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
var G__23230 = arguments.length;
switch (G__23230) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__23228_SHARP_){
if(cljs.core.truth_(p1__23228_SHARP_.call(null,topic))){
return p1__23228_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23228_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23231 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23232){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23232 = meta23232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23233,meta23232__$1){
var self__ = this;
var _23233__$1 = this;
return (new cljs.core.async.t_cljs$core$async23231(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23232__$1));
}));

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23233){
var self__ = this;
var _23233__$1 = this;
return self__.meta23232;
}));

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23232","meta23232",634853383,null)], null);
}));

(cljs.core.async.t_cljs$core$async23231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23231");

(cljs.core.async.t_cljs$core$async23231.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23231.
 */
cljs.core.async.__GT_t_cljs$core$async23231 = (function cljs$core$async$__GT_t_cljs$core$async23231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23232){
return (new cljs.core.async.t_cljs$core$async23231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23232));
});

}

return (new cljs.core.async.t_cljs$core$async23231(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22172__auto___23351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23305){
var state_val_23306 = (state_23305[(1)]);
if((state_val_23306 === (7))){
var inst_23301 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23307_23352 = state_23305__$1;
(statearr_23307_23352[(2)] = inst_23301);

(statearr_23307_23352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (20))){
var state_23305__$1 = state_23305;
var statearr_23308_23353 = state_23305__$1;
(statearr_23308_23353[(2)] = null);

(statearr_23308_23353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (1))){
var state_23305__$1 = state_23305;
var statearr_23309_23354 = state_23305__$1;
(statearr_23309_23354[(2)] = null);

(statearr_23309_23354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (24))){
var inst_23284 = (state_23305[(7)]);
var inst_23293 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23284);
var state_23305__$1 = state_23305;
var statearr_23310_23355 = state_23305__$1;
(statearr_23310_23355[(2)] = inst_23293);

(statearr_23310_23355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (4))){
var inst_23236 = (state_23305[(8)]);
var inst_23236__$1 = (state_23305[(2)]);
var inst_23237 = (inst_23236__$1 == null);
var state_23305__$1 = (function (){var statearr_23311 = state_23305;
(statearr_23311[(8)] = inst_23236__$1);

return statearr_23311;
})();
if(cljs.core.truth_(inst_23237)){
var statearr_23312_23356 = state_23305__$1;
(statearr_23312_23356[(1)] = (5));

} else {
var statearr_23313_23357 = state_23305__$1;
(statearr_23313_23357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (15))){
var inst_23278 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23314_23358 = state_23305__$1;
(statearr_23314_23358[(2)] = inst_23278);

(statearr_23314_23358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (21))){
var inst_23298 = (state_23305[(2)]);
var state_23305__$1 = (function (){var statearr_23315 = state_23305;
(statearr_23315[(9)] = inst_23298);

return statearr_23315;
})();
var statearr_23316_23359 = state_23305__$1;
(statearr_23316_23359[(2)] = null);

(statearr_23316_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (13))){
var inst_23260 = (state_23305[(10)]);
var inst_23262 = cljs.core.chunked_seq_QMARK_.call(null,inst_23260);
var state_23305__$1 = state_23305;
if(inst_23262){
var statearr_23317_23360 = state_23305__$1;
(statearr_23317_23360[(1)] = (16));

} else {
var statearr_23318_23361 = state_23305__$1;
(statearr_23318_23361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (22))){
var inst_23290 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
if(cljs.core.truth_(inst_23290)){
var statearr_23319_23362 = state_23305__$1;
(statearr_23319_23362[(1)] = (23));

} else {
var statearr_23320_23363 = state_23305__$1;
(statearr_23320_23363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (6))){
var inst_23284 = (state_23305[(7)]);
var inst_23236 = (state_23305[(8)]);
var inst_23286 = (state_23305[(11)]);
var inst_23284__$1 = topic_fn.call(null,inst_23236);
var inst_23285 = cljs.core.deref.call(null,mults);
var inst_23286__$1 = cljs.core.get.call(null,inst_23285,inst_23284__$1);
var state_23305__$1 = (function (){var statearr_23321 = state_23305;
(statearr_23321[(7)] = inst_23284__$1);

(statearr_23321[(11)] = inst_23286__$1);

return statearr_23321;
})();
if(cljs.core.truth_(inst_23286__$1)){
var statearr_23322_23364 = state_23305__$1;
(statearr_23322_23364[(1)] = (19));

} else {
var statearr_23323_23365 = state_23305__$1;
(statearr_23323_23365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (25))){
var inst_23295 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23324_23366 = state_23305__$1;
(statearr_23324_23366[(2)] = inst_23295);

(statearr_23324_23366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (17))){
var inst_23260 = (state_23305[(10)]);
var inst_23269 = cljs.core.first.call(null,inst_23260);
var inst_23270 = cljs.core.async.muxch_STAR_.call(null,inst_23269);
var inst_23271 = cljs.core.async.close_BANG_.call(null,inst_23270);
var inst_23272 = cljs.core.next.call(null,inst_23260);
var inst_23246 = inst_23272;
var inst_23247 = null;
var inst_23248 = (0);
var inst_23249 = (0);
var state_23305__$1 = (function (){var statearr_23325 = state_23305;
(statearr_23325[(12)] = inst_23247);

(statearr_23325[(13)] = inst_23246);

(statearr_23325[(14)] = inst_23248);

(statearr_23325[(15)] = inst_23249);

(statearr_23325[(16)] = inst_23271);

return statearr_23325;
})();
var statearr_23326_23367 = state_23305__$1;
(statearr_23326_23367[(2)] = null);

(statearr_23326_23367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (3))){
var inst_23303 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23305__$1,inst_23303);
} else {
if((state_val_23306 === (12))){
var inst_23280 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23327_23368 = state_23305__$1;
(statearr_23327_23368[(2)] = inst_23280);

(statearr_23327_23368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (2))){
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23305__$1,(4),ch);
} else {
if((state_val_23306 === (23))){
var state_23305__$1 = state_23305;
var statearr_23328_23369 = state_23305__$1;
(statearr_23328_23369[(2)] = null);

(statearr_23328_23369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (19))){
var inst_23236 = (state_23305[(8)]);
var inst_23286 = (state_23305[(11)]);
var inst_23288 = cljs.core.async.muxch_STAR_.call(null,inst_23286);
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23305__$1,(22),inst_23288,inst_23236);
} else {
if((state_val_23306 === (11))){
var inst_23246 = (state_23305[(13)]);
var inst_23260 = (state_23305[(10)]);
var inst_23260__$1 = cljs.core.seq.call(null,inst_23246);
var state_23305__$1 = (function (){var statearr_23329 = state_23305;
(statearr_23329[(10)] = inst_23260__$1);

return statearr_23329;
})();
if(inst_23260__$1){
var statearr_23330_23370 = state_23305__$1;
(statearr_23330_23370[(1)] = (13));

} else {
var statearr_23331_23371 = state_23305__$1;
(statearr_23331_23371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (9))){
var inst_23282 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23332_23372 = state_23305__$1;
(statearr_23332_23372[(2)] = inst_23282);

(statearr_23332_23372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (5))){
var inst_23243 = cljs.core.deref.call(null,mults);
var inst_23244 = cljs.core.vals.call(null,inst_23243);
var inst_23245 = cljs.core.seq.call(null,inst_23244);
var inst_23246 = inst_23245;
var inst_23247 = null;
var inst_23248 = (0);
var inst_23249 = (0);
var state_23305__$1 = (function (){var statearr_23333 = state_23305;
(statearr_23333[(12)] = inst_23247);

(statearr_23333[(13)] = inst_23246);

(statearr_23333[(14)] = inst_23248);

(statearr_23333[(15)] = inst_23249);

return statearr_23333;
})();
var statearr_23334_23373 = state_23305__$1;
(statearr_23334_23373[(2)] = null);

(statearr_23334_23373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (14))){
var state_23305__$1 = state_23305;
var statearr_23338_23374 = state_23305__$1;
(statearr_23338_23374[(2)] = null);

(statearr_23338_23374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (16))){
var inst_23260 = (state_23305[(10)]);
var inst_23264 = cljs.core.chunk_first.call(null,inst_23260);
var inst_23265 = cljs.core.chunk_rest.call(null,inst_23260);
var inst_23266 = cljs.core.count.call(null,inst_23264);
var inst_23246 = inst_23265;
var inst_23247 = inst_23264;
var inst_23248 = inst_23266;
var inst_23249 = (0);
var state_23305__$1 = (function (){var statearr_23339 = state_23305;
(statearr_23339[(12)] = inst_23247);

(statearr_23339[(13)] = inst_23246);

(statearr_23339[(14)] = inst_23248);

(statearr_23339[(15)] = inst_23249);

return statearr_23339;
})();
var statearr_23340_23375 = state_23305__$1;
(statearr_23340_23375[(2)] = null);

(statearr_23340_23375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (10))){
var inst_23247 = (state_23305[(12)]);
var inst_23246 = (state_23305[(13)]);
var inst_23248 = (state_23305[(14)]);
var inst_23249 = (state_23305[(15)]);
var inst_23254 = cljs.core._nth.call(null,inst_23247,inst_23249);
var inst_23255 = cljs.core.async.muxch_STAR_.call(null,inst_23254);
var inst_23256 = cljs.core.async.close_BANG_.call(null,inst_23255);
var inst_23257 = (inst_23249 + (1));
var tmp23335 = inst_23247;
var tmp23336 = inst_23246;
var tmp23337 = inst_23248;
var inst_23246__$1 = tmp23336;
var inst_23247__$1 = tmp23335;
var inst_23248__$1 = tmp23337;
var inst_23249__$1 = inst_23257;
var state_23305__$1 = (function (){var statearr_23341 = state_23305;
(statearr_23341[(12)] = inst_23247__$1);

(statearr_23341[(13)] = inst_23246__$1);

(statearr_23341[(17)] = inst_23256);

(statearr_23341[(14)] = inst_23248__$1);

(statearr_23341[(15)] = inst_23249__$1);

return statearr_23341;
})();
var statearr_23342_23376 = state_23305__$1;
(statearr_23342_23376[(2)] = null);

(statearr_23342_23376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (18))){
var inst_23275 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23343_23377 = state_23305__$1;
(statearr_23343_23377[(2)] = inst_23275);

(statearr_23343_23377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (8))){
var inst_23248 = (state_23305[(14)]);
var inst_23249 = (state_23305[(15)]);
var inst_23251 = (inst_23249 < inst_23248);
var inst_23252 = inst_23251;
var state_23305__$1 = state_23305;
if(cljs.core.truth_(inst_23252)){
var statearr_23344_23378 = state_23305__$1;
(statearr_23344_23378[(1)] = (10));

} else {
var statearr_23345_23379 = state_23305__$1;
(statearr_23345_23379[(1)] = (11));

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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23346[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23346[(1)] = (1));

return statearr_23346;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23305){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23347){if((e23347 instanceof Object)){
var ex__22079__auto__ = e23347;
var statearr_23348_23380 = state_23305;
(statearr_23348_23380[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23381 = state_23305;
state_23305 = G__23381;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23349 = f__22173__auto__.call(null);
(statearr_23349[(6)] = c__22172__auto___23351);

return statearr_23349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var G__23383 = arguments.length;
switch (G__23383) {
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
var G__23386 = arguments.length;
switch (G__23386) {
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
var G__23389 = arguments.length;
switch (G__23389) {
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
var c__22172__auto___23456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23428){
var state_val_23429 = (state_23428[(1)]);
if((state_val_23429 === (7))){
var state_23428__$1 = state_23428;
var statearr_23430_23457 = state_23428__$1;
(statearr_23430_23457[(2)] = null);

(statearr_23430_23457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (1))){
var state_23428__$1 = state_23428;
var statearr_23431_23458 = state_23428__$1;
(statearr_23431_23458[(2)] = null);

(statearr_23431_23458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (4))){
var inst_23392 = (state_23428[(7)]);
var inst_23394 = (inst_23392 < cnt);
var state_23428__$1 = state_23428;
if(cljs.core.truth_(inst_23394)){
var statearr_23432_23459 = state_23428__$1;
(statearr_23432_23459[(1)] = (6));

} else {
var statearr_23433_23460 = state_23428__$1;
(statearr_23433_23460[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (15))){
var inst_23424 = (state_23428[(2)]);
var state_23428__$1 = state_23428;
var statearr_23434_23461 = state_23428__$1;
(statearr_23434_23461[(2)] = inst_23424);

(statearr_23434_23461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (13))){
var inst_23417 = cljs.core.async.close_BANG_.call(null,out);
var state_23428__$1 = state_23428;
var statearr_23435_23462 = state_23428__$1;
(statearr_23435_23462[(2)] = inst_23417);

(statearr_23435_23462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (6))){
var state_23428__$1 = state_23428;
var statearr_23436_23463 = state_23428__$1;
(statearr_23436_23463[(2)] = null);

(statearr_23436_23463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (3))){
var inst_23426 = (state_23428[(2)]);
var state_23428__$1 = state_23428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23428__$1,inst_23426);
} else {
if((state_val_23429 === (12))){
var inst_23414 = (state_23428[(8)]);
var inst_23414__$1 = (state_23428[(2)]);
var inst_23415 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23414__$1);
var state_23428__$1 = (function (){var statearr_23437 = state_23428;
(statearr_23437[(8)] = inst_23414__$1);

return statearr_23437;
})();
if(cljs.core.truth_(inst_23415)){
var statearr_23438_23464 = state_23428__$1;
(statearr_23438_23464[(1)] = (13));

} else {
var statearr_23439_23465 = state_23428__$1;
(statearr_23439_23465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (2))){
var inst_23391 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23392 = (0);
var state_23428__$1 = (function (){var statearr_23440 = state_23428;
(statearr_23440[(7)] = inst_23392);

(statearr_23440[(9)] = inst_23391);

return statearr_23440;
})();
var statearr_23441_23466 = state_23428__$1;
(statearr_23441_23466[(2)] = null);

(statearr_23441_23466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (11))){
var inst_23392 = (state_23428[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23428,(10),Object,null,(9));
var inst_23401 = chs__$1.call(null,inst_23392);
var inst_23402 = done.call(null,inst_23392);
var inst_23403 = cljs.core.async.take_BANG_.call(null,inst_23401,inst_23402);
var state_23428__$1 = state_23428;
var statearr_23442_23467 = state_23428__$1;
(statearr_23442_23467[(2)] = inst_23403);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (9))){
var inst_23392 = (state_23428[(7)]);
var inst_23405 = (state_23428[(2)]);
var inst_23406 = (inst_23392 + (1));
var inst_23392__$1 = inst_23406;
var state_23428__$1 = (function (){var statearr_23443 = state_23428;
(statearr_23443[(7)] = inst_23392__$1);

(statearr_23443[(10)] = inst_23405);

return statearr_23443;
})();
var statearr_23444_23468 = state_23428__$1;
(statearr_23444_23468[(2)] = null);

(statearr_23444_23468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (5))){
var inst_23412 = (state_23428[(2)]);
var state_23428__$1 = (function (){var statearr_23445 = state_23428;
(statearr_23445[(11)] = inst_23412);

return statearr_23445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23428__$1,(12),dchan);
} else {
if((state_val_23429 === (14))){
var inst_23414 = (state_23428[(8)]);
var inst_23419 = cljs.core.apply.call(null,f,inst_23414);
var state_23428__$1 = state_23428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23428__$1,(16),out,inst_23419);
} else {
if((state_val_23429 === (16))){
var inst_23421 = (state_23428[(2)]);
var state_23428__$1 = (function (){var statearr_23446 = state_23428;
(statearr_23446[(12)] = inst_23421);

return statearr_23446;
})();
var statearr_23447_23469 = state_23428__$1;
(statearr_23447_23469[(2)] = null);

(statearr_23447_23469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (10))){
var inst_23396 = (state_23428[(2)]);
var inst_23397 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23428__$1 = (function (){var statearr_23448 = state_23428;
(statearr_23448[(13)] = inst_23396);

return statearr_23448;
})();
var statearr_23449_23470 = state_23428__$1;
(statearr_23449_23470[(2)] = inst_23397);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23428__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23429 === (8))){
var inst_23410 = (state_23428[(2)]);
var state_23428__$1 = state_23428;
var statearr_23450_23471 = state_23428__$1;
(statearr_23450_23471[(2)] = inst_23410);

(statearr_23450_23471[(1)] = (5));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23451[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23451[(1)] = (1));

return statearr_23451;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23428){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23452){if((e23452 instanceof Object)){
var ex__22079__auto__ = e23452;
var statearr_23453_23472 = state_23428;
(statearr_23453_23472[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23473 = state_23428;
state_23428 = G__23473;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23454 = f__22173__auto__.call(null);
(statearr_23454[(6)] = c__22172__auto___23456);

return statearr_23454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var G__23476 = arguments.length;
switch (G__23476) {
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
var c__22172__auto___23530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23508){
var state_val_23509 = (state_23508[(1)]);
if((state_val_23509 === (7))){
var inst_23488 = (state_23508[(7)]);
var inst_23487 = (state_23508[(8)]);
var inst_23487__$1 = (state_23508[(2)]);
var inst_23488__$1 = cljs.core.nth.call(null,inst_23487__$1,(0),null);
var inst_23489 = cljs.core.nth.call(null,inst_23487__$1,(1),null);
var inst_23490 = (inst_23488__$1 == null);
var state_23508__$1 = (function (){var statearr_23510 = state_23508;
(statearr_23510[(9)] = inst_23489);

(statearr_23510[(7)] = inst_23488__$1);

(statearr_23510[(8)] = inst_23487__$1);

return statearr_23510;
})();
if(cljs.core.truth_(inst_23490)){
var statearr_23511_23531 = state_23508__$1;
(statearr_23511_23531[(1)] = (8));

} else {
var statearr_23512_23532 = state_23508__$1;
(statearr_23512_23532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (1))){
var inst_23477 = cljs.core.vec.call(null,chs);
var inst_23478 = inst_23477;
var state_23508__$1 = (function (){var statearr_23513 = state_23508;
(statearr_23513[(10)] = inst_23478);

return statearr_23513;
})();
var statearr_23514_23533 = state_23508__$1;
(statearr_23514_23533[(2)] = null);

(statearr_23514_23533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (4))){
var inst_23478 = (state_23508[(10)]);
var state_23508__$1 = state_23508;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23508__$1,(7),inst_23478);
} else {
if((state_val_23509 === (6))){
var inst_23504 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23515_23534 = state_23508__$1;
(statearr_23515_23534[(2)] = inst_23504);

(statearr_23515_23534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (3))){
var inst_23506 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23508__$1,inst_23506);
} else {
if((state_val_23509 === (2))){
var inst_23478 = (state_23508[(10)]);
var inst_23480 = cljs.core.count.call(null,inst_23478);
var inst_23481 = (inst_23480 > (0));
var state_23508__$1 = state_23508;
if(cljs.core.truth_(inst_23481)){
var statearr_23517_23535 = state_23508__$1;
(statearr_23517_23535[(1)] = (4));

} else {
var statearr_23518_23536 = state_23508__$1;
(statearr_23518_23536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (11))){
var inst_23478 = (state_23508[(10)]);
var inst_23497 = (state_23508[(2)]);
var tmp23516 = inst_23478;
var inst_23478__$1 = tmp23516;
var state_23508__$1 = (function (){var statearr_23519 = state_23508;
(statearr_23519[(11)] = inst_23497);

(statearr_23519[(10)] = inst_23478__$1);

return statearr_23519;
})();
var statearr_23520_23537 = state_23508__$1;
(statearr_23520_23537[(2)] = null);

(statearr_23520_23537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (9))){
var inst_23488 = (state_23508[(7)]);
var state_23508__$1 = state_23508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23508__$1,(11),out,inst_23488);
} else {
if((state_val_23509 === (5))){
var inst_23502 = cljs.core.async.close_BANG_.call(null,out);
var state_23508__$1 = state_23508;
var statearr_23521_23538 = state_23508__$1;
(statearr_23521_23538[(2)] = inst_23502);

(statearr_23521_23538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (10))){
var inst_23500 = (state_23508[(2)]);
var state_23508__$1 = state_23508;
var statearr_23522_23539 = state_23508__$1;
(statearr_23522_23539[(2)] = inst_23500);

(statearr_23522_23539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23509 === (8))){
var inst_23489 = (state_23508[(9)]);
var inst_23488 = (state_23508[(7)]);
var inst_23478 = (state_23508[(10)]);
var inst_23487 = (state_23508[(8)]);
var inst_23492 = (function (){var cs = inst_23478;
var vec__23483 = inst_23487;
var v = inst_23488;
var c = inst_23489;
return (function (p1__23474_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23474_SHARP_);
});
})();
var inst_23493 = cljs.core.filterv.call(null,inst_23492,inst_23478);
var inst_23478__$1 = inst_23493;
var state_23508__$1 = (function (){var statearr_23523 = state_23508;
(statearr_23523[(10)] = inst_23478__$1);

return statearr_23523;
})();
var statearr_23524_23540 = state_23508__$1;
(statearr_23524_23540[(2)] = null);

(statearr_23524_23540[(1)] = (2));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23525[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23525[(1)] = (1));

return statearr_23525;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23508){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23526){if((e23526 instanceof Object)){
var ex__22079__auto__ = e23526;
var statearr_23527_23541 = state_23508;
(statearr_23527_23541[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23542 = state_23508;
state_23508 = G__23542;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23528 = f__22173__auto__.call(null);
(statearr_23528[(6)] = c__22172__auto___23530);

return statearr_23528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
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
var G__23544 = arguments.length;
switch (G__23544) {
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
var c__22172__auto___23589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23568){
var state_val_23569 = (state_23568[(1)]);
if((state_val_23569 === (7))){
var inst_23550 = (state_23568[(7)]);
var inst_23550__$1 = (state_23568[(2)]);
var inst_23551 = (inst_23550__$1 == null);
var inst_23552 = cljs.core.not.call(null,inst_23551);
var state_23568__$1 = (function (){var statearr_23570 = state_23568;
(statearr_23570[(7)] = inst_23550__$1);

return statearr_23570;
})();
if(inst_23552){
var statearr_23571_23590 = state_23568__$1;
(statearr_23571_23590[(1)] = (8));

} else {
var statearr_23572_23591 = state_23568__$1;
(statearr_23572_23591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (1))){
var inst_23545 = (0);
var state_23568__$1 = (function (){var statearr_23573 = state_23568;
(statearr_23573[(8)] = inst_23545);

return statearr_23573;
})();
var statearr_23574_23592 = state_23568__$1;
(statearr_23574_23592[(2)] = null);

(statearr_23574_23592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (4))){
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23568__$1,(7),ch);
} else {
if((state_val_23569 === (6))){
var inst_23563 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23575_23593 = state_23568__$1;
(statearr_23575_23593[(2)] = inst_23563);

(statearr_23575_23593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (3))){
var inst_23565 = (state_23568[(2)]);
var inst_23566 = cljs.core.async.close_BANG_.call(null,out);
var state_23568__$1 = (function (){var statearr_23576 = state_23568;
(statearr_23576[(9)] = inst_23565);

return statearr_23576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23568__$1,inst_23566);
} else {
if((state_val_23569 === (2))){
var inst_23545 = (state_23568[(8)]);
var inst_23547 = (inst_23545 < n);
var state_23568__$1 = state_23568;
if(cljs.core.truth_(inst_23547)){
var statearr_23577_23594 = state_23568__$1;
(statearr_23577_23594[(1)] = (4));

} else {
var statearr_23578_23595 = state_23568__$1;
(statearr_23578_23595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (11))){
var inst_23545 = (state_23568[(8)]);
var inst_23555 = (state_23568[(2)]);
var inst_23556 = (inst_23545 + (1));
var inst_23545__$1 = inst_23556;
var state_23568__$1 = (function (){var statearr_23579 = state_23568;
(statearr_23579[(8)] = inst_23545__$1);

(statearr_23579[(10)] = inst_23555);

return statearr_23579;
})();
var statearr_23580_23596 = state_23568__$1;
(statearr_23580_23596[(2)] = null);

(statearr_23580_23596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (9))){
var state_23568__$1 = state_23568;
var statearr_23581_23597 = state_23568__$1;
(statearr_23581_23597[(2)] = null);

(statearr_23581_23597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (5))){
var state_23568__$1 = state_23568;
var statearr_23582_23598 = state_23568__$1;
(statearr_23582_23598[(2)] = null);

(statearr_23582_23598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (10))){
var inst_23560 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23583_23599 = state_23568__$1;
(statearr_23583_23599[(2)] = inst_23560);

(statearr_23583_23599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (8))){
var inst_23550 = (state_23568[(7)]);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23568__$1,(11),out,inst_23550);
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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23584[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23584[(1)] = (1));

return statearr_23584;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23568){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23585){if((e23585 instanceof Object)){
var ex__22079__auto__ = e23585;
var statearr_23586_23600 = state_23568;
(statearr_23586_23600[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23601 = state_23568;
state_23568 = G__23601;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23587 = f__22173__auto__.call(null);
(statearr_23587[(6)] = c__22172__auto___23589);

return statearr_23587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23603 = (function (f,ch,meta23604){
this.f = f;
this.ch = ch;
this.meta23604 = meta23604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23605,meta23604__$1){
var self__ = this;
var _23605__$1 = this;
return (new cljs.core.async.t_cljs$core$async23603(self__.f,self__.ch,meta23604__$1));
}));

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23605){
var self__ = this;
var _23605__$1 = this;
return self__.meta23604;
}));

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23606 = (function (f,ch,meta23604,_,fn1,meta23607){
this.f = f;
this.ch = ch;
this.meta23604 = meta23604;
this._ = _;
this.fn1 = fn1;
this.meta23607 = meta23607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23608,meta23607__$1){
var self__ = this;
var _23608__$1 = this;
return (new cljs.core.async.t_cljs$core$async23606(self__.f,self__.ch,self__.meta23604,self__._,self__.fn1,meta23607__$1));
}));

(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23608){
var self__ = this;
var _23608__$1 = this;
return self__.meta23607;
}));

(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__23602_SHARP_){
return f1.call(null,(((p1__23602_SHARP_ == null))?null:self__.f.call(null,p1__23602_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async23606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23604","meta23604",-1791323138,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23603","cljs.core.async/t_cljs$core$async23603",-1253719210,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23607","meta23607",-903177640,null)], null);
}));

(cljs.core.async.t_cljs$core$async23606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23606");

(cljs.core.async.t_cljs$core$async23606.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23606.
 */
cljs.core.async.__GT_t_cljs$core$async23606 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23606(f__$1,ch__$1,meta23604__$1,___$2,fn1__$1,meta23607){
return (new cljs.core.async.t_cljs$core$async23606(f__$1,ch__$1,meta23604__$1,___$2,fn1__$1,meta23607));
});

}

return (new cljs.core.async.t_cljs$core$async23606(self__.f,self__.ch,self__.meta23604,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23604","meta23604",-1791323138,null)], null);
}));

(cljs.core.async.t_cljs$core$async23603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23603");

(cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23603.
 */
cljs.core.async.__GT_t_cljs$core$async23603 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23603(f__$1,ch__$1,meta23604){
return (new cljs.core.async.t_cljs$core$async23603(f__$1,ch__$1,meta23604));
});

}

return (new cljs.core.async.t_cljs$core$async23603(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23609 = (function (f,ch,meta23610){
this.f = f;
this.ch = ch;
this.meta23610 = meta23610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23611,meta23610__$1){
var self__ = this;
var _23611__$1 = this;
return (new cljs.core.async.t_cljs$core$async23609(self__.f,self__.ch,meta23610__$1));
}));

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23611){
var self__ = this;
var _23611__$1 = this;
return self__.meta23610;
}));

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async23609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23610","meta23610",-1848296789,null)], null);
}));

(cljs.core.async.t_cljs$core$async23609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23609");

(cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23609.
 */
cljs.core.async.__GT_t_cljs$core$async23609 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23609(f__$1,ch__$1,meta23610){
return (new cljs.core.async.t_cljs$core$async23609(f__$1,ch__$1,meta23610));
});

}

return (new cljs.core.async.t_cljs$core$async23609(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23612 = (function (p,ch,meta23613){
this.p = p;
this.ch = ch;
this.meta23613 = meta23613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23614,meta23613__$1){
var self__ = this;
var _23614__$1 = this;
return (new cljs.core.async.t_cljs$core$async23612(self__.p,self__.ch,meta23613__$1));
}));

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23614){
var self__ = this;
var _23614__$1 = this;
return self__.meta23613;
}));

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23613","meta23613",737422820,null)], null);
}));

(cljs.core.async.t_cljs$core$async23612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23612");

(cljs.core.async.t_cljs$core$async23612.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23612.
 */
cljs.core.async.__GT_t_cljs$core$async23612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23612(p__$1,ch__$1,meta23613){
return (new cljs.core.async.t_cljs$core$async23612(p__$1,ch__$1,meta23613));
});

}

return (new cljs.core.async.t_cljs$core$async23612(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23616 = arguments.length;
switch (G__23616) {
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
var c__22172__auto___23656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23637){
var state_val_23638 = (state_23637[(1)]);
if((state_val_23638 === (7))){
var inst_23633 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23639_23657 = state_23637__$1;
(statearr_23639_23657[(2)] = inst_23633);

(statearr_23639_23657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (1))){
var state_23637__$1 = state_23637;
var statearr_23640_23658 = state_23637__$1;
(statearr_23640_23658[(2)] = null);

(statearr_23640_23658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (4))){
var inst_23619 = (state_23637[(7)]);
var inst_23619__$1 = (state_23637[(2)]);
var inst_23620 = (inst_23619__$1 == null);
var state_23637__$1 = (function (){var statearr_23641 = state_23637;
(statearr_23641[(7)] = inst_23619__$1);

return statearr_23641;
})();
if(cljs.core.truth_(inst_23620)){
var statearr_23642_23659 = state_23637__$1;
(statearr_23642_23659[(1)] = (5));

} else {
var statearr_23643_23660 = state_23637__$1;
(statearr_23643_23660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (6))){
var inst_23619 = (state_23637[(7)]);
var inst_23624 = p.call(null,inst_23619);
var state_23637__$1 = state_23637;
if(cljs.core.truth_(inst_23624)){
var statearr_23644_23661 = state_23637__$1;
(statearr_23644_23661[(1)] = (8));

} else {
var statearr_23645_23662 = state_23637__$1;
(statearr_23645_23662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (3))){
var inst_23635 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23637__$1,inst_23635);
} else {
if((state_val_23638 === (2))){
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23637__$1,(4),ch);
} else {
if((state_val_23638 === (11))){
var inst_23627 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23646_23663 = state_23637__$1;
(statearr_23646_23663[(2)] = inst_23627);

(statearr_23646_23663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (9))){
var state_23637__$1 = state_23637;
var statearr_23647_23664 = state_23637__$1;
(statearr_23647_23664[(2)] = null);

(statearr_23647_23664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (5))){
var inst_23622 = cljs.core.async.close_BANG_.call(null,out);
var state_23637__$1 = state_23637;
var statearr_23648_23665 = state_23637__$1;
(statearr_23648_23665[(2)] = inst_23622);

(statearr_23648_23665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (10))){
var inst_23630 = (state_23637[(2)]);
var state_23637__$1 = (function (){var statearr_23649 = state_23637;
(statearr_23649[(8)] = inst_23630);

return statearr_23649;
})();
var statearr_23650_23666 = state_23637__$1;
(statearr_23650_23666[(2)] = null);

(statearr_23650_23666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (8))){
var inst_23619 = (state_23637[(7)]);
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23637__$1,(11),out,inst_23619);
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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23651 = [null,null,null,null,null,null,null,null,null];
(statearr_23651[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23651[(1)] = (1));

return statearr_23651;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23637){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23652){if((e23652 instanceof Object)){
var ex__22079__auto__ = e23652;
var statearr_23653_23667 = state_23637;
(statearr_23653_23667[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23668 = state_23637;
state_23637 = G__23668;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23654 = f__22173__auto__.call(null);
(statearr_23654[(6)] = c__22172__auto___23656);

return statearr_23654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23670 = arguments.length;
switch (G__23670) {
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
var c__22172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23733){
var state_val_23734 = (state_23733[(1)]);
if((state_val_23734 === (7))){
var inst_23729 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23735_23773 = state_23733__$1;
(statearr_23735_23773[(2)] = inst_23729);

(statearr_23735_23773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (20))){
var inst_23699 = (state_23733[(7)]);
var inst_23710 = (state_23733[(2)]);
var inst_23711 = cljs.core.next.call(null,inst_23699);
var inst_23685 = inst_23711;
var inst_23686 = null;
var inst_23687 = (0);
var inst_23688 = (0);
var state_23733__$1 = (function (){var statearr_23736 = state_23733;
(statearr_23736[(8)] = inst_23710);

(statearr_23736[(9)] = inst_23687);

(statearr_23736[(10)] = inst_23688);

(statearr_23736[(11)] = inst_23685);

(statearr_23736[(12)] = inst_23686);

return statearr_23736;
})();
var statearr_23737_23774 = state_23733__$1;
(statearr_23737_23774[(2)] = null);

(statearr_23737_23774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (1))){
var state_23733__$1 = state_23733;
var statearr_23738_23775 = state_23733__$1;
(statearr_23738_23775[(2)] = null);

(statearr_23738_23775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (4))){
var inst_23674 = (state_23733[(13)]);
var inst_23674__$1 = (state_23733[(2)]);
var inst_23675 = (inst_23674__$1 == null);
var state_23733__$1 = (function (){var statearr_23739 = state_23733;
(statearr_23739[(13)] = inst_23674__$1);

return statearr_23739;
})();
if(cljs.core.truth_(inst_23675)){
var statearr_23740_23776 = state_23733__$1;
(statearr_23740_23776[(1)] = (5));

} else {
var statearr_23741_23777 = state_23733__$1;
(statearr_23741_23777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (15))){
var state_23733__$1 = state_23733;
var statearr_23745_23778 = state_23733__$1;
(statearr_23745_23778[(2)] = null);

(statearr_23745_23778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (21))){
var state_23733__$1 = state_23733;
var statearr_23746_23779 = state_23733__$1;
(statearr_23746_23779[(2)] = null);

(statearr_23746_23779[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (13))){
var inst_23687 = (state_23733[(9)]);
var inst_23688 = (state_23733[(10)]);
var inst_23685 = (state_23733[(11)]);
var inst_23686 = (state_23733[(12)]);
var inst_23695 = (state_23733[(2)]);
var inst_23696 = (inst_23688 + (1));
var tmp23742 = inst_23687;
var tmp23743 = inst_23685;
var tmp23744 = inst_23686;
var inst_23685__$1 = tmp23743;
var inst_23686__$1 = tmp23744;
var inst_23687__$1 = tmp23742;
var inst_23688__$1 = inst_23696;
var state_23733__$1 = (function (){var statearr_23747 = state_23733;
(statearr_23747[(9)] = inst_23687__$1);

(statearr_23747[(10)] = inst_23688__$1);

(statearr_23747[(14)] = inst_23695);

(statearr_23747[(11)] = inst_23685__$1);

(statearr_23747[(12)] = inst_23686__$1);

return statearr_23747;
})();
var statearr_23748_23780 = state_23733__$1;
(statearr_23748_23780[(2)] = null);

(statearr_23748_23780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (22))){
var state_23733__$1 = state_23733;
var statearr_23749_23781 = state_23733__$1;
(statearr_23749_23781[(2)] = null);

(statearr_23749_23781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (6))){
var inst_23674 = (state_23733[(13)]);
var inst_23683 = f.call(null,inst_23674);
var inst_23684 = cljs.core.seq.call(null,inst_23683);
var inst_23685 = inst_23684;
var inst_23686 = null;
var inst_23687 = (0);
var inst_23688 = (0);
var state_23733__$1 = (function (){var statearr_23750 = state_23733;
(statearr_23750[(9)] = inst_23687);

(statearr_23750[(10)] = inst_23688);

(statearr_23750[(11)] = inst_23685);

(statearr_23750[(12)] = inst_23686);

return statearr_23750;
})();
var statearr_23751_23782 = state_23733__$1;
(statearr_23751_23782[(2)] = null);

(statearr_23751_23782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (17))){
var inst_23699 = (state_23733[(7)]);
var inst_23703 = cljs.core.chunk_first.call(null,inst_23699);
var inst_23704 = cljs.core.chunk_rest.call(null,inst_23699);
var inst_23705 = cljs.core.count.call(null,inst_23703);
var inst_23685 = inst_23704;
var inst_23686 = inst_23703;
var inst_23687 = inst_23705;
var inst_23688 = (0);
var state_23733__$1 = (function (){var statearr_23752 = state_23733;
(statearr_23752[(9)] = inst_23687);

(statearr_23752[(10)] = inst_23688);

(statearr_23752[(11)] = inst_23685);

(statearr_23752[(12)] = inst_23686);

return statearr_23752;
})();
var statearr_23753_23783 = state_23733__$1;
(statearr_23753_23783[(2)] = null);

(statearr_23753_23783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (3))){
var inst_23731 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23733__$1,inst_23731);
} else {
if((state_val_23734 === (12))){
var inst_23719 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23754_23784 = state_23733__$1;
(statearr_23754_23784[(2)] = inst_23719);

(statearr_23754_23784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (2))){
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23733__$1,(4),in$);
} else {
if((state_val_23734 === (23))){
var inst_23727 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23755_23785 = state_23733__$1;
(statearr_23755_23785[(2)] = inst_23727);

(statearr_23755_23785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (19))){
var inst_23714 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23756_23786 = state_23733__$1;
(statearr_23756_23786[(2)] = inst_23714);

(statearr_23756_23786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (11))){
var inst_23699 = (state_23733[(7)]);
var inst_23685 = (state_23733[(11)]);
var inst_23699__$1 = cljs.core.seq.call(null,inst_23685);
var state_23733__$1 = (function (){var statearr_23757 = state_23733;
(statearr_23757[(7)] = inst_23699__$1);

return statearr_23757;
})();
if(inst_23699__$1){
var statearr_23758_23787 = state_23733__$1;
(statearr_23758_23787[(1)] = (14));

} else {
var statearr_23759_23788 = state_23733__$1;
(statearr_23759_23788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (9))){
var inst_23721 = (state_23733[(2)]);
var inst_23722 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23733__$1 = (function (){var statearr_23760 = state_23733;
(statearr_23760[(15)] = inst_23721);

return statearr_23760;
})();
if(cljs.core.truth_(inst_23722)){
var statearr_23761_23789 = state_23733__$1;
(statearr_23761_23789[(1)] = (21));

} else {
var statearr_23762_23790 = state_23733__$1;
(statearr_23762_23790[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (5))){
var inst_23677 = cljs.core.async.close_BANG_.call(null,out);
var state_23733__$1 = state_23733;
var statearr_23763_23791 = state_23733__$1;
(statearr_23763_23791[(2)] = inst_23677);

(statearr_23763_23791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (14))){
var inst_23699 = (state_23733[(7)]);
var inst_23701 = cljs.core.chunked_seq_QMARK_.call(null,inst_23699);
var state_23733__$1 = state_23733;
if(inst_23701){
var statearr_23764_23792 = state_23733__$1;
(statearr_23764_23792[(1)] = (17));

} else {
var statearr_23765_23793 = state_23733__$1;
(statearr_23765_23793[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (16))){
var inst_23717 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23766_23794 = state_23733__$1;
(statearr_23766_23794[(2)] = inst_23717);

(statearr_23766_23794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (10))){
var inst_23688 = (state_23733[(10)]);
var inst_23686 = (state_23733[(12)]);
var inst_23693 = cljs.core._nth.call(null,inst_23686,inst_23688);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23733__$1,(13),out,inst_23693);
} else {
if((state_val_23734 === (18))){
var inst_23699 = (state_23733[(7)]);
var inst_23708 = cljs.core.first.call(null,inst_23699);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23733__$1,(20),out,inst_23708);
} else {
if((state_val_23734 === (8))){
var inst_23687 = (state_23733[(9)]);
var inst_23688 = (state_23733[(10)]);
var inst_23690 = (inst_23688 < inst_23687);
var inst_23691 = inst_23690;
var state_23733__$1 = state_23733;
if(cljs.core.truth_(inst_23691)){
var statearr_23767_23795 = state_23733__$1;
(statearr_23767_23795[(1)] = (10));

} else {
var statearr_23768_23796 = state_23733__$1;
(statearr_23768_23796[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____0 = (function (){
var statearr_23769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23769[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__);

(statearr_23769[(1)] = (1));

return statearr_23769;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____1 = (function (state_23733){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23770){if((e23770 instanceof Object)){
var ex__22079__auto__ = e23770;
var statearr_23771_23797 = state_23733;
(statearr_23771_23797[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23798 = state_23733;
state_23733 = G__23798;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__ = function(state_23733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____1.call(this,state_23733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22076__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23772 = f__22173__auto__.call(null);
(statearr_23772[(6)] = c__22172__auto__);

return statearr_23772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));

return c__22172__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23800 = arguments.length;
switch (G__23800) {
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
var G__23803 = arguments.length;
switch (G__23803) {
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
var G__23806 = arguments.length;
switch (G__23806) {
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
var c__22172__auto___23853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23830){
var state_val_23831 = (state_23830[(1)]);
if((state_val_23831 === (7))){
var inst_23825 = (state_23830[(2)]);
var state_23830__$1 = state_23830;
var statearr_23832_23854 = state_23830__$1;
(statearr_23832_23854[(2)] = inst_23825);

(statearr_23832_23854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (1))){
var inst_23807 = null;
var state_23830__$1 = (function (){var statearr_23833 = state_23830;
(statearr_23833[(7)] = inst_23807);

return statearr_23833;
})();
var statearr_23834_23855 = state_23830__$1;
(statearr_23834_23855[(2)] = null);

(statearr_23834_23855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (4))){
var inst_23810 = (state_23830[(8)]);
var inst_23810__$1 = (state_23830[(2)]);
var inst_23811 = (inst_23810__$1 == null);
var inst_23812 = cljs.core.not.call(null,inst_23811);
var state_23830__$1 = (function (){var statearr_23835 = state_23830;
(statearr_23835[(8)] = inst_23810__$1);

return statearr_23835;
})();
if(inst_23812){
var statearr_23836_23856 = state_23830__$1;
(statearr_23836_23856[(1)] = (5));

} else {
var statearr_23837_23857 = state_23830__$1;
(statearr_23837_23857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (6))){
var state_23830__$1 = state_23830;
var statearr_23838_23858 = state_23830__$1;
(statearr_23838_23858[(2)] = null);

(statearr_23838_23858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (3))){
var inst_23827 = (state_23830[(2)]);
var inst_23828 = cljs.core.async.close_BANG_.call(null,out);
var state_23830__$1 = (function (){var statearr_23839 = state_23830;
(statearr_23839[(9)] = inst_23827);

return statearr_23839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23830__$1,inst_23828);
} else {
if((state_val_23831 === (2))){
var state_23830__$1 = state_23830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23830__$1,(4),ch);
} else {
if((state_val_23831 === (11))){
var inst_23810 = (state_23830[(8)]);
var inst_23819 = (state_23830[(2)]);
var inst_23807 = inst_23810;
var state_23830__$1 = (function (){var statearr_23840 = state_23830;
(statearr_23840[(7)] = inst_23807);

(statearr_23840[(10)] = inst_23819);

return statearr_23840;
})();
var statearr_23841_23859 = state_23830__$1;
(statearr_23841_23859[(2)] = null);

(statearr_23841_23859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (9))){
var inst_23810 = (state_23830[(8)]);
var state_23830__$1 = state_23830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23830__$1,(11),out,inst_23810);
} else {
if((state_val_23831 === (5))){
var inst_23807 = (state_23830[(7)]);
var inst_23810 = (state_23830[(8)]);
var inst_23814 = cljs.core._EQ_.call(null,inst_23810,inst_23807);
var state_23830__$1 = state_23830;
if(inst_23814){
var statearr_23843_23860 = state_23830__$1;
(statearr_23843_23860[(1)] = (8));

} else {
var statearr_23844_23861 = state_23830__$1;
(statearr_23844_23861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (10))){
var inst_23822 = (state_23830[(2)]);
var state_23830__$1 = state_23830;
var statearr_23845_23862 = state_23830__$1;
(statearr_23845_23862[(2)] = inst_23822);

(statearr_23845_23862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23831 === (8))){
var inst_23807 = (state_23830[(7)]);
var tmp23842 = inst_23807;
var inst_23807__$1 = tmp23842;
var state_23830__$1 = (function (){var statearr_23846 = state_23830;
(statearr_23846[(7)] = inst_23807__$1);

return statearr_23846;
})();
var statearr_23847_23863 = state_23830__$1;
(statearr_23847_23863[(2)] = null);

(statearr_23847_23863[(1)] = (2));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23848[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23848[(1)] = (1));

return statearr_23848;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23830){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23849){if((e23849 instanceof Object)){
var ex__22079__auto__ = e23849;
var statearr_23850_23864 = state_23830;
(statearr_23850_23864[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23865 = state_23830;
state_23830 = G__23865;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23851 = f__22173__auto__.call(null);
(statearr_23851[(6)] = c__22172__auto___23853);

return statearr_23851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23867 = arguments.length;
switch (G__23867) {
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
var c__22172__auto___23933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23905){
var state_val_23906 = (state_23905[(1)]);
if((state_val_23906 === (7))){
var inst_23901 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23907_23934 = state_23905__$1;
(statearr_23907_23934[(2)] = inst_23901);

(statearr_23907_23934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (1))){
var inst_23868 = (new Array(n));
var inst_23869 = inst_23868;
var inst_23870 = (0);
var state_23905__$1 = (function (){var statearr_23908 = state_23905;
(statearr_23908[(7)] = inst_23869);

(statearr_23908[(8)] = inst_23870);

return statearr_23908;
})();
var statearr_23909_23935 = state_23905__$1;
(statearr_23909_23935[(2)] = null);

(statearr_23909_23935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (4))){
var inst_23873 = (state_23905[(9)]);
var inst_23873__$1 = (state_23905[(2)]);
var inst_23874 = (inst_23873__$1 == null);
var inst_23875 = cljs.core.not.call(null,inst_23874);
var state_23905__$1 = (function (){var statearr_23910 = state_23905;
(statearr_23910[(9)] = inst_23873__$1);

return statearr_23910;
})();
if(inst_23875){
var statearr_23911_23936 = state_23905__$1;
(statearr_23911_23936[(1)] = (5));

} else {
var statearr_23912_23937 = state_23905__$1;
(statearr_23912_23937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (15))){
var inst_23895 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23913_23938 = state_23905__$1;
(statearr_23913_23938[(2)] = inst_23895);

(statearr_23913_23938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (13))){
var state_23905__$1 = state_23905;
var statearr_23914_23939 = state_23905__$1;
(statearr_23914_23939[(2)] = null);

(statearr_23914_23939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (6))){
var inst_23870 = (state_23905[(8)]);
var inst_23891 = (inst_23870 > (0));
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23891)){
var statearr_23915_23940 = state_23905__$1;
(statearr_23915_23940[(1)] = (12));

} else {
var statearr_23916_23941 = state_23905__$1;
(statearr_23916_23941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (3))){
var inst_23903 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23905__$1,inst_23903);
} else {
if((state_val_23906 === (12))){
var inst_23869 = (state_23905[(7)]);
var inst_23893 = cljs.core.vec.call(null,inst_23869);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23905__$1,(15),out,inst_23893);
} else {
if((state_val_23906 === (2))){
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23905__$1,(4),ch);
} else {
if((state_val_23906 === (11))){
var inst_23885 = (state_23905[(2)]);
var inst_23886 = (new Array(n));
var inst_23869 = inst_23886;
var inst_23870 = (0);
var state_23905__$1 = (function (){var statearr_23917 = state_23905;
(statearr_23917[(10)] = inst_23885);

(statearr_23917[(7)] = inst_23869);

(statearr_23917[(8)] = inst_23870);

return statearr_23917;
})();
var statearr_23918_23942 = state_23905__$1;
(statearr_23918_23942[(2)] = null);

(statearr_23918_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (9))){
var inst_23869 = (state_23905[(7)]);
var inst_23883 = cljs.core.vec.call(null,inst_23869);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23905__$1,(11),out,inst_23883);
} else {
if((state_val_23906 === (5))){
var inst_23873 = (state_23905[(9)]);
var inst_23869 = (state_23905[(7)]);
var inst_23878 = (state_23905[(11)]);
var inst_23870 = (state_23905[(8)]);
var inst_23877 = (inst_23869[inst_23870] = inst_23873);
var inst_23878__$1 = (inst_23870 + (1));
var inst_23879 = (inst_23878__$1 < n);
var state_23905__$1 = (function (){var statearr_23919 = state_23905;
(statearr_23919[(12)] = inst_23877);

(statearr_23919[(11)] = inst_23878__$1);

return statearr_23919;
})();
if(cljs.core.truth_(inst_23879)){
var statearr_23920_23943 = state_23905__$1;
(statearr_23920_23943[(1)] = (8));

} else {
var statearr_23921_23944 = state_23905__$1;
(statearr_23921_23944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (14))){
var inst_23898 = (state_23905[(2)]);
var inst_23899 = cljs.core.async.close_BANG_.call(null,out);
var state_23905__$1 = (function (){var statearr_23923 = state_23905;
(statearr_23923[(13)] = inst_23898);

return statearr_23923;
})();
var statearr_23924_23945 = state_23905__$1;
(statearr_23924_23945[(2)] = inst_23899);

(statearr_23924_23945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (10))){
var inst_23889 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23925_23946 = state_23905__$1;
(statearr_23925_23946[(2)] = inst_23889);

(statearr_23925_23946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23906 === (8))){
var inst_23869 = (state_23905[(7)]);
var inst_23878 = (state_23905[(11)]);
var tmp23922 = inst_23869;
var inst_23869__$1 = tmp23922;
var inst_23870 = inst_23878;
var state_23905__$1 = (function (){var statearr_23926 = state_23905;
(statearr_23926[(7)] = inst_23869__$1);

(statearr_23926[(8)] = inst_23870);

return statearr_23926;
})();
var statearr_23927_23947 = state_23905__$1;
(statearr_23927_23947[(2)] = null);

(statearr_23927_23947[(1)] = (2));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_23928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23928[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_23928[(1)] = (1));

return statearr_23928;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23905){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e23929){if((e23929 instanceof Object)){
var ex__22079__auto__ = e23929;
var statearr_23930_23948 = state_23905;
(statearr_23930_23948[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23949 = state_23905;
state_23905 = G__23949;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_23931 = f__22173__auto__.call(null);
(statearr_23931[(6)] = c__22172__auto___23933);

return statearr_23931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23951 = arguments.length;
switch (G__23951) {
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
var c__22172__auto___24028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22173__auto__ = (function (){var switch__22075__auto__ = (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (7))){
var inst_23992 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_23998_24029 = state_23996__$1;
(statearr_23998_24029[(2)] = inst_23992);

(statearr_23998_24029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (1))){
var inst_23952 = [];
var inst_23953 = inst_23952;
var inst_23954 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23996__$1 = (function (){var statearr_23999 = state_23996;
(statearr_23999[(7)] = inst_23954);

(statearr_23999[(8)] = inst_23953);

return statearr_23999;
})();
var statearr_24000_24030 = state_23996__$1;
(statearr_24000_24030[(2)] = null);

(statearr_24000_24030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (4))){
var inst_23957 = (state_23996[(9)]);
var inst_23957__$1 = (state_23996[(2)]);
var inst_23958 = (inst_23957__$1 == null);
var inst_23959 = cljs.core.not.call(null,inst_23958);
var state_23996__$1 = (function (){var statearr_24001 = state_23996;
(statearr_24001[(9)] = inst_23957__$1);

return statearr_24001;
})();
if(inst_23959){
var statearr_24002_24031 = state_23996__$1;
(statearr_24002_24031[(1)] = (5));

} else {
var statearr_24003_24032 = state_23996__$1;
(statearr_24003_24032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (15))){
var inst_23953 = (state_23996[(8)]);
var inst_23984 = cljs.core.vec.call(null,inst_23953);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23996__$1,(18),out,inst_23984);
} else {
if((state_val_23997 === (13))){
var inst_23979 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_24004_24033 = state_23996__$1;
(statearr_24004_24033[(2)] = inst_23979);

(statearr_24004_24033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (6))){
var inst_23953 = (state_23996[(8)]);
var inst_23981 = inst_23953.length;
var inst_23982 = (inst_23981 > (0));
var state_23996__$1 = state_23996;
if(cljs.core.truth_(inst_23982)){
var statearr_24005_24034 = state_23996__$1;
(statearr_24005_24034[(1)] = (15));

} else {
var statearr_24006_24035 = state_23996__$1;
(statearr_24006_24035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (17))){
var inst_23989 = (state_23996[(2)]);
var inst_23990 = cljs.core.async.close_BANG_.call(null,out);
var state_23996__$1 = (function (){var statearr_24007 = state_23996;
(statearr_24007[(10)] = inst_23989);

return statearr_24007;
})();
var statearr_24008_24036 = state_23996__$1;
(statearr_24008_24036[(2)] = inst_23990);

(statearr_24008_24036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (3))){
var inst_23994 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
if((state_val_23997 === (12))){
var inst_23953 = (state_23996[(8)]);
var inst_23972 = cljs.core.vec.call(null,inst_23953);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23996__$1,(14),out,inst_23972);
} else {
if((state_val_23997 === (2))){
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(4),ch);
} else {
if((state_val_23997 === (11))){
var inst_23957 = (state_23996[(9)]);
var inst_23953 = (state_23996[(8)]);
var inst_23961 = (state_23996[(11)]);
var inst_23969 = inst_23953.push(inst_23957);
var tmp24009 = inst_23953;
var inst_23953__$1 = tmp24009;
var inst_23954 = inst_23961;
var state_23996__$1 = (function (){var statearr_24010 = state_23996;
(statearr_24010[(7)] = inst_23954);

(statearr_24010[(8)] = inst_23953__$1);

(statearr_24010[(12)] = inst_23969);

return statearr_24010;
})();
var statearr_24011_24037 = state_23996__$1;
(statearr_24011_24037[(2)] = null);

(statearr_24011_24037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (9))){
var inst_23954 = (state_23996[(7)]);
var inst_23965 = cljs.core.keyword_identical_QMARK_.call(null,inst_23954,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23996__$1 = state_23996;
var statearr_24012_24038 = state_23996__$1;
(statearr_24012_24038[(2)] = inst_23965);

(statearr_24012_24038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var inst_23957 = (state_23996[(9)]);
var inst_23954 = (state_23996[(7)]);
var inst_23961 = (state_23996[(11)]);
var inst_23962 = (state_23996[(13)]);
var inst_23961__$1 = f.call(null,inst_23957);
var inst_23962__$1 = cljs.core._EQ_.call(null,inst_23961__$1,inst_23954);
var state_23996__$1 = (function (){var statearr_24013 = state_23996;
(statearr_24013[(11)] = inst_23961__$1);

(statearr_24013[(13)] = inst_23962__$1);

return statearr_24013;
})();
if(inst_23962__$1){
var statearr_24014_24039 = state_23996__$1;
(statearr_24014_24039[(1)] = (8));

} else {
var statearr_24015_24040 = state_23996__$1;
(statearr_24015_24040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (14))){
var inst_23957 = (state_23996[(9)]);
var inst_23961 = (state_23996[(11)]);
var inst_23974 = (state_23996[(2)]);
var inst_23975 = [];
var inst_23976 = inst_23975.push(inst_23957);
var inst_23953 = inst_23975;
var inst_23954 = inst_23961;
var state_23996__$1 = (function (){var statearr_24016 = state_23996;
(statearr_24016[(7)] = inst_23954);

(statearr_24016[(14)] = inst_23974);

(statearr_24016[(8)] = inst_23953);

(statearr_24016[(15)] = inst_23976);

return statearr_24016;
})();
var statearr_24017_24041 = state_23996__$1;
(statearr_24017_24041[(2)] = null);

(statearr_24017_24041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (16))){
var state_23996__$1 = state_23996;
var statearr_24018_24042 = state_23996__$1;
(statearr_24018_24042[(2)] = null);

(statearr_24018_24042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (10))){
var inst_23967 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
if(cljs.core.truth_(inst_23967)){
var statearr_24019_24043 = state_23996__$1;
(statearr_24019_24043[(1)] = (11));

} else {
var statearr_24020_24044 = state_23996__$1;
(statearr_24020_24044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (18))){
var inst_23986 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_24021_24045 = state_23996__$1;
(statearr_24021_24045[(2)] = inst_23986);

(statearr_24021_24045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (8))){
var inst_23962 = (state_23996[(13)]);
var state_23996__$1 = state_23996;
var statearr_24022_24046 = state_23996__$1;
(statearr_24022_24046[(2)] = inst_23962);

(statearr_24022_24046[(1)] = (10));


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
var cljs$core$async$state_machine__22076__auto__ = null;
var cljs$core$async$state_machine__22076__auto____0 = (function (){
var statearr_24023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24023[(0)] = cljs$core$async$state_machine__22076__auto__);

(statearr_24023[(1)] = (1));

return statearr_24023;
});
var cljs$core$async$state_machine__22076__auto____1 = (function (state_23996){
while(true){
var ret_value__22077__auto__ = (function (){try{while(true){
var result__22078__auto__ = switch__22075__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22078__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object)){
var ex__22079__auto__ = e24024;
var statearr_24025_24047 = state_23996;
(statearr_24025_24047[(5)] = ex__22079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24048 = state_23996;
state_23996 = G__24048;
continue;
} else {
return ret_value__22077__auto__;
}
break;
}
});
cljs$core$async$state_machine__22076__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22076__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22076__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22076__auto____0;
cljs$core$async$state_machine__22076__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22076__auto____1;
return cljs$core$async$state_machine__22076__auto__;
})()
})();
var state__22174__auto__ = (function (){var statearr_24026 = f__22173__auto__.call(null);
(statearr_24026[(6)] = c__22172__auto___24028);

return statearr_24026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22174__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

