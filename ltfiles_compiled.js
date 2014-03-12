if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.util')) {
goog.provide('lt.plugins.ltfiles.util');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
/**
* Returns current word given string and cursor position in string
*/
lt.plugins.ltfiles.util.current_word_STAR_ = (function current_word_STAR_(string,cursor){return [cljs.core.str(cljs.core.re_find.call(null,/\S+$/,cljs.core.subs.call(null,string,0,cursor))),cljs.core.str(cljs.core.re_find.call(null,/^\S+/,cljs.core.subs.call(null,string,cursor)))].join('');
});
/**
* Current word under cursor
*/
lt.plugins.ltfiles.util.current_word = (function current_word(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);return lt.plugins.ltfiles.util.current_word_STAR_.call(null,lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor)),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor));
} else
{return null;
}
});
lt.plugins.ltfiles.util.parent_QMARK_ = (function parent_QMARK_(parent_path,path){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(parent_path)].join('')),path);
});
lt.plugins.ltfiles.util.current_file = (function current_file(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
lt.plugins.ltfiles.util.sh = (function sh(cmd){return require("child_process").exec(cmd,(function (err,stdout,stderr){if(cljs.core.seq.call(null,stdout))
{cljs.core.println.call(null,"STDOUT: ",stdout);
} else
{}
if(cljs.core.seq.call(null,stderr))
{return cljs.core.println.call(null,"STDERR: ",stderr);
} else
{return null;
}
}));
});
/**
* Platform-independent copy
*/
lt.plugins.ltfiles.util.copy = (function copy(text){return require("nw.gui").Clipboard.get().set(text,"text");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.input')) {
goog.provide('lt.plugins.ltfiles.input');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
lt.plugins.ltfiles.input.input = (function input(this$){var e__8143__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013))], null)], null));var seq__8363_8375 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"input-value","input-value",3916329248),lt.util.dom.val.call(null,me));
})], null)));var chunk__8364_8376 = null;var count__8365_8377 = 0;var i__8366_8378 = 0;while(true){
if((i__8366_8378 < count__8365_8377))
{var vec__8367_8379 = cljs.core._nth.call(null,chunk__8364_8376,i__8366_8378);var ev__8144__auto___8380 = cljs.core.nth.call(null,vec__8367_8379,0,null);var func__8145__auto___8381 = cljs.core.nth.call(null,vec__8367_8379,1,null);lt.util.dom.on.call(null,e__8143__auto__,ev__8144__auto___8380,func__8145__auto___8381);
{
var G__8382 = seq__8363_8375;
var G__8383 = chunk__8364_8376;
var G__8384 = count__8365_8377;
var G__8385 = (i__8366_8378 + 1);
seq__8363_8375 = G__8382;
chunk__8364_8376 = G__8383;
count__8365_8377 = G__8384;
i__8366_8378 = G__8385;
continue;
}
} else
{var temp__4092__auto___8386 = cljs.core.seq.call(null,seq__8363_8375);if(temp__4092__auto___8386)
{var seq__8363_8387__$1 = temp__4092__auto___8386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8363_8387__$1))
{var c__7497__auto___8388 = cljs.core.chunk_first.call(null,seq__8363_8387__$1);{
var G__8389 = cljs.core.chunk_rest.call(null,seq__8363_8387__$1);
var G__8390 = c__7497__auto___8388;
var G__8391 = cljs.core.count.call(null,c__7497__auto___8388);
var G__8392 = 0;
seq__8363_8375 = G__8389;
chunk__8364_8376 = G__8390;
count__8365_8377 = G__8391;
i__8366_8378 = G__8392;
continue;
}
} else
{var vec__8368_8393 = cljs.core.first.call(null,seq__8363_8387__$1);var ev__8144__auto___8394 = cljs.core.nth.call(null,vec__8368_8393,0,null);var func__8145__auto___8395 = cljs.core.nth.call(null,vec__8368_8393,1,null);lt.util.dom.on.call(null,e__8143__auto__,ev__8144__auto___8394,func__8145__auto___8395);
{
var G__8396 = cljs.core.next.call(null,seq__8363_8387__$1);
var G__8397 = null;
var G__8398 = 0;
var G__8399 = 0;
seq__8363_8375 = G__8396;
chunk__8364_8376 = G__8397;
count__8365_8377 = G__8398;
i__8366_8378 = G__8399;
continue;
}
}
} else
{}
}
break;
}
return e__8143__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.input","basic-input","lt.plugins.ltfiles.input/basic-input",3926831655),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-input","basic-input",3384203485),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.plugins.ltfiles.input.input.call(null,this$);
}));
lt.plugins.ltfiles.input.__GT_input = (function __GT_input(attrs){var G__8370 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.input","basic-input","lt.plugins.ltfiles.input/basic-input",3926831655));lt.object.merge_BANG_.call(null,G__8370,attrs);
return G__8370;
});
lt.plugins.ltfiles.input.basic_input = lt.plugins.ltfiles.input.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),""], null));
/**
* @param {...*} var_args
*/
lt.plugins.ltfiles.input.popup = (function() { 
var popup__delegate = function (input_obj,action_fn,p__8371){var map__8373 = p__8371;var map__8373__$1 = ((cljs.core.seq_QMARK_.call(null,map__8373))?cljs.core.apply.call(null,cljs.core.hash_map,map__8373):map__8373);var opts = map__8373__$1;if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(opts)))
{lt.object.merge_BANG_.call(null,input_obj,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)], null)));
} else
{}
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6755__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.ltfiles.input.input.call(null,input_obj),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return action_fn.call(null,new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,input_obj)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null)], null)], null));
};
var popup = function (input_obj,action_fn,var_args){
var p__8371 = null;if (arguments.length > 2) {
  p__8371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return popup__delegate.call(this,input_obj,action_fn,p__8371);};
popup.cljs$lang$maxFixedArity = 2;
popup.cljs$lang$applyTo = (function (arglist__8400){
var input_obj = cljs.core.first(arglist__8400);
arglist__8400 = cljs.core.next(arglist__8400);
var action_fn = cljs.core.first(arglist__8400);
var p__8371 = cljs.core.rest(arglist__8400);
return popup__delegate(input_obj,action_fn,p__8371);
});
popup.cljs$core$IFn$_invoke$arity$variadic = popup__delegate;
return popup;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.browse')) {
goog.provide('lt.plugins.ltfiles.browse');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.plugins.ltfiles.input');
goog.require('lt.objs.platform');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.app');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.ltfiles.input');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.browse.tab_open_current_url = (function tab_open_current_url(){var current_word = lt.plugins.ltfiles.util.current_word.call(null);var pre_commands = (((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)], null):cljs.core.PersistentVector.EMPTY);var commands = cljs.core.into.call(null,pre_commands,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"tabs.move-next-tabset","tabs.move-next-tabset",3557293229),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),current_word], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null));var seq__8249 = cljs.core.seq.call(null,commands);var chunk__8250 = null;var count__8251 = 0;var i__8252 = 0;while(true){
if((i__8252 < count__8251))
{var c = cljs.core._nth.call(null,chunk__8250,i__8252);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8265 = seq__8249;
var G__8266 = chunk__8250;
var G__8267 = count__8251;
var G__8268 = (i__8252 + 1);
seq__8249 = G__8265;
chunk__8250 = G__8266;
count__8251 = G__8267;
i__8252 = G__8268;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8249);if(temp__4092__auto__)
{var seq__8249__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249__$1))
{var c__7497__auto__ = cljs.core.chunk_first.call(null,seq__8249__$1);{
var G__8269 = cljs.core.chunk_rest.call(null,seq__8249__$1);
var G__8270 = c__7497__auto__;
var G__8271 = cljs.core.count.call(null,c__7497__auto__);
var G__8272 = 0;
seq__8249 = G__8269;
chunk__8250 = G__8270;
count__8251 = G__8271;
i__8252 = G__8272;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8249__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8273 = cljs.core.next.call(null,seq__8249__$1);
var G__8274 = null;
var G__8275 = 0;
var G__8276 = 0;
seq__8249 = G__8273;
chunk__8250 = G__8274;
count__8251 = G__8275;
i__8252 = G__8276;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.tab-open-current-url","ltfiles.tab-open-current-url",2401991009),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in another tabset and browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.tab_open_current_url], null));
lt.plugins.ltfiles.browse.system_open_current_url = (function system_open_current_url(){return lt.objs.platform.open.call(null,lt.plugins.ltfiles.util.current_word.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-current-url","ltfiles.system-open-current-url",3961612393),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in system browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_current_url], null));
lt.plugins.ltfiles.browse.open_plugin_changelog = (function open_plugin_changelog(plugin){var temp__4090__auto__ = (function (){var G__8254 = new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app));var G__8254__$1 = (((G__8254 == null))?null:cljs.core.get.call(null,G__8254,plugin));var G__8254__$2 = (((G__8254__$1 == null))?null:(function (){var m = G__8254__$1;var m__$1 = [cljs.core.str(new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str("/compare/"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str("...master")].join('');return m__$1;
})());return G__8254__$2;
})();if(cljs.core.truth_(temp__4090__auto__))
{var url = temp__4090__auto__;return lt.objs.platform.open.call(null,url);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Plugin "),cljs.core.str(plugin),cljs.core.str(" not found")].join(''));
}
});
lt.plugins.ltfiles.browse.system_open_plugin_changelog = (function system_open_plugin_changelog(){return lt.plugins.ltfiles.input.popup.call(null,lt.plugins.ltfiles.input.basic_input,lt.plugins.ltfiles.browse.open_plugin_changelog,new cljs.core.Keyword(null,"header","header",4087600639),"Enter Plugin",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"PLUGIN");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-plugin-changelog","ltfiles.system-open-plugin-changelog",3115235984),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens changelog/diff of plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_plugin_changelog], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.keybindings')) {
goog.provide('lt.plugins.ltfiles.keybindings');
goog.require('cljs.core');
goog.require('lt.plugins.ltfiles.input');
goog.require('lt.plugins.ltfiles.input');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.keyboard');
lt.plugins.ltfiles.keybindings.search_keybindings = (function search_keybindings(query,key_map){return cljs.core.filter.call(null,(function (p__8404){var vec__8405 = p__8404;var k = cljs.core.nth.call(null,vec__8405,0,null);var v = cljs.core.nth.call(null,vec__8405,1,null);return cljs.core.some.call(null,(function (p1__8401_SHARP_){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,query),[cljs.core.str(p1__8401_SHARP_)].join(''));
}),v);
}),key_map);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_ = (function find_command_keybindings_STAR_(query,key_map){var results = lt.plugins.ltfiles.keybindings.search_keybindings.call(null,query,key_map);cljs.core.println.call(null,"Matched",cljs.core.count.call(null,results),"keybindings:");
return cljs.core.prn.call(null,results);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings = (function find_command_keybindings(keymap){cljs.core.println.call(null,"Searching ",cljs.core.count.call(null,keymap),"keybindings...");
return lt.plugins.ltfiles.input.popup.call(null,lt.plugins.ltfiles.input.basic_input,(function (p1__8406_SHARP_){return lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_.call(null,p1__8406_SHARP_,keymap);
}),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"regex",new cljs.core.Keyword(null,"header","header",4087600639),"Enter command regex");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-command-keybindings","ltfiles.find-command-keybindings",575437544),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds keybinds that use a command for the given regex",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.keybindings.find_command_keybindings,cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles')) {
goog.provide('lt.plugins.ltfiles');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.app');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.clients.local');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Sets line number first time this is called and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_line_numbers = (function toggle_line_numbers(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var show_line_numbers = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__8457_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),p1__8457_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)));var line_behavior = (cljs.core.truth_(show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,line_behavior,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738),null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
/**
* Disables stripping whitespace on first call and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_strip_whitespace = (function toggle_strip_whitespace(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var strip_whitespace = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__8458_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__8458_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)));var add_behavior_fn = (cljs.core.truth_(strip_whitespace)?cljs.core.identity:((function (ws_behavior,strip_whitespace){
return (function (p1__8459_SHARP_){return cljs.core.cons.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__8459_SHARP_);
});})(ws_behavior,strip_whitespace))
);var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null),cljs.core.vec.call(null,add_behavior_fn.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
return setTimeout((function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Stripping whitespace on save "),cljs.core.str((cljs.core.truth_(strip_whitespace)?"enabled.":"disabled."))].join(''));
}),500);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-strip-whitespace","ltfiles.toggle-strip-whitespace",4020740638),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles stripping whitespace on save",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_strip_whitespace], null));
lt.plugins.ltfiles.open_console_log_file = (function open_console_log_file(){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"logs"),[cljs.core.str("window"),cljs.core.str(lt.objs.app.window_number.call(null)),cljs.core.str(".log")].join('')));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-console-log-file","ltfiles.open-console-log-file",4713561073),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: open current console log as an editable/searchable file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.open_console_log_file], null));
lt.plugins.ltfiles.plugin_name = "ltfiles";
lt.plugins.ltfiles.save_plugins = (function save_plugins(){var personal_plugins_file = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"plugins"),lt.plugins.ltfiles.plugin_name,"plugin.edn");var deps = ((function (personal_plugins_file){
return (function (p1__8460_SHARP_){return cljs.core.dissoc.call(null,p1__8460_SHARP_,lt.plugins.ltfiles.plugin_name);
});})(personal_plugins_file))
.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266)),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))))))));var plugin_body = cljs.core.pr_str.call(null,cljs.core.assoc.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,personal_plugins_file)),personal_plugins_file),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),deps));lt.objs.files.save.call(null,personal_plugins_file,clojure.string.replace.call(null,plugin_body,/(\"\s*,|\{|\},)/,(function (p1__8461_SHARP_){return [cljs.core.str(p1__8461_SHARP_),cljs.core.str("\n")].join('');
})));
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins saved to ",personal_plugins_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.save-plugins","ltfiles.save-plugins",2609342561),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Save plugins to :dependencies of personal plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.save_plugins], null));
lt.plugins.ltfiles.refresh_current_folder = (function refresh_current_folder(){var temp__4090__auto__ = cljs.core.some.call(null,(function (p1__8462_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8462_SHARP_)),lt.plugins.ltfiles.util.current_file.call(null))))
{return p1__8462_SHARP_;
} else
{return null;
}
}),lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.objs.sidebar.workspace","workspace.folder","lt.objs.sidebar.workspace/workspace.folder",1951235275)));if(cljs.core.truth_(temp__4090__auto__))
{var ws_folder = temp__4090__auto__;lt.object.raise.call(null,ws_folder,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.notifos.set_msg_BANG_.call(null,"Current workspace folder refreshed.");
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No workspace folder found to refresh!");
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.refresh-current-workspace-folder","ltfiles.refresh-current-workspace-folder",1545038013),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Refreshes current workspace folder",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.refresh_current_folder], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.connect-to-lt-ui","ltfiles.connect-to-lt-ui",4411103803),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Connect to LT UI via a keystroke",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.clients.local.init], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.vim')) {
goog.provide('lt.plugins.ltfiles.vim');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.plugins.vim');
goog.require('lt.plugins.vim');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.ltfiles.vim.last_selection = null;
lt.plugins.ltfiles.vim.visual_mode_with_history = (function visual_mode_with_history(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{lt.plugins.ltfiles.vim.last_selection = lt.objs.editor.selection_bounds.call(null,ed);
} else
{}
return CodeMirror.Vim.handleKey(lt.objs.editor.__GT_cm_ed.call(null,ed),"v");
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-visual-mode","ltfiles.vim-visual-mode",1069536336),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: vim visual mode with history",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.visual_mode_with_history], null));
lt.plugins.ltfiles.vim.vim_reselect_visual = (function vim_reselect_visual(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.ltfiles.vim.last_selection))
{return lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.vim.last_selection),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.vim.last_selection));
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-reselect-visual","ltfiles.vim-reselect-visual",1606199070),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: reselects last visual mode turned off by :ltfiles.vim-visual-mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_reselect_visual], null));
/**
* Turns off visual mode, v or V, after comment operation
*/
lt.plugins.ltfiles.vim.vim_toggle_comment_selection = (function vim_toggle_comment_selection(){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"toggle-comment-selection","toggle-comment-selection",4499822807));
if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null))))
{if(cljs.core.truth_(lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).state.vim.visualLine))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"V");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"v");
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-toggle-comment-selection","ltfiles.vim-toggle-comment-selection",2683966153),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggle comment selection that also handles visual mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_toggle_comment_selection], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.clojure')) {
goog.provide('lt.plugins.ltfiles.clojure');
goog.require('cljs.core');
goog.require('lt.objs.find');
goog.require('lt.objs.find');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
lt.plugins.ltfiles.clojure.find_next_clojure_word = (function find_next_clojure_word(){var word = cljs.core.re_find.call(null,/[a-zA-Z-0-9-!?\/_>:\.]+/,lt.plugins.ltfiles.util.current_word.call(null));lt.objs.find.set_val.call(null,lt.objs.find.bar,word);
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"search!","search!",2982232811),word);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-next-clojure-word","ltfiles.find-next-clojure-word",954390570),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds next clojure word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.clojure.find_next_clojure_word], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.inline-result')) {
goog.provide('lt.plugins.ltfiles.inline_result');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Finds the inline widget for the current line. If lines are selected, uses the last line
* of a selection (useful for eval).
*/
lt.plugins.ltfiles.inline_result.current_inline_widget = (function current_inline_widget(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.selection_bounds.call(null,ed))):new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return cljs.core.some.call(null,(function (p__8442){var vec__8443 = p__8442;var vec__8444 = cljs.core.nth.call(null,vec__8443,0,null);var l = cljs.core.nth.call(null,vec__8444,0,null);var t = cljs.core.nth.call(null,vec__8444,1,null);var widget = cljs.core.nth.call(null,vec__8443,1,null);if((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"inline","inline",4124874251))) && (cljs.core._EQ_.call(null,current_line,lt.objs.editor.lh__GT_line.call(null,ed,l))))
{return widget;
} else
{return null;
}
}),new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.ltfiles.inline_result.toggle_current_inline_result = (function toggle_current_inline_result(){var temp__4092__auto__ = lt.plugins.ltfiles.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline))))
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"double-click","double-click",956590078));
} else
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"click","click",1108654330));
}
} else
{return null;
}
});
lt.plugins.ltfiles.inline_result.copy_current_inline_result = (function copy_current_inline_result(){var temp__4092__auto__ = lt.plugins.ltfiles.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;return lt.plugins.ltfiles.util.copy.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline)));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-current-inline-result","ltfiles.toggle-current-inline-result",1523406293),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.toggle_current_inline_result], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.copy-current-inline-result","ltfiles.copy-current-inline-result",3799934710),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: copies current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.copy_current_inline_result], null));
}

//# sourceMappingURL=ltfiles_compiled.js.map