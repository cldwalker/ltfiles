if(!lt.util.load.provided_QMARK_('lt.plugins.user.selector')) {
goog.provide('lt.plugins.user.selector');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
lt.plugins.user.selector.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.selector","set-selected","lt.plugins.user.selector/set-selected",2099112365),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.selector.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.user.selector.selector = (function selector(opts){var G__6811 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__6811,new cljs.core.Keyword("lt.plugins.user.selector","set-selected","lt.plugins.user.selector/set-selected",2099112365));
return G__6811;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.util')) {
goog.provide('lt.plugins.user.util');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Returns current word given string and cursor position in string
*/
lt.plugins.user.util.current_word_STAR_ = (function current_word_STAR_(string,cursor){return [cljs.core.str(cljs.core.re_find.call(null,/[^\s()\[\]]+$/,cljs.core.subs.call(null,string,0,cursor))),cljs.core.str(cljs.core.re_find.call(null,/^[^\s()\[\]]+/,cljs.core.subs.call(null,string,cursor)))].join('');
});
/**
* Current word under cursor. Disallows whitespace and []() chars in url
*/
lt.plugins.user.util.current_word = (function current_word(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);return lt.plugins.user.util.current_word_STAR_.call(null,lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor)),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor));
} else
{return null;
}
});
/**
* Returns a line of the current file relative to the cursor. Returns current line by default
*/
lt.plugins.user.util.relative_line = (function() {
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
lt.plugins.user.util.current_ed = (function current_ed(){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.user.util.parent_QMARK_ = (function parent_QMARK_(parent_path,path){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(parent_path)].join('')),path);
});
lt.plugins.user.util.current_file = (function current_file(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});
lt.plugins.user.util.current_directory = (function current_directory(){return lt.objs.files.parent.call(null,lt.plugins.user.util.current_file.call(null));
});
lt.plugins.user.util.file_folder = (function file_folder(file){return cljs.core.some.call(null,(function (p1__6860_SHARP_){if(cljs.core.truth_(lt.plugins.user.util.parent_QMARK_.call(null,p1__6860_SHARP_,file)))
{return p1__6860_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.user.util.current_folder = (function current_folder(){var file = lt.plugins.user.util.current_file.call(null);return cljs.core.some.call(null,((function (file){
return (function (p1__6861_SHARP_){if(cljs.core.truth_(lt.plugins.user.util.parent_QMARK_.call(null,p1__6861_SHARP_,file)))
{return p1__6861_SHARP_;
} else
{return null;
}
});})(file))
,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.user.util.sh = (function sh(cmd){return require("child_process").exec(cmd,(function (err,stdout,stderr){if(cljs.core.seq.call(null,stdout))
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
lt.plugins.user.util.exec_commands = (function exec_commands(commands){var seq__6866 = cljs.core.seq.call(null,commands);var chunk__6867 = null;var count__6868 = 0;var i__6869 = 0;while(true){
if((i__6869 < count__6868))
{var c = cljs.core._nth.call(null,chunk__6867,i__6869);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__6870 = seq__6866;
var G__6871 = chunk__6867;
var G__6872 = count__6868;
var G__6873 = (i__6869 + 1);
seq__6866 = G__6870;
chunk__6867 = G__6871;
count__6868 = G__6872;
i__6869 = G__6873;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6866);if(temp__4092__auto__)
{var seq__6866__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6866__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6866__$1);{
var G__6874 = cljs.core.chunk_rest.call(null,seq__6866__$1);
var G__6875 = c__5632__auto__;
var G__6876 = cljs.core.count.call(null,c__5632__auto__);
var G__6877 = 0;
seq__6866 = G__6874;
chunk__6867 = G__6875;
count__6868 = G__6876;
i__6869 = G__6877;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6866__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__6878 = cljs.core.next.call(null,seq__6866__$1);
var G__6879 = null;
var G__6880 = 0;
var G__6881 = 0;
seq__6866 = G__6878;
chunk__6867 = G__6879;
count__6868 = G__6880;
i__6869 = G__6881;
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
lt.plugins.user.util.insert_at_next_line = (function insert_at_next_line(ed,s){lt.objs.editor.replace.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)) + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),s);
return ed;
});
/**
* @param {...*} var_args
*/
lt.plugins.user.util.call_behavior_reaction = (function() { 
var call_behavior_reaction__delegate = function (id,args){var behavior_fn = new cljs.core.Keyword(null,"reaction","reaction",4441361819).cljs$core$IFn$_invoke$arity$1(lt.object.__GT_behavior.call(null,id));if(cljs.core.truth_(behavior_fn))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"behavior-fn","behavior-fn",-1300659236,null)))].join('')));
}
return cljs.core.apply.call(null,behavior_fn,args);
};
var call_behavior_reaction = function (id,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return call_behavior_reaction__delegate.call(this,id,args);};
call_behavior_reaction.cljs$lang$maxFixedArity = 1;
call_behavior_reaction.cljs$lang$applyTo = (function (arglist__6882){
var id = cljs.core.first(arglist__6882);
var args = cljs.core.rest(arglist__6882);
return call_behavior_reaction__delegate(id,args);
});
call_behavior_reaction.cljs$core$IFn$_invoke$arity$variadic = call_behavior_reaction__delegate;
return call_behavior_reaction;
})()
;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.user.spy')) {
goog.provide('lt.plugins.user.spy');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.object');
lt.plugins.user.spy.__GT_ns = (function __GT_ns(namespace){return cljs.core.reduce.call(null,(function (ns,n){return (ns[n]);
}),window,clojure.string.split.call(null,namespace,/\./));
});
lt.plugins.user.spy.ns_fns = (function ns_fns(namespace){return cljs.core.filter.call(null,(function (p1__6812_SHARP_){return cljs.core.fn_QMARK_.call(null,(namespace[p1__6812_SHARP_]));
}),cljs.core.js__GT_clj.call(null,goog.object.getKeys(namespace)));
});
lt.plugins.user.spy.spies = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.user.spy.__GT_spy = (function __GT_spy(f,fname){return (function() { 
var G__6813__delegate = function (args){cljs.core.println.call(null,[cljs.core.str("ARGUMENTS for "),cljs.core.str(fname),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,args))].join(''));
return cljs.core.apply.call(null,f,args);
};
var G__6813 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6813__delegate.call(this,args);};
G__6813.cljs$lang$maxFixedArity = 0;
G__6813.cljs$lang$applyTo = (function (arglist__6814){
var args = cljs.core.seq(arglist__6814);
return G__6813__delegate(args);
});
G__6813.cljs$core$IFn$_invoke$arity$variadic = G__6813__delegate;
return G__6813;
})()
;
});
/**
* Unsets spying and resets fn back to original.
*/
lt.plugins.user.spy.unspy = (function unspy(namespace,fname){return (namespace[fname] = cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.user.spy.spies),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [namespace,fname], null)));
});
/**
* Spies on a given fn. By default prints args
*/
lt.plugins.user.spy.spy = (function spy(namespace,fname){var f = (namespace[fname]);cljs.core.swap_BANG_.call(null,lt.plugins.user.spy.spies,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [namespace,fname], null),cljs.core.constantly.call(null,f));
return (namespace[fname] = lt.plugins.user.spy.__GT_spy.call(null,f,fname));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.clojurescript')) {
goog.provide('lt.plugins.user.clojurescript');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.user.spy');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.user.util');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.user.spy');
goog.require('cljs.reader');
goog.require('lt.plugins.user.selector');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.user.clojurescript.current_ns = (function current_ns(){return lt.plugins.user.spy.__GT_ns.call(null,cljs.core.second.call(null,cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.plugins.user.util.current_file.call(null))))));
});
lt.plugins.user.clojurescript.cmd_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){if(cljs.core.truth_(lt.objs.editor.pool.last_active.call(null)))
{return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.map.call(null,(function (p1__6586_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__6586_SHARP_]);
}),lt.plugins.user.spy.ns_fns.call(null,lt.plugins.user.clojurescript.current_ns.call(null))));
} else
{return null;
}
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"function"], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.clojurescript-spy","user.clojurescript-spy",2103381933),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Spy on a clojurescript fn in current ns",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.clojurescript.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.user.spy.spy.call(null,lt.plugins.user.clojurescript.current_ns.call(null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(selection));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.clojurescript-unspy","user.clojurescript-unspy",4326697652),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Unspy on a clojurescript fn in current ns",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.clojurescript.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.user.spy.unspy.call(null,lt.plugins.user.clojurescript.current_ns.call(null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(selection));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.browse')) {
goog.provide('lt.plugins.user.browse');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.user.util');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.app');
goog.require('clojure.string');
goog.require('lt.plugins.user.selector');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
lt.plugins.user.browse.tab_open_current_url = (function tab_open_current_url(){var current_word = lt.plugins.user.util.current_word.call(null);var commands = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137),new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),current_word], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null);return lt.plugins.user.util.exec_commands.call(null,commands);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.tab-open-current-url","user.tab-open-current-url",3513938181),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: opens url under cursor in another tabset and browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.browse.tab_open_current_url], null));
lt.plugins.user.browse.system_open_current_url = (function system_open_current_url(){return lt.objs.platform.open.call(null,lt.plugins.user.util.current_word.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.system-open-current-url","user.system-open-current-url",2897059397),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: opens url under cursor in system browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.browse.system_open_current_url], null));
lt.plugins.user.browse.plugin_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949)], null));
lt.plugins.user.browse.system_open_plugin_changelog = (function system_open_plugin_changelog(plugin){return lt.objs.platform.open.call(null,[cljs.core.str(clojure.string.replace_first.call(null,new cljs.core.Keyword(null,"source","source",4412365709).cljs$core$IFn$_invoke$arity$1(plugin),/\.git$/,"")),cljs.core.str("/compare/"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(plugin)),cljs.core.str("...master")].join(''));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.system-open-plugin-changelog","user.system-open-plugin-changelog",1491455540),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: opens changelog/diff of plugin",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.browse.plugin_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.browse.system_open_plugin_changelog], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.paredit')) {
goog.provide('lt.plugins.user.paredit');
goog.require('cljs.core');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.plugins.paredit_plus');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.user.paredit.newline_before_pair_close = (function newline_before_pair_close(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.operation.call(null,ed,((function (ed,temp__4092__auto__){
return (function (){lt.plugins.paredit_plus.move_cursor_along_pair.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"forward","forward",4631725623),new cljs.core.Keyword(null,"before","before",3915985649));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.new-line-indent","editor.new-line-indent",3360183529));
});})(ed,temp__4092__auto__))
);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.paredit-newline-before-pair-close","user.paredit-newline-before-pair-close",4550682951),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Newline before a pair close",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.paredit.newline_before_pair_close], null));
lt.plugins.user.paredit.editor_replace = (function editor_replace(ed,from,to,s){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.vim-yank","user.vim-yank",793043661),lt.objs.editor.range.call(null,ed,from,to));
return lt.objs.editor.replace.call(null,ed,from,to,s);
});
lt.plugins.user.paredit.paredit_kill_backword = (function paredit_kill_backword(ed,l){var temp__4092__auto__ = cljs.core.first.call(null,lt.plugins.paredit_plus.find_unbalanced.call(null,ed,l,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__6732 = temp__4092__auto__;var c = cljs.core.nth.call(null,vec__6732,0,null);var loc = cljs.core.nth.call(null,vec__6732,1,null);var temp__4092__auto____$1 = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c);if(cljs.core.truth_(temp__4092__auto____$1))
{var mloc = temp__4092__auto____$1;return lt.objs.editor.operation.call(null,ed,((function (mloc,temp__4092__auto____$1,vec__6732,c,loc,temp__4092__auto__){
return (function (){lt.plugins.user.paredit.editor_replace.call(null,ed,loc,lt.objs.editor.adjust_loc.call(null,loc,1),"");
return lt.plugins.user.paredit.editor_replace.call(null,ed,cljs.core.update_in.call(null,mloc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc),l,"");
});})(mloc,temp__4092__auto____$1,vec__6732,c,loc,temp__4092__auto__))
);
} else
{return null;
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.paredit-kill-backword","user.paredit-kill-backword",1024233325),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: kill backword up to paredit parent",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.user.paredit.paredit_kill_backword.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return null;
}
})], null));
lt.plugins.user.paredit.paredit_kill = (function paredit_kill(ed){var startloc = lt.objs.editor.__GT_cursor.call(null,ed);var c = lt.plugins.paredit_plus.char_at_loc.call(null,ed,startloc);var all_pair_chars = lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"all","all",1014000915));if(cljs.core.contains_QMARK_.call(null,all_pair_chars,c))
{var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,startloc,c);if(cljs.core.truth_(temp__4092__auto__))
{var matchloc = temp__4092__auto__;if((lt.objs.editor.pos__GT_index.call(null,ed,matchloc) > lt.objs.editor.pos__GT_index.call(null,ed,startloc)))
{return lt.plugins.user.paredit.editor_replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,matchloc,1),"");
} else
{return lt.plugins.user.paredit.editor_replace.call(null,ed,lt.objs.editor.adjust_loc.call(null,startloc,1),matchloc,"");
}
} else
{return null;
}
} else
{var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(startloc);var chars = cljs.core.take_while.call(null,((function (line,startloc,c,all_pair_chars){
return (function (p__6743){var vec__6744 = p__6743;var c__$1 = cljs.core.nth.call(null,vec__6744,0,null);var loc = cljs.core.nth.call(null,vec__6744,1,null);return cljs.core._EQ_.call(null,line,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));
});})(line,startloc,c,all_pair_chars))
,lt.plugins.paredit_plus.locate_chars.call(null,ed,startloc,all_pair_chars,new cljs.core.Keyword(null,"forward","forward",4631725623)));if(cljs.core.empty_QMARK_.call(null,chars))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
} else
{var temp__4090__auto__ = cljs.core.some.call(null,((function (line,chars,startloc,c,all_pair_chars){
return (function (p__6745){var vec__6746 = p__6745;var c__$1 = cljs.core.nth.call(null,vec__6746,0,null);var loc = cljs.core.nth.call(null,vec__6746,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.paredit_plus.loc_GT_.call(null,ed,startloc,mloc)))
{return loc;
} else
{return null;
}
} else
{return null;
}
});})(line,chars,startloc,c,all_pair_chars))
,cljs.core.filter.call(null,((function (line,chars,startloc,c,all_pair_chars){
return (function (p__6747){var vec__6748 = p__6747;var c__$1 = cljs.core.nth.call(null,vec__6748,0,null);var _ = cljs.core.nth.call(null,vec__6748,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"close","close",1108660586)),c__$1);
});})(line,chars,startloc,c,all_pair_chars))
,chars));if(cljs.core.truth_(temp__4090__auto__))
{var kl = temp__4090__auto__;return lt.plugins.user.paredit.editor_replace.call(null,ed,startloc,kl,"");
} else
{var temp__4090__auto____$1 = cljs.core.some.call(null,((function (temp__4090__auto__,line,chars,startloc,c,all_pair_chars){
return (function (p__6749){var vec__6750 = p__6749;var c__$1 = cljs.core.nth.call(null,vec__6750,0,null);var loc = cljs.core.nth.call(null,vec__6750,1,null);var temp__4092__auto__ = lt.plugins.paredit_plus.find_match.call(null,ed,loc,c__$1);if(cljs.core.truth_(temp__4092__auto__))
{var mloc = temp__4092__auto__;if((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(mloc) > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc)))
{return mloc;
} else
{return null;
}
} else
{return null;
}
});})(temp__4090__auto__,line,chars,startloc,c,all_pair_chars))
,cljs.core.filter.call(null,((function (temp__4090__auto__,line,chars,startloc,c,all_pair_chars){
return (function (p__6751){var vec__6752 = p__6751;var c__$1 = cljs.core.nth.call(null,vec__6752,0,null);var _ = cljs.core.nth.call(null,vec__6752,1,null);return cljs.core.contains_QMARK_.call(null,lt.plugins.paredit_plus.pair_chars.call(null,new cljs.core.Keyword(null,"open","open",1017321916)),c__$1);
});})(temp__4090__auto__,line,chars,startloc,c,all_pair_chars))
,chars));if(cljs.core.truth_(temp__4090__auto____$1))
{var kl = temp__4090__auto____$1;return lt.plugins.user.paredit.editor_replace.call(null,ed,startloc,lt.objs.editor.adjust_loc.call(null,kl,1),"");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.kill-line","editor.kill-line",891766068));
}
}
}
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.paredit-kill","user.paredit-kill",1905167989),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: paredit kill and  to clipboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.user.paredit.paredit_kill.call(null,ed);
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.document')) {
goog.provide('lt.plugins.user.document');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
/**
* Updates given editor to use a linked doc
*/
lt.plugins.user.document.update_editor_to_linked_doc_BANG_ = (function update_editor_to_linked_doc_BANG_(ed,path,doc){var info = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"plaintext",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.plaintext","editor.plaintext",4474629672)], null)], null),lt.objs.opener.path__GT_info.call(null,path));var default_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"editor.keys.emacs","editor.keys.emacs",3283998978),null,new cljs.core.Keyword(null,"editor.inline-result","editor.inline-result",1965420162),null,new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680),null,new cljs.core.Keyword(null,"object","object",4285503153),null,new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219),null,new cljs.core.Keyword(null,"editor","editor",4001043679),null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222),null,new cljs.core.Keyword(null,"editor.keys.vim.normal","editor.keys.vim.normal",2715619942),null], null), null);var default_editor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"info","info",1017141280),null,new cljs.core.Keyword(null,"content","content",1965434859),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),null,new cljs.core.Keyword(null,"listeners","listeners",4090152369),null,new cljs.core.Keyword(null,"triggers","triggers",2516997421),null,new cljs.core.Keyword(null,"editor.generation","editor.generation",4482163627),null,new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),null,new cljs.core.Keyword(null,"ed","ed",1013907473),null,new cljs.core.Keyword(null,"doc","doc",1014003882),null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779),null,new cljs.core.Keyword(null,"tags","tags",1017456523),null,new cljs.core.Keyword("lt.objs.editor.pool","comment-options","lt.objs.editor.pool/comment-options",1136977589),null], null), null);var outdated_editor_keys = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,ed))),default_editor_keys);lt.objs.document.register_doc.call(null,doc,path);
lt.objs.editor.set_doc_BANG_.call(null,ed,doc);
lt.object.remove_tags.call(null,ed,clojure.set.difference.call(null,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),default_tags));
lt.object.add_tags.call(null,ed,cljs.core.into.call(null,default_tags,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$2(info,cljs.core.PersistentVector.EMPTY)));
lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),info], null));
cljs.core.swap_BANG_.call(null,ed,((function (info,default_tags,default_editor_keys,outdated_editor_keys){
return (function (p1__6682_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__6682_SHARP_,outdated_editor_keys);
});})(info,default_tags,default_editor_keys,outdated_editor_keys))
);
var temp__4092__auto__ = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var ts = temp__4092__auto__;return lt.object.raise.call(null,ts,new cljs.core.Keyword(null,"tab.updated","tab.updated",2727558868));
} else
{return null;
}
});
/**
* Updates given editor to edit a new path. Appropriately swaps CM doc object,
* refreshes editor keys and updates editor's tab, :tags, :info and :listeners.
*/
lt.plugins.user.document.update_editor_path_BANG_ = (function update_editor_path_BANG_(ed,path){return lt.plugins.user.document.update_editor_to_linked_doc_BANG_.call(null,ed,path,lt.objs.document.create.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line-ending","line-ending",4015468690),lt.objs.files.line_ending,new cljs.core.Keyword(null,"mime","mime",1017255846),new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(lt.plugins.user.document.info),new cljs.core.Keyword(null,"mtime","mtime",1118128172),lt.objs.files.stats.call(null,path),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,path))], null)));
});
lt.plugins.user.document.old_open_path = (lt.objs.opener["open_path"]);
lt.plugins.user.document.open_in_current_editor = false;
lt.plugins.user.document.new_open_path = (function new_open_path(obj,path){if(cljs.core.truth_(lt.plugins.user.document.open_in_current_editor))
{return lt.plugins.user.document.update_editor_path_BANG_.call(null,lt.objs.editor.pool.last_active.call(null),path);
} else
{return lt.plugins.user.document.old_open_path.call(null,obj,path);
}
});
(lt.objs.opener["open_path"] = lt.plugins.user.document.new_open_path);
lt.plugins.user.document.__BEH__open_with_jump_stack_on_select = (function __BEH__open_with_jump_stack_on_select(this$,cur){var temp__4090__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),ed,new cljs.core.Keyword(null,"full","full",1017058817).cljs$core$IFn$_invoke$arity$1(cur),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
} else
{return lt.object.call_behavior_reaction.call(null,new cljs.core.Keyword("lt.objs.sidebar.navigate","open-on-select","lt.objs.sidebar.navigate/open-on-select",2251841341),this$,cur);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.document","open-with-jump-stack-on-select","lt.plugins.user.document/open-with-jump-stack-on-select",2191337024),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.document.__BEH__open_with_jump_stack_on_select,new cljs.core.Keyword(null,"desc","desc",1016984067),"Alternative to lt.objs.sidebar.navigate/open-on-select that uses jump-stack",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.toggle-open-in-current-editor","user.toggle-open-in-current-editor",993989710),new cljs.core.Keyword(null,"desc","desc",1016984067),"Toggles whether opening a new file should open in new or existing tab.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.plugins.user.document.open_in_current_editor = cljs.core.not.call(null,lt.plugins.user.document.open_in_current_editor);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("open-in-current-editor is "),cljs.core.str(lt.plugins.user.document.open_in_current_editor)].join(''));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.popup')) {
goog.provide('lt.plugins.user.popup');
goog.require('cljs.core');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
lt.plugins.user.popup.text_input = (function text_input(m){var e__6351__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"autocomplete","autocomplete",4470924122),"on",new cljs.core.Keyword(null,"list","list",1017226256),"input-completions"], null)], null));var seq__6769_6783 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__6351__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__6351__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__6351__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__6351__auto__))
], null)));var chunk__6770_6784 = null;var count__6771_6785 = 0;var i__6772_6786 = 0;while(true){
if((i__6772_6786 < count__6771_6785))
{var vec__6773_6787 = cljs.core._nth.call(null,chunk__6770_6784,i__6772_6786);var ev__6352__auto___6788 = cljs.core.nth.call(null,vec__6773_6787,0,null);var func__6353__auto___6789 = cljs.core.nth.call(null,vec__6773_6787,1,null);lt.util.dom.on.call(null,e__6351__auto__,ev__6352__auto___6788,func__6353__auto___6789);
{
var G__6790 = seq__6769_6783;
var G__6791 = chunk__6770_6784;
var G__6792 = count__6771_6785;
var G__6793 = (i__6772_6786 + 1);
seq__6769_6783 = G__6790;
chunk__6770_6784 = G__6791;
count__6771_6785 = G__6792;
i__6772_6786 = G__6793;
continue;
}
} else
{var temp__4092__auto___6794 = cljs.core.seq.call(null,seq__6769_6783);if(temp__4092__auto___6794)
{var seq__6769_6795__$1 = temp__4092__auto___6794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6769_6795__$1))
{var c__5632__auto___6796 = cljs.core.chunk_first.call(null,seq__6769_6795__$1);{
var G__6797 = cljs.core.chunk_rest.call(null,seq__6769_6795__$1);
var G__6798 = c__5632__auto___6796;
var G__6799 = cljs.core.count.call(null,c__5632__auto___6796);
var G__6800 = 0;
seq__6769_6783 = G__6797;
chunk__6770_6784 = G__6798;
count__6771_6785 = G__6799;
i__6772_6786 = G__6800;
continue;
}
} else
{var vec__6774_6801 = cljs.core.first.call(null,seq__6769_6795__$1);var ev__6352__auto___6802 = cljs.core.nth.call(null,vec__6774_6801,0,null);var func__6353__auto___6803 = cljs.core.nth.call(null,vec__6774_6801,1,null);lt.util.dom.on.call(null,e__6351__auto__,ev__6352__auto___6802,func__6353__auto___6803);
{
var G__6804 = cljs.core.next.call(null,seq__6769_6795__$1);
var G__6805 = null;
var G__6806 = 0;
var G__6807 = 0;
seq__6769_6783 = G__6804;
chunk__6770_6784 = G__6805;
count__6771_6785 = G__6806;
i__6772_6786 = G__6807;
continue;
}
}
} else
{}
}
break;
}
return e__6351__auto__;
});
/**
* @param {...*} var_args
*/
lt.plugins.user.popup.input = (function() { 
var input__delegate = function (action_fn,p__6776){var map__6778 = p__6776;var map__6778__$1 = ((cljs.core.seq_QMARK_.call(null,map__6778))?cljs.core.apply.call(null,cljs.core.hash_map,map__6778):map__6778);var opts = map__6778__$1;var input__$1 = lt.plugins.user.popup.text_input.call(null,opts);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist#input-completions","datalist#input-completions",1970141579),cljs.core.map.call(null,((function (input__$1,map__6778,map__6778__$1,opts){
return (function (p1__6775_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),p1__6775_SHARP_], null)], null));
});})(input__$1,map__6778,map__6778__$1,opts))
,new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(opts))], null),input__$1], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),((function (input__$1,map__6778,map__6778__$1,opts){
return (function (){return action_fn.call(null,lt.util.dom.val.call(null,input__$1));
});})(input__$1,map__6778,map__6778__$1,opts))
], null)], null)], null));lt.util.dom.focus.call(null,input__$1);
return input__$1.setSelectionRange(1000,1000);
};
var input = function (action_fn,var_args){
var p__6776 = null;if (arguments.length > 1) {
  p__6776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,action_fn,p__6776);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__6808){
var action_fn = cljs.core.first(arglist__6808);
var p__6776 = cljs.core.rest(arglist__6808);
return input__delegate(action_fn,p__6776);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* Display an info popup given a list of items to display.
* @param {...*} var_args
*/
lt.plugins.user.popup.info = (function() { 
var info__delegate = function (data,p__6780){var map__6782 = p__6780;var map__6782__$1 = ((cljs.core.seq_QMARK_.call(null,map__6782))?cljs.core.apply.call(null,cljs.core.hash_map,map__6782):map__6782);var opts = map__6782__$1;var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null),opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,((function (map__6782,map__6782__$1,opts){
return (function (p1__6779_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",1013907695),p1__6779_SHARP_],null));
});})(map__6782,map__6782__$1,opts))
,data)], null))], null));return lt.objs.popup.popup_BANG_.call(null,opts__$1);
};
var info = function (data,var_args){
var p__6780 = null;if (arguments.length > 1) {
  p__6780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return info__delegate.call(this,data,p__6780);};
info.cljs$lang$maxFixedArity = 1;
info.cljs$lang$applyTo = (function (arglist__6809){
var data = cljs.core.first(arglist__6809);
var p__6780 = cljs.core.rest(arglist__6809);
return info__delegate(data,p__6780);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.vim')) {
goog.provide('lt.plugins.user.vim');
goog.require('cljs.core');
goog.require('lt.plugins.user.popup');
goog.require('lt.plugins.vim');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.plugins.user.popup');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.plugins.vim');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Turns off visual mode, v or V, after comment operation
*/
lt.plugins.user.vim.vim_toggle_comment_selection = (function vim_toggle_comment_selection(){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"toggle-comment-selection","toggle-comment-selection",4499822807));
if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null))))
{if(cljs.core.truth_(lt.plugins.user.util.current_ed.call(null).state.vim.visualLine))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"V");
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),"v");
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.vim-toggle-comment-selection","user.vim-toggle-comment-selection",1060185709),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: toggle comment selection that also handles visual mode",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.vim.vim_toggle_comment_selection], null));
lt.plugins.user.vim.set_vim_yank = (function set_vim_yank(text){return CodeMirror.Vim.getRegisterController.call(null).unnamedRegister.setText(text);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.vim-yank","user.vim-yank",793043661),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Sets text to latest yank",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.vim.set_vim_yank], null));
lt.plugins.user.vim.get_register_value = (function get_register_value(register){return cljs.core.first.call(null,((CodeMirror.Vim.getRegisterController.call(null).registers[register])["keyBuffer"]));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.copy-latest-vim-register","user.copy-latest-vim-register",2554521945),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Copies latest vim yank to system clipboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.platform.copy.call(null,lt.plugins.user.vim.get_register_value.call(null,"0"));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.copy-clipboard-to-vim","user.copy-clipboard-to-vim",1579944646),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Copies clipboard to vim register",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.user.vim.set_vim_yank.call(null,lt.objs.platform.paste.call(null));
})], null));
lt.plugins.user.vim.show_registers = (function show_registers(){return lt.plugins.user.popup.info.call(null,cljs.core.map.call(null,(function (p__6886){var vec__6887 = p__6886;var k = cljs.core.nth.call(null,vec__6887,0,null);var v = cljs.core.nth.call(null,vec__6887,1,null);return [cljs.core.str(k),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.first.call(null,cljs.core.get.call(null,v,"keyBuffer"))))].join('');
}),cljs.core.remove.call(null,(function (p1__6883_SHARP_){return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,"-",null], null), null).call(null,cljs.core.first.call(null,p1__6883_SHARP_));
}),cljs.core.js__GT_clj.call(null,CodeMirror.Vim.getRegisterController.call(null).registers))),new cljs.core.Keyword(null,"header","header",4087600639),"Registers");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.show-registers","user.show-registers",3523296085),new cljs.core.Keyword(null,"desc","desc",1016984067),"show vim's registers",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.vim.show_registers], null));
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"ltexec_clj",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return lt.plugins.user.util.exec_commands.call(null,cljs.reader.read_string.call(null,info.argString));
})], null));
lt.plugins.user.vim.smart_join_line = (function smart_join_line(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var string = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor));var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor);var joined_line = [cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,0,ch),/\s*$/,"")),cljs.core.str(clojure.string.replace_first.call(null,cljs.core.subs.call(null,string,ch),/^\s*/,""))].join('');return lt.objs.editor.set_line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor),joined_line);
} else
{return null;
}
});
lt.plugins.user.vim.smart_join = (function smart_join(){CodeMirror.Vim.handleKey(lt.plugins.user.util.current_ed.call(null),"J");
return lt.plugins.user.vim.smart_join_line.call(null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.smart-join","user.smart-join",2647984163),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: a smarter paredit-like J(oin)",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.vim.smart_join], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
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
goog.require('lt.plugins.user.util');
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
goog.require('lt.plugins.user.util');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
cljs.core._STAR_print_level_STAR_ = 5;
/**
* Sets line number first time this is called and toggles on subsequent calls
*/
lt.plugins.user.toggle_behavior = (function toggle_behavior(p__6271){var vec__6278 = p__6271;var behavior_tag = cljs.core.nth.call(null,vec__6278,0,null);var behavior = cljs.core.nth.call(null,vec__6278,1,null);var negated_behavior = cljs.core.keyword.call(null,[cljs.core.str("-"),cljs.core.str(cljs.core.namespace.call(null,behavior))].join(''),cljs.core.name.call(null,behavior));var ws_behaviors = lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)),"workspace.behaviors");var new_behaviors = cljs.core.mapv.call(null,((function (negated_behavior,ws_behaviors,vec__6278,behavior_tag,behavior){
return (function (p__6279){var vec__6280 = p__6279;var _ = cljs.core.nth.call(null,vec__6280,0,null);var beh = cljs.core.nth.call(null,vec__6280,1,null);var v = vec__6280;var pred__6281 = cljs.core._EQ_;var expr__6282 = beh;if(cljs.core.truth_(pred__6281.call(null,behavior,expr__6282)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [behavior_tag,negated_behavior], null);
} else
{if(cljs.core.truth_(pred__6281.call(null,negated_behavior,expr__6282)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [behavior_tag,behavior], null);
} else
{return v;
}
}
});})(negated_behavior,ws_behaviors,vec__6278,behavior_tag,behavior))
,ws_behaviors);var new_behaviors__$1 = cljs.core.into.call(null,new_behaviors,((cljs.core._EQ_.call(null,new_behaviors,ws_behaviors))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [behavior_tag,behavior], null)], null):null));console.log("New workspace behaviors:",cljs.core.pr_str.call(null,new_behaviors__$1));
cljs.core.swap_BANG_.call(null,lt.objs.workspace.current_ws,cljs.core.assoc,new cljs.core.Keyword(null,"ws-behaviors","ws-behaviors",2339346978),cljs.core.pr_str.call(null,new_behaviors__$1));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"behaviors.reload","behaviors.reload",2942796600));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.toggle-line-numbers","user.toggle-line-numbers",849211417),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: toggles line numbers",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.toggle_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword("lt.objs.editor","line-numbers","lt.objs.editor/line-numbers",3399978738)], null))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.toggle-strip-whitespace","user.toggle-strip-whitespace",2956187642),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: toggles stripping whitespace on save",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.toggle_behavior,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.file-backed","editor.file-backed",4684256680),new cljs.core.Keyword("lt.objs.editor.file","remove-trailing-whitespace","lt.objs.editor.file/remove-trailing-whitespace",1399383588)], null))], null));
lt.plugins.user.open_console_log_file = (function open_console_log_file(){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"logs"),[cljs.core.str("window"),cljs.core.str(lt.objs.app.window_number.call(null)),cljs.core.str(".log")].join('')));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.open-console-log-file","user.open-console-log-file",529217741),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: open current console log as an editable/searchable file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.open_console_log_file], null));
lt.plugins.user.rotate_console = (function rotate_console(){if(cljs.core.truth_(lt.objs.bottombar.active_QMARK_.call(null,lt.objs.console.console)))
{return lt.plugins.user.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console.hide","console.hide",1651368683),new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137),new cljs.core.Keyword(null,"console-tab","console-tab",3389753745),new cljs.core.Keyword(null,"console.show","console.show",1651695782),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
} else
{return lt.plugins.user.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630),new cljs.core.Keyword(null,"user.smart-tab-close","user.smart-tab-close",1519011339),new cljs.core.Keyword(null,"toggle-console","toggle-console",4454540112),new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630)], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.rotate-console","user.rotate-console",2257177306),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Rotates open console between bottombar and another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.rotate_console], null));
lt.plugins.user.plugin_name = "user";
lt.plugins.user.plugins_blacklist = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["kukui",null], null), null);
lt.plugins.user.save_plugins = (function save_plugins(){var personal_plugins_file = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null,"plugins"),lt.plugins.user.plugin_name,"plugin.edn");var deps = ((function (personal_plugins_file){
return (function (p1__6285_SHARP_){return cljs.core.dissoc.call(null,p1__6285_SHARP_,lt.plugins.user.plugin_name);
});})(personal_plugins_file))
.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"version","version",1365512266)),cljs.core.remove.call(null,((function (personal_plugins_file){
return (function (p1__6284_SHARP_){return cljs.core.contains_QMARK_.call(null,lt.plugins.user.plugins_blacklist,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__6284_SHARP_));
});})(personal_plugins_file))
,cljs.core.vals.call(null,new cljs.core.Keyword("lt.objs.plugins","plugins","lt.objs.plugins/plugins",2920328683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.app.app)))))))));var plugin_body = cljs.core.pr_str.call(null,cljs.core.assoc.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,personal_plugins_file)),personal_plugins_file),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),deps));return lt.objs.files.save.call(null,personal_plugins_file,clojure.string.replace.call(null,plugin_body,/(\"\s*,|\{|\},)/,((function (personal_plugins_file,deps,plugin_body){
return (function (p1__6286_SHARP_){return [cljs.core.str(p1__6286_SHARP_),cljs.core.str("\n")].join('');
});})(personal_plugins_file,deps,plugin_body))
),((function (personal_plugins_file,deps,plugin_body){
return (function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Plugins saved to "),cljs.core.str(personal_plugins_file)].join(''));
});})(personal_plugins_file,deps,plugin_body))
);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.save-plugins","user.save-plugins",1895973893),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Save plugins to :dependencies of personal plugin",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.save_plugins], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.add-plugins-folder","user.add-plugins-folder",4218007644),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Add plugins folder to current workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.objs.files.lt_user_dir.call(null,"plugins"));
})], null));
lt.plugins.user.refresh_current_folder = (function refresh_current_folder(){var temp__4090__auto__ = (function (){var folder = lt.plugins.user.util.current_folder.call(null);var folder__$1 = cljs.core.some.call(null,((function (folder){
return (function (p1__6287_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__6287_SHARP_)),folder))
{return p1__6287_SHARP_;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.refresh-current-workspace-folder","user.refresh-current-workspace-folder",2626947681),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Refreshes current workspace folder",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.refresh_current_folder], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.print-current-file","user.print-current-file",1293321957),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Print current file path",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Current path is "),cljs.core.str(lt.plugins.user.util.current_file.call(null))].join(''));
})], null));
lt.plugins.user.open_current_file = (function open_current_file(){var current_file = lt.plugins.user.util.current_file.call(null);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137));
return lt.objs.opener.open_path.call(null,lt.objs.opener.opener,current_file);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.vertical-split-current-file","user.vertical-split-current-file",1385258153),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: split current file vertically i.e. open in another tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.open_current_file], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.keybindings')) {
goog.provide('lt.plugins.user.keybindings');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.plugins.user.popup');
goog.require('goog.string');
goog.require('lt.plugins.user.popup');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('lt.objs.keyboard');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
goog.require('goog.string');
lt.plugins.user.keybindings.search_keybindings = (function search_keybindings(query,key_map){return cljs.core.filter.call(null,(function (p__6712){var vec__6713 = p__6712;var k = cljs.core.nth.call(null,vec__6713,0,null);var v = cljs.core.nth.call(null,vec__6713,1,null);return cljs.core.some.call(null,((function (vec__6713,k,v){
return (function (p1__6709_SHARP_){return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,query),[cljs.core.str(p1__6709_SHARP_)].join(''));
});})(vec__6713,k,v))
,v);
}),key_map);
});
lt.plugins.user.keybindings.find_command_keybindings_STAR_ = (function find_command_keybindings_STAR_(query,key_map){var results = lt.plugins.user.keybindings.search_keybindings.call(null,query,key_map);cljs.core.println.call(null,"Matched",cljs.core.count.call(null,results),"keybindings:");
return cljs.core.prn.call(null,results);
});
lt.plugins.user.keybindings.find_command_keybindings = (function find_command_keybindings(keymap){cljs.core.println.call(null,"Searching ",cljs.core.count.call(null,keymap),"keybindings...");
return lt.plugins.user.popup.input.call(null,(function (p1__6714_SHARP_){return lt.plugins.user.keybindings.find_command_keybindings_STAR_.call(null,p1__6714_SHARP_,keymap);
}),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"regex",new cljs.core.Keyword(null,"header","header",4087600639),"Enter command regex");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.find-command-keybindings","user.find-command-keybindings",1934033036),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Finds keybindings that use a command for the given regex",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.keybindings.find_command_keybindings,cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null));
lt.plugins.user.keybindings.vim_map_keys = (function vim_map_keys(){var behaviors = cljs.core.get_in.call(null,lt.objs.settings.safe_read.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.objs.settings.user_behaviors_path)),"user.behaviors"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"app","app",1014001043)], null));var behaviors__$1 = cljs.core.some.call(null,((function (behaviors){
return (function (p1__6715_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__6715_SHARP_),new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)))
{return cljs.core.second.call(null,p1__6715_SHARP_);
} else
{return null;
}
});})(behaviors))
,behaviors);return behaviors__$1;
});
lt.plugins.user.keybindings.key_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p__6719){var vec__6720 = p__6719;var k = cljs.core.nth.call(null,vec__6720,0,null);var v = cljs.core.nth.call(null,vec__6720,1,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),goog.string.htmlEscape([cljs.core.str(k),cljs.core.str(": "),cljs.core.str(v)].join('')),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"commands","commands",4706336250),v], null);
}),cljs.core.merge.call(null,cljs.core.deref.call(null,lt.objs.keyboard.key_map),lt.plugins.user.keybindings.vim_map_keys.call(null))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__6717_SHARP_,p2__6718_SHARP_,p3__6716_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__6716_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.keybinding-bar","user.keybinding-bar",4421223681),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Search keybinding or command of keys",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.keybindings.key_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.prn], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.tab')) {
goog.provide('lt.plugins.user.tab');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.plugins.user.util');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.user.selector');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
lt.plugins.user.tab.smart_tab_close = (function smart_tab_close(){var ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var tabs = (function (){var G__6816 = ts;var G__6816__$1 = (((G__6816 == null))?null:cljs.core.deref.call(null,G__6816));var G__6816__$2 = (((G__6816__$1 == null))?null:new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(G__6816__$1));var G__6816__$3 = (((G__6816__$2 == null))?null:cljs.core.count.call(null,G__6816__$2));return G__6816__$3;
})();lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
if(cljs.core._EQ_.call(null,1,tabs))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.smart-tab-close","user.smart-tab-close",1519011339),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: closes a tab and tabset if last tab",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.tab.smart_tab_close], null));
lt.plugins.user.tab.close_current_tabs = (function close_current_tabs(){var ts_6838 = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__6821_6839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_6838)));var chunk__6822_6840 = null;var count__6823_6841 = 0;var i__6824_6842 = 0;while(true){
if((i__6824_6842 < count__6823_6841))
{var tab_6843 = cljs.core._nth.call(null,chunk__6822_6840,i__6824_6842);lt.object.raise.call(null,tab_6843,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__6844 = seq__6821_6839;
var G__6845 = chunk__6822_6840;
var G__6846 = count__6823_6841;
var G__6847 = (i__6824_6842 + 1);
seq__6821_6839 = G__6844;
chunk__6822_6840 = G__6845;
count__6823_6841 = G__6846;
i__6824_6842 = G__6847;
continue;
}
} else
{var temp__4092__auto___6848 = cljs.core.seq.call(null,seq__6821_6839);if(temp__4092__auto___6848)
{var seq__6821_6849__$1 = temp__4092__auto___6848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6821_6849__$1))
{var c__5632__auto___6850 = cljs.core.chunk_first.call(null,seq__6821_6849__$1);{
var G__6851 = cljs.core.chunk_rest.call(null,seq__6821_6849__$1);
var G__6852 = c__5632__auto___6850;
var G__6853 = cljs.core.count.call(null,c__5632__auto___6850);
var G__6854 = 0;
seq__6821_6839 = G__6851;
chunk__6822_6840 = G__6852;
count__6823_6841 = G__6853;
i__6824_6842 = G__6854;
continue;
}
} else
{var tab_6855 = cljs.core.first.call(null,seq__6821_6849__$1);lt.object.raise.call(null,tab_6855,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__6856 = cljs.core.next.call(null,seq__6821_6849__$1);
var G__6857 = null;
var G__6858 = 0;
var G__6859 = 0;
seq__6821_6839 = G__6856;
chunk__6822_6840 = G__6857;
count__6823_6841 = G__6858;
i__6824_6842 = G__6859;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.close-current-tabs","user.close-current-tabs",1013877628),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: closes a tabset completely - including all of its tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.tab.close_current_tabs], null));
lt.plugins.user.tab.ensure_and_focus_second_tabset = (function ensure_and_focus_second_tabset(){if((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Ensure second tabset and focus it",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.tab.ensure_and_focus_second_tabset], null));
lt.plugins.user.tab.opened_files = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
* Same relative path as navigate/populate-bg
*/
lt.plugins.user.tab.relative_path = (function relative_path(path){var folder_parent = lt.objs.files.parent.call(null,lt.plugins.user.util.file_folder.call(null,path));return cljs.core.subs.call(null,path,(cljs.core.count.call(null,folder_parent) + 1));
});
lt.plugins.user.tab.__BEH__track_open_files = (function __BEH__track_open_files(this$,ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return cljs.core.swap_BANG_.call(null,lt.plugins.user.tab.opened_files,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full","full",1017058817),path,new cljs.core.Keyword(null,"rel","rel",1014017035),lt.plugins.user.tab.relative_path.call(null,path)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.tab","track-open-files","lt.plugins.user.tab/track-open-files",1341020695),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.tab.__BEH__track_open_files,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.objs.opener.opener,new cljs.core.Keyword("lt.plugins.user.tab","track-open-files","lt.plugins.user.tab/track-open-files",1341020695));
lt.plugins.user.tab.file_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.reverse.call(null,cljs.core.deref.call(null,lt.plugins.user.tab.opened_files));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__6825_SHARP_,p2__6827_SHARP_,p3__6826_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(lt.objs.files.basename.call(null,p1__6825_SHARP_)),cljs.core.str("</p><p class='binding'>"),cljs.core.str(p3__6826_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.open-buffers","user.open-buffers",857344101),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Opens any file that has been opened since LT started",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.tab.file_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (file){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"full","full",1017058817).cljs$core$IFn$_invoke$arity$1(file));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.balance-tabsets","user.balance-tabsets",3668654788),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Balance tabset widths",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.equalize_tabset_widths.call(null);
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.clojure')) {
goog.provide('lt.plugins.user.clojure');
goog.require('cljs.core');
goog.require('lt.plugins.user.popup');
goog.require('lt.objs.find');
goog.require('lt.plugins.user.popup');
goog.require('cljs.reader');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.find');
goog.require('lt.objs.editor');
lt.plugins.user.clojure.current_word = (function current_word(){return new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,lt.objs.editor.pool.last_active.call(null)));
});
lt.plugins.user.clojure.find_next_clojure_word = (function find_next_clojure_word(){var word = lt.plugins.user.clojure.current_word.call(null);lt.objs.find.set_val.call(null,lt.objs.find.bar,word);
return lt.object.raise.call(null,lt.objs.find.bar,new cljs.core.Keyword(null,"search!","search!",2982232811),word);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.find-next-clojure-word","user.find-next-clojure-word",4383733454),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Finds next clojure word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.clojure.find_next_clojure_word], null));
/**
* Evals code and returns result dispatching to handle fn, based
* on [:meta :type] passed to :eval!.
*/
lt.plugins.user.clojure.eval_code = (function() {
var eval_code = null;
var eval_code__2 = (function (editor,code){return eval_code.call(null,editor,code,cljs.core.PersistentArrayMap.EMPTY);
});
var eval_code__3 = (function (editor,code,meta_val){var info = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),meta_val);return lt.object.raise.call(null,lt.plugins.clojure.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
eval_code = function(editor,code,meta_val){
switch(arguments.length){
case 2:
return eval_code__2.call(this,editor,code);
case 3:
return eval_code__3.call(this,editor,code,meta_val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_code.cljs$core$IFn$_invoke$arity$2 = eval_code__2;
eval_code.cljs$core$IFn$_invoke$arity$3 = eval_code__3;
return eval_code;
})()
;
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.print-fn-source","user.print-fn-source",3133537519),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Print current fn's source",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.user.clojure.eval_code.call(null,lt.objs.editor.pool.last_active.call(null),[cljs.core.str("(clojure.repl/source "),cljs.core.str(lt.plugins.user.clojure.current_word.call(null)),cljs.core.str(")")].join(''));
})], null));
lt.plugins.user.clojure.eval_history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.eval-once","user.eval-once",4274569761),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Evals clojure(script) with given input",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.user.popup.input.call(null,(function (input){cljs.core.swap_BANG_.call(null,lt.plugins.user.clojure.eval_history,cljs.core.conj,input);
return lt.plugins.user.clojure.eval_code.call(null,lt.objs.editor.pool.last_active.call(null),input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"eval-once","eval-once",1668252804)], null));
}),new cljs.core.Keyword(null,"completions","completions",1416465289),cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.deref.call(null,lt.plugins.user.clojure.eval_history))));
})], null));
lt.plugins.user.clojure.handle_eval = (function handle_eval(result){return cljs.core.println.call(null,"RESULT:",new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(result));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.clojure","clj-result.eval-once","lt.plugins.user.clojure/clj-result.eval-once",3789222671),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (p1__6512_SHARP_,p2__6511_SHARP_){return lt.plugins.user.clojure.handle_eval.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(p2__6511_SHARP_)));
}),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Handles result from clj eval",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.eval-once","editor.eval.clj.result.eval-once",870359537),null], null), null));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.clojure","cljs-result.eval-once","lt.plugins.user.clojure/cljs-result.eval-once",793184576),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (p1__6514_SHARP_,p2__6513_SHARP_){return lt.plugins.user.clojure.handle_eval.call(null,p2__6513_SHARP_);
}),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Handles result from cljs eval",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.eval-once","editor.eval.cljs.result.eval-once",3066770494),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.def-let","user.def-let",4584440994),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Evals current line or selection as def(s)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var expressions = cljs.core.map.call(null,((function (ed){
return (function (p__6515){var vec__6516 = p__6515;var k = cljs.core.nth.call(null,vec__6516,0,null);var v = cljs.core.nth.call(null,vec__6516,1,null);return [cljs.core.str("(def "),cljs.core.str(k),cljs.core.str(" "),cljs.core.str(v),cljs.core.str(")")].join('');
});})(ed))
,cljs.core.partition.call(null,2,cljs.reader.read_string.call(null,lt.objs.editor.selection.call(null,ed))));lt.plugins.user.clojure.eval_code.call(null,ed,clojure.string.join.call(null,"\n",expressions));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Def'ed "),cljs.core.str(cljs.core.count.call(null,expressions)),cljs.core.str("vars")].join(''));
} else
{var vec__6517 = cljs.core.re_find.call(null,/^\s*(\(let\s*)?\[?([^\]]+)/,lt.plugins.user.util.relative_line.call(null));var _ = cljs.core.nth.call(null,vec__6517,0,null);var ___$1 = cljs.core.nth.call(null,vec__6517,1,null);var expression = cljs.core.nth.call(null,vec__6517,2,null);lt.plugins.user.clojure.eval_code.call(null,lt.objs.editor.pool.last_active.call(null),[cljs.core.str("(def "),cljs.core.str(expression),cljs.core.str(")")].join(''));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Def'ed expression: "),cljs.core.str(expression)].join(''));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.comment-let","user.comment-let",3820944252),new cljs.core.Keyword(null,"desc","desc",1016984067),"Comments out end of a let block",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = cljs.core.count.call(null,cljs.core.re_find.call(null,/^.*\]/,lt.plugins.user.util.relative_line.call(null)));lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lt.objs.editor.cursor.call(null,ed).line,new cljs.core.Keyword(null,"ch","ch",1013907415),(pos - 1)], null),"\n");
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"toggle-comment-selection","toggle-comment-selection",4499822807));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.search')) {
goog.provide('lt.plugins.user.search');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.user.clojure');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('lt.objs.search');
goog.require('lt.objs.search');
goog.require('lt.util.dom');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.user.clojure');
goog.require('lt.object');
goog.require('lt.object');
goog.require('goog.string');
goog.require('lt.plugins.user.util');
goog.require('lt.objs.command');
cljs.core._add_method.call(null,lt.objs.search.location,"<directory>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.user.util.current_directory.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<file>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.user.util.current_file.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<folder>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.user.util.current_folder.call(null)], null);
}));
cljs.core._add_method.call(null,lt.objs.search.location,"<plugins>",(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.files.lt_user_dir.call(null,"plugins")], null);
}));
lt.plugins.user.search.set_search = (function set_search(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.search","input.search",1599745982),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.user.search.set_location = (function set_location(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.loc","input.loc",2719736462),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.user.search.set_replace = (function set_replace(this$,v){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input.replace","input.replace",1121297410),lt.object.__GT_content.call(null,this$)),v);
});
lt.plugins.user.search.open_search_for = (function open_search_for(path){lt.plugins.user.search.set_location.call(null,lt.objs.search.searcher,path);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-directory","user.search-current-directory",2999856745),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current directory",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.search.open_search_for,"<directory>")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-folder","user.search-current-folder",2057523094),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current folder",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.search.open_search_for,"<folder>")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-file","user.search-current-file",3280903716),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current file",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.user.search.open_search_for,"<file>")], null));
lt.plugins.user.search.search_current_file_with_current_word = (function search_current_file_with_current_word(){lt.plugins.user.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.user.clojure.current_word.call(null));
lt.plugins.user.search.set_location.call(null,lt.objs.search.searcher,"<file>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-file-with-current-word","user.search-current-file-with-current-word",1274800540),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current file with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.search.search_current_file_with_current_word], null));
lt.plugins.user.search.search_current_folder_with_current_word = (function search_current_folder_with_current_word(){lt.plugins.user.search.set_search.call(null,lt.objs.search.searcher,lt.plugins.user.clojure.current_word.call(null));
lt.plugins.user.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-folder-with-current-word","user.search-current-folder-with-current-word",1233511054),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current folder with current word",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.search.search_current_folder_with_current_word], null));
lt.plugins.user.search.search_current_folder_for_fn_usage = (function search_current_folder_for_fn_usage(){lt.plugins.user.search.set_search.call(null,lt.objs.search.searcher,clojure.string.replace_first.call(null,"/\\((\\S+\\/)?%s\\s+/","%s",goog.string.regExpEscape(lt.plugins.user.clojure.current_word.call(null))));
lt.plugins.user.search.set_location.call(null,lt.objs.search.searcher,"<folder>");
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"user.ensure-and-focus-second-tabset","user.ensure-and-focus-second-tabset",2411479137));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.show","searcher.show",3419032680));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.search-current-folder-for-fn-usage","user.search-current-folder-for-fn-usage",4331390811),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Searches current folder for fn usage",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.search.search_current_folder_for_fn_usage], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.developer')) {
goog.provide('lt.plugins.user.developer');
goog.require('cljs.core');
goog.require('lt.plugins.user.search');
goog.require('lt.util.dom');
goog.require('lt.objs.clients.local');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('lt.objs.search');
goog.require('lt.objs.context');
goog.require('lt.plugins.user.search');
goog.require('lt.objs.notifos');
goog.require('lt.objs.search');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('lt.objs.clients.local');
goog.require('lt.plugins.user.selector');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('clojure.set');
lt.plugins.user.developer.cmd_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),cljs.core.map.call(null,(function (p1__6643_SHARP_){return cljs.core.assoc.call(null,p1__6643_SHARP_,new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__6643_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__6643_SHARP_))].join(''));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.command.manager)))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"command-desc","command-desc",2923498309),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"command or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__6645_SHARP_,p2__6646_SHARP_,p3__6644_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__6644_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.commandbar","user.commandbar",989511261),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: executes a command by its id or desc",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (cmd){return new cljs.core.Keyword(null,"exec","exec",1017031683).cljs$core$IFn$_invoke$arity$1(cmd).call(null);
})], null));
lt.plugins.user.developer.__BEH__open_first_search_result = (function __BEH__open_first_search_result(this$,v){lt.object.rem_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.user.developer","open-first-search-result","lt.plugins.user.developer/open-first-search-result",2406473587));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.next","searcher.next",3418881118));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user.developer","open-first-search-result","lt.plugins.user.developer/open-first-search-result",2406473587),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.developer.__BEH__open_first_search_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done-searching","done-searching",1230467105),null], null), null));
lt.plugins.user.developer.jump_to_first_result = (function jump_to_first_result(__GT_search,selection){lt.object.add_behavior_BANG_.call(null,lt.objs.search.searcher,new cljs.core.Keyword("lt.plugins.user.developer","open-first-search-result","lt.plugins.user.developer/open-first-search-result",2406473587));
lt.plugins.user.search.set_search.call(null,lt.objs.search.searcher,__GT_search.call(null,selection));
lt.plugins.user.search.set_location.call(null,lt.objs.search.searcher,"<workspace>");
lt.plugins.user.search.set_replace.call(null,lt.objs.search.searcher,null);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"searcher.search","searcher.search",1646738643));
});
lt.plugins.user.developer.jump_to_command = cljs.core.partial.call(null,lt.plugins.user.developer.jump_to_first_result,(function (p1__6647_SHARP_){return [cljs.core.str("/:command\\s+"),cljs.core.str(goog.string.regExpEscape(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(p1__6647_SHARP_))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.jump-to-command","user.jump-to-command",2071174215),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: jump to chosen command",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.developer.cmd_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.developer.jump_to_command], null));
lt.plugins.user.developer.behavior_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),cljs.core.map.call(null,(function (p1__6648_SHARP_){return cljs.core.assoc.call(null,cljs.core.select_keys.call(null,p1__6648_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"desc","desc",1016984067)], null)),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__6648_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(p1__6648_SHARP_))].join(''));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-desc","name-desc",2201122821),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"name or description",new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__6650_SHARP_,p2__6651_SHARP_,p3__6649_SHARP_){return [cljs.core.str("<p class='binding'>"),cljs.core.str(p3__6649_SHARP_),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.user.developer.jump_to_behavior = cljs.core.partial.call(null,lt.plugins.user.developer.jump_to_first_result,(function (p1__6652_SHARP_){return [cljs.core.str("/behavior\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__6652_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.jump-to-behavior","user.jump-to-behavior",1542983034),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: jump to chosen behavior",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.developer.behavior_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.developer.jump_to_behavior], null));
lt.plugins.user.developer.object_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.map.call(null,(function (p1__6653_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"index","index",1114250308)],[p1__6653_SHARP_,[cljs.core.str(p1__6653_SHARP_)].join('')]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.object_defs))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"index","index",1114250308),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"object"], null));
lt.plugins.user.developer.jump_to_object = cljs.core.partial.call(null,lt.plugins.user.developer.jump_to_first_result,(function (p1__6654_SHARP_){return [cljs.core.str("/object\\*\\s+::"),cljs.core.str(goog.string.regExpEscape(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__6654_SHARP_)))),cljs.core.str("(\\s+|$)/")].join('');
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.jump-to-object","user.jump-to-object",548172775),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: jump to chosen object definition",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.developer.object_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.developer.jump_to_object], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.connect-to-lt-ui","user.connect-to-lt-ui",2793964511),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Connect to LT UI via a keystroke",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.objs.clients.local.init], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.print-context","user.print-context",1637804318),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Print context",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return cljs.core.prn.call(null,lt.objs.context.current.call(null));
})], null));
lt.plugins.user.developer.__GT_user_behaviors = (function __GT_user_behaviors(behaviors_edn){return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (diff_map){return cljs.core.mapcat.call(null,(function (behaviors){return cljs.core.map.call(null,(function (p1__6655_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__6655_SHARP_))
{return cljs.core.first.call(null,p1__6655_SHARP_);
} else
{return p1__6655_SHARP_;
}
}),behaviors);
}),cljs.core.vals.call(null,diff_map));
}),cljs.core.vals.call(null,behaviors_edn)));
});
/**
* Detects invalid keywords in .behaviors file
*/
lt.plugins.user.developer.validate_behaviors_file = (function validate_behaviors_file(){var ed = lt.objs.editor.pool.last_active.call(null);var behaviors_edn = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))).getValue());var user_behaviors = lt.plugins.user.developer.__GT_user_behaviors.call(null,behaviors_edn);var invalid_behaviors = clojure.set.difference.call(null,user_behaviors,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.behaviors))));var user_tags = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.vals.call(null,behaviors_edn)));var invalid_tags = clojure.set.difference.call(null,user_tags,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.tags))));var invalid = (function (){var G__6657 = cljs.core.PersistentArrayMap.EMPTY;var G__6657__$1 = ((cljs.core.seq.call(null,invalid_behaviors))?cljs.core.assoc.call(null,G__6657,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),invalid_behaviors):G__6657);var G__6657__$2 = ((cljs.core.seq.call(null,invalid_tags))?cljs.core.assoc.call(null,G__6657__$1,new cljs.core.Keyword(null,"tags","tags",1017456523),invalid_tags):G__6657__$1);return G__6657__$2;
})();if(cljs.core.seq.call(null,invalid))
{cljs.core.prn.call(null,"Invalid .behaviors",invalid);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Behaviors file is invalid: "),cljs.core.str(invalid)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Behaviors are valid");
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.validate-behaviors-file","user.validate-behaviors-file",2007872334),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Validate current behaviors file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.developer.validate_behaviors_file], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.unused-lt-behaviors","user.unused-lt-behaviors",3717700034),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Find defined behaviors that aren't in default.behaviors file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var behaviors_edn = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))).getValue());var user_behaviors = lt.plugins.user.developer.__GT_user_behaviors.call(null,behaviors_edn);var system_behaviors = cljs.core.set.call(null,cljs.core.remove.call(null,((function (ed,behaviors_edn,user_behaviors){
return (function (p1__6658_SHARP_){return cljs.core.namespace.call(null,p1__6658_SHARP_).startsWith("lt.plugins");
});})(ed,behaviors_edn,user_behaviors))
,cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.behaviors))));var unused_behaviors = clojure.set.difference.call(null,system_behaviors,user_behaviors);return cljs.core.prn.call(null,"Unused behaviors:",unused_behaviors);
})], null));
/**
* Detects invalid keywords in .keymap file
*/
lt.plugins.user.developer.validate_keymap_file = (function validate_keymap_file(){var ed = lt.objs.editor.pool.last_active.call(null);var keymap_edn = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))).getValue());var user_commands = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (ed,keymap_edn){
return (function (diff_map){return cljs.core.mapcat.call(null,((function (ed,keymap_edn){
return (function (keymap){return cljs.core.mapcat.call(null,((function (ed,keymap_edn){
return (function (cmds){return cljs.core.map.call(null,((function (ed,keymap_edn){
return (function (p1__6659_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__6659_SHARP_))
{return cljs.core.first.call(null,p1__6659_SHARP_);
} else
{return p1__6659_SHARP_;
}
});})(ed,keymap_edn))
,cmds);
});})(ed,keymap_edn))
,cljs.core.vals.call(null,keymap));
});})(ed,keymap_edn))
,cljs.core.vals.call(null,diff_map));
});})(ed,keymap_edn))
,cljs.core.vals.call(null,keymap_edn)));var invalid_commands = clojure.set.difference.call(null,user_commands,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.command.manager)))));var invalid = (function (){var G__6661 = cljs.core.PersistentArrayMap.EMPTY;var G__6661__$1 = ((cljs.core.seq.call(null,invalid_commands))?cljs.core.assoc.call(null,G__6661,new cljs.core.Keyword(null,"commands","commands",4706336250),invalid_commands):G__6661);return G__6661__$1;
})();if(cljs.core.seq.call(null,invalid))
{cljs.core.prn.call(null,"Invalid .keymap",invalid);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Keymap file is invalid: "),cljs.core.str(invalid)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Keymaps are valid");
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.validate-keymap-file","user.validate-keymap-file",2944824874),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Validate current keymap file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.developer.validate_keymap_file], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.inline-result')) {
goog.provide('lt.plugins.user.inline_result');
goog.require('cljs.core');
goog.require('lt.plugins.birch.eval');
goog.require('lt.plugins.birch.reader');
goog.require('lt.objs.platform');
goog.require('lt.plugins.birch.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.birch.eval');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* Finds the inline widget for the current line. If lines are selected, uses the last line
* of a selection (useful for eval).
*/
lt.plugins.user.inline_result.current_inline_widget = (function current_inline_widget(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed))?new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.selection_bounds.call(null,ed))):new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)));return cljs.core.some.call(null,((function (ed,current_line){
return (function (p__6696){var vec__6697 = p__6696;var vec__6698 = cljs.core.nth.call(null,vec__6697,0,null);var line = cljs.core.nth.call(null,vec__6698,0,null);var type_ = cljs.core.nth.call(null,vec__6698,1,null);var widget = cljs.core.nth.call(null,vec__6697,1,null);if((cljs.core._EQ_.call(null,type_,new cljs.core.Keyword(null,"inline","inline",4124874251))) && (cljs.core._EQ_.call(null,current_line,lt.objs.editor.lh__GT_line.call(null,ed,line))))
{return widget;
} else
{return null;
}
});})(ed,current_line))
,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.user.inline_result.toggle_current_inline_result = (function toggle_current_inline_result(){var temp__4092__auto__ = lt.plugins.user.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline))))
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"double-click","double-click",956590078));
} else
{return lt.object.raise.call(null,inline,new cljs.core.Keyword(null,"click","click",1108654330));
}
} else
{return null;
}
});
lt.plugins.user.inline_result.copy_current_inline_result = (function copy_current_inline_result(){var temp__4092__auto__ = lt.plugins.user.inline_result.current_inline_widget.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var inline = temp__4092__auto__;return lt.objs.platform.copy.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,inline)));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.toggle-current-inline-result","user.toggle-current-inline-result",4194593145),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: toggles current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.inline_result.toggle_current_inline_result], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.copy-current-inline-result","user.copy-current-inline-result",3740144538),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: copies current inline result",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.user.inline_result.copy_current_inline_result], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.view-current-inline-result","user.view-current-inline-result",2155420362),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: open current inline result in eval viewer",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.plugins.birch.reader.read_string_BANG_.call(null,lt.plugins.birch.eval.ir__GT_result.call(null,lt.plugins.user.inline_result.current_inline_widget.call(null)));if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;return lt.object.raise.call(null,lt.plugins.birch.eval.viewer,new cljs.core.Keyword(null,"set!","set!",1017430897),data);
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.user.ctags')) {
goog.provide('lt.plugins.user.ctags');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.user.selector');
goog.require('lt.plugins.user.selector');
goog.require('lt.plugins.ctags');
goog.require('lt.plugins.ctags');
lt.plugins.user.ctags.token_selector = lt.plugins.user.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"token","token",1124445547),cljs.core.map.call(null,(function (p1__6610_SHARP_){return cljs.core.update_in.call(null,p1__6610_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",1124445547)], null),cljs.core.name);
}),cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.vals.call(null,new cljs.core.Keyword(null,"ctags","ctags",1108885102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.ctags.ctags))))));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"token","token",1124445547),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"token"], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.jump-to-ctag","user.jump-to-ctag",1790731903),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Select a ctag token from a ctags file",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.user.ctags.token_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (selection){return lt.plugins.ctags.lookup_tag.call(null,lt.objs.editor.pool.last_active.call(null),selection);
})], null));
}

//# sourceMappingURL=user_compiled.js.map