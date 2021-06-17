// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__26272 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26273 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26273);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___26306 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___26306)){
var new_db_26307 = temp__5720__auto___26306;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_26307);
} else {
}

var seq__26274 = cljs.core.seq.call(null,effects_without_db);
var chunk__26275 = null;
var count__26276 = (0);
var i__26277 = (0);
while(true){
if((i__26277 < count__26276)){
var vec__26284 = cljs.core._nth.call(null,chunk__26275,i__26277);
var effect_key = cljs.core.nth.call(null,vec__26284,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26284,(1),null);
var temp__5718__auto___26308 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26308)){
var effect_fn_26309 = temp__5718__auto___26308;
effect_fn_26309.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26310 = seq__26274;
var G__26311 = chunk__26275;
var G__26312 = count__26276;
var G__26313 = (i__26277 + (1));
seq__26274 = G__26310;
chunk__26275 = G__26311;
count__26276 = G__26312;
i__26277 = G__26313;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26274);
if(temp__5720__auto__){
var seq__26274__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26274__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26274__$1);
var G__26314 = cljs.core.chunk_rest.call(null,seq__26274__$1);
var G__26315 = c__4649__auto__;
var G__26316 = cljs.core.count.call(null,c__4649__auto__);
var G__26317 = (0);
seq__26274 = G__26314;
chunk__26275 = G__26315;
count__26276 = G__26316;
i__26277 = G__26317;
continue;
} else {
var vec__26287 = cljs.core.first.call(null,seq__26274__$1);
var effect_key = cljs.core.nth.call(null,vec__26287,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26287,(1),null);
var temp__5718__auto___26318 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26318)){
var effect_fn_26319 = temp__5718__auto___26318;
effect_fn_26319.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26320 = cljs.core.next.call(null,seq__26274__$1);
var G__26321 = null;
var G__26322 = (0);
var G__26323 = (0);
seq__26274 = G__26320;
chunk__26275 = G__26321;
count__26276 = G__26322;
i__26277 = G__26323;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14209__auto___26324 = re_frame.interop.now.call(null);
var duration__14210__auto___26325 = (end__14209__auto___26324 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14210__auto___26325,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14209__auto___26324);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26272);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___26326 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___26326)){
var new_db_26327 = temp__5720__auto___26326;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_26327);
} else {
}

