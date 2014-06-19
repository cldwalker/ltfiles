if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.popup')) {
goog.provide('lt.plugins.ltfiles.popup');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
lt.plugins.ltfiles.popup.input_html = (function input_html(this$){var e__7829__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013))], null)], null));var seq__8136_8152 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),((function (e__7829__auto__){
return (function (e){var me = this;return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"input-value","input-value",3916329248),lt.util.dom.val.call(null,me));
});})(e__7829__auto__))
], null)));var chunk__8137_8153 = null;var count__8138_8154 = 0;var i__8139_8155 = 0;while(true){
if((i__8139_8155 < count__8138_8154))
{var vec__8140_8156 = cljs.core._nth.call(null,chunk__8137_8153,i__8139_8155);var ev__7830__auto___8157 = cljs.core.nth.call(null,vec__8140_8156,0,null);var func__7831__auto___8158 = cljs.core.nth.call(null,vec__8140_8156,1,null);lt.util.dom.on.call(null,e__7829__auto__,ev__7830__auto___8157,func__7831__auto___8158);
{
var G__8159 = seq__8136_8152;
var G__8160 = chunk__8137_8153;
var G__8161 = count__8138_8154;
var G__8162 = (i__8139_8155 + 1);
seq__8136_8152 = G__8159;
chunk__8137_8153 = G__8160;
count__8138_8154 = G__8161;
i__8139_8155 = G__8162;
continue;
}
} else
{var temp__4092__auto___8163 = cljs.core.seq.call(null,seq__8136_8152);if(temp__4092__auto___8163)
{var seq__8136_8164__$1 = temp__4092__auto___8163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8136_8164__$1))
{var c__7112__auto___8165 = cljs.core.chunk_first.call(null,seq__8136_8164__$1);{
var G__8166 = cljs.core.chunk_rest.call(null,seq__8136_8164__$1);
var G__8167 = c__7112__auto___8165;
var G__8168 = cljs.core.count.call(null,c__7112__auto___8165);
var G__8169 = 0;
seq__8136_8152 = G__8166;
chunk__8137_8153 = G__8167;
count__8138_8154 = G__8168;
i__8139_8155 = G__8169;
continue;
}
} else
{var vec__8141_8170 = cljs.core.first.call(null,seq__8136_8164__$1);var ev__7830__auto___8171 = cljs.core.nth.call(null,vec__8141_8170,0,null);var func__7831__auto___8172 = cljs.core.nth.call(null,vec__8141_8170,1,null);lt.util.dom.on.call(null,e__7829__auto__,ev__7830__auto___8171,func__7831__auto___8172);
{
var G__8173 = cljs.core.next.call(null,seq__8136_8164__$1);
var G__8174 = null;
var G__8175 = 0;
var G__8176 = 0;
seq__8136_8152 = G__8173;
chunk__8137_8153 = G__8174;
count__8138_8154 = G__8175;
i__8139_8155 = G__8176;
continue;
}
}
} else
{}
}
break;
}
return e__7829__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-input","basic-input",3384203485),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.plugins.ltfiles.popup.input_html.call(null,this$);
}));
lt.plugins.ltfiles.popup.__GT_input = (function __GT_input(attrs){var G__8143 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164));lt.object.merge_BANG_.call(null,G__8143,attrs);
return G__8143;
});
lt.plugins.ltfiles.popup.basic_input = lt.plugins.ltfiles.popup.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),""], null));
/**
* @param {...*} var_args
*/
lt.plugins.ltfiles.popup.input = (function() { 
var input__delegate = function (input_obj,action_fn,p__8144){var map__8146 = p__8144;var map__8146__$1 = ((cljs.core.seq_QMARK_.call(null,map__8146))?cljs.core.apply.call(null,cljs.core.hash_map,map__8146):map__8146);var opts = map__8146__$1;if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(opts)))
{lt.object.merge_BANG_.call(null,input_obj,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)], null)));
} else
{}
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.ltfiles.popup.input_html.call(null,input_obj),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__8146,map__8146__$1,opts){
return (function (){return action_fn.call(null,new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,input_obj)));
});})(map__8146,map__8146__$1,opts))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null)], null)], null));
};
var input = function (input_obj,action_fn,var_args){
var p__8144 = null;if (arguments.length > 2) {
  p__8144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return input__delegate.call(this,input_obj,action_fn,p__8144);};
input.cljs$lang$maxFixedArity = 2;
input.cljs$lang$applyTo = (function (arglist__8177){
var input_obj = cljs.core.first(arglist__8177);
arglist__8177 = cljs.core.next(arglist__8177);
var action_fn = cljs.core.first(arglist__8177);
var p__8144 = cljs.core.rest(arglist__8177);
return input__delegate(input_obj,action_fn,p__8144);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* Display an info popup given a list of items to display.
* @param {...*} var_args
*/
lt.plugins.ltfiles.popup.info = (function() { 
var info__delegate = function (data,p__8148){var map__8150 = p__8148;var map__8150__$1 = ((cljs.core.seq_QMARK_.call(null,map__8150))?cljs.core.apply.call(null,cljs.core.hash_map,map__8150):map__8150);var opts = map__8150__$1;var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null),opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,((function (map__8150,map__8150__$1,opts){
return (function (p1__8147_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",1013907695),p1__8147_SHARP_],null));
});})(map__8150,map__8150__$1,opts))
,data)], null))], null));return lt.objs.popup.popup_BANG_.call(null,opts__$1);
};
var info = function (data,var_args){
var p__8148 = null;if (arguments.length > 1) {
  p__8148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return info__delegate.call(this,data,p__8148);};
info.cljs$lang$maxFixedArity = 1;
info.cljs$lang$applyTo = (function (arglist__8178){
var data = cljs.core.first(arglist__8178);
var p__8148 = cljs.core.rest(arglist__8178);
return info__delegate(data,p__8148);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.util')) {
goog.provide('lt.plugins.ltfiles.util');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
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
/**
* Returns a line of the current file relative to the cursor. Returns current line by default
*/
lt.plugins.ltfiles.util.relative_line = (function() {
var relative_line = null;
var relative_line__0 = (function (){return relative_line.call(null,0);
});
var relative_line__1 = (function (offset){var ed = lt.objs.editor.pool.last_active.call(null);var line_num = (offset + new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return lt.objs.editor.line.call(null,ed,line_num);
});
relative_line = function(offset){
switch(arguments.length){
case 0:
return relative_line__0.call(this);
case 1:
return relative_line__1.call(this,offset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
relative_line.cljs$core$IFn$_invoke$arity$0 = relative_line__0;
relative_line.cljs$core$IFn$_invoke$arity$1 = relative_line__1;
return relative_line;
})()
;
/**
* CodeMirror object for current editor
*/
lt.plugins.ltfiles.util.current_ed = (function current_ed(){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.ltfiles.util.parent_QMARK_ = (function parent_QMARK_(parent_path,path){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(parent_path)].join('')),path);
});
lt.plugins.ltfiles.util.current_file = (function current_file(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
lt.plugins.ltfiles.util.current_directory = (function current_directory(){return lt.objs.files.parent.call(null,lt.plugins.ltfiles.util.current_file.call(null));
});
lt.plugins.ltfiles.util.file_folder = (function file_folder(file){return cljs.core.some.call(null,(function (p1__8226_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8226_SHARP_,file)))
{return p1__8226_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.ltfiles.util.current_folder = (function current_folder(){var file = lt.plugins.ltfiles.util.current_file.call(null);return cljs.core.some.call(null,((function (file){
return (function (p1__8227_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8227_SHARP_,file)))
{return p1__8227_SHARP_;
} else
{return null;
}
});})(file))
,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
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
* Execs a vec of commands - same format as a user.keymap vec
*/
lt.plugins.ltfiles.util.exec_commands = (function exec_commands(commands){var seq__8232 = cljs.core.seq.call(null,commands);var chunk__8233 = null;var count__8234 = 0;var i__8235 = 0;while(true){
if((i__8235 < count__8234))
{var c = cljs.core._nth.call(null,chunk__8233,i__8235);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8236 = seq__8232;
var G__8237 = chunk__8233;
var G__8238 = count__8234;
var G__8239 = (i__8235 + 1);
seq__8232 = G__8236;
chunk__8233 = G__8237;
count__8234 = G__8238;
i__8235 = G__8239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8232);if(temp__4092__auto__)
{var seq__8232__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8232__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8232__$1);{
var G__8240 = cljs.core.chunk_rest.call(null,seq__8232__$1);
var G__8241 = c__7112__auto__;
var G__8242 = cljs.core.count.call(null,c__7112__auto__);
var G__8243 = 0;
seq__8232 = G__8240;
chunk__8233 = G__8241;
count__8234 = G__8242;
i__8235 = G__8243;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8232__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8244 = cljs.core.next.call(null,seq__8232__$1);
var G__8245 = null;
var G__8246 = 0;
var G__8247 = 0;
seq__8232 = G__8244;
chunk__8233 = G__8245;
count__8234 = G__8246;
i__8235 = G__8247;
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
/**
* Insert string at the beginning of the next line
*/
lt.plugins.ltfiles.util.insert_at_next_line = (function insert_at_next_line(ed,s){lt.objs.editor.replace.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)) + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),s);
return ed;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.selector')) {
goog.provide('lt.plugins.ltfiles.selector');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
lt.plugins.ltfiles.selector.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.selector","set-selected","lt.plugins.ltfiles.selector/set-selected",3788256082),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.selector.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.ltfiles.selector.selector = (function selector(opts){var G__8180 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8180,new cljs.core.Keyword("lt.plugins.ltfiles.selector","set-selected","lt.plugins.ltfiles.selector/set-selected",3788256082));
return G__8180;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.browse')) {
goog.provide('lt.plugins.ltfiles.browse');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.browse.tab_open_current_url = (function tab_open_current_url(){var current_word = lt.plugins.ltfiles.util.current_word.call(null);var commands = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),current_word], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null);return lt.plugins.ltfiles.util.exec_commands.call(null,commands);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.tab-open-current-url","ltfiles.tab-open-current-url",2401991009),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in another tabset and browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.tab_open_current_url], null));
lt.plugins.ltfiles.browse.system_open_current_url = (function system_open_current_url(){return lt.objs.platform.open.call(null,lt.plugins.ltfiles.util.current_word.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-current-url","ltfiles.system-open-current-url",3961612393),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens url under cursor in system browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_current_url], null));
lt.plugins.ltfiles.browse.plugin_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949)], null));
lt.plugins.ltfiles.browse.system_open_plugin_changelog = (function system_open_plugin_changelog(plugin){return lt.objs.platform.open.call(null,[cljs.core.str(clojure.string.replace_first.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(plugin),/\.git$/,"")),cljs.core.str("/compare/"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(plugin)),cljs.core.str("...master")].join(''));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.system-open-plugin-changelog","ltfiles.system-open-plugin-changelog",3115235984),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: opens changelog/diff of plugin",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.browse.plugin_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.browse.system_open_plugin_changelog], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.keybindings')) {
goog.provide('lt.plugins.ltfiles.keybindings');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('goog.string');
goog.require('lt.plugins.ltfiles.popup');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.keyboard');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.popup');
goog.require('lt.objs.keyboard');
goog.require('goog.string');
lt.plugins.ltfiles.keybindings.search_keybindings = (function search_keybindings(query,key_map){return cljs.core.filter.call(null,(function (p__8040){var vec__8041 = p__8040;var k = cljs.core.nth.call(null,vec__8041,0,null);var v = cljs.core.nth.call(null,vec__8041,1,null);return cljs.core.some.call(null,((function (vec__8041,k,v){
return (function (p1__8037_SHARP_){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,query),[cljs.core.str(p1__8037_SHARP_)].join(''));
});})(vec__8041,k,v))
,v);
}),key_map);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_ = (function find_command_keybindings_STAR_(query,key_map){var results = lt.plugins.ltfiles.keybindings.search_keybindings.call(null,query,key_map);cljs.core.println.call(null,"Matched",cljs.core.count.call(null,results),"keybindings:");
return cljs.core.prn.call(null,results);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings = (function find_command_keybindings(keymap){cljs.core.println.call(null,"Searching ",cljs.core.count.call(null,keymap),"keybindings...");
return lt.plugins.ltfiles.popup.input.call(null,lt.plugins.ltfiles.popup.basic_input,(function (p1__8042_SHARP_){return lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_.call(null,p1__8042_SHARP_,keymap);
}),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"regex",new cljs.core.Keyword(null,"header","header",4087600639),"Enter command regex");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-command-keybindings","ltfiles.find-command-keybindings",575437544),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds keybindings that use a command for the given regex",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.keybindings.find_command_keybindings,cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null));
lt.plugins.ltfiles.keybindings.vim_map_keys = (function vim_map_keys(){var behaviors = cljs.core.get_in.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.objs.settings.user_behaviors_path)),"user.behaviors"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"app","app",1014001043)], null));var behaviors__$1 = cljs.core.some.call(null,((function (behaviors){
return (function (p1__8043_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8043_SHARP_),new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)))
{return cljs.core.second.call(null,p1__8043_SHARP_);
} else
{return null;
}
});})(behaviors))
,behaviors);return behaviors__$1;
});
lt.plugins.ltfiles.keybindings.key_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p__8047){var vec__8048 = p__8047;var k = cljs.core.nth.call(null,vec__8048,0,null);var v = cljs.core.nth.call(null,vec__8048,1,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),goog.string.htmlEscape([cljs.core.str(k),cljs.core.str(": "),cljs.core.str(v)].join('')),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"commands","commands",4706336250),v], null);
}),cljs.core.merge.call(null,cljs.core.deref.call(null,lt.objs.keyboard.key_map),lt.plugins.ltfiles.keybindings.vim_map_keys.call(null))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8045_SHARP_,p2__8046_SHARP_,p3__8044_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8044_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.keybinding-bar","ltfiles.keybinding-bar",2773746269),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search keybinding or command of keys",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.keybindings.key_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.prn], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.clojure')) {
goog.provide('lt.plugins.ltfiles.clojure');
goog.require('cljs.core');
goog.require('lt.objs.find');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.find');
goog.require('lt.objs.editor');
lt.plugins.ltfiles.clojure.current_word = (function current_word(){return new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,lt.objs.editor.pool.last_active.call(null)));
});
lt.plugins.ltfiles.clojure.find_next_clojure_word = (function find_next_clojure_word(){var word = lt.plugins.ltfiles.clojure.current_word.call(null);lt.objs.find.set_val.call(null,lt.objs.find.bar,word);
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"search!","search!",2982232811),word);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-next-clojure-word","ltfiles.find-next-clojure-word",954390570),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds next clojure word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.clojure.find_next_clojure_word], null));
lt.plugins.ltfiles.clojure.eval_code = (function eval_code(editor,code){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"ns","ns",1013907767),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.clojure.opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(info);
}
})(),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end")),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.clojure.opts),new cljs.core.Keyword(null,"result-type","result-type",4725630556),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(lt.plugins.ltfiles.clojure.opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.Keyword(null,"inline","inline",4124874251);
}
})()], null));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));return lt.object.raise.call(null,lt.plugins.clojure.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-fn-source","ltfiles.print-fn-source",3601345299),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print current fn's source",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.ltfiles.clojure.eval_code.call(null,lt.objs.editor.pool.last_active.call(null),[cljs.core.str("(clojure.repl/source "),cljs.core.str(lt.plugins.ltfiles.clojure.current_word.call(null)),cljs.core.str(")")].join(''));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.search')) {
goog.provide('lt.plugins.ltfiles.search');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('lt.objs.search');
goog.require('lt.objs.search');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.ltfiles.clojure');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.clojure');
goog.require('lt.object');
goog.require('lt.object');
goog.require('goog.string');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
cljs.core._add_method.call(null,lt.objs.search.location,"<directory>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltfiles.util.current_directory.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<file>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltfiles.util.current_file.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<folder>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.ltfiles.util.current_folder.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<plugins>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.lt_user_dir.call(null,"plugins")], null);
}));
lt.plugins.ltfiles.search.set_search = (function set_search(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.search","input.search",1599745982),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.set_location = (function set_location(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.loc","input.loc",2719736462),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.set_replace = (function set_replace(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.replace","input.replace",1121297410),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.ltfiles.search.open_search_for = (function open_search_for(path){lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,path);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-directory","ltfiles.search-current-directory",1641261253),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current directory",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.search.open_search_for,"<directory>")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder","ltfiles.search-current-folder",1946899130),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.search.open_search_for,"<folder>")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-file","ltfiles.search-current-file",2829392456),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current file",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.search.open_search_for,"<file>")], null));
lt.plugins.ltfiles.search.search_current_file_with_current_word = (function search_current_file_with_current_word(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.ltfiles.clojure.current_word.call(null));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<file>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-file-with-current-word","ltfiles.search-current-file-with-current-word",3403752640),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current file with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_file_with_current_word], null));
lt.plugins.ltfiles.search.search_current_folder_with_current_word = (function search_current_folder_with_current_word(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.ltfiles.clojure.current_word.call(null));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder-with-current-word","ltfiles.search-current-folder-with-current-word",2752046258),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_folder_with_current_word], null));
lt.plugins.ltfiles.search.search_current_folder_for_fn_usage = (function search_current_folder_for_fn_usage(){lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,clojure.string.replace_first.call(null,"/\\((\\S+\\/)?%s\\s+/","%s",goog.string.regExpEscape(lt.plugins.ltfiles.clojure.current_word.call(null))));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.search-current-folder-for-fn-usage","ltfiles.search-current-folder-for-fn-usage",3998285495),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Searches current folder for fn usage",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.search.search_current_folder_for_fn_usage], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles')) {
goog.provide('lt.plugins.ltfiles');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.settings');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.metrics');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.settings');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.metrics');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
cljs.core._STAR_print_level_STAR_ = 5;
/**
* Sets line number first time this is called and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_line_numbers = (function toggle_line_numbers(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var show_line_numbers = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__7937_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),p1__7937_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)));var line_behavior = (cljs.core.truth_(show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,line_behavior,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738),null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
/**
* Disables stripping whitespace on first call and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_strip_whitespace = (function toggle_strip_whitespace(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var strip_whitespace = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__7938_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__7938_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)));var add_behavior_fn = (cljs.core.truth_(strip_whitespace)?cljs.core.identity:((function (ws_behavior,strip_whitespace){
return (function (p1__7939_SHARP_){return cljs.core.cons.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__7939_SHARP_);
});})(ws_behavior,strip_whitespace))
);var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null),cljs.core.vec.call(null,add_behavior_fn.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
return setTimeout(((function (ws_behavior,strip_whitespace,add_behavior_fn,behavior_string){
return (function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Stripping whitespace on save "),cljs.core.str((cljs.core.truth_(strip_whitespace)?"enabled.":"disabled."))].join(''));
});})(ws_behavior,strip_whitespace,add_behavior_fn,behavior_string))
,500);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-strip-whitespace","ltfiles.toggle-strip-whitespace",4020740638),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles stripping whitespace on save",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_strip_whitespace], null));
lt.plugins.ltfiles.open_console_log_file = (function open_console_log_file(){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"logs"),[cljs.core.str("window"),cljs.core.str(lt.objs.app.window_number.call(null)),cljs.core.str(".log")].join('')));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-console-log-file","ltfiles.open-console-log-file",4713561073),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: open current console log as an editable/searchable file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.open_console_log_file], null));
lt.plugins.ltfiles.rotate_console = (function rotate_console(){if(cljs.core.truth_(lt.objs.bottombar.active_QMARK_.call(null,lt.objs.console.console)))
{return lt.plugins.ltfiles.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console.hide","console.hide",1651368683),new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"console-tab","console-tab",3389753745),new cljs.core.Keyword(null,"console.show","console.show",1651695782),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
} else
{return lt.plugins.ltfiles.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630),new cljs.core.Keyword(null,"ltfiles.smart-tab-close","ltfiles.smart-tab-close",1986819119),new cljs.core.Keyword(null,"toggle-console","toggle-console",4454540112),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.rotate-console","ltfiles.rotate-console",609699894),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Rotates open console between bottombar and another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.rotate_console], null));
lt.plugins.ltfiles.plugin_name = "ltfiles";
lt.plugins.ltfiles.save_plugins = (function save_plugins(){var personal_plugins_file = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"plugins"),lt.plugins.ltfiles.plugin_name,"plugin.edn");var deps = ((function (personal_plugins_file){
return (function (p1__7940_SHARP_){return cljs.core.dissoc.call(null,p1__7940_SHARP_,lt.plugins.ltfiles.plugin_name);
});})(personal_plugins_file))
.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266)),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))))))));var plugin_body = cljs.core.pr_str.call(null,cljs.core.assoc.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,personal_plugins_file)),personal_plugins_file),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),deps));lt.objs.files.save.call(null,personal_plugins_file,clojure.string.replace.call(null,plugin_body,/(\"\s*,|\{|\},)/,((function (personal_plugins_file,deps,plugin_body){
return (function (p1__7941_SHARP_){return [cljs.core.str(p1__7941_SHARP_),cljs.core.str("\n")].join('');
});})(personal_plugins_file,deps,plugin_body))
));
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins saved to ",personal_plugins_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.save-plugins","ltfiles.save-plugins",2609342561),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Save plugins to :dependencies of personal plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.save_plugins], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.add-plugins-folder","ltfiles.add-plugins-folder",3510706104),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Add plugins folder to current workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.objs.files.lt_user_dir.call(null,"plugins"));
})], null));
lt.plugins.ltfiles.refresh_current_folder = (function refresh_current_folder(){var temp__4090__auto__ = (function (){var folder = lt.plugins.ltfiles.util.current_folder.call(null);var folder__$1 = cljs.core.some.call(null,((function (folder){
return (function (p1__7942_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__7942_SHARP_)),folder))
{return p1__7942_SHARP_;
} else
{return null;
}
});})(folder))
,lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.objs.sidebar.workspace","workspace.folder","lt.objs.sidebar.workspace/workspace.folder",1951235275)));return folder__$1;
})();if(cljs.core.truth_(temp__4090__auto__))
{var ws_folder = temp__4090__auto__;lt.object.raise.call(null,ws_folder,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.objs.notifos.set_msg_BANG_.call(null,"Current workspace folder refreshed.");
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No workspace folder found to refresh!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.refresh-current-workspace-folder","ltfiles.refresh-current-workspace-folder",1545038013),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Refreshes current workspace folder",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.refresh_current_folder], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-current-file","ltfiles.print-current-file",586020417),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print current file path",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Current path is "),cljs.core.str(lt.plugins.ltfiles.util.current_file.call(null))].join(''));
})], null));
lt.plugins.ltfiles.open_current_file = (function open_current_file(){var current_file = lt.plugins.ltfiles.util.current_file.call(null);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373));
return lt.objs.opener.open_path.call(null,lt.objs.opener.opener,current_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vertical-split-current-file","ltfiles.vertical-split-current-file",3238753485),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: split current file vertically i.e. open in another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.open_current_file], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.developer')) {
goog.provide('lt.plugins.ltfiles.developer');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.clients.local');
goog.require('goog.string');
goog.require('lt.objs.search');
goog.require('lt.objs.context');
goog.require('lt.plugins.ltfiles.search');
goog.require('lt.objs.search');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.plugins.aleph');
goog.require('lt.plugins.aleph');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('goog.string');
goog.require('lt.objs.clients.local');
goog.require('lt.plugins.ltfiles.search');
goog.require('lt.objs.command');
lt.plugins.ltfiles.developer.show_and_focus_filter_list = (function show_and_focus_filter_list(flist){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"aleph.browse","aleph.browse",2561850968));
return lt.util.dom.$.call(null,new cljs.core.Keyword(null,".search",".search",2278031048),lt.object.__GT_content.call(null,flist)).focus();
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.behavior-bar","ltfiles.behavior-bar",4043064105),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search behaviors in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.b_list)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.object-bar","ltfiles.object-bar",1253888342),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search objects in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.o_list)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.tag-bar","ltfiles.tag-bar",3352549843),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Search tags in aleph",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.developer.show_and_focus_filter_list,lt.plugins.aleph.t_list)], null));
lt.plugins.ltfiles.developer.cmd_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),cljs.core.map.call(null,(function (p1__7967_SHARP_){return cljs.core.assoc.call(null,p1__7967_SHARP_,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__7967_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__7967_SHARP_))].join(''));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.command.manager)))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"command or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__7969_SHARP_,p2__7970_SHARP_,p3__7968_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__7968_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.commandbar","ltfiles.commandbar",972376505),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: executes a command by its id or desc",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (cmd){return new cljs.core.Keyword(null,"exec","exec",1017031683).cljs$core$IFn$_invoke$arity$1(cmd).call(null);
})], null));
lt.plugins.ltfiles.developer.__BEH__open_first_search_result = (function __BEH__open_first_search_result(this$,v){lt.object.rem_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.next","searcher.next",3418881118));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.developer.__BEH__open_first_search_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done-searching","done-searching",1230467105),null], null), null));
lt.plugins.ltfiles.developer.jump_to_first_result = (function jump_to_first_result(__GT_search,selection){lt.object.add_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.ltfiles.developer","open-first-search-result","lt.plugins.ltfiles.developer/open-first-search-result",2623129376));
lt.plugins.ltfiles.search.set_search.call(null,lt.objs.search.searcher,__GT_search.call(null,selection));
lt.plugins.ltfiles.search.set_location.call(null,lt.objs.search.searcher,"<workspace>");
lt.plugins.ltfiles.search.set_replace.call(null,lt.objs.search.searcher,null);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.plugins.ltfiles.developer.jump_to_command = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__7971_SHARP_){return [cljs.core.str("/:command\\s+"),cljs.core.str(goog.string.regExpEscape(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__7971_SHARP_))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-command","ltfiles.jump-to-command",2538981995),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen command",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_command], null));
lt.plugins.ltfiles.developer.behavior_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),cljs.core.map.call(null,(function (p1__7972_SHARP_){return cljs.core.assoc.call(null,cljs.core.select_keys.call(null,p1__7972_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"desc","desc",1016984067)], null)),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__7972_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__7972_SHARP_))].join(''));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"name or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__7974_SHARP_,p2__7975_SHARP_,p3__7973_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__7973_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltfiles.developer.jump_to_behavior = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__7976_SHARP_){return [cljs.core.str("/behavior\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__7976_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-behavior","ltfiles.jump-to-behavior",3160122326),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen behavior",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.behavior_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_behavior], null));
lt.plugins.ltfiles.developer.object_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p1__7977_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"index","index",1114250308)],[p1__7977_SHARP_,[cljs.core.str(p1__7977_SHARP_)].join('')]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.object_defs))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"object"], null));
lt.plugins.ltfiles.developer.jump_to_object = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__7978_SHARP_){return [cljs.core.str("/object\\*\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__7978_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-object","ltfiles.jump-to-object",3195662659),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen object definition",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.object_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_object], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.connect-to-lt-ui","ltfiles.connect-to-lt-ui",4411103803),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Connect to LT UI via a keystroke",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.clients.local.init], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-context","ltfiles.print-context",2277396546),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print context",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return cljs.core.prn.call(null,lt.objs.context.current.call(null));
})], null));
}
if(!lt.util.load.provided_QMARK_('goog.functions')) {
// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities for creating functions. Loosely inspired by the
 * java classes: http://goo.gl/GM0Hmu and http://goo.gl/6k7nI8.
 *
 * @author nicksantos@google.com (Nick Santos)
 */


