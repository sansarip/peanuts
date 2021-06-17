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
var G__25905__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25902 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25903 = cljs.core.seq.call(null,vec__25902);
var first__25904 = cljs.core.first.call(null,seq__25903);
var seq__25903__$1 = cljs.core.next.call(null,seq__25903);
var tag = first__25904;
var body = seq__25903__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25906__i = 0, G__25906__a = new Array(arguments.length -  0);
while (G__25906__i < G__25906__a.length) {G__25906__a[G__25906__i] = arguments[G__25906__i + 0]; ++G__25906__i;}
  args = new cljs.core.IndexedSeq(G__25906__a,0,null);
} 
return G__25905__delegate.call(this,args);};
G__25905.cljs$lang$maxFixedArity = 0;
G__25905.cljs$lang$applyTo = (function (arglist__25907){
var args = cljs.core.seq(arglist__25907);
return G__25905__delegate(args);
});
G__25905.cljs$core$IFn$_invoke$arity$variadic = G__25905__delegate;
return G__25905;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4622__auto__ = (function sablono$core$update_arglists_$_iter__25908(s__25909){
return (new cljs.core.LazySeq(null,(function (){
var s__25909__$1 = s__25909;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25909__$1);
if(temp__5720__auto__){
var s__25909__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25909__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25909__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25911 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25910 = (0);
while(true){
if((i__25910 < size__4621__auto__)){
var args = cljs.core._nth.call(null,c__4620__auto__,i__25910);
cljs.core.chunk_append.call(null,b__25911,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25912 = (i__25910 + (1));
i__25910 = G__25912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25911),sablono$core$update_arglists_$_iter__25908.call(null,cljs.core.chunk_rest.call(null,s__25909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25911),null);
}
} else {
var args = cljs.core.first.call(null,s__25909__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25908.call(null,cljs.core.rest.call(null,s__25909__$2)));
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
var len__4829__auto___25918 = arguments.length;
var i__4830__auto___25919 = (0);
while(true){
if((i__4830__auto___25919 < len__4829__auto___25918)){
args__4835__auto__.push((arguments[i__4830__auto___25919]));

var G__25920 = (i__4830__auto___25919 + (1));
i__4830__auto___25919 = G__25920;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4622__auto__ = (function sablono$core$iter__25914(s__25915){
return (new cljs.core.LazySeq(null,(function (){
var s__25915__$1 = s__25915;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25915__$1);
if(temp__5720__auto__){
var s__25915__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25915__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25915__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25917 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25916 = (0);
while(true){
if((i__25916 < size__4621__auto__)){
var style = cljs.core._nth.call(null,c__4620__auto__,i__25916);
cljs.core.chunk_append.call(null,b__25917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25921 = (i__25916 + (1));
i__25916 = G__25921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),sablono$core$iter__25914.call(null,cljs.core.chunk_rest.call(null,s__25915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),null);
}
} else {
var style = cljs.core.first.call(null,s__25915__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25914.call(null,cljs.core.rest.call(null,s__25915__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq25913){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25913));
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
sablono.core.link_to25922 = (function sablono$core$link_to25922(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25925 = arguments.length;
var i__4830__auto___25926 = (0);
while(true){
if((i__4830__auto___25926 < len__4829__auto___25925)){
args__4835__auto__.push((arguments[i__4830__auto___25926]));

var G__25927 = (i__4830__auto___25926 + (1));
i__4830__auto___25926 = G__25927;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25922.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.link_to25922.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to25922.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to25922.cljs$lang$applyTo = (function (seq25923){
var G__25924 = cljs.core.first.call(null,seq25923);
var seq25923__$1 = cljs.core.next.call(null,seq25923);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25924,seq25923__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25922);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25928 = (function sablono$core$mail_to25928(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25935 = arguments.length;
var i__4830__auto___25936 = (0);
while(true){
if((i__4830__auto___25936 < len__4829__auto___25935)){
args__4835__auto__.push((arguments[i__4830__auto___25936]));

var G__25937 = (i__4830__auto___25936 + (1));
i__4830__auto___25936 = G__25937;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25928.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.mail_to25928.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25931){
var vec__25932 = p__25931;
var content = cljs.core.nth.call(null,vec__25932,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4223__auto__ = content;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to25928.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to25928.cljs$lang$applyTo = (function (seq25929){
var G__25930 = cljs.core.first.call(null,seq25929);
var seq25929__$1 = cljs.core.next.call(null,seq25929);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25930,seq25929__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25928);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25938 = (function sablono$core$unordered_list25938(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function sablono$core$unordered_list25938_$_iter__25939(s__25940){
return (new cljs.core.LazySeq(null,(function (){
var s__25940__$1 = s__25940;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25940__$1);
if(temp__5720__auto__){
var s__25940__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25940__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25940__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25942 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25941 = (0);
while(true){
if((i__25941 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25941);
cljs.core.chunk_append.call(null,b__25942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25943 = (i__25941 + (1));
i__25941 = G__25943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25942),sablono$core$unordered_list25938_$_iter__25939.call(null,cljs.core.chunk_rest.call(null,s__25940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25942),null);
}
} else {
var x = cljs.core.first.call(null,s__25940__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25938_$_iter__25939.call(null,cljs.core.rest.call(null,s__25940__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25938);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25944 = (function sablono$core$ordered_list25944(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4622__auto__ = (function sablono$core$ordered_list25944_$_iter__25945(s__25946){
return (new cljs.core.LazySeq(null,(function (){
var s__25946__$1 = s__25946;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25946__$1);
if(temp__5720__auto__){
var s__25946__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25946__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25946__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25948 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25947 = (0);
while(true){
if((i__25947 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25947);
cljs.core.chunk_append.call(null,b__25948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25949 = (i__25947 + (1));
i__25947 = G__25949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25948),sablono$core$ordered_list25944_$_iter__25945.call(null,cljs.core.chunk_rest.call(null,s__25946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25948),null);
}
} else {
var x = cljs.core.first.call(null,s__25946__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25944_$_iter__25945.call(null,cljs.core.rest.call(null,s__25946__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25944);
/**
 * Create an image element.
 */
sablono.core.image25950 = (function sablono$core$image25950(var_args){
var G__25952 = arguments.length;
switch (G__25952) {
case 1:
return sablono.core.image25950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image25950.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image25950.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image25950.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25950);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25954_SHARP_,p2__25955_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25954_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25955_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25956_SHARP_,p2__25957_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25956_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25957_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__25959 = arguments.length;
switch (G__25959) {
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
sablono.core.color_field25961 = (function sablono$core$color_field25961(var_args){
var G__25963 = arguments.length;
switch (G__25963) {
case 1:
return sablono.core.color_field25961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field25961.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25892__auto__);
}));

(sablono.core.color_field25961.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.color_field25961.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25961);

/**
 * Creates a date input field.
 */
sablono.core.date_field25964 = (function sablono$core$date_field25964(var_args){
var G__25966 = arguments.length;
switch (G__25966) {
case 1:
return sablono.core.date_field25964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field25964.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25892__auto__);
}));

(sablono.core.date_field25964.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.date_field25964.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25964);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25967 = (function sablono$core$datetime_field25967(var_args){
var G__25969 = arguments.length;
switch (G__25969) {
case 1:
return sablono.core.datetime_field25967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field25967.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25892__auto__);
}));

(sablono.core.datetime_field25967.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.datetime_field25967.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25967);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25970 = (function sablono$core$datetime_local_field25970(var_args){
var G__25972 = arguments.length;
switch (G__25972) {
case 1:
return sablono.core.datetime_local_field25970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field25970.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25892__auto__);
}));

(sablono.core.datetime_local_field25970.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.datetime_local_field25970.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25970);

/**
 * Creates a email input field.
 */
sablono.core.email_field25973 = (function sablono$core$email_field25973(var_args){
var G__25975 = arguments.length;
switch (G__25975) {
case 1:
return sablono.core.email_field25973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field25973.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25892__auto__);
}));

(sablono.core.email_field25973.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.email_field25973.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25973);

/**
 * Creates a file input field.
 */
sablono.core.file_field25976 = (function sablono$core$file_field25976(var_args){
var G__25978 = arguments.length;
switch (G__25978) {
case 1:
return sablono.core.file_field25976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field25976.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25892__auto__);
}));

(sablono.core.file_field25976.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.file_field25976.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25976);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25979 = (function sablono$core$hidden_field25979(var_args){
var G__25981 = arguments.length;
switch (G__25981) {
case 1:
return sablono.core.hidden_field25979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field25979.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25892__auto__);
}));

(sablono.core.hidden_field25979.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.hidden_field25979.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25979);

/**
 * Creates a month input field.
 */
sablono.core.month_field25982 = (function sablono$core$month_field25982(var_args){
var G__25984 = arguments.length;
switch (G__25984) {
case 1:
return sablono.core.month_field25982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field25982.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25892__auto__);
}));

(sablono.core.month_field25982.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.month_field25982.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25982);

/**
 * Creates a number input field.
 */
sablono.core.number_field25985 = (function sablono$core$number_field25985(var_args){
var G__25987 = arguments.length;
switch (G__25987) {
case 1:
return sablono.core.number_field25985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field25985.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25892__auto__);
}));

(sablono.core.number_field25985.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.number_field25985.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25985);

/**
 * Creates a password input field.
 */
sablono.core.password_field25988 = (function sablono$core$password_field25988(var_args){
var G__25990 = arguments.length;
switch (G__25990) {
case 1:
return sablono.core.password_field25988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field25988.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25892__auto__);
}));

(sablono.core.password_field25988.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.password_field25988.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25988);

/**
 * Creates a range input field.
 */
sablono.core.range_field25991 = (function sablono$core$range_field25991(var_args){
var G__25993 = arguments.length;
switch (G__25993) {
case 1:
return sablono.core.range_field25991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field25991.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25892__auto__);
}));

(sablono.core.range_field25991.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.range_field25991.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25991);

/**
 * Creates a search input field.
 */
sablono.core.search_field25994 = (function sablono$core$search_field25994(var_args){
var G__25996 = arguments.length;
switch (G__25996) {
case 1:
return sablono.core.search_field25994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field25994.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25892__auto__);
}));

(sablono.core.search_field25994.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.search_field25994.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25994);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25997 = (function sablono$core$tel_field25997(var_args){
var G__25999 = arguments.length;
switch (G__25999) {
case 1:
return sablono.core.tel_field25997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field25997.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25892__auto__);
}));

(sablono.core.tel_field25997.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.tel_field25997.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25997);

/**
 * Creates a text input field.
 */
sablono.core.text_field26000 = (function sablono$core$text_field26000(var_args){
var G__26002 = arguments.length;
switch (G__26002) {
case 1:
return sablono.core.text_field26000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field26000.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25892__auto__);
}));

(sablono.core.text_field26000.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.text_field26000.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26000);

/**
 * Creates a time input field.
 */
sablono.core.time_field26003 = (function sablono$core$time_field26003(var_args){
var G__26005 = arguments.length;
switch (G__26005) {
case 1:
return sablono.core.time_field26003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field26003.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25892__auto__);
}));

(sablono.core.time_field26003.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.time_field26003.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26003);

/**
 * Creates a url input field.
 */
sablono.core.url_field26006 = (function sablono$core$url_field26006(var_args){
var G__26008 = arguments.length;
switch (G__26008) {
case 1:
return sablono.core.url_field26006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field26006.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25892__auto__);
}));

(sablono.core.url_field26006.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.url_field26006.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26006);

/**
 * Creates a week input field.
 */
sablono.core.week_field26009 = (function sablono$core$week_field26009(var_args){
var G__26011 = arguments.length;
switch (G__26011) {
case 1:
return sablono.core.week_field26009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field26009.cljs$core$IFn$_invoke$arity$1 = (function (name__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25892__auto__);
}));

(sablono.core.week_field26009.cljs$core$IFn$_invoke$arity$2 = (function (name__25892__auto__,value__25893__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25892__auto__,value__25893__auto__);
}));

(sablono.core.week_field26009.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26009);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26029 = (function sablono$core$check_box26029(var_args){
var G__26031 = arguments.length;
switch (G__26031) {
case 1:
return sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26029.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26029.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26029);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26033 = (function sablono$core$radio_button26033(var_args){
var G__26035 = arguments.length;
switch (G__26035) {
case 1:
return sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26033.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26033.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26033);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26037 = (function sablono$core$select_options26037(coll){
var iter__4622__auto__ = (function sablono$core$select_options26037_$_iter__26038(s__26039){
return (new cljs.core.LazySeq(null,(function (){
var s__26039__$1 = s__26039;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26039__$1);
if(temp__5720__auto__){
var s__26039__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26039__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__26039__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__26041 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__26040 = (0);
while(true){
if((i__26040 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__26040);
cljs.core.chunk_append.call(null,b__26041,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26042 = x;
var text = cljs.core.nth.call(null,vec__26042,(0),null);
var val = cljs.core.nth.call(null,vec__26042,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26042,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26037.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26048 = (i__26040 + (1));
i__26040 = G__26048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26041),sablono$core$select_options26037_$_iter__26038.call(null,cljs.core.chunk_rest.call(null,s__26039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26041),null);
}
} else {
var x = cljs.core.first.call(null,s__26039__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26045 = x;
var text = cljs.core.nth.call(null,vec__26045,(0),null);
var val = cljs.core.nth.call(null,vec__26045,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26045,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26037.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26037_$_iter__26038.call(null,cljs.core.rest.call(null,s__26039__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26037);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26049 = (function sablono$core$drop_down26049(var_args){
var G__26051 = arguments.length;
switch (G__26051) {
case 2:
return sablono.core.drop_down26049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26049.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down26049.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26049.call(null,name,options,null);
}));

(sablono.core.drop_down26049.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down26049.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26049);
/**
 * Creates a text area element.
 */
sablono.core.text_area26053 = (function sablono$core$text_area26053(var_args){
var G__26055 = arguments.length;
switch (G__26055) {
case 1:
return sablono.core.text_area26053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area26053.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area26053.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area26053.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26053);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26057 = (function sablono$core$label26057(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26057);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26058 = (function sablono$core$submit_button26058(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26058);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26059 = (function sablono$core$reset_button26059(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26059);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26060 = (function sablono$core$form_to26060(var_args){
var args__4835__auto__ = [];
var len__4829__auto___26067 = arguments.length;
var i__4830__auto___26068 = (0);
while(true){
if((i__4830__auto___26068 < len__4829__auto___26067)){
args__4835__auto__.push((arguments[i__4830__auto___26068]));

var G__26069 = (i__4830__auto___26068 + (1));
i__4830__auto___26068 = G__26069;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26060.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.form_to26060.cljs$core$IFn$_invoke$arity$variadic = (function (p__26063,body){
var vec__26064 = p__26063;
var method = cljs.core.nth.call(null,vec__26064,(0),null);
var action = cljs.core.nth.call(null,vec__26064,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to26060.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to26060.cljs$lang$applyTo = (function (seq26061){
var G__26062 = cljs.core.first.call(null,seq26061);
var seq26061__$1 = cljs.core.next.call(null,seq26061);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26062,seq26061__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26060);
