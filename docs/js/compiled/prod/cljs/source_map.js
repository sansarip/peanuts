// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__14512){
var vec__14513 = p__14512;
var i = cljs.core.nth.call(null,vec__14513,(0),null);
var v = cljs.core.nth.call(null,vec__14513,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__14516 = seg;
var gcol = cljs.core.nth.call(null,vec__14516,(0),null);
var source = cljs.core.nth.call(null,vec__14516,(1),null);
var line = cljs.core.nth.call(null,vec__14516,(2),null);
var col = cljs.core.nth.call(null,vec__14516,(3),null);
var name = cljs.core.nth.call(null,vec__14516,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__14519 = seg;
var gcol = cljs.core.nth.call(null,vec__14519,(0),null);
var source = cljs.core.nth.call(null,vec__14519,(1),null);
var line = cljs.core.nth.call(null,vec__14519,(2),null);
var col = cljs.core.nth.call(null,vec__14519,(3),null);
var name = cljs.core.nth.call(null,vec__14519,(4),null);
var vec__14522 = relseg;
var rgcol = cljs.core.nth.call(null,vec__14522,(0),null);
var rsource = cljs.core.nth.call(null,vec__14522,(1),null);
var rline = cljs.core.nth.call(null,vec__14522,(2),null);
var rcol = cljs.core.nth.call(null,vec__14522,(3),null);
var rname = cljs.core.nth.call(null,vec__14522,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4223__auto__ = col;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__14525 = segmap;
var map__14525__$1 = cljs.core.__destructure_map.call(null,map__14525);
var gcol = cljs.core.get.call(null,map__14525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14525__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14525__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14525__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__14527 = arguments.length;
switch (G__14527) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14531 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14535 = cljs.core.next.call(null,segs__$1);
var G__14536 = nrelseg;
var G__14537 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14535;
relseg__$1 = G__14536;
result__$1 = G__14537;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14531,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14531,(1),null);
var G__14538 = (gline + (1));
var G__14539 = cljs.core.next.call(null,lines__$1);
var G__14540 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14541 = result__$1;
gline = G__14538;
lines__$1 = G__14539;
relseg = G__14540;
result = G__14541;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__14543 = segmap;
var map__14543__$1 = cljs.core.__destructure_map.call(null,map__14543);
var gcol = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__14542_SHARP_){
return cljs.core.conj.call(null,p1__14542_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__14545 = arguments.length;
switch (G__14545) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14549 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14553 = cljs.core.next.call(null,segs__$1);
var G__14554 = nrelseg;
var G__14555 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14553;
relseg__$1 = G__14554;
result__$1 = G__14555;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14549,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14549,(1),null);
var G__14556 = (gline + (1));
var G__14557 = cljs.core.next.call(null,lines__$1);
var G__14558 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14559 = result__$1;
gline = G__14556;
lines__$1 = G__14557;
relseg = G__14558;
result = G__14559;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__14560){
var vec__14561 = p__14560;
var _ = cljs.core.nth.call(null,vec__14561,(0),null);
var source = cljs.core.nth.call(null,vec__14561,(1),null);
var line = cljs.core.nth.call(null,vec__14561,(2),null);
var col = cljs.core.nth.call(null,vec__14561,(3),null);
var name = cljs.core.nth.call(null,vec__14561,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__14564){
var vec__14565 = p__14564;
var gcol = cljs.core.nth.call(null,vec__14565,(0),null);
var sidx = cljs.core.nth.call(null,vec__14565,(1),null);
var line = cljs.core.nth.call(null,vec__14565,(2),null);
var col = cljs.core.nth.call(null,vec__14565,(3),null);
var name = cljs.core.nth.call(null,vec__14565,(4),null);
var seg = vec__14565;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__14568){
var vec__14569 = p__14568;
var _ = cljs.core.nth.call(null,vec__14569,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14569,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__14569,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__14569,(3),null);
var lname = cljs.core.nth.call(null,vec__14569,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__14575 = cljs.core.seq.call(null,infos);
var chunk__14576 = null;
var count__14577 = (0);
var i__14578 = (0);
while(true){
if((i__14578 < count__14577)){
var info = cljs.core._nth.call(null,chunk__14576,i__14578);
var segv_14929 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14930 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14931 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14930 > (lc_14931 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14575,chunk__14576,count__14577,i__14578,segv_14929,gline_14930,lc_14931,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14930 - (lc_14931 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14929], null));
});})(seq__14575,chunk__14576,count__14577,i__14578,segv_14929,gline_14930,lc_14931,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14575,chunk__14576,count__14577,i__14578,segv_14929,gline_14930,lc_14931,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14930], null),cljs.core.conj,segv_14929);
});})(seq__14575,chunk__14576,count__14577,i__14578,segv_14929,gline_14930,lc_14931,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14932 = seq__14575;
var G__14933 = chunk__14576;
var G__14934 = count__14577;
var G__14935 = (i__14578 + (1));
seq__14575 = G__14932;
chunk__14576 = G__14933;
count__14577 = G__14934;
i__14578 = G__14935;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14575);
if(temp__5720__auto__){
var seq__14575__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14575__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__14575__$1);
var G__14936 = cljs.core.chunk_rest.call(null,seq__14575__$1);
var G__14937 = c__4649__auto__;
var G__14938 = cljs.core.count.call(null,c__4649__auto__);
var G__14939 = (0);
seq__14575 = G__14936;
chunk__14576 = G__14937;
count__14577 = G__14938;
i__14578 = G__14939;
continue;
} else {
var info = cljs.core.first.call(null,seq__14575__$1);
var segv_14940 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14941 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14942 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14941 > (lc_14942 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14575,chunk__14576,count__14577,i__14578,segv_14940,gline_14941,lc_14942,info,seq__14575__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14941 - (lc_14942 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14940], null));
});})(seq__14575,chunk__14576,count__14577,i__14578,segv_14940,gline_14941,lc_14942,info,seq__14575__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14575,chunk__14576,count__14577,i__14578,segv_14940,gline_14941,lc_14942,info,seq__14575__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14941], null),cljs.core.conj,segv_14940);
});})(seq__14575,chunk__14576,count__14577,i__14578,segv_14940,gline_14941,lc_14942,info,seq__14575__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14943 = cljs.core.next.call(null,seq__14575__$1);
var G__14944 = null;
var G__14945 = (0);
var G__14946 = (0);
seq__14575 = G__14943;
chunk__14576 = G__14944;
count__14577 = G__14945;
i__14578 = G__14946;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__14579_14947 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14580_14948 = null;
var count__14581_14949 = (0);
var i__14582_14950 = (0);
while(true){
if((i__14582_14950 < count__14581_14949)){
var vec__14755_14951 = cljs.core._nth.call(null,chunk__14580_14948,i__14582_14950);
var source_idx_14952 = cljs.core.nth.call(null,vec__14755_14951,(0),null);
var vec__14758_14953 = cljs.core.nth.call(null,vec__14755_14951,(1),null);
var __14954 = cljs.core.nth.call(null,vec__14758_14953,(0),null);
var lines_14955__$1 = cljs.core.nth.call(null,vec__14758_14953,(1),null);
var seq__14761_14956 = cljs.core.seq.call(null,lines_14955__$1);
var chunk__14762_14957 = null;
var count__14763_14958 = (0);
var i__14764_14959 = (0);
while(true){
if((i__14764_14959 < count__14763_14958)){
var vec__14803_14960 = cljs.core._nth.call(null,chunk__14762_14957,i__14764_14959);
var line_14961 = cljs.core.nth.call(null,vec__14803_14960,(0),null);
var cols_14962 = cljs.core.nth.call(null,vec__14803_14960,(1),null);
var seq__14806_14963 = cljs.core.seq.call(null,cols_14962);
var chunk__14807_14964 = null;
var count__14808_14965 = (0);
var i__14809_14966 = (0);
while(true){
if((i__14809_14966 < count__14808_14965)){
var vec__14816_14967 = cljs.core._nth.call(null,chunk__14807_14964,i__14809_14966);
var col_14968 = cljs.core.nth.call(null,vec__14816_14967,(0),null);
var infos_14969 = cljs.core.nth.call(null,vec__14816_14967,(1),null);
encode_cols.call(null,infos_14969,source_idx_14952,line_14961,col_14968);


var G__14970 = seq__14806_14963;
var G__14971 = chunk__14807_14964;
var G__14972 = count__14808_14965;
var G__14973 = (i__14809_14966 + (1));
seq__14806_14963 = G__14970;
chunk__14807_14964 = G__14971;
count__14808_14965 = G__14972;
i__14809_14966 = G__14973;
continue;
} else {
var temp__5720__auto___14974 = cljs.core.seq.call(null,seq__14806_14963);
if(temp__5720__auto___14974){
var seq__14806_14975__$1 = temp__5720__auto___14974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14806_14975__$1)){
var c__4649__auto___14976 = cljs.core.chunk_first.call(null,seq__14806_14975__$1);
var G__14977 = cljs.core.chunk_rest.call(null,seq__14806_14975__$1);
var G__14978 = c__4649__auto___14976;
var G__14979 = cljs.core.count.call(null,c__4649__auto___14976);
var G__14980 = (0);
seq__14806_14963 = G__14977;
chunk__14807_14964 = G__14978;
count__14808_14965 = G__14979;
i__14809_14966 = G__14980;
continue;
} else {
var vec__14819_14981 = cljs.core.first.call(null,seq__14806_14975__$1);
var col_14982 = cljs.core.nth.call(null,vec__14819_14981,(0),null);
var infos_14983 = cljs.core.nth.call(null,vec__14819_14981,(1),null);
encode_cols.call(null,infos_14983,source_idx_14952,line_14961,col_14982);


var G__14984 = cljs.core.next.call(null,seq__14806_14975__$1);
var G__14985 = null;
var G__14986 = (0);
var G__14987 = (0);
seq__14806_14963 = G__14984;
chunk__14807_14964 = G__14985;
count__14808_14965 = G__14986;
i__14809_14966 = G__14987;
continue;
}
} else {
}
}
break;
}


var G__14988 = seq__14761_14956;
var G__14989 = chunk__14762_14957;
var G__14990 = count__14763_14958;
var G__14991 = (i__14764_14959 + (1));
seq__14761_14956 = G__14988;
chunk__14762_14957 = G__14989;
count__14763_14958 = G__14990;
i__14764_14959 = G__14991;
continue;
} else {
var temp__5720__auto___14992 = cljs.core.seq.call(null,seq__14761_14956);
if(temp__5720__auto___14992){
var seq__14761_14993__$1 = temp__5720__auto___14992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14761_14993__$1)){
var c__4649__auto___14994 = cljs.core.chunk_first.call(null,seq__14761_14993__$1);
var G__14995 = cljs.core.chunk_rest.call(null,seq__14761_14993__$1);
var G__14996 = c__4649__auto___14994;
var G__14997 = cljs.core.count.call(null,c__4649__auto___14994);
var G__14998 = (0);
seq__14761_14956 = G__14995;
chunk__14762_14957 = G__14996;
count__14763_14958 = G__14997;
i__14764_14959 = G__14998;
continue;
} else {
var vec__14822_14999 = cljs.core.first.call(null,seq__14761_14993__$1);
var line_15000 = cljs.core.nth.call(null,vec__14822_14999,(0),null);
var cols_15001 = cljs.core.nth.call(null,vec__14822_14999,(1),null);
var seq__14825_15002 = cljs.core.seq.call(null,cols_15001);
var chunk__14826_15003 = null;
var count__14827_15004 = (0);
var i__14828_15005 = (0);
while(true){
if((i__14828_15005 < count__14827_15004)){
var vec__14835_15006 = cljs.core._nth.call(null,chunk__14826_15003,i__14828_15005);
var col_15007 = cljs.core.nth.call(null,vec__14835_15006,(0),null);
var infos_15008 = cljs.core.nth.call(null,vec__14835_15006,(1),null);
encode_cols.call(null,infos_15008,source_idx_14952,line_15000,col_15007);


var G__15009 = seq__14825_15002;
var G__15010 = chunk__14826_15003;
var G__15011 = count__14827_15004;
var G__15012 = (i__14828_15005 + (1));
seq__14825_15002 = G__15009;
chunk__14826_15003 = G__15010;
count__14827_15004 = G__15011;
i__14828_15005 = G__15012;
continue;
} else {
var temp__5720__auto___15013__$1 = cljs.core.seq.call(null,seq__14825_15002);
if(temp__5720__auto___15013__$1){
var seq__14825_15014__$1 = temp__5720__auto___15013__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14825_15014__$1)){
var c__4649__auto___15015 = cljs.core.chunk_first.call(null,seq__14825_15014__$1);
var G__15016 = cljs.core.chunk_rest.call(null,seq__14825_15014__$1);
var G__15017 = c__4649__auto___15015;
var G__15018 = cljs.core.count.call(null,c__4649__auto___15015);
var G__15019 = (0);
seq__14825_15002 = G__15016;
chunk__14826_15003 = G__15017;
count__14827_15004 = G__15018;
i__14828_15005 = G__15019;
continue;
} else {
var vec__14838_15020 = cljs.core.first.call(null,seq__14825_15014__$1);
var col_15021 = cljs.core.nth.call(null,vec__14838_15020,(0),null);
var infos_15022 = cljs.core.nth.call(null,vec__14838_15020,(1),null);
encode_cols.call(null,infos_15022,source_idx_14952,line_15000,col_15021);


var G__15023 = cljs.core.next.call(null,seq__14825_15014__$1);
var G__15024 = null;
var G__15025 = (0);
var G__15026 = (0);
seq__14825_15002 = G__15023;
chunk__14826_15003 = G__15024;
count__14827_15004 = G__15025;
i__14828_15005 = G__15026;
continue;
}
} else {
}
}
break;
}


var G__15027 = cljs.core.next.call(null,seq__14761_14993__$1);
var G__15028 = null;
var G__15029 = (0);
var G__15030 = (0);
seq__14761_14956 = G__15027;
chunk__14762_14957 = G__15028;
count__14763_14958 = G__15029;
i__14764_14959 = G__15030;
continue;
}
} else {
}
}
break;
}


