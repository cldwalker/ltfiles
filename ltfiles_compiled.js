if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles')) {
goog.provide('lt.plugins.ltfiles');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.ltfiles.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from ltfiles"], null));var seq__8574_8580 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8575_8581 = null;var count__8576_8582 = 0;var i__8577_8583 = 0;while(true){
if((i__8577_8583 < count__8576_8582))
{var vec__8578_8584 = cljs.core._nth.call(null,chunk__8575_8581,i__8577_8583);var ev__8112__auto___8585 = cljs.core.nth.call(null,vec__8578_8584,0,null);var func__8113__auto___8586 = cljs.core.nth.call(null,vec__8578_8584,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8585,func__8113__auto___8586);
{
var G__8587 = seq__8574_8580;
var G__8588 = chunk__8575_8581;
var G__8589 = count__8576_8582;
var G__8590 = (i__8577_8583 + 1);
seq__8574_8580 = G__8587;
chunk__8575_8581 = G__8588;
count__8576_8582 = G__8589;
i__8577_8583 = G__8590;
continue;
}
} else
{var temp__4092__auto___8591 = cljs.core.seq.call(null,seq__8574_8580);if(temp__4092__auto___8591)
{var seq__8574_8592__$1 = temp__4092__auto___8591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8574_8592__$1))
{var c__7497__auto___8593 = cljs.core.chunk_first.call(null,seq__8574_8592__$1);{
var G__8594 = cljs.core.chunk_rest.call(null,seq__8574_8592__$1);
var G__8595 = c__7497__auto___8593;
var G__8596 = cljs.core.count.call(null,c__7497__auto___8593);
var G__8597 = 0;
seq__8574_8580 = G__8594;
chunk__8575_8581 = G__8595;
count__8576_8582 = G__8596;
i__8577_8583 = G__8597;
continue;
}
} else
{var vec__8579_8598 = cljs.core.first.call(null,seq__8574_8592__$1);var ev__8112__auto___8599 = cljs.core.nth.call(null,vec__8579_8598,0,null);var func__8113__auto___8600 = cljs.core.nth.call(null,vec__8579_8598,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8599,func__8113__auto___8600);
{
var G__8601 = cljs.core.next.call(null,seq__8574_8592__$1);
var G__8602 = null;
var G__8603 = 0;
var G__8604 = 0;
seq__8574_8580 = G__8601;
chunk__8575_8581 = G__8602;
count__8576_8582 = G__8603;
i__8577_8583 = G__8604;
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
lt.plugins.ltfiles.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8605 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8605))
{var ts_8606 = temp__4092__auto___8605;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8606))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8606);
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
lt.plugins.ltfiles.toggle_line_numbers = (function toggle_line_numbers(){var show_line_numbers = cljs.core.not.call(null,lt.util.cljs.str_contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),":lt.objs.editor/line-numbers"));var line_behavior = ((show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_behavior], null)], null)], null));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
}

//# sourceMappingURL=ltfiles_compiled.js.map