goog.provide('goog.functions');


/**
 * Creates a function that always returns the same value.
 * @param {T} retValue The value to return.
 * @return {function():T} The new function.
 * @template T
 */
goog.functions.constant = function(retValue) {
  return function() {
    return retValue;
  };
};


/**
 * Always returns false.
 * @type {function(...): boolean}
 */
goog.functions.FALSE = goog.functions.constant(false);


/**
 * Always returns true.
 * @type {function(...): boolean}
 */
goog.functions.TRUE = goog.functions.constant(true);


/**
 * Always returns NULL.
 * @type {function(...): null}
 */
goog.functions.NULL = goog.functions.constant(null);


/**
 * A simple function that returns the first argument of whatever is passed
 * into it.
 * @param {T=} opt_returnValue The single value that will be returned.
 * @param {...*} var_args Optional trailing arguments. These are ignored.
 * @return {T} The first argument passed in, or undefined if nothing was passed.
 * @template T
 */
goog.functions.identity = function(opt_returnValue, var_args) {
  return opt_returnValue;
};


/**
 * Creates a function that always throws an error with the given message.
 * @param {string} message The error message.
 * @return {!Function} The error-throwing function.
 */
goog.functions.error = function(message) {
  return function() {
    throw Error(message);
  };
};


/**
 * Creates a function that throws the given object.
 * @param {*} err An object to be thrown.
 * @return {!Function} The error-throwing function.
 */
goog.functions.fail = function(err) {
  return function() {
    throw err;
  }
};


/**
 * Given a function, create a function that keeps opt_numArgs arguments and
 * silently discards all additional arguments.
 * @param {Function} f The original function.
 * @param {number=} opt_numArgs The number of arguments to keep. Defaults to 0.
 * @return {!Function} A version of f that only keeps the first opt_numArgs
 *     arguments.
 */
goog.functions.lock = function(f, opt_numArgs) {
  opt_numArgs = opt_numArgs || 0;
  return function() {
    return f.apply(this, Array.prototype.slice.call(arguments, 0, opt_numArgs));
  };
};


/**
 * Creates a function that returns its nth argument.
 * @param {number} n The position of the return argument.
 * @return {!Function} A new function.
 */
goog.functions.nth = function(n) {
  return function() {
    return arguments[n];
  };
};


/**
 * Given a function, create a new function that swallows its return value
 * and replaces it with a new one.
 * @param {Function} f A function.
 * @param {T} retValue A new return value.
 * @return {function(...[?]):T} A new function.
 * @template T
 */
goog.functions.withReturnValue = function(f, retValue) {
  return goog.functions.sequence(f, goog.functions.constant(retValue));
};


/**
 * Creates the composition of the functions passed in.
 * For example, (goog.functions.compose(f, g))(a) is equivalent to f(g(a)).
 * @param {function(...[?]):T} fn The final function.
 * @param {...Function} var_args A list of functions.
 * @return {function(...[?]):T} The composition of all inputs.
 * @template T
 */
goog.functions.compose = function(fn, var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    if (length) {
      result = functions[length - 1].apply(this, arguments);
    }

    for (var i = length - 2; i >= 0; i--) {
      result = functions[i].call(this, result);
    }
    return result;
  };
};


/**
 * Creates a function that calls the functions passed in in sequence, and
 * returns the value of the last function. For example,
 * (goog.functions.sequence(f, g))(x) is equivalent to f(x),g(x).
 * @param {...Function} var_args A list of functions.
 * @return {!Function} A function that calls all inputs in sequence.
 */
goog.functions.sequence = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    for (var i = 0; i < length; i++) {
      result = functions[i].apply(this, arguments);
    }
    return result;
  };
};


/**
 * Creates a function that returns true if each of its components evaluates
 * to true. The components are evaluated in order, and the evaluation will be
 * short-circuited as soon as a function returns false.
 * For example, (goog.functions.and(f, g))(x) is equivalent to f(x) && g(x).
 * @param {...Function} var_args A list of functions.
 * @return {function(...[?]):boolean} A function that ANDs its component
 *      functions.
 */
goog.functions.and = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for (var i = 0; i < length; i++) {
      if (!functions[i].apply(this, arguments)) {
        return false;
      }
    }
    return true;
  };
};


/**
 * Creates a function that returns true if any of its components evaluates
 * to true. The components are evaluated in order, and the evaluation will be
 * short-circuited as soon as a function returns true.
 * For example, (goog.functions.or(f, g))(x) is equivalent to f(x) || g(x).
 * @param {...Function} var_args A list of functions.
 * @return {function(...[?]):boolean} A function that ORs its component
 *    functions.
 */
goog.functions.or = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for (var i = 0; i < length; i++) {
      if (functions[i].apply(this, arguments)) {
        return true;
      }
    }
    return false;
  };
};


/**
 * Creates a function that returns the Boolean opposite of a provided function.
 * For example, (goog.functions.not(f))(x) is equivalent to !f(x).
 * @param {!Function} f The original function.
 * @return {function(...[?]):boolean} A function that delegates to f and returns
 * opposite.
 */
goog.functions.not = function(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/**
 * Generic factory function to construct an object given the constructor
 * and the arguments. Intended to be bound to create object factories.
 *
 * Callers should cast the result to the appropriate type for proper type
 * checking by the compiler.
 * @param {!Function} constructor The constructor for the Object.
 * @param {...*} var_args The arguments to be passed to the constructor.
 * @return {!Object} A new instance of the class given in {@code constructor}.
 */
goog.functions.create = function(constructor, var_args) {
  /**
 * @constructor
 * @final
 */
  var temp = function() {};
  temp.prototype = constructor.prototype;

  // obj will have constructor's prototype in its chain and
  // 'obj instanceof constructor' will be true.
  var obj = new temp();

  // obj is initialized by constructor.
  // arguments is only array-like so lacks shift(), but can be used with
  // the Array prototype function.
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
};


/**
 * @define {boolean} Whether the return value cache should be used.
 *    This should only be used to disable caches when testing.
 */
goog.define('goog.functions.CACHE_RETURN_VALUE', true);


/**
 * Gives a wrapper function that caches the return value of a parameterless
 * function when first called.
 *
 * When called for the first time, the given function is called and its
 * return value is cached (thus this is only appropriate for idempotent
 * functions).  Subsequent calls will return the cached return value. This
 * allows the evaluation of expensive functions to be delayed until first used.
 *
 * To cache the return values of functions with parameters, see goog.memoize.
 *
 * @param {!function():T} fn A function to lazily evaluate.
 * @return {!function():T} A wrapped version the function.
 * @template T
 */
goog.functions.cacheReturnValue = function(fn) {
  var called = false;
  var value;

  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return fn();
    }

    if (!called) {
      value = fn();
      called = true;
    }

    return value;
  }
};
}
if(!lt.util.load.provided_QMARK_('goog.debug.Error')) {
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Provides a base class for custom Error objects such that the
 * stack is correctly maintained.
 *
 * You should never need to throw goog.debug.Error(msg) directly, Error(msg) is
 * sufficient.
 *
 */

goog.provide('goog.debug.Error');



/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
goog.debug.Error = function(opt_msg) {

  // Attempt to ensure there is a stack trace.
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var stack = new Error().stack;
    if (stack) {
      this.stack = stack;
    }
  }

  if (opt_msg) {
    this.message = String(opt_msg);
  }
};
goog.inherits(goog.debug.Error, Error);


/** @override */
goog.debug.Error.prototype.name = 'CustomError';
}
if(!lt.util.load.provided_QMARK_('goog.dom.NodeType')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Definition of goog.dom.NodeType.
 */

goog.provide('goog.dom.NodeType');


/**
 * Constants for the nodeType attribute in the Node interface.
 *
 * These constants match those specified in the Node interface. These are
 * usually present on the Node object in recent browsers, but not in older
 * browsers (specifically, early IEs) and thus are given here.
 *
 * In some browsers (early IEs), these are not defined on the Node object,
 * so they are provided here.
 *
 * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
 * @enum {number}
 */
goog.dom.NodeType = {
  ELEMENT: 1,
  ATTRIBUTE: 2,
  TEXT: 3,
  CDATA_SECTION: 4,
  ENTITY_REFERENCE: 5,
  ENTITY: 6,
  PROCESSING_INSTRUCTION: 7,
  COMMENT: 8,
  DOCUMENT: 9,
  DOCUMENT_TYPE: 10,
  DOCUMENT_FRAGMENT: 11,
  NOTATION: 12
};
}
if(!lt.util.load.provided_QMARK_('goog.asserts')) {
// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities to check the preconditions, postconditions and
 * invariants runtime.
 *
 * Methods in this package should be given special treatment by the compiler
 * for type-inference. For example, <code>goog.asserts.assert(foo)</code>
 * will restrict <code>foo</code> to a truthy value.
 *
 * The compiler has an option to disable asserts. So code like:
 * <code>
 * var x = goog.asserts.assert(foo()); goog.asserts.assert(bar());
 * </code>
 * will be transformed into:
 * <code>
 * var x = foo();
 * </code>
 * The compiler will leave in foo() (because its return value is used),
 * but it will remove bar() because it assumes it does not have side-effects.
 *
 */

goog.provide('goog.asserts');
goog.provide('goog.asserts.AssertionError');

goog.require('goog.debug.Error');
goog.require('goog.dom.NodeType');
goog.require('goog.string');


/**
 * @define {boolean} Whether to strip out asserts or to leave them in.
 */
goog.define('goog.asserts.ENABLE_ASSERTS', goog.DEBUG);



/**
 * Error object for failed assertions.
 * @param {string} messagePattern The pattern that was used to form message.
 * @param {!Array.<*>} messageArgs The items to substitute into the pattern.
 * @constructor
 * @extends {goog.debug.Error}
 * @final
 */
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  // Remove the messagePattern afterwards to avoid permenantly modifying the
  // passed in array.
  messageArgs.shift();

  /**
   * The message pattern used to format the error message. Error handlers can
   * use this to uniquely identify the assertion.
   * @type {string}
   */
  this.messagePattern = messagePattern;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);


/** @override */
goog.asserts.AssertionError.prototype.name = 'AssertionError';


/**
 * Throws an exception with the given message and "Assertion failed" prefixed
 * onto it.
 * @param {string} defaultMessage The message to use if givenMessage is empty.
 * @param {Array.<*>} defaultArgs The substitution arguments for defaultMessage.
 * @param {string|undefined} givenMessage Message supplied by the caller.
 * @param {Array.<*>} givenArgs The substitution arguments for givenMessage.
 * @throws {goog.asserts.AssertionError} When the value is not a number.
 * @private
 */
goog.asserts.doAssertFailure_ =
    function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = 'Assertion failed';
  if (givenMessage) {
    message += ': ' + givenMessage;
    var args = givenArgs;
  } else if (defaultMessage) {
    message += ': ' + defaultMessage;
    args = defaultArgs;
  }
  // The '' + works around an Opera 10 bug in the unit tests. Without it,
  // a stack trace is added to var message above. With this, a stack trace is
  // not added until this line (it causes the extra garbage to be added after
  // the assertion message instead of in the middle of it).
  throw new goog.asserts.AssertionError('' + message, args || []);
};


/**
 * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is
 * true.
 * @template T
 * @param {T} condition The condition to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {T} The value of the condition.
 * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
 */
goog.asserts.assert = function(condition, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_('', null, opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return condition;
};


/**
 * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
 * when we want to add a check in the unreachable area like switch-case
 * statement:
 *
 * <pre>
 *  switch(type) {
 *    case FOO: doSomething(); break;
 *    case BAR: doSomethingElse(); break;
 *    default: goog.assert.fail('Unrecognized type: ' + type);
 *      // We have only 2 types - "default:" section is unreachable code.
 *  }
 * </pre>
 *
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @throws {goog.asserts.AssertionError} Failure.
 */
goog.asserts.fail = function(opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError(
        'Failure' + (opt_message ? ': ' + opt_message : ''),
        Array.prototype.slice.call(arguments, 1));
  }
};


/**
 * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {number} The value, guaranteed to be a number when asserts enabled.
 * @throws {goog.asserts.AssertionError} When the value is not a number.
 */
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_('Expected number but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {number} */ (value);
};


/**
 * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {string} The value, guaranteed to be a string when asserts enabled.
 * @throws {goog.asserts.AssertionError} When the value is not a string.
 */
goog.asserts.assertString = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_('Expected string but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {string} */ (value);
};


/**
 * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Function} The value, guaranteed to be a function when asserts
 *     enabled.
 * @throws {goog.asserts.AssertionError} When the value is not a function.
 */
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_('Expected function but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Function} */ (value);
};


/**
 * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Object} The value, guaranteed to be a non-null object.
 * @throws {goog.asserts.AssertionError} When the value is not an object.
 */
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_('Expected object but got %s: %s.',
        [goog.typeOf(value), value],
        opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Object} */ (value);
};


/**
 * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Array} The value, guaranteed to be a non-null array.
 * @throws {goog.asserts.AssertionError} When the value is not an array.
 */
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_('Expected array but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Array} */ (value);
};


/**
 * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {boolean} The value, guaranteed to be a boolean when asserts are
 *     enabled.
 * @throws {goog.asserts.AssertionError} When the value is not a boolean.
 */
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_('Expected boolean but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {boolean} */ (value);
};


/**
 * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Element} The value, likely to be a DOM Element when asserts are
 *     enabled.
 * @throws {goog.asserts.AssertionError} When the value is not a boolean.
 */
goog.asserts.assertElement = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) ||
      value.nodeType != goog.dom.NodeType.ELEMENT)) {
    goog.asserts.doAssertFailure_('Expected Element but got %s: %s.',
        [goog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Element} */ (value);
};


/**
 * Checks if the value is an instance of the user-defined type if
 * goog.asserts.ENABLE_ASSERTS is true.
 *
 * The compiler may tighten the type returned by this function.
 *
 * @param {*} value The value to check.
 * @param {function(new: T, ...)} type A user-defined constructor.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @throws {goog.asserts.AssertionError} When the value is not an instance of
 *     type.
 * @return {!T}
 * @template T
 */
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_('instanceof check failed.', null,
        opt_message, Array.prototype.slice.call(arguments, 3));
  }
  return value;
};


/**
 * Checks that no enumerable keys are present in Object.prototype. Such keys
 * would break most code that use {@code for (var ... in ...)} loops.
 */
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var key in Object.prototype) {
    goog.asserts.fail(key + ' should not be enumerable in Object.prototype.');
  }
};
}
if(!lt.util.load.provided_QMARK_('goog.object')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities for manipulating objects/maps/hashes.
 */

goog.provide('goog.object');


/**
 * Calls a function for each element in an object/map/hash.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):?} f The function to call
 *     for every element. This function takes 3 arguments (the element, the
 *     index and the object) and the return value is ignored.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @template T,K,V
 */
goog.object.forEach = function(obj, f, opt_obj) {
  for (var key in obj) {
    f.call(opt_obj, obj[key], key, obj);
  }
};


/**
 * Calls a function for each element in an object/map/hash. If that call returns
 * true, adds the element to a new object.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):boolean} f The function to call
 *     for every element. This
 *     function takes 3 arguments (the element, the index and the object)
 *     and should return a boolean. If the return value is true the
 *     element is added to the result object. If it is false the
 *     element is not included.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {!Object.<K,V>} a new object in which only elements that passed the
 *     test are present.
 * @template T,K,V
 */
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key];
    }
  }
  return res;
};