var G__15031 = seq__14579_14947;
var G__15032 = chunk__14580_14948;
var G__15033 = count__14581_14949;
var G__15034 = (i__14582_14950 + (1));
seq__14579_14947 = G__15031;
chunk__14580_14948 = G__15032;
count__14581_14949 = G__15033;
i__14582_14950 = G__15034;
continue;
} else {
var temp__5720__auto___15035 = cljs.core.seq.call(null,seq__14579_14947);
if(temp__5720__auto___15035){
var seq__14579_15036__$1 = temp__5720__auto___15035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14579_15036__$1)){
var c__4649__auto___15037 = cljs.core.chunk_first.call(null,seq__14579_15036__$1);
var G__15038 = cljs.core.chunk_rest.call(null,seq__14579_15036__$1);
var G__15039 = c__4649__auto___15037;
var G__15040 = cljs.core.count.call(null,c__4649__auto___15037);
var G__15041 = (0);
seq__14579_14947 = G__15038;
chunk__14580_14948 = G__15039;
count__14581_14949 = G__15040;
i__14582_14950 = G__15041;
continue;
} else {
var vec__14841_15042 = cljs.core.first.call(null,seq__14579_15036__$1);
var source_idx_15043 = cljs.core.nth.call(null,vec__14841_15042,(0),null);
var vec__14844_15044 = cljs.core.nth.call(null,vec__14841_15042,(1),null);
var __15045 = cljs.core.nth.call(null,vec__14844_15044,(0),null);
var lines_15046__$1 = cljs.core.nth.call(null,vec__14844_15044,(1),null);
var seq__14847_15047 = cljs.core.seq.call(null,lines_15046__$1);
var chunk__14848_15048 = null;
var count__14849_15049 = (0);
var i__14850_15050 = (0);
while(true){
if((i__14850_15050 < count__14849_15049)){
var vec__14889_15051 = cljs.core._nth.call(null,chunk__14848_15048,i__14850_15050);
var line_15052 = cljs.core.nth.call(null,vec__14889_15051,(0),null);
var cols_15053 = cljs.core.nth.call(null,vec__14889_15051,(1),null);
var seq__14892_15054 = cljs.core.seq.call(null,cols_15053);
var chunk__14893_15055 = null;
var count__14894_15056 = (0);
var i__14895_15057 = (0);
while(true){
if((i__14895_15057 < count__14894_15056)){
var vec__14902_15058 = cljs.core._nth.call(null,chunk__14893_15055,i__14895_15057);
var col_15059 = cljs.core.nth.call(null,vec__14902_15058,(0),null);
var infos_15060 = cljs.core.nth.call(null,vec__14902_15058,(1),null);
encode_cols.call(null,infos_15060,source_idx_15043,line_15052,col_15059);


var G__15061 = seq__14892_15054;
var G__15062 = chunk__14893_15055;
var G__15063 = count__14894_15056;
var G__15064 = (i__14895_15057 + (1));
seq__14892_15054 = G__15061;
chunk__14893_15055 = G__15062;
count__14894_15056 = G__15063;
i__14895_15057 = G__15064;
continue;
} else {
var temp__5720__auto___15065__$1 = cljs.core.seq.call(null,seq__14892_15054);
if(temp__5720__auto___15065__$1){
var seq__14892_15066__$1 = temp__5720__auto___15065__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14892_15066__$1)){
var c__4649__auto___15067 = cljs.core.chunk_first.call(null,seq__14892_15066__$1);
var G__15068 = cljs.core.chunk_rest.call(null,seq__14892_15066__$1);
var G__15069 = c__4649__auto___15067;
var G__15070 = cljs.core.count.call(null,c__4649__auto___15067);
var G__15071 = (0);
seq__14892_15054 = G__15068;
chunk__14893_15055 = G__15069;
count__14894_15056 = G__15070;
i__14895_15057 = G__15071;
continue;
} else {
var vec__14905_15072 = cljs.core.first.call(null,seq__14892_15066__$1);
var col_15073 = cljs.core.nth.call(null,vec__14905_15072,(0),null);
var infos_15074 = cljs.core.nth.call(null,vec__14905_15072,(1),null);
encode_cols.call(null,infos_15074,source_idx_15043,line_15052,col_15073);


var G__15075 = cljs.core.next.call(null,seq__14892_15066__$1);
var G__15076 = null;
var G__15077 = (0);
var G__15078 = (0);
seq__14892_15054 = G__15075;
chunk__14893_15055 = G__15076;
count__14894_15056 = G__15077;
i__14895_15057 = G__15078;
continue;
}
} else {
}
}
break;
}


var G__15079 = seq__14847_15047;
var G__15080 = chunk__14848_15048;
var G__15081 = count__14849_15049;
var G__15082 = (i__14850_15050 + (1));
seq__14847_15047 = G__15079;
chunk__14848_15048 = G__15080;
count__14849_15049 = G__15081;
i__14850_15050 = G__15082;
continue;
} else {
var temp__5720__auto___15083__$1 = cljs.core.seq.call(null,seq__14847_15047);
if(temp__5720__auto___15083__$1){
var seq__14847_15084__$1 = temp__5720__auto___15083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14847_15084__$1)){
var c__4649__auto___15085 = cljs.core.chunk_first.call(null,seq__14847_15084__$1);
var G__15086 = cljs.core.chunk_rest.call(null,seq__14847_15084__$1);
var G__15087 = c__4649__auto___15085;
var G__15088 = cljs.core.count.call(null,c__4649__auto___15085);
var G__15089 = (0);
seq__14847_15047 = G__15086;
chunk__14848_15048 = G__15087;
count__14849_15049 = G__15088;
i__14850_15050 = G__15089;
continue;
} else {
var vec__14908_15090 = cljs.core.first.call(null,seq__14847_15084__$1);
var line_15091 = cljs.core.nth.call(null,vec__14908_15090,(0),null);
var cols_15092 = cljs.core.nth.call(null,vec__14908_15090,(1),null);
var seq__14911_15093 = cljs.core.seq.call(null,cols_15092);
var chunk__14912_15094 = null;
var count__14913_15095 = (0);
var i__14914_15096 = (0);
while(true){
if((i__14914_15096 < count__14913_15095)){
var vec__14921_15097 = cljs.core._nth.call(null,chunk__14912_15094,i__14914_15096);
var col_15098 = cljs.core.nth.call(null,vec__14921_15097,(0),null);
var infos_15099 = cljs.core.nth.call(null,vec__14921_15097,(1),null);
encode_cols.call(null,infos_15099,source_idx_15043,line_15091,col_15098);


var G__15100 = seq__14911_15093;
var G__15101 = chunk__14912_15094;
var G__15102 = count__14913_15095;
var G__15103 = (i__14914_15096 + (1));
seq__14911_15093 = G__15100;
chunk__14912_15094 = G__15101;
count__14913_15095 = G__15102;
i__14914_15096 = G__15103;
continue;
} else {
var temp__5720__auto___15104__$2 = cljs.core.seq.call(null,seq__14911_15093);
if(temp__5720__auto___15104__$2){
var seq__14911_15105__$1 = temp__5720__auto___15104__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14911_15105__$1)){
var c__4649__auto___15106 = cljs.core.chunk_first.call(null,seq__14911_15105__$1);
var G__15107 = cljs.core.chunk_rest.call(null,seq__14911_15105__$1);
var G__15108 = c__4649__auto___15106;
var G__15109 = cljs.core.count.call(null,c__4649__auto___15106);
var G__15110 = (0);
seq__14911_15093 = G__15107;
chunk__14912_15094 = G__15108;
count__14913_15095 = G__15109;
i__14914_15096 = G__15110;
continue;
} else {
var vec__14924_15111 = cljs.core.first.call(null,seq__14911_15105__$1);
var col_15112 = cljs.core.nth.call(null,vec__14924_15111,(0),null);
var infos_15113 = cljs.core.nth.call(null,vec__14924_15111,(1),null);
encode_cols.call(null,infos_15113,source_idx_15043,line_15091,col_15112);


var G__15114 = cljs.core.next.call(null,seq__14911_15105__$1);
var G__15115 = null;
var G__15116 = (0);
var G__15117 = (0);
seq__14911_15093 = G__15114;
chunk__14912_15094 = G__15115;
count__14913_15095 = G__15116;
i__14914_15096 = G__15117;
continue;
}
} else {
}
}
break;
}


