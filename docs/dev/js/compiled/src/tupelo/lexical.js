// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('tupelo.lexical');
goog.require('cljs.core');
goog.require('tupelo.core.impl');
goog.require('tupelo.schema');
goog.require('schema.core');
cljs.core.enable_console_print_BANG_.call(null);
var ufv___35129 = schema.utils.use_fn_validation;
var output_schema35123_35130 = schema.core.Str;
var input_schema35124_35131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35125_35132 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35124_35131);
}),null));
var output_checker35126_35133 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35123_35130);
}),null));
var ret__26117__auto___35134 = /**
 * Inputs: [x :- s/Any]
 *   Returns: s/Str
 * 
 *   Returns a string specifying the comparison class to be used for sorting a piece of data.
 */
tupelo.lexical.comparison_class = (function tupelo$lexical$comparison_class(G__35127){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35129);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35127], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"comparison-class","comparison-class",-1946669102,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a string specifying the comparison class to be used for sorting a piece of data."], null)),input_schema35124_35131,cljs.core.deref.call(null,input_checker35125_35132),args__24531__auto___35135);
} else {
var temp__5720__auto___35136 = cljs.core.deref.call(null,input_checker35125_35132).call(null,args__24531__auto___35135);
if(cljs.core.truth_(temp__5720__auto___35136)){
var error__24532__auto___35137 = temp__5720__auto___35136;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"comparison-class","comparison-class",-1946669102,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a string specifying the comparison class to be used for sorting a piece of data."], null)),cljs.core.pr_str.call(null,error__24532__auto___35137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35124_35131,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35135,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35137], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var x = G__35127;
while(true){
if((x == null)){
return "";
} else {
if(typeof x === 'number'){
return "Type/Clojure-Number";
} else {
if((x instanceof cljs.core.Keyword)){
return "Type/Clojure-Keyword";
} else {
if(cljs.core.char_QMARK_.call(null,x)){
return "Type/Clojure-Character";
} else {
if(typeof x === 'string'){
return "Type/Clojure-String";
} else {
if(cljs.core.boolean_QMARK_.call(null,x)){
return "Type/Clojure-Boolean";
} else {
if((x instanceof cljs.core.Symbol)){
return "Type/Clojure-Symbol";
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return "Type/Clojure-Sequential";
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var type_str = tupelo.core.impl.type_name_str.call(null,x);
return type_str;
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return "Type/Clojure-IPersistentSet";
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return "Type/Clojure-IPersistentMap";
} else {
if(tupelo.core.impl.native_array_QMARK_.call(null,x)){
return "Type/Platform-Native-Array";
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IComparable,x))){
return tupelo.core.impl.type_name_str.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["cc-cmp does not implement comparison of values with class name=",tupelo.core.impl.type_name_str.call(null,x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null));

}
}
}
}
}
}
}
}
}
}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"comparison-class","comparison-class",-1946669102,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a string specifying the comparison class to be used for sorting a piece of data."], null)),output_schema35123_35130,cljs.core.deref.call(null,output_checker35126_35133),o__24533__auto__);
} else {
var temp__5720__auto___35138 = cljs.core.deref.call(null,output_checker35126_35133).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35138)){
var error__24532__auto___35139 = temp__5720__auto___35138;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"comparison-class","comparison-class",-1946669102,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a string specifying the comparison class to be used for sorting a piece of data."], null)),cljs.core.pr_str.call(null,error__24532__auto___35139)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35123_35130,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35139], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.lexical.comparison_class),schema.core.__GT_FnSchema.call(null,output_schema35123_35130,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35124_35131], null)));

tupelo.lexical.compare_seq_lexi = (function tupelo$lexical$compare_seq_lexi(cmpr_fn,x,y){
var x__$1 = x;
var y__$1 = y;
while(true){
if(cljs.core.seq.call(null,x__$1)){
if(cljs.core.seq.call(null,y__$1)){
var c = cmpr_fn.call(null,cljs.core.first.call(null,x__$1),cljs.core.first.call(null,y__$1));
if((c === (0))){
var G__35140 = cljs.core.rest.call(null,x__$1);
var G__35141 = cljs.core.rest.call(null,y__$1);
x__$1 = G__35140;
y__$1 = G__35141;
continue;
} else {
return c;
}
} else {
return (1);
}
} else {
if(cljs.core.seq.call(null,y__$1)){
return (-1);
} else {
return (0);
}
}
break;
}
});
tupelo.lexical.compare_vec_lexi = (function tupelo$lexical$compare_vec_lexi(cmpr_fn,x,y){
var x_len = cljs.core.count.call(null,x);
var y_len = cljs.core.count.call(null,y);
var len = (function (){var x__4309__auto__ = x_len;
var y__4310__auto__ = y_len;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var i = (0);
while(true){
if((i === len)){
return cljs.core.compare.call(null,x_len,y_len);
} else {
var c = cmpr_fn.call(null,x.call(null,i),y.call(null,i));
if((c === (0))){
var G__35142 = (i + (1));
i = G__35142;
continue;
} else {
return c;
}
}
break;
}
});
tupelo.lexical.compare_array_lexi = (function tupelo$lexical$compare_array_lexi(cmpr_fn,x,y){
var x_len = x.length;
var y_len = y.length;
var len = (function (){var x__4309__auto__ = x_len;
var y__4310__auto__ = y_len;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var i = (0);
while(true){
if((i === len)){
return cljs.core.compare.call(null,x_len,y_len);
} else {
var c = cmpr_fn.call(null,(x[i]),(y[i]));
if((c === (0))){
var G__35143 = (i + (1));
i = G__35143;
continue;
} else {
return c;
}
}
break;
}
});
tupelo.lexical.compare_generic = (function tupelo$lexical$compare_generic(x,y){
var x_class_str = tupelo.lexical.comparison_class.call(null,x);
var y_class_str = tupelo.lexical.comparison_class.call(null,y);
var compare_result = cljs.core.compare.call(null,x_class_str,y_class_str);
if(cljs.core.not_EQ_.call(null,compare_result,(0))){
return compare_result;
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-IPersistentSet")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort.call(null,tupelo.lexical.compare_generic,x),cljs.core.sort.call(null,tupelo.lexical.compare_generic,y));
} else {
if(cljs.core.record_QMARK_.call(null,x)){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,x)),cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,y)));
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-IPersistentMap")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,x)),cljs.core.sort_by.call(null,cljs.core.key,tupelo.lexical.compare_generic,cljs.core.seq.call(null,y)));
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Platform-Native-Array")){
return tupelo.lexical.compare_array_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.vector_QMARK_.call(null,y)))){
return tupelo.lexical.compare_vec_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
if(cljs.core._EQ_.call(null,x_class_str,"Type/Clojure-Sequential")){
return tupelo.lexical.compare_seq_lexi.call(null,tupelo.lexical.compare_generic,x,y);
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
}
}
}
}
});
var ufv___35150 = schema.utils.use_fn_validation;
var output_schema35144_35151 = schema.core.Int;
var input_schema35145_35152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null))),schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var input_checker35146_35153 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35145_35152);
}),null));
var output_checker35147_35154 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35144_35151);
}),null));
var ret__26117__auto___35155 = /**
 * Inputs: [a :- tsk/Vec b :- tsk/Vec]
 *   Returns: s/Int
 */
