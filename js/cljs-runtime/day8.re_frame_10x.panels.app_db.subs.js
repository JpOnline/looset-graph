goog.provide('day8.re_frame_10x.panels.app_db.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__22944,_){
var map__22945 = p__22944;
var map__22945__$1 = cljs.core.__destructure_map(map__22945);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
return app_db;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22949,_){
var map__22950 = p__22949;
var map__22950__$1 = cljs.core.__destructure_map(map__22950);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22948_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__22948_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__22948_SHARP_));
}),paths));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null),(function (p__22954,p__22955){
var vec__22957 = p__22954;
var map__22960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22957,(0),null);
var map__22960__$1 = cljs.core.__destructure_map(map__22960);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22960__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22957,(1),null);
var vec__22961 = p__22955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(0),null);
var map__22964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(1),null);
var map__22964__$1 = cljs.core.__destructure_map(map__22964);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(db_after,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","small-data?","day8.re-frame-10x.panels.app-db.subs/small-data?",1741117145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__22967,_){
var vec__22968 = p__22967;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22968,(0),null);
var map__22971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22968,(1),null);
var map__22971__$1 = cljs.core.__destructure_map(map__22971);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148)], null))], null);
}),(function (p__22972,_){
var vec__22973 = p__22972;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22973,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22973,(1),null);
return day8.re_frame_10x.tools.coll.nodes_fewer_than_QMARK_(data,limit);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","search-string","day8.re-frame-10x.panels.app-db.subs/search-string",-1224926557),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22976,_){
var map__22977 = p__22976;
var map__22977__$1 = cljs.core.__destructure_map(map__22977);
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22977__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return search_string;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22978,_){
var map__22979 = p__22978;
var map__22979__$1 = cljs.core.__destructure_map(map__22979);
var json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22979__$1,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
return json_ml_expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264)], null),(function (expansions,p__22980){
var vec__22981 = p__22980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","reagent-id","day8.re-frame-10x.panels.app-db.subs/reagent-id",-1515896944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22985,_){
var map__22987 = p__22985;
var map__22987__$1 = cljs.core.__destructure_map(map__22987);
var reagent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
return reagent_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22988,_){
var map__22989 = p__22988;
var map__22989__$1 = cljs.core.__destructure_map(map__22989);
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
return data_path_annotations_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__22992,p__22993){
var map__22994 = p__22992;
var map__22994__$1 = cljs.core.__destructure_map(map__22994);
var expand_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22994__$1,new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886));
var vec__22996 = p__22993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expand_all_QMARK_,path_id);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.subs.js.map