var G__15118 = cljs.core.next.call(null,seq__14847_15084__$1);
var G__15119 = null;
var G__15120 = (0);
var G__15121 = (0);
seq__14847_15047 = G__15118;
chunk__14848_15048 = G__15119;
count__14849_15049 = G__15120;
i__14850_15050 = G__15121;
continue;
}
} else {
}
}
break;
}


var G__15122 = cljs.core.next.call(null,seq__14579_15036__$1);
var G__15123 = null;
var G__15124 = (0);
var G__15125 = (0);
seq__14579_14947 = G__15122;
chunk__14580_14948 = G__15123;
count__14581_14949 = G__15124;
i__14582_14950 = G__15125;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14927 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__14572_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14572_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__14573_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__14573_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__14574_SHARP_){
return clojure.string.join.call(null,",",p1__14574_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14928 = G__14927;
goog.object.set(G__14928,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14928;
} else {
return G__14927;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__15126 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__15126,(0),null);
var col_map = cljs.core.nth.call(null,vec__15126,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__15129 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__15129,(0),null);
var infos = cljs.core.nth.call(null,vec__15129,(1),null);
var G__15134 = cljs.core.next.call(null,col_map_seq);
var G__15135 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15129,col,infos,vec__15126,line,col_map){
return (function (v,p__15132){
var map__15133 = p__15132;
var map__15133__$1 = cljs.core.__destructure_map.call(null,map__15133);
var gline = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15129,col,infos,vec__15126,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15134;
new_cols = G__15135;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15136 = cljs.core.next.call(null,line_map_seq);
var G__15137 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__15136;
new_lines = G__15137;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__15138_15346 = cljs.core.seq.call(null,reverse_map);
var chunk__15139_15347 = null;
var count__15140_15348 = (0);
var i__15141_15349 = (0);
while(true){
if((i__15141_15349 < count__15140_15348)){
var vec__15244_15350 = cljs.core._nth.call(null,chunk__15139_15347,i__15141_15349);
var line_15351 = cljs.core.nth.call(null,vec__15244_15350,(0),null);
var columns_15352 = cljs.core.nth.call(null,vec__15244_15350,(1),null);
var seq__15247_15353 = cljs.core.seq.call(null,columns_15352);
var chunk__15248_15354 = null;
var count__15249_15355 = (0);
var i__15250_15356 = (0);
while(true){
if((i__15250_15356 < count__15249_15355)){
var vec__15273_15357 = cljs.core._nth.call(null,chunk__15248_15354,i__15250_15356);
var column_15358 = cljs.core.nth.call(null,vec__15273_15357,(0),null);
var column_info_15359 = cljs.core.nth.call(null,vec__15273_15357,(1),null);
var seq__15276_15360 = cljs.core.seq.call(null,column_info_15359);
var chunk__15277_15361 = null;
var count__15278_15362 = (0);
var i__15279_15363 = (0);
while(true){
if((i__15279_15363 < count__15278_15362)){
var map__15282_15364 = cljs.core._nth.call(null,chunk__15277_15361,i__15279_15363);
var map__15282_15365__$1 = cljs.core.__destructure_map.call(null,map__15282_15364);
var gline_15366 = cljs.core.get.call(null,map__15282_15365__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15367 = cljs.core.get.call(null,map__15282_15365__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15368 = cljs.core.get.call(null,map__15282_15365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15366], null),cljs.core.fnil.call(null,((function (seq__15276_15360,chunk__15277_15361,count__15278_15362,i__15279_15363,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15282_15364,map__15282_15365__$1,gline_15366,gcol_15367,name_15368,vec__15273_15357,column_15358,column_info_15359,vec__15244_15350,line_15351,columns_15352,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15367], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15351,new cljs.core.Keyword(null,"col","col",-1959363084),column_15358,new cljs.core.Keyword(null,"name","name",1843675177),name_15368], null));
});})(seq__15276_15360,chunk__15277_15361,count__15278_15362,i__15279_15363,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15282_15364,map__15282_15365__$1,gline_15366,gcol_15367,name_15368,vec__15273_15357,column_15358,column_info_15359,vec__15244_15350,line_15351,columns_15352,inverted))
,cljs.core.sorted_map.call(null)));


var G__15369 = seq__15276_15360;
var G__15370 = chunk__15277_15361;
var G__15371 = count__15278_15362;
var G__15372 = (i__15279_15363 + (1));
seq__15276_15360 = G__15369;
chunk__15277_15361 = G__15370;
count__15278_15362 = G__15371;
i__15279_15363 = G__15372;
continue;
} else {
var temp__5720__auto___15373 = cljs.core.seq.call(null,seq__15276_15360);
if(temp__5720__auto___15373){
var seq__15276_15374__$1 = temp__5720__auto___15373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15276_15374__$1)){
var c__4649__auto___15375 = cljs.core.chunk_first.call(null,seq__15276_15374__$1);
var G__15376 = cljs.core.chunk_rest.call(null,seq__15276_15374__$1);
var G__15377 = c__4649__auto___15375;
var G__15378 = cljs.core.count.call(null,c__4649__auto___15375);
var G__15379 = (0);
seq__15276_15360 = G__15376;
chunk__15277_15361 = G__15377;
count__15278_15362 = G__15378;
i__15279_15363 = G__15379;
continue;
} else {
var map__15283_15380 = cljs.core.first.call(null,seq__15276_15374__$1);
var map__15283_15381__$1 = cljs.core.__destructure_map.call(null,map__15283_15380);
var gline_15382 = cljs.core.get.call(null,map__15283_15381__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15383 = cljs.core.get.call(null,map__15283_15381__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15384 = cljs.core.get.call(null,map__15283_15381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15382], null),cljs.core.fnil.call(null,((function (seq__15276_15360,chunk__15277_15361,count__15278_15362,i__15279_15363,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15283_15380,map__15283_15381__$1,gline_15382,gcol_15383,name_15384,seq__15276_15374__$1,temp__5720__auto___15373,vec__15273_15357,column_15358,column_info_15359,vec__15244_15350,line_15351,columns_15352,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15383], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15351,new cljs.core.Keyword(null,"col","col",-1959363084),column_15358,new cljs.core.Keyword(null,"name","name",1843675177),name_15384], null));
});})(seq__15276_15360,chunk__15277_15361,count__15278_15362,i__15279_15363,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15283_15380,map__15283_15381__$1,gline_15382,gcol_15383,name_15384,seq__15276_15374__$1,temp__5720__auto___15373,vec__15273_15357,column_15358,column_info_15359,vec__15244_15350,line_15351,columns_15352,inverted))
,cljs.core.sorted_map.call(null)));