/**
 * For every element in an object/map/hash calls a function and inserts the
 * result into a new object.
 *
 * @param {Object.<K,V>} obj The object over which to iterate.
 * @param {function(this:T,V,?,Object.<K,V>):R} f The function to call
 *     for every element. This function
 *     takes 3 arguments (the element, the index and the object)
 *     and should return something. The result will be inserted
 *     into a new object.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {!Object.<K,R>} a new object with the results from f.
 * @template T,K,V,R
 */
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj);
  }
  return res;
};


/**
 * Calls a function for each element in an object/map/hash. If any
 * call returns true, returns true (without checking the rest). If
 * all calls return false, returns false.
 *
 * @param {Object.<K,V>} obj The object to check.
 * @param {function(this:T,V,?,Object.<K,V>):boolean} f The function to
 *     call for every element. This function
 *     takes 3 arguments (the element, the index and the object) and should
 *     return a boolean.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {boolean} true if any element passes the test.
 * @template T,K,V
 */
goog.object.some = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      return true;
    }
  }
  return false;
};


/**
 * Calls a function for each element in an object/map/hash. If
 * all calls return true, returns true. If any call returns false, returns
 * false at this point and does not continue to check the remaining elements.
 *
 * @param {Object.<K,V>} obj The object to check.
 * @param {?function(this:T,V,?,Object.<K,V>):boolean} f The function to
 *     call for every element. This function
 *     takes 3 arguments (the element, the index and the object) and should
 *     return a boolean.
 * @param {T=} opt_obj This is used as the 'this' object within f.
 * @return {boolean} false if any element fails the test.
 * @template T,K,V
 */
goog.object.every = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (!f.call(opt_obj, obj[key], key, obj)) {
      return false;
    }
  }
  return true;
};


/**
 * Returns the number of key-value pairs in the object map.
 *
 * @param {Object} obj The object for which to get the number of key-value
 *     pairs.
 * @return {number} The number of key-value pairs in the object map.
 */
goog.object.getCount = function(obj) {
  // JS1.5 has __count__ but it has been deprecated so it raises a warning...
  // in other words do not use. Also __count__ only includes the fields on the
  // actual object and not in the prototype chain.
  var rv = 0;
  for (var key in obj) {
    rv++;
  }
  return rv;
};


/**
 * Returns one key from the object map, if any exists.
 * For map literals the returned key will be the first one in most of the
 * browsers (a know exception is Konqueror).
 *
 * @param {Object} obj The object to pick a key from.
 * @return {string|undefined} The key or undefined if the object is empty.
 */
goog.object.getAnyKey = function(obj) {
  for (var key in obj) {
    return key;
  }
};


/**
 * Returns one value from the object map, if any exists.
 * For map literals the returned value will be the first one in most of the
 * browsers (a know exception is Konqueror).
 *
 * @param {Object.<K,V>} obj The object to pick a value from.
 * @return {V|undefined} The value or undefined if the object is empty.
 * @template K,V
 */
goog.object.getAnyValue = function(obj) {
  for (var key in obj) {
    return obj[key];
  }
};


/**
 * Whether the object/hash/map contains the given object as a value.
 * An alias for goog.object.containsValue(obj, val).
 *
 * @param {Object.<K,V>} obj The object in which to look for val.
 * @param {V} val The object for which to check.
 * @return {boolean} true if val is present.
 * @template K,V
 */
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val);
};


/**
 * Returns the values of the object/map/hash.
 *
 * @param {Object.<K,V>} obj The object from which to get the values.
 * @return {!Array.<V>} The values in the object/map/hash.
 * @template K,V
 */
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = obj[key];
  }
  return res;
};


/**
 * Returns the keys of the object/map/hash.
 *
 * @param {Object} obj The object from which to get the keys.
 * @return {!Array.<string>} Array of property keys.
 */
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = key;
  }
  return res;
};


/**
 * Get a value from an object multiple levels deep.  This is useful for
 * pulling values from deeply nested objects, such as JSON responses.
 * Example usage: getValueByKeys(jsonObj, 'foo', 'entries', 3)
 *
 * @param {!Object} obj An object to get the value from.  Can be array-like.
 * @param {...(string|number|!Array.<number|string>)} var_args A number of keys
 *     (as strings, or numbers, for array-like objects).  Can also be
 *     specified as a single array of keys.
 * @return {*} The resulting value.  If, at any point, the value for a key
 *     is undefined, returns undefined.
 */
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;

  // Start with the 2nd parameter for the variable parameters syntax.
  for (var i = isArrayLike ? 0 : 1; i < keys.length; i++) {
    obj = obj[keys[i]];
    if (!goog.isDef(obj)) {
      break;
    }
  }

  return obj;
};


/**
 * Whether the object/map/hash contains the given key.
 *
 * @param {Object} obj The object in which to look for key.
 * @param {*} key The key for which to check.
 * @return {boolean} true If the map contains the key.
 */
goog.object.containsKey = function(obj, key) {
  return key in obj;
};


/**
 * Whether the object/map/hash contains the given value. This is O(n).
 *
 * @param {Object.<K,V>} obj The object in which to look for val.
 * @param {V} val The value for which to check.
 * @return {boolean} true If the map contains the value.
 * @template K,V
 */
goog.object.containsValue = function(obj, val) {
  for (var key in obj) {
    if (obj[key] == val) {
      return true;
    }
  }
  return false;
};


/**
 * Searches an object for an element that satisfies the given condition and
 * returns its key.
 * @param {Object.<K,V>} obj The object to search in.
 * @param {function(this:T,V,string,Object.<K,V>):boolean} f The
 *      function to call for every element. Takes 3 arguments (the value,
 *     the key and the object) and should return a boolean.
 * @param {T=} opt_this An optional "this" context for the function.
 * @return {string|undefined} The key of an element for which the function
 *     returns true or undefined if no such element is found.
 * @template T,K,V
 */
goog.object.findKey = function(obj, f, opt_this) {
  for (var key in obj) {
    if (f.call(opt_this, obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
};


/**
 * Searches an object for an element that satisfies the given condition and
 * returns its value.
 * @param {Object.<K,V>} obj The object to search in.
 * @param {function(this:T,V,string,Object.<K,V>):boolean} f The function
 *     to call for every element. Takes 3 arguments (the value, the key
 *     and the object) and should return a boolean.
 * @param {T=} opt_this An optional "this" context for the function.
 * @return {V} The value of an element for which the function returns true or
 *     undefined if no such element is found.
 * @template T,K,V
 */
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key];
};


/**
 * Whether the object/map/hash is empty.
 *
 * @param {Object} obj The object to test.
 * @return {boolean} true if obj is empty.
 */
goog.object.isEmpty = function(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
};


/**
 * Removes all key value pairs from the object/map/hash.
 *
 * @param {Object} obj The object to clear.
 */
goog.object.clear = function(obj) {
  for (var i in obj) {
    delete obj[i];
  }
};


/**
 * Removes a key-value pair based on the key.
 *
 * @param {Object} obj The object from which to remove the key.
 * @param {*} key The key to remove.
 * @return {boolean} Whether an element was removed.
 */
goog.object.remove = function(obj, key) {
  var rv;
  if ((rv = key in obj)) {
    delete obj[key];
  }
  return rv;
};


/**
 * Adds a key-value pair to the object. Throws an exception if the key is
 * already in use. Use set if you want to change an existing pair.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} val The value to add.
 * @template K,V
 */
goog.object.add = function(obj, key, val) {
  if (key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val);
};


/**
 * Returns the value for the given key.
 *
 * @param {Object.<K,V>} obj The object from which to get the value.
 * @param {string} key The key for which to get the value.
 * @param {R=} opt_val The value to return if no item is found for the given
 *     key (default is undefined).
 * @return {V|R|undefined} The value for the given key.
 * @template K,V,R
 */
goog.object.get = function(obj, key, opt_val) {
  if (key in obj) {
    return obj[key];
  }
  return opt_val;
};


/**
 * Adds a key-value pair to the object/map/hash.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} value The value to add.
 * @template K,V
 */
goog.object.set = function(obj, key, value) {
  obj[key] = value;
};


/**
 * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
 *
 * @param {Object.<K,V>} obj The object to which to add the key-value pair.
 * @param {string} key The key to add.
 * @param {V} value The value to add if the key wasn't present.
 * @return {V} The value of the entry at the end of the function.
 * @template K,V
 */
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : (obj[key] = value);
};


/**
 * Does a flat clone of the object.
 *
 * @param {Object.<K,V>} obj Object to clone.
 * @return {!Object.<K,V>} Clone of the input object.
 * @template K,V
 */
goog.object.clone = function(obj) {
  // We cannot use the prototype trick because a lot of methods depend on where
  // the actual key is set.

  var res = {};
  for (var key in obj) {
    res[key] = obj[key];
  }
  return res;
  // We could also use goog.mixin but I wanted this to be independent from that.
};


/**
 * Clones a value. The input may be an Object, Array, or basic type. Objects and
 * arrays will be cloned recursively.
 *
 * WARNINGS:
 * <code>goog.object.unsafeClone</code> does not detect reference loops. Objects
 * that refer to themselves will cause infinite recursion.
 *
 * <code>goog.object.unsafeClone</code> is unaware of unique identifiers, and
 * copies UIDs created by <code>getUid</code> into cloned results.
 *
 * @param {*} obj The value to clone.
 * @return {*} A clone of the input value.
 */
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if (type == 'object' || type == 'array') {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == 'array' ? [] : {};
    for (var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key]);
    }
    return clone;
  }

  return obj;
};


/**
 * Returns a new object in which all the keys and values are interchanged
 * (keys become values and values become keys). If multiple keys map to the
 * same value, the chosen transposed value is implementation-dependent.
 *
 * @param {Object} obj The object to transpose.
 * @return {!Object} The transposed object.
 */
goog.object.transpose = function(obj) {
  var transposed = {};
  for (var key in obj) {
    transposed[obj[key]] = key;
  }
  return transposed;
};


/**
 * The names of the fields that are defined on Object.prototype.
 * @type {Array.<string>}
 * @private
 */
goog.object.PROTOTYPE_FIELDS_ = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/**
 * Extends an object with another object.
 * This operates 'in-place'; it does not create a new Object.
 *
 * Example:
 * var o = {};
 * goog.object.extend(o, {a: 0, b: 1});
 * o; // {a: 0, b: 1}
 * goog.object.extend(o, {b: 2, c: 3});
 * o; // {a: 0, b: 2, c: 3}
 *
 * @param {Object} target The object to modify. Existing properties will be
 *     overwritten if they are also present in one of the objects in
 *     {@code var_args}.
 * @param {...Object} var_args The objects from which values will be copied.
 */
goog.object.extend = function(target, var_args) {
  var key, source;
  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (key in source) {
      target[key] = source[key];
    }

    // For IE the for-in-loop does not contain any properties that are not
    // enumerable on the prototype object (for example isPrototypeOf from
    // Object.prototype) and it will also not include 'replace' on objects that
    // extend String and change 'replace' (not that it is common for anyone to
    // extend anything except Object).

    for (var j = 0; j < goog.object.PROTOTYPE_FIELDS_.length; j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
};


/**
 * Creates a new object built from the key-value pairs provided as arguments.
 * @param {...*} var_args If only one argument is provided and it is an array
 *     then this is used as the arguments,  otherwise even arguments are used as
 *     the property names and odd arguments are used as the property values.
 * @return {!Object} The new object.
 * @throws {Error} If there are uneven number of arguments or there is only one
 *     non array argument.
 */
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }

  if (argLength % 2) {
    throw Error('Uneven number of arguments');
  }

  var rv = {};
  for (var i = 0; i < argLength; i += 2) {
    rv[arguments[i]] = arguments[i + 1];
  }
  return rv;
};


/**
 * Creates a new object where the property names come from the arguments but
 * the value is always set to true
 * @param {...*} var_args If only one argument is provided and it is an array
 *     then this is used as the arguments,  otherwise the arguments are used
 *     as the property names.
 * @return {!Object} The new object.
 */
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }

  var rv = {};
  for (var i = 0; i < argLength; i++) {
    rv[arguments[i]] = true;
  }
  return rv;
};


/**
 * Creates an immutable view of the underlying object, if the browser
 * supports immutable objects.
 *
 * In default mode, writes to this view will fail silently. In strict mode,
 * they will throw an error.
 *
 * @param {!Object.<K,V>} obj An object.
 * @return {!Object.<K,V>} An immutable view of that object, or the
 *     original object if this browser does not support immutables.
 * @template K,V
 */
goog.object.createImmutableView = function(obj) {
  var result = obj;
  if (Object.isFrozen && !Object.isFrozen(obj)) {
    result = Object.create(obj);
    Object.freeze(result);
  }
  return result;
};


/**
 * @param {!Object} obj An object.
 * @return {boolean} Whether this is an immutable view of the object.
 */
goog.object.isImmutableView = function(obj) {
  return !!Object.isFrozen && Object.isFrozen(obj);
};
}
if(!lt.util.load.provided_QMARK_('goog.math')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Additional mathematical functions.
 */

goog.provide('goog.math');

goog.require('goog.array');
goog.require('goog.asserts');


/**
 * Returns a random integer greater than or equal to 0 and less than {@code a}.
 * @param {number} a  The upper bound for the random integer (exclusive).
 * @return {number} A random integer N such that 0 <= N < a.
 */
goog.math.randomInt = function(a) {
  return Math.floor(Math.random() * a);
};


/**
 * Returns a random number greater than or equal to {@code a} and less than
 * {@code b}.
 * @param {number} a  The lower bound for the random number (inclusive).
 * @param {number} b  The upper bound for the random number (exclusive).
 * @return {number} A random number N such that a <= N < b.
 */
goog.math.uniformRandom = function(a, b) {
  return a + Math.random() * (b - a);
};


/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
goog.math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};


/**
 * The % operator in JavaScript returns the remainder of a / b, but differs from
 * some other languages in that the result will have the same sign as the
 * dividend. For example, -1 % 8 == -1, whereas in some other languages
 * (such as Python) the result would be 7. This function emulates the more
 * correct modulo behavior, which is useful for certain applications such as
 * calculating an offset index in a circular list.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
 *     or b < x <= 0, depending on the sign of b).
 */
goog.math.modulo = function(a, b) {
  var r = a % b;
  // If r and b differ in sign, add b to wrap the result to the correct sign.
  return (r * b < 0) ? r + b : r;
};


/**
 * Performs linear interpolation between values a and b. Returns the value
 * between a and b proportional to x (when x is between 0 and 1. When x is
 * outside this range, the return value is a linear extrapolation).
 * @param {number} a A number.
 * @param {number} b A number.
 * @param {number} x The proportion between a and b.
 * @return {number} The interpolated value between a and b.
 */
goog.math.lerp = function(a, b, x) {
  return a + x * (b - a);
};


/**
 * Tests whether the two values are equal to each other, within a certain
 * tolerance to adjust for floating point errors.
 * @param {number} a A number.
 * @param {number} b A number.
 * @param {number=} opt_tolerance Optional tolerance range. Defaults
 *     to 0.000001. If specified, should be greater than 0.
 * @return {boolean} Whether {@code a} and {@code b} are nearly equal.
 */
goog.math.nearlyEquals = function(a, b, opt_tolerance) {
  return Math.abs(a - b) <= (opt_tolerance || 0.000001);
};


/**
 * Standardizes an angle to be in range [0-360). Negative angles become
 * positive, and values greater than 360 are returned modulo 360.
 * @param {number} angle Angle in degrees.
 * @return {number} Standardized angle.
 */
goog.math.standardAngle = function(angle) {
  return goog.math.modulo(angle, 360);
};


/**
 * Converts degrees to radians.
 * @param {number} angleDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
goog.math.toRadians = function(angleDegrees) {
  return angleDegrees * Math.PI / 180;
};


/**
 * Converts radians to degrees.
 * @param {number} angleRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
goog.math.toDegrees = function(angleRadians) {
  return angleRadians * 180 / Math.PI;
};


/**
 * For a given angle and radius, finds the X portion of the offset.
 * @param {number} degrees Angle in degrees (zero points in +X direction).
 * @param {number} radius Radius.
 * @return {number} The x-distance for the angle and radius.
 */
goog.math.angleDx = function(degrees, radius) {
  return radius * Math.cos(goog.math.toRadians(degrees));
};


/**
 * For a given angle and radius, finds the Y portion of the offset.
 * @param {number} degrees Angle in degrees (zero points in +X direction).
 * @param {number} radius Radius.
 * @return {number} The y-distance for the angle and radius.
 */
goog.math.angleDy = function(degrees, radius) {
  return radius * Math.sin(goog.math.toRadians(degrees));
};


/**
 * Computes the angle between two points (x1,y1) and (x2,y2).
 * Angle zero points in the +X direction, 90 degrees points in the +Y
 * direction (down) and from there we grow clockwise towards 360 degrees.
 * @param {number} x1 x of first point.
 * @param {number} y1 y of first point.
 * @param {number} x2 x of second point.
 * @param {number} y2 y of second point.
 * @return {number} Standardized angle in degrees of the vector from
 *     x1,y1 to x2,y2.
 */
goog.math.angle = function(x1, y1, x2, y2) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(y2 - y1,
                                                                x2 - x1)));
};


/**
 * Computes the difference between startAngle and endAngle (angles in degrees).
 * @param {number} startAngle  Start angle in degrees.
 * @param {number} endAngle  End angle in degrees.
 * @return {number} The number of degrees that when added to
 *     startAngle will result in endAngle. Positive numbers mean that the
 *     direction is clockwise. Negative numbers indicate a counter-clockwise
 *     direction.
 *     The shortest route (clockwise vs counter-clockwise) between the angles
 *     is used.
 *     When the difference is 180 degrees, the function returns 180 (not -180)
 *     angleDifference(30, 40) is 10, and angleDifference(40, 30) is -10.
 *     angleDifference(350, 10) is 20, and angleDifference(10, 350) is -20.
 */
goog.math.angleDifference = function(startAngle, endAngle) {
  var d = goog.math.standardAngle(endAngle) -
          goog.math.standardAngle(startAngle);
  if (d > 180) {
    d = d - 360;
  } else if (d <= -180) {
    d = 360 + d;
  }
  return d;
};


/**
 * Returns the sign of a number as per the "sign" or "signum" function.
 * @param {number} x The number to take the sign of.
 * @return {number} -1 when negative, 1 when positive, 0 when 0.
 */
goog.math.sign = function(x) {
  return x == 0 ? 0 : (x < 0 ? -1 : 1);
};


/**
 * JavaScript implementation of Longest Common Subsequence problem.
 * http://en.wikipedia.org/wiki/Longest_common_subsequence
 *
 * Returns the longest possible array that is subarray of both of given arrays.
 *
 * @param {Array.<Object>} array1 First array of objects.
 * @param {Array.<Object>} array2 Second array of objects.
 * @param {Function=} opt_compareFn Function that acts as a custom comparator
 *     for the array ojects. Function should return true if objects are equal,
 *     otherwise false.
 * @param {Function=} opt_collectorFn Function used to decide what to return
 *     as a result subsequence. It accepts 2 arguments: index of common element
 *     in the first array and index in the second. The default function returns
 *     element from the first array.
 * @return {Array.<Object>} A list of objects that are common to both arrays
 *     such that there is no common subsequence with size greater than the
 *     length of the list.
 */
