// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25574__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25571 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25572 = cljs.core.seq.call(null,vec__25571);
var first__25573 = cljs.core.first.call(null,seq__25572);
var seq__25572__$1 = cljs.core.next.call(null,seq__25572);
var tag = first__25573;
var body = seq__25572__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25575__i = 0, G__25575__a = new Array(arguments.length -  0);
while (G__25575__i < G__25575__a.length) {G__25575__a[G__25575__i] = arguments[G__25575__i + 0]; ++G__25575__i;}
  args = new cljs.core.IndexedSeq(G__25575__a,0,null);
} 
return G__25574__delegate.call(this,args);};
G__25574.cljs$lang$maxFixedArity = 0;
G__25574.cljs$lang$applyTo = (function (arglist__25576){
var args = cljs.core.seq(arglist__25576);
return G__25574__delegate(args);
});
G__25574.cljs$core$IFn$_invoke$arity$variadic = G__25574__delegate;
return G__25574;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4622__auto__ = (function sablono$core$update_arglists_$_iter__25577(s__25578){
return (new cljs.core.LazySeq(null,(function (){
var s__25578__$1 = s__25578;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25578__$1);
if(temp__5720__auto__){
var s__25578__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25578__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25578__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25580 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25579 = (0);
while(true){
if((i__25579 < size__4621__auto__)){
var args = cljs.core._nth.call(null,c__4620__auto__,i__25579);
cljs.core.chunk_append.call(null,b__25580,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25581 = (i__25579 + (1));
i__25579 = G__25581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25580),sablono$core$update_arglists_$_iter__25577.call(null,cljs.core.chunk_rest.call(null,s__25578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25580),null);
}
} else {
var args = cljs.core.first.call(null,s__25578__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25577.call(null,cljs.core.rest.call(null,s__25578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25587 = arguments.length;
var i__4830__auto___25588 = (0);
while(true){
if((i__4830__auto___25588 < len__4829__auto___25587)){
args__4835__auto__.push((arguments[i__4830__auto___25588]));

var G__25589 = (i__4830__auto___25588 + (1));
i__4830__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4622__auto__ = (function sablono$core$iter__25583(s__25584){
return (new cljs.core.LazySeq(null,(function (){
var s__25584__$1 = s__25584;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25584__$1);
if(temp__5720__auto__){
var s__25584__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25584__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25584__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25586 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25585 = (0);
while(true){
if((i__25585 < size__4621__auto__)){
var style = cljs.core._nth.call(null,c__4620__auto__,i__25585);
cljs.core.chunk_append.call(null,b__25586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25590 = (i__25585 + (1));
i__25585 = G__25590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25586),sablono$core$iter__25583.call(null,cljs.core.chunk_rest.call(null,s__25584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25586),null);
}
} else {
var style = cljs.core.first.call(null,s__25584__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25583.call(null,cljs.core.rest.call(null,s__25584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq25582){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25582));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25591 = (function sablono$core$link_to25591(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25594 = arguments.length;
var i__4830__auto___25595 = (0);
while(true){
if((i__4830__auto___25595 < len__4829__auto___25594)){
args__4835__auto__.push((arguments[i__4830__auto___25595]));

var G__25596 = (i__4830__auto___25595 + (1));
i__4830__auto___25595 = G__25596;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25591.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.link_to25591.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to25591.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to25591.cljs$lang$applyTo = (function (seq25592){
var G__25593 = cljs.core.first.call(null,seq25592);
var seq25592__$1 = cljs.core.next.call(null,seq25592);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25593,seq25592__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25591);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25597 = (function sablono$core$mail_to25597(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25604 = arguments.length;
var i__4830__auto___25605 = (0);
while(true){
if((i__4830__auto___25605 < len__4829__auto___25604)){
args__4835__auto__.push((arguments[i__4830__auto___25605]));

var G__25606 = (i__4830__auto___25605 + (1));
i__4830__auto___25605 = G__25606;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25597.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.mail_to25597.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25600){
var vec__25601 = p__25600;
var content = cljs.core.nth.call(null,vec__25601,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4223__auto__ = content;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to25597.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to25597.cljs$lang$applyTo = (function (seq25598){
var G__25599 = cljs.core.first.call(null,seq25598);
var seq25598__$1 = cljs.core.next.call(null,seq25598);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25599,seq25598__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25597);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25607 = (function sablono$core$unordered_list25607(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function sablono$core$unordered_list25607_$_iter__25608(s__25609){
return (new cljs.core.LazySeq(null,(function (){
var s__25609__$1 = s__25609;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25609__$1);
if(temp__5720__auto__){
var s__25609__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25609__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25609__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25611 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25610 = (0);
while(true){
if((i__25610 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25610);
cljs.core.chunk_append.call(null,b__25611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25612 = (i__25610 + (1));
i__25610 = G__25612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25611),sablono$core$unordered_list25607_$_iter__25608.call(null,cljs.core.chunk_rest.call(null,s__25609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25611),null);
}
} else {
var x = cljs.core.first.call(null,s__25609__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25607_$_iter__25608.call(null,cljs.core.rest.call(null,s__25609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25607);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25613 = (function sablono$core$ordered_list25613(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4622__auto__ = (function sablono$core$ordered_list25613_$_iter__25614(s__25615){
return (new cljs.core.LazySeq(null,(function (){
var s__25615__$1 = s__25615;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25615__$1);
if(temp__5720__auto__){
var s__25615__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25615__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25615__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25617 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25616 = (0);
while(true){
if((i__25616 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25616);
cljs.core.chunk_append.call(null,b__25617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25618 = (i__25616 + (1));
i__25616 = G__25618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25617),sablono$core$ordered_list25613_$_iter__25614.call(null,cljs.core.chunk_rest.call(null,s__25615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25617),null);
}
} else {
var x = cljs.core.first.call(null,s__25615__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25613_$_iter__25614.call(null,cljs.core.rest.call(null,s__25615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25613);
/**
 * Create an image element.
 */
sablono.core.image25619 = (function sablono$core$image25619(var_args){
var G__25621 = arguments.length;
switch (G__25621) {
case 1:
return sablono.core.image25619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image25619.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image25619.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image25619.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25619);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25623_SHARP_,p2__25624_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25623_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25624_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25625_SHARP_,p2__25626_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25625_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25626_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__25628 = arguments.length;
switch (G__25628) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field25630 = (function sablono$core$color_field25630(var_args){
var G__25632 = arguments.length;
switch (G__25632) {
case 1:
return sablono.core.color_field25630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field25630.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25561__auto__);
}));

(sablono.core.color_field25630.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.color_field25630.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25630);

/**
 * Creates a date input field.
 */
sablono.core.date_field25633 = (function sablono$core$date_field25633(var_args){
var G__25635 = arguments.length;
switch (G__25635) {
case 1:
return sablono.core.date_field25633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field25633.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25561__auto__);
}));

(sablono.core.date_field25633.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.date_field25633.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25633);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25636 = (function sablono$core$datetime_field25636(var_args){
var G__25638 = arguments.length;
switch (G__25638) {
case 1:
return sablono.core.datetime_field25636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field25636.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25561__auto__);
}));

(sablono.core.datetime_field25636.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.datetime_field25636.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25636);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25639 = (function sablono$core$datetime_local_field25639(var_args){
var G__25641 = arguments.length;
switch (G__25641) {
case 1:
return sablono.core.datetime_local_field25639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field25639.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25561__auto__);
}));

(sablono.core.datetime_local_field25639.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.datetime_local_field25639.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25639);

/**
 * Creates a email input field.
 */
sablono.core.email_field25642 = (function sablono$core$email_field25642(var_args){
var G__25644 = arguments.length;
switch (G__25644) {
case 1:
return sablono.core.email_field25642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field25642.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25561__auto__);
}));

(sablono.core.email_field25642.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.email_field25642.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25642);

/**
 * Creates a file input field.
 */
sablono.core.file_field25645 = (function sablono$core$file_field25645(var_args){
var G__25647 = arguments.length;
switch (G__25647) {
case 1:
return sablono.core.file_field25645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field25645.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25561__auto__);
}));

(sablono.core.file_field25645.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.file_field25645.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25645);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25648 = (function sablono$core$hidden_field25648(var_args){
var G__25650 = arguments.length;
switch (G__25650) {
case 1:
return sablono.core.hidden_field25648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field25648.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25561__auto__);
}));

(sablono.core.hidden_field25648.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.hidden_field25648.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25648);

/**
 * Creates a month input field.
 */
sablono.core.month_field25651 = (function sablono$core$month_field25651(var_args){
var G__25653 = arguments.length;
switch (G__25653) {
case 1:
return sablono.core.month_field25651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field25651.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25561__auto__);
}));

(sablono.core.month_field25651.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.month_field25651.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25651);

/**
 * Creates a number input field.
 */
sablono.core.number_field25654 = (function sablono$core$number_field25654(var_args){
var G__25656 = arguments.length;
switch (G__25656) {
case 1:
return sablono.core.number_field25654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field25654.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25561__auto__);
}));

(sablono.core.number_field25654.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.number_field25654.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25654);

/**
 * Creates a password input field.
 */
sablono.core.password_field25657 = (function sablono$core$password_field25657(var_args){
var G__25659 = arguments.length;
switch (G__25659) {
case 1:
return sablono.core.password_field25657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field25657.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25561__auto__);
}));

(sablono.core.password_field25657.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.password_field25657.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25657);

/**
 * Creates a range input field.
 */
sablono.core.range_field25660 = (function sablono$core$range_field25660(var_args){
var G__25662 = arguments.length;
switch (G__25662) {
case 1:
return sablono.core.range_field25660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field25660.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25561__auto__);
}));

(sablono.core.range_field25660.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.range_field25660.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25660);

/**
 * Creates a search input field.
 */
sablono.core.search_field25663 = (function sablono$core$search_field25663(var_args){
var G__25665 = arguments.length;
switch (G__25665) {
case 1:
return sablono.core.search_field25663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field25663.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25561__auto__);
}));

(sablono.core.search_field25663.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.search_field25663.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25663);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25666 = (function sablono$core$tel_field25666(var_args){
var G__25668 = arguments.length;
switch (G__25668) {
case 1:
return sablono.core.tel_field25666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field25666.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25561__auto__);
}));

(sablono.core.tel_field25666.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.tel_field25666.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25666);

/**
 * Creates a text input field.
 */
sablono.core.text_field25669 = (function sablono$core$text_field25669(var_args){
var G__25671 = arguments.length;
switch (G__25671) {
case 1:
return sablono.core.text_field25669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field25669.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25561__auto__);
}));

(sablono.core.text_field25669.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.text_field25669.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25669);

/**
 * Creates a time input field.
 */
sablono.core.time_field25672 = (function sablono$core$time_field25672(var_args){
var G__25674 = arguments.length;
switch (G__25674) {
case 1:
return sablono.core.time_field25672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field25672.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25561__auto__);
}));

(sablono.core.time_field25672.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.time_field25672.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25672);

/**
 * Creates a url input field.
 */
sablono.core.url_field25675 = (function sablono$core$url_field25675(var_args){
var G__25677 = arguments.length;
switch (G__25677) {
case 1:
return sablono.core.url_field25675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field25675.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25561__auto__);
}));

(sablono.core.url_field25675.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.url_field25675.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25675);

/**
 * Creates a week input field.
 */
sablono.core.week_field25678 = (function sablono$core$week_field25678(var_args){
var G__25680 = arguments.length;
switch (G__25680) {
case 1:
return sablono.core.week_field25678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field25678.cljs$core$IFn$_invoke$arity$1 = (function (name__25561__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25561__auto__);
}));

(sablono.core.week_field25678.cljs$core$IFn$_invoke$arity$2 = (function (name__25561__auto__,value__25562__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25561__auto__,value__25562__auto__);
}));

(sablono.core.week_field25678.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25678);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25698 = (function sablono$core$check_box25698(var_args){
var G__25700 = arguments.length;
switch (G__25700) {
case 1:
return sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box25698.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box25698.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25698);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25702 = (function sablono$core$radio_button25702(var_args){
var G__25704 = arguments.length;
switch (G__25704) {
case 1:
return sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button25702.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button25702.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25702);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25706 = (function sablono$core$select_options25706(coll){
var iter__4622__auto__ = (function sablono$core$select_options25706_$_iter__25707(s__25708){
return (new cljs.core.LazySeq(null,(function (){
var s__25708__$1 = s__25708;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25708__$1);
if(temp__5720__auto__){
var s__25708__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25708__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25708__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25710 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25709 = (0);
while(true){
if((i__25709 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25709);
cljs.core.chunk_append.call(null,b__25710,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25711 = x;
var text = cljs.core.nth.call(null,vec__25711,(0),null);
var val = cljs.core.nth.call(null,vec__25711,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25711,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25706.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25717 = (i__25709 + (1));
i__25709 = G__25717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25710),sablono$core$select_options25706_$_iter__25707.call(null,cljs.core.chunk_rest.call(null,s__25708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25710),null);
}
} else {
var x = cljs.core.first.call(null,s__25708__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25714 = x;
var text = cljs.core.nth.call(null,vec__25714,(0),null);
var val = cljs.core.nth.call(null,vec__25714,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25714,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25706.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25706_$_iter__25707.call(null,cljs.core.rest.call(null,s__25708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25706);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25718 = (function sablono$core$drop_down25718(var_args){
var G__25720 = arguments.length;
switch (G__25720) {
case 2:
return sablono.core.drop_down25718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25718.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down25718.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25718.call(null,name,options,null);
}));

(sablono.core.drop_down25718.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down25718.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25718);
/**
 * Creates a text area element.
 */
sablono.core.text_area25722 = (function sablono$core$text_area25722(var_args){
var G__25724 = arguments.length;
switch (G__25724) {
case 1:
return sablono.core.text_area25722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area25722.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area25722.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area25722.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25722);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25726 = (function sablono$core$label25726(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25726);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25727 = (function sablono$core$submit_button25727(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25727);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25728 = (function sablono$core$reset_button25728(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25728);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25729 = (function sablono$core$form_to25729(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25736 = arguments.length;
var i__4830__auto___25737 = (0);
while(true){
if((i__4830__auto___25737 < len__4829__auto___25736)){
args__4835__auto__.push((arguments[i__4830__auto___25737]));

var G__25738 = (i__4830__auto___25737 + (1));
i__4830__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25729.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.form_to25729.cljs$core$IFn$_invoke$arity$variadic = (function (p__25732,body){
var vec__25733 = p__25732;
var method = cljs.core.nth.call(null,vec__25733,(0),null);
var action = cljs.core.nth.call(null,vec__25733,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to25729.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to25729.cljs$lang$applyTo = (function (seq25730){
var G__25731 = cljs.core.first.call(null,seq25730);
var seq25730__$1 = cljs.core.next.call(null,seq25730);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25731,seq25730__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25729);