var G__15385 = cljs.core.next.call(null,seq__15276_15374__$1);
var G__15386 = null;
var G__15387 = (0);
var G__15388 = (0);
seq__15276_15360 = G__15385;
chunk__15277_15361 = G__15386;
count__15278_15362 = G__15387;
i__15279_15363 = G__15388;
continue;
}
} else {
}
}
break;
}


var G__15389 = seq__15247_15353;
var G__15390 = chunk__15248_15354;
var G__15391 = count__15249_15355;
var G__15392 = (i__15250_15356 + (1));
seq__15247_15353 = G__15389;
chunk__15248_15354 = G__15390;
count__15249_15355 = G__15391;
i__15250_15356 = G__15392;
continue;
} else {
var temp__5720__auto___15393 = cljs.core.seq.call(null,seq__15247_15353);
if(temp__5720__auto___15393){
var seq__15247_15394__$1 = temp__5720__auto___15393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15247_15394__$1)){
var c__4649__auto___15395 = cljs.core.chunk_first.call(null,seq__15247_15394__$1);
var G__15396 = cljs.core.chunk_rest.call(null,seq__15247_15394__$1);
var G__15397 = c__4649__auto___15395;
var G__15398 = cljs.core.count.call(null,c__4649__auto___15395);
var G__15399 = (0);
seq__15247_15353 = G__15396;
chunk__15248_15354 = G__15397;
count__15249_15355 = G__15398;
i__15250_15356 = G__15399;
continue;
} else {
var vec__15284_15400 = cljs.core.first.call(null,seq__15247_15394__$1);
var column_15401 = cljs.core.nth.call(null,vec__15284_15400,(0),null);
var column_info_15402 = cljs.core.nth.call(null,vec__15284_15400,(1),null);
var seq__15287_15403 = cljs.core.seq.call(null,column_info_15402);
var chunk__15288_15404 = null;
var count__15289_15405 = (0);
var i__15290_15406 = (0);
while(true){
if((i__15290_15406 < count__15289_15405)){
var map__15293_15407 = cljs.core._nth.call(null,chunk__15288_15404,i__15290_15406);
var map__15293_15408__$1 = cljs.core.__destructure_map.call(null,map__15293_15407);
var gline_15409 = cljs.core.get.call(null,map__15293_15408__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15410 = cljs.core.get.call(null,map__15293_15408__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15411 = cljs.core.get.call(null,map__15293_15408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15409], null),cljs.core.fnil.call(null,((function (seq__15287_15403,chunk__15288_15404,count__15289_15405,i__15290_15406,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15293_15407,map__15293_15408__$1,gline_15409,gcol_15410,name_15411,vec__15284_15400,column_15401,column_info_15402,seq__15247_15394__$1,temp__5720__auto___15393,vec__15244_15350,line_15351,columns_15352,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15410], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15351,new cljs.core.Keyword(null,"col","col",-1959363084),column_15401,new cljs.core.Keyword(null,"name","name",1843675177),name_15411], null));
});})(seq__15287_15403,chunk__15288_15404,count__15289_15405,i__15290_15406,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15293_15407,map__15293_15408__$1,gline_15409,gcol_15410,name_15411,vec__15284_15400,column_15401,column_info_15402,seq__15247_15394__$1,temp__5720__auto___15393,vec__15244_15350,line_15351,columns_15352,inverted))
,cljs.core.sorted_map.call(null)));


