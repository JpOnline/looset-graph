goog.provide('day8.re_frame_10x.panels.app_db.events');
day8.re_frame_10x.panels.app_db.events.paths_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-paths")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path","day8.re-frame-10x.panels.app-db.events/create-path",-383624398),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26207){
var vec__26208 = p__26207;
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26208,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (p__26215,p__26216){
var map__26217 = p__26215;
var map__26217__$1 = cljs.core.__destructure_map(map__26217);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26217__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26218 = p__26216;
var skip_to_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218,(0),null);
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218,(1),null);
var path_id = Date.now();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316),skip_to_path], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26225){
var vec__26226 = p__26225;
var map__26229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26226,(0),null);
var map__26229__$1 = cljs.core.__destructure_map(map__26229);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26229__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));
var path = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path_str);
var valid_QMARK_ = (((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)));
var G__26239 = cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),valid_QMARK_);
if(valid_QMARK_){
return cljs.core.assoc_in(G__26239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path);
} else {
return G__26239;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path-blur","day8.re-frame-10x.panels.app-db.events/update-path-blur",1529838565),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26250){
var vec__26251 = p__26250;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251,(0),null);
var map__26254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__26254__$1 = cljs.core.__destructure_map(map__26254);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26254__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26254__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-path-visibility","day8.re-frame-10x.panels.app-db.events/set-path-visibility",1839643949),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26259){
var vec__26260 = p__26259;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26260,(0),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26260,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26263){
var vec__26264 = p__26263;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264,(0),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264,(1),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","remove-path","day8.re-frame-10x.panels.app-db.events/remove-path",-333596006),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26275){
var vec__26277 = p__26275;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26277,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","paths","day8.re-frame-10x.panels.app-db.events/paths",-421005801),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (_,p__26283){
var vec__26284 = p__26283;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-search-string","day8.re-frame-10x.panels.app-db.events/set-search-string",25437329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__26288){
var vec__26289 = p__26288;
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289,(0),null);
return search_string;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-json-ml-paths","day8.re-frame-10x.panels.app-db.events/set-json-ml-paths",389660155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (_,p__26293){
var vec__26294 = p__26293;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26294,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (paths,p__26297){
var vec__26298 = p__26297;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26298,(0),null);
if(cljs.core.contains_QMARK_(paths,path)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","reagent-id","day8.re-frame-10x.panels.app-db.events/reagent-id",-337600458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)], 0))], null),(function (_,___$1){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-sort-form?","day8.re-frame-10x.panels.app-db.events/set-sort-form?",-483190972),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26301){
var vec__26303 = p__26301;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303,(0),null);
var sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"sort?","sort?",-567661924)], null),sort);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-data-path-annotations?","day8.re-frame-10x.panels.app-db.events/set-data-path-annotations?",881696237),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("data-path-annotations?")], null),(function (_,p__26306){
var vec__26307 = p__26306;
var data_path_annotations_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(0),null);
return data_path_annotations_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","expand","day8.re-frame-10x.panels.app-db.events/expand",-1429129798),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26310){
var vec__26311 = p__26310;
var map__26314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26311,(0),null);
var map__26314__$1 = cljs.core.__destructure_map(map__26314);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26314__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26314__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
var map__26315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id);
var map__26315__$1 = cljs.core.__destructure_map(map__26315);
var was_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26315__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expand?","expand?",-1744295862)], null),(((!((expand_QMARK_ == null))))?expand_QMARK_:cljs.core.not(was_expanded_QMARK_)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","start-edit","day8.re-frame-10x.panels.app-db.events/start-edit",-203766997),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26318){
var vec__26319 = p__26318;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26319,(0),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","finish-edit","day8.re-frame-10x.panels.app-db.events/finish-edit",-51425324),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26322){
var vec__26323 = p__26322;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26323,(0),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),false);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-edit-str","day8.re-frame-10x.panels.app-db.events/set-edit-str",-270062781),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__26326){
var vec__26327 = p__26326;
var map__26330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(0),null);
var map__26330__$1 = cljs.core.__destructure_map(map__26330);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26330__$1,new cljs.core.Keyword(null,"value","value",305978217));
var refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26330__$1,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570));
var G__26331 = paths;
var G__26331__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__26331,id,cljs.core.assoc,new cljs.core.Keyword(null,"edit-str","edit-str",-777097574),zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),true], null)], 0)))
;
if(cljs.core.truth_(refresh_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__26331__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"editor-key","editor-key",55415621)], null),cljs.core.inc);
} else {
return G__26331__$1;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","editor-key","day8.re-frame-10x.panels.app-db.events/editor-key",-1669330724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__26332){
var vec__26333 = p__26332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588),id,new cljs.core.Keyword(null,"editor-key","editor-key",55415621)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","edit","day8.re-frame-10x.panels.app-db.events/edit",348849711),(function (db,p__26336){
var vec__26337 = p__26336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26337,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26337,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26337,(2),null);
var new_data = day8.re_frame_10x.tools.reader.edn.read_string_maybe(s);
if(cljs.core.not(cljs.core.seq(path))){
return new_data;
} else {
return cljs.core.assoc_in(db,path,new_data);
}
}));
day8.re_frame_10x.panels.app_db.events.read_file = (function day8$re_frame_10x$panels$app_db$events$read_file(file,callback){
var file_reader = (new FileReader());
(file_reader.onload = (function (p1__26340_SHARP_){
var G__26342 = p1__26340_SHARP_.target.result;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__26342) : callback.call(null,G__26342));
}));

