goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18438){
var map__18439 = p__18438;
var map__18439__$1 = cljs.core.__destructure_map(map__18439);
var m = map__18439__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18448_18912 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18449_18913 = null;
var count__18450_18914 = (0);
var i__18451_18915 = (0);
while(true){
if((i__18451_18915 < count__18450_18914)){
var f_18917 = chunk__18449_18913.cljs$core$IIndexed$_nth$arity$2(null,i__18451_18915);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18917], 0));


var G__18923 = seq__18448_18912;
var G__18924 = chunk__18449_18913;
var G__18925 = count__18450_18914;
var G__18926 = (i__18451_18915 + (1));
seq__18448_18912 = G__18923;
chunk__18449_18913 = G__18924;
count__18450_18914 = G__18925;
i__18451_18915 = G__18926;
continue;
} else {
var temp__5804__auto___18927 = cljs.core.seq(seq__18448_18912);
if(temp__5804__auto___18927){
var seq__18448_18928__$1 = temp__5804__auto___18927;
if(cljs.core.chunked_seq_QMARK_(seq__18448_18928__$1)){
var c__5568__auto___18930 = cljs.core.chunk_first(seq__18448_18928__$1);
var G__18931 = cljs.core.chunk_rest(seq__18448_18928__$1);
var G__18933 = c__5568__auto___18930;
var G__18934 = cljs.core.count(c__5568__auto___18930);
var G__18935 = (0);
seq__18448_18912 = G__18931;
chunk__18449_18913 = G__18933;
count__18450_18914 = G__18934;
i__18451_18915 = G__18935;
continue;
} else {
var f_18936 = cljs.core.first(seq__18448_18928__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18936], 0));


var G__18940 = cljs.core.next(seq__18448_18928__$1);
var G__18941 = null;
var G__18942 = (0);
var G__18943 = (0);
seq__18448_18912 = G__18940;
chunk__18449_18913 = G__18941;
count__18450_18914 = G__18942;
i__18451_18915 = G__18943;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18944 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18944], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18944)))?cljs.core.second(arglists_18944):arglists_18944)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18481_18949 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18482_18950 = null;
var count__18483_18951 = (0);
var i__18484_18952 = (0);
while(true){
if((i__18484_18952 < count__18483_18951)){
var vec__18528_18954 = chunk__18482_18950.cljs$core$IIndexed$_nth$arity$2(null,i__18484_18952);
var name_18955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18528_18954,(0),null);
var map__18531_18956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18528_18954,(1),null);
var map__18531_18957__$1 = cljs.core.__destructure_map(map__18531_18956);
var doc_18958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18531_18957__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18531_18957__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18955], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18959], 0));

if(cljs.core.truth_(doc_18958)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18958], 0));
} else {
}


var G__18964 = seq__18481_18949;
var G__18965 = chunk__18482_18950;
var G__18966 = count__18483_18951;
var G__18967 = (i__18484_18952 + (1));
seq__18481_18949 = G__18964;
chunk__18482_18950 = G__18965;
count__18483_18951 = G__18966;
i__18484_18952 = G__18967;
continue;
} else {
var temp__5804__auto___18969 = cljs.core.seq(seq__18481_18949);
if(temp__5804__auto___18969){
var seq__18481_18970__$1 = temp__5804__auto___18969;
if(cljs.core.chunked_seq_QMARK_(seq__18481_18970__$1)){
var c__5568__auto___18972 = cljs.core.chunk_first(seq__18481_18970__$1);
var G__18973 = cljs.core.chunk_rest(seq__18481_18970__$1);
var G__18974 = c__5568__auto___18972;
var G__18975 = cljs.core.count(c__5568__auto___18972);
var G__18976 = (0);
seq__18481_18949 = G__18973;
chunk__18482_18950 = G__18974;
count__18483_18951 = G__18975;
i__18484_18952 = G__18976;
continue;
} else {
var vec__18542_18977 = cljs.core.first(seq__18481_18970__$1);
var name_18978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18542_18977,(0),null);
var map__18545_18979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18542_18977,(1),null);
var map__18545_18980__$1 = cljs.core.__destructure_map(map__18545_18979);
var doc_18981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18545_18980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18545_18980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18978], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18982], 0));

if(cljs.core.truth_(doc_18981)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18981], 0));
} else {
}


var G__18988 = cljs.core.next(seq__18481_18970__$1);
var G__18989 = null;
var G__18990 = (0);
var G__18991 = (0);
seq__18481_18949 = G__18988;
chunk__18482_18950 = G__18989;
count__18483_18951 = G__18990;
i__18484_18952 = G__18991;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18552 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18553 = null;
var count__18554 = (0);
var i__18555 = (0);
while(true){
if((i__18555 < count__18554)){
var role = chunk__18553.cljs$core$IIndexed$_nth$arity$2(null,i__18555);
var temp__5804__auto___18994__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18994__$1)){
var spec_18995 = temp__5804__auto___18994__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18995)], 0));
} else {
}