tupelo.lexical.compare_lex = (function tupelo$lexical$compare_lex(G__35148,G__35149){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35150);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35148,G__35149], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-lex","compare-lex",1758094927,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),input_schema35145_35152,cljs.core.deref.call(null,input_checker35146_35153),args__24531__auto___35156);
} else {
var temp__5720__auto___35157 = cljs.core.deref.call(null,input_checker35146_35153).call(null,args__24531__auto___35156);
if(cljs.core.truth_(temp__5720__auto___35157)){
var error__24532__auto___35158 = temp__5720__auto___35157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-lex","compare-lex",1758094927,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___35158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35145_35152,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35156,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35158], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var a = G__35148;
var b = G__35149;
while(true){
return tupelo.lexical.compare_generic.call(null,a,b);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-lex","compare-lex",1758094927,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),output_schema35144_35151,cljs.core.deref.call(null,output_checker35147_35154),o__24533__auto__);
} else {
var temp__5720__auto___35159 = cljs.core.deref.call(null,output_checker35147_35154).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35159)){
var error__24532__auto___35160 = temp__5720__auto___35159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-lex","compare-lex",1758094927,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___35160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35144_35151,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35160], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.lexical.compare_lex),schema.core.__GT_FnSchema.call(null,output_schema35144_35151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35145_35152], null)));


//# sourceMappingURL=lexical.js.map
