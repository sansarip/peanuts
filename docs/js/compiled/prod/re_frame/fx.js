// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
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
var _STAR_current_trace_STAR__orig_val__30388 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30389 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30389);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___30422 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___30422)){
var new_db_30423 = temp__5720__auto___30422;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_30423);
} else {
}

var seq__30390 = cljs.core.seq.call(null,effects_without_db);
var chunk__30391 = null;
var count__30392 = (0);
var i__30393 = (0);
while(true){
if((i__30393 < count__30392)){
var vec__30400 = cljs.core._nth.call(null,chunk__30391,i__30393);
var effect_key = cljs.core.nth.call(null,vec__30400,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30400,(1),null);
var temp__5718__auto___30424 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30424)){
var effect_fn_30425 = temp__5718__auto___30424;
effect_fn_30425.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30426 = seq__30390;
var G__30427 = chunk__30391;
var G__30428 = count__30392;
var G__30429 = (i__30393 + (1));
seq__30390 = G__30426;
chunk__30391 = G__30427;
count__30392 = G__30428;
i__30393 = G__30429;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30390);
if(temp__5720__auto__){
var seq__30390__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30390__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30390__$1);
var G__30430 = cljs.core.chunk_rest.call(null,seq__30390__$1);
var G__30431 = c__4649__auto__;
var G__30432 = cljs.core.count.call(null,c__4649__auto__);
var G__30433 = (0);
seq__30390 = G__30430;
chunk__30391 = G__30431;
count__30392 = G__30432;
i__30393 = G__30433;
continue;
} else {
var vec__30403 = cljs.core.first.call(null,seq__30390__$1);
var effect_key = cljs.core.nth.call(null,vec__30403,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30403,(1),null);
var temp__5718__auto___30434 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30434)){
var effect_fn_30435 = temp__5718__auto___30434;
effect_fn_30435.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30436 = cljs.core.next.call(null,seq__30390__$1);
var G__30437 = null;
var G__30438 = (0);
var G__30439 = (0);
seq__30390 = G__30436;
chunk__30391 = G__30437;
count__30392 = G__30438;
i__30393 = G__30439;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__17167__auto___30440 = re_frame.interop.now.call(null);
var duration__17168__auto___30441 = (end__17167__auto___30440 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17168__auto___30441,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__17167__auto___30440);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30388);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___30442 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___30442)){
var new_db_30443 = temp__5720__auto___30442;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_30443);
} else {
}

