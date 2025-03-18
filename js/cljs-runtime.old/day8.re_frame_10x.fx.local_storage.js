goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e15514){if((e15514 instanceof Error)){
var _ = e15514;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e15514;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(key){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});
day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e15527){if((e15527 instanceof Error)){
var _ = e15527;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e15527;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__15532 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__15533 = null;
var count__15534 = (0);
var i__15535 = (0);
while(true){
if((i__15535 < count__15534)){
var k = chunk__15533.cljs$core$IIndexed$_nth$arity$2(null,i__15535);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__15578 = seq__15532;
var G__15579 = chunk__15533;
var G__15580 = count__15534;
var G__15581 = (i__15535 + (1));
seq__15532 = G__15578;
chunk__15533 = G__15579;
count__15534 = G__15580;
i__15535 = G__15581;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15532);
if(temp__5804__auto__){
var seq__15532__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15532__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15532__$1);
var G__15582 = cljs.core.chunk_rest(seq__15532__$1);
var G__15583 = c__5568__auto__;
var G__15584 = cljs.core.count(c__5568__auto__);
var G__15585 = (0);
seq__15532 = G__15582;
chunk__15533 = G__15583;
count__15534 = G__15584;
i__15535 = G__15585;
continue;
} else {
var k = cljs.core.first(seq__15532__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__15586 = cljs.core.next(seq__15532__$1);
var G__15587 = null;
var G__15588 = (0);
var G__15589 = (0);
seq__15532 = G__15586;
chunk__15533 = G__15587;
count__15534 = G__15588;
i__15535 = G__15589;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__15567 = arguments.length;
switch (G__15567) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___15591 = arguments.length;
var i__5770__auto___15592 = (0);
while(true){
if((i__5770__auto___15592 < len__5769__auto___15591)){
args_arr__5794__auto__.push((arguments[i__5770__auto___15592]));

var G__15593 = (i__5770__auto___15592 + (1));
i__5770__auto___15592 = G__15593;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(db));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(v));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq15564){
var G__15565 = cljs.core.first(seq15564);
var seq15564__$1 = cljs.core.next(seq15564);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15565,seq15564__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__15570){
var map__15571 = p__15570;
var map__15571__$1 = cljs.core.__destructure_map(map__15571);
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15571__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15571__$1,new cljs.core.Keyword(null,"or","or",235744169));
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(storage_key);
var v = day8.re_frame_10x.fx.local_storage.load(storage_key);
var G__15572 = coeffects;
var G__15572__$1 = (((!((fallback == null))))?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15572,k,fallback),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","fallback","day8.re-frame-10x.fx.local-storage/fallback",-294997201),k], null),fallback):G__15572);
if((!((v == null)))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15572__$1,k,v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","stored","day8.re-frame-10x.fx.local-storage/stored",1674400390),k], null),v);
} else {
return G__15572__$1;
}
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