var G__15412 = seq__15287_15403;
var G__15413 = chunk__15288_15404;
var G__15414 = count__15289_15405;
var G__15415 = (i__15290_15406 + (1));
seq__15287_15403 = G__15412;
chunk__15288_15404 = G__15413;
count__15289_15405 = G__15414;
i__15290_15406 = G__15415;
continue;
} else {
var temp__5720__auto___15416__$1 = cljs.core.seq.call(null,seq__15287_15403);
if(temp__5720__auto___15416__$1){
var seq__15287_15417__$1 = temp__5720__auto___15416__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15287_15417__$1)){
var c__4649__auto___15418 = cljs.core.chunk_first.call(null,seq__15287_15417__$1);
var G__15419 = cljs.core.chunk_rest.call(null,seq__15287_15417__$1);
var G__15420 = c__4649__auto___15418;
var G__15421 = cljs.core.count.call(null,c__4649__auto___15418);
var G__15422 = (0);
seq__15287_15403 = G__15419;
chunk__15288_15404 = G__15420;
count__15289_15405 = G__15421;
i__15290_15406 = G__15422;
continue;
} else {
var map__15294_15423 = cljs.core.first.call(null,seq__15287_15417__$1);
var map__15294_15424__$1 = cljs.core.__destructure_map.call(null,map__15294_15423);
var gline_15425 = cljs.core.get.call(null,map__15294_15424__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15426 = cljs.core.get.call(null,map__15294_15424__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15427 = cljs.core.get.call(null,map__15294_15424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15425], null),cljs.core.fnil.call(null,((function (seq__15287_15403,chunk__15288_15404,count__15289_15405,i__15290_15406,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15294_15423,map__15294_15424__$1,gline_15425,gcol_15426,name_15427,seq__15287_15417__$1,temp__5720__auto___15416__$1,vec__15284_15400,column_15401,column_info_15402,seq__15247_15394__$1,temp__5720__auto___15393,vec__15244_15350,line_15351,columns_15352,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15426], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15351,new cljs.core.Keyword(null,"col","col",-1959363084),column_15401,new cljs.core.Keyword(null,"name","name",1843675177),name_15427], null));
});})(seq__15287_15403,chunk__15288_15404,count__15289_15405,i__15290_15406,seq__15247_15353,chunk__15248_15354,count__15249_15355,i__15250_15356,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15294_15423,map__15294_15424__$1,gline_15425,gcol_15426,name_15427,seq__15287_15417__$1,temp__5720__auto___15416__$1,vec__15284_15400,column_15401,column_info_15402,seq__15247_15394__$1,temp__5720__auto___15393,vec__15244_15350,line_15351,columns_15352,inverted))
,cljs.core.sorted_map.call(null)));


