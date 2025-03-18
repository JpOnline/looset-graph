goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11884__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11887__i = 0, G__11887__a = new Array(arguments.length -  0);
while (G__11887__i < G__11887__a.length) {G__11887__a[G__11887__i] = arguments[G__11887__i + 0]; ++G__11887__i;}
  args = new cljs.core.IndexedSeq(G__11887__a,0,null);
} 
return G__11884__delegate.call(this,args);};
G__11884.cljs$lang$maxFixedArity = 0;
G__11884.cljs$lang$applyTo = (function (arglist__11888){
var args = cljs.core.seq(arglist__11888);
return G__11884__delegate(args);
});
G__11884.cljs$core$IFn$_invoke$arity$variadic = G__11884__delegate;
return G__11884;
})()
);

(o.error = (function() { 
var G__11889__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11892__i = 0, G__11892__a = new Array(arguments.length -  0);
while (G__11892__i < G__11892__a.length) {G__11892__a[G__11892__i] = arguments[G__11892__i + 0]; ++G__11892__i;}
  args = new cljs.core.IndexedSeq(G__11892__a,0,null);
} 
return G__11889__delegate.call(this,args);};
G__11889.cljs$lang$maxFixedArity = 0;
G__11889.cljs$lang$applyTo = (function (arglist__11894){
var args = cljs.core.seq(arglist__11894);
return G__11889__delegate(args);
});
G__11889.cljs$core$IFn$_invoke$arity$variadic = G__11889__delegate;
return G__11889;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.js.map