goog.math.longestCommonSubsequence = function(
    array1, array2, opt_compareFn, opt_collectorFn) {

  var compare = opt_compareFn || function(a, b) {
    return a == b;
  };

  var collect = opt_collectorFn || function(i1, i2) {
    return array1[i1];
  };

  var length1 = array1.length;
  var length2 = array2.length;

  var arr = [];
  for (var i = 0; i < length1 + 1; i++) {
    arr[i] = [];
    arr[i][0] = 0;
  }

  for (var j = 0; j < length2 + 1; j++) {
    arr[0][j] = 0;
  }

  for (i = 1; i <= length1; i++) {
    for (j = 1; j <= length2; j++) {
      if (compare(array1[i - 1], array2[j - 1])) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }

  // Backtracking
  var result = [];
  var i = length1, j = length2;
  while (i > 0 && j > 0) {
    if (compare(array1[i - 1], array2[j - 1])) {
      result.unshift(collect(i - 1, j - 1));
      i--;
      j--;
    } else {
      if (arr[i - 1][j] > arr[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }

  return result;
};


/**
 * Returns the sum of the arguments.
 * @param {...number} var_args Numbers to add.
 * @return {number} The sum of the arguments (0 if no arguments were provided,
 *     {@code NaN} if any of the arguments is not a valid number).
 */
goog.math.sum = function(var_args) {
  return /** @type {number} */ (goog.array.reduce(arguments,
      function(sum, value) {
        return sum + value;
      }, 0));
};


/**
 * Returns the arithmetic mean of the arguments.
 * @param {...number} var_args Numbers to average.
 * @return {number} The average of the arguments ({@code NaN} if no arguments
 *     were provided or any of the arguments is not a valid number).
 */
goog.math.average = function(var_args) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};


/**
 * Returns the unbiased sample variance of the arguments. For a definition,
 * see e.g. http://en.wikipedia.org/wiki/Variance
 * @param {...number} var_args Number samples to analyze.
 * @return {number} The unbiased sample variance of the arguments (0 if fewer
 *     than two samples were provided, or {@code NaN} if any of the samples is
 *     not a valid number).
 */
goog.math.sampleVariance = function(var_args) {
  var sampleSize = arguments.length;
  if (sampleSize < 2) {
    return 0;
  }

  var mean = goog.math.average.apply(null, arguments);
  var variance = goog.math.sum.apply(null, goog.array.map(arguments,
      function(val) {
        return Math.pow(val - mean, 2);
      })) / (sampleSize - 1);

  return variance;
};


/**
 * Returns the sample standard deviation of the arguments.  For a definition of
 * sample standard deviation, see e.g.
 * http://en.wikipedia.org/wiki/Standard_deviation
 * @param {...number} var_args Number samples to analyze.
 * @return {number} The sample standard deviation of the arguments (0 if fewer
 *     than two samples were provided, or {@code NaN} if any of the samples is
 *     not a valid number).
 */
goog.math.standardDeviation = function(var_args) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};


/**
 * Returns whether the supplied number represents an integer, i.e. that is has
 * no fractional component.  No range-checking is performed on the number.
 * @param {number} num The number to test.
 * @return {boolean} Whether {@code num} is an integer.
 */
goog.math.isInt = function(num) {
  return isFinite(num) && num % 1 == 0;
};


/**
 * Returns whether the supplied number is finite and not NaN.
 * @param {number} num The number to test.
 * @return {boolean} Whether {@code num} is a finite number.
 */
goog.math.isFiniteNumber = function(num) {
  return isFinite(num) && !isNaN(num);
};


/**
 * Returns the precise value of floor(log10(num)).
 * Simpler implementations didn't work because of floating point rounding
 * errors. For example
 * <ul>
 * <li>Math.floor(Math.log(num) / Math.LN10) is off by one for num == 1e+3.
 * <li>Math.floor(Math.log(num) * Math.LOG10E) is off by one for num == 1e+15.
 * <li>Math.floor(Math.log10(num)) is off by one for num == 1e+15 - 1.
 * </ul>
 * @param {number} num A floating point number.
 * @return {number} Its logarithm to base 10 rounded down to the nearest
 *     integer if num > 0. -Infinity if num == 0. NaN if num < 0.
 */
goog.math.log10Floor = function(num) {
  if (num > 0) {
    var x = Math.round(Math.log(num) * Math.LOG10E);
    return x - (Math.pow(10, x) > num);
  }
  return num == 0 ? -Infinity : NaN;
};


/**
 * A tweaked variant of {@code Math.floor} which tolerates if the passed number
 * is infinitesimally smaller than the closest integer. It often happens with
 * the results of floating point calculations because of the finite precision
 * of the intermediate results. For example {@code Math.floor(Math.log(1000) /
 * Math.LN10) == 2}, not 3 as one would expect.
 * @param {number} num A number.
 * @param {number=} opt_epsilon An infinitesimally small positive number, the
 *     rounding error to tolerate.
 * @return {number} The largest integer less than or equal to {@code num}.
 */
goog.math.safeFloor = function(num, opt_epsilon) {
  goog.asserts.assert(!goog.isDef(opt_epsilon) || opt_epsilon > 0);
  return Math.floor(num + (opt_epsilon || 2e-15));
};


/**
 * A tweaked variant of {@code Math.ceil}. See {@code goog.math.safeFloor} for
 * details.
 * @param {number} num A number.
 * @param {number=} opt_epsilon An infinitesimally small positive number, the
 *     rounding error to tolerate.
 * @return {number} The smallest integer greater than or equal to {@code num}.
 */
goog.math.safeCeil = function(num, opt_epsilon) {
  goog.asserts.assert(!goog.isDef(opt_epsilon) || opt_epsilon > 0);
  return Math.ceil(num - (opt_epsilon || 2e-15));
};
}
if(!lt.util.load.provided_QMARK_('goog.iter.Iterator')) {
// Copyright 2007 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Python style iteration utilities.
 * @author arv@google.com (Erik Arvidsson)
 */


goog.provide('goog.iter');
goog.provide('goog.iter.Iterable');
goog.provide('goog.iter.Iterator');
goog.provide('goog.iter.StopIteration');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.functions');
goog.require('goog.math');


// TODO(nnaze): Add more functions from Python's itertools.
// http://docs.python.org/library/itertools.html


/**
 * @typedef {goog.iter.Iterator|{length:number}|{__iterator__}}
 */
goog.iter.Iterable;


// For script engines that already support iterators.
if ('StopIteration' in goog.global) {
  /**
   * Singleton Error object that is used to terminate iterations.
   * @type {Error}
   */
  goog.iter.StopIteration = goog.global['StopIteration'];
} else {
  /**
   * Singleton Error object that is used to terminate iterations.
   * @type {Error}
   * @suppress {duplicate}
   */
  goog.iter.StopIteration = Error('StopIteration');
}



/**
 * Class/interface for iterators.  An iterator needs to implement a {@code next}
 * method and it needs to throw a {@code goog.iter.StopIteration} when the
 * iteration passes beyond the end.  Iterators have no {@code hasNext} method.
 * It is recommended to always use the helper functions to iterate over the
 * iterator or in case you are only targeting JavaScript 1.7 for in loops.
 * @constructor
 * @template VALUE
 */
goog.iter.Iterator = function() {};


/**
 * Returns the next value of the iteration.  This will throw the object
 * {@see goog.iter#StopIteration} when the iteration passes the end.
 * @return {VALUE} Any object or value.
 */
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};


/**
 * Returns the {@code Iterator} object itself.  This is used to implement
 * the iterator protocol in JavaScript 1.7
 * @param {boolean=} opt_keys  Whether to return the keys or values. Default is
 *     to only return the values.  This is being used by the for-in loop (true)
 *     and the for-each-in loop (false).  Even though the param gives a hint
 *     about what the iterator will return there is no guarantee that it will
 *     return the keys when true is passed.
 * @return {!goog.iter.Iterator.<VALUE>} The object itself.
 */
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this;
};


/**
 * Returns an iterator that knows how to iterate over the values in the object.
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable  If the
 *     object is an iterator it will be returned as is.  If the object has an
 *     {@code __iterator__} method that will be called to get the value
 *     iterator.  If the object is an array-like object we create an iterator
 *     for that.
 * @return {!goog.iter.Iterator.<VALUE>} An iterator that knows how to iterate
 *     over the values in {@code iterable}.
 * @template VALUE
 */
goog.iter.toIterator = function(iterable) {
  if (iterable instanceof goog.iter.Iterator) {
    return iterable;
  }
  if (typeof iterable.__iterator__ == 'function') {
    return iterable.__iterator__(false);
  }
  if (goog.isArrayLike(iterable)) {
    var i = 0;
    var newIter = new goog.iter.Iterator;
    newIter.next = function() {
      while (true) {
        if (i >= iterable.length) {
          throw goog.iter.StopIteration;
        }
        // Don't include deleted elements.
        if (!(i in iterable)) {
          i++;
          continue;
        }
        return iterable[i++];
      }
    };
    return newIter;
  }


  // TODO(arv): Should we fall back on goog.structs.getValues()?
  throw Error('Not implemented');
};


/**
 * Calls a function for each element in the iterator with the element of the
 * iterator passed as argument.
 *
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable  The iterator
 *     to iterate over. If the iterable is an object {@code toIterator} will be
 *     called on it.
 * @param {function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>)|
 *         function(this:THIS,number,undefined,goog.iter.Iterator.<VALUE>)} f
 *     The function to call for every element.  This function takes 3 arguments
 *     (the element, undefined, and the iterator) and the return value is
 *     irrelevant.  The reason for passing undefined as the second argument is
 *     so that the same function can be used in {@see goog.array#forEach} as
 *     well as others.
 * @param {THIS=} opt_obj  The object to be used as the value of 'this' within
 *     {@code f}.
 * @template THIS, VALUE
 */
goog.iter.forEach = function(iterable, f, opt_obj) {
  if (goog.isArrayLike(iterable)) {
    /** @preserveTry */
    try {
      // NOTES: this passes the index number to the second parameter
      // of the callback contrary to the documentation above.
      goog.array.forEach(/** @type {goog.array.ArrayLike} */(iterable), f,
                         opt_obj);
    } catch (ex) {
      if (ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  } else {
    iterable = goog.iter.toIterator(iterable);
    /** @preserveTry */
    try {
      while (true) {
        f.call(opt_obj, iterable.next(), undefined, iterable);
      }
    } catch (ex) {
      if (ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }
};


/**
 * Calls a function for every element in the iterator, and if the function
 * returns true adds the element to a new iterator.
 *
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     to iterate over.
 * @param {
 *     function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>):boolean} f
 *     The function to call for every element. This function takes 3 arguments
 *     (the element, undefined, and the iterator) and should return a boolean.
 *     If the return value is true the element will be included  in the returned
 *     iterator.  If it is false the element is not included.
 * @param {THIS=} opt_obj The object to be used as the value of 'this' within
 *     {@code f}.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator in which only elements
 *     that passed the test are present.
 * @template THIS, VALUE
 */
goog.iter.filter = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while (true) {
      var val = iterator.next();
      if (f.call(opt_obj, val, undefined, iterator)) {
        return val;
      }
    }
  };
  return newIter;
};


/**
 * Creates a new iterator that returns the values in a range.  This function
 * can take 1, 2 or 3 arguments:
 * <pre>
 * range(5) same as range(0, 5, 1)
 * range(2, 5) same as range(2, 5, 1)
 * </pre>
 *
 * @param {number} startOrStop  The stop value if only one argument is provided.
 *     The start value if 2 or more arguments are provided.  If only one
 *     argument is used the start value is 0.
 * @param {number=} opt_stop  The stop value.  If left out then the first
 *     argument is used as the stop value.
 * @param {number=} opt_step  The number to increment with between each call to
 *     next.  This can be negative.
 * @return {!goog.iter.Iterator.<number>} A new iterator that returns the values
 *     in the range.
 */
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  var start = 0;
  var stop = startOrStop;
  var step = opt_step || 1;
  if (arguments.length > 1) {
    start = startOrStop;
    stop = opt_stop;
  }
  if (step == 0) {
    throw Error('Range step argument must not be zero');
  }

  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    if (step > 0 && start >= stop || step < 0 && start <= stop) {
      throw goog.iter.StopIteration;
    }
    var rv = start;
    start += step;
    return rv;
  };
  return newIter;
};


/**
 * Joins the values in a iterator with a delimiter.
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     to get the values from.
 * @param {string} deliminator  The text to put between the values.
 * @return {string} The joined value string.
 * @template VALUE
 */
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator);
};


/**
 * For every element in the iterator call a function and return a new iterator
 * with that value.
 *
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterator to iterate over.
 * @param {
 *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator.<VALUE>):RESULT} f
 *     The function to call for every element.  This function takes 3 arguments
 *     (the element, undefined, and the iterator) and should return a new value.
 * @param {THIS=} opt_obj The object to be used as the value of 'this' within
 *     {@code f}.
 * @return {!goog.iter.Iterator.<RESULT>} A new iterator that returns the
 *     results of applying the function to each element in the original
 *     iterator.
 * @template THIS, VALUE, RESULT
 */
goog.iter.map = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    var val = iterator.next();
    return f.call(opt_obj, val, undefined, iterator);
  };
  return newIter;
};


/**
 * Passes every element of an iterator into a function and accumulates the
 * result.
 *
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     to iterate over.
 * @param {function(this:THIS,VALUE,VALUE):VALUE} f The function to call for
 *     every element. This function takes 2 arguments (the function's previous
 *     result or the initial value, and the value of the current element).
 *     function(previousValue, currentElement) : newValue.
 * @param {VALUE} val The initial value to pass into the function on the first
 *     call.
 * @param {THIS=} opt_obj  The object to be used as the value of 'this' within
 *     f.
 * @return {VALUE} Result of evaluating f repeatedly across the values of
 *     the iterator.
 * @template THIS, VALUE
 */
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  var rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val);
  });
  return rval;
};


/**
 * Goes through the values in the iterator. Calls f for each of these, and if
 * any of them returns true, this returns true (without checking the rest). If
 * all return false this will return false.
 *
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     object.
 * @param {
 *     function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>):boolean} f
 *     The function to call for every value. This function takes 3 arguments
 *     (the value, undefined, and the iterator) and should return a boolean.
 * @param {THIS=} opt_obj The object to be used as the value of 'this' within
 *     {@code f}.
 * @return {boolean} true if any value passes the test.
 * @template THIS, VALUE
 */
goog.iter.some = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  /** @preserveTry */
  try {
    while (true) {
      if (f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return true;
      }
    }
  } catch (ex) {
    if (ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return false;
};


/**
 * Goes through the values in the iterator. Calls f for each of these and if any
 * of them returns false this returns false (without checking the rest). If all
 * return true this will return true.
 *
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     object.
 * @param {
 *     function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>):boolean} f
 *     The function to call for every value. This function takes 3 arguments
 *     (the value, undefined, and the iterator) and should return a boolean.
 * @param {THIS=} opt_obj The object to be used as the value of 'this' within
 *     {@code f}.
 * @return {boolean} true if every value passes the test.
 * @template THIS, VALUE
 */
goog.iter.every = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  /** @preserveTry */
  try {
    while (true) {
      if (!f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return false;
      }
    }
  } catch (ex) {
    if (ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return true;
};


/**
 * Takes zero or more iterables and returns one iterator that will iterate over
 * them in the order chained.
 * @param {...!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} var_args Any
 *     number of iterable objects.
 * @return {!goog.iter.Iterator.<VALUE>} Returns a new iterator that will
 *     iterate over all the given iterables' contents.
 * @template VALUE
 */
goog.iter.chain = function(var_args) {
  var iterator = goog.iter.toIterator(arguments);
  var iter = new goog.iter.Iterator();
  var current = null;

  iter.next = function() {
    while (true) {
      if (current == null) {
        var it = iterator.next();
        current = goog.iter.toIterator(it);
      }
      try {
        return current.next();
      } catch (ex) {
        if (ex !== goog.iter.StopIteration) {
          throw ex;
        }
        current = null;
      }
    }
  };

  return iter;
};


/**
 * Takes a single iterable containing zero or more iterables and returns one
 * iterator that will iterate over each one in the order given.
 * @see http://docs.python.org/2/library/itertools.html#itertools.chain.from_iterable
 * @param {goog.iter.Iterable} iterable The iterable of iterables to chain.
 * @return {!goog.iter.Iterator.<VALUE>} Returns a new iterator that will
 *     iterate over all the contents of the iterables contained within
 *     {@code iterable}.
 * @template VALUE
 */
goog.iter.chainFromIterable = function(iterable) {
  return goog.iter.chain.apply(undefined, iterable);
};


/**
 * Builds a new iterator that iterates over the original, but skips elements as
 * long as a supplied function returns true.
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     object.
 * @param {
 *     function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>):boolean} f
 *     The function to call for every value. This function takes 3 arguments
 *     (the value, undefined, and the iterator) and should return a boolean.
 * @param {THIS=} opt_obj The object to be used as the value of 'this' within
 *     {@code f}.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator that drops elements from
 *     the original iterator as long as {@code f} is true.
 * @template THIS, VALUE
 */
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var dropping = true;
  newIter.next = function() {
    while (true) {
      var val = iterator.next();
      if (dropping && f.call(opt_obj, val, undefined, iterator)) {
        continue;
      } else {
        dropping = false;
      }
      return val;
    }
  };
  return newIter;
};


/**
 * Builds a new iterator that iterates over the original, but only as long as a
 * supplied function returns true.
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     object.
 * @param {
 *     function(this:THIS,VALUE,undefined,goog.iter.Iterator.<VALUE>):boolean} f
 *     The function to call for every value. This function takes 3 arguments
 *     (the value, undefined, and the iterator) and should return a boolean.
 * @param {THIS=} opt_obj This is used as the 'this' object in f when called.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator that keeps elements in
 *     the original iterator as long as the function is true.
 * @template THIS, VALUE
 */
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  var iterator = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var taking = true;
  newIter.next = function() {
    while (true) {
      if (taking) {
        var val = iterator.next();
        if (f.call(opt_obj, val, undefined, iterator)) {
          return val;
        } else {
          taking = false;
        }
      } else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return newIter;
};


/**
 * Converts the iterator to an array
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterator
 *     to convert to an array.
 * @return {!Array.<VALUE>} An array of the elements the iterator iterates over.
 * @template VALUE
 */
goog.iter.toArray = function(iterable) {
  // Fast path for array-like.
  if (goog.isArrayLike(iterable)) {
    return goog.array.toArray(/** @type {!goog.array.ArrayLike} */(iterable));
  }
  iterable = goog.iter.toIterator(iterable);
  var array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val);
  });
  return array;
};


/**
 * Iterates over two iterables and returns true if they contain the same
 * sequence of elements and have the same length.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable1 The first
 *     iterable object.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable2 The second
 *     iterable object.
 * @return {boolean} true if the iterables contain the same sequence of elements
 *     and have the same length.
 * @template VALUE
 */
goog.iter.equals = function(iterable1, iterable2) {
  var fillValue = {};
  var pairs = goog.iter.zipLongest(fillValue, iterable1, iterable2);
  return goog.iter.every(pairs, function(pair) {
    return pair[0] == pair[1];
  });
};


/**
 * Advances the iterator to the next position, returning the given default value
 * instead of throwing an exception if the iterator has no more entries.
 * @param {goog.iter.Iterator.<VALUE>|goog.iter.Iterable} iterable The iterable
 *     object.
 * @param {VALUE} defaultValue The value to return if the iterator is empty.
 * @return {VALUE} The next item in the iteration, or defaultValue if the
 *     iterator was empty.
 * @template VALUE
 */
goog.iter.nextOrValue = function(iterable, defaultValue) {
  try {
    return goog.iter.toIterator(iterable).next();
  } catch (e) {
    if (e != goog.iter.StopIteration) {
      throw e;
    }
    return defaultValue;
  }
};


/**
 * Cartesian product of zero or more sets.  Gives an iterator that gives every
 * combination of one element chosen from each set.  For example,
 * ([1, 2], [3, 4]) gives ([1, 3], [1, 4], [2, 3], [2, 4]).
 * @see http://docs.python.org/library/itertools.html#itertools.product
 * @param {...!goog.array.ArrayLike.<VALUE>} var_args Zero or more sets, as
 *     arrays.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} An iterator that gives each
 *     n-tuple (as an array).
 * @template VALUE
 */
goog.iter.product = function(var_args) {
  var someArrayEmpty = goog.array.some(arguments, function(arr) {
    return !arr.length;
  });

  // An empty set in a cartesian product gives an empty set.
  if (someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator();
  }

  var iter = new goog.iter.Iterator();
  var arrays = arguments;

  // The first indices are [0, 0, ...]
  var indicies = goog.array.repeat(0, arrays.length);

  iter.next = function() {

    if (indicies) {
      var retVal = goog.array.map(indicies, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex];
      });

      // Generate the next-largest indices for the next call.
      // Increase the rightmost index. If it goes over, increase the next
      // rightmost (like carry-over addition).
      for (var i = indicies.length - 1; i >= 0; i--) {
        // Assertion prevents compiler warning below.
        goog.asserts.assert(indicies);
        if (indicies[i] < arrays[i].length - 1) {
          indicies[i]++;
          break;
        }

        // We're at the last indices (the last element of every array), so
        // the iteration is over on the next call.
        if (i == 0) {
          indicies = null;
          break;
        }
        // Reset the index in this column and loop back to increment the
        // next one.
        indicies[i] = 0;
      }
      return retVal;
    }

    throw goog.iter.StopIteration;
  };

  return iter;
};


/**
 * Create an iterator to cycle over the iterable's elements indefinitely.
 * For example, ([1, 2, 3]) would return : 1, 2, 3, 1, 2, 3, ...
 * @see: http://docs.python.org/library/itertools.html#itertools.cycle.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable object.
 * @return {!goog.iter.Iterator.<VALUE>} An iterator that iterates indefinitely
 *     over the values in {@code iterable}.
 * @template VALUE
 */
