// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18943 = arguments.length;
switch (G__18943) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18944 = (function (f,blockable,meta18945){
this.f = f;
this.blockable = blockable;
this.meta18945 = meta18945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18946,meta18945__$1){
var self__ = this;
var _18946__$1 = this;
return (new cljs.core.async.t_cljs$core$async18944(self__.f,self__.blockable,meta18945__$1));
}));

(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18946){
var self__ = this;
var _18946__$1 = this;
return self__.meta18945;
}));

(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18945","meta18945",1761030877,null)], null);
}));

(cljs.core.async.t_cljs$core$async18944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18944");

(cljs.core.async.t_cljs$core$async18944.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async18944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18944.
 */
cljs.core.async.__GT_t_cljs$core$async18944 = (function cljs$core$async$__GT_t_cljs$core$async18944(f__$1,blockable__$1,meta18945){
return (new cljs.core.async.t_cljs$core$async18944(f__$1,blockable__$1,meta18945));
});

}

return (new cljs.core.async.t_cljs$core$async18944(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18950 = arguments.length;
switch (G__18950) {
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
var G__18953 = arguments.length;
switch (G__18953) {
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
var G__18956 = arguments.length;
switch (G__18956) {
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
var val_18958 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18958);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18958);
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
var G__18960 = arguments.length;
switch (G__18960) {
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
var n__4706__auto___18962 = n;
var x_18963 = (0);
while(true){
if((x_18963 < n__4706__auto___18962)){
(a[x_18963] = (0));

var G__18964 = (x_18963 + (1));
x_18963 = G__18964;
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

var G__18965 = (i + (1));
i = G__18965;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18966 = (function (flag,meta18967){
this.flag = flag;
this.meta18967 = meta18967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18968,meta18967__$1){
var self__ = this;
var _18968__$1 = this;
return (new cljs.core.async.t_cljs$core$async18966(self__.flag,meta18967__$1));
}));

(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18968){
var self__ = this;
var _18968__$1 = this;
return self__.meta18967;
}));

(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18967","meta18967",1404549455,null)], null);
}));

(cljs.core.async.t_cljs$core$async18966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18966");

(cljs.core.async.t_cljs$core$async18966.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async18966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18966.
 */
cljs.core.async.__GT_t_cljs$core$async18966 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18966(flag__$1,meta18967){
return (new cljs.core.async.t_cljs$core$async18966(flag__$1,meta18967));
});

}

return (new cljs.core.async.t_cljs$core$async18966(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18969 = (function (flag,cb,meta18970){
this.flag = flag;
this.cb = cb;
this.meta18970 = meta18970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18971,meta18970__$1){
var self__ = this;
var _18971__$1 = this;
return (new cljs.core.async.t_cljs$core$async18969(self__.flag,self__.cb,meta18970__$1));
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18971){
var self__ = this;
var _18971__$1 = this;
return self__.meta18970;
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18970","meta18970",-1725589164,null)], null);
}));

(cljs.core.async.t_cljs$core$async18969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18969");

(cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async18969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18969.
 */
cljs.core.async.__GT_t_cljs$core$async18969 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18969(flag__$1,cb__$1,meta18970){
return (new cljs.core.async.t_cljs$core$async18969(flag__$1,cb__$1,meta18970));
});

}

return (new cljs.core.async.t_cljs$core$async18969(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18972_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18972_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18973_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18973_SHARP_,port], null));
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
var G__18974 = (i + (1));
i = G__18974;
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
var len__4829__auto___18979 = arguments.length;
var i__4830__auto___18980 = (0);
while(true){
if((i__4830__auto___18980 < len__4829__auto___18979)){
args__4835__auto__.push((arguments[i__4830__auto___18980]));

var G__18981 = (i__4830__auto___18980 + (1));
i__4830__auto___18980 = G__18981;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18977){
var map__18978 = p__18977;
var map__18978__$1 = cljs.core.__destructure_map.call(null,map__18978);
var opts = map__18978__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18975){
var G__18976 = cljs.core.first.call(null,seq18975);
var seq18975__$1 = cljs.core.next.call(null,seq18975);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18976,seq18975__$1);
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
var G__18983 = arguments.length;
switch (G__18983) {
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
var c__18883__auto___19029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19007){
var state_val_19008 = (state_19007[(1)]);
if((state_val_19008 === (7))){
var inst_19003 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19009_19030 = state_19007__$1;
(statearr_19009_19030[(2)] = inst_19003);

(statearr_19009_19030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (1))){
var state_19007__$1 = state_19007;
var statearr_19010_19031 = state_19007__$1;
(statearr_19010_19031[(2)] = null);

(statearr_19010_19031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (4))){
var inst_18986 = (state_19007[(7)]);
var inst_18986__$1 = (state_19007[(2)]);
var inst_18987 = (inst_18986__$1 == null);
var state_19007__$1 = (function (){var statearr_19011 = state_19007;
(statearr_19011[(7)] = inst_18986__$1);

return statearr_19011;
})();
if(cljs.core.truth_(inst_18987)){
var statearr_19012_19032 = state_19007__$1;
(statearr_19012_19032[(1)] = (5));

} else {
var statearr_19013_19033 = state_19007__$1;
(statearr_19013_19033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (13))){
var state_19007__$1 = state_19007;
var statearr_19014_19034 = state_19007__$1;
(statearr_19014_19034[(2)] = null);

(statearr_19014_19034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (6))){
var inst_18986 = (state_19007[(7)]);
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19007__$1,(11),to,inst_18986);
} else {
if((state_val_19008 === (3))){
var inst_19005 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19007__$1,inst_19005);
} else {
if((state_val_19008 === (12))){
var state_19007__$1 = state_19007;
var statearr_19015_19035 = state_19007__$1;
(statearr_19015_19035[(2)] = null);

(statearr_19015_19035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (2))){
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19007__$1,(4),from);
} else {
if((state_val_19008 === (11))){
var inst_18996 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
if(cljs.core.truth_(inst_18996)){
var statearr_19016_19036 = state_19007__$1;
(statearr_19016_19036[(1)] = (12));

} else {
var statearr_19017_19037 = state_19007__$1;
(statearr_19017_19037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (9))){
var state_19007__$1 = state_19007;
var statearr_19018_19038 = state_19007__$1;
(statearr_19018_19038[(2)] = null);

(statearr_19018_19038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (5))){
var state_19007__$1 = state_19007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19019_19039 = state_19007__$1;
(statearr_19019_19039[(1)] = (8));

} else {
var statearr_19020_19040 = state_19007__$1;
(statearr_19020_19040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (14))){
var inst_19001 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19021_19041 = state_19007__$1;
(statearr_19021_19041[(2)] = inst_19001);

(statearr_19021_19041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (10))){
var inst_18993 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19022_19042 = state_19007__$1;
(statearr_19022_19042[(2)] = inst_18993);

(statearr_19022_19042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (8))){
var inst_18990 = cljs.core.async.close_BANG_.call(null,to);
var state_19007__$1 = state_19007;
var statearr_19023_19043 = state_19007__$1;
(statearr_19023_19043[(2)] = inst_18990);

(statearr_19023_19043[(1)] = (10));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null,null];
(statearr_19024[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_19007){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19025){if((e19025 instanceof Object)){
var ex__18790__auto__ = e19025;
var statearr_19026_19044 = state_19007;
(statearr_19026_19044[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19045 = state_19007;
state_19007 = G__19045;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_19007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_19007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19027 = f__18884__auto__.call(null);
(statearr_19027[(6)] = c__18883__auto___19029);

return statearr_19027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var process = (function (p__19046){
var vec__19047 = p__19046;
var v = cljs.core.nth.call(null,vec__19047,(0),null);
var p = cljs.core.nth.call(null,vec__19047,(1),null);
var job = vec__19047;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18883__auto___19218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19054){
var state_val_19055 = (state_19054[(1)]);
if((state_val_19055 === (1))){
var state_19054__$1 = state_19054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19054__$1,(2),res,v);
} else {
if((state_val_19055 === (2))){
var inst_19051 = (state_19054[(2)]);
var inst_19052 = cljs.core.async.close_BANG_.call(null,res);
var state_19054__$1 = (function (){var statearr_19056 = state_19054;
(statearr_19056[(7)] = inst_19051);

return statearr_19056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19054__$1,inst_19052);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_19057 = [null,null,null,null,null,null,null,null];
(statearr_19057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__);

(statearr_19057[(1)] = (1));

return statearr_19057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1 = (function (state_19054){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19058){if((e19058 instanceof Object)){
var ex__18790__auto__ = e19058;
var statearr_19059_19219 = state_19054;
(statearr_19059_19219[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19220 = state_19054;
state_19054 = G__19220;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = function(state_19054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1.call(this,state_19054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19060 = f__18884__auto__.call(null);
(statearr_19060[(6)] = c__18883__auto___19218);

return statearr_19060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__19061){
var vec__19062 = p__19061;
var v = cljs.core.nth.call(null,vec__19062,(0),null);
var p = cljs.core.nth.call(null,vec__19062,(1),null);
var job = vec__19062;
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
var n__4706__auto___19221 = n;
var __19222 = (0);
while(true){
if((__19222 < n__4706__auto___19221)){
var G__19065_19223 = type;
var G__19065_19224__$1 = (((G__19065_19223 instanceof cljs.core.Keyword))?G__19065_19223.fqn:null);
switch (G__19065_19224__$1) {
case "compute":
var c__18883__auto___19226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19222,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = ((function (__19222,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function (state_19078){
var state_val_19079 = (state_19078[(1)]);
if((state_val_19079 === (1))){
var state_19078__$1 = state_19078;
var statearr_19080_19227 = state_19078__$1;
(statearr_19080_19227[(2)] = null);

(statearr_19080_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (2))){
var state_19078__$1 = state_19078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19078__$1,(4),jobs);
} else {
if((state_val_19079 === (3))){
var inst_19076 = (state_19078[(2)]);
var state_19078__$1 = state_19078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19078__$1,inst_19076);
} else {
if((state_val_19079 === (4))){
var inst_19068 = (state_19078[(2)]);
var inst_19069 = process.call(null,inst_19068);
var state_19078__$1 = state_19078;
if(cljs.core.truth_(inst_19069)){
var statearr_19081_19228 = state_19078__$1;
(statearr_19081_19228[(1)] = (5));

} else {
var statearr_19082_19229 = state_19078__$1;
(statearr_19082_19229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (5))){
var state_19078__$1 = state_19078;
var statearr_19083_19230 = state_19078__$1;
(statearr_19083_19230[(2)] = null);

(statearr_19083_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (6))){
var state_19078__$1 = state_19078;
var statearr_19084_19231 = state_19078__$1;
(statearr_19084_19231[(2)] = null);

(statearr_19084_19231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19079 === (7))){
var inst_19074 = (state_19078[(2)]);
var state_19078__$1 = state_19078;
var statearr_19085_19232 = state_19078__$1;
(statearr_19085_19232[(2)] = inst_19074);

(statearr_19085_19232[(1)] = (3));


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
});})(__19222,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
;
return ((function (__19222,switch__18786__auto__,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_19086 = [null,null,null,null,null,null,null];
(statearr_19086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__);

(statearr_19086[(1)] = (1));

return statearr_19086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1 = (function (state_19078){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19087){if((e19087 instanceof Object)){
var ex__18790__auto__ = e19087;
var statearr_19088_19233 = state_19078;
(statearr_19088_19233[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19234 = state_19078;
state_19078 = G__19234;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = function(state_19078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1.call(this,state_19078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__;
})()
;})(__19222,switch__18786__auto__,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
})();
var state__18885__auto__ = (function (){var statearr_19089 = f__18884__auto__.call(null);
(statearr_19089[(6)] = c__18883__auto___19226);

return statearr_19089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
});})(__19222,c__18883__auto___19226,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
);


break;
case "async":
var c__18883__auto___19235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19222,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = ((function (__19222,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function (state_19102){
var state_val_19103 = (state_19102[(1)]);
if((state_val_19103 === (1))){
var state_19102__$1 = state_19102;
var statearr_19104_19236 = state_19102__$1;
(statearr_19104_19236[(2)] = null);

(statearr_19104_19236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19103 === (2))){
var state_19102__$1 = state_19102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19102__$1,(4),jobs);
} else {
if((state_val_19103 === (3))){
var inst_19100 = (state_19102[(2)]);
var state_19102__$1 = state_19102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19102__$1,inst_19100);
} else {
if((state_val_19103 === (4))){
var inst_19092 = (state_19102[(2)]);
var inst_19093 = async.call(null,inst_19092);
var state_19102__$1 = state_19102;
if(cljs.core.truth_(inst_19093)){
var statearr_19105_19237 = state_19102__$1;
(statearr_19105_19237[(1)] = (5));

} else {
var statearr_19106_19238 = state_19102__$1;
(statearr_19106_19238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19103 === (5))){
var state_19102__$1 = state_19102;
var statearr_19107_19239 = state_19102__$1;
(statearr_19107_19239[(2)] = null);

(statearr_19107_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19103 === (6))){
var state_19102__$1 = state_19102;
var statearr_19108_19240 = state_19102__$1;
(statearr_19108_19240[(2)] = null);

(statearr_19108_19240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19103 === (7))){
var inst_19098 = (state_19102[(2)]);
var state_19102__$1 = state_19102;
var statearr_19109_19241 = state_19102__$1;
(statearr_19109_19241[(2)] = inst_19098);

(statearr_19109_19241[(1)] = (3));


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
});})(__19222,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
;
return ((function (__19222,switch__18786__auto__,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_19110 = [null,null,null,null,null,null,null];
(statearr_19110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__);

(statearr_19110[(1)] = (1));

return statearr_19110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1 = (function (state_19102){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19111){if((e19111 instanceof Object)){
var ex__18790__auto__ = e19111;
var statearr_19112_19242 = state_19102;
(statearr_19112_19242[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19243 = state_19102;
state_19102 = G__19243;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = function(state_19102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1.call(this,state_19102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__;
})()
;})(__19222,switch__18786__auto__,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
})();
var state__18885__auto__ = (function (){var statearr_19113 = f__18884__auto__.call(null);
(statearr_19113[(6)] = c__18883__auto___19235);

return statearr_19113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
});})(__19222,c__18883__auto___19235,G__19065_19223,G__19065_19224__$1,n__4706__auto___19221,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19065_19224__$1)].join('')));

}

var G__19244 = (__19222 + (1));
__19222 = G__19244;
continue;
} else {
}
break;
}

var c__18883__auto___19245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19135){
var state_val_19136 = (state_19135[(1)]);
if((state_val_19136 === (7))){
var inst_19131 = (state_19135[(2)]);
var state_19135__$1 = state_19135;
var statearr_19137_19246 = state_19135__$1;
(statearr_19137_19246[(2)] = inst_19131);

(statearr_19137_19246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19136 === (1))){
var state_19135__$1 = state_19135;
var statearr_19138_19247 = state_19135__$1;
(statearr_19138_19247[(2)] = null);

(statearr_19138_19247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19136 === (4))){
var inst_19116 = (state_19135[(7)]);
var inst_19116__$1 = (state_19135[(2)]);
var inst_19117 = (inst_19116__$1 == null);
var state_19135__$1 = (function (){var statearr_19139 = state_19135;
(statearr_19139[(7)] = inst_19116__$1);

return statearr_19139;
})();
if(cljs.core.truth_(inst_19117)){
var statearr_19140_19248 = state_19135__$1;
(statearr_19140_19248[(1)] = (5));

} else {
var statearr_19141_19249 = state_19135__$1;
(statearr_19141_19249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19136 === (6))){
var inst_19121 = (state_19135[(8)]);
var inst_19116 = (state_19135[(7)]);
var inst_19121__$1 = cljs.core.async.chan.call(null,(1));
var inst_19122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19123 = [inst_19116,inst_19121__$1];
var inst_19124 = (new cljs.core.PersistentVector(null,2,(5),inst_19122,inst_19123,null));
var state_19135__$1 = (function (){var statearr_19142 = state_19135;
(statearr_19142[(8)] = inst_19121__$1);

return statearr_19142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19135__$1,(8),jobs,inst_19124);
} else {
if((state_val_19136 === (3))){
var inst_19133 = (state_19135[(2)]);
var state_19135__$1 = state_19135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19135__$1,inst_19133);
} else {
if((state_val_19136 === (2))){
var state_19135__$1 = state_19135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19135__$1,(4),from);
} else {
if((state_val_19136 === (9))){
var inst_19128 = (state_19135[(2)]);
var state_19135__$1 = (function (){var statearr_19143 = state_19135;
(statearr_19143[(9)] = inst_19128);

return statearr_19143;
})();
var statearr_19144_19250 = state_19135__$1;
(statearr_19144_19250[(2)] = null);

(statearr_19144_19250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19136 === (5))){
var inst_19119 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19135__$1 = state_19135;
var statearr_19145_19251 = state_19135__$1;
(statearr_19145_19251[(2)] = inst_19119);

(statearr_19145_19251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19136 === (8))){
var inst_19121 = (state_19135[(8)]);
var inst_19126 = (state_19135[(2)]);
var state_19135__$1 = (function (){var statearr_19146 = state_19135;
(statearr_19146[(10)] = inst_19126);

return statearr_19146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19135__$1,(9),results,inst_19121);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_19147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__);

(statearr_19147[(1)] = (1));

return statearr_19147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1 = (function (state_19135){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19148){if((e19148 instanceof Object)){
var ex__18790__auto__ = e19148;
var statearr_19149_19252 = state_19135;
(statearr_19149_19252[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19253 = state_19135;
state_19135 = G__19253;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = function(state_19135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1.call(this,state_19135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19150 = f__18884__auto__.call(null);
(statearr_19150[(6)] = c__18883__auto___19245);

return statearr_19150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


var c__18883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19188){
var state_val_19189 = (state_19188[(1)]);
if((state_val_19189 === (7))){
var inst_19184 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19190_19254 = state_19188__$1;
(statearr_19190_19254[(2)] = inst_19184);

(statearr_19190_19254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (20))){
var state_19188__$1 = state_19188;
var statearr_19191_19255 = state_19188__$1;
(statearr_19191_19255[(2)] = null);

(statearr_19191_19255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (1))){
var state_19188__$1 = state_19188;
var statearr_19192_19256 = state_19188__$1;
(statearr_19192_19256[(2)] = null);

(statearr_19192_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (4))){
var inst_19153 = (state_19188[(7)]);
var inst_19153__$1 = (state_19188[(2)]);
var inst_19154 = (inst_19153__$1 == null);
var state_19188__$1 = (function (){var statearr_19193 = state_19188;
(statearr_19193[(7)] = inst_19153__$1);

return statearr_19193;
})();
if(cljs.core.truth_(inst_19154)){
var statearr_19194_19257 = state_19188__$1;
(statearr_19194_19257[(1)] = (5));

} else {
var statearr_19195_19258 = state_19188__$1;
(statearr_19195_19258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (15))){
var inst_19166 = (state_19188[(8)]);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19188__$1,(18),to,inst_19166);
} else {
if((state_val_19189 === (21))){
var inst_19179 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19196_19259 = state_19188__$1;
(statearr_19196_19259[(2)] = inst_19179);

(statearr_19196_19259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (13))){
var inst_19181 = (state_19188[(2)]);
var state_19188__$1 = (function (){var statearr_19197 = state_19188;
(statearr_19197[(9)] = inst_19181);

return statearr_19197;
})();
var statearr_19198_19260 = state_19188__$1;
(statearr_19198_19260[(2)] = null);

(statearr_19198_19260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (6))){
var inst_19153 = (state_19188[(7)]);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19188__$1,(11),inst_19153);
} else {
if((state_val_19189 === (17))){
var inst_19174 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
if(cljs.core.truth_(inst_19174)){
var statearr_19199_19261 = state_19188__$1;
(statearr_19199_19261[(1)] = (19));

} else {
var statearr_19200_19262 = state_19188__$1;
(statearr_19200_19262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (3))){
var inst_19186 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19188__$1,inst_19186);
} else {
if((state_val_19189 === (12))){
var inst_19163 = (state_19188[(10)]);
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19188__$1,(14),inst_19163);
} else {
if((state_val_19189 === (2))){
var state_19188__$1 = state_19188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19188__$1,(4),results);
} else {
if((state_val_19189 === (19))){
var state_19188__$1 = state_19188;
var statearr_19201_19263 = state_19188__$1;
(statearr_19201_19263[(2)] = null);

(statearr_19201_19263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (11))){
var inst_19163 = (state_19188[(2)]);
var state_19188__$1 = (function (){var statearr_19202 = state_19188;
(statearr_19202[(10)] = inst_19163);

return statearr_19202;
})();
var statearr_19203_19264 = state_19188__$1;
(statearr_19203_19264[(2)] = null);

(statearr_19203_19264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (9))){
var state_19188__$1 = state_19188;
var statearr_19204_19265 = state_19188__$1;
(statearr_19204_19265[(2)] = null);

(statearr_19204_19265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (5))){
var state_19188__$1 = state_19188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19205_19266 = state_19188__$1;
(statearr_19205_19266[(1)] = (8));

} else {
var statearr_19206_19267 = state_19188__$1;
(statearr_19206_19267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (14))){
var inst_19168 = (state_19188[(11)]);
var inst_19166 = (state_19188[(8)]);
var inst_19166__$1 = (state_19188[(2)]);
var inst_19167 = (inst_19166__$1 == null);
var inst_19168__$1 = cljs.core.not.call(null,inst_19167);
var state_19188__$1 = (function (){var statearr_19207 = state_19188;
(statearr_19207[(11)] = inst_19168__$1);

(statearr_19207[(8)] = inst_19166__$1);

return statearr_19207;
})();
if(inst_19168__$1){
var statearr_19208_19268 = state_19188__$1;
(statearr_19208_19268[(1)] = (15));

} else {
var statearr_19209_19269 = state_19188__$1;
(statearr_19209_19269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (16))){
var inst_19168 = (state_19188[(11)]);
var state_19188__$1 = state_19188;
var statearr_19210_19270 = state_19188__$1;
(statearr_19210_19270[(2)] = inst_19168);

(statearr_19210_19270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (10))){
var inst_19160 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19211_19271 = state_19188__$1;
(statearr_19211_19271[(2)] = inst_19160);

(statearr_19211_19271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (18))){
var inst_19171 = (state_19188[(2)]);
var state_19188__$1 = state_19188;
var statearr_19212_19272 = state_19188__$1;
(statearr_19212_19272[(2)] = inst_19171);

(statearr_19212_19272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19189 === (8))){
var inst_19157 = cljs.core.async.close_BANG_.call(null,to);
var state_19188__$1 = state_19188;
var statearr_19213_19273 = state_19188__$1;
(statearr_19213_19273[(2)] = inst_19157);

(statearr_19213_19273[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_19214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__);

(statearr_19214[(1)] = (1));

return statearr_19214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1 = (function (state_19188){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19215){if((e19215 instanceof Object)){
var ex__18790__auto__ = e19215;
var statearr_19216_19274 = state_19188;
(statearr_19216_19274[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19275 = state_19188;
state_19188 = G__19275;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__ = function(state_19188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1.call(this,state_19188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19217 = f__18884__auto__.call(null);
(statearr_19217[(6)] = c__18883__auto__);

return statearr_19217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));

return c__18883__auto__;
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
var G__19277 = arguments.length;
switch (G__19277) {
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
var G__19280 = arguments.length;
switch (G__19280) {
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
var G__19283 = arguments.length;
switch (G__19283) {
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
var c__18883__auto___19332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19309){
var state_val_19310 = (state_19309[(1)]);
if((state_val_19310 === (7))){
var inst_19305 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
var statearr_19311_19333 = state_19309__$1;
(statearr_19311_19333[(2)] = inst_19305);

(statearr_19311_19333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (1))){
var state_19309__$1 = state_19309;
var statearr_19312_19334 = state_19309__$1;
(statearr_19312_19334[(2)] = null);

(statearr_19312_19334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (4))){
var inst_19286 = (state_19309[(7)]);
var inst_19286__$1 = (state_19309[(2)]);
var inst_19287 = (inst_19286__$1 == null);
var state_19309__$1 = (function (){var statearr_19313 = state_19309;
(statearr_19313[(7)] = inst_19286__$1);

return statearr_19313;
})();
if(cljs.core.truth_(inst_19287)){
var statearr_19314_19335 = state_19309__$1;
(statearr_19314_19335[(1)] = (5));

} else {
var statearr_19315_19336 = state_19309__$1;
(statearr_19315_19336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (13))){
var state_19309__$1 = state_19309;
var statearr_19316_19337 = state_19309__$1;
(statearr_19316_19337[(2)] = null);

(statearr_19316_19337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (6))){
var inst_19286 = (state_19309[(7)]);
var inst_19292 = p.call(null,inst_19286);
var state_19309__$1 = state_19309;
if(cljs.core.truth_(inst_19292)){
var statearr_19317_19338 = state_19309__$1;
(statearr_19317_19338[(1)] = (9));

} else {
var statearr_19318_19339 = state_19309__$1;
(statearr_19318_19339[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (3))){
var inst_19307 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19309__$1,inst_19307);
} else {
if((state_val_19310 === (12))){
var state_19309__$1 = state_19309;
var statearr_19319_19340 = state_19309__$1;
(statearr_19319_19340[(2)] = null);

(statearr_19319_19340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (2))){
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19309__$1,(4),ch);
} else {
if((state_val_19310 === (11))){
var inst_19286 = (state_19309[(7)]);
var inst_19296 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19309__$1,(8),inst_19296,inst_19286);
} else {
if((state_val_19310 === (9))){
var state_19309__$1 = state_19309;
var statearr_19320_19341 = state_19309__$1;
(statearr_19320_19341[(2)] = tc);

(statearr_19320_19341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (5))){
var inst_19289 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19290 = cljs.core.async.close_BANG_.call(null,fc);
var state_19309__$1 = (function (){var statearr_19321 = state_19309;
(statearr_19321[(8)] = inst_19289);

return statearr_19321;
})();
var statearr_19322_19342 = state_19309__$1;
(statearr_19322_19342[(2)] = inst_19290);

(statearr_19322_19342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (14))){
var inst_19303 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
var statearr_19323_19343 = state_19309__$1;
(statearr_19323_19343[(2)] = inst_19303);

(statearr_19323_19343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (10))){
var state_19309__$1 = state_19309;
var statearr_19324_19344 = state_19309__$1;
(statearr_19324_19344[(2)] = fc);

(statearr_19324_19344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19310 === (8))){
var inst_19298 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
if(cljs.core.truth_(inst_19298)){
var statearr_19325_19345 = state_19309__$1;
(statearr_19325_19345[(1)] = (12));

} else {
var statearr_19326_19346 = state_19309__$1;
(statearr_19326_19346[(1)] = (13));

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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_19327 = [null,null,null,null,null,null,null,null,null];
(statearr_19327[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_19327[(1)] = (1));

return statearr_19327;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_19309){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19328){if((e19328 instanceof Object)){
var ex__18790__auto__ = e19328;
var statearr_19329_19347 = state_19309;
(statearr_19329_19347[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19348 = state_19309;
state_19309 = G__19348;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_19309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_19309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19330 = f__18884__auto__.call(null);
(statearr_19330[(6)] = c__18883__auto___19332);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var c__18883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19369){
var state_val_19370 = (state_19369[(1)]);
if((state_val_19370 === (7))){
var inst_19365 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19371_19389 = state_19369__$1;
(statearr_19371_19389[(2)] = inst_19365);

(statearr_19371_19389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (1))){
var inst_19349 = init;
var state_19369__$1 = (function (){var statearr_19372 = state_19369;
(statearr_19372[(7)] = inst_19349);

return statearr_19372;
})();
var statearr_19373_19390 = state_19369__$1;
(statearr_19373_19390[(2)] = null);

(statearr_19373_19390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (4))){
var inst_19352 = (state_19369[(8)]);
var inst_19352__$1 = (state_19369[(2)]);
var inst_19353 = (inst_19352__$1 == null);
var state_19369__$1 = (function (){var statearr_19374 = state_19369;
(statearr_19374[(8)] = inst_19352__$1);

return statearr_19374;
})();
if(cljs.core.truth_(inst_19353)){
var statearr_19375_19391 = state_19369__$1;
(statearr_19375_19391[(1)] = (5));

} else {
var statearr_19376_19392 = state_19369__$1;
(statearr_19376_19392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (6))){
var inst_19349 = (state_19369[(7)]);
var inst_19356 = (state_19369[(9)]);
var inst_19352 = (state_19369[(8)]);
var inst_19356__$1 = f.call(null,inst_19349,inst_19352);
var inst_19357 = cljs.core.reduced_QMARK_.call(null,inst_19356__$1);
var state_19369__$1 = (function (){var statearr_19377 = state_19369;
(statearr_19377[(9)] = inst_19356__$1);

return statearr_19377;
})();
if(inst_19357){
var statearr_19378_19393 = state_19369__$1;
(statearr_19378_19393[(1)] = (8));

} else {
var statearr_19379_19394 = state_19369__$1;
(statearr_19379_19394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (3))){
var inst_19367 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19369__$1,inst_19367);
} else {
if((state_val_19370 === (2))){
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19369__$1,(4),ch);
} else {
if((state_val_19370 === (9))){
var inst_19356 = (state_19369[(9)]);
var inst_19349 = inst_19356;
var state_19369__$1 = (function (){var statearr_19380 = state_19369;
(statearr_19380[(7)] = inst_19349);

return statearr_19380;
})();
var statearr_19381_19395 = state_19369__$1;
(statearr_19381_19395[(2)] = null);

(statearr_19381_19395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (5))){
var inst_19349 = (state_19369[(7)]);
var state_19369__$1 = state_19369;
var statearr_19382_19396 = state_19369__$1;
(statearr_19382_19396[(2)] = inst_19349);

(statearr_19382_19396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (10))){
var inst_19363 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19383_19397 = state_19369__$1;
(statearr_19383_19397[(2)] = inst_19363);

(statearr_19383_19397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (8))){
var inst_19356 = (state_19369[(9)]);
var inst_19359 = cljs.core.deref.call(null,inst_19356);
var state_19369__$1 = state_19369;
var statearr_19384_19398 = state_19369__$1;
(statearr_19384_19398[(2)] = inst_19359);

(statearr_19384_19398[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18787__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18787__auto____0 = (function (){
var statearr_19385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19385[(0)] = cljs$core$async$reduce_$_state_machine__18787__auto__);

(statearr_19385[(1)] = (1));

return statearr_19385;
});
var cljs$core$async$reduce_$_state_machine__18787__auto____1 = (function (state_19369){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19386){if((e19386 instanceof Object)){
var ex__18790__auto__ = e19386;
var statearr_19387_19399 = state_19369;
(statearr_19387_19399[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19400 = state_19369;
state_19369 = G__19400;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18787__auto__ = function(state_19369){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18787__auto____1.call(this,state_19369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18787__auto____0;
cljs$core$async$reduce_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18787__auto____1;
return cljs$core$async$reduce_$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19388 = f__18884__auto__.call(null);
(statearr_19388[(6)] = c__18883__auto__);

return statearr_19388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));

return c__18883__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19406){
var state_val_19407 = (state_19406[(1)]);
if((state_val_19407 === (1))){
var inst_19401 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19406__$1,(2),inst_19401);
} else {
if((state_val_19407 === (2))){
var inst_19403 = (state_19406[(2)]);
var inst_19404 = f__$1.call(null,inst_19403);
var state_19406__$1 = state_19406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19406__$1,inst_19404);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18787__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18787__auto____0 = (function (){
var statearr_19408 = [null,null,null,null,null,null,null];
(statearr_19408[(0)] = cljs$core$async$transduce_$_state_machine__18787__auto__);

(statearr_19408[(1)] = (1));

return statearr_19408;
});
var cljs$core$async$transduce_$_state_machine__18787__auto____1 = (function (state_19406){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19409){if((e19409 instanceof Object)){
var ex__18790__auto__ = e19409;
var statearr_19410_19412 = state_19406;
(statearr_19410_19412[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19413 = state_19406;
state_19406 = G__19413;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18787__auto__ = function(state_19406){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18787__auto____1.call(this,state_19406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18787__auto____0;
cljs$core$async$transduce_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18787__auto____1;
return cljs$core$async$transduce_$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19411 = f__18884__auto__.call(null);
(statearr_19411[(6)] = c__18883__auto__);

return statearr_19411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));

return c__18883__auto__;
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
var G__19415 = arguments.length;
switch (G__19415) {
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
var c__18883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19440){
var state_val_19441 = (state_19440[(1)]);
if((state_val_19441 === (7))){
var inst_19422 = (state_19440[(2)]);
var state_19440__$1 = state_19440;
var statearr_19442_19463 = state_19440__$1;
(statearr_19442_19463[(2)] = inst_19422);

(statearr_19442_19463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (1))){
var inst_19416 = cljs.core.seq.call(null,coll);
var inst_19417 = inst_19416;
var state_19440__$1 = (function (){var statearr_19443 = state_19440;
(statearr_19443[(7)] = inst_19417);

return statearr_19443;
})();
var statearr_19444_19464 = state_19440__$1;
(statearr_19444_19464[(2)] = null);

(statearr_19444_19464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (4))){
var inst_19417 = (state_19440[(7)]);
var inst_19420 = cljs.core.first.call(null,inst_19417);
var state_19440__$1 = state_19440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19440__$1,(7),ch,inst_19420);
} else {
if((state_val_19441 === (13))){
var inst_19434 = (state_19440[(2)]);
var state_19440__$1 = state_19440;
var statearr_19445_19465 = state_19440__$1;
(statearr_19445_19465[(2)] = inst_19434);

(statearr_19445_19465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (6))){
var inst_19425 = (state_19440[(2)]);
var state_19440__$1 = state_19440;
if(cljs.core.truth_(inst_19425)){
var statearr_19446_19466 = state_19440__$1;
(statearr_19446_19466[(1)] = (8));

} else {
var statearr_19447_19467 = state_19440__$1;
(statearr_19447_19467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (3))){
var inst_19438 = (state_19440[(2)]);
var state_19440__$1 = state_19440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19440__$1,inst_19438);
} else {
if((state_val_19441 === (12))){
var state_19440__$1 = state_19440;
var statearr_19448_19468 = state_19440__$1;
(statearr_19448_19468[(2)] = null);

(statearr_19448_19468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (2))){
var inst_19417 = (state_19440[(7)]);
var state_19440__$1 = state_19440;
if(cljs.core.truth_(inst_19417)){
var statearr_19449_19469 = state_19440__$1;
(statearr_19449_19469[(1)] = (4));

} else {
var statearr_19450_19470 = state_19440__$1;
(statearr_19450_19470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (11))){
var inst_19431 = cljs.core.async.close_BANG_.call(null,ch);
var state_19440__$1 = state_19440;
var statearr_19451_19471 = state_19440__$1;
(statearr_19451_19471[(2)] = inst_19431);

(statearr_19451_19471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (9))){
var state_19440__$1 = state_19440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19452_19472 = state_19440__$1;
(statearr_19452_19472[(1)] = (11));

} else {
var statearr_19453_19473 = state_19440__$1;
(statearr_19453_19473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (5))){
var inst_19417 = (state_19440[(7)]);
var state_19440__$1 = state_19440;
var statearr_19454_19474 = state_19440__$1;
(statearr_19454_19474[(2)] = inst_19417);

(statearr_19454_19474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (10))){
var inst_19436 = (state_19440[(2)]);
var state_19440__$1 = state_19440;
var statearr_19455_19475 = state_19440__$1;
(statearr_19455_19475[(2)] = inst_19436);

(statearr_19455_19475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19441 === (8))){
var inst_19417 = (state_19440[(7)]);
var inst_19427 = cljs.core.next.call(null,inst_19417);
var inst_19417__$1 = inst_19427;
var state_19440__$1 = (function (){var statearr_19456 = state_19440;
(statearr_19456[(7)] = inst_19417__$1);

return statearr_19456;
})();
var statearr_19457_19476 = state_19440__$1;
(statearr_19457_19476[(2)] = null);

(statearr_19457_19476[(1)] = (2));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_19458 = [null,null,null,null,null,null,null,null];
(statearr_19458[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_19458[(1)] = (1));

return statearr_19458;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_19440){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19459){if((e19459 instanceof Object)){
var ex__18790__auto__ = e19459;
var statearr_19460_19477 = state_19440;
(statearr_19460_19477[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19478 = state_19440;
state_19440 = G__19478;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_19440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_19440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19461 = f__18884__auto__.call(null);
(statearr_19461[(6)] = c__18883__auto__);

return statearr_19461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));

return c__18883__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19479 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19479.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19480 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19480.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19481 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19481.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19482 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19482.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19483 = (function (ch,cs,meta19484){
this.ch = ch;
this.cs = cs;
this.meta19484 = meta19484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19485,meta19484__$1){
var self__ = this;
var _19485__$1 = this;
return (new cljs.core.async.t_cljs$core$async19483(self__.ch,self__.cs,meta19484__$1));
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19485){
var self__ = this;
var _19485__$1 = this;
return self__.meta19484;
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19484","meta19484",1793565277,null)], null);
}));

(cljs.core.async.t_cljs$core$async19483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19483");

(cljs.core.async.t_cljs$core$async19483.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async19483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19483.
 */
cljs.core.async.__GT_t_cljs$core$async19483 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19483(ch__$1,cs__$1,meta19484){
return (new cljs.core.async.t_cljs$core$async19483(ch__$1,cs__$1,meta19484));
});

}

return (new cljs.core.async.t_cljs$core$async19483(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18883__auto___19705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19620){
var state_val_19621 = (state_19620[(1)]);
if((state_val_19621 === (7))){
var inst_19616 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19622_19706 = state_19620__$1;
(statearr_19622_19706[(2)] = inst_19616);

(statearr_19622_19706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (20))){
var inst_19519 = (state_19620[(7)]);
var inst_19531 = cljs.core.first.call(null,inst_19519);
var inst_19532 = cljs.core.nth.call(null,inst_19531,(0),null);
var inst_19533 = cljs.core.nth.call(null,inst_19531,(1),null);
var state_19620__$1 = (function (){var statearr_19623 = state_19620;
(statearr_19623[(8)] = inst_19532);

return statearr_19623;
})();
if(cljs.core.truth_(inst_19533)){
var statearr_19624_19707 = state_19620__$1;
(statearr_19624_19707[(1)] = (22));

} else {
var statearr_19625_19708 = state_19620__$1;
(statearr_19625_19708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (27))){
var inst_19568 = (state_19620[(9)]);
var inst_19561 = (state_19620[(10)]);
var inst_19563 = (state_19620[(11)]);
var inst_19488 = (state_19620[(12)]);
var inst_19568__$1 = cljs.core._nth.call(null,inst_19561,inst_19563);
var inst_19569 = cljs.core.async.put_BANG_.call(null,inst_19568__$1,inst_19488,done);
var state_19620__$1 = (function (){var statearr_19626 = state_19620;
(statearr_19626[(9)] = inst_19568__$1);

return statearr_19626;
})();
if(cljs.core.truth_(inst_19569)){
var statearr_19627_19709 = state_19620__$1;
(statearr_19627_19709[(1)] = (30));

} else {
var statearr_19628_19710 = state_19620__$1;
(statearr_19628_19710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (1))){
var state_19620__$1 = state_19620;
var statearr_19629_19711 = state_19620__$1;
(statearr_19629_19711[(2)] = null);

(statearr_19629_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (24))){
var inst_19519 = (state_19620[(7)]);
var inst_19538 = (state_19620[(2)]);
var inst_19539 = cljs.core.next.call(null,inst_19519);
var inst_19497 = inst_19539;
var inst_19498 = null;
var inst_19499 = (0);
var inst_19500 = (0);
var state_19620__$1 = (function (){var statearr_19630 = state_19620;
(statearr_19630[(13)] = inst_19497);

(statearr_19630[(14)] = inst_19499);

(statearr_19630[(15)] = inst_19538);

(statearr_19630[(16)] = inst_19500);

(statearr_19630[(17)] = inst_19498);

return statearr_19630;
})();
var statearr_19631_19712 = state_19620__$1;
(statearr_19631_19712[(2)] = null);

(statearr_19631_19712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (39))){
var state_19620__$1 = state_19620;
var statearr_19635_19713 = state_19620__$1;
(statearr_19635_19713[(2)] = null);

(statearr_19635_19713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (4))){
var inst_19488 = (state_19620[(12)]);
var inst_19488__$1 = (state_19620[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var state_19620__$1 = (function (){var statearr_19636 = state_19620;
(statearr_19636[(12)] = inst_19488__$1);

return statearr_19636;
})();
if(cljs.core.truth_(inst_19489)){
var statearr_19637_19714 = state_19620__$1;
(statearr_19637_19714[(1)] = (5));

} else {
var statearr_19638_19715 = state_19620__$1;
(statearr_19638_19715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (15))){
var inst_19497 = (state_19620[(13)]);
var inst_19499 = (state_19620[(14)]);
var inst_19500 = (state_19620[(16)]);
var inst_19498 = (state_19620[(17)]);
var inst_19515 = (state_19620[(2)]);
var inst_19516 = (inst_19500 + (1));
var tmp19632 = inst_19497;
var tmp19633 = inst_19499;
var tmp19634 = inst_19498;
var inst_19497__$1 = tmp19632;
var inst_19498__$1 = tmp19634;
var inst_19499__$1 = tmp19633;
var inst_19500__$1 = inst_19516;
var state_19620__$1 = (function (){var statearr_19639 = state_19620;
(statearr_19639[(13)] = inst_19497__$1);

(statearr_19639[(14)] = inst_19499__$1);

(statearr_19639[(16)] = inst_19500__$1);

(statearr_19639[(18)] = inst_19515);

(statearr_19639[(17)] = inst_19498__$1);

return statearr_19639;
})();
var statearr_19640_19716 = state_19620__$1;
(statearr_19640_19716[(2)] = null);

(statearr_19640_19716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (21))){
var inst_19542 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19644_19717 = state_19620__$1;
(statearr_19644_19717[(2)] = inst_19542);

(statearr_19644_19717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (31))){
var inst_19568 = (state_19620[(9)]);
var inst_19572 = done.call(null,null);
var inst_19573 = cljs.core.async.untap_STAR_.call(null,m,inst_19568);
var state_19620__$1 = (function (){var statearr_19645 = state_19620;
(statearr_19645[(19)] = inst_19572);

return statearr_19645;
})();
var statearr_19646_19718 = state_19620__$1;
(statearr_19646_19718[(2)] = inst_19573);

(statearr_19646_19718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (32))){
var inst_19561 = (state_19620[(10)]);
var inst_19563 = (state_19620[(11)]);
var inst_19560 = (state_19620[(20)]);
var inst_19562 = (state_19620[(21)]);
var inst_19575 = (state_19620[(2)]);
var inst_19576 = (inst_19563 + (1));
var tmp19641 = inst_19561;
var tmp19642 = inst_19560;
var tmp19643 = inst_19562;
var inst_19560__$1 = tmp19642;
var inst_19561__$1 = tmp19641;
var inst_19562__$1 = tmp19643;
var inst_19563__$1 = inst_19576;
var state_19620__$1 = (function (){var statearr_19647 = state_19620;
(statearr_19647[(10)] = inst_19561__$1);

(statearr_19647[(11)] = inst_19563__$1);

(statearr_19647[(22)] = inst_19575);

(statearr_19647[(20)] = inst_19560__$1);

(statearr_19647[(21)] = inst_19562__$1);

return statearr_19647;
})();
var statearr_19648_19719 = state_19620__$1;
(statearr_19648_19719[(2)] = null);

(statearr_19648_19719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (40))){
var inst_19588 = (state_19620[(23)]);
var inst_19592 = done.call(null,null);
var inst_19593 = cljs.core.async.untap_STAR_.call(null,m,inst_19588);
var state_19620__$1 = (function (){var statearr_19649 = state_19620;
(statearr_19649[(24)] = inst_19592);

return statearr_19649;
})();
var statearr_19650_19720 = state_19620__$1;
(statearr_19650_19720[(2)] = inst_19593);

(statearr_19650_19720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (33))){
var inst_19579 = (state_19620[(25)]);
var inst_19581 = cljs.core.chunked_seq_QMARK_.call(null,inst_19579);
var state_19620__$1 = state_19620;
if(inst_19581){
var statearr_19651_19721 = state_19620__$1;
(statearr_19651_19721[(1)] = (36));

} else {
var statearr_19652_19722 = state_19620__$1;
(statearr_19652_19722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (13))){
var inst_19509 = (state_19620[(26)]);
var inst_19512 = cljs.core.async.close_BANG_.call(null,inst_19509);
var state_19620__$1 = state_19620;
var statearr_19653_19723 = state_19620__$1;
(statearr_19653_19723[(2)] = inst_19512);

(statearr_19653_19723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (22))){
var inst_19532 = (state_19620[(8)]);
var inst_19535 = cljs.core.async.close_BANG_.call(null,inst_19532);
var state_19620__$1 = state_19620;
var statearr_19654_19724 = state_19620__$1;
(statearr_19654_19724[(2)] = inst_19535);

(statearr_19654_19724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (36))){
var inst_19579 = (state_19620[(25)]);
var inst_19583 = cljs.core.chunk_first.call(null,inst_19579);
var inst_19584 = cljs.core.chunk_rest.call(null,inst_19579);
var inst_19585 = cljs.core.count.call(null,inst_19583);
var inst_19560 = inst_19584;
var inst_19561 = inst_19583;
var inst_19562 = inst_19585;
var inst_19563 = (0);
var state_19620__$1 = (function (){var statearr_19655 = state_19620;
(statearr_19655[(10)] = inst_19561);

(statearr_19655[(11)] = inst_19563);

(statearr_19655[(20)] = inst_19560);

(statearr_19655[(21)] = inst_19562);

return statearr_19655;
})();
var statearr_19656_19725 = state_19620__$1;
(statearr_19656_19725[(2)] = null);

(statearr_19656_19725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (41))){
var inst_19579 = (state_19620[(25)]);
var inst_19595 = (state_19620[(2)]);
var inst_19596 = cljs.core.next.call(null,inst_19579);
var inst_19560 = inst_19596;
var inst_19561 = null;
var inst_19562 = (0);
var inst_19563 = (0);
var state_19620__$1 = (function (){var statearr_19657 = state_19620;
(statearr_19657[(10)] = inst_19561);

(statearr_19657[(11)] = inst_19563);

(statearr_19657[(27)] = inst_19595);

(statearr_19657[(20)] = inst_19560);

(statearr_19657[(21)] = inst_19562);

return statearr_19657;
})();
var statearr_19658_19726 = state_19620__$1;
(statearr_19658_19726[(2)] = null);

(statearr_19658_19726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (43))){
var state_19620__$1 = state_19620;
var statearr_19659_19727 = state_19620__$1;
(statearr_19659_19727[(2)] = null);

(statearr_19659_19727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (29))){
var inst_19604 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19660_19728 = state_19620__$1;
(statearr_19660_19728[(2)] = inst_19604);

(statearr_19660_19728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (44))){
var inst_19613 = (state_19620[(2)]);
var state_19620__$1 = (function (){var statearr_19661 = state_19620;
(statearr_19661[(28)] = inst_19613);

return statearr_19661;
})();
var statearr_19662_19729 = state_19620__$1;
(statearr_19662_19729[(2)] = null);

(statearr_19662_19729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (6))){
var inst_19552 = (state_19620[(29)]);
var inst_19551 = cljs.core.deref.call(null,cs);
var inst_19552__$1 = cljs.core.keys.call(null,inst_19551);
var inst_19553 = cljs.core.count.call(null,inst_19552__$1);
var inst_19554 = cljs.core.reset_BANG_.call(null,dctr,inst_19553);
var inst_19559 = cljs.core.seq.call(null,inst_19552__$1);
var inst_19560 = inst_19559;
var inst_19561 = null;
var inst_19562 = (0);
var inst_19563 = (0);
var state_19620__$1 = (function (){var statearr_19663 = state_19620;
(statearr_19663[(10)] = inst_19561);

(statearr_19663[(11)] = inst_19563);

(statearr_19663[(30)] = inst_19554);

(statearr_19663[(29)] = inst_19552__$1);

(statearr_19663[(20)] = inst_19560);

(statearr_19663[(21)] = inst_19562);

return statearr_19663;
})();
var statearr_19664_19730 = state_19620__$1;
(statearr_19664_19730[(2)] = null);

(statearr_19664_19730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (28))){
var inst_19560 = (state_19620[(20)]);
var inst_19579 = (state_19620[(25)]);
var inst_19579__$1 = cljs.core.seq.call(null,inst_19560);
var state_19620__$1 = (function (){var statearr_19665 = state_19620;
(statearr_19665[(25)] = inst_19579__$1);

return statearr_19665;
})();
if(inst_19579__$1){
var statearr_19666_19731 = state_19620__$1;
(statearr_19666_19731[(1)] = (33));

} else {
var statearr_19667_19732 = state_19620__$1;
(statearr_19667_19732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (25))){
var inst_19563 = (state_19620[(11)]);
var inst_19562 = (state_19620[(21)]);
var inst_19565 = (inst_19563 < inst_19562);
var inst_19566 = inst_19565;
var state_19620__$1 = state_19620;
if(cljs.core.truth_(inst_19566)){
var statearr_19668_19733 = state_19620__$1;
(statearr_19668_19733[(1)] = (27));

} else {
var statearr_19669_19734 = state_19620__$1;
(statearr_19669_19734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (34))){
var state_19620__$1 = state_19620;
var statearr_19670_19735 = state_19620__$1;
(statearr_19670_19735[(2)] = null);

(statearr_19670_19735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (17))){
var state_19620__$1 = state_19620;
var statearr_19671_19736 = state_19620__$1;
(statearr_19671_19736[(2)] = null);

(statearr_19671_19736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (3))){
var inst_19618 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19620__$1,inst_19618);
} else {
if((state_val_19621 === (12))){
var inst_19547 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19672_19737 = state_19620__$1;
(statearr_19672_19737[(2)] = inst_19547);

(statearr_19672_19737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (2))){
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19620__$1,(4),ch);
} else {
if((state_val_19621 === (23))){
var state_19620__$1 = state_19620;
var statearr_19673_19738 = state_19620__$1;
(statearr_19673_19738[(2)] = null);

(statearr_19673_19738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (35))){
var inst_19602 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19674_19739 = state_19620__$1;
(statearr_19674_19739[(2)] = inst_19602);

(statearr_19674_19739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (19))){
var inst_19519 = (state_19620[(7)]);
var inst_19523 = cljs.core.chunk_first.call(null,inst_19519);
var inst_19524 = cljs.core.chunk_rest.call(null,inst_19519);
var inst_19525 = cljs.core.count.call(null,inst_19523);
var inst_19497 = inst_19524;
var inst_19498 = inst_19523;
var inst_19499 = inst_19525;
var inst_19500 = (0);
var state_19620__$1 = (function (){var statearr_19675 = state_19620;
(statearr_19675[(13)] = inst_19497);

(statearr_19675[(14)] = inst_19499);

(statearr_19675[(16)] = inst_19500);

(statearr_19675[(17)] = inst_19498);

return statearr_19675;
})();
var statearr_19676_19740 = state_19620__$1;
(statearr_19676_19740[(2)] = null);

(statearr_19676_19740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (11))){
var inst_19519 = (state_19620[(7)]);
var inst_19497 = (state_19620[(13)]);
var inst_19519__$1 = cljs.core.seq.call(null,inst_19497);
var state_19620__$1 = (function (){var statearr_19677 = state_19620;
(statearr_19677[(7)] = inst_19519__$1);

return statearr_19677;
})();
if(inst_19519__$1){
var statearr_19678_19741 = state_19620__$1;
(statearr_19678_19741[(1)] = (16));

} else {
var statearr_19679_19742 = state_19620__$1;
(statearr_19679_19742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (9))){
var inst_19549 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19680_19743 = state_19620__$1;
(statearr_19680_19743[(2)] = inst_19549);

(statearr_19680_19743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (5))){
var inst_19495 = cljs.core.deref.call(null,cs);
var inst_19496 = cljs.core.seq.call(null,inst_19495);
var inst_19497 = inst_19496;
var inst_19498 = null;
var inst_19499 = (0);
var inst_19500 = (0);
var state_19620__$1 = (function (){var statearr_19681 = state_19620;
(statearr_19681[(13)] = inst_19497);

(statearr_19681[(14)] = inst_19499);

(statearr_19681[(16)] = inst_19500);

(statearr_19681[(17)] = inst_19498);

return statearr_19681;
})();
var statearr_19682_19744 = state_19620__$1;
(statearr_19682_19744[(2)] = null);

(statearr_19682_19744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (14))){
var state_19620__$1 = state_19620;
var statearr_19683_19745 = state_19620__$1;
(statearr_19683_19745[(2)] = null);

(statearr_19683_19745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (45))){
var inst_19610 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19684_19746 = state_19620__$1;
(statearr_19684_19746[(2)] = inst_19610);

(statearr_19684_19746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (26))){
var inst_19552 = (state_19620[(29)]);
var inst_19606 = (state_19620[(2)]);
var inst_19607 = cljs.core.seq.call(null,inst_19552);
var state_19620__$1 = (function (){var statearr_19685 = state_19620;
(statearr_19685[(31)] = inst_19606);

return statearr_19685;
})();
if(inst_19607){
var statearr_19686_19747 = state_19620__$1;
(statearr_19686_19747[(1)] = (42));

} else {
var statearr_19687_19748 = state_19620__$1;
(statearr_19687_19748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (16))){
var inst_19519 = (state_19620[(7)]);
var inst_19521 = cljs.core.chunked_seq_QMARK_.call(null,inst_19519);
var state_19620__$1 = state_19620;
if(inst_19521){
var statearr_19688_19749 = state_19620__$1;
(statearr_19688_19749[(1)] = (19));

} else {
var statearr_19689_19750 = state_19620__$1;
(statearr_19689_19750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (38))){
var inst_19599 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19690_19751 = state_19620__$1;
(statearr_19690_19751[(2)] = inst_19599);

(statearr_19690_19751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (30))){
var state_19620__$1 = state_19620;
var statearr_19691_19752 = state_19620__$1;
(statearr_19691_19752[(2)] = null);

(statearr_19691_19752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (10))){
var inst_19500 = (state_19620[(16)]);
var inst_19498 = (state_19620[(17)]);
var inst_19508 = cljs.core._nth.call(null,inst_19498,inst_19500);
var inst_19509 = cljs.core.nth.call(null,inst_19508,(0),null);
var inst_19510 = cljs.core.nth.call(null,inst_19508,(1),null);
var state_19620__$1 = (function (){var statearr_19692 = state_19620;
(statearr_19692[(26)] = inst_19509);

return statearr_19692;
})();
if(cljs.core.truth_(inst_19510)){
var statearr_19693_19753 = state_19620__$1;
(statearr_19693_19753[(1)] = (13));

} else {
var statearr_19694_19754 = state_19620__$1;
(statearr_19694_19754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (18))){
var inst_19545 = (state_19620[(2)]);
var state_19620__$1 = state_19620;
var statearr_19695_19755 = state_19620__$1;
(statearr_19695_19755[(2)] = inst_19545);

(statearr_19695_19755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (42))){
var state_19620__$1 = state_19620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19620__$1,(45),dchan);
} else {
if((state_val_19621 === (37))){
var inst_19488 = (state_19620[(12)]);
var inst_19588 = (state_19620[(23)]);
var inst_19579 = (state_19620[(25)]);
var inst_19588__$1 = cljs.core.first.call(null,inst_19579);
var inst_19589 = cljs.core.async.put_BANG_.call(null,inst_19588__$1,inst_19488,done);
var state_19620__$1 = (function (){var statearr_19696 = state_19620;
(statearr_19696[(23)] = inst_19588__$1);

return statearr_19696;
})();
if(cljs.core.truth_(inst_19589)){
var statearr_19697_19756 = state_19620__$1;
(statearr_19697_19756[(1)] = (39));

} else {
var statearr_19698_19757 = state_19620__$1;
(statearr_19698_19757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19621 === (8))){
var inst_19499 = (state_19620[(14)]);
var inst_19500 = (state_19620[(16)]);
var inst_19502 = (inst_19500 < inst_19499);
var inst_19503 = inst_19502;
var state_19620__$1 = state_19620;
if(cljs.core.truth_(inst_19503)){
var statearr_19699_19758 = state_19620__$1;
(statearr_19699_19758[(1)] = (10));

} else {
var statearr_19700_19759 = state_19620__$1;
(statearr_19700_19759[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18787__auto__ = null;
var cljs$core$async$mult_$_state_machine__18787__auto____0 = (function (){
var statearr_19701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19701[(0)] = cljs$core$async$mult_$_state_machine__18787__auto__);

(statearr_19701[(1)] = (1));

return statearr_19701;
});
var cljs$core$async$mult_$_state_machine__18787__auto____1 = (function (state_19620){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19702){if((e19702 instanceof Object)){
var ex__18790__auto__ = e19702;
var statearr_19703_19760 = state_19620;
(statearr_19703_19760[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19761 = state_19620;
state_19620 = G__19761;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18787__auto__ = function(state_19620){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18787__auto____1.call(this,state_19620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18787__auto____0;
cljs$core$async$mult_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18787__auto____1;
return cljs$core$async$mult_$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19704 = f__18884__auto__.call(null);
(statearr_19704[(6)] = c__18883__auto___19705);

return statearr_19704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var G__19763 = arguments.length;
switch (G__19763) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19765 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19765.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19766 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19766.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19767 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19767.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19768 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19768.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19769 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19769.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___19779 = arguments.length;
var i__4830__auto___19780 = (0);
while(true){
if((i__4830__auto___19780 < len__4829__auto___19779)){
args__4835__auto__.push((arguments[i__4830__auto___19780]));

var G__19781 = (i__4830__auto___19780 + (1));
i__4830__auto___19780 = G__19781;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19774){
var map__19775 = p__19774;
var map__19775__$1 = cljs.core.__destructure_map.call(null,map__19775);
var opts = map__19775__$1;
var statearr_19776_19782 = state;
(statearr_19776_19782[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19777_19783 = state;
(statearr_19777_19783[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_19778_19784 = state;
(statearr_19778_19784[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19770){
var G__19771 = cljs.core.first.call(null,seq19770);
var seq19770__$1 = cljs.core.next.call(null,seq19770);
var G__19772 = cljs.core.first.call(null,seq19770__$1);
var seq19770__$2 = cljs.core.next.call(null,seq19770__$1);
var G__19773 = cljs.core.first.call(null,seq19770__$2);
var seq19770__$3 = cljs.core.next.call(null,seq19770__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19771,G__19772,G__19773,seq19770__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19785 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19786){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19786 = meta19786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19787,meta19786__$1){
var self__ = this;
var _19787__$1 = this;
return (new cljs.core.async.t_cljs$core$async19785(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19786__$1));
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19787){
var self__ = this;
var _19787__$1 = this;
return self__.meta19786;
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19786","meta19786",-383347758,null)], null);
}));

(cljs.core.async.t_cljs$core$async19785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19785");

(cljs.core.async.t_cljs$core$async19785.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async19785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19785.
 */
cljs.core.async.__GT_t_cljs$core$async19785 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19785(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19786){
return (new cljs.core.async.t_cljs$core$async19785(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19786));
});

}

return (new cljs.core.async.t_cljs$core$async19785(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18883__auto___19899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_19855){
var state_val_19856 = (state_19855[(1)]);
if((state_val_19856 === (7))){
var inst_19815 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19815)){
var statearr_19857_19900 = state_19855__$1;
(statearr_19857_19900[(1)] = (8));

} else {
var statearr_19858_19901 = state_19855__$1;
(statearr_19858_19901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (20))){
var inst_19808 = (state_19855[(7)]);
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19855__$1,(23),out,inst_19808);
} else {
if((state_val_19856 === (1))){
var inst_19791 = calc_state.call(null);
var inst_19792 = cljs.core.__destructure_map.call(null,inst_19791);
var inst_19793 = cljs.core.get.call(null,inst_19792,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19794 = cljs.core.get.call(null,inst_19792,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19795 = cljs.core.get.call(null,inst_19792,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19796 = inst_19791;
var state_19855__$1 = (function (){var statearr_19859 = state_19855;
(statearr_19859[(8)] = inst_19793);

(statearr_19859[(9)] = inst_19796);

(statearr_19859[(10)] = inst_19794);

(statearr_19859[(11)] = inst_19795);

return statearr_19859;
})();
var statearr_19860_19902 = state_19855__$1;
(statearr_19860_19902[(2)] = null);

(statearr_19860_19902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (24))){
var inst_19799 = (state_19855[(12)]);
var inst_19796 = inst_19799;
var state_19855__$1 = (function (){var statearr_19861 = state_19855;
(statearr_19861[(9)] = inst_19796);

return statearr_19861;
})();
var statearr_19862_19903 = state_19855__$1;
(statearr_19862_19903[(2)] = null);

(statearr_19862_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (4))){
var inst_19810 = (state_19855[(13)]);
var inst_19808 = (state_19855[(7)]);
var inst_19807 = (state_19855[(2)]);
var inst_19808__$1 = cljs.core.nth.call(null,inst_19807,(0),null);
var inst_19809 = cljs.core.nth.call(null,inst_19807,(1),null);
var inst_19810__$1 = (inst_19808__$1 == null);
var state_19855__$1 = (function (){var statearr_19863 = state_19855;
(statearr_19863[(13)] = inst_19810__$1);

(statearr_19863[(7)] = inst_19808__$1);

(statearr_19863[(14)] = inst_19809);

return statearr_19863;
})();
if(cljs.core.truth_(inst_19810__$1)){
var statearr_19864_19904 = state_19855__$1;
(statearr_19864_19904[(1)] = (5));

} else {
var statearr_19865_19905 = state_19855__$1;
(statearr_19865_19905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (15))){
var inst_19800 = (state_19855[(15)]);
var inst_19829 = (state_19855[(16)]);
var inst_19829__$1 = cljs.core.empty_QMARK_.call(null,inst_19800);
var state_19855__$1 = (function (){var statearr_19866 = state_19855;
(statearr_19866[(16)] = inst_19829__$1);

return statearr_19866;
})();
if(inst_19829__$1){
var statearr_19867_19906 = state_19855__$1;
(statearr_19867_19906[(1)] = (17));

} else {
var statearr_19868_19907 = state_19855__$1;
(statearr_19868_19907[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (21))){
var inst_19799 = (state_19855[(12)]);
var inst_19796 = inst_19799;
var state_19855__$1 = (function (){var statearr_19869 = state_19855;
(statearr_19869[(9)] = inst_19796);

return statearr_19869;
})();
var statearr_19870_19908 = state_19855__$1;
(statearr_19870_19908[(2)] = null);

(statearr_19870_19908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (13))){
var inst_19822 = (state_19855[(2)]);
var inst_19823 = calc_state.call(null);
var inst_19796 = inst_19823;
var state_19855__$1 = (function (){var statearr_19871 = state_19855;
(statearr_19871[(17)] = inst_19822);

(statearr_19871[(9)] = inst_19796);

return statearr_19871;
})();
var statearr_19872_19909 = state_19855__$1;
(statearr_19872_19909[(2)] = null);

(statearr_19872_19909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (22))){
var inst_19849 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19873_19910 = state_19855__$1;
(statearr_19873_19910[(2)] = inst_19849);

(statearr_19873_19910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (6))){
var inst_19809 = (state_19855[(14)]);
var inst_19813 = cljs.core._EQ_.call(null,inst_19809,change);
var state_19855__$1 = state_19855;
var statearr_19874_19911 = state_19855__$1;
(statearr_19874_19911[(2)] = inst_19813);

(statearr_19874_19911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (25))){
var state_19855__$1 = state_19855;
var statearr_19875_19912 = state_19855__$1;
(statearr_19875_19912[(2)] = null);

(statearr_19875_19912[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (17))){
var inst_19809 = (state_19855[(14)]);
var inst_19801 = (state_19855[(18)]);
var inst_19831 = inst_19801.call(null,inst_19809);
var inst_19832 = cljs.core.not.call(null,inst_19831);
var state_19855__$1 = state_19855;
var statearr_19876_19913 = state_19855__$1;
(statearr_19876_19913[(2)] = inst_19832);

(statearr_19876_19913[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (3))){
var inst_19853 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19855__$1,inst_19853);
} else {
if((state_val_19856 === (12))){
var state_19855__$1 = state_19855;
var statearr_19877_19914 = state_19855__$1;
(statearr_19877_19914[(2)] = null);

(statearr_19877_19914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (2))){
var inst_19799 = (state_19855[(12)]);
var inst_19796 = (state_19855[(9)]);
var inst_19799__$1 = cljs.core.__destructure_map.call(null,inst_19796);
var inst_19800 = cljs.core.get.call(null,inst_19799__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19801 = cljs.core.get.call(null,inst_19799__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19802 = cljs.core.get.call(null,inst_19799__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19855__$1 = (function (){var statearr_19878 = state_19855;
(statearr_19878[(12)] = inst_19799__$1);

(statearr_19878[(15)] = inst_19800);

(statearr_19878[(18)] = inst_19801);

return statearr_19878;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19855__$1,(4),inst_19802);
} else {
if((state_val_19856 === (23))){
var inst_19840 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19840)){
var statearr_19879_19915 = state_19855__$1;
(statearr_19879_19915[(1)] = (24));

} else {
var statearr_19880_19916 = state_19855__$1;
(statearr_19880_19916[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (19))){
var inst_19835 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19881_19917 = state_19855__$1;
(statearr_19881_19917[(2)] = inst_19835);

(statearr_19881_19917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (11))){
var inst_19809 = (state_19855[(14)]);
var inst_19819 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19809);
var state_19855__$1 = state_19855;
var statearr_19882_19918 = state_19855__$1;
(statearr_19882_19918[(2)] = inst_19819);

(statearr_19882_19918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (9))){
var inst_19826 = (state_19855[(19)]);
var inst_19800 = (state_19855[(15)]);
var inst_19809 = (state_19855[(14)]);
var inst_19826__$1 = inst_19800.call(null,inst_19809);
var state_19855__$1 = (function (){var statearr_19883 = state_19855;
(statearr_19883[(19)] = inst_19826__$1);

return statearr_19883;
})();
if(cljs.core.truth_(inst_19826__$1)){
var statearr_19884_19919 = state_19855__$1;
(statearr_19884_19919[(1)] = (14));

} else {
var statearr_19885_19920 = state_19855__$1;
(statearr_19885_19920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (5))){
var inst_19810 = (state_19855[(13)]);
var state_19855__$1 = state_19855;
var statearr_19886_19921 = state_19855__$1;
(statearr_19886_19921[(2)] = inst_19810);

(statearr_19886_19921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (14))){
var inst_19826 = (state_19855[(19)]);
var state_19855__$1 = state_19855;
var statearr_19887_19922 = state_19855__$1;
(statearr_19887_19922[(2)] = inst_19826);

(statearr_19887_19922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (26))){
var inst_19845 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19888_19923 = state_19855__$1;
(statearr_19888_19923[(2)] = inst_19845);

(statearr_19888_19923[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (16))){
var inst_19837 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19837)){
var statearr_19889_19924 = state_19855__$1;
(statearr_19889_19924[(1)] = (20));

} else {
var statearr_19890_19925 = state_19855__$1;
(statearr_19890_19925[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (10))){
var inst_19851 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19891_19926 = state_19855__$1;
(statearr_19891_19926[(2)] = inst_19851);

(statearr_19891_19926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (18))){
var inst_19829 = (state_19855[(16)]);
var state_19855__$1 = state_19855;
var statearr_19892_19927 = state_19855__$1;
(statearr_19892_19927[(2)] = inst_19829);

(statearr_19892_19927[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (8))){
var inst_19808 = (state_19855[(7)]);
var inst_19817 = (inst_19808 == null);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19817)){
var statearr_19893_19928 = state_19855__$1;
(statearr_19893_19928[(1)] = (11));

} else {
var statearr_19894_19929 = state_19855__$1;
(statearr_19894_19929[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__18787__auto__ = null;
var cljs$core$async$mix_$_state_machine__18787__auto____0 = (function (){
var statearr_19895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19895[(0)] = cljs$core$async$mix_$_state_machine__18787__auto__);

(statearr_19895[(1)] = (1));

return statearr_19895;
});
var cljs$core$async$mix_$_state_machine__18787__auto____1 = (function (state_19855){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_19855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e19896){if((e19896 instanceof Object)){
var ex__18790__auto__ = e19896;
var statearr_19897_19930 = state_19855;
(statearr_19897_19930[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19931 = state_19855;
state_19855 = G__19931;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18787__auto__ = function(state_19855){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18787__auto____1.call(this,state_19855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18787__auto____0;
cljs$core$async$mix_$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18787__auto____1;
return cljs$core$async$mix_$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_19898 = f__18884__auto__.call(null);
(statearr_19898[(6)] = c__18883__auto___19899);

return statearr_19898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19934 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19934.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19935 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19935.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19936 = (function() {
var G__19937 = null;
var G__19937__1 = (function (p){
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
var G__19937__2 = (function (p,v){
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
G__19937 = function(p,v){
switch(arguments.length){
case 1:
return G__19937__1.call(this,p);
case 2:
return G__19937__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19937.cljs$core$IFn$_invoke$arity$1 = G__19937__1;
G__19937.cljs$core$IFn$_invoke$arity$2 = G__19937__2;
return G__19937;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19933 = arguments.length;
switch (G__19933) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19936.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19936.call(null,p,v);
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
var G__19941 = arguments.length;
switch (G__19941) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19939_SHARP_){
if(cljs.core.truth_(p1__19939_SHARP_.call(null,topic))){
return p1__19939_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19939_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19942 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19943){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19943 = meta19943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19944,meta19943__$1){
var self__ = this;
var _19944__$1 = this;
return (new cljs.core.async.t_cljs$core$async19942(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19943__$1));
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19944){
var self__ = this;
var _19944__$1 = this;
return self__.meta19943;
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19943","meta19943",-1006959466,null)], null);
}));

(cljs.core.async.t_cljs$core$async19942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19942");

(cljs.core.async.t_cljs$core$async19942.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async19942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19942.
 */
cljs.core.async.__GT_t_cljs$core$async19942 = (function cljs$core$async$__GT_t_cljs$core$async19942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19943){
return (new cljs.core.async.t_cljs$core$async19942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19943));
});

}

return (new cljs.core.async.t_cljs$core$async19942(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18883__auto___20062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20016){
var state_val_20017 = (state_20016[(1)]);
if((state_val_20017 === (7))){
var inst_20012 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20018_20063 = state_20016__$1;
(statearr_20018_20063[(2)] = inst_20012);

(statearr_20018_20063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (20))){
var state_20016__$1 = state_20016;
var statearr_20019_20064 = state_20016__$1;
(statearr_20019_20064[(2)] = null);

(statearr_20019_20064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (1))){
var state_20016__$1 = state_20016;
var statearr_20020_20065 = state_20016__$1;
(statearr_20020_20065[(2)] = null);

(statearr_20020_20065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (24))){
var inst_19995 = (state_20016[(7)]);
var inst_20004 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19995);
var state_20016__$1 = state_20016;
var statearr_20021_20066 = state_20016__$1;
(statearr_20021_20066[(2)] = inst_20004);

(statearr_20021_20066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (4))){
var inst_19947 = (state_20016[(8)]);
var inst_19947__$1 = (state_20016[(2)]);
var inst_19948 = (inst_19947__$1 == null);
var state_20016__$1 = (function (){var statearr_20022 = state_20016;
(statearr_20022[(8)] = inst_19947__$1);

return statearr_20022;
})();
if(cljs.core.truth_(inst_19948)){
var statearr_20023_20067 = state_20016__$1;
(statearr_20023_20067[(1)] = (5));

} else {
var statearr_20024_20068 = state_20016__$1;
(statearr_20024_20068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (15))){
var inst_19989 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20025_20069 = state_20016__$1;
(statearr_20025_20069[(2)] = inst_19989);

(statearr_20025_20069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (21))){
var inst_20009 = (state_20016[(2)]);
var state_20016__$1 = (function (){var statearr_20026 = state_20016;
(statearr_20026[(9)] = inst_20009);

return statearr_20026;
})();
var statearr_20027_20070 = state_20016__$1;
(statearr_20027_20070[(2)] = null);

(statearr_20027_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (13))){
var inst_19971 = (state_20016[(10)]);
var inst_19973 = cljs.core.chunked_seq_QMARK_.call(null,inst_19971);
var state_20016__$1 = state_20016;
if(inst_19973){
var statearr_20028_20071 = state_20016__$1;
(statearr_20028_20071[(1)] = (16));

} else {
var statearr_20029_20072 = state_20016__$1;
(statearr_20029_20072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (22))){
var inst_20001 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
if(cljs.core.truth_(inst_20001)){
var statearr_20030_20073 = state_20016__$1;
(statearr_20030_20073[(1)] = (23));

} else {
var statearr_20031_20074 = state_20016__$1;
(statearr_20031_20074[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (6))){
var inst_19947 = (state_20016[(8)]);
var inst_19995 = (state_20016[(7)]);
var inst_19997 = (state_20016[(11)]);
var inst_19995__$1 = topic_fn.call(null,inst_19947);
var inst_19996 = cljs.core.deref.call(null,mults);
var inst_19997__$1 = cljs.core.get.call(null,inst_19996,inst_19995__$1);
var state_20016__$1 = (function (){var statearr_20032 = state_20016;
(statearr_20032[(7)] = inst_19995__$1);

(statearr_20032[(11)] = inst_19997__$1);

return statearr_20032;
})();
if(cljs.core.truth_(inst_19997__$1)){
var statearr_20033_20075 = state_20016__$1;
(statearr_20033_20075[(1)] = (19));

} else {
var statearr_20034_20076 = state_20016__$1;
(statearr_20034_20076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (25))){
var inst_20006 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20035_20077 = state_20016__$1;
(statearr_20035_20077[(2)] = inst_20006);

(statearr_20035_20077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (17))){
var inst_19971 = (state_20016[(10)]);
var inst_19980 = cljs.core.first.call(null,inst_19971);
var inst_19981 = cljs.core.async.muxch_STAR_.call(null,inst_19980);
var inst_19982 = cljs.core.async.close_BANG_.call(null,inst_19981);
var inst_19983 = cljs.core.next.call(null,inst_19971);
var inst_19957 = inst_19983;
var inst_19958 = null;
var inst_19959 = (0);
var inst_19960 = (0);
var state_20016__$1 = (function (){var statearr_20036 = state_20016;
(statearr_20036[(12)] = inst_19957);

(statearr_20036[(13)] = inst_19982);

(statearr_20036[(14)] = inst_19958);

(statearr_20036[(15)] = inst_19959);

(statearr_20036[(16)] = inst_19960);

return statearr_20036;
})();
var statearr_20037_20078 = state_20016__$1;
(statearr_20037_20078[(2)] = null);

(statearr_20037_20078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (3))){
var inst_20014 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20016__$1,inst_20014);
} else {
if((state_val_20017 === (12))){
var inst_19991 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20038_20079 = state_20016__$1;
(statearr_20038_20079[(2)] = inst_19991);

(statearr_20038_20079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (2))){
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20016__$1,(4),ch);
} else {
if((state_val_20017 === (23))){
var state_20016__$1 = state_20016;
var statearr_20039_20080 = state_20016__$1;
(statearr_20039_20080[(2)] = null);

(statearr_20039_20080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (19))){
var inst_19947 = (state_20016[(8)]);
var inst_19997 = (state_20016[(11)]);
var inst_19999 = cljs.core.async.muxch_STAR_.call(null,inst_19997);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20016__$1,(22),inst_19999,inst_19947);
} else {
if((state_val_20017 === (11))){
var inst_19957 = (state_20016[(12)]);
var inst_19971 = (state_20016[(10)]);
var inst_19971__$1 = cljs.core.seq.call(null,inst_19957);
var state_20016__$1 = (function (){var statearr_20040 = state_20016;
(statearr_20040[(10)] = inst_19971__$1);

return statearr_20040;
})();
if(inst_19971__$1){
var statearr_20041_20081 = state_20016__$1;
(statearr_20041_20081[(1)] = (13));

} else {
var statearr_20042_20082 = state_20016__$1;
(statearr_20042_20082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (9))){
var inst_19993 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20043_20083 = state_20016__$1;
(statearr_20043_20083[(2)] = inst_19993);

(statearr_20043_20083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (5))){
var inst_19954 = cljs.core.deref.call(null,mults);
var inst_19955 = cljs.core.vals.call(null,inst_19954);
var inst_19956 = cljs.core.seq.call(null,inst_19955);
var inst_19957 = inst_19956;
var inst_19958 = null;
var inst_19959 = (0);
var inst_19960 = (0);
var state_20016__$1 = (function (){var statearr_20044 = state_20016;
(statearr_20044[(12)] = inst_19957);

(statearr_20044[(14)] = inst_19958);

(statearr_20044[(15)] = inst_19959);

(statearr_20044[(16)] = inst_19960);

return statearr_20044;
})();
var statearr_20045_20084 = state_20016__$1;
(statearr_20045_20084[(2)] = null);

(statearr_20045_20084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (14))){
var state_20016__$1 = state_20016;
var statearr_20049_20085 = state_20016__$1;
(statearr_20049_20085[(2)] = null);

(statearr_20049_20085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (16))){
var inst_19971 = (state_20016[(10)]);
var inst_19975 = cljs.core.chunk_first.call(null,inst_19971);
var inst_19976 = cljs.core.chunk_rest.call(null,inst_19971);
var inst_19977 = cljs.core.count.call(null,inst_19975);
var inst_19957 = inst_19976;
var inst_19958 = inst_19975;
var inst_19959 = inst_19977;
var inst_19960 = (0);
var state_20016__$1 = (function (){var statearr_20050 = state_20016;
(statearr_20050[(12)] = inst_19957);

(statearr_20050[(14)] = inst_19958);

(statearr_20050[(15)] = inst_19959);

(statearr_20050[(16)] = inst_19960);

return statearr_20050;
})();
var statearr_20051_20086 = state_20016__$1;
(statearr_20051_20086[(2)] = null);

(statearr_20051_20086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (10))){
var inst_19957 = (state_20016[(12)]);
var inst_19958 = (state_20016[(14)]);
var inst_19959 = (state_20016[(15)]);
var inst_19960 = (state_20016[(16)]);
var inst_19965 = cljs.core._nth.call(null,inst_19958,inst_19960);
var inst_19966 = cljs.core.async.muxch_STAR_.call(null,inst_19965);
var inst_19967 = cljs.core.async.close_BANG_.call(null,inst_19966);
var inst_19968 = (inst_19960 + (1));
var tmp20046 = inst_19957;
var tmp20047 = inst_19958;
var tmp20048 = inst_19959;
var inst_19957__$1 = tmp20046;
var inst_19958__$1 = tmp20047;
var inst_19959__$1 = tmp20048;
var inst_19960__$1 = inst_19968;
var state_20016__$1 = (function (){var statearr_20052 = state_20016;
(statearr_20052[(12)] = inst_19957__$1);

(statearr_20052[(17)] = inst_19967);

(statearr_20052[(14)] = inst_19958__$1);

(statearr_20052[(15)] = inst_19959__$1);

(statearr_20052[(16)] = inst_19960__$1);

return statearr_20052;
})();
var statearr_20053_20087 = state_20016__$1;
(statearr_20053_20087[(2)] = null);

(statearr_20053_20087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (18))){
var inst_19986 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20054_20088 = state_20016__$1;
(statearr_20054_20088[(2)] = inst_19986);

(statearr_20054_20088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (8))){
var inst_19959 = (state_20016[(15)]);
var inst_19960 = (state_20016[(16)]);
var inst_19962 = (inst_19960 < inst_19959);
var inst_19963 = inst_19962;
var state_20016__$1 = state_20016;
if(cljs.core.truth_(inst_19963)){
var statearr_20055_20089 = state_20016__$1;
(statearr_20055_20089[(1)] = (10));

} else {
var statearr_20056_20090 = state_20016__$1;
(statearr_20056_20090[(1)] = (11));

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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20057[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20057[(1)] = (1));

return statearr_20057;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20016){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20058){if((e20058 instanceof Object)){
var ex__18790__auto__ = e20058;
var statearr_20059_20091 = state_20016;
(statearr_20059_20091[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20092 = state_20016;
state_20016 = G__20092;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20060 = f__18884__auto__.call(null);
(statearr_20060[(6)] = c__18883__auto___20062);

return statearr_20060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var G__20094 = arguments.length;
switch (G__20094) {
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
var G__20097 = arguments.length;
switch (G__20097) {
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
var G__20100 = arguments.length;
switch (G__20100) {
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
var c__18883__auto___20167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20139){
var state_val_20140 = (state_20139[(1)]);
if((state_val_20140 === (7))){
var state_20139__$1 = state_20139;
var statearr_20141_20168 = state_20139__$1;
(statearr_20141_20168[(2)] = null);

(statearr_20141_20168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (1))){
var state_20139__$1 = state_20139;
var statearr_20142_20169 = state_20139__$1;
(statearr_20142_20169[(2)] = null);

(statearr_20142_20169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (4))){
var inst_20103 = (state_20139[(7)]);
var inst_20105 = (inst_20103 < cnt);
var state_20139__$1 = state_20139;
if(cljs.core.truth_(inst_20105)){
var statearr_20143_20170 = state_20139__$1;
(statearr_20143_20170[(1)] = (6));

} else {
var statearr_20144_20171 = state_20139__$1;
(statearr_20144_20171[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (15))){
var inst_20135 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20145_20172 = state_20139__$1;
(statearr_20145_20172[(2)] = inst_20135);

(statearr_20145_20172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (13))){
var inst_20128 = cljs.core.async.close_BANG_.call(null,out);
var state_20139__$1 = state_20139;
var statearr_20146_20173 = state_20139__$1;
(statearr_20146_20173[(2)] = inst_20128);

(statearr_20146_20173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (6))){
var state_20139__$1 = state_20139;
var statearr_20147_20174 = state_20139__$1;
(statearr_20147_20174[(2)] = null);

(statearr_20147_20174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (3))){
var inst_20137 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20139__$1,inst_20137);
} else {
if((state_val_20140 === (12))){
var inst_20125 = (state_20139[(8)]);
var inst_20125__$1 = (state_20139[(2)]);
var inst_20126 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20125__$1);
var state_20139__$1 = (function (){var statearr_20148 = state_20139;
(statearr_20148[(8)] = inst_20125__$1);

return statearr_20148;
})();
if(cljs.core.truth_(inst_20126)){
var statearr_20149_20175 = state_20139__$1;
(statearr_20149_20175[(1)] = (13));

} else {
var statearr_20150_20176 = state_20139__$1;
(statearr_20150_20176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (2))){
var inst_20102 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20103 = (0);
var state_20139__$1 = (function (){var statearr_20151 = state_20139;
(statearr_20151[(9)] = inst_20102);

(statearr_20151[(7)] = inst_20103);

return statearr_20151;
})();
var statearr_20152_20177 = state_20139__$1;
(statearr_20152_20177[(2)] = null);

(statearr_20152_20177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (11))){
var inst_20103 = (state_20139[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20139,(10),Object,null,(9));
var inst_20112 = chs__$1.call(null,inst_20103);
var inst_20113 = done.call(null,inst_20103);
var inst_20114 = cljs.core.async.take_BANG_.call(null,inst_20112,inst_20113);
var state_20139__$1 = state_20139;
var statearr_20153_20178 = state_20139__$1;
(statearr_20153_20178[(2)] = inst_20114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20139__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (9))){
var inst_20103 = (state_20139[(7)]);
var inst_20116 = (state_20139[(2)]);
var inst_20117 = (inst_20103 + (1));
var inst_20103__$1 = inst_20117;
var state_20139__$1 = (function (){var statearr_20154 = state_20139;
(statearr_20154[(10)] = inst_20116);

(statearr_20154[(7)] = inst_20103__$1);

return statearr_20154;
})();
var statearr_20155_20179 = state_20139__$1;
(statearr_20155_20179[(2)] = null);

(statearr_20155_20179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (5))){
var inst_20123 = (state_20139[(2)]);
var state_20139__$1 = (function (){var statearr_20156 = state_20139;
(statearr_20156[(11)] = inst_20123);

return statearr_20156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20139__$1,(12),dchan);
} else {
if((state_val_20140 === (14))){
var inst_20125 = (state_20139[(8)]);
var inst_20130 = cljs.core.apply.call(null,f,inst_20125);
var state_20139__$1 = state_20139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20139__$1,(16),out,inst_20130);
} else {
if((state_val_20140 === (16))){
var inst_20132 = (state_20139[(2)]);
var state_20139__$1 = (function (){var statearr_20157 = state_20139;
(statearr_20157[(12)] = inst_20132);

return statearr_20157;
})();
var statearr_20158_20180 = state_20139__$1;
(statearr_20158_20180[(2)] = null);

(statearr_20158_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (10))){
var inst_20107 = (state_20139[(2)]);
var inst_20108 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20139__$1 = (function (){var statearr_20159 = state_20139;
(statearr_20159[(13)] = inst_20107);

return statearr_20159;
})();
var statearr_20160_20181 = state_20139__$1;
(statearr_20160_20181[(2)] = inst_20108);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20139__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (8))){
var inst_20121 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20161_20182 = state_20139__$1;
(statearr_20161_20182[(2)] = inst_20121);

(statearr_20161_20182[(1)] = (5));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20162[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20162[(1)] = (1));

return statearr_20162;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20139){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20163){if((e20163 instanceof Object)){
var ex__18790__auto__ = e20163;
var statearr_20164_20183 = state_20139;
(statearr_20164_20183[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_20139;
state_20139 = G__20184;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20165 = f__18884__auto__.call(null);
(statearr_20165[(6)] = c__18883__auto___20167);

return statearr_20165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var G__20187 = arguments.length;
switch (G__20187) {
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
var c__18883__auto___20241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20219){
var state_val_20220 = (state_20219[(1)]);
if((state_val_20220 === (7))){
var inst_20198 = (state_20219[(7)]);
var inst_20199 = (state_20219[(8)]);
var inst_20198__$1 = (state_20219[(2)]);
var inst_20199__$1 = cljs.core.nth.call(null,inst_20198__$1,(0),null);
var inst_20200 = cljs.core.nth.call(null,inst_20198__$1,(1),null);
var inst_20201 = (inst_20199__$1 == null);
var state_20219__$1 = (function (){var statearr_20221 = state_20219;
(statearr_20221[(7)] = inst_20198__$1);

(statearr_20221[(8)] = inst_20199__$1);

(statearr_20221[(9)] = inst_20200);

return statearr_20221;
})();
if(cljs.core.truth_(inst_20201)){
var statearr_20222_20242 = state_20219__$1;
(statearr_20222_20242[(1)] = (8));

} else {
var statearr_20223_20243 = state_20219__$1;
(statearr_20223_20243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (1))){
var inst_20188 = cljs.core.vec.call(null,chs);
var inst_20189 = inst_20188;
var state_20219__$1 = (function (){var statearr_20224 = state_20219;
(statearr_20224[(10)] = inst_20189);

return statearr_20224;
})();
var statearr_20225_20244 = state_20219__$1;
(statearr_20225_20244[(2)] = null);

(statearr_20225_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (4))){
var inst_20189 = (state_20219[(10)]);
var state_20219__$1 = state_20219;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20219__$1,(7),inst_20189);
} else {
if((state_val_20220 === (6))){
var inst_20215 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20226_20245 = state_20219__$1;
(statearr_20226_20245[(2)] = inst_20215);

(statearr_20226_20245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (3))){
var inst_20217 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20219__$1,inst_20217);
} else {
if((state_val_20220 === (2))){
var inst_20189 = (state_20219[(10)]);
var inst_20191 = cljs.core.count.call(null,inst_20189);
var inst_20192 = (inst_20191 > (0));
var state_20219__$1 = state_20219;
if(cljs.core.truth_(inst_20192)){
var statearr_20228_20246 = state_20219__$1;
(statearr_20228_20246[(1)] = (4));

} else {
var statearr_20229_20247 = state_20219__$1;
(statearr_20229_20247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (11))){
var inst_20189 = (state_20219[(10)]);
var inst_20208 = (state_20219[(2)]);
var tmp20227 = inst_20189;
var inst_20189__$1 = tmp20227;
var state_20219__$1 = (function (){var statearr_20230 = state_20219;
(statearr_20230[(11)] = inst_20208);

(statearr_20230[(10)] = inst_20189__$1);

return statearr_20230;
})();
var statearr_20231_20248 = state_20219__$1;
(statearr_20231_20248[(2)] = null);

(statearr_20231_20248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (9))){
var inst_20199 = (state_20219[(8)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20219__$1,(11),out,inst_20199);
} else {
if((state_val_20220 === (5))){
var inst_20213 = cljs.core.async.close_BANG_.call(null,out);
var state_20219__$1 = state_20219;
var statearr_20232_20249 = state_20219__$1;
(statearr_20232_20249[(2)] = inst_20213);

(statearr_20232_20249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (10))){
var inst_20211 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20233_20250 = state_20219__$1;
(statearr_20233_20250[(2)] = inst_20211);

(statearr_20233_20250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (8))){
var inst_20198 = (state_20219[(7)]);
var inst_20199 = (state_20219[(8)]);
var inst_20189 = (state_20219[(10)]);
var inst_20200 = (state_20219[(9)]);
var inst_20203 = (function (){var cs = inst_20189;
var vec__20194 = inst_20198;
var v = inst_20199;
var c = inst_20200;
return (function (p1__20185_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20185_SHARP_);
});
})();
var inst_20204 = cljs.core.filterv.call(null,inst_20203,inst_20189);
var inst_20189__$1 = inst_20204;
var state_20219__$1 = (function (){var statearr_20234 = state_20219;
(statearr_20234[(10)] = inst_20189__$1);

return statearr_20234;
})();
var statearr_20235_20251 = state_20219__$1;
(statearr_20235_20251[(2)] = null);

(statearr_20235_20251[(1)] = (2));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20236[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20236[(1)] = (1));

return statearr_20236;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20219){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20237){if((e20237 instanceof Object)){
var ex__18790__auto__ = e20237;
var statearr_20238_20252 = state_20219;
(statearr_20238_20252[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20253 = state_20219;
state_20219 = G__20253;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20239 = f__18884__auto__.call(null);
(statearr_20239[(6)] = c__18883__auto___20241);

return statearr_20239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
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
var G__20255 = arguments.length;
switch (G__20255) {
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
var c__18883__auto___20300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20279){
var state_val_20280 = (state_20279[(1)]);
if((state_val_20280 === (7))){
var inst_20261 = (state_20279[(7)]);
var inst_20261__$1 = (state_20279[(2)]);
var inst_20262 = (inst_20261__$1 == null);
var inst_20263 = cljs.core.not.call(null,inst_20262);
var state_20279__$1 = (function (){var statearr_20281 = state_20279;
(statearr_20281[(7)] = inst_20261__$1);

return statearr_20281;
})();
if(inst_20263){
var statearr_20282_20301 = state_20279__$1;
(statearr_20282_20301[(1)] = (8));

} else {
var statearr_20283_20302 = state_20279__$1;
(statearr_20283_20302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (1))){
var inst_20256 = (0);
var state_20279__$1 = (function (){var statearr_20284 = state_20279;
(statearr_20284[(8)] = inst_20256);

return statearr_20284;
})();
var statearr_20285_20303 = state_20279__$1;
(statearr_20285_20303[(2)] = null);

(statearr_20285_20303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (4))){
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20279__$1,(7),ch);
} else {
if((state_val_20280 === (6))){
var inst_20274 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20286_20304 = state_20279__$1;
(statearr_20286_20304[(2)] = inst_20274);

(statearr_20286_20304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (3))){
var inst_20276 = (state_20279[(2)]);
var inst_20277 = cljs.core.async.close_BANG_.call(null,out);
var state_20279__$1 = (function (){var statearr_20287 = state_20279;
(statearr_20287[(9)] = inst_20276);

return statearr_20287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20279__$1,inst_20277);
} else {
if((state_val_20280 === (2))){
var inst_20256 = (state_20279[(8)]);
var inst_20258 = (inst_20256 < n);
var state_20279__$1 = state_20279;
if(cljs.core.truth_(inst_20258)){
var statearr_20288_20305 = state_20279__$1;
(statearr_20288_20305[(1)] = (4));

} else {
var statearr_20289_20306 = state_20279__$1;
(statearr_20289_20306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (11))){
var inst_20256 = (state_20279[(8)]);
var inst_20266 = (state_20279[(2)]);
var inst_20267 = (inst_20256 + (1));
var inst_20256__$1 = inst_20267;
var state_20279__$1 = (function (){var statearr_20290 = state_20279;
(statearr_20290[(8)] = inst_20256__$1);

(statearr_20290[(10)] = inst_20266);

return statearr_20290;
})();
var statearr_20291_20307 = state_20279__$1;
(statearr_20291_20307[(2)] = null);

(statearr_20291_20307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (9))){
var state_20279__$1 = state_20279;
var statearr_20292_20308 = state_20279__$1;
(statearr_20292_20308[(2)] = null);

(statearr_20292_20308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (5))){
var state_20279__$1 = state_20279;
var statearr_20293_20309 = state_20279__$1;
(statearr_20293_20309[(2)] = null);

(statearr_20293_20309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (10))){
var inst_20271 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
var statearr_20294_20310 = state_20279__$1;
(statearr_20294_20310[(2)] = inst_20271);

(statearr_20294_20310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20280 === (8))){
var inst_20261 = (state_20279[(7)]);
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20279__$1,(11),out,inst_20261);
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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20295[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20295[(1)] = (1));

return statearr_20295;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20279){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20296){if((e20296 instanceof Object)){
var ex__18790__auto__ = e20296;
var statearr_20297_20311 = state_20279;
(statearr_20297_20311[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20312 = state_20279;
state_20279 = G__20312;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20298 = f__18884__auto__.call(null);
(statearr_20298[(6)] = c__18883__auto___20300);

return statearr_20298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20314 = (function (f,ch,meta20315){
this.f = f;
this.ch = ch;
this.meta20315 = meta20315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20316,meta20315__$1){
var self__ = this;
var _20316__$1 = this;
return (new cljs.core.async.t_cljs$core$async20314(self__.f,self__.ch,meta20315__$1));
}));

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20316){
var self__ = this;
var _20316__$1 = this;
return self__.meta20315;
}));

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20317 = (function (f,ch,meta20315,_,fn1,meta20318){
this.f = f;
this.ch = ch;
this.meta20315 = meta20315;
this._ = _;
this.fn1 = fn1;
this.meta20318 = meta20318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20319,meta20318__$1){
var self__ = this;
var _20319__$1 = this;
return (new cljs.core.async.t_cljs$core$async20317(self__.f,self__.ch,self__.meta20315,self__._,self__.fn1,meta20318__$1));
}));

(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20319){
var self__ = this;
var _20319__$1 = this;
return self__.meta20318;
}));

(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__20313_SHARP_){
return f1.call(null,(((p1__20313_SHARP_ == null))?null:self__.f.call(null,p1__20313_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async20317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20315","meta20315",-1515129458,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20314","cljs.core.async/t_cljs$core$async20314",1589766028,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20318","meta20318",-1404397016,null)], null);
}));

(cljs.core.async.t_cljs$core$async20317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20317");

(cljs.core.async.t_cljs$core$async20317.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async20317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20317.
 */
cljs.core.async.__GT_t_cljs$core$async20317 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20317(f__$1,ch__$1,meta20315__$1,___$2,fn1__$1,meta20318){
return (new cljs.core.async.t_cljs$core$async20317(f__$1,ch__$1,meta20315__$1,___$2,fn1__$1,meta20318));
});

}

return (new cljs.core.async.t_cljs$core$async20317(self__.f,self__.ch,self__.meta20315,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20315","meta20315",-1515129458,null)], null);
}));

(cljs.core.async.t_cljs$core$async20314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20314");

(cljs.core.async.t_cljs$core$async20314.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async20314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20314.
 */
cljs.core.async.__GT_t_cljs$core$async20314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20314(f__$1,ch__$1,meta20315){
return (new cljs.core.async.t_cljs$core$async20314(f__$1,ch__$1,meta20315));
});

}

return (new cljs.core.async.t_cljs$core$async20314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20320 = (function (f,ch,meta20321){
this.f = f;
this.ch = ch;
this.meta20321 = meta20321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20322,meta20321__$1){
var self__ = this;
var _20322__$1 = this;
return (new cljs.core.async.t_cljs$core$async20320(self__.f,self__.ch,meta20321__$1));
}));

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20322){
var self__ = this;
var _20322__$1 = this;
return self__.meta20321;
}));

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async20320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20321","meta20321",1657419029,null)], null);
}));

(cljs.core.async.t_cljs$core$async20320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20320");

(cljs.core.async.t_cljs$core$async20320.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async20320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20320.
 */
cljs.core.async.__GT_t_cljs$core$async20320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20320(f__$1,ch__$1,meta20321){
return (new cljs.core.async.t_cljs$core$async20320(f__$1,ch__$1,meta20321));
});

}

return (new cljs.core.async.t_cljs$core$async20320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20323 = (function (p,ch,meta20324){
this.p = p;
this.ch = ch;
this.meta20324 = meta20324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20325,meta20324__$1){
var self__ = this;
var _20325__$1 = this;
return (new cljs.core.async.t_cljs$core$async20323(self__.p,self__.ch,meta20324__$1));
}));

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20325){
var self__ = this;
var _20325__$1 = this;
return self__.meta20324;
}));

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20324","meta20324",1128071656,null)], null);
}));

(cljs.core.async.t_cljs$core$async20323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20323");

(cljs.core.async.t_cljs$core$async20323.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async20323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20323.
 */
cljs.core.async.__GT_t_cljs$core$async20323 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20323(p__$1,ch__$1,meta20324){
return (new cljs.core.async.t_cljs$core$async20323(p__$1,ch__$1,meta20324));
});

}

return (new cljs.core.async.t_cljs$core$async20323(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20327 = arguments.length;
switch (G__20327) {
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
var c__18883__auto___20367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20348){
var state_val_20349 = (state_20348[(1)]);
if((state_val_20349 === (7))){
var inst_20344 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20350_20368 = state_20348__$1;
(statearr_20350_20368[(2)] = inst_20344);

(statearr_20350_20368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (1))){
var state_20348__$1 = state_20348;
var statearr_20351_20369 = state_20348__$1;
(statearr_20351_20369[(2)] = null);

(statearr_20351_20369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (4))){
var inst_20330 = (state_20348[(7)]);
var inst_20330__$1 = (state_20348[(2)]);
var inst_20331 = (inst_20330__$1 == null);
var state_20348__$1 = (function (){var statearr_20352 = state_20348;
(statearr_20352[(7)] = inst_20330__$1);

return statearr_20352;
})();
if(cljs.core.truth_(inst_20331)){
var statearr_20353_20370 = state_20348__$1;
(statearr_20353_20370[(1)] = (5));

} else {
var statearr_20354_20371 = state_20348__$1;
(statearr_20354_20371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (6))){
var inst_20330 = (state_20348[(7)]);
var inst_20335 = p.call(null,inst_20330);
var state_20348__$1 = state_20348;
if(cljs.core.truth_(inst_20335)){
var statearr_20355_20372 = state_20348__$1;
(statearr_20355_20372[(1)] = (8));

} else {
var statearr_20356_20373 = state_20348__$1;
(statearr_20356_20373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (3))){
var inst_20346 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20348__$1,inst_20346);
} else {
if((state_val_20349 === (2))){
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20348__$1,(4),ch);
} else {
if((state_val_20349 === (11))){
var inst_20338 = (state_20348[(2)]);
var state_20348__$1 = state_20348;
var statearr_20357_20374 = state_20348__$1;
(statearr_20357_20374[(2)] = inst_20338);

(statearr_20357_20374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (9))){
var state_20348__$1 = state_20348;
var statearr_20358_20375 = state_20348__$1;
(statearr_20358_20375[(2)] = null);

(statearr_20358_20375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (5))){
var inst_20333 = cljs.core.async.close_BANG_.call(null,out);
var state_20348__$1 = state_20348;
var statearr_20359_20376 = state_20348__$1;
(statearr_20359_20376[(2)] = inst_20333);

(statearr_20359_20376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (10))){
var inst_20341 = (state_20348[(2)]);
var state_20348__$1 = (function (){var statearr_20360 = state_20348;
(statearr_20360[(8)] = inst_20341);

return statearr_20360;
})();
var statearr_20361_20377 = state_20348__$1;
(statearr_20361_20377[(2)] = null);

(statearr_20361_20377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20349 === (8))){
var inst_20330 = (state_20348[(7)]);
var state_20348__$1 = state_20348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20348__$1,(11),out,inst_20330);
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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20362 = [null,null,null,null,null,null,null,null,null];
(statearr_20362[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20362[(1)] = (1));

return statearr_20362;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20348){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20363){if((e20363 instanceof Object)){
var ex__18790__auto__ = e20363;
var statearr_20364_20378 = state_20348;
(statearr_20364_20378[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20379 = state_20348;
state_20348 = G__20379;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20365 = f__18884__auto__.call(null);
(statearr_20365[(6)] = c__18883__auto___20367);

return statearr_20365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20381 = arguments.length;
switch (G__20381) {
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
var c__18883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20444){
var state_val_20445 = (state_20444[(1)]);
if((state_val_20445 === (7))){
var inst_20440 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20446_20484 = state_20444__$1;
(statearr_20446_20484[(2)] = inst_20440);

(statearr_20446_20484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (20))){
var inst_20410 = (state_20444[(7)]);
var inst_20421 = (state_20444[(2)]);
var inst_20422 = cljs.core.next.call(null,inst_20410);
var inst_20396 = inst_20422;
var inst_20397 = null;
var inst_20398 = (0);
var inst_20399 = (0);
var state_20444__$1 = (function (){var statearr_20447 = state_20444;
(statearr_20447[(8)] = inst_20398);

(statearr_20447[(9)] = inst_20396);

(statearr_20447[(10)] = inst_20421);

(statearr_20447[(11)] = inst_20399);

(statearr_20447[(12)] = inst_20397);

return statearr_20447;
})();
var statearr_20448_20485 = state_20444__$1;
(statearr_20448_20485[(2)] = null);

(statearr_20448_20485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (1))){
var state_20444__$1 = state_20444;
var statearr_20449_20486 = state_20444__$1;
(statearr_20449_20486[(2)] = null);

(statearr_20449_20486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (4))){
var inst_20385 = (state_20444[(13)]);
var inst_20385__$1 = (state_20444[(2)]);
var inst_20386 = (inst_20385__$1 == null);
var state_20444__$1 = (function (){var statearr_20450 = state_20444;
(statearr_20450[(13)] = inst_20385__$1);

return statearr_20450;
})();
if(cljs.core.truth_(inst_20386)){
var statearr_20451_20487 = state_20444__$1;
(statearr_20451_20487[(1)] = (5));

} else {
var statearr_20452_20488 = state_20444__$1;
(statearr_20452_20488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (15))){
var state_20444__$1 = state_20444;
var statearr_20456_20489 = state_20444__$1;
(statearr_20456_20489[(2)] = null);

(statearr_20456_20489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (21))){
var state_20444__$1 = state_20444;
var statearr_20457_20490 = state_20444__$1;
(statearr_20457_20490[(2)] = null);

(statearr_20457_20490[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (13))){
var inst_20398 = (state_20444[(8)]);
var inst_20396 = (state_20444[(9)]);
var inst_20399 = (state_20444[(11)]);
var inst_20397 = (state_20444[(12)]);
var inst_20406 = (state_20444[(2)]);
var inst_20407 = (inst_20399 + (1));
var tmp20453 = inst_20398;
var tmp20454 = inst_20396;
var tmp20455 = inst_20397;
var inst_20396__$1 = tmp20454;
var inst_20397__$1 = tmp20455;
var inst_20398__$1 = tmp20453;
var inst_20399__$1 = inst_20407;
var state_20444__$1 = (function (){var statearr_20458 = state_20444;
(statearr_20458[(8)] = inst_20398__$1);

(statearr_20458[(9)] = inst_20396__$1);

(statearr_20458[(14)] = inst_20406);

(statearr_20458[(11)] = inst_20399__$1);

(statearr_20458[(12)] = inst_20397__$1);

return statearr_20458;
})();
var statearr_20459_20491 = state_20444__$1;
(statearr_20459_20491[(2)] = null);

(statearr_20459_20491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (22))){
var state_20444__$1 = state_20444;
var statearr_20460_20492 = state_20444__$1;
(statearr_20460_20492[(2)] = null);

(statearr_20460_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (6))){
var inst_20385 = (state_20444[(13)]);
var inst_20394 = f.call(null,inst_20385);
var inst_20395 = cljs.core.seq.call(null,inst_20394);
var inst_20396 = inst_20395;
var inst_20397 = null;
var inst_20398 = (0);
var inst_20399 = (0);
var state_20444__$1 = (function (){var statearr_20461 = state_20444;
(statearr_20461[(8)] = inst_20398);

(statearr_20461[(9)] = inst_20396);

(statearr_20461[(11)] = inst_20399);

(statearr_20461[(12)] = inst_20397);

return statearr_20461;
})();
var statearr_20462_20493 = state_20444__$1;
(statearr_20462_20493[(2)] = null);

(statearr_20462_20493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (17))){
var inst_20410 = (state_20444[(7)]);
var inst_20414 = cljs.core.chunk_first.call(null,inst_20410);
var inst_20415 = cljs.core.chunk_rest.call(null,inst_20410);
var inst_20416 = cljs.core.count.call(null,inst_20414);
var inst_20396 = inst_20415;
var inst_20397 = inst_20414;
var inst_20398 = inst_20416;
var inst_20399 = (0);
var state_20444__$1 = (function (){var statearr_20463 = state_20444;
(statearr_20463[(8)] = inst_20398);

(statearr_20463[(9)] = inst_20396);

(statearr_20463[(11)] = inst_20399);

(statearr_20463[(12)] = inst_20397);

return statearr_20463;
})();
var statearr_20464_20494 = state_20444__$1;
(statearr_20464_20494[(2)] = null);

(statearr_20464_20494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (3))){
var inst_20442 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20444__$1,inst_20442);
} else {
if((state_val_20445 === (12))){
var inst_20430 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20465_20495 = state_20444__$1;
(statearr_20465_20495[(2)] = inst_20430);

(statearr_20465_20495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (2))){
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20444__$1,(4),in$);
} else {
if((state_val_20445 === (23))){
var inst_20438 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20466_20496 = state_20444__$1;
(statearr_20466_20496[(2)] = inst_20438);

(statearr_20466_20496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (19))){
var inst_20425 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20467_20497 = state_20444__$1;
(statearr_20467_20497[(2)] = inst_20425);

(statearr_20467_20497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (11))){
var inst_20410 = (state_20444[(7)]);
var inst_20396 = (state_20444[(9)]);
var inst_20410__$1 = cljs.core.seq.call(null,inst_20396);
var state_20444__$1 = (function (){var statearr_20468 = state_20444;
(statearr_20468[(7)] = inst_20410__$1);

return statearr_20468;
})();
if(inst_20410__$1){
var statearr_20469_20498 = state_20444__$1;
(statearr_20469_20498[(1)] = (14));

} else {
var statearr_20470_20499 = state_20444__$1;
(statearr_20470_20499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (9))){
var inst_20432 = (state_20444[(2)]);
var inst_20433 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20444__$1 = (function (){var statearr_20471 = state_20444;
(statearr_20471[(15)] = inst_20432);

return statearr_20471;
})();
if(cljs.core.truth_(inst_20433)){
var statearr_20472_20500 = state_20444__$1;
(statearr_20472_20500[(1)] = (21));

} else {
var statearr_20473_20501 = state_20444__$1;
(statearr_20473_20501[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (5))){
var inst_20388 = cljs.core.async.close_BANG_.call(null,out);
var state_20444__$1 = state_20444;
var statearr_20474_20502 = state_20444__$1;
(statearr_20474_20502[(2)] = inst_20388);

(statearr_20474_20502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (14))){
var inst_20410 = (state_20444[(7)]);
var inst_20412 = cljs.core.chunked_seq_QMARK_.call(null,inst_20410);
var state_20444__$1 = state_20444;
if(inst_20412){
var statearr_20475_20503 = state_20444__$1;
(statearr_20475_20503[(1)] = (17));

} else {
var statearr_20476_20504 = state_20444__$1;
(statearr_20476_20504[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (16))){
var inst_20428 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20477_20505 = state_20444__$1;
(statearr_20477_20505[(2)] = inst_20428);

(statearr_20477_20505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (10))){
var inst_20399 = (state_20444[(11)]);
var inst_20397 = (state_20444[(12)]);
var inst_20404 = cljs.core._nth.call(null,inst_20397,inst_20399);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20444__$1,(13),out,inst_20404);
} else {
if((state_val_20445 === (18))){
var inst_20410 = (state_20444[(7)]);
var inst_20419 = cljs.core.first.call(null,inst_20410);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20444__$1,(20),out,inst_20419);
} else {
if((state_val_20445 === (8))){
var inst_20398 = (state_20444[(8)]);
var inst_20399 = (state_20444[(11)]);
var inst_20401 = (inst_20399 < inst_20398);
var inst_20402 = inst_20401;
var state_20444__$1 = state_20444;
if(cljs.core.truth_(inst_20402)){
var statearr_20478_20506 = state_20444__$1;
(statearr_20478_20506[(1)] = (10));

} else {
var statearr_20479_20507 = state_20444__$1;
(statearr_20479_20507[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____0 = (function (){
var statearr_20480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20480[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__);

(statearr_20480[(1)] = (1));

return statearr_20480;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____1 = (function (state_20444){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20481){if((e20481 instanceof Object)){
var ex__18790__auto__ = e20481;
var statearr_20482_20508 = state_20444;
(statearr_20482_20508[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20509 = state_20444;
state_20444 = G__20509;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__ = function(state_20444){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____1.call(this,state_20444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18787__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20483 = f__18884__auto__.call(null);
(statearr_20483[(6)] = c__18883__auto__);

return statearr_20483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));

return c__18883__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20511 = arguments.length;
switch (G__20511) {
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
var G__20514 = arguments.length;
switch (G__20514) {
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
var G__20517 = arguments.length;
switch (G__20517) {
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
var c__18883__auto___20564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20541){
var state_val_20542 = (state_20541[(1)]);
if((state_val_20542 === (7))){
var inst_20536 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
var statearr_20543_20565 = state_20541__$1;
(statearr_20543_20565[(2)] = inst_20536);

(statearr_20543_20565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (1))){
var inst_20518 = null;
var state_20541__$1 = (function (){var statearr_20544 = state_20541;
(statearr_20544[(7)] = inst_20518);

return statearr_20544;
})();
var statearr_20545_20566 = state_20541__$1;
(statearr_20545_20566[(2)] = null);

(statearr_20545_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (4))){
var inst_20521 = (state_20541[(8)]);
var inst_20521__$1 = (state_20541[(2)]);
var inst_20522 = (inst_20521__$1 == null);
var inst_20523 = cljs.core.not.call(null,inst_20522);
var state_20541__$1 = (function (){var statearr_20546 = state_20541;
(statearr_20546[(8)] = inst_20521__$1);

return statearr_20546;
})();
if(inst_20523){
var statearr_20547_20567 = state_20541__$1;
(statearr_20547_20567[(1)] = (5));

} else {
var statearr_20548_20568 = state_20541__$1;
(statearr_20548_20568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (6))){
var state_20541__$1 = state_20541;
var statearr_20549_20569 = state_20541__$1;
(statearr_20549_20569[(2)] = null);

(statearr_20549_20569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (3))){
var inst_20538 = (state_20541[(2)]);
var inst_20539 = cljs.core.async.close_BANG_.call(null,out);
var state_20541__$1 = (function (){var statearr_20550 = state_20541;
(statearr_20550[(9)] = inst_20538);

return statearr_20550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20541__$1,inst_20539);
} else {
if((state_val_20542 === (2))){
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20541__$1,(4),ch);
} else {
if((state_val_20542 === (11))){
var inst_20521 = (state_20541[(8)]);
var inst_20530 = (state_20541[(2)]);
var inst_20518 = inst_20521;
var state_20541__$1 = (function (){var statearr_20551 = state_20541;
(statearr_20551[(7)] = inst_20518);

(statearr_20551[(10)] = inst_20530);

return statearr_20551;
})();
var statearr_20552_20570 = state_20541__$1;
(statearr_20552_20570[(2)] = null);

(statearr_20552_20570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (9))){
var inst_20521 = (state_20541[(8)]);
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20541__$1,(11),out,inst_20521);
} else {
if((state_val_20542 === (5))){
var inst_20518 = (state_20541[(7)]);
var inst_20521 = (state_20541[(8)]);
var inst_20525 = cljs.core._EQ_.call(null,inst_20521,inst_20518);
var state_20541__$1 = state_20541;
if(inst_20525){
var statearr_20554_20571 = state_20541__$1;
(statearr_20554_20571[(1)] = (8));

} else {
var statearr_20555_20572 = state_20541__$1;
(statearr_20555_20572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (10))){
var inst_20533 = (state_20541[(2)]);
var state_20541__$1 = state_20541;
var statearr_20556_20573 = state_20541__$1;
(statearr_20556_20573[(2)] = inst_20533);

(statearr_20556_20573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20542 === (8))){
var inst_20518 = (state_20541[(7)]);
var tmp20553 = inst_20518;
var inst_20518__$1 = tmp20553;
var state_20541__$1 = (function (){var statearr_20557 = state_20541;
(statearr_20557[(7)] = inst_20518__$1);

return statearr_20557;
})();
var statearr_20558_20574 = state_20541__$1;
(statearr_20558_20574[(2)] = null);

(statearr_20558_20574[(1)] = (2));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20559[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20559[(1)] = (1));

return statearr_20559;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20541){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20560){if((e20560 instanceof Object)){
var ex__18790__auto__ = e20560;
var statearr_20561_20575 = state_20541;
(statearr_20561_20575[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20576 = state_20541;
state_20541 = G__20576;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20562 = f__18884__auto__.call(null);
(statearr_20562[(6)] = c__18883__auto___20564);

return statearr_20562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20578 = arguments.length;
switch (G__20578) {
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
var c__18883__auto___20644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20616){
var state_val_20617 = (state_20616[(1)]);
if((state_val_20617 === (7))){
var inst_20612 = (state_20616[(2)]);
var state_20616__$1 = state_20616;
var statearr_20618_20645 = state_20616__$1;
(statearr_20618_20645[(2)] = inst_20612);

(statearr_20618_20645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (1))){
var inst_20579 = (new Array(n));
var inst_20580 = inst_20579;
var inst_20581 = (0);
var state_20616__$1 = (function (){var statearr_20619 = state_20616;
(statearr_20619[(7)] = inst_20580);

(statearr_20619[(8)] = inst_20581);

return statearr_20619;
})();
var statearr_20620_20646 = state_20616__$1;
(statearr_20620_20646[(2)] = null);

(statearr_20620_20646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (4))){
var inst_20584 = (state_20616[(9)]);
var inst_20584__$1 = (state_20616[(2)]);
var inst_20585 = (inst_20584__$1 == null);
var inst_20586 = cljs.core.not.call(null,inst_20585);
var state_20616__$1 = (function (){var statearr_20621 = state_20616;
(statearr_20621[(9)] = inst_20584__$1);

return statearr_20621;
})();
if(inst_20586){
var statearr_20622_20647 = state_20616__$1;
(statearr_20622_20647[(1)] = (5));

} else {
var statearr_20623_20648 = state_20616__$1;
(statearr_20623_20648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (15))){
var inst_20606 = (state_20616[(2)]);
var state_20616__$1 = state_20616;
var statearr_20624_20649 = state_20616__$1;
(statearr_20624_20649[(2)] = inst_20606);

(statearr_20624_20649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (13))){
var state_20616__$1 = state_20616;
var statearr_20625_20650 = state_20616__$1;
(statearr_20625_20650[(2)] = null);

(statearr_20625_20650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (6))){
var inst_20581 = (state_20616[(8)]);
var inst_20602 = (inst_20581 > (0));
var state_20616__$1 = state_20616;
if(cljs.core.truth_(inst_20602)){
var statearr_20626_20651 = state_20616__$1;
(statearr_20626_20651[(1)] = (12));

} else {
var statearr_20627_20652 = state_20616__$1;
(statearr_20627_20652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (3))){
var inst_20614 = (state_20616[(2)]);
var state_20616__$1 = state_20616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20616__$1,inst_20614);
} else {
if((state_val_20617 === (12))){
var inst_20580 = (state_20616[(7)]);
var inst_20604 = cljs.core.vec.call(null,inst_20580);
var state_20616__$1 = state_20616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20616__$1,(15),out,inst_20604);
} else {
if((state_val_20617 === (2))){
var state_20616__$1 = state_20616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20616__$1,(4),ch);
} else {
if((state_val_20617 === (11))){
var inst_20596 = (state_20616[(2)]);
var inst_20597 = (new Array(n));
var inst_20580 = inst_20597;
var inst_20581 = (0);
var state_20616__$1 = (function (){var statearr_20628 = state_20616;
(statearr_20628[(7)] = inst_20580);

(statearr_20628[(10)] = inst_20596);

(statearr_20628[(8)] = inst_20581);

return statearr_20628;
})();
var statearr_20629_20653 = state_20616__$1;
(statearr_20629_20653[(2)] = null);

(statearr_20629_20653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (9))){
var inst_20580 = (state_20616[(7)]);
var inst_20594 = cljs.core.vec.call(null,inst_20580);
var state_20616__$1 = state_20616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20616__$1,(11),out,inst_20594);
} else {
if((state_val_20617 === (5))){
var inst_20584 = (state_20616[(9)]);
var inst_20589 = (state_20616[(11)]);
var inst_20580 = (state_20616[(7)]);
var inst_20581 = (state_20616[(8)]);
var inst_20588 = (inst_20580[inst_20581] = inst_20584);
var inst_20589__$1 = (inst_20581 + (1));
var inst_20590 = (inst_20589__$1 < n);
var state_20616__$1 = (function (){var statearr_20630 = state_20616;
(statearr_20630[(11)] = inst_20589__$1);

(statearr_20630[(12)] = inst_20588);

return statearr_20630;
})();
if(cljs.core.truth_(inst_20590)){
var statearr_20631_20654 = state_20616__$1;
(statearr_20631_20654[(1)] = (8));

} else {
var statearr_20632_20655 = state_20616__$1;
(statearr_20632_20655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (14))){
var inst_20609 = (state_20616[(2)]);
var inst_20610 = cljs.core.async.close_BANG_.call(null,out);
var state_20616__$1 = (function (){var statearr_20634 = state_20616;
(statearr_20634[(13)] = inst_20609);

return statearr_20634;
})();
var statearr_20635_20656 = state_20616__$1;
(statearr_20635_20656[(2)] = inst_20610);

(statearr_20635_20656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (10))){
var inst_20600 = (state_20616[(2)]);
var state_20616__$1 = state_20616;
var statearr_20636_20657 = state_20616__$1;
(statearr_20636_20657[(2)] = inst_20600);

(statearr_20636_20657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20617 === (8))){
var inst_20589 = (state_20616[(11)]);
var inst_20580 = (state_20616[(7)]);
var tmp20633 = inst_20580;
var inst_20580__$1 = tmp20633;
var inst_20581 = inst_20589;
var state_20616__$1 = (function (){var statearr_20637 = state_20616;
(statearr_20637[(7)] = inst_20580__$1);

(statearr_20637[(8)] = inst_20581);

return statearr_20637;
})();
var statearr_20638_20658 = state_20616__$1;
(statearr_20638_20658[(2)] = null);

(statearr_20638_20658[(1)] = (2));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20616){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20640){if((e20640 instanceof Object)){
var ex__18790__auto__ = e20640;
var statearr_20641_20659 = state_20616;
(statearr_20641_20659[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20660 = state_20616;
state_20616 = G__20660;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20642 = f__18884__auto__.call(null);
(statearr_20642[(6)] = c__18883__auto___20644);

return statearr_20642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20662 = arguments.length;
switch (G__20662) {
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
var c__18883__auto___20739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18884__auto__ = (function (){var switch__18786__auto__ = (function (state_20707){
var state_val_20708 = (state_20707[(1)]);
if((state_val_20708 === (7))){
var inst_20703 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
var statearr_20709_20740 = state_20707__$1;
(statearr_20709_20740[(2)] = inst_20703);

(statearr_20709_20740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (1))){
var inst_20663 = [];
var inst_20664 = inst_20663;
var inst_20665 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20707__$1 = (function (){var statearr_20710 = state_20707;
(statearr_20710[(7)] = inst_20665);

(statearr_20710[(8)] = inst_20664);

return statearr_20710;
})();
var statearr_20711_20741 = state_20707__$1;
(statearr_20711_20741[(2)] = null);

(statearr_20711_20741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (4))){
var inst_20668 = (state_20707[(9)]);
var inst_20668__$1 = (state_20707[(2)]);
var inst_20669 = (inst_20668__$1 == null);
var inst_20670 = cljs.core.not.call(null,inst_20669);
var state_20707__$1 = (function (){var statearr_20712 = state_20707;
(statearr_20712[(9)] = inst_20668__$1);

return statearr_20712;
})();
if(inst_20670){
var statearr_20713_20742 = state_20707__$1;
(statearr_20713_20742[(1)] = (5));

} else {
var statearr_20714_20743 = state_20707__$1;
(statearr_20714_20743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (15))){
var inst_20664 = (state_20707[(8)]);
var inst_20695 = cljs.core.vec.call(null,inst_20664);
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20707__$1,(18),out,inst_20695);
} else {
if((state_val_20708 === (13))){
var inst_20690 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
var statearr_20715_20744 = state_20707__$1;
(statearr_20715_20744[(2)] = inst_20690);

(statearr_20715_20744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (6))){
var inst_20664 = (state_20707[(8)]);
var inst_20692 = inst_20664.length;
var inst_20693 = (inst_20692 > (0));
var state_20707__$1 = state_20707;
if(cljs.core.truth_(inst_20693)){
var statearr_20716_20745 = state_20707__$1;
(statearr_20716_20745[(1)] = (15));

} else {
var statearr_20717_20746 = state_20707__$1;
(statearr_20717_20746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (17))){
var inst_20700 = (state_20707[(2)]);
var inst_20701 = cljs.core.async.close_BANG_.call(null,out);
var state_20707__$1 = (function (){var statearr_20718 = state_20707;
(statearr_20718[(10)] = inst_20700);

return statearr_20718;
})();
var statearr_20719_20747 = state_20707__$1;
(statearr_20719_20747[(2)] = inst_20701);

(statearr_20719_20747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (3))){
var inst_20705 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20707__$1,inst_20705);
} else {
if((state_val_20708 === (12))){
var inst_20664 = (state_20707[(8)]);
var inst_20683 = cljs.core.vec.call(null,inst_20664);
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20707__$1,(14),out,inst_20683);
} else {
if((state_val_20708 === (2))){
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20707__$1,(4),ch);
} else {
if((state_val_20708 === (11))){
var inst_20668 = (state_20707[(9)]);
var inst_20664 = (state_20707[(8)]);
var inst_20672 = (state_20707[(11)]);
var inst_20680 = inst_20664.push(inst_20668);
var tmp20720 = inst_20664;
var inst_20664__$1 = tmp20720;
var inst_20665 = inst_20672;
var state_20707__$1 = (function (){var statearr_20721 = state_20707;
(statearr_20721[(7)] = inst_20665);

(statearr_20721[(8)] = inst_20664__$1);

(statearr_20721[(12)] = inst_20680);

return statearr_20721;
})();
var statearr_20722_20748 = state_20707__$1;
(statearr_20722_20748[(2)] = null);

(statearr_20722_20748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (9))){
var inst_20665 = (state_20707[(7)]);
var inst_20676 = cljs.core.keyword_identical_QMARK_.call(null,inst_20665,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20707__$1 = state_20707;
var statearr_20723_20749 = state_20707__$1;
(statearr_20723_20749[(2)] = inst_20676);

(statearr_20723_20749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (5))){
var inst_20668 = (state_20707[(9)]);
var inst_20673 = (state_20707[(13)]);
var inst_20665 = (state_20707[(7)]);
var inst_20672 = (state_20707[(11)]);
var inst_20672__$1 = f.call(null,inst_20668);
var inst_20673__$1 = cljs.core._EQ_.call(null,inst_20672__$1,inst_20665);
var state_20707__$1 = (function (){var statearr_20724 = state_20707;
(statearr_20724[(13)] = inst_20673__$1);

(statearr_20724[(11)] = inst_20672__$1);

return statearr_20724;
})();
if(inst_20673__$1){
var statearr_20725_20750 = state_20707__$1;
(statearr_20725_20750[(1)] = (8));

} else {
var statearr_20726_20751 = state_20707__$1;
(statearr_20726_20751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (14))){
var inst_20668 = (state_20707[(9)]);
var inst_20672 = (state_20707[(11)]);
var inst_20685 = (state_20707[(2)]);
var inst_20686 = [];
var inst_20687 = inst_20686.push(inst_20668);
var inst_20664 = inst_20686;
var inst_20665 = inst_20672;
var state_20707__$1 = (function (){var statearr_20727 = state_20707;
(statearr_20727[(7)] = inst_20665);

(statearr_20727[(14)] = inst_20685);

(statearr_20727[(8)] = inst_20664);

(statearr_20727[(15)] = inst_20687);

return statearr_20727;
})();
var statearr_20728_20752 = state_20707__$1;
(statearr_20728_20752[(2)] = null);

(statearr_20728_20752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (16))){
var state_20707__$1 = state_20707;
var statearr_20729_20753 = state_20707__$1;
(statearr_20729_20753[(2)] = null);

(statearr_20729_20753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (10))){
var inst_20678 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
if(cljs.core.truth_(inst_20678)){
var statearr_20730_20754 = state_20707__$1;
(statearr_20730_20754[(1)] = (11));

} else {
var statearr_20731_20755 = state_20707__$1;
(statearr_20731_20755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (18))){
var inst_20697 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
var statearr_20732_20756 = state_20707__$1;
(statearr_20732_20756[(2)] = inst_20697);

(statearr_20732_20756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (8))){
var inst_20673 = (state_20707[(13)]);
var state_20707__$1 = state_20707;
var statearr_20733_20757 = state_20707__$1;
(statearr_20733_20757[(2)] = inst_20673);

(statearr_20733_20757[(1)] = (10));


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
var cljs$core$async$state_machine__18787__auto__ = null;
var cljs$core$async$state_machine__18787__auto____0 = (function (){
var statearr_20734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20734[(0)] = cljs$core$async$state_machine__18787__auto__);

(statearr_20734[(1)] = (1));

return statearr_20734;
});
var cljs$core$async$state_machine__18787__auto____1 = (function (state_20707){
while(true){
var ret_value__18788__auto__ = (function (){try{while(true){
var result__18789__auto__ = switch__18786__auto__.call(null,state_20707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18789__auto__;
}
break;
}
}catch (e20735){if((e20735 instanceof Object)){
var ex__18790__auto__ = e20735;
var statearr_20736_20758 = state_20707;
(statearr_20736_20758[(5)] = ex__18790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20759 = state_20707;
state_20707 = G__20759;
continue;
} else {
return ret_value__18788__auto__;
}
break;
}
});
cljs$core$async$state_machine__18787__auto__ = function(state_20707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18787__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18787__auto____1.call(this,state_20707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18787__auto____0;
cljs$core$async$state_machine__18787__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18787__auto____1;
return cljs$core$async$state_machine__18787__auto__;
})()
})();
var state__18885__auto__ = (function (){var statearr_20737 = f__18884__auto__.call(null);
(statearr_20737[(6)] = c__18883__auto___20739);

return statearr_20737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18885__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