var G__15428 = cljs.core.next.call(null,seq__15287_15417__$1);
var G__15429 = null;
var G__15430 = (0);
var G__15431 = (0);
seq__15287_15403 = G__15428;
chunk__15288_15404 = G__15429;
count__15289_15405 = G__15430;
i__15290_15406 = G__15431;
continue;
}
} else {
}
}
break;
}


var G__15432 = cljs.core.next.call(null,seq__15247_15394__$1);
var G__15433 = null;
var G__15434 = (0);
var G__15435 = (0);
seq__15247_15353 = G__15432;
chunk__15248_15354 = G__15433;
count__15249_15355 = G__15434;
i__15250_15356 = G__15435;
continue;
}
} else {
}
}
break;
}


var G__15436 = seq__15138_15346;
var G__15437 = chunk__15139_15347;
var G__15438 = count__15140_15348;
var G__15439 = (i__15141_15349 + (1));
seq__15138_15346 = G__15436;
chunk__15139_15347 = G__15437;
count__15140_15348 = G__15438;
i__15141_15349 = G__15439;
continue;
} else {
var temp__5720__auto___15440 = cljs.core.seq.call(null,seq__15138_15346);
if(temp__5720__auto___15440){
var seq__15138_15441__$1 = temp__5720__auto___15440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15138_15441__$1)){
var c__4649__auto___15442 = cljs.core.chunk_first.call(null,seq__15138_15441__$1);
var G__15443 = cljs.core.chunk_rest.call(null,seq__15138_15441__$1);
var G__15444 = c__4649__auto___15442;
var G__15445 = cljs.core.count.call(null,c__4649__auto___15442);
var G__15446 = (0);
seq__15138_15346 = G__15443;
chunk__15139_15347 = G__15444;
count__15140_15348 = G__15445;
i__15141_15349 = G__15446;
continue;
} else {
var vec__15295_15447 = cljs.core.first.call(null,seq__15138_15441__$1);
var line_15448 = cljs.core.nth.call(null,vec__15295_15447,(0),null);
var columns_15449 = cljs.core.nth.call(null,vec__15295_15447,(1),null);
var seq__15298_15450 = cljs.core.seq.call(null,columns_15449);
var chunk__15299_15451 = null;
var count__15300_15452 = (0);
var i__15301_15453 = (0);
while(true){
if((i__15301_15453 < count__15300_15452)){
var vec__15324_15454 = cljs.core._nth.call(null,chunk__15299_15451,i__15301_15453);
var column_15455 = cljs.core.nth.call(null,vec__15324_15454,(0),null);
var column_info_15456 = cljs.core.nth.call(null,vec__15324_15454,(1),null);
var seq__15327_15457 = cljs.core.seq.call(null,column_info_15456);
var chunk__15328_15458 = null;
var count__15329_15459 = (0);
var i__15330_15460 = (0);
while(true){
if((i__15330_15460 < count__15329_15459)){
var map__15333_15461 = cljs.core._nth.call(null,chunk__15328_15458,i__15330_15460);
var map__15333_15462__$1 = cljs.core.__destructure_map.call(null,map__15333_15461);
var gline_15463 = cljs.core.get.call(null,map__15333_15462__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15464 = cljs.core.get.call(null,map__15333_15462__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15465 = cljs.core.get.call(null,map__15333_15462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15463], null),cljs.core.fnil.call(null,((function (seq__15327_15457,chunk__15328_15458,count__15329_15459,i__15330_15460,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15333_15461,map__15333_15462__$1,gline_15463,gcol_15464,name_15465,vec__15324_15454,column_15455,column_info_15456,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15464], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15448,new cljs.core.Keyword(null,"col","col",-1959363084),column_15455,new cljs.core.Keyword(null,"name","name",1843675177),name_15465], null));
});})(seq__15327_15457,chunk__15328_15458,count__15329_15459,i__15330_15460,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15333_15461,map__15333_15462__$1,gline_15463,gcol_15464,name_15465,vec__15324_15454,column_15455,column_info_15456,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted))
,cljs.core.sorted_map.call(null)));