var seq__30406 = cljs.core.seq.call(null,effects_without_db);
var chunk__30407 = null;
var count__30408 = (0);
var i__30409 = (0);
while(true){
if((i__30409 < count__30408)){
var vec__30416 = cljs.core._nth.call(null,chunk__30407,i__30409);
var effect_key = cljs.core.nth.call(null,vec__30416,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30416,(1),null);
var temp__5718__auto___30444 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30444)){
var effect_fn_30445 = temp__5718__auto___30444;
effect_fn_30445.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30446 = seq__30406;
var G__30447 = chunk__30407;
var G__30448 = count__30408;
var G__30449 = (i__30409 + (1));
seq__30406 = G__30446;
chunk__30407 = G__30447;
count__30408 = G__30448;
i__30409 = G__30449;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30406);
if(temp__5720__auto__){
var seq__30406__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30406__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30406__$1);
var G__30450 = cljs.core.chunk_rest.call(null,seq__30406__$1);
var G__30451 = c__4649__auto__;
var G__30452 = cljs.core.count.call(null,c__4649__auto__);
var G__30453 = (0);
seq__30406 = G__30450;
chunk__30407 = G__30451;
count__30408 = G__30452;
i__30409 = G__30453;
continue;
} else {
var vec__30419 = cljs.core.first.call(null,seq__30406__$1);
var effect_key = cljs.core.nth.call(null,vec__30419,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30419,(1),null);
var temp__5718__auto___30454 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30454)){
var effect_fn_30455 = temp__5718__auto___30454;
effect_fn_30455.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30456 = cljs.core.next.call(null,seq__30406__$1);
var G__30457 = null;
var G__30458 = (0);
var G__30459 = (0);
seq__30406 = G__30456;
chunk__30407 = G__30457;
count__30408 = G__30458;
i__30409 = G__30459;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__30460){
var map__30461 = p__30460;
var map__30461__$1 = cljs.core.__destructure_map.call(null,map__30461);
var effect = map__30461__$1;
var ms = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__30462 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30463 = null;
var count__30464 = (0);
var i__30465 = (0);
while(true){
if((i__30465 < count__30464)){
var effect = cljs.core._nth.call(null,chunk__30463,i__30465);
re_frame.fx.dispatch_later.call(null,effect);


var G__30466 = seq__30462;
var G__30467 = chunk__30463;
var G__30468 = count__30464;
var G__30469 = (i__30465 + (1));
seq__30462 = G__30466;
chunk__30463 = G__30467;
count__30464 = G__30468;
i__30465 = G__30469;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30462);
if(temp__5720__auto__){
var seq__30462__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30462__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30462__$1);
var G__30470 = cljs.core.chunk_rest.call(null,seq__30462__$1);
var G__30471 = c__4649__auto__;
var G__30472 = cljs.core.count.call(null,c__4649__auto__);
var G__30473 = (0);
seq__30462 = G__30470;
chunk__30463 = G__30471;
count__30464 = G__30472;
i__30465 = G__30473;
continue;
} else {
var effect = cljs.core.first.call(null,seq__30462__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__30474 = cljs.core.next.call(null,seq__30462__$1);
var G__30475 = null;
var G__30476 = (0);
var G__30477 = (0);
seq__30462 = G__30474;
chunk__30463 = G__30475;
count__30464 = G__30476;
i__30465 = G__30477;
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
var seq__30478 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30479 = null;
var count__30480 = (0);
var i__30481 = (0);
while(true){
if((i__30481 < count__30480)){
var vec__30488 = cljs.core._nth.call(null,chunk__30479,i__30481);
var effect_key = cljs.core.nth.call(null,vec__30488,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30488,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___30494 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30494)){
var effect_fn_30495 = temp__5718__auto___30494;
effect_fn_30495.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__30496 = seq__30478;
var G__30497 = chunk__30479;
var G__30498 = count__30480;
var G__30499 = (i__30481 + (1));
seq__30478 = G__30496;
chunk__30479 = G__30497;
count__30480 = G__30498;
i__30481 = G__30499;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30478);
if(temp__5720__auto__){
var seq__30478__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30478__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30478__$1);
var G__30500 = cljs.core.chunk_rest.call(null,seq__30478__$1);
var G__30501 = c__4649__auto__;
var G__30502 = cljs.core.count.call(null,c__4649__auto__);
var G__30503 = (0);
seq__30478 = G__30500;
chunk__30479 = G__30501;
count__30480 = G__30502;
i__30481 = G__30503;
continue;
} else {
var vec__30491 = cljs.core.first.call(null,seq__30478__$1);
var effect_key = cljs.core.nth.call(null,vec__30491,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30491,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___30504 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30504)){
var effect_fn_30505 = temp__5718__auto___30504;
effect_fn_30505.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__30506 = cljs.core.next.call(null,seq__30478__$1);
var G__30507 = null;
var G__30508 = (0);
var G__30509 = (0);
seq__30478 = G__30506;
chunk__30479 = G__30507;
count__30480 = G__30508;
i__30481 = G__30509;
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
var seq__30510 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30511 = null;
var count__30512 = (0);
var i__30513 = (0);
while(true){
if((i__30513 < count__30512)){
var event = cljs.core._nth.call(null,chunk__30511,i__30513);
re_frame.router.dispatch.call(null,event);


var G__30514 = seq__30510;
var G__30515 = chunk__30511;
var G__30516 = count__30512;
var G__30517 = (i__30513 + (1));
seq__30510 = G__30514;
chunk__30511 = G__30515;
count__30512 = G__30516;
i__30513 = G__30517;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30510);
if(temp__5720__auto__){
var seq__30510__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30510__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30510__$1);
var G__30518 = cljs.core.chunk_rest.call(null,seq__30510__$1);
var G__30519 = c__4649__auto__;
var G__30520 = cljs.core.count.call(null,c__4649__auto__);
var G__30521 = (0);
seq__30510 = G__30518;
chunk__30511 = G__30519;
count__30512 = G__30520;
i__30513 = G__30521;
continue;
} else {
var event = cljs.core.first.call(null,seq__30510__$1);
re_frame.router.dispatch.call(null,event);


var G__30522 = cljs.core.next.call(null,seq__30510__$1);
var G__30523 = null;
var G__30524 = (0);
var G__30525 = (0);
seq__30510 = G__30522;
chunk__30511 = G__30523;
count__30512 = G__30524;
i__30513 = G__30525;
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
var seq__30526 = cljs.core.seq.call(null,value);
var chunk__30527 = null;
var count__30528 = (0);
var i__30529 = (0);
while(true){
if((i__30529 < count__30528)){
var event = cljs.core._nth.call(null,chunk__30527,i__30529);
clear_event.call(null,event);


var G__30530 = seq__30526;
var G__30531 = chunk__30527;
var G__30532 = count__30528;
var G__30533 = (i__30529 + (1));
seq__30526 = G__30530;
chunk__30527 = G__30531;
count__30528 = G__30532;
i__30529 = G__30533;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30526);
if(temp__5720__auto__){
var seq__30526__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30526__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30526__$1);
var G__30534 = cljs.core.chunk_rest.call(null,seq__30526__$1);
var G__30535 = c__4649__auto__;
var G__30536 = cljs.core.count.call(null,c__4649__auto__);
var G__30537 = (0);
seq__30526 = G__30534;
chunk__30527 = G__30535;
count__30528 = G__30536;
i__30529 = G__30537;
continue;
} else {
var event = cljs.core.first.call(null,seq__30526__$1);
clear_event.call(null,event);


var G__30538 = cljs.core.next.call(null,seq__30526__$1);
var G__30539 = null;
var G__30540 = (0);
var G__30541 = (0);
seq__30526 = G__30538;
chunk__30527 = G__30539;
count__30528 = G__30540;
i__30529 = G__30541;
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