var G__19000 = seq__18552;
var G__19001 = chunk__18553;
var G__19002 = count__18554;
var G__19003 = (i__18555 + (1));
seq__18552 = G__19000;
chunk__18553 = G__19001;
count__18554 = G__19002;
i__18555 = G__19003;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18552);
if(temp__5804__auto____$1){
var seq__18552__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18552__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18552__$1);
var G__19004 = cljs.core.chunk_rest(seq__18552__$1);
var G__19005 = c__5568__auto__;
var G__19006 = cljs.core.count(c__5568__auto__);
var G__19007 = (0);
seq__18552 = G__19004;
chunk__18553 = G__19005;
count__18554 = G__19006;
i__18555 = G__19007;
continue;
} else {
var role = cljs.core.first(seq__18552__$1);
var temp__5804__auto___19008__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19008__$2)){
var spec_19009 = temp__5804__auto___19008__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19009)], 0));
} else {
}


var G__19014 = cljs.core.next(seq__18552__$1);
var G__19015 = null;
var G__19016 = (0);
var G__19017 = (0);
seq__18552 = G__19014;
chunk__18553 = G__19015;
count__18554 = G__19016;
i__18555 = G__19017;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19024 = cljs.core.ex_cause(t);
via = G__19023;
t = G__19024;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18688 = datafied_throwable;
var map__18688__$1 = cljs.core.__destructure_map(map__18688);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18688__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18692 = cljs.core.last(via);
var map__18692__$1 = cljs.core.__destructure_map(map__18692);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18693 = data;
var map__18693__$1 = cljs.core.__destructure_map(map__18693);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18694 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18694__$1 = cljs.core.__destructure_map(map__18694);
var top_data = map__18694__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18694__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18725 = phase;
var G__18725__$1 = (((G__18725 instanceof cljs.core.Keyword))?G__18725.fqn:null);
switch (G__18725__$1) {
case "read-source":
var map__18729 = data;
var map__18729__$1 = cljs.core.__destructure_map(map__18729);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18738__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18738,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18738);
var G__18738__$2 = (cljs.core.truth_((function (){var fexpr__18744 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18744.cljs$core$IFn$_invoke$arity$1 ? fexpr__18744.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18744.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18738__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18738__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18738__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18749 = top_data;
var G__18749__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18749,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18749);
var G__18749__$2 = (cljs.core.truth_((function (){var fexpr__18752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18752.cljs$core$IFn$_invoke$arity$1 ? fexpr__18752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18752.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18749__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18749__$1);
var G__18749__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18749__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18749__$2);
var G__18749__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18749__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18749__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18749__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18749__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18759 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18759,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18759,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18759,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18759,(3),null);
var G__18762 = top_data;
var G__18762__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18762);
var G__18762__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18762__$1);
var G__18762__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18762__$2);
var G__18762__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18762__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18762__$4;
}

break;
case "execution":
var vec__18772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18772,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18668_SHARP_){
var or__5045__auto__ = (p1__18668_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18778.cljs$core$IFn$_invoke$arity$1 ? fexpr__18778.cljs$core$IFn$_invoke$arity$1(p1__18668_SHARP_) : fexpr__18778.call(null,p1__18668_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18786 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18786__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18786,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18786);
var G__18786__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18786__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18786__$1);
var G__18786__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18786__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18786__$2);
var G__18786__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18786__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18786__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18786__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18786__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18725__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18801){
var map__18802 = p__18801;
var map__18802__$1 = cljs.core.__destructure_map(map__18802);
var triage_data = map__18802__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18812 = phase;
var G__18812__$1 = (((G__18812 instanceof cljs.core.Keyword))?G__18812.fqn:null);
switch (G__18812__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18813 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18814 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18815 = loc;
var G__18816 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18818_19109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18819_19110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18820_19111 = true;
var _STAR_print_fn_STAR__temp_val__18821_19112 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18820_19111);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18821_19112);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18794_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18794_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18819_19110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18818_19109);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18813,G__18814,G__18815,G__18816) : format.call(null,G__18813,G__18814,G__18815,G__18816));

break;
case "macroexpansion":
var G__18826 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18827 = cause_type;
var G__18828 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18829 = loc;
var G__18830 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18826,G__18827,G__18828,G__18829,G__18830) : format.call(null,G__18826,G__18827,G__18828,G__18829,G__18830));

break;
case "compile-syntax-check":
var G__18834 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18835 = cause_type;
var G__18836 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18837 = loc;
var G__18838 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18834,G__18835,G__18836,G__18837,G__18838) : format.call(null,G__18834,G__18835,G__18836,G__18837,G__18838));

break;
case "compilation":
var G__18842 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18843 = cause_type;
var G__18844 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18845 = loc;
var G__18846 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18842,G__18843,G__18844,G__18845,G__18846) : format.call(null,G__18842,G__18843,G__18844,G__18845,G__18846));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18847 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18848 = symbol;
var G__18849 = loc;
var G__18850 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18857_19130 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18858_19132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18859_19133 = true;
var _STAR_print_fn_STAR__temp_val__18860_19134 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18859_19133);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18860_19134);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18797_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18797_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18858_19132);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18857_19130);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18847,G__18848,G__18849,G__18850) : format.call(null,G__18847,G__18848,G__18849,G__18850));
} else {
var G__18880 = "Execution error%s at %s(%s).\n%s\n";
var G__18881 = cause_type;
var G__18882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18883 = loc;
var G__18884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18880,G__18881,G__18882,G__18883,G__18884) : format.call(null,G__18880,G__18881,G__18882,G__18883,G__18884));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18812__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