var seq__26290 = cljs.core.seq.call(null,effects_without_db);
var chunk__26291 = null;
var count__26292 = (0);
var i__26293 = (0);
while(true){
if((i__26293 < count__26292)){
var vec__26300 = cljs.core._nth.call(null,chunk__26291,i__26293);
var effect_key = cljs.core.nth.call(null,vec__26300,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26300,(1),null);
var temp__5718__auto___26328 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26328)){
var effect_fn_26329 = temp__5718__auto___26328;
effect_fn_26329.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26330 = seq__26290;
var G__26331 = chunk__26291;
var G__26332 = count__26292;
var G__26333 = (i__26293 + (1));
seq__26290 = G__26330;
chunk__26291 = G__26331;
count__26292 = G__26332;
i__26293 = G__26333;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26290);
if(temp__5720__auto__){
var seq__26290__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26290__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26290__$1);
var G__26334 = cljs.core.chunk_rest.call(null,seq__26290__$1);
var G__26335 = c__4649__auto__;
var G__26336 = cljs.core.count.call(null,c__4649__auto__);
var G__26337 = (0);
seq__26290 = G__26334;
chunk__26291 = G__26335;
count__26292 = G__26336;
i__26293 = G__26337;
continue;
} else {
var vec__26303 = cljs.core.first.call(null,seq__26290__$1);
var effect_key = cljs.core.nth.call(null,vec__26303,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26303,(1),null);
var temp__5718__auto___26338 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26338)){
var effect_fn_26339 = temp__5718__auto___26338;
effect_fn_26339.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26340 = cljs.core.next.call(null,seq__26290__$1);
var G__26341 = null;
var G__26342 = (0);
var G__26343 = (0);
seq__26290 = G__26340;
chunk__26291 = G__26341;
count__26292 = G__26342;
i__26293 = G__26343;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26344){
var map__26345 = p__26344;
var map__26345__$1 = cljs.core.__destructure_map.call(null,map__26345);
var effect = map__26345__$1;
var ms = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__26346 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__26347 = null;
var count__26348 = (0);
var i__26349 = (0);
while(true){
if((i__26349 < count__26348)){
var effect = cljs.core._nth.call(null,chunk__26347,i__26349);
re_frame.fx.dispatch_later.call(null,effect);


var G__26350 = seq__26346;
var G__26351 = chunk__26347;
var G__26352 = count__26348;
var G__26353 = (i__26349 + (1));
seq__26346 = G__26350;
chunk__26347 = G__26351;
count__26348 = G__26352;
i__26349 = G__26353;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26346);
if(temp__5720__auto__){
var seq__26346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26346__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26346__$1);
var G__26354 = cljs.core.chunk_rest.call(null,seq__26346__$1);
var G__26355 = c__4649__auto__;
var G__26356 = cljs.core.count.call(null,c__4649__auto__);
var G__26357 = (0);
seq__26346 = G__26354;
chunk__26347 = G__26355;
count__26348 = G__26356;
i__26349 = G__26357;
continue;
} else {
var effect = cljs.core.first.call(null,seq__26346__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__26358 = cljs.core.next.call(null,seq__26346__$1);
var G__26359 = null;
var G__26360 = (0);
var G__26361 = (0);
seq__26346 = G__26358;
chunk__26347 = G__26359;
count__26348 = G__26360;
i__26349 = G__26361;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__26362 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26363 = null;
var count__26364 = (0);
var i__26365 = (0);
while(true){
if((i__26365 < count__26364)){
var vec__26372 = cljs.core._nth.call(null,chunk__26363,i__26365);
var effect_key = cljs.core.nth.call(null,vec__26372,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26372,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___26378 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26378)){
var effect_fn_26379 = temp__5718__auto___26378;
effect_fn_26379.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__26380 = seq__26362;
var G__26381 = chunk__26363;
var G__26382 = count__26364;
var G__26383 = (i__26365 + (1));
seq__26362 = G__26380;
chunk__26363 = G__26381;
count__26364 = G__26382;
i__26365 = G__26383;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26362);
if(temp__5720__auto__){
var seq__26362__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26362__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26362__$1);
var G__26384 = cljs.core.chunk_rest.call(null,seq__26362__$1);
var G__26385 = c__4649__auto__;
var G__26386 = cljs.core.count.call(null,c__4649__auto__);
var G__26387 = (0);
seq__26362 = G__26384;
chunk__26363 = G__26385;
count__26364 = G__26386;
i__26365 = G__26387;
continue;
} else {
var vec__26375 = cljs.core.first.call(null,seq__26362__$1);
var effect_key = cljs.core.nth.call(null,vec__26375,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26375,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___26388 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26388)){
var effect_fn_26389 = temp__5718__auto___26388;
effect_fn_26389.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__26390 = cljs.core.next.call(null,seq__26362__$1);
var G__26391 = null;
var G__26392 = (0);
var G__26393 = (0);
seq__26362 = G__26390;
chunk__26363 = G__26391;
count__26364 = G__26392;
i__26365 = G__26393;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__26394 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__26395 = null;
var count__26396 = (0);
var i__26397 = (0);
while(true){
if((i__26397 < count__26396)){
var event = cljs.core._nth.call(null,chunk__26395,i__26397);
re_frame.router.dispatch.call(null,event);


var G__26398 = seq__26394;
var G__26399 = chunk__26395;
var G__26400 = count__26396;
var G__26401 = (i__26397 + (1));
seq__26394 = G__26398;
chunk__26395 = G__26399;
count__26396 = G__26400;
i__26397 = G__26401;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26394);
if(temp__5720__auto__){
var seq__26394__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26394__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26394__$1);
var G__26402 = cljs.core.chunk_rest.call(null,seq__26394__$1);
var G__26403 = c__4649__auto__;
var G__26404 = cljs.core.count.call(null,c__4649__auto__);
var G__26405 = (0);
seq__26394 = G__26402;
chunk__26395 = G__26403;
count__26396 = G__26404;
i__26397 = G__26405;
continue;
} else {
var event = cljs.core.first.call(null,seq__26394__$1);
re_frame.router.dispatch.call(null,event);


var G__26406 = cljs.core.next.call(null,seq__26394__$1);
var G__26407 = null;
var G__26408 = (0);
var G__26409 = (0);
seq__26394 = G__26406;
chunk__26395 = G__26407;
count__26396 = G__26408;
i__26397 = G__26409;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__26410 = cljs.core.seq.call(null,value);
var chunk__26411 = null;
var count__26412 = (0);
var i__26413 = (0);
while(true){
if((i__26413 < count__26412)){
var event = cljs.core._nth.call(null,chunk__26411,i__26413);
clear_event.call(null,event);


var G__26414 = seq__26410;
var G__26415 = chunk__26411;
var G__26416 = count__26412;
var G__26417 = (i__26413 + (1));
seq__26410 = G__26414;
chunk__26411 = G__26415;
count__26412 = G__26416;
i__26413 = G__26417;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26410);
if(temp__5720__auto__){
var seq__26410__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26410__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__26410__$1);
var G__26418 = cljs.core.chunk_rest.call(null,seq__26410__$1);
var G__26419 = c__4649__auto__;
var G__26420 = cljs.core.count.call(null,c__4649__auto__);
var G__26421 = (0);
seq__26410 = G__26418;
chunk__26411 = G__26419;
count__26412 = G__26420;
i__26413 = G__26421;
continue;
} else {
var event = cljs.core.first.call(null,seq__26410__$1);
clear_event.call(null,event);


var G__26422 = cljs.core.next.call(null,seq__26410__$1);
var G__26423 = null;
var G__26424 = (0);
var G__26425 = (0);
seq__26410 = G__26422;
chunk__26411 = G__26423;
count__26412 = G__26424;
i__26413 = G__26425;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
