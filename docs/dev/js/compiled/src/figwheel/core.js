// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__28760_SHARP_){
var k = f.call(null,p1__28760_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28761){
var vec__28762 = p__28761;
var k = cljs.core.nth.call(null,vec__28762,(0),null);
var v = cljs.core.nth.call(null,vec__28762,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___28766 = arguments.length;
var i__4830__auto___28767 = (0);
while(true){
if((i__4830__auto___28767 < len__4829__auto___28766)){
args__4835__auto__.push((arguments[i__4830__auto___28767]));

var G__28768 = (i__4830__auto___28767 + (1));
i__4830__auto___28767 = G__28768;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq28765){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28765));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__28771){
var map__28772 = p__28771;
var map__28772__$1 = cljs.core.__destructure_map.call(null,map__28772);
var message = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__28770_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28770_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__28769_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__28769_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__28774){
var map__28775 = p__28774;
var map__28775__$1 = cljs.core.__destructure_map.call(null,map__28775);
var message_data = map__28775__$1;
var message = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__28776 = file_excerpt;
var map__28776__$1 = cljs.core.__destructure_map.call(null,map__28776);
var start_line = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__28777 = cljs.core.split_with.call(null,(function (p1__28773_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__28773_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__28777,(0),null);
var end = cljs.core.nth.call(null,vec__28777,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__28780){
var map__28781 = p__28780;
var map__28781__$1 = cljs.core.__destructure_map.call(null,map__28781);
var file = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28782 = "";
var G__28782__$1 = (cljs.core.truth_(file)?[G__28782,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28782);
var G__28782__$2 = (cljs.core.truth_(line)?[G__28782__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28782__$1);
if(cljs.core.truth_((function (){var and__4221__auto__ = line;
if(cljs.core.truth_(and__4221__auto__)){
return column;
} else {
return and__4221__auto__;
}
})())){
return [G__28782__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28782__$2;
}
});
figwheel.core.version_value = (function figwheel$core$version_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__28783_SHARP_){
return parseInt(p1__28783_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e28790){if((e28790 instanceof Error)){
var e = e28790;
return ((100000000000) * (100));
} else {
throw e28790;

}
}});

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = (((figwheel.core.version_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.core.version_value.call(null,"1.10.844")))?(new goog.debug.Logger("Figwheel")):goog.log.getLogger.call(null,"Figwheel"));
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_28838 = (new goog.debug.Console());
var G__28791_28839 = c_28838.getFormatter();
goog.object.set(G__28791_28839,"showAbsoluteTime",false);

goog.object.set(G__28791_28839,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_28838);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__28792 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__28792,"data",(function (){var or__4223__auto__ = data;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__28792;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4221__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4221__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4221__auto__;
}
});

var last_reload_timestamp_28840 = cljs.core.atom.call(null,(0));
var promise_chain_28841 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4221__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_28840) < ts);
if(and__4221__auto__){
return ts;
} else {
return and__4221__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_28840,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_28841.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__28793 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__28794 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__28794);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__28795 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__28796 = null;
var count__28797 = (0);
var i__28798 = (0);
while(true){
if((i__28798 < count__28797)){
var w = cljs.core._nth.call(null,chunk__28796,i__28798);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28842 = seq__28795;
var G__28843 = chunk__28796;
var G__28844 = count__28797;
var G__28845 = (i__28798 + (1));
seq__28795 = G__28842;
chunk__28796 = G__28843;
count__28797 = G__28844;
i__28798 = G__28845;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28795);
if(temp__5720__auto__){
var seq__28795__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28795__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__28795__$1);
var G__28846 = cljs.core.chunk_rest.call(null,seq__28795__$1);
var G__28847 = c__4649__auto__;
var G__28848 = cljs.core.count.call(null,c__4649__auto__);
var G__28849 = (0);
seq__28795 = G__28846;
chunk__28796 = G__28847;
count__28797 = G__28848;
i__28798 = G__28849;
continue;
} else {
var w = cljs.core.first.call(null,seq__28795__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28850 = cljs.core.next.call(null,seq__28795__$1);
var G__28851 = null;
var G__28852 = (0);
var G__28853 = (0);
seq__28795 = G__28850;
chunk__28796 = G__28851;
count__28797 = G__28852;
i__28798 = G__28853;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__28793);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_28841.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__28799 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__28800 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__28800);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__28799);
}}));
} else {
return promise_chain_28841.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4223__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4221__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4221__auto____$1){
var or__4223__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4835__auto__ = [];
var len__4829__auto___28854 = arguments.length;
var i__4830__auto___28855 = (0);
while(true){
if((i__4830__auto___28855 < len__4829__auto___28854)){
args__4835__auto__.push((arguments[i__4830__auto___28855]));

var G__28856 = (i__4830__auto___28855 + (1));
i__4830__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__28803){
var vec__28804 = p__28803;
var n = cljs.core.nth.call(null,vec__28804,(0),null);
var mdata = cljs.core.nth.call(null,vec__28804,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__28807 = cljs.core.seq.call(null,hooks);
var chunk__28808 = null;
var count__28809 = (0);
var i__28810 = (0);
while(true){
if((i__28810 < count__28809)){
var vec__28817 = cljs.core._nth.call(null,chunk__28808,i__28810);
var n = cljs.core.nth.call(null,vec__28817,(0),null);
var f = cljs.core.nth.call(null,vec__28817,(1),null);
var temp__5718__auto___28857 = cljs.core.reduce.call(null,((function (seq__28807,chunk__28808,count__28809,i__28810,vec__28817,n,f,hooks){
return (function (p1__28784_SHARP_,p2__28785_SHARP_){
if(cljs.core.truth_(p1__28784_SHARP_)){
return goog.object.get(p1__28784_SHARP_,p2__28785_SHARP_);
} else {
return null;
}
});})(seq__28807,chunk__28808,count__28809,i__28810,vec__28817,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___28857)){
var hook_28858 = temp__5718__auto___28857;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28858,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28859 = seq__28807;
var G__28860 = chunk__28808;
var G__28861 = count__28809;
var G__28862 = (i__28810 + (1));
seq__28807 = G__28859;
chunk__28808 = G__28860;
count__28809 = G__28861;
i__28810 = G__28862;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28807);
if(temp__5720__auto__){
var seq__28807__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28807__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__28807__$1);
var G__28863 = cljs.core.chunk_rest.call(null,seq__28807__$1);
var G__28864 = c__4649__auto__;
var G__28865 = cljs.core.count.call(null,c__4649__auto__);
var G__28866 = (0);
seq__28807 = G__28863;
chunk__28808 = G__28864;
count__28809 = G__28865;
i__28810 = G__28866;
continue;
} else {
var vec__28820 = cljs.core.first.call(null,seq__28807__$1);
var n = cljs.core.nth.call(null,vec__28820,(0),null);
var f = cljs.core.nth.call(null,vec__28820,(1),null);
var temp__5718__auto___28867 = cljs.core.reduce.call(null,((function (seq__28807,chunk__28808,count__28809,i__28810,vec__28820,n,f,seq__28807__$1,temp__5720__auto__,hooks){
return (function (p1__28784_SHARP_,p2__28785_SHARP_){
if(cljs.core.truth_(p1__28784_SHARP_)){
return goog.object.get(p1__28784_SHARP_,p2__28785_SHARP_);
} else {
return null;
}
});})(seq__28807,chunk__28808,count__28809,i__28810,vec__28820,n,f,seq__28807__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___28867)){
var hook_28868 = temp__5718__auto___28867;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28868,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28869 = cljs.core.next.call(null,seq__28807__$1);
var G__28870 = null;
var G__28871 = (0);
var G__28872 = (0);
seq__28807 = G__28869;
chunk__28808 = G__28870;
count__28809 = G__28871;
i__28810 = G__28872;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq28801){
var G__28802 = cljs.core.first.call(null,seq28801);
var seq28801__$1 = cljs.core.next.call(null,seq28801);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28802,seq28801__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28823){
var vec__28824 = p__28823;
var k = cljs.core.nth.call(null,vec__28824,(0),null);
var v = cljs.core.nth.call(null,vec__28824,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__28786_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__28786_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__28786_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__28787_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__28787_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4221__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4221__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__28788_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__28788_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__28827_28873 = cljs.core.seq.call(null,to_reload);
var chunk__28828_28874 = null;
var count__28829_28875 = (0);
var i__28830_28876 = (0);
while(true){
if((i__28830_28876 < count__28829_28875)){
var ns_28877 = cljs.core._nth.call(null,chunk__28828_28874,i__28830_28876);
goog.require(cljs.core.name.call(null,ns_28877),true);


var G__28878 = seq__28827_28873;
var G__28879 = chunk__28828_28874;
var G__28880 = count__28829_28875;
var G__28881 = (i__28830_28876 + (1));
seq__28827_28873 = G__28878;
chunk__28828_28874 = G__28879;
count__28829_28875 = G__28880;
i__28830_28876 = G__28881;
continue;
} else {
var temp__5720__auto___28882 = cljs.core.seq.call(null,seq__28827_28873);
if(temp__5720__auto___28882){
var seq__28827_28883__$1 = temp__5720__auto___28882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28827_28883__$1)){
var c__4649__auto___28884 = cljs.core.chunk_first.call(null,seq__28827_28883__$1);
var G__28885 = cljs.core.chunk_rest.call(null,seq__28827_28883__$1);
var G__28886 = c__4649__auto___28884;
var G__28887 = cljs.core.count.call(null,c__4649__auto___28884);
var G__28888 = (0);
seq__28827_28873 = G__28885;
chunk__28828_28874 = G__28886;
count__28829_28875 = G__28887;
i__28830_28876 = G__28888;
continue;
} else {
var ns_28889 = cljs.core.first.call(null,seq__28827_28883__$1);
goog.require(cljs.core.name.call(null,ns_28889),true);


var G__28890 = cljs.core.next.call(null,seq__28827_28883__$1);
var G__28891 = null;
var G__28892 = (0);
var G__28893 = (0);
seq__28827_28873 = G__28890;
chunk__28828_28874 = G__28891;
count__28829_28875 = G__28892;
i__28830_28876 = G__28893;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_28894 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_28894);
} else {
setTimeout(after_reload_fn_28894,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__28831 = cljs.core.seq.call(null,warnings);
var chunk__28832 = null;
var count__28833 = (0);
var i__28834 = (0);
while(true){
if((i__28834 < count__28833)){
var warning = cljs.core._nth.call(null,chunk__28832,i__28834);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__28895 = seq__28831;
var G__28896 = chunk__28832;
var G__28897 = count__28833;
var G__28898 = (i__28834 + (1));
seq__28831 = G__28895;
chunk__28832 = G__28896;
count__28833 = G__28897;
i__28834 = G__28898;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28831);
if(temp__5720__auto__){
var seq__28831__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28831__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__28831__$1);
var G__28899 = cljs.core.chunk_rest.call(null,seq__28831__$1);
var G__28900 = c__4649__auto__;
var G__28901 = cljs.core.count.call(null,c__4649__auto__);
var G__28902 = (0);
seq__28831 = G__28899;
chunk__28832 = G__28900;
count__28833 = G__28901;
i__28834 = G__28902;
continue;
} else {
var warning = cljs.core.first.call(null,seq__28831__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__28903 = cljs.core.next.call(null,seq__28831__$1);
var G__28904 = null;
var G__28905 = (0);
var G__28906 = (0);
seq__28831 = G__28903;
chunk__28832 = G__28904;
count__28833 = G__28905;
i__28834 = G__28906;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__28835){
var map__28836 = p__28835;
var map__28836__$1 = cljs.core.__destructure_map.call(null,map__28836);
var exception_data = map__28836__$1;
var file = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__28789_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__28789_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__28837 = "Compile Exception - ";
var G__28837__$1 = (cljs.core.truth_((function (){var or__4223__auto__ = type;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return message;
}
})())?[G__28837,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__28837);
if(cljs.core.truth_(file)){
return [G__28837__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__28837__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
