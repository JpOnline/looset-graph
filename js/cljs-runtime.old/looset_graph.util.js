goog.provide('looset_graph.util');
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
looset_graph.util.with_mount_fn = (function looset_graph$util$with_mount_fn(p__24760){
var vec__24761 = p__24760;
var _n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24761,(0),null);
var map__24764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24761,(1),null);
var map__24764__$1 = cljs.core.__destructure_map(map__24764);
var component_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518));
var component_did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173));
var to_render = vec__24761;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),component_did_update], null));
});
looset_graph.util.error_boundary = (function looset_graph$util$error_boundary(){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (this$,e,info){
return console.log("this",this$,"e",e,"info",info);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(error,e);

setTimeout((function (){
console.log("Retrying to load component");

return cljs.core.reset_BANG_(error,null);
}),(500));

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__24776__delegate = function (p__24770,children){
var map__24771 = p__24770;
var map__24771__$1 = cljs.core.__destructure_map(map__24771);
var if_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24771__$1,new cljs.core.Keyword(null,"if-error","if-error",-1992288515));
if(cljs.core.truth_(cljs.core.deref(error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24769_SHARP_,p2__24768_SHARP_){
return cljs.core.with_meta(p2__24768_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__24769_SHARP_], null));
}),children)], null);
}
};
var G__24776 = function (p__24770,var_args){
var children = null;
if (arguments.length > 1) {
var G__24777__i = 0, G__24777__a = new Array(arguments.length -  1);
while (G__24777__i < G__24777__a.length) {G__24777__a[G__24777__i] = arguments[G__24777__i + 1]; ++G__24777__i;}
  children = new cljs.core.IndexedSeq(G__24777__a,0,null);
} 
return G__24776__delegate.call(this,p__24770,children);};
G__24776.cljs$lang$maxFixedArity = 1;
G__24776.cljs$lang$applyTo = (function (arglist__24778){
var p__24770 = cljs.core.first(arglist__24778);
var children = cljs.core.rest(arglist__24778);
return G__24776__delegate(p__24770,children);
});
G__24776.cljs$core$IFn$_invoke$arity$variadic = G__24776__delegate;
return G__24776;
})()
], null));
});

//# sourceMappingURL=looset_graph.util.js.map