goog.iter.cycle = function(iterable) {
  var baseIterator = goog.iter.toIterator(iterable);

  // We maintain a cache to store the iterable elements as we iterate
  // over them. The cache is used to return elements once we have
  // iterated over the iterable once.
  var cache = [];
  var cacheIndex = 0;

  var iter = new goog.iter.Iterator();

  // This flag is set after the iterable is iterated over once
  var useCache = false;

  iter.next = function() {
    var returnElement = null;

    // Pull elements off the original iterator if not using cache
    if (!useCache) {
      try {
        // Return the element from the iterable
        returnElement = baseIterator.next();
        cache.push(returnElement);
        return returnElement;
      } catch (e) {
        // If an exception other than StopIteration is thrown
        // or if there are no elements to iterate over (the iterable was empty)
        // throw an exception
        if (e != goog.iter.StopIteration || goog.array.isEmpty(cache)) {
          throw e;
        }
        // set useCache to true after we know that a 'StopIteration' exception
        // was thrown and the cache is not empty (to handle the 'empty iterable'
        // use case)
        useCache = true;
      }
    }

    returnElement = cache[cacheIndex];
    cacheIndex = (cacheIndex + 1) % cache.length;

    return returnElement;
  };

  return iter;
};


/**
 * Creates an iterator that counts indefinitely from a starting value.
 * @see http://docs.python.org/2/library/itertools.html#itertools.count
 * @param {number=} opt_start The starting value. Default is 0.
 * @param {number=} opt_step The number to increment with between each call to
 *     next. Negative and floating point numbers are allowed. Default is 1.
 * @return {!goog.iter.Iterator.<number>} A new iterator that returns the values
 *     in the series.
 */
goog.iter.count = function(opt_start, opt_step) {
  var counter = opt_start || 0;
  var step = goog.isDef(opt_step) ? opt_step : 1;
  var iter = new goog.iter.Iterator();

  iter.next = function() {
    var returnValue = counter;
    counter += step;
    return returnValue;
  };

  return iter;
};


/**
 * Creates an iterator that returns the same object or value repeatedly.
 * @param {VALUE} value Any object or value to repeat.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator that returns the
 *     repeated value.
 * @template VALUE
 */
goog.iter.repeat = function(value) {
  var iter = new goog.iter.Iterator();

  iter.next = goog.functions.constant(value);

  return iter;
};


/**
 * Creates an iterator that returns running totals from the numbers in
 * {@code iterable}. For example, the array {@code [1, 2, 3, 4, 5]} yields
 * {@code 1 -> 3 -> 6 -> 10 -> 15}.
 * @see http://docs.python.org/3.2/library/itertools.html#itertools.accumulate
 * @param {!goog.iter.Iterable.<number>} iterable The iterable of numbers to
 *     accumulate.
 * @return {!goog.iter.Iterator.<number>} A new iterator that returns the
 *     numbers in the series.
 */
goog.iter.accumulate = function(iterable) {
  var iterator = goog.iter.toIterator(iterable);
  var total = 0;
  var iter = new goog.iter.Iterator();

  iter.next = function() {
    total += iterator.next();
    return total;
  };

  return iter;
};


/**
 * Creates an iterator that returns arrays containing the ith elements from the
 * provided iterables. The returned arrays will be the same size as the number
 * of iterables given in {@code var_args}. Once the shortest iterable is
 * exhausted, subsequent calls to {@code next()} will throw
 * {@code goog.iter.StopIteration}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.izip
 * @param {...!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} var_args Any
 *     number of iterable objects.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} A new iterator that returns
 *     arrays of elements from the provided iterables.
 * @template VALUE
 */
goog.iter.zip = function(var_args) {
  var args = arguments;
  var iter = new goog.iter.Iterator();

  if (args.length > 0) {
    var iterators = goog.array.map(args, goog.iter.toIterator);
    iter.next = function() {
      var arr = goog.array.map(iterators, function(it) {
        return it.next();
      });
      return arr;
    };
  }

  return iter;
};


/**
 * Creates an iterator that returns arrays containing the ith elements from the
 * provided iterables. The returned arrays will be the same size as the number
 * of iterables given in {@code var_args}. Shorter iterables will be extended
 * with {@code fillValue}. Once the longest iterable is exhausted, subsequent
 * calls to {@code next()} will throw {@code goog.iter.StopIteration}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.izip_longest
 * @param {VALUE} fillValue The object or value used to fill shorter iterables.
 * @param {...!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} var_args Any
 *     number of iterable objects.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} A new iterator that returns
 *     arrays of elements from the provided iterables.
 * @template VALUE
 */
goog.iter.zipLongest = function(fillValue, var_args) {
  var args = goog.array.slice(arguments, 1);
  var iter = new goog.iter.Iterator();

  if (args.length > 0) {
    var iterators = goog.array.map(args, goog.iter.toIterator);

    iter.next = function() {
      var iteratorsHaveValues = false;  // false when all iterators are empty.
      var arr = goog.array.map(iterators, function(it) {
        var returnValue;
        try {
          returnValue = it.next();
          // Iterator had a value, so we've not exhausted the iterators.
          // Set flag accordingly.
          iteratorsHaveValues = true;
        } catch (ex) {
          if (ex !== goog.iter.StopIteration) {
            throw ex;
          }
          returnValue = fillValue;
        }
        return returnValue;
      });

      if (!iteratorsHaveValues) {
        throw goog.iter.StopIteration;
      }
      return arr;
    };
  }

  return iter;
};


/**
 * Creates an iterator that filters {@code iterable} based on a series of
 * {@code selectors}. On each call to {@code next()}, one item is taken from
 * both the {@code iterable} and {@code selectors} iterators. If the item from
 * {@code selectors} evaluates to true, the item from {@code iterable} is given.
 * Otherwise, it is skipped. Once either {@code iterable} or {@code selectors}
 * is exhausted, subsequent calls to {@code next()} will throw
 * {@code goog.iter.StopIteration}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.compress
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to filter.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} selectors An
 *     iterable of items to be evaluated in a boolean context to determine if
 *     the corresponding element in {@code iterable} should be included in the
 *     result.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator that returns the
 *     filtered values.
 * @template VALUE
 */
goog.iter.compress = function(iterable, selectors) {
  var selectorIterator = goog.iter.toIterator(selectors);

  return goog.iter.filter(iterable, function() {
    return !!selectorIterator.next();
  });
};



/**
 * Implements the {@code goog.iter.groupBy} iterator.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to group.
 * @param {function(...[VALUE]): KEY=} opt_keyFunc  Optional function for
 *     determining the key value for each group in the {@code iterable}. Default
 *     is the identity function.
 * @constructor
 * @extends {goog.iter.Iterator.<!Array>}
 * @template KEY, VALUE
 * @private
 */
goog.iter.GroupByIterator_ = function(iterable, opt_keyFunc) {

  /**
   * The iterable to group, coerced to an iterator.
   * @type {!goog.iter.Iterator}
   */
  this.iterator = goog.iter.toIterator(iterable);

  /**
   * A function for determining the key value for each element in the iterable.
   * If no function is provided, the identity function is used and returns the
   * element unchanged.
   * @type {function(...[VALUE]): KEY}
   */
  this.keyFunc = opt_keyFunc || goog.functions.identity;

  /**
   * The target key for determining the start of a group.
   * @type {KEY}
   */
  this.targetKey;

  /**
   * The current key visited during iteration.
   * @type {KEY}
   */
  this.currentKey;

  /**
   * The current value being added to the group.
   * @type {VALUE}
   */
  this.currentValue;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);


/** @override */
goog.iter.GroupByIterator_.prototype.next = function() {
  while (this.currentKey == this.targetKey) {
    this.currentValue = this.iterator.next();  // Exits on StopIteration
    this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return [this.currentKey, this.groupItems_(this.targetKey)];
};


/**
 * Performs the grouping of objects using the given key.
 * @param {KEY} targetKey  The target key object for the group.
 * @return {!Array.<VALUE>} An array of grouped objects.
 * @private
 */
goog.iter.GroupByIterator_.prototype.groupItems_ = function(targetKey) {
  var arr = [];
  while (this.currentKey == targetKey) {
    arr.push(this.currentValue);
    try {
      this.currentValue = this.iterator.next();
    } catch (ex) {
      if (ex !== goog.iter.StopIteration) {
        throw ex;
      }
      break;
    }
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return arr;
};


/**
 * Creates an iterator that returns arrays containing elements from the
 * {@code iterable} grouped by a key value. For iterables with repeated
 * elements (i.e. sorted according to a particular key function), this function
 * has a {@code uniq}-like effect. For example, grouping the array:
 * {@code [A, B, B, C, C, A]} produces
 * {@code [A, [A]], [B, [B, B]], [C, [C, C]], [A, [A]]}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.groupby
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to group.
 * @param {function(...[VALUE]): KEY=} opt_keyFunc  Optional function for
 *     determining the key value for each group in the {@code iterable}. Default
 *     is the identity function.
 * @return {!goog.iter.Iterator.<!Array>} A new iterator that returns arrays of
 *     consecutive key and groups.
 * @template KEY, VALUE
 */
goog.iter.groupBy = function(iterable, opt_keyFunc) {
  return new goog.iter.GroupByIterator_(iterable, opt_keyFunc);
};


/**
 * Returns an array of iterators each of which can iterate over the values in
 * {@code iterable} without advancing the others.
 * @see http://docs.python.org/2/library/itertools.html#itertools.tee
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to tee.
 * @param {number=} opt_num  The number of iterators to create. Default is 2.
 * @return {!Array.<goog.iter.Iterator.<VALUE>>} An array of iterators.
 * @template VALUE
 */
goog.iter.tee = function(iterable, opt_num) {
  var iterator = goog.iter.toIterator(iterable);
  var num = goog.isNumber(opt_num) ? opt_num : 2;
  var buffers = goog.array.map(goog.array.range(num), function() {
    return [];
  });

  var addNextIteratorValueToBuffers = function() {
    var val = iterator.next();
    goog.array.forEach(buffers, function(buffer) {
      buffer.push(val);
    });
  };

  var createIterator = function(buffer) {
    // Each tee'd iterator has an associated buffer (initially empty). When a
    // tee'd iterator's buffer is empty, it calls
    // addNextIteratorValueToBuffers(), adding the next value to all tee'd
    // iterators' buffers, and then returns that value. This allows each
    // iterator to be advanced independently.
    var iter = new goog.iter.Iterator();

    iter.next = function() {
      if (goog.array.isEmpty(buffer)) {
        addNextIteratorValueToBuffers();
      }
      goog.asserts.assert(!goog.array.isEmpty(buffer));
      return buffer.shift();
    };

    return iter;
  };

  return goog.array.map(buffers, createIterator);
};


/**
 * Creates an iterator that returns arrays containing a count and an element
 * obtained from the given {@code iterable}.
 * @see http://docs.python.org/2/library/functions.html#enumerate
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to enumerate.
 * @param {number=} opt_start  Optional starting value. Default is 0.
 * @return {!goog.iter.Iterator.<!Array>} A new iterator containing count/item
 *     pairs.
 * @template VALUE
 */
goog.iter.enumerate = function(iterable, opt_start) {
  return goog.iter.zip(goog.iter.count(opt_start), iterable);
};


/**
 * Creates an iterator that returns the first {@code limitSize} elements from an
 * iterable. If this number is greater than the number of elements in the
 * iterable, all the elements are returned.
 * @see http://goo.gl/V0sihp Inspired by the limit iterator in Guava.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to limit.
 * @param {number} limitSize  The maximum number of elements to return.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator containing
 *     {@code limitSize} elements.
 * @template VALUE
 */
goog.iter.limit = function(iterable, limitSize) {
  goog.asserts.assert(goog.math.isInt(limitSize) && limitSize >= 0);

  var iterator = goog.iter.toIterator(iterable);

  var iter = new goog.iter.Iterator();
  var remaining = limitSize;

  iter.next = function() {
    if (remaining-- > 0) {
      return iterator.next();
    }
    throw goog.iter.StopIteration;
  };

  return iter;
};


/**
 * Creates an iterator that is advanced {@code count} steps ahead. Consumed
 * values are silently discarded. If {@code count} is greater than the number
 * of elements in {@code iterable}, an empty iterator is returned. Subsequent
 * calls to {@code next()} will throw {@code goog.iter.StopIteration}.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to consume.
 * @param {number} count  The number of elements to consume from the iterator.
 * @return {!goog.iter.Iterator.<VALUE>} An iterator advanced zero or more steps
 *     ahead.
 * @template VALUE
 */
goog.iter.consume = function(iterable, count) {
  goog.asserts.assert(goog.math.isInt(count) && count >= 0);

  var iterator = goog.iter.toIterator(iterable);

  while (count-- > 0) {
    goog.iter.nextOrValue(iterator, null);
  }

  return iterator;
};


/**
 * Creates an iterator that returns a range of elements from an iterable.
 * Similar to {@see goog.array#slice} but does not support negative indexes.
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to slice.
 * @param {number} start  The index of the first element to return.
 * @param {number=} opt_end  The index after the last element to return. If
 *     defined, must be greater than or equal to {@code start}.
 * @return {!goog.iter.Iterator.<VALUE>} A new iterator containing a slice of
 *     the original.
 * @template VALUE
 */
goog.iter.slice = function(iterable, start, opt_end) {
  goog.asserts.assert(goog.math.isInt(start) && start >= 0);

  var iterator = goog.iter.consume(iterable, start);

  if (goog.isNumber(opt_end)) {
    goog.asserts.assert(
        goog.math.isInt(/** @type {number} */ (opt_end)) && opt_end >= start);
    iterator = goog.iter.limit(iterator, opt_end - start /* limitSize */);
  }

  return iterator;
};


/**
 * Checks an array for duplicate elements.
 * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to check for
 *     duplicates.
 * @return {boolean} True, if the array contains duplicates, false otherwise.
 * @private
 * @template VALUE
 */
// TODO(user): Consider moving this into goog.array as a public function.
goog.iter.hasDuplicates_ = function(arr) {
  var deduped = [];
  goog.array.removeDuplicates(arr, deduped);
  return arr.length != deduped.length;
};


/**
 * Creates an iterator that returns permutations of elements in
 * {@code iterable}.
 *
 * Permutations are obtained by taking the Cartesian product of
 * {@code opt_length} iterables and filtering out those with repeated
 * elements. For example, the permutations of {@code [1,2,3]} are
 * {@code [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.permutations
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable from which to generate permutations.
 * @param {number=} opt_length Length of each permutation. If omitted, defaults
 *     to the length of {@code iterable}.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} A new iterator containing the
 *     permutations of {@code iterable}.
 * @template VALUE
 */
goog.iter.permutations = function(iterable, opt_length) {
  var elements = goog.iter.toArray(iterable);
  var length = goog.isNumber(opt_length) ? opt_length : elements.length;

  var sets = goog.array.repeat(elements, length);
  var product = goog.iter.product.apply(undefined, sets);

  return goog.iter.filter(product, function(arr) {
    return !goog.iter.hasDuplicates_(arr);
  });
};


/**
 * Creates an iterator that returns combinations of elements from
 * {@code iterable}.
 *
 * Combinations are obtained by taking the {@see goog.iter#permutations} of
 * {@code iterable} and filtering those whose elements appear in the order they
 * are encountered in {@code iterable}. For example, the 3-length combinations
 * of {@code [0,1,2,3]} are {@code [[0,1,2], [0,1,3], [0,2,3], [1,2,3]]}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.combinations
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable from which to generate combinations.
 * @param {number} length The length of each combination.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} A new iterator containing
 *     combinations from the {@code iterable}.
 * @template VALUE
 */
goog.iter.combinations = function(iterable, length) {
  var elements = goog.iter.toArray(iterable);
  var indexes = goog.iter.range(elements.length);
  var indexIterator = goog.iter.permutations(indexes, length);
  // sortedIndexIterator will now give arrays of with the given length that
  // indicate what indexes into "elements" should be returned on each iteration.
  var sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });

  var iter = new goog.iter.Iterator();

  function getIndexFromElements(index) {
    return elements[index];
  }

  iter.next = function() {
    return goog.array.map(
        /** @type {!Array.<number>} */
        (sortedIndexIterator.next()), getIndexFromElements);
  };

  return iter;
};


/**
 * Creates an iterator that returns combinations of elements from
 * {@code iterable}, with repeated elements possible.
 *
 * Combinations are obtained by taking the Cartesian product of {@code length}
 * iterables and filtering those whose elements appear in the order they are
 * encountered in {@code iterable}. For example, the 2-length combinations of
 * {@code [1,2,3]} are {@code [[1,1], [1,2], [1,3], [2,2], [2,3], [3,3]]}.
 * @see http://docs.python.org/2/library/itertools.html#itertools.combinations_with_replacement
 * @see http://en.wikipedia.org/wiki/Combination#Number_of_combinations_with_repetition
 * @param {!goog.iter.Iterator.<VALUE>|!goog.iter.Iterable} iterable The
 *     iterable to combine.
 * @param {number} length The length of each combination.
 * @return {!goog.iter.Iterator.<!Array.<VALUE>>} A new iterator containing
 *     combinations from the {@code iterable}.
 * @template VALUE
 */
goog.iter.combinationsWithReplacement = function(iterable, length) {
  var elements = goog.iter.toArray(iterable);
  var indexes = goog.array.range(elements.length);
  var sets = goog.array.repeat(indexes, length);
  var indexIterator = goog.iter.product.apply(undefined, sets);
  // sortedIndexIterator will now give arrays of with the given length that
  // indicate what indexes into "elements" should be returned on each iteration.
  var sortedIndexIterator = goog.iter.filter(indexIterator, function(arr) {
    return goog.array.isSorted(arr);
  });

  var iter = new goog.iter.Iterator();

  function getIndexFromElements(index) {
    return elements[index];
  }

  iter.next = function() {
    return goog.array.map(
        /** @type {!Array.<number>} */
        (sortedIndexIterator.next()), getIndexFromElements);
  };

  return iter;
};
}
if(!lt.util.load.provided_QMARK_('goog.structs.Map')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Datastructure: Hash Map.
 *
 * @author arv@google.com (Erik Arvidsson)
 * @author jonp@google.com (Jon Perlow) Optimized for IE6
 *
 * This file contains an implementation of a Map structure. It implements a lot
 * of the methods used in goog.structs so those functions work on hashes. This
 * is best suited for complex key types. For simple keys such as numbers and
 * strings, and where special names like __proto__ are not a concern, consider
 * using the lighter-weight utilities in goog.object.
 */


goog.provide('goog.structs.Map');

goog.require('goog.iter.Iterator');
goog.require('goog.iter.StopIteration');
goog.require('goog.object');



/**
 * Class for Hash Map datastructure.
 * @param {*=} opt_map Map or Object to initialize the map with.
 * @param {...*} var_args If 2 or more arguments are present then they
 *     will be used as key-value pairs.
 * @constructor
 * @template K, V
 */
goog.structs.Map = function(opt_map, var_args) {

  /**
   * Underlying JS object used to implement the map.
   * @private {!Object}
   */
  this.map_ = {};

  /**
   * An array of keys. This is necessary for two reasons:
   *   1. Iterating the keys using for (var key in this.map_) allocates an
   *      object for every key in IE which is really bad for IE6 GC perf.
   *   2. Without a side data structure, we would need to escape all the keys
   *      as that would be the only way we could tell during iteration if the
   *      key was an internal key or a property of the object.
   *
   * This array can contain deleted keys so it's necessary to check the map
   * as well to see if the key is still in the map (this doesn't require a
   * memory allocation in IE).
   * @private {!Array.<string>}
   */
  this.keys_ = [];

  /**
   * The number of key value pairs in the map.
   * @private {number}
   */
  this.count_ = 0;

  /**
   * Version used to detect changes while iterating.
   * @private {number}
   */
  this.version_ = 0;

  var argLength = arguments.length;

  if (argLength > 1) {
    if (argLength % 2) {
      throw Error('Uneven number of arguments');
    }
    for (var i = 0; i < argLength; i += 2) {
      this.set(arguments[i], arguments[i + 1]);
    }
  } else if (opt_map) {
    this.addAll(/** @type {Object} */ (opt_map));
  }
};


/**
 * @return {number} The number of key-value pairs in the map.
 */
goog.structs.Map.prototype.getCount = function() {
  return this.count_;
};


/**
 * Returns the values of the map.
 * @return {!Array.<V>} The values in the map.
 */
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();

  var rv = [];
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    rv.push(this.map_[key]);
  }
  return rv;
};


/**
 * Returns the keys of the map.
 * @return {!Array.<string>} Array of string values.
 */
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return /** @type {!Array.<string>} */ (this.keys_.concat());
};


/**
 * Whether the map contains the given key.
 * @param {*} key The key to check for.
 * @return {boolean} Whether the map contains the key.
 */
goog.structs.Map.prototype.containsKey = function(key) {
  return goog.structs.Map.hasKey_(this.map_, key);
};


/**
 * Whether the map contains the given value. This is O(n).
 * @param {V} val The value to check for.
 * @return {boolean} Whether the map contains the value.
 */
goog.structs.Map.prototype.containsValue = function(val) {
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    if (goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) {
      return true;
    }
  }
  return false;
};


/**
 * Whether this map is equal to the argument map.
 * @param {goog.structs.Map} otherMap The map against which to test equality.
 * @param {function(V, V): boolean=} opt_equalityFn Optional equality function
 *     to test equality of values. If not specified, this will test whether
 *     the values contained in each map are identical objects.
 * @return {boolean} Whether the maps are equal.
 */