return file_reader.readAsText(file);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword(null,"read-file","read-file",-1584858601),(function (p__26347){
var map__26348 = p__26347;
var map__26348__$1 = cljs.core.__destructure_map(map__26348);
var vec__26349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26348__$1,new cljs.core.Keyword(null,"on-read","on-read",-549512009));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,(1),null);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return day8.re_frame_10x.panels.app_db.events.read_file(file,(function (p1__26346_SHARP_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"value","value",305978217),p1__26346_SHARP_)], null));
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-file","day8.re-frame-10x.panels.app-db.events/open-file",-201624661),(function (_,p__26360){
var vec__26361 = p__26360;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(1),null);
var on_read = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-file","read-file",-1584858601),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"on-read","on-read",-549512009),on_read], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),(function (filename,contents){
var blob = (new Blob([contents],({"type": "text/plain"})));
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(URL.createObjectURL(blob));
var link = document.createElement("a");
(link.href = url);

(link.download = filename);

document.body.appendChild(link);

link.click();

return link.remove();
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),(function (_,p__26366){
var vec__26367 = p__26366;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26367,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26367,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","save-to-file","day8.re-frame-10x.panels.app-db.events/save-to-file",-1643109376),s], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093),(function (cofx){
var rect = (function (){var or__5045__auto__ = (function (){var G__26371 = cljs.core.deref(day8.re_frame_10x.fx.window.popout_window);
if((G__26371 == null)){
return null;
} else {
return G__26371.document;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document;
}
})().getElementById("--re-frame-10x--").shadowRoot.getElementById("re-frame-10x__ui-container").getBoundingClientRect();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y], null)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-popup-menu","day8.re-frame-10x.panels.app-db.events/open-popup-menu",-559965598),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093))], null),(function (p__26375,p__26376){
var map__26379 = p__26375;
var map__26379__$1 = cljs.core.__destructure_map(map__26379);
var vec__26380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26379__$1,new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","window-bounds","day8.re-frame-10x.panels.app-db.events/window-bounds",1590099093));
var wx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(0),null);
var wy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(1),null);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26379__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26383 = p__26376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(0),null);
var map__26386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26383,(1),null);
var map__26386__$1 = cljs.core.__destructure_map(map__26386);
var vec__26387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26386__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26386__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26386__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26386__$1,new cljs.core.Keyword(null,"data-path","data-path",674802181));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"showing?","showing?",2094921488),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - wx),(my - wy)], null),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"data-path","data-path",674802181),data_path], null))], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing?","showing?",2094921488),false], null));
}));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.events.js.map
