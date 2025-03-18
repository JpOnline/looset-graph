goog.provide('day8.re_frame_10x.tools.datafy');
day8.re_frame_10x.tools.datafy.keyboard_event = (function day8$re_frame_10x$tools$datafy$keyboard_event(e){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),e.key,new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey], null);
});
day8.re_frame_10x.tools.datafy.mod_key__GT_str = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),"Meta",new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),"Ctrl",new cljs.core.Keyword(null,"altKey","altKey",-670253656),"Alt",new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),"Shift"], null);
day8.re_frame_10x.tools.datafy.mod_key__GT_order = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),(1),new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),(2),new cljs.core.Keyword(null,"altKey","altKey",-670253656),(3),new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),(4)], null);
day8.re_frame_10x.tools.datafy.keyboard_event__GT_str = (function day8$re_frame_10x$tools$datafy$keyboard_event__GT_str(v){
var map__15298 = (function (){var G__15302 = v;
if((!(cljs.core.map_QMARK_(v)))){
return day8.re_frame_10x.tools.datafy.keyboard_event(G__15302);
} else {
return G__15302;
}
})();
var map__15298__$1 = cljs.core.__destructure_map(map__15298);
var m = map__15298__$1;
var key_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15298__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var mods = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.datafy.mod_key__GT_str,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.datafy.mod_key__GT_order,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.val),m))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mods,key_str));
});
day8.re_frame_10x.tools.datafy.deep_sorted_map = (function day8$re_frame_10x$tools$datafy$deep_sorted_map(m){
return clojure.walk.postwalk((function (p1__15305_SHARP_){
var G__15306 = p1__15305_SHARP_;
if(cljs.core.map_QMARK_(p1__15305_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(arrangement.core.rank),G__15306);
} else {
return G__15306;
}
}),m);
});
day8.re_frame_10x.tools.datafy.alias = (function day8$re_frame_10x$tools$datafy$alias(k,ns__GT_alias){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns__GT_alias,cljs.core.namespace(k));
if(cljs.core.truth_(temp__5802__auto__)){
var a = temp__5802__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.name(k));
} else {
return k;
}
});
day8.re_frame_10x.tools.datafy.alias_namespaces = (function day8$re_frame_10x$tools$datafy$alias_namespaces(m,ns__GT_alias){
return clojure.walk.postwalk((function (p1__15311_SHARP_){
var G__15312 = p1__15311_SHARP_;
if((p1__15311_SHARP_ instanceof cljs.core.Keyword)){
return day8.re_frame_10x.tools.datafy.alias(G__15312,ns__GT_alias);
} else {
return G__15312;
}
}),m);
});
day8.re_frame_10x.tools.datafy.pr_str_safe = (function day8$re_frame_10x$tools$datafy$pr_str_safe(value){
return cljs.core.pr_str_with_opts(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),true,new cljs.core.Keyword(null,"readably","readably",1129599760),true,new cljs.core.Keyword(null,"meta","meta",1499536964),false,new cljs.core.Keyword(null,"print-length","print-length",1931866356),null], null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame_10x.tools.datafy.WrappedSortedMap = (function (data,__meta,__extmap,__hash){
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15320,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15337 = k15320;
var G__15337__$1 = (((G__15337 instanceof cljs.core.Keyword))?G__15337.fqn:null);
switch (G__15337__$1) {
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15320,else__5346__auto__);

}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15339){
var vec__15340 = p__15339;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#day8.re-frame-10x.tools.datafy.WrappedSortedMap{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15319){
var self__ = this;
var G__15319__$1 = this;
return (new cljs.core.RecordIter((0),G__15319__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1539591843 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15321,other15322){
var self__ = this;
var this15321__$1 = this;
return (((!((other15322 == null)))) && ((((this15321__$1.constructor === other15322.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15321__$1.data,other15322.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15321__$1.__extmap,other15322.__extmap)))))));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15320){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15347 = k15320;
var G__15347__$1 = (((G__15347 instanceof cljs.core.Keyword))?G__15347.fqn:null);
switch (G__15347__$1) {
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15320);

}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15319){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15350 = cljs.core.keyword_identical_QMARK_;
var expr__15351 = k__5352__auto__;
if(cljs.core.truth_((pred__15350.cljs$core$IFn$_invoke$arity$2 ? pred__15350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__15351) : pred__15350.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__15351)))){
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(G__15319,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15319),null));
}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15319){
var self__ = this;
var this__5342__auto____$1 = this;
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(self__.data,G__15319,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.cljs$lang$type = true);

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.tools.datafy/WrappedSortedMap",null,(1),null));
}));

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"day8.re-frame-10x.tools.datafy/WrappedSortedMap");
}));

/**
 * Positional factory function for day8.re-frame-10x.tools.datafy/WrappedSortedMap.
 */
day8.re_frame_10x.tools.datafy.__GT_WrappedSortedMap = (function day8$re_frame_10x$tools$datafy$__GT_WrappedSortedMap(data){
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(data,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.tools.datafy/WrappedSortedMap, taking a map of keywords to field values.
 */
day8.re_frame_10x.tools.datafy.map__GT_WrappedSortedMap = (function day8$re_frame_10x$tools$datafy$map__GT_WrappedSortedMap(G__15328){
var extmap__5385__auto__ = (function (){var G__15355 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15328,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_(G__15328)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15355);
} else {
return G__15355;
}
})();
return (new day8.re_frame_10x.tools.datafy.WrappedSortedMap(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__15328),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.tools.datafy.WrappedSortedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#re-frame-10x/sorted-map ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,o__$1.data)], 0));
}));
day8.re_frame_10x.tools.datafy.wrap_sorted_map = (function day8$re_frame_10x$tools$datafy$wrap_sorted_map(x){
if((!((x instanceof cljs.core.PersistentTreeMap)))){
return x;
} else {
return day8.re_frame_10x.tools.datafy.__GT_WrappedSortedMap(x);
}
});
day8.re_frame_10x.tools.datafy.serialize_special_types = (function day8$re_frame_10x$tools$datafy$serialize_special_types(db){
return day8.re_frame_10x.tools.datafy.pr_str_safe(clojure.walk.postwalk(day8.re_frame_10x.tools.datafy.wrap_sorted_map,db));
});

//# sourceMappingURL=day8.re_frame_10x.tools.datafy.js.map
