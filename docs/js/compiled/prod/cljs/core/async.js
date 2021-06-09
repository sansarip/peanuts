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
var G__21901 = arguments.length;
switch (G__21901) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21902 = (function (f,blockable,meta21903){
this.f = f;
this.blockable = blockable;
this.meta21903 = meta21903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21904,meta21903__$1){
var self__ = this;
var _21904__$1 = this;
return (new cljs.core.async.t_cljs$core$async21902(self__.f,self__.blockable,meta21903__$1));
}));

(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21904){
var self__ = this;
var _21904__$1 = this;
return self__.meta21903;
}));

(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21903","meta21903",1345801950,null)], null);
}));

(cljs.core.async.t_cljs$core$async21902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21902");

(cljs.core.async.t_cljs$core$async21902.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async21902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21902.
 */
cljs.core.async.__GT_t_cljs$core$async21902 = (function cljs$core$async$__GT_t_cljs$core$async21902(f__$1,blockable__$1,meta21903){
return (new cljs.core.async.t_cljs$core$async21902(f__$1,blockable__$1,meta21903));
});

}

return (new cljs.core.async.t_cljs$core$async21902(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21908 = arguments.length;
switch (G__21908) {
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
var G__21911 = arguments.length;
switch (G__21911) {
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
var G__21914 = arguments.length;
switch (G__21914) {
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
var val_21916 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21916);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_21916);
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
var G__21918 = arguments.length;
switch (G__21918) {
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
var n__4706__auto___21920 = n;
var x_21921 = (0);
while(true){
if((x_21921 < n__4706__auto___21920)){
(a[x_21921] = (0));

var G__21922 = (x_21921 + (1));
x_21921 = G__21922;
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

var G__21923 = (i + (1));
i = G__21923;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21924 = (function (flag,meta21925){
this.flag = flag;
this.meta21925 = meta21925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21926,meta21925__$1){
var self__ = this;
var _21926__$1 = this;
return (new cljs.core.async.t_cljs$core$async21924(self__.flag,meta21925__$1));
}));

(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21926){
var self__ = this;
var _21926__$1 = this;
return self__.meta21925;
}));

(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21925","meta21925",61180208,null)], null);
}));

(cljs.core.async.t_cljs$core$async21924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21924");

(cljs.core.async.t_cljs$core$async21924.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async21924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21924.
 */
cljs.core.async.__GT_t_cljs$core$async21924 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21924(flag__$1,meta21925){
return (new cljs.core.async.t_cljs$core$async21924(flag__$1,meta21925));
});

}

return (new cljs.core.async.t_cljs$core$async21924(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21927 = (function (flag,cb,meta21928){
this.flag = flag;
this.cb = cb;
this.meta21928 = meta21928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21929,meta21928__$1){
var self__ = this;
var _21929__$1 = this;
return (new cljs.core.async.t_cljs$core$async21927(self__.flag,self__.cb,meta21928__$1));
}));

(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21929){
var self__ = this;
var _21929__$1 = this;
return self__.meta21928;
}));

(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21928","meta21928",-1375018053,null)], null);
}));

(cljs.core.async.t_cljs$core$async21927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21927");

(cljs.core.async.t_cljs$core$async21927.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async21927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21927.
 */
cljs.core.async.__GT_t_cljs$core$async21927 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21927(flag__$1,cb__$1,meta21928){
return (new cljs.core.async.t_cljs$core$async21927(flag__$1,cb__$1,meta21928));
});

}