var G__15466 = seq__15327_15457;
var G__15467 = chunk__15328_15458;
var G__15468 = count__15329_15459;
var G__15469 = (i__15330_15460 + (1));
seq__15327_15457 = G__15466;
chunk__15328_15458 = G__15467;
count__15329_15459 = G__15468;
i__15330_15460 = G__15469;
continue;
} else {
var temp__5720__auto___15470__$1 = cljs.core.seq.call(null,seq__15327_15457);
if(temp__5720__auto___15470__$1){
var seq__15327_15471__$1 = temp__5720__auto___15470__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15327_15471__$1)){
var c__4649__auto___15472 = cljs.core.chunk_first.call(null,seq__15327_15471__$1);
var G__15473 = cljs.core.chunk_rest.call(null,seq__15327_15471__$1);
var G__15474 = c__4649__auto___15472;
var G__15475 = cljs.core.count.call(null,c__4649__auto___15472);
var G__15476 = (0);
seq__15327_15457 = G__15473;
chunk__15328_15458 = G__15474;
count__15329_15459 = G__15475;
i__15330_15460 = G__15476;
continue;
} else {
var map__15334_15477 = cljs.core.first.call(null,seq__15327_15471__$1);
var map__15334_15478__$1 = cljs.core.__destructure_map.call(null,map__15334_15477);
var gline_15479 = cljs.core.get.call(null,map__15334_15478__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15480 = cljs.core.get.call(null,map__15334_15478__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15481 = cljs.core.get.call(null,map__15334_15478__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15479], null),cljs.core.fnil.call(null,((function (seq__15327_15457,chunk__15328_15458,count__15329_15459,i__15330_15460,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15334_15477,map__15334_15478__$1,gline_15479,gcol_15480,name_15481,seq__15327_15471__$1,temp__5720__auto___15470__$1,vec__15324_15454,column_15455,column_info_15456,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15480], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15448,new cljs.core.Keyword(null,"col","col",-1959363084),column_15455,new cljs.core.Keyword(null,"name","name",1843675177),name_15481], null));
});})(seq__15327_15457,chunk__15328_15458,count__15329_15459,i__15330_15460,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15334_15477,map__15334_15478__$1,gline_15479,gcol_15480,name_15481,seq__15327_15471__$1,temp__5720__auto___15470__$1,vec__15324_15454,column_15455,column_info_15456,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted))
,cljs.core.sorted_map.call(null)));


var G__15482 = cljs.core.next.call(null,seq__15327_15471__$1);
var G__15483 = null;
var G__15484 = (0);
var G__15485 = (0);
seq__15327_15457 = G__15482;
chunk__15328_15458 = G__15483;
count__15329_15459 = G__15484;
i__15330_15460 = G__15485;
continue;
}
} else {
}
}
break;
}


