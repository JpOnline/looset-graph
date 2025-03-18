goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__28761 = arguments.length;
switch (G__28761) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__28766 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28767 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28767);

try{var G__28772 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__28772);

return G__28772;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28766);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__28775 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28776 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28776);

try{var G__28778 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__28778);

return G__28778;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28775);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__28779 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28780 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28780);

try{var G__28781 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__28781);

return G__28781;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28779);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__28782 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28783 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28783);

try{var G__28784 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__28784);

return G__28784;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28782);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__28785 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28786 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28786);

try{var G__28787 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__28787);

return G__28787;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28785);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__28796 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__28797 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28797);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28796);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29030 = arguments.length;
var i__5770__auto___29031 = (0);
while(true){
if((i__5770__auto___29031 < len__5769__auto___29030)){
args__5775__auto__.push((arguments[i__5770__auto___29031]));

var G__29032 = (i__5770__auto___29031 + (1));
i__5770__auto___29031 = G__29032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28803 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28804 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28805 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28806 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28807 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28808 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28809 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28810 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__28811 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28812 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28813 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28814 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28815 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28816 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28817 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28818 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28811);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28812);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28813);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28814);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28815);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28816);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28817);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28818);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28810);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28809);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28808);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28807);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28806);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28805);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28804);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28803);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq28799){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28799));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__28825 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__28826 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28826);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28825);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29035 = arguments.length;
var i__5770__auto___29036 = (0);
while(true){
if((i__5770__auto___29036 < len__5769__auto___29035)){
args__5775__auto__.push((arguments[i__5770__auto___29036]));

var G__29037 = (i__5770__auto___29036 + (1));
i__5770__auto___29036 = G__29037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28836 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28837 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28838 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28839 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28840 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28842 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__28843 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28844 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28845 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28846 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28847 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28848 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28849 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28843);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28844);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28845);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28846);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28847);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28848);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28849);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28842);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28841);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28840);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28839);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28838);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28837);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28836);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq28831){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28831));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29040 = arguments.length;
var i__5770__auto___29041 = (0);
while(true){
if((i__5770__auto___29041 < len__5769__auto___29040)){
args__5775__auto__.push((arguments[i__5770__auto___29041]));

var G__29042 = (i__5770__auto___29041 + (1));
i__5770__auto___29041 = G__29042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28867 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28868 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28869 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28870 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28871 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28872 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28874 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__28875 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28876 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28877 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28878 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28879 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28880 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28881 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28882 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28875);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28876);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28877);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28878);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28879);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28881);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28882);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28873);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28872);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28871);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28870);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28869);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28868);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28867);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq28859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28859));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29045 = arguments.length;
var i__5770__auto___29046 = (0);
while(true){
if((i__5770__auto___29046 < len__5769__auto___29045)){
args__5775__auto__.push((arguments[i__5770__auto___29046]));

var G__29047 = (i__5770__auto___29046 + (1));
i__5770__auto___29046 = G__29047;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28903 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28904 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28905 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28906 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28907 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28909 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__28910 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28911 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28912 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28913 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28914 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28915 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28916 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28910);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28911);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28912);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28913);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28914);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28915);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28916);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28909);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28908);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28907);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28906);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28905);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28904);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28903);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq28896){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28896));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29049 = arguments.length;
var i__5770__auto___29050 = (0);
while(true){
if((i__5770__auto___29050 < len__5769__auto___29049)){
args__5775__auto__.push((arguments[i__5770__auto___29050]));

var G__29051 = (i__5770__auto___29050 + (1));
i__5770__auto___29050 = G__29051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28927 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28928 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28929 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28930 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28931 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28933 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__28934 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28935 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28936 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__28937 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28938 = null;
var _STAR_print_newline_STAR__temp_val__28939 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28940 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28934);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28935);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28936);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28937);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28938);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28939);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28940);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28933);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28932);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28931);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28930);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28929);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28928);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28927);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq28922){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28922));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29056 = arguments.length;
var i__5770__auto___29057 = (0);
while(true){
if((i__5770__auto___29057 < len__5769__auto___29056)){
args__5775__auto__.push((arguments[i__5770__auto___29057]));

var G__29058 = (i__5770__auto___29057 + (1));
i__5770__auto___29057 = G__29058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28949 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28950 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28951 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28952 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28953 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28955 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__28956 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28957 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28958 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28959 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28960 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28961 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28962 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28956);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28957);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28958);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28959);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28960);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28961);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28962);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28954);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28953);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28952);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28951);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28950);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28949);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq28944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28944));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29060 = arguments.length;
var i__5770__auto___29062 = (0);
while(true){
if((i__5770__auto___29062 < len__5769__auto___29060)){
args__5775__auto__.push((arguments[i__5770__auto___29062]));

var G__29063 = (i__5770__auto___29062 + (1));
i__5770__auto___29062 = G__29063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28979 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28980 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28981 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28982 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28983 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28984 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28985 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__28986 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__28987 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28988 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28989 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28990 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28991 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28992 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28993 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__28994 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28987);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28988);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28989);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28990);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28991);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28992);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28993);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__28994);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__28986);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28985);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28984);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28983);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28982);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28981);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28980);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28979);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq28974){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28974));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29066 = arguments.length;
var i__5770__auto___29067 = (0);
while(true){
if((i__5770__auto___29067 < len__5769__auto___29066)){
args__5775__auto__.push((arguments[i__5770__auto___29067]));

var G__29068 = (i__5770__auto___29067 + (1));
i__5770__auto___29067 = G__29068;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__29005__auto__","s__29005__auto__",-178466335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__29006__auto__","x__29006__auto__",83097218,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__29005__auto__","s__29005__auto__",-178466335,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29006__auto__","x__29006__auto__",83097218,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__29005__auto__","s__29005__auto__",-178466335,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq29009){
var G__29010 = cljs.core.first(seq29009);
var seq29009__$1 = cljs.core.next(seq29009);
var G__29011 = cljs.core.first(seq29009__$1);
var seq29009__$2 = cljs.core.next(seq29009__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29010,G__29011,seq29009__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