return (new cljs.core.async.t_cljs$core$async21927(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21930_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21930_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21931_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21931_SHARP_,port], null));
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
var G__21932 = (i + (1));
i = G__21932;
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
var len__4829__auto___21937 = arguments.length;
var i__4830__auto___21938 = (0);
while(true){
if((i__4830__auto___21938 < len__4829__auto___21937)){
args__4835__auto__.push((arguments[i__4830__auto___21938]));

var G__21939 = (i__4830__auto___21938 + (1));
i__4830__auto___21938 = G__21939;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21935){
var map__21936 = p__21935;
var map__21936__$1 = cljs.core.__destructure_map.call(null,map__21936);
var opts = map__21936__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21933){
var G__21934 = cljs.core.first.call(null,seq21933);
var seq21933__$1 = cljs.core.next.call(null,seq21933);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21934,seq21933__$1);
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
var G__21941 = arguments.length;
switch (G__21941) {
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
var c__21841__auto___21987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_21965){
var state_val_21966 = (state_21965[(1)]);
if((state_val_21966 === (7))){
var inst_21961 = (state_21965[(2)]);
var state_21965__$1 = state_21965;
var statearr_21967_21988 = state_21965__$1;
(statearr_21967_21988[(2)] = inst_21961);

(statearr_21967_21988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (1))){
var state_21965__$1 = state_21965;
var statearr_21968_21989 = state_21965__$1;
(statearr_21968_21989[(2)] = null);

(statearr_21968_21989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (4))){
var inst_21944 = (state_21965[(7)]);
var inst_21944__$1 = (state_21965[(2)]);
var inst_21945 = (inst_21944__$1 == null);
var state_21965__$1 = (function (){var statearr_21969 = state_21965;
(statearr_21969[(7)] = inst_21944__$1);

return statearr_21969;
})();
if(cljs.core.truth_(inst_21945)){
var statearr_21970_21990 = state_21965__$1;
(statearr_21970_21990[(1)] = (5));

} else {
var statearr_21971_21991 = state_21965__$1;
(statearr_21971_21991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (13))){
var state_21965__$1 = state_21965;
var statearr_21972_21992 = state_21965__$1;
(statearr_21972_21992[(2)] = null);

(statearr_21972_21992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (6))){
var inst_21944 = (state_21965[(7)]);
var state_21965__$1 = state_21965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21965__$1,(11),to,inst_21944);
} else {
if((state_val_21966 === (3))){
var inst_21963 = (state_21965[(2)]);
var state_21965__$1 = state_21965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21965__$1,inst_21963);
} else {
if((state_val_21966 === (12))){
var state_21965__$1 = state_21965;
var statearr_21973_21993 = state_21965__$1;
(statearr_21973_21993[(2)] = null);

(statearr_21973_21993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (2))){
var state_21965__$1 = state_21965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21965__$1,(4),from);
} else {
if((state_val_21966 === (11))){
var inst_21954 = (state_21965[(2)]);
var state_21965__$1 = state_21965;
if(cljs.core.truth_(inst_21954)){
var statearr_21974_21994 = state_21965__$1;
(statearr_21974_21994[(1)] = (12));

} else {
var statearr_21975_21995 = state_21965__$1;
(statearr_21975_21995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (9))){
var state_21965__$1 = state_21965;
var statearr_21976_21996 = state_21965__$1;
(statearr_21976_21996[(2)] = null);

(statearr_21976_21996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (5))){
var state_21965__$1 = state_21965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21977_21997 = state_21965__$1;
(statearr_21977_21997[(1)] = (8));

} else {
var statearr_21978_21998 = state_21965__$1;
(statearr_21978_21998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (14))){
var inst_21959 = (state_21965[(2)]);
var state_21965__$1 = state_21965;
var statearr_21979_21999 = state_21965__$1;
(statearr_21979_21999[(2)] = inst_21959);

(statearr_21979_21999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (10))){
var inst_21951 = (state_21965[(2)]);
var state_21965__$1 = state_21965;
var statearr_21980_22000 = state_21965__$1;
(statearr_21980_22000[(2)] = inst_21951);

(statearr_21980_22000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21966 === (8))){
var inst_21948 = cljs.core.async.close_BANG_.call(null,to);
var state_21965__$1 = state_21965;
var statearr_21981_22001 = state_21965__$1;
(statearr_21981_22001[(2)] = inst_21948);

(statearr_21981_22001[(1)] = (10));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_21982 = [null,null,null,null,null,null,null,null];
(statearr_21982[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_21982[(1)] = (1));

return statearr_21982;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_21965){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_21965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e21983){if((e21983 instanceof Object)){
var ex__21748__auto__ = e21983;
var statearr_21984_22002 = state_21965;
(statearr_21984_22002[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22003 = state_21965;
state_21965 = G__22003;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_21965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_21965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_21985 = f__21842__auto__.call(null);
(statearr_21985[(6)] = c__21841__auto___21987);

return statearr_21985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var process = (function (p__22004){
var vec__22005 = p__22004;
var v = cljs.core.nth.call(null,vec__22005,(0),null);
var p = cljs.core.nth.call(null,vec__22005,(1),null);
var job = vec__22005;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21841__auto___22176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22012){
var state_val_22013 = (state_22012[(1)]);
if((state_val_22013 === (1))){
var state_22012__$1 = state_22012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22012__$1,(2),res,v);
} else {
if((state_val_22013 === (2))){
var inst_22009 = (state_22012[(2)]);
var inst_22010 = cljs.core.async.close_BANG_.call(null,res);
var state_22012__$1 = (function (){var statearr_22014 = state_22012;
(statearr_22014[(7)] = inst_22009);

return statearr_22014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22012__$1,inst_22010);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_22015 = [null,null,null,null,null,null,null,null];
(statearr_22015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__);

(statearr_22015[(1)] = (1));

return statearr_22015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1 = (function (state_22012){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22016){if((e22016 instanceof Object)){
var ex__21748__auto__ = e22016;
var statearr_22017_22177 = state_22012;
(statearr_22017_22177[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22178 = state_22012;
state_22012 = G__22178;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = function(state_22012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1.call(this,state_22012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22018 = f__21842__auto__.call(null);
(statearr_22018[(6)] = c__21841__auto___22176);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__22019){
var vec__22020 = p__22019;
var v = cljs.core.nth.call(null,vec__22020,(0),null);
var p = cljs.core.nth.call(null,vec__22020,(1),null);
var job = vec__22020;
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
var n__4706__auto___22179 = n;
var __22180 = (0);
while(true){
if((__22180 < n__4706__auto___22179)){
var G__22023_22181 = type;
var G__22023_22182__$1 = (((G__22023_22181 instanceof cljs.core.Keyword))?G__22023_22181.fqn:null);
switch (G__22023_22182__$1) {
case "compute":
var c__21841__auto___22184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22180,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = ((function (__22180,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function (state_22036){
var state_val_22037 = (state_22036[(1)]);
if((state_val_22037 === (1))){
var state_22036__$1 = state_22036;
var statearr_22038_22185 = state_22036__$1;
(statearr_22038_22185[(2)] = null);

(statearr_22038_22185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (2))){
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22036__$1,(4),jobs);
} else {
if((state_val_22037 === (3))){
var inst_22034 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22036__$1,inst_22034);
} else {
if((state_val_22037 === (4))){
var inst_22026 = (state_22036[(2)]);
var inst_22027 = process.call(null,inst_22026);
var state_22036__$1 = state_22036;
if(cljs.core.truth_(inst_22027)){
var statearr_22039_22186 = state_22036__$1;
(statearr_22039_22186[(1)] = (5));

} else {
var statearr_22040_22187 = state_22036__$1;
(statearr_22040_22187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (5))){
var state_22036__$1 = state_22036;
var statearr_22041_22188 = state_22036__$1;
(statearr_22041_22188[(2)] = null);

(statearr_22041_22188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (6))){
var state_22036__$1 = state_22036;
var statearr_22042_22189 = state_22036__$1;
(statearr_22042_22189[(2)] = null);

(statearr_22042_22189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (7))){
var inst_22032 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
var statearr_22043_22190 = state_22036__$1;
(statearr_22043_22190[(2)] = inst_22032);

(statearr_22043_22190[(1)] = (3));


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
});})(__22180,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
;
return ((function (__22180,switch__21744__auto__,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_22044 = [null,null,null,null,null,null,null];
(statearr_22044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__);

(statearr_22044[(1)] = (1));

return statearr_22044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1 = (function (state_22036){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22045){if((e22045 instanceof Object)){
var ex__21748__auto__ = e22045;
var statearr_22046_22191 = state_22036;
(statearr_22046_22191[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22192 = state_22036;
state_22036 = G__22192;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = function(state_22036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1.call(this,state_22036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__;
})()
;})(__22180,switch__21744__auto__,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
})();
var state__21843__auto__ = (function (){var statearr_22047 = f__21842__auto__.call(null);
(statearr_22047[(6)] = c__21841__auto___22184);

return statearr_22047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
});})(__22180,c__21841__auto___22184,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
);


break;
case "async":
var c__21841__auto___22193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22180,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = ((function (__22180,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function (state_22060){
var state_val_22061 = (state_22060[(1)]);
if((state_val_22061 === (1))){
var state_22060__$1 = state_22060;
var statearr_22062_22194 = state_22060__$1;
(statearr_22062_22194[(2)] = null);

(statearr_22062_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (2))){
var state_22060__$1 = state_22060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22060__$1,(4),jobs);
} else {
if((state_val_22061 === (3))){
var inst_22058 = (state_22060[(2)]);
var state_22060__$1 = state_22060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22060__$1,inst_22058);
} else {
if((state_val_22061 === (4))){
var inst_22050 = (state_22060[(2)]);
var inst_22051 = async.call(null,inst_22050);
var state_22060__$1 = state_22060;
if(cljs.core.truth_(inst_22051)){
var statearr_22063_22195 = state_22060__$1;
(statearr_22063_22195[(1)] = (5));

} else {
var statearr_22064_22196 = state_22060__$1;
(statearr_22064_22196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (5))){
var state_22060__$1 = state_22060;
var statearr_22065_22197 = state_22060__$1;
(statearr_22065_22197[(2)] = null);

(statearr_22065_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (6))){
var state_22060__$1 = state_22060;
var statearr_22066_22198 = state_22060__$1;
(statearr_22066_22198[(2)] = null);

(statearr_22066_22198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (7))){
var inst_22056 = (state_22060[(2)]);
var state_22060__$1 = state_22060;
var statearr_22067_22199 = state_22060__$1;
(statearr_22067_22199[(2)] = inst_22056);

(statearr_22067_22199[(1)] = (3));


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
});})(__22180,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
;
return ((function (__22180,switch__21744__auto__,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_22068 = [null,null,null,null,null,null,null];
(statearr_22068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__);

(statearr_22068[(1)] = (1));

return statearr_22068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1 = (function (state_22060){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22069){if((e22069 instanceof Object)){
var ex__21748__auto__ = e22069;
var statearr_22070_22200 = state_22060;
(statearr_22070_22200[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22201 = state_22060;
state_22060 = G__22201;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = function(state_22060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1.call(this,state_22060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__;
})()
;})(__22180,switch__21744__auto__,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
})();
var state__21843__auto__ = (function (){var statearr_22071 = f__21842__auto__.call(null);
(statearr_22071[(6)] = c__21841__auto___22193);

return statearr_22071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
});})(__22180,c__21841__auto___22193,G__22023_22181,G__22023_22182__$1,n__4706__auto___22179,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22023_22182__$1)].join('')));

}

var G__22202 = (__22180 + (1));
__22180 = G__22202;
continue;
} else {
}
break;
}

var c__21841__auto___22203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22093){
var state_val_22094 = (state_22093[(1)]);
if((state_val_22094 === (7))){
var inst_22089 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22095_22204 = state_22093__$1;
(statearr_22095_22204[(2)] = inst_22089);

(statearr_22095_22204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (1))){
var state_22093__$1 = state_22093;
var statearr_22096_22205 = state_22093__$1;
(statearr_22096_22205[(2)] = null);

(statearr_22096_22205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (4))){
var inst_22074 = (state_22093[(7)]);
var inst_22074__$1 = (state_22093[(2)]);
var inst_22075 = (inst_22074__$1 == null);
var state_22093__$1 = (function (){var statearr_22097 = state_22093;
(statearr_22097[(7)] = inst_22074__$1);

return statearr_22097;
})();
if(cljs.core.truth_(inst_22075)){
var statearr_22098_22206 = state_22093__$1;
(statearr_22098_22206[(1)] = (5));

} else {
var statearr_22099_22207 = state_22093__$1;
(statearr_22099_22207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (6))){
var inst_22079 = (state_22093[(8)]);
var inst_22074 = (state_22093[(7)]);
var inst_22079__$1 = cljs.core.async.chan.call(null,(1));
var inst_22080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22081 = [inst_22074,inst_22079__$1];
var inst_22082 = (new cljs.core.PersistentVector(null,2,(5),inst_22080,inst_22081,null));
var state_22093__$1 = (function (){var statearr_22100 = state_22093;
(statearr_22100[(8)] = inst_22079__$1);

return statearr_22100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22093__$1,(8),jobs,inst_22082);
} else {
if((state_val_22094 === (3))){
var inst_22091 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22093__$1,inst_22091);
} else {
if((state_val_22094 === (2))){
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22093__$1,(4),from);
} else {
if((state_val_22094 === (9))){
var inst_22086 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22101 = state_22093;
(statearr_22101[(9)] = inst_22086);

return statearr_22101;
})();
var statearr_22102_22208 = state_22093__$1;
(statearr_22102_22208[(2)] = null);

(statearr_22102_22208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (5))){
var inst_22077 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22093__$1 = state_22093;
var statearr_22103_22209 = state_22093__$1;
(statearr_22103_22209[(2)] = inst_22077);

(statearr_22103_22209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (8))){
var inst_22079 = (state_22093[(8)]);
var inst_22084 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22104 = state_22093;
(statearr_22104[(10)] = inst_22084);

return statearr_22104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22093__$1,(9),results,inst_22079);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_22105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__);

(statearr_22105[(1)] = (1));

return statearr_22105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1 = (function (state_22093){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22106){if((e22106 instanceof Object)){
var ex__21748__auto__ = e22106;
var statearr_22107_22210 = state_22093;
(statearr_22107_22210[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22211 = state_22093;
state_22093 = G__22211;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = function(state_22093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1.call(this,state_22093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22108 = f__21842__auto__.call(null);
(statearr_22108[(6)] = c__21841__auto___22203);

return statearr_22108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


var c__21841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22146){
var state_val_22147 = (state_22146[(1)]);
if((state_val_22147 === (7))){
var inst_22142 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22148_22212 = state_22146__$1;
(statearr_22148_22212[(2)] = inst_22142);

(statearr_22148_22212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (20))){
var state_22146__$1 = state_22146;
var statearr_22149_22213 = state_22146__$1;
(statearr_22149_22213[(2)] = null);

(statearr_22149_22213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (1))){
var state_22146__$1 = state_22146;
var statearr_22150_22214 = state_22146__$1;
(statearr_22150_22214[(2)] = null);

(statearr_22150_22214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (4))){
var inst_22111 = (state_22146[(7)]);
var inst_22111__$1 = (state_22146[(2)]);
var inst_22112 = (inst_22111__$1 == null);
var state_22146__$1 = (function (){var statearr_22151 = state_22146;
(statearr_22151[(7)] = inst_22111__$1);

return statearr_22151;
})();
if(cljs.core.truth_(inst_22112)){
var statearr_22152_22215 = state_22146__$1;
(statearr_22152_22215[(1)] = (5));

} else {
var statearr_22153_22216 = state_22146__$1;
(statearr_22153_22216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (15))){
var inst_22124 = (state_22146[(8)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22146__$1,(18),to,inst_22124);
} else {
if((state_val_22147 === (21))){
var inst_22137 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22154_22217 = state_22146__$1;
(statearr_22154_22217[(2)] = inst_22137);

(statearr_22154_22217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (13))){
var inst_22139 = (state_22146[(2)]);
var state_22146__$1 = (function (){var statearr_22155 = state_22146;
(statearr_22155[(9)] = inst_22139);

return statearr_22155;
})();
var statearr_22156_22218 = state_22146__$1;
(statearr_22156_22218[(2)] = null);

(statearr_22156_22218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (6))){
var inst_22111 = (state_22146[(7)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(11),inst_22111);
} else {
if((state_val_22147 === (17))){
var inst_22132 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
if(cljs.core.truth_(inst_22132)){
var statearr_22157_22219 = state_22146__$1;
(statearr_22157_22219[(1)] = (19));

} else {
var statearr_22158_22220 = state_22146__$1;
(statearr_22158_22220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (3))){
var inst_22144 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22146__$1,inst_22144);
} else {
if((state_val_22147 === (12))){
var inst_22121 = (state_22146[(10)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(14),inst_22121);
} else {
if((state_val_22147 === (2))){
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(4),results);
} else {
if((state_val_22147 === (19))){
var state_22146__$1 = state_22146;
var statearr_22159_22221 = state_22146__$1;
(statearr_22159_22221[(2)] = null);

(statearr_22159_22221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (11))){
var inst_22121 = (state_22146[(2)]);
var state_22146__$1 = (function (){var statearr_22160 = state_22146;
(statearr_22160[(10)] = inst_22121);

return statearr_22160;
})();
var statearr_22161_22222 = state_22146__$1;
(statearr_22161_22222[(2)] = null);

(statearr_22161_22222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (9))){
var state_22146__$1 = state_22146;
var statearr_22162_22223 = state_22146__$1;
(statearr_22162_22223[(2)] = null);

(statearr_22162_22223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (5))){
var state_22146__$1 = state_22146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22163_22224 = state_22146__$1;
(statearr_22163_22224[(1)] = (8));

} else {
var statearr_22164_22225 = state_22146__$1;
(statearr_22164_22225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (14))){
var inst_22124 = (state_22146[(8)]);
var inst_22126 = (state_22146[(11)]);
var inst_22124__$1 = (state_22146[(2)]);
var inst_22125 = (inst_22124__$1 == null);
var inst_22126__$1 = cljs.core.not.call(null,inst_22125);
var state_22146__$1 = (function (){var statearr_22165 = state_22146;
(statearr_22165[(8)] = inst_22124__$1);

(statearr_22165[(11)] = inst_22126__$1);

return statearr_22165;
})();
if(inst_22126__$1){
var statearr_22166_22226 = state_22146__$1;
(statearr_22166_22226[(1)] = (15));

} else {
var statearr_22167_22227 = state_22146__$1;
(statearr_22167_22227[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (16))){
var inst_22126 = (state_22146[(11)]);
var state_22146__$1 = state_22146;
var statearr_22168_22228 = state_22146__$1;
(statearr_22168_22228[(2)] = inst_22126);

(statearr_22168_22228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (10))){
var inst_22118 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22169_22229 = state_22146__$1;
(statearr_22169_22229[(2)] = inst_22118);

(statearr_22169_22229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (18))){
var inst_22129 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22170_22230 = state_22146__$1;
(statearr_22170_22230[(2)] = inst_22129);

(statearr_22170_22230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (8))){
var inst_22115 = cljs.core.async.close_BANG_.call(null,to);
var state_22146__$1 = state_22146;
var statearr_22171_22231 = state_22146__$1;
(statearr_22171_22231[(2)] = inst_22115);

(statearr_22171_22231[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_22172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__);

(statearr_22172[(1)] = (1));

return statearr_22172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1 = (function (state_22146){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22173){if((e22173 instanceof Object)){
var ex__21748__auto__ = e22173;
var statearr_22174_22232 = state_22146;
(statearr_22174_22232[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22233 = state_22146;
state_22146 = G__22233;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__ = function(state_22146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1.call(this,state_22146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22175 = f__21842__auto__.call(null);
(statearr_22175[(6)] = c__21841__auto__);

return statearr_22175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));

return c__21841__auto__;
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
var G__22235 = arguments.length;
switch (G__22235) {
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
var G__22238 = arguments.length;
switch (G__22238) {
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
var G__22241 = arguments.length;
switch (G__22241) {
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
var c__21841__auto___22290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22267){
var state_val_22268 = (state_22267[(1)]);
if((state_val_22268 === (7))){
var inst_22263 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
var statearr_22269_22291 = state_22267__$1;
(statearr_22269_22291[(2)] = inst_22263);

(statearr_22269_22291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (1))){
var state_22267__$1 = state_22267;
var statearr_22270_22292 = state_22267__$1;
(statearr_22270_22292[(2)] = null);

(statearr_22270_22292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (4))){
var inst_22244 = (state_22267[(7)]);
var inst_22244__$1 = (state_22267[(2)]);
var inst_22245 = (inst_22244__$1 == null);
var state_22267__$1 = (function (){var statearr_22271 = state_22267;
(statearr_22271[(7)] = inst_22244__$1);

return statearr_22271;
})();
if(cljs.core.truth_(inst_22245)){
var statearr_22272_22293 = state_22267__$1;
(statearr_22272_22293[(1)] = (5));

} else {
var statearr_22273_22294 = state_22267__$1;
(statearr_22273_22294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (13))){
var state_22267__$1 = state_22267;
var statearr_22274_22295 = state_22267__$1;
(statearr_22274_22295[(2)] = null);

(statearr_22274_22295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (6))){
var inst_22244 = (state_22267[(7)]);
var inst_22250 = p.call(null,inst_22244);
var state_22267__$1 = state_22267;
if(cljs.core.truth_(inst_22250)){
var statearr_22275_22296 = state_22267__$1;
(statearr_22275_22296[(1)] = (9));

} else {
var statearr_22276_22297 = state_22267__$1;
(statearr_22276_22297[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (3))){
var inst_22265 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22267__$1,inst_22265);
} else {
if((state_val_22268 === (12))){
var state_22267__$1 = state_22267;
var statearr_22277_22298 = state_22267__$1;
(statearr_22277_22298[(2)] = null);

(statearr_22277_22298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (2))){
var state_22267__$1 = state_22267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22267__$1,(4),ch);
} else {
if((state_val_22268 === (11))){
var inst_22244 = (state_22267[(7)]);
var inst_22254 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22267__$1,(8),inst_22254,inst_22244);
} else {
if((state_val_22268 === (9))){
var state_22267__$1 = state_22267;
var statearr_22278_22299 = state_22267__$1;
(statearr_22278_22299[(2)] = tc);

(statearr_22278_22299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (5))){
var inst_22247 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22248 = cljs.core.async.close_BANG_.call(null,fc);
var state_22267__$1 = (function (){var statearr_22279 = state_22267;
(statearr_22279[(8)] = inst_22247);

return statearr_22279;
})();
var statearr_22280_22300 = state_22267__$1;
(statearr_22280_22300[(2)] = inst_22248);

(statearr_22280_22300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (14))){
var inst_22261 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
var statearr_22281_22301 = state_22267__$1;
(statearr_22281_22301[(2)] = inst_22261);

(statearr_22281_22301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (10))){
var state_22267__$1 = state_22267;
var statearr_22282_22302 = state_22267__$1;
(statearr_22282_22302[(2)] = fc);

(statearr_22282_22302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (8))){
var inst_22256 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
if(cljs.core.truth_(inst_22256)){
var statearr_22283_22303 = state_22267__$1;
(statearr_22283_22303[(1)] = (12));

} else {
var statearr_22284_22304 = state_22267__$1;
(statearr_22284_22304[(1)] = (13));

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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_22285 = [null,null,null,null,null,null,null,null,null];
(statearr_22285[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_22285[(1)] = (1));

return statearr_22285;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_22267){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22286){if((e22286 instanceof Object)){
var ex__21748__auto__ = e22286;
var statearr_22287_22305 = state_22267;
(statearr_22287_22305[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22306 = state_22267;
state_22267 = G__22306;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_22267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_22267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22288 = f__21842__auto__.call(null);
(statearr_22288[(6)] = c__21841__auto___22290);

return statearr_22288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var c__21841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22327){
var state_val_22328 = (state_22327[(1)]);
if((state_val_22328 === (7))){
var inst_22323 = (state_22327[(2)]);
var state_22327__$1 = state_22327;
var statearr_22329_22347 = state_22327__$1;
(statearr_22329_22347[(2)] = inst_22323);

(statearr_22329_22347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (1))){
var inst_22307 = init;
var state_22327__$1 = (function (){var statearr_22330 = state_22327;
(statearr_22330[(7)] = inst_22307);

return statearr_22330;
})();
var statearr_22331_22348 = state_22327__$1;
(statearr_22331_22348[(2)] = null);

(statearr_22331_22348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (4))){
var inst_22310 = (state_22327[(8)]);
var inst_22310__$1 = (state_22327[(2)]);
var inst_22311 = (inst_22310__$1 == null);
var state_22327__$1 = (function (){var statearr_22332 = state_22327;
(statearr_22332[(8)] = inst_22310__$1);

return statearr_22332;
})();
if(cljs.core.truth_(inst_22311)){
var statearr_22333_22349 = state_22327__$1;
(statearr_22333_22349[(1)] = (5));

} else {
var statearr_22334_22350 = state_22327__$1;
(statearr_22334_22350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (6))){
var inst_22314 = (state_22327[(9)]);
var inst_22310 = (state_22327[(8)]);
var inst_22307 = (state_22327[(7)]);
var inst_22314__$1 = f.call(null,inst_22307,inst_22310);
var inst_22315 = cljs.core.reduced_QMARK_.call(null,inst_22314__$1);
var state_22327__$1 = (function (){var statearr_22335 = state_22327;
(statearr_22335[(9)] = inst_22314__$1);

return statearr_22335;
})();
if(inst_22315){
var statearr_22336_22351 = state_22327__$1;
(statearr_22336_22351[(1)] = (8));

} else {
var statearr_22337_22352 = state_22327__$1;
(statearr_22337_22352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (3))){
var inst_22325 = (state_22327[(2)]);
var state_22327__$1 = state_22327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22327__$1,inst_22325);
} else {
if((state_val_22328 === (2))){
var state_22327__$1 = state_22327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22327__$1,(4),ch);
} else {
if((state_val_22328 === (9))){
var inst_22314 = (state_22327[(9)]);
var inst_22307 = inst_22314;
var state_22327__$1 = (function (){var statearr_22338 = state_22327;
(statearr_22338[(7)] = inst_22307);

return statearr_22338;
})();
var statearr_22339_22353 = state_22327__$1;
(statearr_22339_22353[(2)] = null);

(statearr_22339_22353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (5))){
var inst_22307 = (state_22327[(7)]);
var state_22327__$1 = state_22327;
var statearr_22340_22354 = state_22327__$1;
(statearr_22340_22354[(2)] = inst_22307);

(statearr_22340_22354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (10))){
var inst_22321 = (state_22327[(2)]);
var state_22327__$1 = state_22327;
var statearr_22341_22355 = state_22327__$1;
(statearr_22341_22355[(2)] = inst_22321);

(statearr_22341_22355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22328 === (8))){
var inst_22314 = (state_22327[(9)]);
var inst_22317 = cljs.core.deref.call(null,inst_22314);
var state_22327__$1 = state_22327;
var statearr_22342_22356 = state_22327__$1;
(statearr_22342_22356[(2)] = inst_22317);

(statearr_22342_22356[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21745__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21745__auto____0 = (function (){
var statearr_22343 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22343[(0)] = cljs$core$async$reduce_$_state_machine__21745__auto__);

(statearr_22343[(1)] = (1));

return statearr_22343;
});
var cljs$core$async$reduce_$_state_machine__21745__auto____1 = (function (state_22327){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22344){if((e22344 instanceof Object)){
var ex__21748__auto__ = e22344;
var statearr_22345_22357 = state_22327;
(statearr_22345_22357[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22358 = state_22327;
state_22327 = G__22358;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21745__auto__ = function(state_22327){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21745__auto____1.call(this,state_22327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21745__auto____0;
cljs$core$async$reduce_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21745__auto____1;
return cljs$core$async$reduce_$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22346 = f__21842__auto__.call(null);
(statearr_22346[(6)] = c__21841__auto__);

return statearr_22346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));

return c__21841__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22364){
var state_val_22365 = (state_22364[(1)]);
if((state_val_22365 === (1))){
var inst_22359 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22364__$1 = state_22364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22364__$1,(2),inst_22359);
} else {
if((state_val_22365 === (2))){
var inst_22361 = (state_22364[(2)]);
var inst_22362 = f__$1.call(null,inst_22361);
var state_22364__$1 = state_22364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22364__$1,inst_22362);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21745__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21745__auto____0 = (function (){
var statearr_22366 = [null,null,null,null,null,null,null];
(statearr_22366[(0)] = cljs$core$async$transduce_$_state_machine__21745__auto__);

(statearr_22366[(1)] = (1));

return statearr_22366;
});
var cljs$core$async$transduce_$_state_machine__21745__auto____1 = (function (state_22364){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22367){if((e22367 instanceof Object)){
var ex__21748__auto__ = e22367;
var statearr_22368_22370 = state_22364;
(statearr_22368_22370[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22371 = state_22364;
state_22364 = G__22371;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21745__auto__ = function(state_22364){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21745__auto____1.call(this,state_22364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21745__auto____0;
cljs$core$async$transduce_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21745__auto____1;
return cljs$core$async$transduce_$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22369 = f__21842__auto__.call(null);
(statearr_22369[(6)] = c__21841__auto__);

return statearr_22369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));

return c__21841__auto__;
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
var G__22373 = arguments.length;
switch (G__22373) {
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
var c__21841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22398){
var state_val_22399 = (state_22398[(1)]);
if((state_val_22399 === (7))){
var inst_22380 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22400_22421 = state_22398__$1;
(statearr_22400_22421[(2)] = inst_22380);

(statearr_22400_22421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (1))){
var inst_22374 = cljs.core.seq.call(null,coll);
var inst_22375 = inst_22374;
var state_22398__$1 = (function (){var statearr_22401 = state_22398;
(statearr_22401[(7)] = inst_22375);

return statearr_22401;
})();
var statearr_22402_22422 = state_22398__$1;
(statearr_22402_22422[(2)] = null);

(statearr_22402_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (4))){
var inst_22375 = (state_22398[(7)]);
var inst_22378 = cljs.core.first.call(null,inst_22375);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22398__$1,(7),ch,inst_22378);
} else {
if((state_val_22399 === (13))){
var inst_22392 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22403_22423 = state_22398__$1;
(statearr_22403_22423[(2)] = inst_22392);

(statearr_22403_22423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (6))){
var inst_22383 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22383)){
var statearr_22404_22424 = state_22398__$1;
(statearr_22404_22424[(1)] = (8));

} else {
var statearr_22405_22425 = state_22398__$1;
(statearr_22405_22425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (3))){
var inst_22396 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22398__$1,inst_22396);
} else {
if((state_val_22399 === (12))){
var state_22398__$1 = state_22398;
var statearr_22406_22426 = state_22398__$1;
(statearr_22406_22426[(2)] = null);

(statearr_22406_22426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (2))){
var inst_22375 = (state_22398[(7)]);
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22375)){
var statearr_22407_22427 = state_22398__$1;
(statearr_22407_22427[(1)] = (4));

} else {
var statearr_22408_22428 = state_22398__$1;
(statearr_22408_22428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (11))){
var inst_22389 = cljs.core.async.close_BANG_.call(null,ch);
var state_22398__$1 = state_22398;
var statearr_22409_22429 = state_22398__$1;
(statearr_22409_22429[(2)] = inst_22389);

(statearr_22409_22429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (9))){
var state_22398__$1 = state_22398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22410_22430 = state_22398__$1;
(statearr_22410_22430[(1)] = (11));

} else {
var statearr_22411_22431 = state_22398__$1;
(statearr_22411_22431[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (5))){
var inst_22375 = (state_22398[(7)]);
var state_22398__$1 = state_22398;
var statearr_22412_22432 = state_22398__$1;
(statearr_22412_22432[(2)] = inst_22375);

(statearr_22412_22432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (10))){
var inst_22394 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22413_22433 = state_22398__$1;
(statearr_22413_22433[(2)] = inst_22394);

(statearr_22413_22433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (8))){
var inst_22375 = (state_22398[(7)]);
var inst_22385 = cljs.core.next.call(null,inst_22375);
var inst_22375__$1 = inst_22385;
var state_22398__$1 = (function (){var statearr_22414 = state_22398;
(statearr_22414[(7)] = inst_22375__$1);

return statearr_22414;
})();
var statearr_22415_22434 = state_22398__$1;
(statearr_22415_22434[(2)] = null);

(statearr_22415_22434[(1)] = (2));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_22416 = [null,null,null,null,null,null,null,null];
(statearr_22416[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_22416[(1)] = (1));

return statearr_22416;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_22398){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22417){if((e22417 instanceof Object)){
var ex__21748__auto__ = e22417;
var statearr_22418_22435 = state_22398;
(statearr_22418_22435[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22436 = state_22398;
state_22398 = G__22436;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_22398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_22398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22419 = f__21842__auto__.call(null);
(statearr_22419[(6)] = c__21841__auto__);

return statearr_22419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));

return c__21841__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_22437 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_22437.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22438 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_22438.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22439 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_22439.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22440 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_22440.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22441 = (function (ch,cs,meta22442){
this.ch = ch;
this.cs = cs;
this.meta22442 = meta22442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22443,meta22442__$1){
var self__ = this;
var _22443__$1 = this;
return (new cljs.core.async.t_cljs$core$async22441(self__.ch,self__.cs,meta22442__$1));
}));

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22443){
var self__ = this;
var _22443__$1 = this;
return self__.meta22442;
}));

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22442","meta22442",1701521301,null)], null);
}));

(cljs.core.async.t_cljs$core$async22441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22441");

(cljs.core.async.t_cljs$core$async22441.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22441.
 */
cljs.core.async.__GT_t_cljs$core$async22441 = (function cljs$core$async$mult_$___GT_t_cljs$core$async22441(ch__$1,cs__$1,meta22442){
return (new cljs.core.async.t_cljs$core$async22441(ch__$1,cs__$1,meta22442));
});

}

return (new cljs.core.async.t_cljs$core$async22441(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21841__auto___22663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22578){
var state_val_22579 = (state_22578[(1)]);
if((state_val_22579 === (7))){
var inst_22574 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22580_22664 = state_22578__$1;
(statearr_22580_22664[(2)] = inst_22574);

(statearr_22580_22664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (20))){
var inst_22477 = (state_22578[(7)]);
var inst_22489 = cljs.core.first.call(null,inst_22477);
var inst_22490 = cljs.core.nth.call(null,inst_22489,(0),null);
var inst_22491 = cljs.core.nth.call(null,inst_22489,(1),null);
var state_22578__$1 = (function (){var statearr_22581 = state_22578;
(statearr_22581[(8)] = inst_22490);

return statearr_22581;
})();
if(cljs.core.truth_(inst_22491)){
var statearr_22582_22665 = state_22578__$1;
(statearr_22582_22665[(1)] = (22));

} else {
var statearr_22583_22666 = state_22578__$1;
(statearr_22583_22666[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (27))){
var inst_22526 = (state_22578[(9)]);
var inst_22519 = (state_22578[(10)]);
var inst_22446 = (state_22578[(11)]);
var inst_22521 = (state_22578[(12)]);
var inst_22526__$1 = cljs.core._nth.call(null,inst_22519,inst_22521);
var inst_22527 = cljs.core.async.put_BANG_.call(null,inst_22526__$1,inst_22446,done);
var state_22578__$1 = (function (){var statearr_22584 = state_22578;
(statearr_22584[(9)] = inst_22526__$1);

return statearr_22584;
})();
if(cljs.core.truth_(inst_22527)){
var statearr_22585_22667 = state_22578__$1;
(statearr_22585_22667[(1)] = (30));

} else {
var statearr_22586_22668 = state_22578__$1;
(statearr_22586_22668[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (1))){
var state_22578__$1 = state_22578;
var statearr_22587_22669 = state_22578__$1;
(statearr_22587_22669[(2)] = null);

(statearr_22587_22669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (24))){
var inst_22477 = (state_22578[(7)]);
var inst_22496 = (state_22578[(2)]);
var inst_22497 = cljs.core.next.call(null,inst_22477);
var inst_22455 = inst_22497;
var inst_22456 = null;
var inst_22457 = (0);
var inst_22458 = (0);
var state_22578__$1 = (function (){var statearr_22588 = state_22578;
(statearr_22588[(13)] = inst_22456);

(statearr_22588[(14)] = inst_22496);

(statearr_22588[(15)] = inst_22457);

(statearr_22588[(16)] = inst_22455);

(statearr_22588[(17)] = inst_22458);

return statearr_22588;
})();
var statearr_22589_22670 = state_22578__$1;
(statearr_22589_22670[(2)] = null);

(statearr_22589_22670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (39))){
var state_22578__$1 = state_22578;
var statearr_22593_22671 = state_22578__$1;
(statearr_22593_22671[(2)] = null);

(statearr_22593_22671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (4))){
var inst_22446 = (state_22578[(11)]);
var inst_22446__$1 = (state_22578[(2)]);
var inst_22447 = (inst_22446__$1 == null);
var state_22578__$1 = (function (){var statearr_22594 = state_22578;
(statearr_22594[(11)] = inst_22446__$1);

return statearr_22594;
})();
if(cljs.core.truth_(inst_22447)){
var statearr_22595_22672 = state_22578__$1;
(statearr_22595_22672[(1)] = (5));

} else {
var statearr_22596_22673 = state_22578__$1;
(statearr_22596_22673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (15))){
var inst_22456 = (state_22578[(13)]);
var inst_22457 = (state_22578[(15)]);
var inst_22455 = (state_22578[(16)]);
var inst_22458 = (state_22578[(17)]);
var inst_22473 = (state_22578[(2)]);
var inst_22474 = (inst_22458 + (1));
var tmp22590 = inst_22456;
var tmp22591 = inst_22457;
var tmp22592 = inst_22455;
var inst_22455__$1 = tmp22592;
var inst_22456__$1 = tmp22590;
var inst_22457__$1 = tmp22591;
var inst_22458__$1 = inst_22474;
var state_22578__$1 = (function (){var statearr_22597 = state_22578;
(statearr_22597[(13)] = inst_22456__$1);

(statearr_22597[(18)] = inst_22473);

(statearr_22597[(15)] = inst_22457__$1);

(statearr_22597[(16)] = inst_22455__$1);

(statearr_22597[(17)] = inst_22458__$1);

return statearr_22597;
})();
var statearr_22598_22674 = state_22578__$1;
(statearr_22598_22674[(2)] = null);

(statearr_22598_22674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (21))){
var inst_22500 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22602_22675 = state_22578__$1;
(statearr_22602_22675[(2)] = inst_22500);

(statearr_22602_22675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (31))){
var inst_22526 = (state_22578[(9)]);
var inst_22530 = done.call(null,null);
var inst_22531 = cljs.core.async.untap_STAR_.call(null,m,inst_22526);
var state_22578__$1 = (function (){var statearr_22603 = state_22578;
(statearr_22603[(19)] = inst_22530);

return statearr_22603;
})();
var statearr_22604_22676 = state_22578__$1;
(statearr_22604_22676[(2)] = inst_22531);

(statearr_22604_22676[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (32))){
var inst_22519 = (state_22578[(10)]);
var inst_22518 = (state_22578[(20)]);
var inst_22520 = (state_22578[(21)]);
var inst_22521 = (state_22578[(12)]);
var inst_22533 = (state_22578[(2)]);
var inst_22534 = (inst_22521 + (1));
var tmp22599 = inst_22519;
var tmp22600 = inst_22518;
var tmp22601 = inst_22520;
var inst_22518__$1 = tmp22600;
var inst_22519__$1 = tmp22599;
var inst_22520__$1 = tmp22601;
var inst_22521__$1 = inst_22534;
var state_22578__$1 = (function (){var statearr_22605 = state_22578;
(statearr_22605[(10)] = inst_22519__$1);

(statearr_22605[(20)] = inst_22518__$1);

(statearr_22605[(21)] = inst_22520__$1);

(statearr_22605[(12)] = inst_22521__$1);

(statearr_22605[(22)] = inst_22533);

return statearr_22605;
})();
var statearr_22606_22677 = state_22578__$1;
(statearr_22606_22677[(2)] = null);

(statearr_22606_22677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (40))){
var inst_22546 = (state_22578[(23)]);
var inst_22550 = done.call(null,null);
var inst_22551 = cljs.core.async.untap_STAR_.call(null,m,inst_22546);
var state_22578__$1 = (function (){var statearr_22607 = state_22578;
(statearr_22607[(24)] = inst_22550);

return statearr_22607;
})();
var statearr_22608_22678 = state_22578__$1;
(statearr_22608_22678[(2)] = inst_22551);

(statearr_22608_22678[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (33))){
var inst_22537 = (state_22578[(25)]);
var inst_22539 = cljs.core.chunked_seq_QMARK_.call(null,inst_22537);
var state_22578__$1 = state_22578;
if(inst_22539){
var statearr_22609_22679 = state_22578__$1;
(statearr_22609_22679[(1)] = (36));

} else {
var statearr_22610_22680 = state_22578__$1;
(statearr_22610_22680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (13))){
var inst_22467 = (state_22578[(26)]);
var inst_22470 = cljs.core.async.close_BANG_.call(null,inst_22467);
var state_22578__$1 = state_22578;
var statearr_22611_22681 = state_22578__$1;
(statearr_22611_22681[(2)] = inst_22470);

(statearr_22611_22681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (22))){
var inst_22490 = (state_22578[(8)]);
var inst_22493 = cljs.core.async.close_BANG_.call(null,inst_22490);
var state_22578__$1 = state_22578;
var statearr_22612_22682 = state_22578__$1;
(statearr_22612_22682[(2)] = inst_22493);

(statearr_22612_22682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (36))){
var inst_22537 = (state_22578[(25)]);
var inst_22541 = cljs.core.chunk_first.call(null,inst_22537);
var inst_22542 = cljs.core.chunk_rest.call(null,inst_22537);
var inst_22543 = cljs.core.count.call(null,inst_22541);
var inst_22518 = inst_22542;
var inst_22519 = inst_22541;
var inst_22520 = inst_22543;
var inst_22521 = (0);
var state_22578__$1 = (function (){var statearr_22613 = state_22578;
(statearr_22613[(10)] = inst_22519);

(statearr_22613[(20)] = inst_22518);

(statearr_22613[(21)] = inst_22520);

(statearr_22613[(12)] = inst_22521);

return statearr_22613;
})();
var statearr_22614_22683 = state_22578__$1;
(statearr_22614_22683[(2)] = null);

(statearr_22614_22683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (41))){
var inst_22537 = (state_22578[(25)]);
var inst_22553 = (state_22578[(2)]);
var inst_22554 = cljs.core.next.call(null,inst_22537);
var inst_22518 = inst_22554;
var inst_22519 = null;
var inst_22520 = (0);
var inst_22521 = (0);
var state_22578__$1 = (function (){var statearr_22615 = state_22578;
(statearr_22615[(10)] = inst_22519);

(statearr_22615[(27)] = inst_22553);

(statearr_22615[(20)] = inst_22518);

(statearr_22615[(21)] = inst_22520);

(statearr_22615[(12)] = inst_22521);

return statearr_22615;
})();
var statearr_22616_22684 = state_22578__$1;
(statearr_22616_22684[(2)] = null);

(statearr_22616_22684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (43))){
var state_22578__$1 = state_22578;
var statearr_22617_22685 = state_22578__$1;
(statearr_22617_22685[(2)] = null);

(statearr_22617_22685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (29))){
var inst_22562 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22618_22686 = state_22578__$1;
(statearr_22618_22686[(2)] = inst_22562);

(statearr_22618_22686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (44))){
var inst_22571 = (state_22578[(2)]);
var state_22578__$1 = (function (){var statearr_22619 = state_22578;
(statearr_22619[(28)] = inst_22571);

return statearr_22619;
})();
var statearr_22620_22687 = state_22578__$1;
(statearr_22620_22687[(2)] = null);

(statearr_22620_22687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (6))){
var inst_22510 = (state_22578[(29)]);
var inst_22509 = cljs.core.deref.call(null,cs);
var inst_22510__$1 = cljs.core.keys.call(null,inst_22509);
var inst_22511 = cljs.core.count.call(null,inst_22510__$1);
var inst_22512 = cljs.core.reset_BANG_.call(null,dctr,inst_22511);
var inst_22517 = cljs.core.seq.call(null,inst_22510__$1);
var inst_22518 = inst_22517;
var inst_22519 = null;
var inst_22520 = (0);
var inst_22521 = (0);
var state_22578__$1 = (function (){var statearr_22621 = state_22578;
(statearr_22621[(30)] = inst_22512);

(statearr_22621[(10)] = inst_22519);

(statearr_22621[(29)] = inst_22510__$1);

(statearr_22621[(20)] = inst_22518);

(statearr_22621[(21)] = inst_22520);

(statearr_22621[(12)] = inst_22521);

return statearr_22621;
})();
var statearr_22622_22688 = state_22578__$1;
(statearr_22622_22688[(2)] = null);

(statearr_22622_22688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (28))){
var inst_22518 = (state_22578[(20)]);
var inst_22537 = (state_22578[(25)]);
var inst_22537__$1 = cljs.core.seq.call(null,inst_22518);
var state_22578__$1 = (function (){var statearr_22623 = state_22578;
(statearr_22623[(25)] = inst_22537__$1);

return statearr_22623;
})();
if(inst_22537__$1){
var statearr_22624_22689 = state_22578__$1;
(statearr_22624_22689[(1)] = (33));

} else {
var statearr_22625_22690 = state_22578__$1;
(statearr_22625_22690[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (25))){
var inst_22520 = (state_22578[(21)]);
var inst_22521 = (state_22578[(12)]);
var inst_22523 = (inst_22521 < inst_22520);
var inst_22524 = inst_22523;
var state_22578__$1 = state_22578;
if(cljs.core.truth_(inst_22524)){
var statearr_22626_22691 = state_22578__$1;
(statearr_22626_22691[(1)] = (27));

} else {
var statearr_22627_22692 = state_22578__$1;
(statearr_22627_22692[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (34))){
var state_22578__$1 = state_22578;
var statearr_22628_22693 = state_22578__$1;
(statearr_22628_22693[(2)] = null);

(statearr_22628_22693[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (17))){
var state_22578__$1 = state_22578;
var statearr_22629_22694 = state_22578__$1;
(statearr_22629_22694[(2)] = null);

(statearr_22629_22694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (3))){
var inst_22576 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22578__$1,inst_22576);
} else {
if((state_val_22579 === (12))){
var inst_22505 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22630_22695 = state_22578__$1;
(statearr_22630_22695[(2)] = inst_22505);

(statearr_22630_22695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (2))){
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,(4),ch);
} else {
if((state_val_22579 === (23))){
var state_22578__$1 = state_22578;
var statearr_22631_22696 = state_22578__$1;
(statearr_22631_22696[(2)] = null);

(statearr_22631_22696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (35))){
var inst_22560 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22632_22697 = state_22578__$1;
(statearr_22632_22697[(2)] = inst_22560);

(statearr_22632_22697[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (19))){
var inst_22477 = (state_22578[(7)]);
var inst_22481 = cljs.core.chunk_first.call(null,inst_22477);
var inst_22482 = cljs.core.chunk_rest.call(null,inst_22477);
var inst_22483 = cljs.core.count.call(null,inst_22481);
var inst_22455 = inst_22482;
var inst_22456 = inst_22481;
var inst_22457 = inst_22483;
var inst_22458 = (0);
var state_22578__$1 = (function (){var statearr_22633 = state_22578;
(statearr_22633[(13)] = inst_22456);

(statearr_22633[(15)] = inst_22457);

(statearr_22633[(16)] = inst_22455);

(statearr_22633[(17)] = inst_22458);

return statearr_22633;
})();
var statearr_22634_22698 = state_22578__$1;
(statearr_22634_22698[(2)] = null);

(statearr_22634_22698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (11))){
var inst_22477 = (state_22578[(7)]);
var inst_22455 = (state_22578[(16)]);
var inst_22477__$1 = cljs.core.seq.call(null,inst_22455);
var state_22578__$1 = (function (){var statearr_22635 = state_22578;
(statearr_22635[(7)] = inst_22477__$1);

return statearr_22635;
})();
if(inst_22477__$1){
var statearr_22636_22699 = state_22578__$1;
(statearr_22636_22699[(1)] = (16));

} else {
var statearr_22637_22700 = state_22578__$1;
(statearr_22637_22700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (9))){
var inst_22507 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22638_22701 = state_22578__$1;
(statearr_22638_22701[(2)] = inst_22507);

(statearr_22638_22701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (5))){
var inst_22453 = cljs.core.deref.call(null,cs);
var inst_22454 = cljs.core.seq.call(null,inst_22453);
var inst_22455 = inst_22454;
var inst_22456 = null;
var inst_22457 = (0);
var inst_22458 = (0);
var state_22578__$1 = (function (){var statearr_22639 = state_22578;
(statearr_22639[(13)] = inst_22456);

(statearr_22639[(15)] = inst_22457);

(statearr_22639[(16)] = inst_22455);

(statearr_22639[(17)] = inst_22458);

return statearr_22639;
})();
var statearr_22640_22702 = state_22578__$1;
(statearr_22640_22702[(2)] = null);

(statearr_22640_22702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (14))){
var state_22578__$1 = state_22578;
var statearr_22641_22703 = state_22578__$1;
(statearr_22641_22703[(2)] = null);

(statearr_22641_22703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (45))){
var inst_22568 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22642_22704 = state_22578__$1;
(statearr_22642_22704[(2)] = inst_22568);

(statearr_22642_22704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (26))){
var inst_22510 = (state_22578[(29)]);
var inst_22564 = (state_22578[(2)]);
var inst_22565 = cljs.core.seq.call(null,inst_22510);
var state_22578__$1 = (function (){var statearr_22643 = state_22578;
(statearr_22643[(31)] = inst_22564);

return statearr_22643;
})();
if(inst_22565){
var statearr_22644_22705 = state_22578__$1;
(statearr_22644_22705[(1)] = (42));

} else {
var statearr_22645_22706 = state_22578__$1;
(statearr_22645_22706[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (16))){
var inst_22477 = (state_22578[(7)]);
var inst_22479 = cljs.core.chunked_seq_QMARK_.call(null,inst_22477);
var state_22578__$1 = state_22578;
if(inst_22479){
var statearr_22646_22707 = state_22578__$1;
(statearr_22646_22707[(1)] = (19));

} else {
var statearr_22647_22708 = state_22578__$1;
(statearr_22647_22708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (38))){
var inst_22557 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22648_22709 = state_22578__$1;
(statearr_22648_22709[(2)] = inst_22557);

(statearr_22648_22709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (30))){
var state_22578__$1 = state_22578;
var statearr_22649_22710 = state_22578__$1;
(statearr_22649_22710[(2)] = null);

(statearr_22649_22710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (10))){
var inst_22456 = (state_22578[(13)]);
var inst_22458 = (state_22578[(17)]);
var inst_22466 = cljs.core._nth.call(null,inst_22456,inst_22458);
var inst_22467 = cljs.core.nth.call(null,inst_22466,(0),null);
var inst_22468 = cljs.core.nth.call(null,inst_22466,(1),null);
var state_22578__$1 = (function (){var statearr_22650 = state_22578;
(statearr_22650[(26)] = inst_22467);

return statearr_22650;
})();
if(cljs.core.truth_(inst_22468)){
var statearr_22651_22711 = state_22578__$1;
(statearr_22651_22711[(1)] = (13));

} else {
var statearr_22652_22712 = state_22578__$1;
(statearr_22652_22712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (18))){
var inst_22503 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22653_22713 = state_22578__$1;
(statearr_22653_22713[(2)] = inst_22503);

(statearr_22653_22713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (42))){
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22578__$1,(45),dchan);
} else {
if((state_val_22579 === (37))){
var inst_22446 = (state_22578[(11)]);
var inst_22546 = (state_22578[(23)]);
var inst_22537 = (state_22578[(25)]);
var inst_22546__$1 = cljs.core.first.call(null,inst_22537);
var inst_22547 = cljs.core.async.put_BANG_.call(null,inst_22546__$1,inst_22446,done);
var state_22578__$1 = (function (){var statearr_22654 = state_22578;
(statearr_22654[(23)] = inst_22546__$1);

return statearr_22654;
})();
if(cljs.core.truth_(inst_22547)){
var statearr_22655_22714 = state_22578__$1;
(statearr_22655_22714[(1)] = (39));

} else {
var statearr_22656_22715 = state_22578__$1;
(statearr_22656_22715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22579 === (8))){
var inst_22457 = (state_22578[(15)]);
var inst_22458 = (state_22578[(17)]);
var inst_22460 = (inst_22458 < inst_22457);
var inst_22461 = inst_22460;
var state_22578__$1 = state_22578;
if(cljs.core.truth_(inst_22461)){
var statearr_22657_22716 = state_22578__$1;
(statearr_22657_22716[(1)] = (10));

} else {
var statearr_22658_22717 = state_22578__$1;
(statearr_22658_22717[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21745__auto__ = null;
var cljs$core$async$mult_$_state_machine__21745__auto____0 = (function (){
var statearr_22659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22659[(0)] = cljs$core$async$mult_$_state_machine__21745__auto__);

(statearr_22659[(1)] = (1));

return statearr_22659;
});
var cljs$core$async$mult_$_state_machine__21745__auto____1 = (function (state_22578){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22660){if((e22660 instanceof Object)){
var ex__21748__auto__ = e22660;
var statearr_22661_22718 = state_22578;
(statearr_22661_22718[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22719 = state_22578;
state_22578 = G__22719;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21745__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21745__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21745__auto____0;
cljs$core$async$mult_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21745__auto____1;
return cljs$core$async$mult_$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22662 = f__21842__auto__.call(null);
(statearr_22662[(6)] = c__21841__auto___22663);

return statearr_22662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var G__22721 = arguments.length;
switch (G__22721) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_22723 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_22723.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22724 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_22724.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22725 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22725.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22726 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_22726.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22727 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22727.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22737 = arguments.length;
var i__4830__auto___22738 = (0);
while(true){
if((i__4830__auto___22738 < len__4829__auto___22737)){
args__4835__auto__.push((arguments[i__4830__auto___22738]));

var G__22739 = (i__4830__auto___22738 + (1));
i__4830__auto___22738 = G__22739;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22732){
var map__22733 = p__22732;
var map__22733__$1 = cljs.core.__destructure_map.call(null,map__22733);
var opts = map__22733__$1;
var statearr_22734_22740 = state;
(statearr_22734_22740[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_22735_22741 = state;
(statearr_22735_22741[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_22736_22742 = state;
(statearr_22736_22742[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22728){
var G__22729 = cljs.core.first.call(null,seq22728);
var seq22728__$1 = cljs.core.next.call(null,seq22728);
var G__22730 = cljs.core.first.call(null,seq22728__$1);
var seq22728__$2 = cljs.core.next.call(null,seq22728__$1);
var G__22731 = cljs.core.first.call(null,seq22728__$2);
var seq22728__$3 = cljs.core.next.call(null,seq22728__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22729,G__22730,G__22731,seq22728__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22743 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22744){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22744 = meta22744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22745,meta22744__$1){
var self__ = this;
var _22745__$1 = this;
return (new cljs.core.async.t_cljs$core$async22743(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22744__$1));
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22745){
var self__ = this;
var _22745__$1 = this;
return self__.meta22744;
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22744","meta22744",2054887793,null)], null);
}));

(cljs.core.async.t_cljs$core$async22743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22743");

(cljs.core.async.t_cljs$core$async22743.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22743.
 */
cljs.core.async.__GT_t_cljs$core$async22743 = (function cljs$core$async$mix_$___GT_t_cljs$core$async22743(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22744){
return (new cljs.core.async.t_cljs$core$async22743(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22744));
});

}

return (new cljs.core.async.t_cljs$core$async22743(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21841__auto___22857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22813){
var state_val_22814 = (state_22813[(1)]);
if((state_val_22814 === (7))){
var inst_22773 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
if(cljs.core.truth_(inst_22773)){
var statearr_22815_22858 = state_22813__$1;
(statearr_22815_22858[(1)] = (8));

} else {
var statearr_22816_22859 = state_22813__$1;
(statearr_22816_22859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (20))){
var inst_22766 = (state_22813[(7)]);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22813__$1,(23),out,inst_22766);
} else {
if((state_val_22814 === (1))){
var inst_22749 = calc_state.call(null);
var inst_22750 = cljs.core.__destructure_map.call(null,inst_22749);
var inst_22751 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22752 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22753 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22754 = inst_22749;
var state_22813__$1 = (function (){var statearr_22817 = state_22813;
(statearr_22817[(8)] = inst_22752);

(statearr_22817[(9)] = inst_22753);

(statearr_22817[(10)] = inst_22754);

(statearr_22817[(11)] = inst_22751);

return statearr_22817;
})();
var statearr_22818_22860 = state_22813__$1;
(statearr_22818_22860[(2)] = null);

(statearr_22818_22860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (24))){
var inst_22757 = (state_22813[(12)]);
var inst_22754 = inst_22757;
var state_22813__$1 = (function (){var statearr_22819 = state_22813;
(statearr_22819[(10)] = inst_22754);

return statearr_22819;
})();
var statearr_22820_22861 = state_22813__$1;
(statearr_22820_22861[(2)] = null);

(statearr_22820_22861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (4))){
var inst_22766 = (state_22813[(7)]);
var inst_22768 = (state_22813[(13)]);
var inst_22765 = (state_22813[(2)]);
var inst_22766__$1 = cljs.core.nth.call(null,inst_22765,(0),null);
var inst_22767 = cljs.core.nth.call(null,inst_22765,(1),null);
var inst_22768__$1 = (inst_22766__$1 == null);
var state_22813__$1 = (function (){var statearr_22821 = state_22813;
(statearr_22821[(7)] = inst_22766__$1);

(statearr_22821[(14)] = inst_22767);

(statearr_22821[(13)] = inst_22768__$1);

return statearr_22821;
})();
if(cljs.core.truth_(inst_22768__$1)){
var statearr_22822_22862 = state_22813__$1;
(statearr_22822_22862[(1)] = (5));

} else {
var statearr_22823_22863 = state_22813__$1;
(statearr_22823_22863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (15))){
var inst_22758 = (state_22813[(15)]);
var inst_22787 = (state_22813[(16)]);
var inst_22787__$1 = cljs.core.empty_QMARK_.call(null,inst_22758);
var state_22813__$1 = (function (){var statearr_22824 = state_22813;
(statearr_22824[(16)] = inst_22787__$1);

return statearr_22824;
})();
if(inst_22787__$1){
var statearr_22825_22864 = state_22813__$1;
(statearr_22825_22864[(1)] = (17));

} else {
var statearr_22826_22865 = state_22813__$1;
(statearr_22826_22865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (21))){
var inst_22757 = (state_22813[(12)]);
var inst_22754 = inst_22757;
var state_22813__$1 = (function (){var statearr_22827 = state_22813;
(statearr_22827[(10)] = inst_22754);

return statearr_22827;
})();
var statearr_22828_22866 = state_22813__$1;
(statearr_22828_22866[(2)] = null);

(statearr_22828_22866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (13))){
var inst_22780 = (state_22813[(2)]);
var inst_22781 = calc_state.call(null);
var inst_22754 = inst_22781;
var state_22813__$1 = (function (){var statearr_22829 = state_22813;
(statearr_22829[(10)] = inst_22754);

(statearr_22829[(17)] = inst_22780);

return statearr_22829;
})();
var statearr_22830_22867 = state_22813__$1;
(statearr_22830_22867[(2)] = null);

(statearr_22830_22867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (22))){
var inst_22807 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22831_22868 = state_22813__$1;
(statearr_22831_22868[(2)] = inst_22807);

(statearr_22831_22868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (6))){
var inst_22767 = (state_22813[(14)]);
var inst_22771 = cljs.core._EQ_.call(null,inst_22767,change);
var state_22813__$1 = state_22813;
var statearr_22832_22869 = state_22813__$1;
(statearr_22832_22869[(2)] = inst_22771);

(statearr_22832_22869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (25))){
var state_22813__$1 = state_22813;
var statearr_22833_22870 = state_22813__$1;
(statearr_22833_22870[(2)] = null);

(statearr_22833_22870[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (17))){
var inst_22759 = (state_22813[(18)]);
var inst_22767 = (state_22813[(14)]);
var inst_22789 = inst_22759.call(null,inst_22767);
var inst_22790 = cljs.core.not.call(null,inst_22789);
var state_22813__$1 = state_22813;
var statearr_22834_22871 = state_22813__$1;
(statearr_22834_22871[(2)] = inst_22790);

(statearr_22834_22871[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (3))){
var inst_22811 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22813__$1,inst_22811);
} else {
if((state_val_22814 === (12))){
var state_22813__$1 = state_22813;
var statearr_22835_22872 = state_22813__$1;
(statearr_22835_22872[(2)] = null);

(statearr_22835_22872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (2))){
var inst_22754 = (state_22813[(10)]);
var inst_22757 = (state_22813[(12)]);
var inst_22757__$1 = cljs.core.__destructure_map.call(null,inst_22754);
var inst_22758 = cljs.core.get.call(null,inst_22757__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22759 = cljs.core.get.call(null,inst_22757__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22760 = cljs.core.get.call(null,inst_22757__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22813__$1 = (function (){var statearr_22836 = state_22813;
(statearr_22836[(15)] = inst_22758);

(statearr_22836[(18)] = inst_22759);

(statearr_22836[(12)] = inst_22757__$1);

return statearr_22836;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22813__$1,(4),inst_22760);
} else {
if((state_val_22814 === (23))){
var inst_22798 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
if(cljs.core.truth_(inst_22798)){
var statearr_22837_22873 = state_22813__$1;
(statearr_22837_22873[(1)] = (24));

} else {
var statearr_22838_22874 = state_22813__$1;
(statearr_22838_22874[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (19))){
var inst_22793 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22839_22875 = state_22813__$1;
(statearr_22839_22875[(2)] = inst_22793);

(statearr_22839_22875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (11))){
var inst_22767 = (state_22813[(14)]);
var inst_22777 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22767);
var state_22813__$1 = state_22813;
var statearr_22840_22876 = state_22813__$1;
(statearr_22840_22876[(2)] = inst_22777);

(statearr_22840_22876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (9))){
var inst_22758 = (state_22813[(15)]);
var inst_22784 = (state_22813[(19)]);
var inst_22767 = (state_22813[(14)]);
var inst_22784__$1 = inst_22758.call(null,inst_22767);
var state_22813__$1 = (function (){var statearr_22841 = state_22813;
(statearr_22841[(19)] = inst_22784__$1);

return statearr_22841;
})();
if(cljs.core.truth_(inst_22784__$1)){
var statearr_22842_22877 = state_22813__$1;
(statearr_22842_22877[(1)] = (14));

} else {
var statearr_22843_22878 = state_22813__$1;
(statearr_22843_22878[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (5))){
var inst_22768 = (state_22813[(13)]);
var state_22813__$1 = state_22813;
var statearr_22844_22879 = state_22813__$1;
(statearr_22844_22879[(2)] = inst_22768);

(statearr_22844_22879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (14))){
var inst_22784 = (state_22813[(19)]);
var state_22813__$1 = state_22813;
var statearr_22845_22880 = state_22813__$1;
(statearr_22845_22880[(2)] = inst_22784);

(statearr_22845_22880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (26))){
var inst_22803 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22846_22881 = state_22813__$1;
(statearr_22846_22881[(2)] = inst_22803);

(statearr_22846_22881[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (16))){
var inst_22795 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
if(cljs.core.truth_(inst_22795)){
var statearr_22847_22882 = state_22813__$1;
(statearr_22847_22882[(1)] = (20));

} else {
var statearr_22848_22883 = state_22813__$1;
(statearr_22848_22883[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (10))){
var inst_22809 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22849_22884 = state_22813__$1;
(statearr_22849_22884[(2)] = inst_22809);

(statearr_22849_22884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (18))){
var inst_22787 = (state_22813[(16)]);
var state_22813__$1 = state_22813;
var statearr_22850_22885 = state_22813__$1;
(statearr_22850_22885[(2)] = inst_22787);

(statearr_22850_22885[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (8))){
var inst_22766 = (state_22813[(7)]);
var inst_22775 = (inst_22766 == null);
var state_22813__$1 = state_22813;
if(cljs.core.truth_(inst_22775)){
var statearr_22851_22886 = state_22813__$1;
(statearr_22851_22886[(1)] = (11));

} else {
var statearr_22852_22887 = state_22813__$1;
(statearr_22852_22887[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__21745__auto__ = null;
var cljs$core$async$mix_$_state_machine__21745__auto____0 = (function (){
var statearr_22853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22853[(0)] = cljs$core$async$mix_$_state_machine__21745__auto__);

(statearr_22853[(1)] = (1));

return statearr_22853;
});
var cljs$core$async$mix_$_state_machine__21745__auto____1 = (function (state_22813){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e22854){if((e22854 instanceof Object)){
var ex__21748__auto__ = e22854;
var statearr_22855_22888 = state_22813;
(statearr_22855_22888[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22889 = state_22813;
state_22813 = G__22889;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21745__auto__ = function(state_22813){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21745__auto____1.call(this,state_22813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21745__auto____0;
cljs$core$async$mix_$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21745__auto____1;
return cljs$core$async$mix_$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_22856 = f__21842__auto__.call(null);
(statearr_22856[(6)] = c__21841__auto___22857);

return statearr_22856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_22892 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_22892.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22893 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_22893.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22894 = (function() {
var G__22895 = null;
var G__22895__1 = (function (p){
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
var G__22895__2 = (function (p,v){
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
G__22895 = function(p,v){
switch(arguments.length){
case 1:
return G__22895__1.call(this,p);
case 2:
return G__22895__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22895.cljs$core$IFn$_invoke$arity$1 = G__22895__1;
G__22895.cljs$core$IFn$_invoke$arity$2 = G__22895__2;
return G__22895;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22891 = arguments.length;
switch (G__22891) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22894.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22894.call(null,p,v);
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
var G__22899 = arguments.length;
switch (G__22899) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__22897_SHARP_){
if(cljs.core.truth_(p1__22897_SHARP_.call(null,topic))){
return p1__22897_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22897_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22900 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22901){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22901 = meta22901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22902,meta22901__$1){
var self__ = this;
var _22902__$1 = this;
return (new cljs.core.async.t_cljs$core$async22900(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22901__$1));
}));

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22902){
var self__ = this;
var _22902__$1 = this;
return self__.meta22901;
}));

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22901","meta22901",-2077268061,null)], null);
}));

(cljs.core.async.t_cljs$core$async22900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22900");

(cljs.core.async.t_cljs$core$async22900.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async22900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22900.
 */
cljs.core.async.__GT_t_cljs$core$async22900 = (function cljs$core$async$__GT_t_cljs$core$async22900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22901){
return (new cljs.core.async.t_cljs$core$async22900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22901));
});

}

return (new cljs.core.async.t_cljs$core$async22900(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21841__auto___23020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_22974){
var state_val_22975 = (state_22974[(1)]);
if((state_val_22975 === (7))){
var inst_22970 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22976_23021 = state_22974__$1;
(statearr_22976_23021[(2)] = inst_22970);

(statearr_22976_23021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (20))){
var state_22974__$1 = state_22974;
var statearr_22977_23022 = state_22974__$1;
(statearr_22977_23022[(2)] = null);

(statearr_22977_23022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (1))){
var state_22974__$1 = state_22974;
var statearr_22978_23023 = state_22974__$1;
(statearr_22978_23023[(2)] = null);

(statearr_22978_23023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (24))){
var inst_22953 = (state_22974[(7)]);
var inst_22962 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22953);
var state_22974__$1 = state_22974;
var statearr_22979_23024 = state_22974__$1;
(statearr_22979_23024[(2)] = inst_22962);

(statearr_22979_23024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (4))){
var inst_22905 = (state_22974[(8)]);
var inst_22905__$1 = (state_22974[(2)]);
var inst_22906 = (inst_22905__$1 == null);
var state_22974__$1 = (function (){var statearr_22980 = state_22974;
(statearr_22980[(8)] = inst_22905__$1);

return statearr_22980;
})();
if(cljs.core.truth_(inst_22906)){
var statearr_22981_23025 = state_22974__$1;
(statearr_22981_23025[(1)] = (5));

} else {
var statearr_22982_23026 = state_22974__$1;
(statearr_22982_23026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (15))){
var inst_22947 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22983_23027 = state_22974__$1;
(statearr_22983_23027[(2)] = inst_22947);

(statearr_22983_23027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (21))){
var inst_22967 = (state_22974[(2)]);
var state_22974__$1 = (function (){var statearr_22984 = state_22974;
(statearr_22984[(9)] = inst_22967);

return statearr_22984;
})();
var statearr_22985_23028 = state_22974__$1;
(statearr_22985_23028[(2)] = null);

(statearr_22985_23028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (13))){
var inst_22929 = (state_22974[(10)]);
var inst_22931 = cljs.core.chunked_seq_QMARK_.call(null,inst_22929);
var state_22974__$1 = state_22974;
if(inst_22931){
var statearr_22986_23029 = state_22974__$1;
(statearr_22986_23029[(1)] = (16));

} else {
var statearr_22987_23030 = state_22974__$1;
(statearr_22987_23030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (22))){
var inst_22959 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22959)){
var statearr_22988_23031 = state_22974__$1;
(statearr_22988_23031[(1)] = (23));

} else {
var statearr_22989_23032 = state_22974__$1;
(statearr_22989_23032[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (6))){
var inst_22905 = (state_22974[(8)]);
var inst_22955 = (state_22974[(11)]);
var inst_22953 = (state_22974[(7)]);
var inst_22953__$1 = topic_fn.call(null,inst_22905);
var inst_22954 = cljs.core.deref.call(null,mults);
var inst_22955__$1 = cljs.core.get.call(null,inst_22954,inst_22953__$1);
var state_22974__$1 = (function (){var statearr_22990 = state_22974;
(statearr_22990[(11)] = inst_22955__$1);

(statearr_22990[(7)] = inst_22953__$1);

return statearr_22990;
})();
if(cljs.core.truth_(inst_22955__$1)){
var statearr_22991_23033 = state_22974__$1;
(statearr_22991_23033[(1)] = (19));

} else {
var statearr_22992_23034 = state_22974__$1;
(statearr_22992_23034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (25))){
var inst_22964 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22993_23035 = state_22974__$1;
(statearr_22993_23035[(2)] = inst_22964);

(statearr_22993_23035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (17))){
var inst_22929 = (state_22974[(10)]);
var inst_22938 = cljs.core.first.call(null,inst_22929);
var inst_22939 = cljs.core.async.muxch_STAR_.call(null,inst_22938);
var inst_22940 = cljs.core.async.close_BANG_.call(null,inst_22939);
var inst_22941 = cljs.core.next.call(null,inst_22929);
var inst_22915 = inst_22941;
var inst_22916 = null;
var inst_22917 = (0);
var inst_22918 = (0);
var state_22974__$1 = (function (){var statearr_22994 = state_22974;
(statearr_22994[(12)] = inst_22917);

(statearr_22994[(13)] = inst_22915);

(statearr_22994[(14)] = inst_22940);

(statearr_22994[(15)] = inst_22918);

(statearr_22994[(16)] = inst_22916);

return statearr_22994;
})();
var statearr_22995_23036 = state_22974__$1;
(statearr_22995_23036[(2)] = null);

(statearr_22995_23036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (3))){
var inst_22972 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22974__$1,inst_22972);
} else {
if((state_val_22975 === (12))){
var inst_22949 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22996_23037 = state_22974__$1;
(statearr_22996_23037[(2)] = inst_22949);

(statearr_22996_23037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (2))){
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22974__$1,(4),ch);
} else {
if((state_val_22975 === (23))){
var state_22974__$1 = state_22974;
var statearr_22997_23038 = state_22974__$1;
(statearr_22997_23038[(2)] = null);

(statearr_22997_23038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (19))){
var inst_22905 = (state_22974[(8)]);
var inst_22955 = (state_22974[(11)]);
var inst_22957 = cljs.core.async.muxch_STAR_.call(null,inst_22955);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22974__$1,(22),inst_22957,inst_22905);
} else {
if((state_val_22975 === (11))){
var inst_22929 = (state_22974[(10)]);
var inst_22915 = (state_22974[(13)]);
var inst_22929__$1 = cljs.core.seq.call(null,inst_22915);
var state_22974__$1 = (function (){var statearr_22998 = state_22974;
(statearr_22998[(10)] = inst_22929__$1);

return statearr_22998;
})();
if(inst_22929__$1){
var statearr_22999_23039 = state_22974__$1;
(statearr_22999_23039[(1)] = (13));

} else {
var statearr_23000_23040 = state_22974__$1;
(statearr_23000_23040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (9))){
var inst_22951 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_23001_23041 = state_22974__$1;
(statearr_23001_23041[(2)] = inst_22951);

(statearr_23001_23041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (5))){
var inst_22912 = cljs.core.deref.call(null,mults);
var inst_22913 = cljs.core.vals.call(null,inst_22912);
var inst_22914 = cljs.core.seq.call(null,inst_22913);
var inst_22915 = inst_22914;
var inst_22916 = null;
var inst_22917 = (0);
var inst_22918 = (0);
var state_22974__$1 = (function (){var statearr_23002 = state_22974;
(statearr_23002[(12)] = inst_22917);

(statearr_23002[(13)] = inst_22915);

(statearr_23002[(15)] = inst_22918);

(statearr_23002[(16)] = inst_22916);

return statearr_23002;
})();
var statearr_23003_23042 = state_22974__$1;
(statearr_23003_23042[(2)] = null);

(statearr_23003_23042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (14))){
var state_22974__$1 = state_22974;
var statearr_23007_23043 = state_22974__$1;
(statearr_23007_23043[(2)] = null);

(statearr_23007_23043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (16))){
var inst_22929 = (state_22974[(10)]);
var inst_22933 = cljs.core.chunk_first.call(null,inst_22929);
var inst_22934 = cljs.core.chunk_rest.call(null,inst_22929);
var inst_22935 = cljs.core.count.call(null,inst_22933);
var inst_22915 = inst_22934;
var inst_22916 = inst_22933;
var inst_22917 = inst_22935;
var inst_22918 = (0);
var state_22974__$1 = (function (){var statearr_23008 = state_22974;
(statearr_23008[(12)] = inst_22917);

(statearr_23008[(13)] = inst_22915);

(statearr_23008[(15)] = inst_22918);

(statearr_23008[(16)] = inst_22916);

return statearr_23008;
})();
var statearr_23009_23044 = state_22974__$1;
(statearr_23009_23044[(2)] = null);

(statearr_23009_23044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (10))){
var inst_22917 = (state_22974[(12)]);
var inst_22915 = (state_22974[(13)]);
var inst_22918 = (state_22974[(15)]);
var inst_22916 = (state_22974[(16)]);
var inst_22923 = cljs.core._nth.call(null,inst_22916,inst_22918);
var inst_22924 = cljs.core.async.muxch_STAR_.call(null,inst_22923);
var inst_22925 = cljs.core.async.close_BANG_.call(null,inst_22924);
var inst_22926 = (inst_22918 + (1));
var tmp23004 = inst_22917;
var tmp23005 = inst_22915;
var tmp23006 = inst_22916;
var inst_22915__$1 = tmp23005;
var inst_22916__$1 = tmp23006;
var inst_22917__$1 = tmp23004;
var inst_22918__$1 = inst_22926;
var state_22974__$1 = (function (){var statearr_23010 = state_22974;
(statearr_23010[(12)] = inst_22917__$1);

(statearr_23010[(17)] = inst_22925);

(statearr_23010[(13)] = inst_22915__$1);

(statearr_23010[(15)] = inst_22918__$1);

(statearr_23010[(16)] = inst_22916__$1);

return statearr_23010;
})();
var statearr_23011_23045 = state_22974__$1;
(statearr_23011_23045[(2)] = null);

(statearr_23011_23045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (18))){
var inst_22944 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_23012_23046 = state_22974__$1;
(statearr_23012_23046[(2)] = inst_22944);

(statearr_23012_23046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (8))){
var inst_22917 = (state_22974[(12)]);
var inst_22918 = (state_22974[(15)]);
var inst_22920 = (inst_22918 < inst_22917);
var inst_22921 = inst_22920;
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22921)){
var statearr_23013_23047 = state_22974__$1;
(statearr_23013_23047[(1)] = (10));

} else {
var statearr_23014_23048 = state_22974__$1;
(statearr_23014_23048[(1)] = (11));

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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23015[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23015[(1)] = (1));

return statearr_23015;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_22974){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_22974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23016){if((e23016 instanceof Object)){
var ex__21748__auto__ = e23016;
var statearr_23017_23049 = state_22974;
(statearr_23017_23049[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23050 = state_22974;
state_22974 = G__23050;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23018 = f__21842__auto__.call(null);
(statearr_23018[(6)] = c__21841__auto___23020);

return statearr_23018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var G__23052 = arguments.length;
switch (G__23052) {
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
var G__23055 = arguments.length;
switch (G__23055) {
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
var G__23058 = arguments.length;
switch (G__23058) {
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
var c__21841__auto___23125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23097){
var state_val_23098 = (state_23097[(1)]);
if((state_val_23098 === (7))){
var state_23097__$1 = state_23097;
var statearr_23099_23126 = state_23097__$1;
(statearr_23099_23126[(2)] = null);

(statearr_23099_23126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (1))){
var state_23097__$1 = state_23097;
var statearr_23100_23127 = state_23097__$1;
(statearr_23100_23127[(2)] = null);

(statearr_23100_23127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (4))){
var inst_23061 = (state_23097[(7)]);
var inst_23063 = (inst_23061 < cnt);
var state_23097__$1 = state_23097;
if(cljs.core.truth_(inst_23063)){
var statearr_23101_23128 = state_23097__$1;
(statearr_23101_23128[(1)] = (6));

} else {
var statearr_23102_23129 = state_23097__$1;
(statearr_23102_23129[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (15))){
var inst_23093 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
var statearr_23103_23130 = state_23097__$1;
(statearr_23103_23130[(2)] = inst_23093);

(statearr_23103_23130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (13))){
var inst_23086 = cljs.core.async.close_BANG_.call(null,out);
var state_23097__$1 = state_23097;
var statearr_23104_23131 = state_23097__$1;
(statearr_23104_23131[(2)] = inst_23086);

(statearr_23104_23131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (6))){
var state_23097__$1 = state_23097;
var statearr_23105_23132 = state_23097__$1;
(statearr_23105_23132[(2)] = null);

(statearr_23105_23132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (3))){
var inst_23095 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23097__$1,inst_23095);
} else {
if((state_val_23098 === (12))){
var inst_23083 = (state_23097[(8)]);
var inst_23083__$1 = (state_23097[(2)]);
var inst_23084 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23083__$1);
var state_23097__$1 = (function (){var statearr_23106 = state_23097;
(statearr_23106[(8)] = inst_23083__$1);

return statearr_23106;
})();
if(cljs.core.truth_(inst_23084)){
var statearr_23107_23133 = state_23097__$1;
(statearr_23107_23133[(1)] = (13));

} else {
var statearr_23108_23134 = state_23097__$1;
(statearr_23108_23134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (2))){
var inst_23060 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23061 = (0);
var state_23097__$1 = (function (){var statearr_23109 = state_23097;
(statearr_23109[(9)] = inst_23060);

(statearr_23109[(7)] = inst_23061);

return statearr_23109;
})();
var statearr_23110_23135 = state_23097__$1;
(statearr_23110_23135[(2)] = null);

(statearr_23110_23135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (11))){
var inst_23061 = (state_23097[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23097,(10),Object,null,(9));
var inst_23070 = chs__$1.call(null,inst_23061);
var inst_23071 = done.call(null,inst_23061);
var inst_23072 = cljs.core.async.take_BANG_.call(null,inst_23070,inst_23071);
var state_23097__$1 = state_23097;
var statearr_23111_23136 = state_23097__$1;
(statearr_23111_23136[(2)] = inst_23072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23097__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (9))){
var inst_23061 = (state_23097[(7)]);
var inst_23074 = (state_23097[(2)]);
var inst_23075 = (inst_23061 + (1));
var inst_23061__$1 = inst_23075;
var state_23097__$1 = (function (){var statearr_23112 = state_23097;
(statearr_23112[(7)] = inst_23061__$1);

(statearr_23112[(10)] = inst_23074);

return statearr_23112;
})();
var statearr_23113_23137 = state_23097__$1;
(statearr_23113_23137[(2)] = null);

(statearr_23113_23137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (5))){
var inst_23081 = (state_23097[(2)]);
var state_23097__$1 = (function (){var statearr_23114 = state_23097;
(statearr_23114[(11)] = inst_23081);

return statearr_23114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23097__$1,(12),dchan);
} else {
if((state_val_23098 === (14))){
var inst_23083 = (state_23097[(8)]);
var inst_23088 = cljs.core.apply.call(null,f,inst_23083);
var state_23097__$1 = state_23097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23097__$1,(16),out,inst_23088);
} else {
if((state_val_23098 === (16))){
var inst_23090 = (state_23097[(2)]);
var state_23097__$1 = (function (){var statearr_23115 = state_23097;
(statearr_23115[(12)] = inst_23090);

return statearr_23115;
})();
var statearr_23116_23138 = state_23097__$1;
(statearr_23116_23138[(2)] = null);

(statearr_23116_23138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (10))){
var inst_23065 = (state_23097[(2)]);
var inst_23066 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23097__$1 = (function (){var statearr_23117 = state_23097;
(statearr_23117[(13)] = inst_23065);

return statearr_23117;
})();
var statearr_23118_23139 = state_23097__$1;
(statearr_23118_23139[(2)] = inst_23066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23097__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (8))){
var inst_23079 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
var statearr_23119_23140 = state_23097__$1;
(statearr_23119_23140[(2)] = inst_23079);

(statearr_23119_23140[(1)] = (5));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23120[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23120[(1)] = (1));

return statearr_23120;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23097){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23121){if((e23121 instanceof Object)){
var ex__21748__auto__ = e23121;
var statearr_23122_23141 = state_23097;
(statearr_23122_23141[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23142 = state_23097;
state_23097 = G__23142;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23123 = f__21842__auto__.call(null);
(statearr_23123[(6)] = c__21841__auto___23125);

return statearr_23123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var G__23145 = arguments.length;
switch (G__23145) {
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
var c__21841__auto___23199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23177){
var state_val_23178 = (state_23177[(1)]);
if((state_val_23178 === (7))){
var inst_23156 = (state_23177[(7)]);
var inst_23157 = (state_23177[(8)]);
var inst_23156__$1 = (state_23177[(2)]);
var inst_23157__$1 = cljs.core.nth.call(null,inst_23156__$1,(0),null);
var inst_23158 = cljs.core.nth.call(null,inst_23156__$1,(1),null);
var inst_23159 = (inst_23157__$1 == null);
var state_23177__$1 = (function (){var statearr_23179 = state_23177;
(statearr_23179[(7)] = inst_23156__$1);

(statearr_23179[(9)] = inst_23158);

(statearr_23179[(8)] = inst_23157__$1);

return statearr_23179;
})();
if(cljs.core.truth_(inst_23159)){
var statearr_23180_23200 = state_23177__$1;
(statearr_23180_23200[(1)] = (8));

} else {
var statearr_23181_23201 = state_23177__$1;
(statearr_23181_23201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (1))){
var inst_23146 = cljs.core.vec.call(null,chs);
var inst_23147 = inst_23146;
var state_23177__$1 = (function (){var statearr_23182 = state_23177;
(statearr_23182[(10)] = inst_23147);

return statearr_23182;
})();
var statearr_23183_23202 = state_23177__$1;
(statearr_23183_23202[(2)] = null);

(statearr_23183_23202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (4))){
var inst_23147 = (state_23177[(10)]);
var state_23177__$1 = state_23177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23177__$1,(7),inst_23147);
} else {
if((state_val_23178 === (6))){
var inst_23173 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23184_23203 = state_23177__$1;
(statearr_23184_23203[(2)] = inst_23173);

(statearr_23184_23203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (3))){
var inst_23175 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23177__$1,inst_23175);
} else {
if((state_val_23178 === (2))){
var inst_23147 = (state_23177[(10)]);
var inst_23149 = cljs.core.count.call(null,inst_23147);
var inst_23150 = (inst_23149 > (0));
var state_23177__$1 = state_23177;
if(cljs.core.truth_(inst_23150)){
var statearr_23186_23204 = state_23177__$1;
(statearr_23186_23204[(1)] = (4));

} else {
var statearr_23187_23205 = state_23177__$1;
(statearr_23187_23205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (11))){
var inst_23147 = (state_23177[(10)]);
var inst_23166 = (state_23177[(2)]);
var tmp23185 = inst_23147;
var inst_23147__$1 = tmp23185;
var state_23177__$1 = (function (){var statearr_23188 = state_23177;
(statearr_23188[(11)] = inst_23166);

(statearr_23188[(10)] = inst_23147__$1);

return statearr_23188;
})();
var statearr_23189_23206 = state_23177__$1;
(statearr_23189_23206[(2)] = null);

(statearr_23189_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (9))){
var inst_23157 = (state_23177[(8)]);
var state_23177__$1 = state_23177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23177__$1,(11),out,inst_23157);
} else {
if((state_val_23178 === (5))){
var inst_23171 = cljs.core.async.close_BANG_.call(null,out);
var state_23177__$1 = state_23177;
var statearr_23190_23207 = state_23177__$1;
(statearr_23190_23207[(2)] = inst_23171);

(statearr_23190_23207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (10))){
var inst_23169 = (state_23177[(2)]);
var state_23177__$1 = state_23177;
var statearr_23191_23208 = state_23177__$1;
(statearr_23191_23208[(2)] = inst_23169);

(statearr_23191_23208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23178 === (8))){
var inst_23156 = (state_23177[(7)]);
var inst_23158 = (state_23177[(9)]);
var inst_23157 = (state_23177[(8)]);
var inst_23147 = (state_23177[(10)]);
var inst_23161 = (function (){var cs = inst_23147;
var vec__23152 = inst_23156;
var v = inst_23157;
var c = inst_23158;
return (function (p1__23143_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23143_SHARP_);
});
})();
var inst_23162 = cljs.core.filterv.call(null,inst_23161,inst_23147);
var inst_23147__$1 = inst_23162;
var state_23177__$1 = (function (){var statearr_23192 = state_23177;
(statearr_23192[(10)] = inst_23147__$1);

return statearr_23192;
})();
var statearr_23193_23209 = state_23177__$1;
(statearr_23193_23209[(2)] = null);

(statearr_23193_23209[(1)] = (2));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23194[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23194[(1)] = (1));

return statearr_23194;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23177){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23195){if((e23195 instanceof Object)){
var ex__21748__auto__ = e23195;
var statearr_23196_23210 = state_23177;
(statearr_23196_23210[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23211 = state_23177;
state_23177 = G__23211;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23197 = f__21842__auto__.call(null);
(statearr_23197[(6)] = c__21841__auto___23199);

return statearr_23197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
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
var G__23213 = arguments.length;
switch (G__23213) {
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
var c__21841__auto___23258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23237){
var state_val_23238 = (state_23237[(1)]);
if((state_val_23238 === (7))){
var inst_23219 = (state_23237[(7)]);
var inst_23219__$1 = (state_23237[(2)]);
var inst_23220 = (inst_23219__$1 == null);
var inst_23221 = cljs.core.not.call(null,inst_23220);
var state_23237__$1 = (function (){var statearr_23239 = state_23237;
(statearr_23239[(7)] = inst_23219__$1);

return statearr_23239;
})();
if(inst_23221){
var statearr_23240_23259 = state_23237__$1;
(statearr_23240_23259[(1)] = (8));

} else {
var statearr_23241_23260 = state_23237__$1;
(statearr_23241_23260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (1))){
var inst_23214 = (0);
var state_23237__$1 = (function (){var statearr_23242 = state_23237;
(statearr_23242[(8)] = inst_23214);

return statearr_23242;
})();
var statearr_23243_23261 = state_23237__$1;
(statearr_23243_23261[(2)] = null);

(statearr_23243_23261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (4))){
var state_23237__$1 = state_23237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23237__$1,(7),ch);
} else {
if((state_val_23238 === (6))){
var inst_23232 = (state_23237[(2)]);
var state_23237__$1 = state_23237;
var statearr_23244_23262 = state_23237__$1;
(statearr_23244_23262[(2)] = inst_23232);

(statearr_23244_23262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (3))){
var inst_23234 = (state_23237[(2)]);
var inst_23235 = cljs.core.async.close_BANG_.call(null,out);
var state_23237__$1 = (function (){var statearr_23245 = state_23237;
(statearr_23245[(9)] = inst_23234);

return statearr_23245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23237__$1,inst_23235);
} else {
if((state_val_23238 === (2))){
var inst_23214 = (state_23237[(8)]);
var inst_23216 = (inst_23214 < n);
var state_23237__$1 = state_23237;
if(cljs.core.truth_(inst_23216)){
var statearr_23246_23263 = state_23237__$1;
(statearr_23246_23263[(1)] = (4));

} else {
var statearr_23247_23264 = state_23237__$1;
(statearr_23247_23264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (11))){
var inst_23214 = (state_23237[(8)]);
var inst_23224 = (state_23237[(2)]);
var inst_23225 = (inst_23214 + (1));
var inst_23214__$1 = inst_23225;
var state_23237__$1 = (function (){var statearr_23248 = state_23237;
(statearr_23248[(10)] = inst_23224);

(statearr_23248[(8)] = inst_23214__$1);

return statearr_23248;
})();
var statearr_23249_23265 = state_23237__$1;
(statearr_23249_23265[(2)] = null);

(statearr_23249_23265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (9))){
var state_23237__$1 = state_23237;
var statearr_23250_23266 = state_23237__$1;
(statearr_23250_23266[(2)] = null);

(statearr_23250_23266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (5))){
var state_23237__$1 = state_23237;
var statearr_23251_23267 = state_23237__$1;
(statearr_23251_23267[(2)] = null);

(statearr_23251_23267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (10))){
var inst_23229 = (state_23237[(2)]);
var state_23237__$1 = state_23237;
var statearr_23252_23268 = state_23237__$1;
(statearr_23252_23268[(2)] = inst_23229);

(statearr_23252_23268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (8))){
var inst_23219 = (state_23237[(7)]);
var state_23237__$1 = state_23237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23237__$1,(11),out,inst_23219);
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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23253[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23253[(1)] = (1));

return statearr_23253;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23237){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23254){if((e23254 instanceof Object)){
var ex__21748__auto__ = e23254;
var statearr_23255_23269 = state_23237;
(statearr_23255_23269[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23270 = state_23237;
state_23237 = G__23270;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23256 = f__21842__auto__.call(null);
(statearr_23256[(6)] = c__21841__auto___23258);

return statearr_23256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23272 = (function (f,ch,meta23273){
this.f = f;
this.ch = ch;
this.meta23273 = meta23273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23274,meta23273__$1){
var self__ = this;
var _23274__$1 = this;
return (new cljs.core.async.t_cljs$core$async23272(self__.f,self__.ch,meta23273__$1));
}));

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23274){
var self__ = this;
var _23274__$1 = this;
return self__.meta23273;
}));

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23275 = (function (f,ch,meta23273,_,fn1,meta23276){
this.f = f;
this.ch = ch;
this.meta23273 = meta23273;
this._ = _;
this.fn1 = fn1;
this.meta23276 = meta23276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23277,meta23276__$1){
var self__ = this;
var _23277__$1 = this;
return (new cljs.core.async.t_cljs$core$async23275(self__.f,self__.ch,self__.meta23273,self__._,self__.fn1,meta23276__$1));
}));

(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23277){
var self__ = this;
var _23277__$1 = this;
return self__.meta23276;
}));

(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__23271_SHARP_){
return f1.call(null,(((p1__23271_SHARP_ == null))?null:self__.f.call(null,p1__23271_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async23275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23273","meta23273",-97158658,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23272","cljs.core.async/t_cljs$core$async23272",-330292437,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23276","meta23276",-1906360173,null)], null);
}));

(cljs.core.async.t_cljs$core$async23275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23275");

(cljs.core.async.t_cljs$core$async23275.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23275.
 */
cljs.core.async.__GT_t_cljs$core$async23275 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23275(f__$1,ch__$1,meta23273__$1,___$2,fn1__$1,meta23276){
return (new cljs.core.async.t_cljs$core$async23275(f__$1,ch__$1,meta23273__$1,___$2,fn1__$1,meta23276));
});

}

return (new cljs.core.async.t_cljs$core$async23275(self__.f,self__.ch,self__.meta23273,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23273","meta23273",-97158658,null)], null);
}));

(cljs.core.async.t_cljs$core$async23272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23272");

(cljs.core.async.t_cljs$core$async23272.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23272.
 */
cljs.core.async.__GT_t_cljs$core$async23272 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23272(f__$1,ch__$1,meta23273){
return (new cljs.core.async.t_cljs$core$async23272(f__$1,ch__$1,meta23273));
});

}

return (new cljs.core.async.t_cljs$core$async23272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23278 = (function (f,ch,meta23279){
this.f = f;
this.ch = ch;
this.meta23279 = meta23279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23280,meta23279__$1){
var self__ = this;
var _23280__$1 = this;
return (new cljs.core.async.t_cljs$core$async23278(self__.f,self__.ch,meta23279__$1));
}));

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23280){
var self__ = this;
var _23280__$1 = this;
return self__.meta23279;
}));

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async23278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23279","meta23279",-1844360728,null)], null);
}));

(cljs.core.async.t_cljs$core$async23278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23278");

(cljs.core.async.t_cljs$core$async23278.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23278.
 */
cljs.core.async.__GT_t_cljs$core$async23278 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23278(f__$1,ch__$1,meta23279){
return (new cljs.core.async.t_cljs$core$async23278(f__$1,ch__$1,meta23279));
});

}

return (new cljs.core.async.t_cljs$core$async23278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23281 = (function (p,ch,meta23282){
this.p = p;
this.ch = ch;
this.meta23282 = meta23282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23283,meta23282__$1){
var self__ = this;
var _23283__$1 = this;
return (new cljs.core.async.t_cljs$core$async23281(self__.p,self__.ch,meta23282__$1));
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23283){
var self__ = this;
var _23283__$1 = this;
return self__.meta23282;
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23282","meta23282",478180023,null)], null);
}));

(cljs.core.async.t_cljs$core$async23281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23281");

(cljs.core.async.t_cljs$core$async23281.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async23281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23281.
 */
cljs.core.async.__GT_t_cljs$core$async23281 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23281(p__$1,ch__$1,meta23282){
return (new cljs.core.async.t_cljs$core$async23281(p__$1,ch__$1,meta23282));
});

}

return (new cljs.core.async.t_cljs$core$async23281(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23285 = arguments.length;
switch (G__23285) {
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
var c__21841__auto___23325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23306){
var state_val_23307 = (state_23306[(1)]);
if((state_val_23307 === (7))){
var inst_23302 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
var statearr_23308_23326 = state_23306__$1;
(statearr_23308_23326[(2)] = inst_23302);

(statearr_23308_23326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (1))){
var state_23306__$1 = state_23306;
var statearr_23309_23327 = state_23306__$1;
(statearr_23309_23327[(2)] = null);

(statearr_23309_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (4))){
var inst_23288 = (state_23306[(7)]);
var inst_23288__$1 = (state_23306[(2)]);
var inst_23289 = (inst_23288__$1 == null);
var state_23306__$1 = (function (){var statearr_23310 = state_23306;
(statearr_23310[(7)] = inst_23288__$1);

return statearr_23310;
})();
if(cljs.core.truth_(inst_23289)){
var statearr_23311_23328 = state_23306__$1;
(statearr_23311_23328[(1)] = (5));

} else {
var statearr_23312_23329 = state_23306__$1;
(statearr_23312_23329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (6))){
var inst_23288 = (state_23306[(7)]);
var inst_23293 = p.call(null,inst_23288);
var state_23306__$1 = state_23306;
if(cljs.core.truth_(inst_23293)){
var statearr_23313_23330 = state_23306__$1;
(statearr_23313_23330[(1)] = (8));

} else {
var statearr_23314_23331 = state_23306__$1;
(statearr_23314_23331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (3))){
var inst_23304 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23306__$1,inst_23304);
} else {
if((state_val_23307 === (2))){
var state_23306__$1 = state_23306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23306__$1,(4),ch);
} else {
if((state_val_23307 === (11))){
var inst_23296 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
var statearr_23315_23332 = state_23306__$1;
(statearr_23315_23332[(2)] = inst_23296);

(statearr_23315_23332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (9))){
var state_23306__$1 = state_23306;
var statearr_23316_23333 = state_23306__$1;
(statearr_23316_23333[(2)] = null);

(statearr_23316_23333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (5))){
var inst_23291 = cljs.core.async.close_BANG_.call(null,out);
var state_23306__$1 = state_23306;
var statearr_23317_23334 = state_23306__$1;
(statearr_23317_23334[(2)] = inst_23291);

(statearr_23317_23334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (10))){
var inst_23299 = (state_23306[(2)]);
var state_23306__$1 = (function (){var statearr_23318 = state_23306;
(statearr_23318[(8)] = inst_23299);

return statearr_23318;
})();
var statearr_23319_23335 = state_23306__$1;
(statearr_23319_23335[(2)] = null);

(statearr_23319_23335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (8))){
var inst_23288 = (state_23306[(7)]);
var state_23306__$1 = state_23306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23306__$1,(11),out,inst_23288);
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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23320 = [null,null,null,null,null,null,null,null,null];
(statearr_23320[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23320[(1)] = (1));

return statearr_23320;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23306){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23321){if((e23321 instanceof Object)){
var ex__21748__auto__ = e23321;
var statearr_23322_23336 = state_23306;
(statearr_23322_23336[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23337 = state_23306;
state_23306 = G__23337;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23323 = f__21842__auto__.call(null);
(statearr_23323[(6)] = c__21841__auto___23325);

return statearr_23323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23339 = arguments.length;
switch (G__23339) {
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
var c__21841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23402){
var state_val_23403 = (state_23402[(1)]);
if((state_val_23403 === (7))){
var inst_23398 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23404_23442 = state_23402__$1;
(statearr_23404_23442[(2)] = inst_23398);

(statearr_23404_23442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (20))){
var inst_23368 = (state_23402[(7)]);
var inst_23379 = (state_23402[(2)]);
var inst_23380 = cljs.core.next.call(null,inst_23368);
var inst_23354 = inst_23380;
var inst_23355 = null;
var inst_23356 = (0);
var inst_23357 = (0);
var state_23402__$1 = (function (){var statearr_23405 = state_23402;
(statearr_23405[(8)] = inst_23379);

(statearr_23405[(9)] = inst_23357);

(statearr_23405[(10)] = inst_23354);

(statearr_23405[(11)] = inst_23356);

(statearr_23405[(12)] = inst_23355);

return statearr_23405;
})();
var statearr_23406_23443 = state_23402__$1;
(statearr_23406_23443[(2)] = null);

(statearr_23406_23443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (1))){
var state_23402__$1 = state_23402;
var statearr_23407_23444 = state_23402__$1;
(statearr_23407_23444[(2)] = null);

(statearr_23407_23444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (4))){
var inst_23343 = (state_23402[(13)]);
var inst_23343__$1 = (state_23402[(2)]);
var inst_23344 = (inst_23343__$1 == null);
var state_23402__$1 = (function (){var statearr_23408 = state_23402;
(statearr_23408[(13)] = inst_23343__$1);

return statearr_23408;
})();
if(cljs.core.truth_(inst_23344)){
var statearr_23409_23445 = state_23402__$1;
(statearr_23409_23445[(1)] = (5));

} else {
var statearr_23410_23446 = state_23402__$1;
(statearr_23410_23446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (15))){
var state_23402__$1 = state_23402;
var statearr_23414_23447 = state_23402__$1;
(statearr_23414_23447[(2)] = null);

(statearr_23414_23447[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (21))){
var state_23402__$1 = state_23402;
var statearr_23415_23448 = state_23402__$1;
(statearr_23415_23448[(2)] = null);

(statearr_23415_23448[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (13))){
var inst_23357 = (state_23402[(9)]);
var inst_23354 = (state_23402[(10)]);
var inst_23356 = (state_23402[(11)]);
var inst_23355 = (state_23402[(12)]);
var inst_23364 = (state_23402[(2)]);
var inst_23365 = (inst_23357 + (1));
var tmp23411 = inst_23354;
var tmp23412 = inst_23356;
var tmp23413 = inst_23355;
var inst_23354__$1 = tmp23411;
var inst_23355__$1 = tmp23413;
var inst_23356__$1 = tmp23412;
var inst_23357__$1 = inst_23365;
var state_23402__$1 = (function (){var statearr_23416 = state_23402;
(statearr_23416[(14)] = inst_23364);

(statearr_23416[(9)] = inst_23357__$1);

(statearr_23416[(10)] = inst_23354__$1);

(statearr_23416[(11)] = inst_23356__$1);

(statearr_23416[(12)] = inst_23355__$1);

return statearr_23416;
})();
var statearr_23417_23449 = state_23402__$1;
(statearr_23417_23449[(2)] = null);

(statearr_23417_23449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (22))){
var state_23402__$1 = state_23402;
var statearr_23418_23450 = state_23402__$1;
(statearr_23418_23450[(2)] = null);

(statearr_23418_23450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (6))){
var inst_23343 = (state_23402[(13)]);
var inst_23352 = f.call(null,inst_23343);
var inst_23353 = cljs.core.seq.call(null,inst_23352);
var inst_23354 = inst_23353;
var inst_23355 = null;
var inst_23356 = (0);
var inst_23357 = (0);
var state_23402__$1 = (function (){var statearr_23419 = state_23402;
(statearr_23419[(9)] = inst_23357);

(statearr_23419[(10)] = inst_23354);

(statearr_23419[(11)] = inst_23356);

(statearr_23419[(12)] = inst_23355);

return statearr_23419;
})();
var statearr_23420_23451 = state_23402__$1;
(statearr_23420_23451[(2)] = null);

(statearr_23420_23451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (17))){
var inst_23368 = (state_23402[(7)]);
var inst_23372 = cljs.core.chunk_first.call(null,inst_23368);
var inst_23373 = cljs.core.chunk_rest.call(null,inst_23368);
var inst_23374 = cljs.core.count.call(null,inst_23372);
var inst_23354 = inst_23373;
var inst_23355 = inst_23372;
var inst_23356 = inst_23374;
var inst_23357 = (0);
var state_23402__$1 = (function (){var statearr_23421 = state_23402;
(statearr_23421[(9)] = inst_23357);

(statearr_23421[(10)] = inst_23354);

(statearr_23421[(11)] = inst_23356);

(statearr_23421[(12)] = inst_23355);

return statearr_23421;
})();
var statearr_23422_23452 = state_23402__$1;
(statearr_23422_23452[(2)] = null);

(statearr_23422_23452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (3))){
var inst_23400 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23402__$1,inst_23400);
} else {
if((state_val_23403 === (12))){
var inst_23388 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23423_23453 = state_23402__$1;
(statearr_23423_23453[(2)] = inst_23388);

(statearr_23423_23453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (2))){
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23402__$1,(4),in$);
} else {
if((state_val_23403 === (23))){
var inst_23396 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23424_23454 = state_23402__$1;
(statearr_23424_23454[(2)] = inst_23396);

(statearr_23424_23454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (19))){
var inst_23383 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23425_23455 = state_23402__$1;
(statearr_23425_23455[(2)] = inst_23383);

(statearr_23425_23455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (11))){
var inst_23354 = (state_23402[(10)]);
var inst_23368 = (state_23402[(7)]);
var inst_23368__$1 = cljs.core.seq.call(null,inst_23354);
var state_23402__$1 = (function (){var statearr_23426 = state_23402;
(statearr_23426[(7)] = inst_23368__$1);

return statearr_23426;
})();
if(inst_23368__$1){
var statearr_23427_23456 = state_23402__$1;
(statearr_23427_23456[(1)] = (14));

} else {
var statearr_23428_23457 = state_23402__$1;
(statearr_23428_23457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (9))){
var inst_23390 = (state_23402[(2)]);
var inst_23391 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23402__$1 = (function (){var statearr_23429 = state_23402;
(statearr_23429[(15)] = inst_23390);

return statearr_23429;
})();
if(cljs.core.truth_(inst_23391)){
var statearr_23430_23458 = state_23402__$1;
(statearr_23430_23458[(1)] = (21));

} else {
var statearr_23431_23459 = state_23402__$1;
(statearr_23431_23459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (5))){
var inst_23346 = cljs.core.async.close_BANG_.call(null,out);
var state_23402__$1 = state_23402;
var statearr_23432_23460 = state_23402__$1;
(statearr_23432_23460[(2)] = inst_23346);

(statearr_23432_23460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (14))){
var inst_23368 = (state_23402[(7)]);
var inst_23370 = cljs.core.chunked_seq_QMARK_.call(null,inst_23368);
var state_23402__$1 = state_23402;
if(inst_23370){
var statearr_23433_23461 = state_23402__$1;
(statearr_23433_23461[(1)] = (17));

} else {
var statearr_23434_23462 = state_23402__$1;
(statearr_23434_23462[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (16))){
var inst_23386 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23435_23463 = state_23402__$1;
(statearr_23435_23463[(2)] = inst_23386);

(statearr_23435_23463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (10))){
var inst_23357 = (state_23402[(9)]);
var inst_23355 = (state_23402[(12)]);
var inst_23362 = cljs.core._nth.call(null,inst_23355,inst_23357);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23402__$1,(13),out,inst_23362);
} else {
if((state_val_23403 === (18))){
var inst_23368 = (state_23402[(7)]);
var inst_23377 = cljs.core.first.call(null,inst_23368);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23402__$1,(20),out,inst_23377);
} else {
if((state_val_23403 === (8))){
var inst_23357 = (state_23402[(9)]);
var inst_23356 = (state_23402[(11)]);
var inst_23359 = (inst_23357 < inst_23356);
var inst_23360 = inst_23359;
var state_23402__$1 = state_23402;
if(cljs.core.truth_(inst_23360)){
var statearr_23436_23464 = state_23402__$1;
(statearr_23436_23464[(1)] = (10));

} else {
var statearr_23437_23465 = state_23402__$1;
(statearr_23437_23465[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____0 = (function (){
var statearr_23438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23438[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__);

(statearr_23438[(1)] = (1));

return statearr_23438;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____1 = (function (state_23402){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23439){if((e23439 instanceof Object)){
var ex__21748__auto__ = e23439;
var statearr_23440_23466 = state_23402;
(statearr_23440_23466[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23467 = state_23402;
state_23402 = G__23467;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__ = function(state_23402){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____1.call(this,state_23402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21745__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23441 = f__21842__auto__.call(null);
(statearr_23441[(6)] = c__21841__auto__);

return statearr_23441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));

return c__21841__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23469 = arguments.length;
switch (G__23469) {
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
var G__23472 = arguments.length;
switch (G__23472) {
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
var G__23475 = arguments.length;
switch (G__23475) {
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
var c__21841__auto___23522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23499){
var state_val_23500 = (state_23499[(1)]);
if((state_val_23500 === (7))){
var inst_23494 = (state_23499[(2)]);
var state_23499__$1 = state_23499;
var statearr_23501_23523 = state_23499__$1;
(statearr_23501_23523[(2)] = inst_23494);

(statearr_23501_23523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (1))){
var inst_23476 = null;
var state_23499__$1 = (function (){var statearr_23502 = state_23499;
(statearr_23502[(7)] = inst_23476);

return statearr_23502;
})();
var statearr_23503_23524 = state_23499__$1;
(statearr_23503_23524[(2)] = null);

(statearr_23503_23524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (4))){
var inst_23479 = (state_23499[(8)]);
var inst_23479__$1 = (state_23499[(2)]);
var inst_23480 = (inst_23479__$1 == null);
var inst_23481 = cljs.core.not.call(null,inst_23480);
var state_23499__$1 = (function (){var statearr_23504 = state_23499;
(statearr_23504[(8)] = inst_23479__$1);

return statearr_23504;
})();
if(inst_23481){
var statearr_23505_23525 = state_23499__$1;
(statearr_23505_23525[(1)] = (5));

} else {
var statearr_23506_23526 = state_23499__$1;
(statearr_23506_23526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (6))){
var state_23499__$1 = state_23499;
var statearr_23507_23527 = state_23499__$1;
(statearr_23507_23527[(2)] = null);

(statearr_23507_23527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (3))){
var inst_23496 = (state_23499[(2)]);
var inst_23497 = cljs.core.async.close_BANG_.call(null,out);
var state_23499__$1 = (function (){var statearr_23508 = state_23499;
(statearr_23508[(9)] = inst_23496);

return statearr_23508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23499__$1,inst_23497);
} else {
if((state_val_23500 === (2))){
var state_23499__$1 = state_23499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23499__$1,(4),ch);
} else {
if((state_val_23500 === (11))){
var inst_23479 = (state_23499[(8)]);
var inst_23488 = (state_23499[(2)]);
var inst_23476 = inst_23479;
var state_23499__$1 = (function (){var statearr_23509 = state_23499;
(statearr_23509[(10)] = inst_23488);

(statearr_23509[(7)] = inst_23476);

return statearr_23509;
})();
var statearr_23510_23528 = state_23499__$1;
(statearr_23510_23528[(2)] = null);

(statearr_23510_23528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (9))){
var inst_23479 = (state_23499[(8)]);
var state_23499__$1 = state_23499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23499__$1,(11),out,inst_23479);
} else {
if((state_val_23500 === (5))){
var inst_23479 = (state_23499[(8)]);
var inst_23476 = (state_23499[(7)]);
var inst_23483 = cljs.core._EQ_.call(null,inst_23479,inst_23476);
var state_23499__$1 = state_23499;
if(inst_23483){
var statearr_23512_23529 = state_23499__$1;
(statearr_23512_23529[(1)] = (8));

} else {
var statearr_23513_23530 = state_23499__$1;
(statearr_23513_23530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (10))){
var inst_23491 = (state_23499[(2)]);
var state_23499__$1 = state_23499;
var statearr_23514_23531 = state_23499__$1;
(statearr_23514_23531[(2)] = inst_23491);

(statearr_23514_23531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23500 === (8))){
var inst_23476 = (state_23499[(7)]);
var tmp23511 = inst_23476;
var inst_23476__$1 = tmp23511;
var state_23499__$1 = (function (){var statearr_23515 = state_23499;
(statearr_23515[(7)] = inst_23476__$1);

return statearr_23515;
})();
var statearr_23516_23532 = state_23499__$1;
(statearr_23516_23532[(2)] = null);

(statearr_23516_23532[(1)] = (2));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23517[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23517[(1)] = (1));

return statearr_23517;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23499){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23518){if((e23518 instanceof Object)){
var ex__21748__auto__ = e23518;
var statearr_23519_23533 = state_23499;
(statearr_23519_23533[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23534 = state_23499;
state_23499 = G__23534;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23520 = f__21842__auto__.call(null);
(statearr_23520[(6)] = c__21841__auto___23522);

return statearr_23520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23536 = arguments.length;
switch (G__23536) {
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
var c__21841__auto___23602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23574){
var state_val_23575 = (state_23574[(1)]);
if((state_val_23575 === (7))){
var inst_23570 = (state_23574[(2)]);
var state_23574__$1 = state_23574;
var statearr_23576_23603 = state_23574__$1;
(statearr_23576_23603[(2)] = inst_23570);

(statearr_23576_23603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (1))){
var inst_23537 = (new Array(n));
var inst_23538 = inst_23537;
var inst_23539 = (0);
var state_23574__$1 = (function (){var statearr_23577 = state_23574;
(statearr_23577[(7)] = inst_23538);

(statearr_23577[(8)] = inst_23539);

return statearr_23577;
})();
var statearr_23578_23604 = state_23574__$1;
(statearr_23578_23604[(2)] = null);

(statearr_23578_23604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (4))){
var inst_23542 = (state_23574[(9)]);
var inst_23542__$1 = (state_23574[(2)]);
var inst_23543 = (inst_23542__$1 == null);
var inst_23544 = cljs.core.not.call(null,inst_23543);
var state_23574__$1 = (function (){var statearr_23579 = state_23574;
(statearr_23579[(9)] = inst_23542__$1);

return statearr_23579;
})();
if(inst_23544){
var statearr_23580_23605 = state_23574__$1;
(statearr_23580_23605[(1)] = (5));

} else {
var statearr_23581_23606 = state_23574__$1;
(statearr_23581_23606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (15))){
var inst_23564 = (state_23574[(2)]);
var state_23574__$1 = state_23574;
var statearr_23582_23607 = state_23574__$1;
(statearr_23582_23607[(2)] = inst_23564);

(statearr_23582_23607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (13))){
var state_23574__$1 = state_23574;
var statearr_23583_23608 = state_23574__$1;
(statearr_23583_23608[(2)] = null);

(statearr_23583_23608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (6))){
var inst_23539 = (state_23574[(8)]);
var inst_23560 = (inst_23539 > (0));
var state_23574__$1 = state_23574;
if(cljs.core.truth_(inst_23560)){
var statearr_23584_23609 = state_23574__$1;
(statearr_23584_23609[(1)] = (12));

} else {
var statearr_23585_23610 = state_23574__$1;
(statearr_23585_23610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (3))){
var inst_23572 = (state_23574[(2)]);
var state_23574__$1 = state_23574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23574__$1,inst_23572);
} else {
if((state_val_23575 === (12))){
var inst_23538 = (state_23574[(7)]);
var inst_23562 = cljs.core.vec.call(null,inst_23538);
var state_23574__$1 = state_23574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23574__$1,(15),out,inst_23562);
} else {
if((state_val_23575 === (2))){
var state_23574__$1 = state_23574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23574__$1,(4),ch);
} else {
if((state_val_23575 === (11))){
var inst_23554 = (state_23574[(2)]);
var inst_23555 = (new Array(n));
var inst_23538 = inst_23555;
var inst_23539 = (0);
var state_23574__$1 = (function (){var statearr_23586 = state_23574;
(statearr_23586[(7)] = inst_23538);

(statearr_23586[(8)] = inst_23539);

(statearr_23586[(10)] = inst_23554);

return statearr_23586;
})();
var statearr_23587_23611 = state_23574__$1;
(statearr_23587_23611[(2)] = null);

(statearr_23587_23611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (9))){
var inst_23538 = (state_23574[(7)]);
var inst_23552 = cljs.core.vec.call(null,inst_23538);
var state_23574__$1 = state_23574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23574__$1,(11),out,inst_23552);
} else {
if((state_val_23575 === (5))){
var inst_23547 = (state_23574[(11)]);
var inst_23538 = (state_23574[(7)]);
var inst_23542 = (state_23574[(9)]);
var inst_23539 = (state_23574[(8)]);
var inst_23546 = (inst_23538[inst_23539] = inst_23542);
var inst_23547__$1 = (inst_23539 + (1));
var inst_23548 = (inst_23547__$1 < n);
var state_23574__$1 = (function (){var statearr_23588 = state_23574;
(statearr_23588[(11)] = inst_23547__$1);

(statearr_23588[(12)] = inst_23546);

return statearr_23588;
})();
if(cljs.core.truth_(inst_23548)){
var statearr_23589_23612 = state_23574__$1;
(statearr_23589_23612[(1)] = (8));

} else {
var statearr_23590_23613 = state_23574__$1;
(statearr_23590_23613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (14))){
var inst_23567 = (state_23574[(2)]);
var inst_23568 = cljs.core.async.close_BANG_.call(null,out);
var state_23574__$1 = (function (){var statearr_23592 = state_23574;
(statearr_23592[(13)] = inst_23567);

return statearr_23592;
})();
var statearr_23593_23614 = state_23574__$1;
(statearr_23593_23614[(2)] = inst_23568);

(statearr_23593_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (10))){
var inst_23558 = (state_23574[(2)]);
var state_23574__$1 = state_23574;
var statearr_23594_23615 = state_23574__$1;
(statearr_23594_23615[(2)] = inst_23558);

(statearr_23594_23615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23575 === (8))){
var inst_23547 = (state_23574[(11)]);
var inst_23538 = (state_23574[(7)]);
var tmp23591 = inst_23538;
var inst_23538__$1 = tmp23591;
var inst_23539 = inst_23547;
var state_23574__$1 = (function (){var statearr_23595 = state_23574;
(statearr_23595[(7)] = inst_23538__$1);

(statearr_23595[(8)] = inst_23539);

return statearr_23595;
})();
var statearr_23596_23616 = state_23574__$1;
(statearr_23596_23616[(2)] = null);

(statearr_23596_23616[(1)] = (2));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23597[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23597[(1)] = (1));

return statearr_23597;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23574){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23598){if((e23598 instanceof Object)){
var ex__21748__auto__ = e23598;
var statearr_23599_23617 = state_23574;
(statearr_23599_23617[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23618 = state_23574;
state_23574 = G__23618;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23600 = f__21842__auto__.call(null);
(statearr_23600[(6)] = c__21841__auto___23602);

return statearr_23600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23620 = arguments.length;
switch (G__23620) {
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
var c__21841__auto___23697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21842__auto__ = (function (){var switch__21744__auto__ = (function (state_23665){
var state_val_23666 = (state_23665[(1)]);
if((state_val_23666 === (7))){
var inst_23661 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23667_23698 = state_23665__$1;
(statearr_23667_23698[(2)] = inst_23661);

(statearr_23667_23698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (1))){
var inst_23621 = [];
var inst_23622 = inst_23621;
var inst_23623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23665__$1 = (function (){var statearr_23668 = state_23665;
(statearr_23668[(7)] = inst_23623);

(statearr_23668[(8)] = inst_23622);

return statearr_23668;
})();
var statearr_23669_23699 = state_23665__$1;
(statearr_23669_23699[(2)] = null);

(statearr_23669_23699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (4))){
var inst_23626 = (state_23665[(9)]);
var inst_23626__$1 = (state_23665[(2)]);
var inst_23627 = (inst_23626__$1 == null);
var inst_23628 = cljs.core.not.call(null,inst_23627);
var state_23665__$1 = (function (){var statearr_23670 = state_23665;
(statearr_23670[(9)] = inst_23626__$1);

return statearr_23670;
})();
if(inst_23628){
var statearr_23671_23700 = state_23665__$1;
(statearr_23671_23700[(1)] = (5));

} else {
var statearr_23672_23701 = state_23665__$1;
(statearr_23672_23701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (15))){
var inst_23622 = (state_23665[(8)]);
var inst_23653 = cljs.core.vec.call(null,inst_23622);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23665__$1,(18),out,inst_23653);
} else {
if((state_val_23666 === (13))){
var inst_23648 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23673_23702 = state_23665__$1;
(statearr_23673_23702[(2)] = inst_23648);

(statearr_23673_23702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (6))){
var inst_23622 = (state_23665[(8)]);
var inst_23650 = inst_23622.length;
var inst_23651 = (inst_23650 > (0));
var state_23665__$1 = state_23665;
if(cljs.core.truth_(inst_23651)){
var statearr_23674_23703 = state_23665__$1;
(statearr_23674_23703[(1)] = (15));

} else {
var statearr_23675_23704 = state_23665__$1;
(statearr_23675_23704[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (17))){
var inst_23658 = (state_23665[(2)]);
var inst_23659 = cljs.core.async.close_BANG_.call(null,out);
var state_23665__$1 = (function (){var statearr_23676 = state_23665;
(statearr_23676[(10)] = inst_23658);

return statearr_23676;
})();
var statearr_23677_23705 = state_23665__$1;
(statearr_23677_23705[(2)] = inst_23659);

(statearr_23677_23705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (3))){
var inst_23663 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23665__$1,inst_23663);
} else {
if((state_val_23666 === (12))){
var inst_23622 = (state_23665[(8)]);
var inst_23641 = cljs.core.vec.call(null,inst_23622);
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23665__$1,(14),out,inst_23641);
} else {
if((state_val_23666 === (2))){
var state_23665__$1 = state_23665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23665__$1,(4),ch);
} else {
if((state_val_23666 === (11))){
var inst_23630 = (state_23665[(11)]);
var inst_23622 = (state_23665[(8)]);
var inst_23626 = (state_23665[(9)]);
var inst_23638 = inst_23622.push(inst_23626);
var tmp23678 = inst_23622;
var inst_23622__$1 = tmp23678;
var inst_23623 = inst_23630;
var state_23665__$1 = (function (){var statearr_23679 = state_23665;
(statearr_23679[(12)] = inst_23638);

(statearr_23679[(7)] = inst_23623);

(statearr_23679[(8)] = inst_23622__$1);

return statearr_23679;
})();
var statearr_23680_23706 = state_23665__$1;
(statearr_23680_23706[(2)] = null);

(statearr_23680_23706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (9))){
var inst_23623 = (state_23665[(7)]);
var inst_23634 = cljs.core.keyword_identical_QMARK_.call(null,inst_23623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23665__$1 = state_23665;
var statearr_23681_23707 = state_23665__$1;
(statearr_23681_23707[(2)] = inst_23634);

(statearr_23681_23707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (5))){
var inst_23630 = (state_23665[(11)]);
var inst_23623 = (state_23665[(7)]);
var inst_23626 = (state_23665[(9)]);
var inst_23631 = (state_23665[(13)]);
var inst_23630__$1 = f.call(null,inst_23626);
var inst_23631__$1 = cljs.core._EQ_.call(null,inst_23630__$1,inst_23623);
var state_23665__$1 = (function (){var statearr_23682 = state_23665;
(statearr_23682[(11)] = inst_23630__$1);

(statearr_23682[(13)] = inst_23631__$1);

return statearr_23682;
})();
if(inst_23631__$1){
var statearr_23683_23708 = state_23665__$1;
(statearr_23683_23708[(1)] = (8));

} else {
var statearr_23684_23709 = state_23665__$1;
(statearr_23684_23709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (14))){
var inst_23630 = (state_23665[(11)]);
var inst_23626 = (state_23665[(9)]);
var inst_23643 = (state_23665[(2)]);
var inst_23644 = [];
var inst_23645 = inst_23644.push(inst_23626);
var inst_23622 = inst_23644;
var inst_23623 = inst_23630;
var state_23665__$1 = (function (){var statearr_23685 = state_23665;
(statearr_23685[(14)] = inst_23645);

(statearr_23685[(7)] = inst_23623);

(statearr_23685[(8)] = inst_23622);

(statearr_23685[(15)] = inst_23643);

return statearr_23685;
})();
var statearr_23686_23710 = state_23665__$1;
(statearr_23686_23710[(2)] = null);

(statearr_23686_23710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (16))){
var state_23665__$1 = state_23665;
var statearr_23687_23711 = state_23665__$1;
(statearr_23687_23711[(2)] = null);

(statearr_23687_23711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (10))){
var inst_23636 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
if(cljs.core.truth_(inst_23636)){
var statearr_23688_23712 = state_23665__$1;
(statearr_23688_23712[(1)] = (11));

} else {
var statearr_23689_23713 = state_23665__$1;
(statearr_23689_23713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (18))){
var inst_23655 = (state_23665[(2)]);
var state_23665__$1 = state_23665;
var statearr_23690_23714 = state_23665__$1;
(statearr_23690_23714[(2)] = inst_23655);

(statearr_23690_23714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23666 === (8))){
var inst_23631 = (state_23665[(13)]);
var state_23665__$1 = state_23665;
var statearr_23691_23715 = state_23665__$1;
(statearr_23691_23715[(2)] = inst_23631);

(statearr_23691_23715[(1)] = (10));


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
var cljs$core$async$state_machine__21745__auto__ = null;
var cljs$core$async$state_machine__21745__auto____0 = (function (){
var statearr_23692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23692[(0)] = cljs$core$async$state_machine__21745__auto__);

(statearr_23692[(1)] = (1));

return statearr_23692;
});
var cljs$core$async$state_machine__21745__auto____1 = (function (state_23665){
while(true){
var ret_value__21746__auto__ = (function (){try{while(true){
var result__21747__auto__ = switch__21744__auto__.call(null,state_23665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21747__auto__;
}
break;
}
}catch (e23693){if((e23693 instanceof Object)){
var ex__21748__auto__ = e23693;
var statearr_23694_23716 = state_23665;
(statearr_23694_23716[(5)] = ex__21748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23717 = state_23665;
state_23665 = G__23717;
continue;
} else {
return ret_value__21746__auto__;
}
break;
}
});
cljs$core$async$state_machine__21745__auto__ = function(state_23665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21745__auto____1.call(this,state_23665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21745__auto____0;
cljs$core$async$state_machine__21745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21745__auto____1;
return cljs$core$async$state_machine__21745__auto__;
})()
})();
var state__21843__auto__ = (function (){var statearr_23695 = f__21842__auto__.call(null);
(statearr_23695[(6)] = c__21841__auto___23697);

return statearr_23695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21843__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