var G__15486 = seq__15298_15450;
var G__15487 = chunk__15299_15451;
var G__15488 = count__15300_15452;
var G__15489 = (i__15301_15453 + (1));
seq__15298_15450 = G__15486;
chunk__15299_15451 = G__15487;
count__15300_15452 = G__15488;
i__15301_15453 = G__15489;
continue;
} else {
var temp__5720__auto___15490__$1 = cljs.core.seq.call(null,seq__15298_15450);
if(temp__5720__auto___15490__$1){
var seq__15298_15491__$1 = temp__5720__auto___15490__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15298_15491__$1)){
var c__4649__auto___15492 = cljs.core.chunk_first.call(null,seq__15298_15491__$1);
var G__15493 = cljs.core.chunk_rest.call(null,seq__15298_15491__$1);
var G__15494 = c__4649__auto___15492;
var G__15495 = cljs.core.count.call(null,c__4649__auto___15492);
var G__15496 = (0);
seq__15298_15450 = G__15493;
chunk__15299_15451 = G__15494;
count__15300_15452 = G__15495;
i__15301_15453 = G__15496;
continue;
} else {
var vec__15335_15497 = cljs.core.first.call(null,seq__15298_15491__$1);
var column_15498 = cljs.core.nth.call(null,vec__15335_15497,(0),null);
var column_info_15499 = cljs.core.nth.call(null,vec__15335_15497,(1),null);
var seq__15338_15500 = cljs.core.seq.call(null,column_info_15499);
var chunk__15339_15501 = null;
var count__15340_15502 = (0);
var i__15341_15503 = (0);
while(true){
if((i__15341_15503 < count__15340_15502)){
var map__15344_15504 = cljs.core._nth.call(null,chunk__15339_15501,i__15341_15503);
var map__15344_15505__$1 = cljs.core.__destructure_map.call(null,map__15344_15504);
var gline_15506 = cljs.core.get.call(null,map__15344_15505__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15507 = cljs.core.get.call(null,map__15344_15505__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15508 = cljs.core.get.call(null,map__15344_15505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15506], null),cljs.core.fnil.call(null,((function (seq__15338_15500,chunk__15339_15501,count__15340_15502,i__15341_15503,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15344_15504,map__15344_15505__$1,gline_15506,gcol_15507,name_15508,vec__15335_15497,column_15498,column_info_15499,seq__15298_15491__$1,temp__5720__auto___15490__$1,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15507], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15448,new cljs.core.Keyword(null,"col","col",-1959363084),column_15498,new cljs.core.Keyword(null,"name","name",1843675177),name_15508], null));
});})(seq__15338_15500,chunk__15339_15501,count__15340_15502,i__15341_15503,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15344_15504,map__15344_15505__$1,gline_15506,gcol_15507,name_15508,vec__15335_15497,column_15498,column_info_15499,seq__15298_15491__$1,temp__5720__auto___15490__$1,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted))
,cljs.core.sorted_map.call(null)));


var G__15509 = seq__15338_15500;
var G__15510 = chunk__15339_15501;
var G__15511 = count__15340_15502;
var G__15512 = (i__15341_15503 + (1));
seq__15338_15500 = G__15509;
chunk__15339_15501 = G__15510;
count__15340_15502 = G__15511;
i__15341_15503 = G__15512;
continue;
} else {
var temp__5720__auto___15513__$2 = cljs.core.seq.call(null,seq__15338_15500);
if(temp__5720__auto___15513__$2){
var seq__15338_15514__$1 = temp__5720__auto___15513__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15338_15514__$1)){
var c__4649__auto___15515 = cljs.core.chunk_first.call(null,seq__15338_15514__$1);
var G__15516 = cljs.core.chunk_rest.call(null,seq__15338_15514__$1);
var G__15517 = c__4649__auto___15515;
var G__15518 = cljs.core.count.call(null,c__4649__auto___15515);
var G__15519 = (0);
seq__15338_15500 = G__15516;
chunk__15339_15501 = G__15517;
count__15340_15502 = G__15518;
i__15341_15503 = G__15519;
continue;
} else {
var map__15345_15520 = cljs.core.first.call(null,seq__15338_15514__$1);
var map__15345_15521__$1 = cljs.core.__destructure_map.call(null,map__15345_15520);
var gline_15522 = cljs.core.get.call(null,map__15345_15521__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15523 = cljs.core.get.call(null,map__15345_15521__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15524 = cljs.core.get.call(null,map__15345_15521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15522], null),cljs.core.fnil.call(null,((function (seq__15338_15500,chunk__15339_15501,count__15340_15502,i__15341_15503,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15345_15520,map__15345_15521__$1,gline_15522,gcol_15523,name_15524,seq__15338_15514__$1,temp__5720__auto___15513__$2,vec__15335_15497,column_15498,column_info_15499,seq__15298_15491__$1,temp__5720__auto___15490__$1,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15523], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15448,new cljs.core.Keyword(null,"col","col",-1959363084),column_15498,new cljs.core.Keyword(null,"name","name",1843675177),name_15524], null));
});})(seq__15338_15500,chunk__15339_15501,count__15340_15502,i__15341_15503,seq__15298_15450,chunk__15299_15451,count__15300_15452,i__15301_15453,seq__15138_15346,chunk__15139_15347,count__15140_15348,i__15141_15349,map__15345_15520,map__15345_15521__$1,gline_15522,gcol_15523,name_15524,seq__15338_15514__$1,temp__5720__auto___15513__$2,vec__15335_15497,column_15498,column_info_15499,seq__15298_15491__$1,temp__5720__auto___15490__$1,vec__15295_15447,line_15448,columns_15449,seq__15138_15441__$1,temp__5720__auto___15440,inverted))
,cljs.core.sorted_map.call(null)));


var G__15525 = cljs.core.next.call(null,seq__15338_15514__$1);
var G__15526 = null;
var G__15527 = (0);
var G__15528 = (0);
seq__15338_15500 = G__15525;
chunk__15339_15501 = G__15526;
count__15340_15502 = G__15527;
i__15341_15503 = G__15528;
continue;
}
} else {
}
}
break;
}


var G__15529 = cljs.core.next.call(null,seq__15298_15491__$1);
var G__15530 = null;
var G__15531 = (0);
var G__15532 = (0);
seq__15298_15450 = G__15529;
chunk__15299_15451 = G__15530;
count__15300_15452 = G__15531;
i__15301_15453 = G__15532;
continue;
}
} else {
}
}
break;
}


var G__15533 = cljs.core.next.call(null,seq__15138_15441__$1);
var G__15534 = null;
var G__15535 = (0);
var G__15536 = (0);
seq__15138_15346 = G__15533;
chunk__15139_15347 = G__15534;
count__15140_15348 = G__15535;
i__15141_15349 = G__15536;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
