if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles')) {
goog.provide('lt.plugins.ltfiles');
goog.require('cljs.core');
goog.require('lt.objs.settings');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.objs.command');
goog.require('lt.objs.settings');
goog.require('lt.objs.keyboard');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.ltfiles.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from ltfiles"], null));var seq__8538_8545 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8539_8546 = null;var count__8540_8547 = 0;var i__8541_8548 = 0;while(true){
if((i__8541_8548 < count__8540_8547))
{var vec__8542_8549 = cljs.core._nth.call(null,chunk__8539_8546,i__8541_8548);var ev__8112__auto___8550 = cljs.core.nth.call(null,vec__8542_8549,0,null);var func__8113__auto___8551 = cljs.core.nth.call(null,vec__8542_8549,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8550,func__8113__auto___8551);
{
var G__8552 = seq__8538_8545;
var G__8553 = chunk__8539_8546;
var G__8554 = count__8540_8547;
var G__8555 = (i__8541_8548 + 1);
seq__8538_8545 = G__8552;
chunk__8539_8546 = G__8553;
count__8540_8547 = G__8554;
i__8541_8548 = G__8555;
continue;
}
} else
{var temp__4092__auto___8556 = cljs.core.seq.call(null,seq__8538_8545);if(temp__4092__auto___8556)
{var seq__8538_8557__$1 = temp__4092__auto___8556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8538_8557__$1))
{var c__7497__auto___8558 = cljs.core.chunk_first.call(null,seq__8538_8557__$1);{
var G__8559 = cljs.core.chunk_rest.call(null,seq__8538_8557__$1);
var G__8560 = c__7497__auto___8558;
var G__8561 = cljs.core.count.call(null,c__7497__auto___8558);
var G__8562 = 0;
seq__8538_8545 = G__8559;
chunk__8539_8546 = G__8560;
count__8540_8547 = G__8561;
i__8541_8548 = G__8562;
continue;
}
} else
{var vec__8543_8563 = cljs.core.first.call(null,seq__8538_8557__$1);var ev__8112__auto___8564 = cljs.core.nth.call(null,vec__8543_8563,0,null);var func__8113__auto___8565 = cljs.core.nth.call(null,vec__8543_8563,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8564,func__8113__auto___8565);
{
var G__8566 = cljs.core.next.call(null,seq__8538_8557__$1);
var G__8567 = null;
var G__8568 = 0;
var G__8569 = 0;
seq__8538_8545 = G__8566;
chunk__8539_8546 = G__8567;
count__8540_8547 = G__8568;
i__8541_8548 = G__8569;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles","ltfiles.hello","lt.plugins.ltfiles/ltfiles.hello",3994666650),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ltfiles.hello","ltfiles.hello",2113760133)], null),new cljs.core.Keyword(null,"name","name",1017277949),"ltfiles",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.ltfiles.hello_panel.call(null,this$);
}));
lt.plugins.ltfiles.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8570 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8570))
{var ts_8571 = temp__4092__auto___8570;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8571))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8571);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles","on-close-destroy","lt.plugins.ltfiles/on-close-destroy",2973203454),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.ltfiles.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltfiles","ltfiles.hello","lt.plugins.ltfiles/ltfiles.hello",3994666650));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.ltfiles","say-hello","lt.plugins.ltfiles/say-hello",4079310021),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.ltfiles.hello);
})], null));
lt.plugins.ltfiles.toggle_line_numbers = (function toggle_line_numbers(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var show_line_numbers = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__8544_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),p1__8544_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)));var line_behavior = (cljs.core.truth_(show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,line_behavior,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738),null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
}

//# sourceMappingURL=ltfiles_compiled.js.map