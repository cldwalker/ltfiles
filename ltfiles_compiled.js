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
lt.plugins.ltfiles.popup.input_html = (function input_html(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.option","input.option",1495945867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),crate.binding.bound.call(null,this$,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013))], null)], null));var seq__8214_8230 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),((function (e__7755__auto__){
return (function (e){var me = this;return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"input-value","input-value",3916329248),lt.util.dom.val.call(null,me));
});})(e__7755__auto__))
], null)));var chunk__8215_8231 = null;var count__8216_8232 = 0;var i__8217_8233 = 0;while(true){
if((i__8217_8233 < count__8216_8232))
{var vec__8218_8234 = cljs.core._nth.call(null,chunk__8215_8231,i__8217_8233);var ev__7756__auto___8235 = cljs.core.nth.call(null,vec__8218_8234,0,null);var func__7757__auto___8236 = cljs.core.nth.call(null,vec__8218_8234,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8235,func__7757__auto___8236);
{
var G__8237 = seq__8214_8230;
var G__8238 = chunk__8215_8231;
var G__8239 = count__8216_8232;
var G__8240 = (i__8217_8233 + 1);
seq__8214_8230 = G__8237;
chunk__8215_8231 = G__8238;
count__8216_8232 = G__8239;
i__8217_8233 = G__8240;
continue;
}
} else
{var temp__4092__auto___8241 = cljs.core.seq.call(null,seq__8214_8230);if(temp__4092__auto___8241)
{var seq__8214_8242__$1 = temp__4092__auto___8241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_8242__$1))
{var c__7112__auto___8243 = cljs.core.chunk_first.call(null,seq__8214_8242__$1);{
var G__8244 = cljs.core.chunk_rest.call(null,seq__8214_8242__$1);
var G__8245 = c__7112__auto___8243;
var G__8246 = cljs.core.count.call(null,c__7112__auto___8243);
var G__8247 = 0;
seq__8214_8230 = G__8244;
chunk__8215_8231 = G__8245;
count__8216_8232 = G__8246;
i__8217_8233 = G__8247;
continue;
}
} else
{var vec__8219_8248 = cljs.core.first.call(null,seq__8214_8242__$1);var ev__7756__auto___8249 = cljs.core.nth.call(null,vec__8219_8248,0,null);var func__7757__auto___8250 = cljs.core.nth.call(null,vec__8219_8248,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8249,func__7757__auto___8250);
{
var G__8251 = cljs.core.next.call(null,seq__8214_8242__$1);
var G__8252 = null;
var G__8253 = 0;
var G__8254 = 0;
seq__8214_8230 = G__8251;
chunk__8215_8231 = G__8252;
count__8216_8232 = G__8253;
i__8217_8233 = G__8254;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-input","basic-input",3384203485),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.plugins.ltfiles.popup.input_html.call(null,this$);
}));
lt.plugins.ltfiles.popup.__GT_input = (function __GT_input(attrs){var G__8221 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ltfiles.popup","basic-input","lt.plugins.ltfiles.popup/basic-input",1091340164));lt.object.merge_BANG_.call(null,G__8221,attrs);
return G__8221;
});
lt.plugins.ltfiles.popup.basic_input = lt.plugins.ltfiles.popup.__GT_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),""], null));
/**
* @param {...*} var_args
*/
lt.plugins.ltfiles.popup.input = (function() { 
var input__delegate = function (input_obj,action_fn,p__8222){var map__8224 = p__8222;var map__8224__$1 = ((cljs.core.seq_QMARK_.call(null,map__8224))?cljs.core.apply.call(null,cljs.core.hash_map,map__8224):map__8224);var opts = map__8224__$1;if(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(opts)))
{lt.object.merge_BANG_.call(null,input_obj,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013)], null)));
} else
{}
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),lt.plugins.ltfiles.popup.input_html.call(null,input_obj),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__8224,map__8224__$1,opts){
return (function (){return action_fn.call(null,new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,input_obj)));
});})(map__8224,map__8224__$1,opts))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null)], null)], null));
};
var input = function (input_obj,action_fn,var_args){
var p__8222 = null;if (arguments.length > 2) {
  p__8222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return input__delegate.call(this,input_obj,action_fn,p__8222);};
input.cljs$lang$maxFixedArity = 2;
input.cljs$lang$applyTo = (function (arglist__8255){
var input_obj = cljs.core.first(arglist__8255);
arglist__8255 = cljs.core.next(arglist__8255);
var action_fn = cljs.core.first(arglist__8255);
var p__8222 = cljs.core.rest(arglist__8255);
return input__delegate(input_obj,action_fn,p__8222);
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
var info__delegate = function (data,p__8226){var map__8228 = p__8226;var map__8228__$1 = ((cljs.core.seq_QMARK_.call(null,map__8228))?cljs.core.apply.call(null,cljs.core.hash_map,map__8228):map__8228);var opts = map__8228__$1;var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null),opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,((function (map__8228,map__8228__$1,opts){
return (function (p1__8225_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",1013907695),p1__8225_SHARP_],null));
});})(map__8228,map__8228__$1,opts))
,data)], null))], null));return lt.objs.popup.popup_BANG_.call(null,opts__$1);
};
var info = function (data,var_args){
var p__8226 = null;if (arguments.length > 1) {
  p__8226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return info__delegate.call(this,data,p__8226);};
info.cljs$lang$maxFixedArity = 1;
info.cljs$lang$applyTo = (function (arglist__8256){
var data = cljs.core.first(arglist__8256);
var p__8226 = cljs.core.rest(arglist__8256);
return info__delegate(data,p__8226);
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
lt.plugins.ltfiles.util.file_folder = (function file_folder(file){return cljs.core.some.call(null,(function (p1__8297_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8297_SHARP_,file)))
{return p1__8297_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.ltfiles.util.current_folder = (function current_folder(){var file = lt.plugins.ltfiles.util.current_file.call(null);return cljs.core.some.call(null,((function (file){
return (function (p1__8298_SHARP_){if(cljs.core.truth_(lt.plugins.ltfiles.util.parent_QMARK_.call(null,p1__8298_SHARP_,file)))
{return p1__8298_SHARP_;
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
lt.plugins.ltfiles.util.exec_commands = (function exec_commands(commands){var seq__8303 = cljs.core.seq.call(null,commands);var chunk__8304 = null;var count__8305 = 0;var i__8306 = 0;while(true){
if((i__8306 < count__8305))
{var c = cljs.core._nth.call(null,chunk__8304,i__8306);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8307 = seq__8303;
var G__8308 = chunk__8304;
var G__8309 = count__8305;
var G__8310 = (i__8306 + 1);
seq__8303 = G__8307;
chunk__8304 = G__8308;
count__8305 = G__8309;
i__8306 = G__8310;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8303);if(temp__4092__auto__)
{var seq__8303__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8303__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8303__$1);{
var G__8311 = cljs.core.chunk_rest.call(null,seq__8303__$1);
var G__8312 = c__7112__auto__;
var G__8313 = cljs.core.count.call(null,c__7112__auto__);
var G__8314 = 0;
seq__8303 = G__8311;
chunk__8304 = G__8312;
count__8305 = G__8313;
i__8306 = G__8314;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8303__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8315 = cljs.core.next.call(null,seq__8303__$1);
var G__8316 = null;
var G__8317 = 0;
var G__8318 = 0;
seq__8303 = G__8315;
chunk__8304 = G__8316;
count__8305 = G__8317;
i__8306 = G__8318;
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
lt.plugins.ltfiles.selector.selector = (function selector(opts){var G__8258 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8258,new cljs.core.Keyword("lt.plugins.ltfiles.selector","set-selected","lt.plugins.ltfiles.selector/set-selected",3788256082));
return G__8258;
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
lt.plugins.ltfiles.keybindings.search_keybindings = (function search_keybindings(query,key_map){return cljs.core.filter.call(null,(function (p__8118){var vec__8119 = p__8118;var k = cljs.core.nth.call(null,vec__8119,0,null);var v = cljs.core.nth.call(null,vec__8119,1,null);return cljs.core.some.call(null,((function (vec__8119,k,v){
return (function (p1__8115_SHARP_){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,query),[cljs.core.str(p1__8115_SHARP_)].join(''));
});})(vec__8119,k,v))
,v);
}),key_map);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_ = (function find_command_keybindings_STAR_(query,key_map){var results = lt.plugins.ltfiles.keybindings.search_keybindings.call(null,query,key_map);cljs.core.println.call(null,"Matched",cljs.core.count.call(null,results),"keybindings:");
return cljs.core.prn.call(null,results);
});
lt.plugins.ltfiles.keybindings.find_command_keybindings = (function find_command_keybindings(keymap){cljs.core.println.call(null,"Searching ",cljs.core.count.call(null,keymap),"keybindings...");
return lt.plugins.ltfiles.popup.input.call(null,lt.plugins.ltfiles.popup.basic_input,(function (p1__8120_SHARP_){return lt.plugins.ltfiles.keybindings.find_command_keybindings_STAR_.call(null,p1__8120_SHARP_,keymap);
}),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"regex",new cljs.core.Keyword(null,"header","header",4087600639),"Enter command regex");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.find-command-keybindings","ltfiles.find-command-keybindings",575437544),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Finds keybindings that use a command for the given regex",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.ltfiles.keybindings.find_command_keybindings,cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null));
lt.plugins.ltfiles.keybindings.vim_map_keys = (function vim_map_keys(){var behaviors = cljs.core.get_in.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.objs.settings.user_behaviors_path)),"user.behaviors"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"app","app",1014001043)], null));var behaviors__$1 = cljs.core.some.call(null,((function (behaviors){
return (function (p1__8121_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__8121_SHARP_),new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)))
{return cljs.core.second.call(null,p1__8121_SHARP_);
} else
{return null;
}
});})(behaviors))
,behaviors);return behaviors__$1;
});
lt.plugins.ltfiles.keybindings.key_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p__8125){var vec__8126 = p__8125;var k = cljs.core.nth.call(null,vec__8126,0,null);var v = cljs.core.nth.call(null,vec__8126,1,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),goog.string.htmlEscape([cljs.core.str(k),cljs.core.str(": "),cljs.core.str(v)].join('')),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"commands","commands",4706336250),v], null);
}),cljs.core.merge.call(null,cljs.core.deref.call(null,lt.objs.keyboard.key_map),lt.plugins.ltfiles.keybindings.vim_map_keys.call(null))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8123_SHARP_,p2__8124_SHARP_,p3__8122_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8122_SHARP_),cljs.core.str("</p>")].join('');
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
return (function (p1__7886_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),p1__7886_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)));var line_behavior = (cljs.core.truth_(show_line_numbers)?new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738):new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131));var behavior_string = cljs.core.pr_str.call(null,cljs.core.assoc_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,line_behavior,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738),null,new cljs.core.Keyword("lt.objs.editor","hide-line-numbers","lt.objs.editor/hide-line-numbers",1337733131),null], null), null),cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"editor","editor",4001043679)], null)))))));cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),behavior_string);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.toggle-line-numbers","ltfiles.toggle-line-numbers",4692667453),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.toggle_line_numbers], null));
/**
* Disables stripping whitespace on first call and toggles on subsequent calls
*/
lt.plugins.ltfiles.toggle_strip_whitespace = (function toggle_strip_whitespace(){var ws_behavior = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var strip_whitespace = cljs.core.some.call(null,((function (ws_behavior){
return (function (p1__7887_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__7887_SHARP_);
});})(ws_behavior))
,cljs.core.get_in.call(null,ws_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",1013904287),new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680)], null)));var add_behavior_fn = (cljs.core.truth_(strip_whitespace)?cljs.core.identity:((function (ws_behavior,strip_whitespace){
return (function (p1__7888_SHARP_){return cljs.core.cons.call(null,new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588),p1__7888_SHARP_);
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
return (function (p1__7889_SHARP_){return cljs.core.dissoc.call(null,p1__7889_SHARP_,lt.plugins.ltfiles.plugin_name);
});})(personal_plugins_file))
.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266)),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))))))));var plugin_body = cljs.core.pr_str.call(null,cljs.core.assoc.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,personal_plugins_file)),personal_plugins_file),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),deps));lt.objs.files.save.call(null,personal_plugins_file,clojure.string.replace.call(null,plugin_body,/(\"\s*,|\{|\},)/,((function (personal_plugins_file,deps,plugin_body){
return (function (p1__7890_SHARP_){return [cljs.core.str(p1__7890_SHARP_),cljs.core.str("\n")].join('');
});})(personal_plugins_file,deps,plugin_body))
));
return lt.objs.notifos.set_msg_BANG_.call(null,"Plugins saved to ",personal_plugins_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.save-plugins","ltfiles.save-plugins",2609342561),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Save plugins to :dependencies of personal plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.save_plugins], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.add-plugins-folder","ltfiles.add-plugins-folder",3510706104),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Add plugins folder to current workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.objs.files.lt_user_dir.call(null,"plugins"));
})], null));
lt.plugins.ltfiles.refresh_current_folder = (function refresh_current_folder(){var temp__4090__auto__ = (function (){var folder = lt.plugins.ltfiles.util.current_folder.call(null);var folder__$1 = cljs.core.some.call(null,((function (folder){
return (function (p1__7891_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__7891_SHARP_)),folder))
{return p1__7891_SHARP_;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.document')) {
goog.provide('lt.plugins.ltfiles.document');
goog.require('cljs.core');
/**
* Updates given editor to use a linked doc
*/
lt.plugins.ltfiles.document.update_editor_to_linked_doc_BANG_ = (function update_editor_to_linked_doc_BANG_(ed,path,doc){var info = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"plaintext",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672)], null)], null),lt.objs.opener.path__GT_info.call(null,path));var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,path));var default_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"editor.keys.emacs","editor.keys.emacs",3283998978),null,new cljs.core.Keyword(null,"editor.inline-result","editor.inline-result",1965420162),null,new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680),null,new cljs.core.Keyword(null,"object","object",4285503153),null,new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219),null,new cljs.core.Keyword(null,"editor","editor",4001043679),null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222),null,new cljs.core.Keyword(null,"editor.keys.vim.normal","editor.keys.vim.normal",2715619942),null], null), null);var default_editor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"info","info",1017141280),null,new cljs.core.Keyword(null,"content","content",1965434859),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),null,new cljs.core.Keyword(null,"listeners","listeners",4090152369),null,new cljs.core.Keyword(null,"triggers","triggers",2516997421),null,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),null,new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),null,new cljs.core.Keyword(null,"ed","ed",1013907473),null,new cljs.core.Keyword(null,"doc","doc",1014003882),null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779),null,new cljs.core.Keyword(null,"tags","tags",1017456523),null,new cljs.core.Keyword("lt.objs.editor.pool","comment-options","lt.objs.editor.pool/comment-options",1136977589),null], null), null);var outdated_editor_keys = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,ed))),default_editor_keys);lt.objs.document.register_doc.call(null,doc,path);
lt.objs.editor.set_doc_BANG_.call(null,ed,doc);
lt.object.remove_tags.call(null,ed,clojure.set.difference.call(null,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),default_tags));
lt.object.add_tags.call(null,ed,cljs.core.into.call(null,default_tags,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$2(info,cljs.core.PersistentVector.EMPTY)));
lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),info], null));
cljs.core.swap_BANG_.call(null,ed,((function (info,content,default_tags,default_editor_keys,outdated_editor_keys){
return (function (p1__8066_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__8066_SHARP_,outdated_editor_keys);
});})(info,content,default_tags,default_editor_keys,outdated_editor_keys))
);
var temp__4092__auto__ = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var ts = temp__4092__auto__;return lt.object.raise.call(null,ts,new cljs.core.Keyword(null,"tab.updated","tab.updated",2727558868));
} else
{return null;
}
});
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
lt.plugins.ltfiles.developer.cmd_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),cljs.core.map.call(null,(function (p1__8034_SHARP_){return cljs.core.assoc.call(null,p1__8034_SHARP_,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__8034_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__8034_SHARP_))].join(''));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.command.manager)))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"command or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8036_SHARP_,p2__8037_SHARP_,p3__8035_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8035_SHARP_),cljs.core.str("</p>")].join('');
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
lt.plugins.ltfiles.developer.jump_to_command = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8038_SHARP_){return [cljs.core.str("/:command\\s+"),cljs.core.str(goog.string.regExpEscape(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__8038_SHARP_))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-command","ltfiles.jump-to-command",2538981995),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen command",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_command], null));
lt.plugins.ltfiles.developer.behavior_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),cljs.core.map.call(null,(function (p1__8039_SHARP_){return cljs.core.assoc.call(null,cljs.core.select_keys.call(null,p1__8039_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"desc","desc",1016984067)], null)),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8039_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__8039_SHARP_))].join(''));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"name or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8041_SHARP_,p2__8042_SHARP_,p3__8040_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__8040_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltfiles.developer.jump_to_behavior = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8043_SHARP_){return [cljs.core.str("/behavior\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8043_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-behavior","ltfiles.jump-to-behavior",3160122326),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen behavior",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.behavior_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_behavior], null));
lt.plugins.ltfiles.developer.object_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p1__8044_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"index","index",1114250308)],[p1__8044_SHARP_,[cljs.core.str(p1__8044_SHARP_)].join('')]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.object_defs))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"object"], null));
lt.plugins.ltfiles.developer.jump_to_object = cljs.core.partial.call(null,lt.plugins.ltfiles.developer.jump_to_first_result,(function (p1__8045_SHARP_){return [cljs.core.str("/object\\*\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8045_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-object","ltfiles.jump-to-object",3195662659),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: jump to chosen object definition",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.developer.object_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.developer.jump_to_object], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.connect-to-lt-ui","ltfiles.connect-to-lt-ui",4411103803),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Connect to LT UI via a keystroke",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.clients.local.init], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.print-context","ltfiles.print-context",2277396546),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Print context",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return cljs.core.prn.call(null,lt.objs.context.current.call(null));
})], null));
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
lt.plugins.ltfiles.vim.show_registers = (function show_registers(){return lt.plugins.ltfiles.popup.info.call(null,cljs.core.map.call(null,(function (p__8322){var vec__8323 = p__8322;var k = cljs.core.nth.call(null,vec__8323,0,null);var v = cljs.core.nth.call(null,vec__8323,1,null);return [cljs.core.str(k),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get.call(null,v,"text")))].join('');
}),cljs.core.remove.call(null,(function (p1__8319_SHARP_){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,"-",null], null), null).call(null,cljs.core.first.call(null,p1__8319_SHARP_));
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
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.spy')) {
goog.provide('lt.plugins.ltfiles.spy');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.object');
lt.plugins.ltfiles.spy.__GT_ns = (function __GT_ns(namespace){return cljs.core.reduce.call(null,(function (ns,n){return (ns[n]);
}),window,clojure.string.split.call(null,namespace,/\./));
});
lt.plugins.ltfiles.spy.ns_fns = (function ns_fns(namespace){return cljs.core.filter.call(null,(function (p1__8259_SHARP_){return cljs.core.fn_QMARK_.call(null,(namespace[p1__8259_SHARP_]));
}),cljs.core.js__GT_clj.call(null,goog.object.getKeys(namespace)));
});
lt.plugins.ltfiles.spy.spies = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.ltfiles.spy.__GT_spy = (function __GT_spy(f,fname){return (function() { 
var G__8260__delegate = function (args){cljs.core.println.call(null,[cljs.core.str("ARGUMENTS for "),cljs.core.str(fname),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,args))].join(''));
return cljs.core.apply.call(null,f,args);
};
var G__8260 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8260__delegate.call(this,args);};
G__8260.cljs$lang$maxFixedArity = 0;
G__8260.cljs$lang$applyTo = (function (arglist__8261){
var args = cljs.core.seq(arglist__8261);
return G__8260__delegate(args);
});
G__8260.cljs$core$IFn$_invoke$arity$variadic = G__8260__delegate;
return G__8260;
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
lt.plugins.ltfiles.spy.spy = (function spy(namespace,fname){var f = (namespace[fname]);cljs.core.swap_BANG_.call(null,lt.plugins.ltfiles.spy.spies,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [namespace,fname], null),cljs.core.constantly.call(null,f));
return (namespace[fname] = lt.plugins.ltfiles.spy.__GT_spy.call(null,f,fname));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.clojurescript')) {
goog.provide('lt.plugins.ltfiles.clojurescript');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('cljs.reader');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.ltfiles.spy');
goog.require('lt.plugins.ltfiles.spy');
goog.require('lt.plugins.ltfiles.selector');
goog.require('cljs.reader');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.plugins.ltfiles.util');
goog.require('lt.objs.command');
lt.plugins.ltfiles.clojurescript.current_ns = (function current_ns(){return lt.plugins.ltfiles.spy.__GT_ns.call(null,cljs.core.second.call(null,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.plugins.ltfiles.util.current_file.call(null))))));
});
lt.plugins.ltfiles.clojurescript.cmd_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.map.call(null,(function (p1__7999_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__7999_SHARP_]);
}),lt.plugins.ltfiles.spy.ns_fns.call(null,lt.plugins.ltfiles.clojurescript.current_ns.call(null))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"function"], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.clojurescript-spy","ltfiles.clojurescript-spy",695092433),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Spy on a clojurescript fn in current ns",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.clojurescript.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.ltfiles.spy.spy.call(null,lt.plugins.ltfiles.clojurescript.current_ns.call(null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(selection));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.clojurescript-unspy","ltfiles.clojurescript-unspy",3875186392),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Unspy on a clojurescript fn in current ns",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.clojurescript.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.ltfiles.spy.unspy.call(null,lt.plugins.ltfiles.clojurescript.current_ns.call(null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(selection));
})], null));
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
lt.plugins.ltfiles.tab.smart_tab_close = (function smart_tab_close(){var ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var tabs = (function (){var G__8263 = ts;var G__8263__$1 = (((G__8263 == null))?null:cljs.core.deref.call(null,G__8263));var G__8263__$2 = (((G__8263__$1 == null))?null:new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(G__8263__$1));var G__8263__$3 = (((G__8263__$2 == null))?null:cljs.core.count.call(null,G__8263__$2));return G__8263__$3;
})();lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core._EQ_.call(null,1,tabs))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.smart-tab-close","ltfiles.smart-tab-close",1986819119),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: closes a tab and tabset if last tab",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ltfiles.tab.smart_tab_close], null));
lt.plugins.ltfiles.tab.close_current_tabs = (function close_current_tabs(){var ts_8275 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8268_8276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8275)));var chunk__8269_8277 = null;var count__8270_8278 = 0;var i__8271_8279 = 0;while(true){
if((i__8271_8279 < count__8270_8278))
{var tab_8280 = cljs.core._nth.call(null,chunk__8269_8277,i__8271_8279);lt.object.raise.call(null,tab_8280,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8281 = seq__8268_8276;
var G__8282 = chunk__8269_8277;
var G__8283 = count__8270_8278;
var G__8284 = (i__8271_8279 + 1);
seq__8268_8276 = G__8281;
chunk__8269_8277 = G__8282;
count__8270_8278 = G__8283;
i__8271_8279 = G__8284;
continue;
}
} else
{var temp__4092__auto___8285 = cljs.core.seq.call(null,seq__8268_8276);if(temp__4092__auto___8285)
{var seq__8268_8286__$1 = temp__4092__auto___8285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8268_8286__$1))
{var c__7112__auto___8287 = cljs.core.chunk_first.call(null,seq__8268_8286__$1);{
var G__8288 = cljs.core.chunk_rest.call(null,seq__8268_8286__$1);
var G__8289 = c__7112__auto___8287;
var G__8290 = cljs.core.count.call(null,c__7112__auto___8287);
var G__8291 = 0;
seq__8268_8276 = G__8288;
chunk__8269_8277 = G__8289;
count__8270_8278 = G__8290;
i__8271_8279 = G__8291;
continue;
}
} else
{var tab_8292 = cljs.core.first.call(null,seq__8268_8286__$1);lt.object.raise.call(null,tab_8292,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8293 = cljs.core.next.call(null,seq__8268_8286__$1);
var G__8294 = null;
var G__8295 = 0;
var G__8296 = 0;
seq__8268_8276 = G__8293;
chunk__8269_8277 = G__8294;
count__8270_8278 = G__8295;
i__8271_8279 = G__8296;
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
lt.plugins.ltfiles.tab.file_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.reverse.call(null,cljs.core.deref.call(null,lt.plugins.ltfiles.tab.opened_files));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8272_SHARP_,p2__8274_SHARP_,p3__8273_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(lt.objs.files.basename.call(null,p1__8272_SHARP_)),cljs.core.str("</p><p class='binding'>"),cljs.core.str(p3__8273_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.open-buffers","ltfiles.open-buffers",1570712769),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Opens any file that has been opened since LT started",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.tab.file_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (file){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"full","full",1017058817).cljs$core$IFn$_invoke$arity$1(file));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.ltfiles.ctags')) {
goog.provide('lt.plugins.ltfiles.ctags');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.plugins.ltfiles.selector');
goog.require('lt.plugins.ctags');
goog.require('lt.plugins.ctags');
lt.plugins.ltfiles.ctags.token_selector = lt.plugins.ltfiles.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"token","token",1124445547),cljs.core.map.call(null,(function (p1__8023_SHARP_){return cljs.core.update_in.call(null,p1__8023_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",1124445547)], null),cljs.core.name);
}),cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.vals.call(null,new cljs.core.Keyword(null,"ctags","ctags",1108885102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.ctags.ctags))))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"token"], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.jump-to-ctag","ltfiles.jump-to-ctag",2504100571),new cljs.core.Keyword(null,"desc","desc",1016984067),"ltfiles: Select a ctag token from a ctags file",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltfiles.ctags.token_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.ctags.lookup_tag.call(null,lt.objs.editor.pool.last_active.call(null),selection);
})], null));
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
{var vec__8197 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__8197,0,null);var loc = cljs.core.nth.call(null,vec__8197,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,((function (mloc,temp__4092__auto____$1,vec__8197,c,loc,temp__4092__auto__){
return (function (){lt.objs.editor.replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.objs.editor.replace.call(null,ed,cljs.core.update_in.call(null,mloc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc),l,"");
});})(mloc,temp__4092__auto____$1,vec__8197,c,loc,temp__4092__auto__))
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
return (function (p__8080){var vec__8081 = p__8080;var vec__8082 = cljs.core.nth.call(null,vec__8081,0,null);var l = cljs.core.nth.call(null,vec__8082,0,null);var t = cljs.core.nth.call(null,vec__8082,1,null);var widget = cljs.core.nth.call(null,vec__8081,1,null);if((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"inline","inline",4124874251))) && (cljs.core._EQ_.call(null,current_line,lt.objs.editor.lh__GT_line.call(null,ed,l))))
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