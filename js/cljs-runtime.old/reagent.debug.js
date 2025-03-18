goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14871__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14872__i = 0, G__14872__a = new Array(arguments.length -  0);
while (G__14872__i < G__14872__a.length) {G__14872__a[G__14872__i] = arguments[G__14872__i + 0]; ++G__14872__i;}
  args = new cljs.core.IndexedSeq(G__14872__a,0,null);
} 
return G__14871__delegate.call(this,args);};
G__14871.cljs$lang$maxFixedArity = 0;
G__14871.cljs$lang$applyTo = (function (arglist__14873){
var args = cljs.core.seq(arglist__14873);
return G__14871__delegate(args);
});
G__14871.cljs$core$IFn$_invoke$arity$variadic = G__14871__delegate;
return G__14871;
})()
);

(o.error = (function() { 
var G__14874__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14875__i = 0, G__14875__a = new Array(arguments.length -  0);
while (G__14875__i < G__14875__a.length) {G__14875__a[G__14875__i] = arguments[G__14875__i + 0]; ++G__14875__i;}
  args = new cljs.core.IndexedSeq(G__14875__a,0,null);
} 
return G__14874__delegate.call(this,args);};
G__14874.cljs$lang$maxFixedArity = 0;
G__14874.cljs$lang$applyTo = (function (arglist__14876){
var args = cljs.core.seq(arglist__14876);
return G__14874__delegate(args);
});
G__14874.cljs$core$IFn$_invoke$arity$variadic = G__14874__delegate;
return G__14874;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