goog.structs.Map.prototype.equals = function(otherMap, opt_equalityFn) {
  if (this === otherMap) {
    return true;
  }

  if (this.count_ != otherMap.getCount()) {
    return false;
  }

  var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;

  this.cleanupKeysArray_();
  for (var key, i = 0; key = this.keys_[i]; i++) {
    if (!equalityFn(this.get(key), otherMap.get(key))) {
      return false;
    }
  }

  return true;
};


/**
 * Default equality test for values.
 * @param {*} a The first value.
 * @param {*} b The second value.
 * @return {boolean} Whether a and b reference the same object.
 */
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b;
};


/**
 * @return {boolean} Whether the map is empty.
 */
goog.structs.Map.prototype.isEmpty = function() {
  return this.count_ == 0;
};


/**
 * Removes all key-value pairs from the map.
 */
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.keys_.length = 0;
  this.count_ = 0;
  this.version_ = 0;
};


/**
 * Removes a key-value pair based on the key. This is O(logN) amortized due to
 * updating the keys array whenever the count becomes half the size of the keys
 * in the keys array.
 * @param {*} key  The key to remove.
 * @return {boolean} Whether object was removed.
 */
goog.structs.Map.prototype.remove = function(key) {
  if (goog.structs.Map.hasKey_(this.map_, key)) {
    delete this.map_[key];
    this.count_--;
    this.version_++;

    // clean up the keys array if the threshhold is hit
    if (this.keys_.length > 2 * this.count_) {
      this.cleanupKeysArray_();
    }

    return true;
  }
  return false;
};


/**
 * Cleans up the temp keys array by removing entries that are no longer in the
 * map.
 * @private
 */
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if (this.count_ != this.keys_.length) {
    // First remove keys that are no longer in the map.
    var srcIndex = 0;
    var destIndex = 0;
    while (srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if (goog.structs.Map.hasKey_(this.map_, key)) {
        this.keys_[destIndex++] = key;
      }
      srcIndex++;
    }
    this.keys_.length = destIndex;
  }

  if (this.count_ != this.keys_.length) {
    // If the count still isn't correct, that means we have duplicates. This can
    // happen when the same key is added and removed multiple times. Now we have
    // to allocate one extra Object to remove the duplicates. This could have
    // been done in the first pass, but in the common case, we can avoid
    // allocating an extra object by only doing this when necessary.
    var seen = {};
    var srcIndex = 0;
    var destIndex = 0;
    while (srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if (!(goog.structs.Map.hasKey_(seen, key))) {
        this.keys_[destIndex++] = key;
        seen[key] = 1;
      }
      srcIndex++;
    }
    this.keys_.length = destIndex;
  }
};


/**
 * Returns the value for the given key.  If the key is not found and the default
 * value is not given this will return {@code undefined}.
 * @param {*} key The key to get the value for.
 * @param {DEFAULT=} opt_val The value to return if no item is found for the
 *     given key, defaults to undefined.
 * @return {V|DEFAULT} The value for the given key.
 * @template DEFAULT
 */
goog.structs.Map.prototype.get = function(key, opt_val) {
  if (goog.structs.Map.hasKey_(this.map_, key)) {
    return this.map_[key];
  }
  return opt_val;
};


/**
 * Adds a key-value pair to the map.
 * @param {*} key The key.
 * @param {V} value The value to add.
 * @return {*} Some subclasses return a value.
 */
goog.structs.Map.prototype.set = function(key, value) {
  if (!(goog.structs.Map.hasKey_(this.map_, key))) {
    this.count_++;
    this.keys_.push(key);
    // Only change the version if we add a new key.
    this.version_++;
  }
  this.map_[key] = value;
};


/**
 * Adds multiple key-value pairs from another goog.structs.Map or Object.
 * @param {Object} map  Object containing the data to add.
 */
goog.structs.Map.prototype.addAll = function(map) {
  var keys, values;
  if (map instanceof goog.structs.Map) {
    keys = map.getKeys();
    values = map.getValues();
  } else {
    keys = goog.object.getKeys(map);
    values = goog.object.getValues(map);
  }
  // we could use goog.array.forEach here but I don't want to introduce that
  // dependency just for this.
  for (var i = 0; i < keys.length; i++) {
    this.set(keys[i], values[i]);
  }
};


/**
 * Clones a map and returns a new map.
 * @return {!goog.structs.Map} A new map with the same key-value pairs.
 */
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this);
};


/**
 * Returns a new map in which all the keys and values are interchanged
 * (keys become values and values become keys). If multiple keys map to the
 * same value, the chosen transposed value is implementation-dependent.
 *
 * It acts very similarly to {goog.object.transpose(Object)}.
 *
 * @return {!goog.structs.Map} The transposed map.
 */
goog.structs.Map.prototype.transpose = function() {
  var transposed = new goog.structs.Map();
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    var value = this.map_[key];
    transposed.set(value, key);
  }

  return transposed;
};


/**
 * @return {!Object} Object representation of the map.
 */
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  var obj = {};
  for (var i = 0; i < this.keys_.length; i++) {
    var key = this.keys_[i];
    obj[key] = this.map_[key];
  }
  return obj;
};


/**
 * Returns an iterator that iterates over the keys in the map.  Removal of keys
 * while iterating might have undesired side effects.
 * @return {!goog.iter.Iterator} An iterator over the keys in the map.
 */
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(true);
};


/**
 * Returns an iterator that iterates over the values in the map.  Removal of
 * keys while iterating might have undesired side effects.
 * @return {!goog.iter.Iterator} An iterator over the values in the map.
 */
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(false);
};


/**
 * Returns an iterator that iterates over the values or the keys in the map.
 * This throws an exception if the map was mutated since the iterator was
 * created.
 * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
 *     over the values.  The default value is false.
 * @return {!goog.iter.Iterator} An iterator over the values or keys in the map.
 */
goog.structs.Map.prototype.__iterator__ = function(opt_keys) {
  // Clean up keys to minimize the risk of iterating over dead keys.
  this.cleanupKeysArray_();

  var i = 0;
  var keys = this.keys_;
  var map = this.map_;
  var version = this.version_;
  var selfObj = this;

  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while (true) {
      if (version != selfObj.version_) {
        throw Error('The map has changed since the iterator was created');
      }
      if (i >= keys.length) {
        throw goog.iter.StopIteration;
      }
      var key = keys[i++];
      return opt_keys ? key : map[key];
    }
  };
  return newIter;
};


/**
 * Safe way to test for hasOwnProperty.  It even allows testing for
 * 'hasOwnProperty'.
 * @param {Object} obj The object to test for presence of the given key.
 * @param {*} key The key to check for.
 * @return {boolean} Whether the object has the key.
 * @private
 */
goog.structs.Map.hasKey_ = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
}
if(!lt.util.load.provided_QMARK_('goog.structs')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generics method for collection-like classes and objects.
 *
 * @author arv@google.com (Erik Arvidsson)
 *
 * This file contains functions to work with collections. It supports using
 * Map, Set, Array and Object and other classes that implement collection-like
 * methods.
 */


goog.provide('goog.structs');

goog.require('goog.array');
goog.require('goog.object');


// We treat an object as a dictionary if it has getKeys or it is an object that
// isn't arrayLike.


/**
 * Returns the number of values in the collection-like object.
 * @param {Object} col The collection-like object.
 * @return {number} The number of values in the collection-like object.
 */
goog.structs.getCount = function(col) {
  if (typeof col.getCount == 'function') {
    return col.getCount();
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return col.length;
  }
  return goog.object.getCount(col);
};


/**
 * Returns the values of the collection-like object.
 * @param {Object} col The collection-like object.
 * @return {!Array} The values in the collection-like object.
 */
goog.structs.getValues = function(col) {
  if (typeof col.getValues == 'function') {
    return col.getValues();
  }
  if (goog.isString(col)) {
    return col.split('');
  }
  if (goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(col[i]);
    }
    return rv;
  }
  return goog.object.getValues(col);
};


/**
 * Returns the keys of the collection. Some collections have no notion of
 * keys/indexes and this function will return undefined in those cases.
 * @param {Object} col The collection-like object.
 * @return {!Array|undefined} The keys in the collection.
 */
goog.structs.getKeys = function(col) {
  if (typeof col.getKeys == 'function') {
    return col.getKeys();
  }
  // if we have getValues but no getKeys we know this is a key-less collection
  if (typeof col.getValues == 'function') {
    return undefined;
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(i);
    }
    return rv;
  }

  return goog.object.getKeys(col);
};


/**
 * Whether the collection contains the given value. This is O(n) and uses
 * equals (==) to test the existence.
 * @param {Object} col The collection-like object.
 * @param {*} val The value to check for.
 * @return {boolean} True if the map contains the value.
 */
goog.structs.contains = function(col, val) {
  if (typeof col.contains == 'function') {
    return col.contains(val);
  }
  if (typeof col.containsValue == 'function') {
    return col.containsValue(val);
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.contains(/** @type {Array} */ (col), val);
  }
  return goog.object.containsValue(col, val);
};


/**
 * Whether the collection is empty.
 * @param {Object} col The collection-like object.
 * @return {boolean} True if empty.
 */
goog.structs.isEmpty = function(col) {
  if (typeof col.isEmpty == 'function') {
    return col.isEmpty();
  }

  // We do not use goog.string.isEmpty because here we treat the string as
  // collection and as such even whitespace matters

  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.isEmpty(/** @type {Array} */ (col));
  }
  return goog.object.isEmpty(col);
};


/**
 * Removes all the elements from the collection.
 * @param {Object} col The collection-like object.
 */
goog.structs.clear = function(col) {
  // NOTE(arv): This should not contain strings because strings are immutable
  if (typeof col.clear == 'function') {
    col.clear();
  } else if (goog.isArrayLike(col)) {
    goog.array.clear(/** @type {goog.array.ArrayLike} */ (col));
  } else {
    goog.object.clear(col);
  }
};


/**
 * Calls a function for each value in a collection. The function takes
 * three arguments; the value, the key and the collection.
 *
 * @param {S} col The collection-like object.
 * @param {function(this:T,?,?,S):?} f The function to call for every value.
 *     This function takes
 *     3 arguments (the value, the key or undefined if the collection has no
 *     notion of keys, and the collection) and the return value is irrelevant.
 * @param {T=} opt_obj The object to be used as the value of 'this'
 *     within {@code f}.
 * @template T,S
 * @deprecated Use a more specific method (e.g. goog.array.forEach,
 *     goog.object.forEach, etc.)
 */
goog.structs.forEach = function(col, f, opt_obj) {
  if (typeof col.forEach == 'function') {
    col.forEach(f, opt_obj);
  } else if (goog.isArrayLike(col) || goog.isString(col)) {
    goog.array.forEach(/** @type {Array} */ (col), f, opt_obj);
  } else {
    var keys = goog.structs.getKeys(col);
    var values = goog.structs.getValues(col);
    var l = values.length;
    for (var i = 0; i < l; i++) {
      f.call(opt_obj, values[i], keys && keys[i], col);
    }
  }
};


/**
 * Calls a function for every value in the collection. When a call returns true,
 * adds the value to a new collection (Array is returned by default).
 *
 * @param {S} col The collection-like object.
 * @param {function(this:T,?,?,S):boolean} f The function to call for every
 *     value. This function takes
 *     3 arguments (the value, the key or undefined if the collection has no
 *     notion of keys, and the collection) and should return a Boolean. If the
 *     return value is true the value is added to the result collection. If it
 *     is false the value is not included.
 * @param {T=} opt_obj The object to be used as the value of 'this'
 *     within {@code f}.
 * @return {!Object|!Array} A new collection where the passed values are
 *     present. If col is a key-less collection an array is returned.  If col
 *     has keys and values a plain old JS object is returned.
 * @template T,S
 */
goog.structs.filter = function(col, f, opt_obj) {
  if (typeof col.filter == 'function') {
    return col.filter(f, opt_obj);
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.filter(/** @type {!Array} */ (col), f, opt_obj);
  }

  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i];
      }
    }
  } else {
    // We should not use goog.array.filter here since we want to make sure that
    // the index is undefined as well as make sure that col is passed to the
    // function.
    rv = [];
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i]);
      }
    }
  }
  return rv;
};


/**
 * Calls a function for every value in the collection and adds the result into a
 * new collection (defaults to creating a new Array).
 *
 * @param {S} col The collection-like object.
 * @param {function(this:T,?,?,S):V} f The function to call for every value.
 *     This function takes 3 arguments (the value, the key or undefined if the
 *     collection has no notion of keys, and the collection) and should return
 *     something. The result will be used as the value in the new collection.
 * @param {T=} opt_obj  The object to be used as the value of 'this'
 *     within {@code f}.
 * @return {!Object.<V>|!Array.<V>} A new collection with the new values.  If
 *     col is a key-less collection an array is returned.  If col has keys and
 *     values a plain old JS object is returned.
 * @template T,S,V
 */
goog.structs.map = function(col, f, opt_obj) {
  if (typeof col.map == 'function') {
    return col.map(f, opt_obj);
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.map(/** @type {!Array} */ (col), f, opt_obj);
  }

  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);
    }
  } else {
    // We should not use goog.array.map here since we want to make sure that
    // the index is undefined as well as make sure that col is passed to the
    // function.
    rv = [];
    for (var i = 0; i < l; i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col);
    }
  }
  return rv;
};


/**
 * Calls f for each value in a collection. If any call returns true this returns
 * true (without checking the rest). If all returns false this returns false.
 *
 * @param {S} col The collection-like object.
 * @param {function(this:T,?,?,S):boolean} f The function to call for every
 *     value. This function takes 3 arguments (the value, the key or undefined
 *     if the collection has no notion of keys, and the collection) and should
 *     return a boolean.
 * @param {T=} opt_obj  The object to be used as the value of 'this'
 *     within {@code f}.
 * @return {boolean} True if any value passes the test.
 * @template T,S
 */
goog.structs.some = function(col, f, opt_obj) {
  if (typeof col.some == 'function') {
    return col.some(f, opt_obj);
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.some(/** @type {!Array} */ (col), f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true;
    }
  }
  return false;
};


/**
 * Calls f for each value in a collection. If all calls return true this return
 * true this returns true. If any returns false this returns false at this point
 *  and does not continue to check the remaining values.
 *
 * @param {S} col The collection-like object.
 * @param {function(this:T,?,?,S):boolean} f The function to call for every
 *     value. This function takes 3 arguments (the value, the key or
 *     undefined if the collection has no notion of keys, and the collection)
 *     and should return a boolean.
 * @param {T=} opt_obj  The object to be used as the value of 'this'
 *     within {@code f}.
 * @return {boolean} True if all key-value pairs pass the test.
 * @template T,S
 */
goog.structs.every = function(col, f, opt_obj) {
  if (typeof col.every == 'function') {
    return col.every(f, opt_obj);
  }
  if (goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.every(/** @type {!Array} */ (col), f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false;
    }
  }
  return true;
};
}
if(!lt.util.load.provided_QMARK_('goog.structs.Collection')) {
// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines the collection interface.
 *
 * @author nnaze@google.com (Nathan Naze)
 */

goog.provide('goog.structs.Collection');



/**
 * An interface for a collection of values.
 * @interface
 * @template T
 */
goog.structs.Collection = function() {};


/**
 * @param {T} value Value to add to the collection.
 */
goog.structs.Collection.prototype.add;


/**
 * @param {T} value Value to remove from the collection.
 */
goog.structs.Collection.prototype.remove;


/**
 * @param {T} value Value to find in the collection.
 * @return {boolean} Whether the collection contains the specified value.
 */
goog.structs.Collection.prototype.contains;


/**
 * @return {number} The number of values stored in the collection.
 */
goog.structs.Collection.prototype.getCount;

}
if(!lt.util.load.provided_QMARK_('goog.structs.Set')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Datastructure: Set.
 *
 * @author arv@google.com (Erik Arvidsson)
 * @author pallosp@google.com (Peter Pallos)
 *
 * This class implements a set data structure. Adding and removing is O(1). It
 * supports both object and primitive values. Be careful because you can add
 * both 1 and new Number(1), because these are not the same. You can even add
 * multiple new Number(1) because these are not equal.
 */


goog.provide('goog.structs.Set');

goog.require('goog.structs');
goog.require('goog.structs.Collection');
goog.require('goog.structs.Map');



/**
 * A set that can contain both primitives and objects.  Adding and removing
 * elements is O(1).  Primitives are treated as identical if they have the same
 * type and convert to the same string.  Objects are treated as identical only
 * if they are references to the same object.  WARNING: A goog.structs.Set can
 * contain both 1 and (new Number(1)), because they are not the same.  WARNING:
 * Adding (new Number(1)) twice will yield two distinct elements, because they
 * are two different objects.  WARNING: Any object that is added to a
 * goog.structs.Set will be modified!  Because goog.getUid() is used to
 * identify objects, every object in the set will be mutated.
 * @param {Array.<T>|Object.<?,T>=} opt_values Initial values to start with.
 * @constructor
 * @implements {goog.structs.Collection.<T>}
 * @final
 * @template T
 */
goog.structs.Set = function(opt_values) {
  this.map_ = new goog.structs.Map;
  if (opt_values) {
    this.addAll(opt_values);
  }
};


/**
 * Obtains a unique key for an element of the set.  Primitives will yield the
 * same key if they have the same type and convert to the same string.  Object
 * references will yield the same key only if they refer to the same object.
 * @param {*} val Object or primitive value to get a key for.
 * @return {string} A unique key for this value/object.
 * @private
 */
goog.structs.Set.getKey_ = function(val) {
  var type = typeof val;
  if (type == 'object' && val || type == 'function') {
    return 'o' + goog.getUid(/** @type {Object} */ (val));
  } else {
    return type.substr(0, 1) + val;
  }
};


/**
 * @return {number} The number of elements in the set.
 * @override
 */
goog.structs.Set.prototype.getCount = function() {
  return this.map_.getCount();
};


/**
 * Add a primitive or an object to the set.
 * @param {T} element The primitive or object to add.
 * @override
 */
goog.structs.Set.prototype.add = function(element) {
  this.map_.set(goog.structs.Set.getKey_(element), element);
};


/**
 * Adds all the values in the given collection to this set.
 * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
 *     containing the elements to add.
 */
goog.structs.Set.prototype.addAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.add(values[i]);
  }
};


/**
 * Removes all values in the given collection from this set.
 * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection
 *     containing the elements to remove.
 */
goog.structs.Set.prototype.removeAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.remove(values[i]);
  }
};


/**
 * Removes the given element from this set.
 * @param {T} element The primitive or object to remove.
 * @return {boolean} Whether the element was found and removed.
 * @override
 */
goog.structs.Set.prototype.remove = function(element) {
  return this.map_.remove(goog.structs.Set.getKey_(element));
};


/**
 * Removes all elements from this set.
 */
goog.structs.Set.prototype.clear = function() {
  this.map_.clear();
};


/**
 * Tests whether this set is empty.
 * @return {boolean} True if there are no elements in this set.
 */
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.isEmpty();
};


/**
 * Tests whether this set contains the given element.
 * @param {T} element The primitive or object to test for.
 * @return {boolean} True if this set contains the given element.
 * @override
 */
goog.structs.Set.prototype.contains = function(element) {
  return this.map_.containsKey(goog.structs.Set.getKey_(element));
};


/**
 * Tests whether this set contains all the values in a given collection.
 * Repeated elements in the collection are ignored, e.g.  (new
 * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.
 * @param {goog.structs.Collection.<T>|Object} col A collection-like object.
 * @return {boolean} True if the set contains all elements.
 */
goog.structs.Set.prototype.containsAll = function(col) {
  return goog.structs.every(col, this.contains, this);
};


/**
 * Finds all values that are present in both this set and the given collection.
 * @param {Array.<S>|Object.<?,S>} col A collection.
 * @return {!goog.structs.Set.<T|S>} A new set containing all the values
 *     (primitives or objects) present in both this set and the given
 *     collection.
 * @template S
 */
goog.structs.Set.prototype.intersection = function(col) {
  var result = new goog.structs.Set();

  var values = goog.structs.getValues(col);
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (this.contains(value)) {
      result.add(value);
    }
  }

  return result;
};


/**
 * Finds all values that are present in this set and not in the given
 * collection.
 * @param {Array.<T>|goog.structs.Collection.<T>|Object.<?,T>} col A collection.
 * @return {!goog.structs.Set} A new set containing all the values
 *     (primitives or objects) present in this set but not in the given
 *     collection.
 */
goog.structs.Set.prototype.difference = function(col) {
  var result = this.clone();
  result.removeAll(col);
  return result;
};


/**
 * Returns an array containing all the elements in this set.
 * @return {!Array.<T>} An array containing all the elements in this set.
 */
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues();
};


/**
 * Creates a shallow clone of this set.
 * @return {!goog.structs.Set.<T>} A new set containing all the same elements as
 *     this set.
 */
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this);
};


/**
 * Tests whether the given collection consists of the same elements as this set,
 * regardless of order, without repetition.  Primitives are treated as equal if
 * they have the same type and convert to the same string; objects are treated
 * as equal if they are references to the same object.  This operation is O(n).
 * @param {goog.structs.Collection.<T>|Object} col A collection.
 * @return {boolean} True if the given collection consists of the same elements
 *     as this set, regardless of order, without repetition.
 */
