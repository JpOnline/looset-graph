goog.provide('day8.re_frame_10x.panels.settings.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__15461,_){
var map__15462 = p__15461;
var map__15462__$1 = cljs.core.__destructure_map(map__15462);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15462__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
return settings;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%","day8.re-frame-10x.panels.settings.subs/panel-width%",1546996863),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15463,_){
var map__15464 = p__15463;
var map__15464__$1 = cljs.core.__destructure_map(map__15464);
var panel_width_PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15464__$1,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
return panel_width_PERCENT_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%-rounded","day8.re-frame-10x.panels.settings.subs/panel-width%-rounded",16963626),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","panel-width%","day8.re-frame-10x.panels.settings.subs/panel-width%",1546996863)], null),(function (panel_width_PERCENT_,p__15465){
var vec__15466 = p__15465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(1),null);
return ((Math.ceil(((panel_width_PERCENT_ * (100)) / n)) * n) / 100.0);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width","day8.re-frame-10x.panels.settings.subs/window-width",419613467),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15470,_){
var map__15471 = p__15470;
var map__15471__$1 = cljs.core.__destructure_map(map__15471);
var window_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15471__$1,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
return window_width;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width-rounded","day8.re-frame-10x.panels.settings.subs/window-width-rounded",193095108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width","day8.re-frame-10x.panels.settings.subs/window-width",419613467)], null),(function (width,p__15472){
var vec__15473 = p__15472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473,(1),null);
return (Math.ceil((width / n)) * n);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","show-panel?","day8.re-frame-10x.panels.settings.subs/show-panel?",-1305358312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15483,_){
var map__15484 = p__15483;
var map__15484__$1 = cljs.core.__destructure_map(map__15484);
var show_panel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15484__$1,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
return show_panel_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","showing-settings?","day8.re-frame-10x.panels.settings.subs/showing-settings?",1700568638),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15499,_){
var map__15504 = p__15499;
var map__15504__$1 = cljs.core.__destructure_map(map__15504);
var showing_settings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878));
return showing_settings_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","selected-tab","day8.re-frame-10x.panels.settings.subs/selected-tab",1020534208),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","showing-settings?","day8.re-frame-10x.panels.settings.subs/showing-settings?",1700568638)], null),(function (p__15505,_){
var vec__15506 = p__15505;
var map__15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(0),null);
var map__15509__$1 = cljs.core.__destructure_map(map__15509);
var selected_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15509__$1,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
var showing_settings_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(1),null);
if(cljs.core.truth_(showing_settings_QMARK_)){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return selected_tab;
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","number-of-retained-epochs","day8.re-frame-10x.panels.settings.subs/number-of-retained-epochs",-789938705),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15510,_){
var map__15511 = p__15510;
var map__15511__$1 = cljs.core.__destructure_map(map__15511);
var number_of_epochs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15511__$1,new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252));
return number_of_epochs;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ignored-events","day8.re-frame-10x.panels.settings.subs/ignored-events",216559761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15512,_){
var map__15513 = p__15512;
var map__15513__$1 = cljs.core.__destructure_map(map__15513);
var ignored_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(ignored_events));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","filtered-view-trace","day8.re-frame-10x.panels.settings.subs/filtered-view-trace",-192195211),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15515,_){
var map__15516 = p__15515;
var map__15516__$1 = cljs.core.__destructure_map(map__15516);
var filtered_view_trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(filtered_view_trace));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","low-level-trace","day8.re-frame-10x.panels.settings.subs/low-level-trace",-929378536),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15517,_){
var map__15518 = p__15517;
var map__15518__$1 = cljs.core.__destructure_map(map__15518);
var low_level_trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15518__$1,new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092));
return low_level_trace;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","debug?","day8.re-frame-10x.panels.settings.subs/debug?",-1124155521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15519,_){
var map__15520 = p__15519;
var map__15520__$1 = cljs.core.__destructure_map(map__15520);
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
return debug_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","app-db-follows-events?","day8.re-frame-10x.panels.settings.subs/app-db-follows-events?",1075206342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15521,_){
var map__15522 = p__15521;
var map__15522__$1 = cljs.core.__destructure_map(map__15522);
var app_db_follows_events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462));
return app_db_follows_events_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15523,_){
var map__15524 = p__15523;
var map__15524__$1 = cljs.core.__destructure_map(map__15524);
var ambiance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15524__$1,new cljs.core.Keyword(null,"ambiance","ambiance",-1936594032));
return ambiance;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","syntax-color-scheme","day8.re-frame-10x.panels.settings.subs/syntax-color-scheme",-661033240),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15526,_){
var map__15528 = p__15526;
var map__15528__$1 = cljs.core.__destructure_map(map__15528);
var syntax_color_scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15528__$1,new cljs.core.Keyword(null,"syntax-color-scheme","syntax-color-scheme",2062388740));
return syntax_color_scheme;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","show-event-history?","day8.re-frame-10x.panels.settings.subs/show-event-history?",561736700),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15530,_){
var map__15531 = p__15530;
var map__15531__$1 = cljs.core.__destructure_map(map__15531);
var show_event_history_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15531__$1,new cljs.core.Keyword(null,"show-event-history?","show-event-history?",398887712));
return show_event_history_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","open-new-inspectors?","day8.re-frame-10x.panels.settings.subs/open-new-inspectors?",965777560),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15536,_){
var map__15537 = p__15536;
var map__15537__$1 = cljs.core.__destructure_map(map__15537);
var open_new_inspectors_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15537__$1,new cljs.core.Keyword(null,"open-new-inspectors?","open-new-inspectors?",-3558540));
return open_new_inspectors_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","handle-keys?","day8.re-frame-10x.panels.settings.subs/handle-keys?",980361219),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15538,_){
var map__15539 = p__15538;
var map__15539__$1 = cljs.core.__destructure_map(map__15539);
var handle_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15539__$1,new cljs.core.Keyword(null,"handle-keys?","handle-keys?",-793509665));
return handle_keys_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ready-to-bind-key","day8.re-frame-10x.panels.settings.subs/ready-to-bind-key",-1320760670),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15540,_){
var map__15541 = p__15540;
var map__15541__$1 = cljs.core.__destructure_map(map__15541);
var ready_to_bind_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15541__$1,new cljs.core.Keyword(null,"ready-to-bind-key","ready-to-bind-key",1469196678));
return ready_to_bind_key;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","key-bindings","day8.re-frame-10x.panels.settings.subs/key-bindings",1115746214),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15543,p__15544){
var map__15546 = p__15543;
var map__15546__$1 = cljs.core.__destructure_map(map__15546);
var key_bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15546__$1,new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982));
var vec__15547 = p__15544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547,(1),null);
if(cljs.core.truth_(k)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_bindings,k);
} else {
return key_bindings;
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","log-outputs","day8.re-frame-10x.panels.settings.subs/log-outputs",549166949),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15550,p__15551){
var map__15552 = p__15550;
var map__15552__$1 = cljs.core.__destructure_map(map__15552);
var log_outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15552__$1,new cljs.core.Keyword(null,"log-outputs","log-outputs",-687309247));
var vec__15553 = p__15551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(1),null);
if(cljs.core.truth_(k)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(log_outputs,k);
} else {
return log_outputs;
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","any-log-outputs?","day8.re-frame-10x.panels.settings.subs/any-log-outputs?",-1386238756),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","log-outputs","day8.re-frame-10x.panels.settings.subs/log-outputs",549166949)], null),(function (log_outputs,_){
return (!((cljs.core.seq(log_outputs) == null)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","log-pretty?","day8.re-frame-10x.panels.settings.subs/log-pretty?",995509818),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15560,_){
var map__15561 = p__15560;
var map__15561__$1 = cljs.core.__destructure_map(map__15561);
var log_pretty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15561__$1,new cljs.core.Keyword(null,"log-pretty?","log-pretty?",-1627576290));
return log_pretty_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","alias-namespaces?","day8.re-frame-10x.panels.settings.subs/alias-namespaces?",507809565),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15563,_){
var map__15566 = p__15563;
var map__15566__$1 = cljs.core.__destructure_map(map__15566);
var alias_namespaces_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15566__$1,new cljs.core.Keyword(null,"alias-namespaces?","alias-namespaces?",-587355207));
return alias_namespaces_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns-aliases","day8.re-frame-10x.panels.settings.subs/ns-aliases",1731500737),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),(function (p__15568,_){
var map__15569 = p__15568;
var map__15569__$1 = cljs.core.__destructure_map(map__15569);
var ns_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15569__$1,new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821));
return ns_aliases;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns-aliases","day8.re-frame-10x.panels.settings.subs/ns-aliases",1731500737)], null),(function (ns_aliases){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns-full","ns-full",225339386),new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737)),cljs.core.val),ns_aliases));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"expansion-limit","expansion-limit",-2040810736)], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","trace-when","day8.re-frame-10x.panels.settings.subs/trace-when",-1240430671),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","root","day8.re-frame-10x.panels.settings.subs/root",-2012357833)], null),new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"trace-when","trace-when",-1902271347)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.settings.subs.js.map