goog.structs.Set.prototype.equals = function(col) {
  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);
};


/**
 * Tests whether the given collection contains all the elements in this set.
 * Primitives are treated as equal if they have the same type and convert to the
 * same string; objects are treated as equal if they are references to the same
 * object.  This operation is O(n).
 * @param {goog.structs.Collection.<T>|Object} col A collection.
 * @return {boolean} True if this set is a subset of the given collection.
 */
goog.structs.Set.prototype.isSubsetOf = function(col) {
  var colCount = goog.structs.getCount(col);
  if (this.getCount() > colCount) {
    return false;
  }
  // TODO(user) Find the minimal collection size where the conversion makes
  // the contains() method faster.
  if (!(col instanceof goog.structs.Set) && colCount > 5) {
    // Convert to a goog.structs.Set so that goog.structs.contains runs in
    // O(1) time instead of O(n) time.
    col = new goog.structs.Set(col);
  }
  return goog.structs.every(this, function(value) {
    return goog.structs.contains(col, value);
  });
};


/**
 * Returns an iterator that iterates over the elements in this set.
 * @param {boolean=} opt_keys This argument is ignored.
 * @return {!goog.iter.Iterator} An iterator over the elements in this set.
 */
goog.structs.Set.prototype.__iterator__ = function(opt_keys) {
  return this.map_.__iterator__(false);
};
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.vim')) {
goog.provide('lt.plugins.ltfiles.vim');
goog.require('cljs.core');
goog.require('lt.plugins.vim');
goog.require('clojure.string');
goog.require('lt.plugins.ltfiles.popup');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.plugins.vim');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.ltfiles.popup');
/**
* Turns off visual mode, v or V, after comment operation
*/
lt.plugins.ltfiles.vim.vim_toggle_comment_selection = (function vim_toggle_comment_selection(){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"toggle-comment-selection","toggle-comment-selection",4499822807));
if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null))))
{if(cljs.core.truth_(lt.plugins.ltfiles.util.current_ed.call(null).state.vim.visualLine))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"V");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"v");
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.vim-toggle-comment-selection","ltfiles.vim-toggle-comment-selection",2683966153),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggle comment selection that also handles visual mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.vim_toggle_comment_selection], null));
lt.plugins.ltfiles.vim.set_vim_yank = (function set_vim_yank(text){return CodeMirror.Vim.getRegisterController.call(null).unamedRegister.set(text,true);
});
lt.plugins.ltfiles.vim.show_registers = (function show_registers(){return lt.plugins.ltfiles.popup.info.call(null,cljs.core.map.call(null,(function (p__8283){var vec__8284 = p__8283;var k = cljs.core.nth.call(null,vec__8284,0,null);var v = cljs.core.nth.call(null,vec__8284,1,null);return [cljs.core.str(k),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get.call(null,v,"text")))].join('');
}),cljs.core.remove.call(null,(function (p1__8280_SHARP_){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,"-",null], null), null).call(null,cljs.core.first.call(null,p1__8280_SHARP_));
}),cljs.core.js__GT_clj.call(null,CodeMirror.Vim.getRegisterController.call(null).registers))),new cljs.core.Keyword(null,"header","header",4087600639),"Registers");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.show-registers","ltfiles.show-registers",1875818673),new cljs.core.Keyword(null,"desc","desc",1016984067),"show vim's registers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.show_registers], null));
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"ltexec_clj",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return lt.plugins.ltfiles.util.exec_commands.call(null,cljs.reader.read_string.call(null,info.argString));
})], null));
lt.plugins.ltfiles.vim.smart_join_line = (function smart_join_line(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var string = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor));var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor);var joined_line = [cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,0,ch),/\s*$/,"")),cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,ch),/^\s*/,""))].join('');return lt.objs.editor.set_line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor),joined_line);
} else
{return null;
}
});
lt.plugins.ltfiles.vim.smart_join = (function smart_join(){CodeMirror.Vim.handleKey(lt.plugins.ltfiles.util.current_ed.call(null),"J");
return lt.plugins.ltfiles.vim.smart_join_line.call(null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.smart-join","ltfiles.smart-join",2630849407),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: a smarter paredit-like J(oin)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.vim.smart_join], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.tab')) {
goog.provide('lt.plugins.ltfiles.tab');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.tab.smart_tab_close = (function smart_tab_close(){var ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var tabs = (function (){var G__8182 = ts;var G__8182__$1 = (((G__8182 == null))?null:cljs.core.deref.call(null,G__8182));var G__8182__$2 = (((G__8182__$1 == null))?null:new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(G__8182__$1));var G__8182__$3 = (((G__8182__$2 == null))?null:cljs.core.count.call(null,G__8182__$2));return G__8182__$3;
})();lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core._EQ_.call(null,1,tabs))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.smart-tab-close","ltfiles.smart-tab-close",1986819119),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: closes a tab and tabset if last tab",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.smart_tab_close], null));
lt.plugins.ltfiles.tab.close_current_tabs = (function close_current_tabs(){var ts_8204 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8187_8205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8204)));var chunk__8188_8206 = null;var count__8189_8207 = 0;var i__8190_8208 = 0;while(true){
if((i__8190_8208 < count__8189_8207))
{var tab_8209 = cljs.core._nth.call(null,chunk__8188_8206,i__8190_8208);lt.object.raise.call(null,tab_8209,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8210 = seq__8187_8205;
var G__8211 = chunk__8188_8206;
var G__8212 = count__8189_8207;
var G__8213 = (i__8190_8208 + 1);
seq__8187_8205 = G__8210;
chunk__8188_8206 = G__8211;
count__8189_8207 = G__8212;
i__8190_8208 = G__8213;
continue;
}
} else
{var temp__4092__auto___8214 = cljs.core.seq.call(null,seq__8187_8205);if(temp__4092__auto___8214)
{var seq__8187_8215__$1 = temp__4092__auto___8214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8187_8215__$1))
{var c__7112__auto___8216 = cljs.core.chunk_first.call(null,seq__8187_8215__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8187_8215__$1);
var G__8218 = c__7112__auto___8216;
var G__8219 = cljs.core.count.call(null,c__7112__auto___8216);
var G__8220 = 0;
seq__8187_8205 = G__8217;
chunk__8188_8206 = G__8218;
count__8189_8207 = G__8219;
i__8190_8208 = G__8220;
continue;
}
} else
{var tab_8221 = cljs.core.first.call(null,seq__8187_8215__$1);lt.object.raise.call(null,tab_8221,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8222 = cljs.core.next.call(null,seq__8187_8215__$1);
var G__8223 = null;
var G__8224 = 0;
var G__8225 = 0;
seq__8187_8205 = G__8222;
chunk__8188_8206 = G__8223;
count__8189_8207 = G__8224;
i__8190_8208 = G__8225;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.close-current-tabs","ltfiles.close-current-tabs",4601543384),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: closes a tabset completely - including all of its tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.close_current_tabs], null));
lt.plugins.ltfiles.tab.ensure_and_focus_second_tabset = (function ensure_and_focus_second_tabset(){if((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.ensure-and-focus-second-tabset","ltfiles.ensure-and-focus-second-tabset",3791357373),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Ensure second tabset and focus it",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.ensure_and_focus_second_tabset], null));
lt.plugins.ltfiles.tab.opened_files = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
* Same relative path as navigate/populate-bg
*/
lt.plugins.ltfiles.tab.relative_path = (function relative_path(path){var folder_parent = lt.objs.files.parent.call(null,lt.plugins.ltfiles.util.file_folder.call(null,path));return cljs.core.subs.call(null,path,(cljs.core.count.call(null,folder_parent) + 1));
});
lt.plugins.ltfiles.tab.__BEH__track_open_files = (function __BEH__track_open_files(this$,ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.ltfiles.tab.opened_files,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full","full",1017058817),path,new cljs.core.Keyword(null,"rel","rel",1014017035),lt.plugins.ltfiles.tab.relative_path.call(null,path)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.tab","track-open-files","lt.plugins.ltfiles.tab/track-open-files",2307634398),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltfiles.tab.__BEH__track_open_files,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.opener.opener,new cljs.core.Keyword("lt.plugins.ltfiles.tab","track-open-files","lt.plugins.ltfiles.tab/track-open-files",2307634398));
lt.plugins.ltfiles.tab.file_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.deref.call(null,lt.plugins.ltfiles.tab.opened_files);
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8191_SHARP_,p2__8193_SHARP_,p3__8192_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(lt.objs.files.basename.call(null,p1__8191_SHARP_)),cljs.core.str("</p><p class='binding'>"),cljs.core.str(p3__8192_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-buffers","ltfiles.open-buffers",1570712769),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Opens any file that has been opened since LT started",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.tab.file_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (file){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"full","full",1017058817).cljs$core$IFn$_invoke$arity$1(file));
})], null));
}
if(!lt.util.load.provided_QMARK_('goog.userAgent')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Rendering engine detection.
 * @see <a href="http://www.useragentstring.com/">User agent strings</a>
 * For information on the browser brand (such as Safari versus Chrome), see
 * goog.userAgent.product.
 * @see ../demos/useragent.html
 */

goog.provide('goog.userAgent');

goog.require('goog.string');


/**
 * @define {boolean} Whether we know at compile-time that the browser is IE.
 */
goog.define('goog.userAgent.ASSUME_IE', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is GECKO.
 */
goog.define('goog.userAgent.ASSUME_GECKO', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is WEBKIT.
 */
goog.define('goog.userAgent.ASSUME_WEBKIT', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is a
 *     mobile device running WebKit e.g. iPhone or Android.
 */
goog.define('goog.userAgent.ASSUME_MOBILE_WEBKIT', false);


/**
 * @define {boolean} Whether we know at compile-time that the browser is OPERA.
 */
goog.define('goog.userAgent.ASSUME_OPERA', false);


/**
 * @define {boolean} Whether the
 *     {@code goog.userAgent.isVersionOrHigher}
 *     function will return true for any version.
 */
goog.define('goog.userAgent.ASSUME_ANY_VERSION', false);


/**
 * Whether we know the browser engine at compile-time.
 * @type {boolean}
 * @private
 */
goog.userAgent.BROWSER_KNOWN_ =
    goog.userAgent.ASSUME_IE ||
    goog.userAgent.ASSUME_GECKO ||
    goog.userAgent.ASSUME_MOBILE_WEBKIT ||
    goog.userAgent.ASSUME_WEBKIT ||
    goog.userAgent.ASSUME_OPERA;


/**
 * Returns the userAgent string for the current browser.
 * Some user agents (I'm thinking of you, Gears WorkerPool) do not expose a
 * navigator object off the global scope.  In that case we return null.
 *
 * @return {?string} The userAgent string or null if there is none.
 */
goog.userAgent.getUserAgentString = function() {
  return goog.global['navigator'] ? goog.global['navigator'].userAgent : null;
};


/**
 * @return {Object} The native navigator object.
 */
goog.userAgent.getNavigator = function() {
  // Need a local navigator reference instead of using the global one,
  // to avoid the rare case where they reference different objects.
  // (in a WorkerPool, for example).
  return goog.global['navigator'];
};


/**
 * Initializer for goog.userAgent.
 *
 * This is a named function so that it can be stripped via the jscompiler
 * option for stripping types.
 * @private
 */
goog.userAgent.init_ = function() {
  /**
   * Whether the user agent string denotes Opera.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedOpera_ = false;

  /**
   * Whether the user agent string denotes Internet Explorer. This includes
   * other browsers using Trident as its rendering engine. For example AOL
   * and Netscape 8
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedIe_ = false;

  /**
   * Whether the user agent string denotes WebKit. WebKit is the rendering
   * engine that Safari, Android and others use.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedWebkit_ = false;

  /**
   * Whether the user agent string denotes a mobile device.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedMobile_ = false;

  /**
   * Whether the user agent string denotes Gecko. Gecko is the rendering
   * engine used by Mozilla, Mozilla Firefox, Camino and many more.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedGecko_ = false;

  var ua;
  if (!goog.userAgent.BROWSER_KNOWN_ &&
      (ua = goog.userAgent.getUserAgentString())) {
    var navigator = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = goog.string.startsWith(ua, 'Opera');
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ &&
        (goog.string.contains(ua, 'MSIE') ||
         goog.string.contains(ua, 'Trident'));
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ &&
        goog.string.contains(ua, 'WebKit');
    // WebKit also gives navigator.product string equal to 'Gecko'.
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ &&
        goog.string.contains(ua, 'Mobile');
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ &&
        !goog.userAgent.detectedWebkit_ && !goog.userAgent.detectedIe_ &&
        navigator.product == 'Gecko';
  }
};


if (!goog.userAgent.BROWSER_KNOWN_) {
  goog.userAgent.init_();
}


/**
 * Whether the user agent is Opera.
 * @type {boolean}
 */
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ?
    goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;


/**
 * Whether the user agent is Internet Explorer. This includes other browsers
 * using Trident as its rendering engine. For example AOL and Netscape 8
 * @type {boolean}
 */
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ?
    goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;


/**
 * Whether the user agent is Gecko. Gecko is the rendering engine used by
 * Mozilla, Mozilla Firefox, Camino and many more.
 * @type {boolean}
 */
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ?
    goog.userAgent.ASSUME_GECKO :
    goog.userAgent.detectedGecko_;


/**
 * Whether the user agent is WebKit. WebKit is the rendering engine that
 * Safari, Android and others use.
 * @type {boolean}
 */
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ?
    goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT :
    goog.userAgent.detectedWebkit_;


/**
 * Whether the user agent is running on a mobile device.
 * @type {boolean}
 */
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT ||
                        goog.userAgent.detectedMobile_;


/**
 * Used while transitioning code to use WEBKIT instead.
 * @type {boolean}
 * @deprecated Use {@link goog.userAgent.product.SAFARI} instead.
 * TODO(nicksantos): Delete this from goog.userAgent.
 */
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;


/**
 * @return {string} the platform (operating system) the user agent is running
 *     on. Default to empty string because navigator.platform may not be defined
 *     (on Rhino, for example).
 * @private
 */
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || '';
};


/**
 * The platform (operating system) the user agent is running on. Default to
 * empty string because navigator.platform may not be defined (on Rhino, for
 * example).
 * @type {string}
 */
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();


/**
 * @define {boolean} Whether the user agent is running on a Macintosh operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_MAC', false);


/**
 * @define {boolean} Whether the user agent is running on a Windows operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_WINDOWS', false);


/**
 * @define {boolean} Whether the user agent is running on a Linux operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_LINUX', false);


/**
 * @define {boolean} Whether the user agent is running on a X11 windowing
 *     system.
 */
goog.define('goog.userAgent.ASSUME_X11', false);


/**
 * @define {boolean} Whether the user agent is running on Android.
 */
goog.define('goog.userAgent.ASSUME_ANDROID', false);


/**
 * @define {boolean} Whether the user agent is running on an iPhone.
 */
goog.define('goog.userAgent.ASSUME_IPHONE', false);


/**
 * @define {boolean} Whether the user agent is running on an iPad.
 */
goog.define('goog.userAgent.ASSUME_IPAD', false);


/**
 * @type {boolean}
 * @private
 */
goog.userAgent.PLATFORM_KNOWN_ =
    goog.userAgent.ASSUME_MAC ||
    goog.userAgent.ASSUME_WINDOWS ||
    goog.userAgent.ASSUME_LINUX ||
    goog.userAgent.ASSUME_X11 ||
    goog.userAgent.ASSUME_ANDROID ||
    goog.userAgent.ASSUME_IPHONE ||
    goog.userAgent.ASSUME_IPAD;


/**
 * Initialize the goog.userAgent constants that define which platform the user
 * agent is running on.
 * @private
 */
goog.userAgent.initPlatform_ = function() {
  /**
   * Whether the user agent is running on a Macintosh operating system.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM,
      'Mac');

  /**
   * Whether the user agent is running on a Windows operating system.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedWindows_ = goog.string.contains(
      goog.userAgent.PLATFORM, 'Win');

  /**
   * Whether the user agent is running on a Linux operating system.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM,
      'Linux');

  /**
   * Whether the user agent is running on a X11 windowing system.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() &&
      goog.string.contains(goog.userAgent.getNavigator()['appVersion'] || '',
          'X11');

  // Need user agent string for Android/IOS detection
  var ua = goog.userAgent.getUserAgentString();

  /**
   * Whether the user agent is running on Android.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedAndroid_ = !!ua &&
      goog.string.contains(ua, 'Android');

  /**
   * Whether the user agent is running on an iPhone.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedIPhone_ = !!ua && goog.string.contains(ua, 'iPhone');

  /**
   * Whether the user agent is running on an iPad.
   * @type {boolean}
   * @private
   */
  goog.userAgent.detectedIPad_ = !!ua && goog.string.contains(ua, 'iPad');
};


if (!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_();
}


/**
 * Whether the user agent is running on a Macintosh operating system.
 * @type {boolean}
 */
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;


/**
 * Whether the user agent is running on a Windows operating system.
 * @type {boolean}
 */
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;


/**
 * Whether the user agent is running on a Linux operating system.
 * @type {boolean}
 */
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;


/**
 * Whether the user agent is running on a X11 windowing system.
 * @type {boolean}
 */
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;


/**
 * Whether the user agent is running on Android.
 * @type {boolean}
 */
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_ANDROID : goog.userAgent.detectedAndroid_;


/**
 * Whether the user agent is running on an iPhone.
 * @type {boolean}
 */
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_IPHONE : goog.userAgent.detectedIPhone_;


/**
 * Whether the user agent is running on an iPad.
 * @type {boolean}
 */
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ?
    goog.userAgent.ASSUME_IPAD : goog.userAgent.detectedIPad_;


/**
 * @return {string} The string that describes the version number of the user
 *     agent.
 * @private
 */
goog.userAgent.determineVersion_ = function() {
  // All browsers have different ways to detect the version and they all have
  // different naming schemes.

  // version is a string rather than a number because it may contain 'b', 'a',
  // and so on.
  var version = '', re;

  if (goog.userAgent.OPERA && goog.global['opera']) {
    var operaVersion = goog.global['opera'].version;
    version = typeof operaVersion == 'function' ? operaVersion() : operaVersion;
  } else {
    if (goog.userAgent.GECKO) {
      re = /rv\:([^\);]+)(\)|;)/;
    } else if (goog.userAgent.IE) {
      re = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
    } else if (goog.userAgent.WEBKIT) {
      // WebKit/125.4
      re = /WebKit\/(\S+)/;
    }
    if (re) {
      var arr = re.exec(goog.userAgent.getUserAgentString());
      version = arr ? arr[1] : '';
    }
  }
  if (goog.userAgent.IE) {
    // IE9 can be in document mode 9 but be reporting an inconsistent user agent
    // version.  If it is identifying as a version lower than 9 we take the
    // documentMode as the version instead.  IE8 has similar behavior.
    // It is recommended to set the X-UA-Compatible header to ensure that IE9
    // uses documentMode 9.
    var docMode = goog.userAgent.getDocumentMode_();
    if (docMode > parseFloat(version)) {
      return String(docMode);
    }
  }
  return version;
};


/**
 * @return {number|undefined} Returns the document mode (for testing).
 * @private
 */
goog.userAgent.getDocumentMode_ = function() {
  // NOTE(user): goog.userAgent may be used in context where there is no DOM.
  var doc = goog.global['document'];
  return doc ? doc['documentMode'] : undefined;
};


/**
 * The version of the user agent. This is a string because it might contain
 * 'b' (as in beta) as well as multiple dots.
 * @type {string}
 */
goog.userAgent.VERSION = goog.userAgent.determineVersion_();


/**
 * Compares two version numbers.
 *
 * @param {string} v1 Version of first item.
 * @param {string} v2 Version of second item.
 *
 * @return {number}  1 if first argument is higher
 *                   0 if arguments are equal
 *                  -1 if second argument is higher.
 * @deprecated Use goog.string.compareVersions.
 */
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2);
};


/**
 * Cache for {@link goog.userAgent.isVersionOrHigher}.
 * Calls to compareVersions are surprisingly expensive and, as a browser's
 * version number is unlikely to change during a session, we cache the results.
 * @const
 * @private
 */
goog.userAgent.isVersionOrHigherCache_ = {};


/**
 * Whether the user agent version is higher or the same as the given version.
 * NOTE: When checking the version numbers for Firefox and Safari, be sure to
 * use the engine's version, not the browser's version number.  For example,
 * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
 * Opera and Internet Explorer versions match the product release number.<br>
 * @see <a href="http://en.wikipedia.org/wiki/Safari_version_history">
 *     Webkit</a>
 * @see <a href="http://en.wikipedia.org/wiki/Gecko_engine">Gecko</a>
 *
 * @param {string|number} version The version to check.
 * @return {boolean} Whether the user agent version is higher or the same as
 *     the given version.
 */
goog.userAgent.isVersionOrHigher = function(version) {
  return goog.userAgent.ASSUME_ANY_VERSION ||
      goog.userAgent.isVersionOrHigherCache_[version] ||
      (goog.userAgent.isVersionOrHigherCache_[version] =
          goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0);
};


/**
 * Deprecated alias to {@code goog.userAgent.isVersionOrHigher}.
 * @param {string|number} version The version to check.
 * @return {boolean} Whether the user agent version is higher or the same as
 *     the given version.
 * @deprecated Use goog.userAgent.isVersionOrHigher().
 */
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;


/**
 * Whether the IE effective document mode is higher or the same as the given
 * document mode version.
 * NOTE: Only for IE, return false for another browser.
 *
 * @param {number} documentMode The document mode version to check.
 * @return {boolean} Whether the IE effective document mode is higher or the
 *     same as the given version.
 */
goog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return goog.userAgent.IE && goog.userAgent.DOCUMENT_MODE >= documentMode;
};


/**
 * Deprecated alias to {@code goog.userAgent.isDocumentModeOrHigher}.
 * @param {number} version The version to check.
 * @return {boolean} Whether the IE effective document mode is higher or the
 *      same as the given version.
 * @deprecated Use goog.userAgent.isDocumentModeOrHigher().
 */
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;


/**
 * For IE version < 7, documentMode is undefined, so attempt to use the
 * CSS1Compat property to see if we are in standards mode. If we are in
 * standards mode, treat the browser version as the document mode. Otherwise,
 * IE is emulating version 5.
 * @type {number|undefined}
 * @const
 */
goog.userAgent.DOCUMENT_MODE = (function() {
  var doc = goog.global['document'];
  if (!doc || !goog.userAgent.IE) {
    return undefined;
  }
  var mode = goog.userAgent.getDocumentMode_();
  return mode || (doc['compatMode'] == 'CSS1Compat' ?
      parseInt(goog.userAgent.VERSION, 10) : 5);
})();
}
if(!lt.util.load.provided_QMARK_('goog.debug')) {
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Logging and debugging utilities.
 *
 * @see ../demos/debug.html
 */

goog.provide('goog.debug');

goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.structs.Set');
goog.require('goog.userAgent');


/** @define {boolean} Whether logging should be enabled. */
goog.define('goog.debug.LOGGING_ENABLED', goog.DEBUG);


/**
 * Catches onerror events fired by windows and similar objects.
 * @param {function(Object)} logFunc The function to call with the error
 *    information.
 * @param {boolean=} opt_cancel Whether to stop the error from reaching the
 *    browser.
 * @param {Object=} opt_target Object that fires onerror events.
 */
goog.debug.catchErrors = function(logFunc, opt_cancel, opt_target) {
  var target = opt_target || goog.global;
  var oldErrorHandler = target.onerror;
  var retVal = !!opt_cancel;

  // Chrome interprets onerror return value backwards (http://crbug.com/92062)
  // until it was fixed in webkit revision r94061 (Webkit 535.3). This
  // workaround still needs to be skipped in Safari after the webkit change
  // gets pushed out in Safari.
  // See https://bugs.webkit.org/show_bug.cgi?id=67119
  if (goog.userAgent.WEBKIT &&
      !goog.userAgent.isVersionOrHigher('535.3')) {
    retVal = !retVal;
  }

  /**
   * New onerror handler for this target. This onerror handler follows the spec
   * according to
   * http://www.whatwg.org/specs/web-apps/current-work/#runtime-script-errors
   * The spec was changed in August 2013 to support receiving column information
   * and an error object for all scripts on the same origin or cross origin
   * scripts with the proper headers. See
   * https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
   *
   * @param {string} message The error message. For cross-origin errors, this
   *     will be scrubbed to just "Script error.". For new browsers that have
   *     updated to follow the latest spec, errors that come from origins that
   *     have proper cross origin headers will not be scrubbed.
   * @param {string} url The URL of the script that caused the error. The URL
   *     will be scrubbed to "" for cross origin scripts unless the script has
   *     proper cross origin headers and the browser has updated to the latest
   *     spec.
   * @param {number} line The line number in the script that the error
   *     occurred on.
   * @param {number=} opt_col The optional column number that the error
   *     occurred on. Only browsers that have updated to the latest spec will
   *     include this.
   * @param {Error=} opt_error The optional actual error object for this
   *     error that should include the stack. Only browsers that have updated
   *     to the latest spec will inlude this parameter.
   * @return {boolean} Whether to prevent the error from reaching the browser.
   */
  target.onerror = function(message, url, line, opt_col, opt_error) {
    if (oldErrorHandler) {
      oldErrorHandler(message, url, line, opt_col, opt_error);
    }
    logFunc({
      message: message,
      fileName: url,
      line: line,
      col: opt_col,
      error: opt_error
    });
    return retVal;
  };
};


/**
 * Creates a string representing an object and all its properties.
 * @param {Object|null|undefined} obj Object to expose.
 * @param {boolean=} opt_showFn Show the functions as well as the properties,
 *     default is false.
 * @return {string} The string representation of {@code obj}.
 */
goog.debug.expose = function(obj, opt_showFn) {
  if (typeof obj == 'undefined') {
    return 'undefined';
  }
  if (obj == null) {
    return 'NULL';
  }
  var str = [];

  for (var x in obj) {
    if (!opt_showFn && goog.isFunction(obj[x])) {
      continue;
    }
    var s = x + ' = ';
    /** @preserveTry */
    try {
      s += obj[x];
    } catch (e) {
      s += '*** ' + e + ' ***';
    }
    str.push(s);
  }
  return str.join('\n');
};


/**
 * Creates a string representing a given primitive or object, and for an
 * object, all its properties and nested objects.  WARNING: If an object is
 * given, it and all its nested objects will be modified.  To detect reference
 * cycles, this method identifies objects using goog.getUid() which mutates the
 * object.
 * @param {*} obj Object to expose.
 * @param {boolean=} opt_showFn Also show properties that are functions (by
 *     default, functions are omitted).
 * @return {string} A string representation of {@code obj}.
 */
goog.debug.deepExpose = function(obj, opt_showFn) {
  var str = [];

  var helper = function(obj, space, parentSeen) {
    var nestspace = space + '  ';
    var seen = new goog.structs.Set(parentSeen);

    var indentMultiline = function(str) {
      return str.replace(/\n/g, '\n' + space);
    };

    /** @preserveTry */
    try {
      if (!goog.isDef(obj)) {
        str.push('undefined');
      } else if (goog.isNull(obj)) {
        str.push('NULL');
      } else if (goog.isString(obj)) {
        str.push('"' + indentMultiline(obj) + '"');
      } else if (goog.isFunction(obj)) {
        str.push(indentMultiline(String(obj)));
      } else if (goog.isObject(obj)) {
        if (seen.contains(obj)) {
          str.push('*** reference loop detected ***');
        } else {
          seen.add(obj);
          str.push('{');
          for (var x in obj) {
            if (!opt_showFn && goog.isFunction(obj[x])) {
              continue;
            }
            str.push('\n');
            str.push(nestspace);
            str.push(x + ' = ');
            helper(obj[x], nestspace, seen);
          }
          str.push('\n' + space + '}');
        }
      } else {
        str.push(obj);
      }
    } catch (e) {
      str.push('*** ' + e + ' ***');
    }
  };

  helper(obj, '', new goog.structs.Set());
  return str.join('');
};


/**
 * Recursively outputs a nested array as a string.
 * @param {Array} arr The array.
 * @return {string} String representing nested array.
 */
goog.debug.exposeArray = function(arr) {
  var str = [];
  for (var i = 0; i < arr.length; i++) {
    if (goog.isArray(arr[i])) {
      str.push(goog.debug.exposeArray(arr[i]));
    } else {
      str.push(arr[i]);
    }
  }
  return '[ ' + str.join(', ') + ' ]';
};


/**
 * Exposes an exception that has been caught by a try...catch and outputs the
 * error with a stack trace.
 * @param {Object} err Error object or string.
 * @param {Function=} opt_fn Optional function to start stack trace from.
 * @return {string} Details of exception.
 */
goog.debug.exposeException = function(err, opt_fn) {
  /** @preserveTry */
  try {
    var e = goog.debug.normalizeErrorObject(err);

    // Create the error message
    var error = 'Message: ' + goog.string.htmlEscape(e.message) +
        '\nUrl: <a href="view-source:' + e.fileName + '" target="_new">' +
        e.fileName + '</a>\nLine: ' + e.lineNumber + '\n\nBrowser stack:\n' +
        goog.string.htmlEscape(e.stack + '-> ') +
        '[end]\n\nJS stack traversal:\n' + goog.string.htmlEscape(
            goog.debug.getStacktrace(opt_fn) + '-> ');
    return error;
  } catch (e2) {
    return 'Exception trying to expose exception! You win, we lose. ' + e2;
  }
};


/**
 * Normalizes the error/exception object between browsers.
 * @param {Object} err Raw error object.
 * @return {Object} Normalized error object.
 */
goog.debug.normalizeErrorObject = function(err) {
  var href = goog.getObjectByName('window.location.href');
  if (goog.isString(err)) {
    return {
      'message': err,
      'name': 'Unknown error',
      'lineNumber': 'Not available',
      'fileName': href,
      'stack': 'Not available'
    };
  }

  var lineNumber, fileName;
  var threwError = false;

  try {
    lineNumber = err.lineNumber || err.line || 'Not available';
  } catch (e) {
    // Firefox 2 sometimes throws an error when accessing 'lineNumber':
    // Message: Permission denied to get property UnnamedClass.lineNumber
    lineNumber = 'Not available';
    threwError = true;
  }

  try {
    fileName = err.fileName || err.filename || err.sourceURL ||
        // $googDebugFname may be set before a call to eval to set the filename
        // that the eval is supposed to present.
        goog.global['$googDebugFname'] || href;
  } catch (e) {
    // Firefox 2 may also throw an error when accessing 'filename'.
    fileName = 'Not available';
    threwError = true;
  }

  // The IE Error object contains only the name and the message.
  // The Safari Error object uses the line and sourceURL fields.
  if (threwError || !err.lineNumber || !err.fileName || !err.stack ||
      !err.message || !err.name) {
    return {
      'message': err.message || 'Not available',
      'name': err.name || 'UnknownError',
      'lineNumber': lineNumber,
      'fileName': fileName,
      'stack': err.stack || 'Not available'
    };
  }

  // Standards error object
  return err;
};


/**
 * Converts an object to an Error if it's a String,
 * adds a stacktrace if there isn't one,
 * and optionally adds an extra message.
 * @param {Error|string} err  the original thrown object or string.
 * @param {string=} opt_message  optional additional message to add to the
 *     error.
 * @return {Error} If err is a string, it is used to create a new Error,
 *     which is enhanced and returned.  Otherwise err itself is enhanced
 *     and returned.
 */
goog.debug.enhanceError = function(err, opt_message) {
  var error = typeof err == 'string' ? Error(err) : err;
  if (!error.stack) {
    error.stack = goog.debug.getStacktrace(arguments.callee.caller);
  }
  if (opt_message) {
    // find the first unoccupied 'messageX' property
    var x = 0;
    while (error['message' + x]) {
      ++x;
    }
    error['message' + x] = String(opt_message);
  }
  return error;
};


/**
 * Gets the current stack trace. Simple and iterative - doesn't worry about
 * catching circular references or getting the args.
 * @param {number=} opt_depth Optional maximum depth to trace back to.
 * @return {string} A string with the function names of all functions in the
 *     stack, separated by \n.
 */
goog.debug.getStacktraceSimple = function(opt_depth) {
  var sb = [];
  var fn = arguments.callee.caller;
  var depth = 0;

  while (fn && (!opt_depth || depth < opt_depth)) {
    sb.push(goog.debug.getFunctionName(fn));
    sb.push('()\n');
    /** @preserveTry */
    try {
      fn = fn.caller;
    } catch (e) {
      sb.push('[exception trying to get caller]\n');
      break;
    }
    depth++;
    if (depth >= goog.debug.MAX_STACK_DEPTH) {
      sb.push('[...long stack...]');
      break;
    }
  }
  if (opt_depth && depth >= opt_depth) {
    sb.push('[...reached max depth limit...]');
  } else {
    sb.push('[end]');
  }

  return sb.join('');
};


/**
 * Max length of stack to try and output
 * @type {number}
 */
goog.debug.MAX_STACK_DEPTH = 50;


/**
 * Gets the current stack trace, either starting from the caller or starting
 * from a specified function that's currently on the call stack.
 * @param {Function=} opt_fn Optional function to start getting the trace from.
 *     If not provided, defaults to the function that called this.
 * @return {string} Stack trace.
 */
goog.debug.getStacktrace = function(opt_fn) {
  return goog.debug.getStacktraceHelper_(opt_fn || arguments.callee.caller, []);
};


/**
 * Private helper for getStacktrace().
 * @param {Function} fn Function to start getting the trace from.
 * @param {Array} visited List of functions visited so far.
 * @return {string} Stack trace starting from function fn.
 * @private
 */
goog.debug.getStacktraceHelper_ = function(fn, visited) {
  var sb = [];

  // Circular reference, certain functions like bind seem to cause a recursive
  // loop so we need to catch circular references
  if (goog.array.contains(visited, fn)) {
    sb.push('[...circular reference...]');

  // Traverse the call stack until function not found or max depth is reached
  } else if (fn && visited.length < goog.debug.MAX_STACK_DEPTH) {
    sb.push(goog.debug.getFunctionName(fn) + '(');
    var args = fn.arguments;
    // Args may be null for some special functions such as host objects or eval.
    for (var i = 0; args && i < args.length; i++) {
      if (i > 0) {
        sb.push(', ');
      }
      var argDesc;
      var arg = args[i];
      switch (typeof arg) {
        case 'object':
          argDesc = arg ? 'object' : 'null';
          break;

        case 'string':
          argDesc = arg;
          break;

        case 'number':
          argDesc = String(arg);
          break;

        case 'boolean':
          argDesc = arg ? 'true' : 'false';
          break;

        case 'function':
          argDesc = goog.debug.getFunctionName(arg);
          argDesc = argDesc ? argDesc : '[fn]';
          break;

        case 'undefined':
        default:
          argDesc = typeof arg;
          break;
      }

      if (argDesc.length > 40) {
        argDesc = argDesc.substr(0, 40) + '...';
      }
      sb.push(argDesc);
    }
    visited.push(fn);
    sb.push(')\n');
    /** @preserveTry */
    try {
      sb.push(goog.debug.getStacktraceHelper_(fn.caller, visited));
    } catch (e) {
      sb.push('[exception trying to get caller]\n');
    }

  } else if (fn) {
    sb.push('[...long stack...]');
  } else {
    sb.push('[end]');
  }
  return sb.join('');
};


/**
 * Set a custom function name resolver.
 * @param {function(Function): string} resolver Resolves functions to their
 *     names.
 */
goog.debug.setFunctionResolver = function(resolver) {
  goog.debug.fnNameResolver_ = resolver;
};


/**
 * Gets a function name
 * @param {Function} fn Function to get name of.
 * @return {string} Function's name.
 */
goog.debug.getFunctionName = function(fn) {
  if (goog.debug.fnNameCache_[fn]) {
    return goog.debug.fnNameCache_[fn];
  }
  if (goog.debug.fnNameResolver_) {
    var name = goog.debug.fnNameResolver_(fn);
    if (name) {
      goog.debug.fnNameCache_[fn] = name;
      return name;
    }
  }

  // Heuristically determine function name based on code.
  var functionSource = String(fn);
  if (!goog.debug.fnNameCache_[functionSource]) {
    var matches = /function ([^\(]+)/.exec(functionSource);
    if (matches) {
      var method = matches[1];
      goog.debug.fnNameCache_[functionSource] = method;
    } else {
      goog.debug.fnNameCache_[functionSource] = '[Anonymous]';
    }
  }

  return goog.debug.fnNameCache_[functionSource];
};


/**
 * Makes whitespace visible by replacing it with printable characters.
 * This is useful in finding diffrences between the expected and the actual
 * output strings of a testcase.
 * @param {string} string whose whitespace needs to be made visible.
 * @return {string} string whose whitespace is made visible.
 */
goog.debug.makeWhitespaceVisible = function(string) {
  return string.replace(/ /g, '[_]')
      .replace(/\f/g, '[f]')
      .replace(/\n/g, '[n]\n')
      .replace(/\r/g, '[r]')
      .replace(/\t/g, '[t]');
};


/**
 * Hash map for storing function names that have already been looked up.
 * @type {Object}
 * @private
 */
goog.debug.fnNameCache_ = {};


/**
 * Resolves functions to their names.  Resolved function names will be cached.
 * @type {function(Function):string}
 * @private
 */
goog.debug.fnNameResolver_;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.spy')) {
goog.provide('lt.plugins.ltfiles.spy');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.debug');
goog.require('goog.debug');
lt.plugins.ltfiles.spy.current_ns = (function current_ns(){return cljs.core.reduce.call(null,(function (ns,n){return (ns[n]);
}),window,clojure.string.split.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.spy","x","lt.plugins.ltfiles.spy/x",1265833555)),/\./));
});
lt.plugins.ltfiles.spy.ns_fns = (function ns_fns(namespace){return cljs.core.filter.call(null,(function (p1__8392_SHARP_){return cljs.core.fn_QMARK_.call(null,(namespace[p1__8392_SHARP_]));
}),cljs.core.js__GT_clj.call(null,goog.object.getKeys(namespace)));
});
lt.plugins.ltfiles.spy.spies = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.ltfiles.spy.__GT_spy = (function __GT_spy(f,fname){return (function() { 
var G__8393__delegate = function (args){cljs.core.println.call(null,[cljs.core.str("ARGUMENTS of "),cljs.core.str(fname),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,args))].join(''));
return cljs.core.apply.call(null,f,args);
};
var G__8393 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8393__delegate.call(this,args);};
G__8393.cljs$lang$maxFixedArity = 0;
G__8393.cljs$lang$applyTo = (function (arglist__8394){
var args = cljs.core.seq(arglist__8394);
return G__8393__delegate(args);
});
G__8393.cljs$core$IFn$_invoke$arity$variadic = G__8393__delegate;
return G__8393;
})()
;
});
/**
* Unsets spying and resets fn back to original.
*/
lt.plugins.ltfiles.spy.unspy = (function unspy(namespace,fname){return (namespace[fname] = cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.ltfiles.spy.spies),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [namespace,fname], null)));
});
/**
* Spies on a given fn. By default prints args
*/
lt.plugins.ltfiles.spy.spy = (function spy(namespace,f){var fname = goog.debug.getFunctionName(f);cljs.core.swap_BANG_.call(null,lt.plugins.ltfiles.spy.spies,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [namespace,fname], null),cljs.core.constantly.call(null,f));
return (namespace[fname] = lt.plugins.ltfiles.spy.__GT_spy.call(null,f,fname));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.paredit')) {
goog.provide('lt.plugins.ltfiles.paredit');
goog.require('cljs.core');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.ltfiles.paredit.newline_before_pair_close = (function newline_before_pair_close(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.operation.call(null,ed,((function (ed,temp__4092__auto__){
return (function (){lt.plugins.paredit_plus.move_cursor_along_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"before","before",3915985649));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.new-line-indent","editor.new-line-indent",3360183529));
});})(ed,temp__4092__auto__))
);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.paredit-newline-before-pair-close","ltfiles.paredit-newline-before-pair-close",1076254315),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Newline before a pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.paredit.newline_before_pair_close], null));
lt.plugins.ltfiles.paredit.paredit_kill_backword = (function paredit_kill_backword(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__8119 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__8119,0,null);var loc = cljs.core.nth.call(null,vec__8119,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,((function (mloc,temp__4092__auto____$1,vec__8119,c,loc,temp__4092__auto__){
return (function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,cljs.core.update_in.call(null,mloc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc),l,"");
});})(mloc,temp__4092__auto____$1,vec__8119,c,loc,temp__4092__auto__))
);
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.paredit-kill-backword","ltfiles.paredit-kill-backword",913609361),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: kill backword up to paredit parent",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.ltfiles.paredit.paredit_kill_backword.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.inline-result')) {
goog.provide('lt.plugins.ltfiles.inline_result');
goog.require('cljs.core');
goog.require('lt.objs.platform');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Finds the inline widget for the current line. If lines are selected, uses the last line
* of a selection (useful for eval).
*/
lt.plugins.ltfiles.inline_result.current_inline_widget = (function current_inline_widget(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.selection_bounds.call(null,ed))):new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return cljs.core.some.call(null,((function (ed,current_line){
return (function (p__8002){var vec__8003 = p__8002;var vec__8004 = cljs.core.nth.call(null,vec__8003,0,null);var l = cljs.core.nth.call(null,vec__8004,0,null);var t = cljs.core.nth.call(null,vec__8004,1,null);var widget = cljs.core.nth.call(null,vec__8003,1,null);if((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"inline","inline",4124874251))) && (cljs.core._EQ_.call(null,current_line,lt.objs.editor.lh__GT_line.call(null,ed,l))))
{return widget;
} else
{return null;
}
});})(ed,current_line))
,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
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
{var inline = temp__4092__auto__;return lt.objs.platform.copy.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline)));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-current-inline-result","ltfiles.toggle-current-inline-result",1523406293),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.toggle_current_inline_result], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.copy-current-inline-result","ltfiles.copy-current-inline-result",3799934710),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: copies current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.inline_result.copy_current_inline_result], null));
}

//# sourceMappingURL=ltfiles_compiled.js.map