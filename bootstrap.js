/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./styles.css");
// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
__webpack_require__.e(/*! import() */ "index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./index.ts */ "./index.ts")).catch((e) =>
  console.error("Error importing `index.ts`:", e)
);




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "output {\n  width: 6em !important;\n  margin-top: 2em;\n}\n", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["output {\n  width: 6em !important;\n  margin-top: 2em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bootstrap.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "polify-demo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpolify_demo"] = self["webpackChunkpolify_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading wasm modules
/******/ 		var installedWasmModules = {};
/******/ 		
/******/ 		function promiseResolve() { return Promise.resolve(); }
/******/ 		
/******/ 		var wasmImportedFuncCache0;
/******/ 		var wasmImportedFuncCache1;
/******/ 		var wasmImportedFuncCache2;
/******/ 		var wasmImportedFuncCache3;
/******/ 		var wasmImportedFuncCache4;
/******/ 		var wasmImportedFuncCache5;
/******/ 		var wasmImportedFuncCache6;
/******/ 		var wasmImportedFuncCache7;
/******/ 		var wasmImportedFuncCache8;
/******/ 		var wasmImportedFuncCache9;
/******/ 		var wasmImportedFuncCache10;
/******/ 		var wasmImportedFuncCache11;
/******/ 		var wasmImportedFuncCache12;
/******/ 		var wasmImportedFuncCache13;
/******/ 		var wasmImportedFuncCache14;
/******/ 		var wasmImportedFuncCache15;
/******/ 		var wasmImportedFuncCache16;
/******/ 		var wasmImportedFuncCache17;
/******/ 		var wasmImportedFuncCache18;
/******/ 		var wasmImportedFuncCache19;
/******/ 		var wasmImportedFuncCache20;
/******/ 		var wasmImportedFuncCache21;
/******/ 		var wasmImportedFuncCache22;
/******/ 		var wasmImportedFuncCache23;
/******/ 		var wasmImportedFuncCache24;
/******/ 		var wasmImportedFuncCache25;
/******/ 		var wasmImportedFuncCache26;
/******/ 		var wasmImportedFuncCache27;
/******/ 		var wasmImportedFuncCache28;
/******/ 		var wasmImportedFuncCache29;
/******/ 		var wasmImportedFuncCache30;
/******/ 		var wasmImportedFuncCache31;
/******/ 		var wasmImportedFuncCache32;
/******/ 		var wasmImportedFuncCache33;
/******/ 		var wasmImportedFuncCache34;
/******/ 		var wasmImportedFuncCache35;
/******/ 		var wasmImportedFuncCache36;
/******/ 		var wasmImportedFuncCache37;
/******/ 		var wasmImportedFuncCache38;
/******/ 		var wasmImportedFuncCache39;
/******/ 		var wasmImportedFuncCache40;
/******/ 		var wasmImportedFuncCache41;
/******/ 		var wasmImportedFuncCache42;
/******/ 		var wasmImportedFuncCache43;
/******/ 		var wasmImportedFuncCache44;
/******/ 		var wasmImportedFuncCache45;
/******/ 		var wasmImportedFuncCache46;
/******/ 		var wasmImportedFuncCache47;
/******/ 		var wasmImportedFuncCache48;
/******/ 		var wasmImportedFuncCache49;
/******/ 		var wasmImportedFuncCache50;
/******/ 		var wasmImportedFuncCache51;
/******/ 		var wasmImportObjects = {
/******/ 			"./polify/polify_bg.wasm": function() {
/******/ 				return {
/******/ 					"./polify_bg.js": {
/******/ 						"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_object_drop_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbindgen_object_clone_ref"](p0i32);
/******/ 						},
/******/ 						"__wbg_wasmimage_new": function(p0i32) {
/******/ 							if(wasmImportedFuncCache2 === undefined) wasmImportedFuncCache2 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache2["__wbg_wasmimage_new"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache3 === undefined) wasmImportedFuncCache3 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache3["__wbindgen_string_new"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_fetch_45c8a2a783cf6ccd": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache4 === undefined) wasmImportedFuncCache4 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache4["__wbg_fetch_45c8a2a783cf6ccd"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_newwithheaders_16233a08e765c2b0": function(p0i32) {
/******/ 							if(wasmImportedFuncCache5 === undefined) wasmImportedFuncCache5 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache5["__wbg_newwithheaders_16233a08e765c2b0"](p0i32);
/******/ 						},
/******/ 						"__wbg_delete_5e0fc0e11374d8cb": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache6 === undefined) wasmImportedFuncCache6 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache6["__wbg_delete_5e0fc0e11374d8cb"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_instanceof_Response_849eb93e75734b6e": function(p0i32) {
/******/ 							if(wasmImportedFuncCache7 === undefined) wasmImportedFuncCache7 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache7["__wbg_instanceof_Response_849eb93e75734b6e"](p0i32);
/******/ 						},
/******/ 						"__wbg_ok_38d7c30bbc66719e": function(p0i32) {
/******/ 							if(wasmImportedFuncCache8 === undefined) wasmImportedFuncCache8 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache8["__wbg_ok_38d7c30bbc66719e"](p0i32);
/******/ 						},
/******/ 						"__wbg_headers_9620bfada380764a": function(p0i32) {
/******/ 							if(wasmImportedFuncCache9 === undefined) wasmImportedFuncCache9 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache9["__wbg_headers_9620bfada380764a"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache10 === undefined) wasmImportedFuncCache10 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache10["__wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_error_aff92d1dd7a35566": function() {
/******/ 							if(wasmImportedFuncCache11 === undefined) wasmImportedFuncCache11 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache11["__wbg_error_aff92d1dd7a35566"]();
/******/ 						},
/******/ 						"__wbg_arrayBuffer_29931d52c7206b02": function(p0i32) {
/******/ 							if(wasmImportedFuncCache12 === undefined) wasmImportedFuncCache12 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache12["__wbg_arrayBuffer_29931d52c7206b02"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_cb_drop": function(p0i32) {
/******/ 							if(wasmImportedFuncCache13 === undefined) wasmImportedFuncCache13 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache13["__wbindgen_cb_drop"](p0i32);
/******/ 						},
/******/ 						"__wbg_queueMicrotask_481971b0d87f3dd4": function(p0i32) {
/******/ 							if(wasmImportedFuncCache14 === undefined) wasmImportedFuncCache14 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache14["__wbg_queueMicrotask_481971b0d87f3dd4"](p0i32);
/******/ 						},
/******/ 						"__wbg_queueMicrotask_3cbae2ec6b6cd3d6": function(p0i32) {
/******/ 							if(wasmImportedFuncCache15 === undefined) wasmImportedFuncCache15 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache15["__wbg_queueMicrotask_3cbae2ec6b6cd3d6"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_function": function(p0i32) {
/******/ 							if(wasmImportedFuncCache16 === undefined) wasmImportedFuncCache16 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache16["__wbindgen_is_function"](p0i32);
/******/ 						},
/******/ 						"__wbg_crypto_d05b68a3572bb8ca": function(p0i32) {
/******/ 							if(wasmImportedFuncCache17 === undefined) wasmImportedFuncCache17 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache17["__wbg_crypto_d05b68a3572bb8ca"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_object": function(p0i32) {
/******/ 							if(wasmImportedFuncCache18 === undefined) wasmImportedFuncCache18 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache18["__wbindgen_is_object"](p0i32);
/******/ 						},
/******/ 						"__wbg_process_b02b3570280d0366": function(p0i32) {
/******/ 							if(wasmImportedFuncCache19 === undefined) wasmImportedFuncCache19 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache19["__wbg_process_b02b3570280d0366"](p0i32);
/******/ 						},
/******/ 						"__wbg_versions_c1cb42213cedf0f5": function(p0i32) {
/******/ 							if(wasmImportedFuncCache20 === undefined) wasmImportedFuncCache20 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache20["__wbg_versions_c1cb42213cedf0f5"](p0i32);
/******/ 						},
/******/ 						"__wbg_node_43b1089f407e4ec2": function(p0i32) {
/******/ 							if(wasmImportedFuncCache21 === undefined) wasmImportedFuncCache21 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache21["__wbg_node_43b1089f407e4ec2"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_string": function(p0i32) {
/******/ 							if(wasmImportedFuncCache22 === undefined) wasmImportedFuncCache22 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache22["__wbindgen_is_string"](p0i32);
/******/ 						},
/******/ 						"__wbg_require_9a7e0f667ead4995": function() {
/******/ 							if(wasmImportedFuncCache23 === undefined) wasmImportedFuncCache23 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache23["__wbg_require_9a7e0f667ead4995"]();
/******/ 						},
/******/ 						"__wbg_msCrypto_10fc94afee92bd76": function(p0i32) {
/******/ 							if(wasmImportedFuncCache24 === undefined) wasmImportedFuncCache24 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache24["__wbg_msCrypto_10fc94afee92bd76"](p0i32);
/******/ 						},
/******/ 						"__wbg_randomFillSync_b70ccbdf4926a99d": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache25 === undefined) wasmImportedFuncCache25 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache25["__wbg_randomFillSync_b70ccbdf4926a99d"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_getRandomValues_7e42b4fb8779dc6d": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache26 === undefined) wasmImportedFuncCache26 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache26["__wbg_getRandomValues_7e42b4fb8779dc6d"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_newnoargs_e258087cd0daa0ea": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache27 === undefined) wasmImportedFuncCache27 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache27["__wbg_newnoargs_e258087cd0daa0ea"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_call_27c0f87801dedf93": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache28 === undefined) wasmImportedFuncCache28 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache28["__wbg_call_27c0f87801dedf93"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_new_72fb9a18b5ae2624": function() {
/******/ 							if(wasmImportedFuncCache29 === undefined) wasmImportedFuncCache29 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache29["__wbg_new_72fb9a18b5ae2624"]();
/******/ 						},
/******/ 						"__wbg_self_ce0dbfc45cf2f5be": function() {
/******/ 							if(wasmImportedFuncCache30 === undefined) wasmImportedFuncCache30 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache30["__wbg_self_ce0dbfc45cf2f5be"]();
/******/ 						},
/******/ 						"__wbg_window_c6fb939a7f436783": function() {
/******/ 							if(wasmImportedFuncCache31 === undefined) wasmImportedFuncCache31 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache31["__wbg_window_c6fb939a7f436783"]();
/******/ 						},
/******/ 						"__wbg_globalThis_d1e6af4856ba331b": function() {
/******/ 							if(wasmImportedFuncCache32 === undefined) wasmImportedFuncCache32 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache32["__wbg_globalThis_d1e6af4856ba331b"]();
/******/ 						},
/******/ 						"__wbg_global_207b558942527489": function() {
/******/ 							if(wasmImportedFuncCache33 === undefined) wasmImportedFuncCache33 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache33["__wbg_global_207b558942527489"]();
/******/ 						},
/******/ 						"__wbindgen_is_undefined": function(p0i32) {
/******/ 							if(wasmImportedFuncCache34 === undefined) wasmImportedFuncCache34 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache34["__wbindgen_is_undefined"](p0i32);
/******/ 						},
/******/ 						"__wbg_new_28c511d9baebfa89": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache35 === undefined) wasmImportedFuncCache35 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache35["__wbg_new_28c511d9baebfa89"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_call_b3ca7c6051f9bec1": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache36 === undefined) wasmImportedFuncCache36 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache36["__wbg_call_b3ca7c6051f9bec1"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_new_81740750da40724f": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache37 === undefined) wasmImportedFuncCache37 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache37["__wbg_new_81740750da40724f"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_resolve_b0083a7967828ec8": function(p0i32) {
/******/ 							if(wasmImportedFuncCache38 === undefined) wasmImportedFuncCache38 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache38["__wbg_resolve_b0083a7967828ec8"](p0i32);
/******/ 						},
/******/ 						"__wbg_then_0c86a60e8fcfe9f6": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache39 === undefined) wasmImportedFuncCache39 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache39["__wbg_then_0c86a60e8fcfe9f6"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_then_a73caa9a87991566": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache40 === undefined) wasmImportedFuncCache40 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache40["__wbg_then_a73caa9a87991566"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_buffer_12d079cc21e14bdb": function(p0i32) {
/******/ 							if(wasmImportedFuncCache41 === undefined) wasmImportedFuncCache41 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache41["__wbg_buffer_12d079cc21e14bdb"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache42 === undefined) wasmImportedFuncCache42 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache42["__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_new_63b92bc8671ed464": function(p0i32) {
/******/ 							if(wasmImportedFuncCache43 === undefined) wasmImportedFuncCache43 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache43["__wbg_new_63b92bc8671ed464"](p0i32);
/******/ 						},
/******/ 						"__wbg_set_a47bac70306a19a7": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache44 === undefined) wasmImportedFuncCache44 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache44["__wbg_set_a47bac70306a19a7"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_length_c20a40f15020d68a": function(p0i32) {
/******/ 							if(wasmImportedFuncCache45 === undefined) wasmImportedFuncCache45 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache45["__wbg_length_c20a40f15020d68a"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithlength_e9b4878cebadb3d3": function(p0i32) {
/******/ 							if(wasmImportedFuncCache46 === undefined) wasmImportedFuncCache46 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache46["__wbg_newwithlength_e9b4878cebadb3d3"](p0i32);
/******/ 						},
/******/ 						"__wbg_subarray_a1f73cd4b5b42fe1": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache47 === undefined) wasmImportedFuncCache47 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache47["__wbg_subarray_a1f73cd4b5b42fe1"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_set_1f9b04f170055d33": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache48 === undefined) wasmImportedFuncCache48 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache48["__wbg_set_1f9b04f170055d33"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache49 === undefined) wasmImportedFuncCache49 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache49["__wbindgen_throw"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_memory": function() {
/******/ 							if(wasmImportedFuncCache50 === undefined) wasmImportedFuncCache50 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache50["__wbindgen_memory"]();
/******/ 						},
/******/ 						"__wbindgen_closure_wrapper429": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache51 === undefined) wasmImportedFuncCache51 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache51["__wbindgen_closure_wrapper429"](p0i32,p1i32,p2i32);
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"index_ts": [
/******/ 				"./polify/polify_bg.wasm"
/******/ 			]
/******/ 		};
/******/ 		
/******/ 		// object with all WebAssembly.instance exports
/******/ 		__webpack_require__.w = {};
/******/ 		
/******/ 		// Fetch + compile chunk loading for webassembly
/******/ 		__webpack_require__.f.wasm = function(chunkId, promises) {
/******/ 		
/******/ 			var wasmModules = wasmModuleMap[chunkId] || [];
/******/ 		
/******/ 			wasmModules.forEach(function(wasmModuleId, idx) {
/******/ 				var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/ 		
/******/ 				// a Promise means "currently loading" or "already loaded".
/******/ 				if(installedWasmModuleData)
/******/ 					promises.push(installedWasmModuleData);
/******/ 				else {
/******/ 					var importObject = wasmImportObjects[wasmModuleId]();
/******/ 					var req = fetch(__webpack_require__.p + "" + {"index_ts":{"./polify/polify_bg.wasm":"bbddd08fc113dcc514ad"}}[chunkId][wasmModuleId] + ".module.wasm");
/******/ 					var promise;
/******/ 					if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {
/******/ 						promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 							return WebAssembly.instantiate(items[0], items[1]);
/******/ 						});
/******/ 					} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 						promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 					} else {
/******/ 						var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 						promise = bytesPromise.then(function(bytes) {
/******/ 							return WebAssembly.instantiate(bytes, importObject);
/******/ 						});
/******/ 					}
/******/ 					promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 						return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 					}));
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./bootstrap.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7V0NBQTtXQUNBOztXQUVBLDRCQUE0Qjs7V0FFNUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpREFBaUQsWUFBWSxrREFBa0Q7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsS0FBSztXQUNMO1dBQ0EsS0FBSztXQUNMLDhDQUE4Qyx5QkFBeUI7V0FDdkU7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1VFM1RBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9zdHlsZXMuY3NzIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vc3R5bGVzLmNzcz8xNzBmIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL3dhc20gY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBkZXBlbmRlbmN5IGdyYXBoIHRoYXQgY29udGFpbnMgYW55IHdhc20gbXVzdCBhbGwgYmUgaW1wb3J0ZWRcbi8vIGFzeW5jaHJvbm91c2x5LiBUaGlzIGBib290c3RyYXAuanNgIGZpbGUgZG9lcyB0aGUgc2luZ2xlIGFzeW5jIGltcG9ydCwgc29cbi8vIHRoYXQgbm8gb25lIGVsc2UgbmVlZHMgdG8gd29ycnkgYWJvdXQgaXQgYWdhaW4uXG5pbXBvcnQoXCIuL2luZGV4LnRzXCIpLmNhdGNoKChlKSA9PlxuICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW1wb3J0aW5nIGBpbmRleC50c2A6XCIsIGUpXG4pO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIm91dHB1dCB7XFxuICB3aWR0aDogNmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJvdXRwdXQge1xcbiAgd2lkdGg6IDZlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5ib290c3RyYXAuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJwb2xpZnktZGVtbzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvbGlmeV9kZW1vXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvbGlmeV9kZW1vXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG52YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuXG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTU7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTg7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0ODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0OTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MTtcbnZhciB3YXNtSW1wb3J0T2JqZWN0cyA9IHtcblx0XCIuL3BvbGlmeS9wb2xpZnlfYmcud2FzbVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCIuL3BvbGlmeV9iZy5qc1wiOiB7XG5cdFx0XHRcdFwiX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUwID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMFtcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMVtcIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfd2FzbWltYWdlX25ld1wiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyW1wiX193Ymdfd2FzbWltYWdlX25ld1wiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9zdHJpbmdfbmV3XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTNbXCJfX3diaW5kZ2VuX3N0cmluZ19uZXdcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2ZldGNoXzQ1YzhhMmE3ODNjZjZjY2RcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNFtcIl9fd2JnX2ZldGNoXzQ1YzhhMmE3ODNjZjZjY2RcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld3dpdGhoZWFkZXJzXzE2MjMzYTA4ZTc2NWMyYjBcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNVtcIl9fd2JnX25ld3dpdGhoZWFkZXJzXzE2MjMzYTA4ZTc2NWMyYjBcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2RlbGV0ZV81ZTBmYzBlMTEzNzRkOGNiXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU2ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTZbXCJfX3diZ19kZWxldGVfNWUwZmMwZTExMzc0ZDhjYlwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfaW5zdGFuY2VvZl9SZXNwb25zZV84NDllYjkzZTc1NzM0YjZlXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTdbXCJfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlXzg0OWViOTNlNzU3MzRiNmVcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX29rXzM4ZDdjMzBiYmM2NjcxOWVcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU4ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlOFtcIl9fd2JnX29rXzM4ZDdjMzBiYmM2NjcxOWVcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2hlYWRlcnNfOTYyMGJmYWRhMzgwNzY0YVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlOSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU5W1wiX193YmdfaGVhZGVyc185NjIwYmZhZGEzODA3NjRhXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF9hNGZhODFlNzcyNTliYjk2XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTAgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTBbXCJfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF9hNGZhODFlNzcyNTliYjk2XCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19lcnJvcl9hZmY5MmQxZGQ3YTM1NTY2XCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTExID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTExID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTExW1wiX193YmdfZXJyb3JfYWZmOTJkMWRkN2EzNTU2NlwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2FycmF5QnVmZmVyXzI5OTMxZDUyYzcyMDZiMDJcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMltcIl9fd2JnX2FycmF5QnVmZmVyXzI5OTMxZDUyYzcyMDZiMDJcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JpbmRnZW5fY2JfZHJvcFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEzID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEzW1wiX193YmluZGdlbl9jYl9kcm9wXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19xdWV1ZU1pY3JvdGFza180ODE5NzFiMGQ4N2YzZGQ0XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTQgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTRbXCJfX3diZ19xdWV1ZU1pY3JvdGFza180ODE5NzFiMGQ4N2YzZGQ0XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19xdWV1ZU1pY3JvdGFza18zY2JhZTJlYzZiNmNkM2Q2XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTUgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTVbXCJfX3diZ19xdWV1ZU1pY3JvdGFza18zY2JhZTJlYzZiNmNkM2Q2XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTZbXCJfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19jcnlwdG9fZDA1YjY4YTM1NzJiYjhjYVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE3ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE3W1wiX193YmdfY3J5cHRvX2QwNWI2OGEzNTcyYmI4Y2FcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JpbmRnZW5faXNfb2JqZWN0XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTggPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMThbXCJfX3diaW5kZ2VuX2lzX29iamVjdFwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfcHJvY2Vzc19iMDJiMzU3MDI4MGQwMzY2XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTlbXCJfX3diZ19wcm9jZXNzX2IwMmIzNTcwMjgwZDAzNjZcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3ZlcnNpb25zX2MxY2I0MjIxM2NlZGYwZjVcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMFtcIl9fd2JnX3ZlcnNpb25zX2MxY2I0MjIxM2NlZGYwZjVcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25vZGVfNDNiMTA4OWY0MDdlNGVjMlwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxW1wiX193Ymdfbm9kZV80M2IxMDg5ZjQwN2U0ZWMyXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX3N0cmluZ1wiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyW1wiX193YmluZGdlbl9pc19zdHJpbmdcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3JlcXVpcmVfOWE3ZTBmNjY3ZWFkNDk5NVwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyM1tcIl9fd2JnX3JlcXVpcmVfOWE3ZTBmNjY3ZWFkNDk5NVwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX21zQ3J5cHRvXzEwZmM5NGFmZWU5MmJkNzZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNFtcIl9fd2JnX21zQ3J5cHRvXzEwZmM5NGFmZWU5MmJkNzZcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3JhbmRvbUZpbGxTeW5jX2I3MGNjYmRmNDkyNmE5OWRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNVtcIl9fd2JnX3JhbmRvbUZpbGxTeW5jX2I3MGNjYmRmNDkyNmE5OWRcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2dldFJhbmRvbVZhbHVlc183ZTQyYjRmYjg3NzlkYzZkXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjZbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfN2U0MmI0ZmI4Nzc5ZGM2ZFwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3bm9hcmdzX2UyNTgwODdjZDBkYWEwZWFcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyN1tcIl9fd2JnX25ld25vYXJnc19lMjU4MDg3Y2QwZGFhMGVhXCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19jYWxsXzI3YzBmODc4MDFkZWRmOTNcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOFtcIl9fd2JnX2NhbGxfMjdjMGY4NzgwMWRlZGY5M1wiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3XzcyZmI5YTE4YjVhZTI2MjRcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjlbXCJfX3diZ19uZXdfNzJmYjlhMThiNWFlMjYyNFwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3NlbGZfY2UwZGJmYzQ1Y2YyZjViZVwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMFtcIl9fd2JnX3NlbGZfY2UwZGJmYzQ1Y2YyZjViZVwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3dpbmRvd19jNmZiOTM5YTdmNDM2NzgzXCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMxID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMxID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMxW1wiX193Ymdfd2luZG93X2M2ZmI5MzlhN2Y0MzY3ODNcIl0oKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19nbG9iYWxUaGlzX2QxZTZhZjQ4NTZiYTMzMWJcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzIgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzJbXCJfX3diZ19nbG9iYWxUaGlzX2QxZTZhZjQ4NTZiYTMzMWJcIl0oKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19nbG9iYWxfMjA3YjU1ODk0MjUyNzQ4OVwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzM1tcIl9fd2JnX2dsb2JhbF8yMDdiNTU4OTQyNTI3NDg5XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9pc191bmRlZmluZWRcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzNFtcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXdfMjhjNTExZDliYWViZmE4OVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM1ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM1ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM1W1wiX193YmdfbmV3XzI4YzUxMWQ5YmFlYmZhODlcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2NhbGxfYjNjYTdjNjA1MWY5YmVjMVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM2ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM2ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM2W1wiX193YmdfY2FsbF9iM2NhN2M2MDUxZjliZWMxXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXdfODE3NDA3NTBkYTQwNzI0ZlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM3ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM3W1wiX193YmdfbmV3XzgxNzQwNzUwZGE0MDcyNGZcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3Jlc29sdmVfYjAwODNhNzk2NzgyOGVjOFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM4ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM4ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM4W1wiX193YmdfcmVzb2x2ZV9iMDA4M2E3OTY3ODI4ZWM4XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ190aGVuXzBjODZhNjBlOGZjZmU5ZjZcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzOSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzOSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzOVtcIl9fd2JnX3RoZW5fMGM4NmE2MGU4ZmNmZTlmNlwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfdGhlbl9hNzNjYWE5YTg3OTkxNTY2XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDAgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDBbXCJfX3diZ190aGVuX2E3M2NhYTlhODc5OTE1NjZcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDFbXCJfX3diZ19idWZmZXJfMTJkMDc5Y2MyMWUxNGJkYlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfYWE0YTE3YzMzYTA2ZTVjYlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQyID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQyW1wiX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfYWE0YTE3YzMzYTA2ZTVjYlwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3XzYzYjkyYmM4NjcxZWQ0NjRcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0M1tcIl9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19zZXRfYTQ3YmFjNzAzMDZhMTlhN1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ0ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ0W1wiX193Ymdfc2V0X2E0N2JhYzcwMzA2YTE5YTdcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2xlbmd0aF9jMjBhNDBmMTUwMjBkNjhhXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDUgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDVbXCJfX3diZ19sZW5ndGhfYzIwYTQwZjE1MDIwZDY4YVwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3d2l0aGxlbmd0aF9lOWI0ODc4Y2ViYWRiM2QzXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDZbXCJfX3diZ19uZXd3aXRobGVuZ3RoX2U5YjQ4NzhjZWJhZGIzZDNcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3N1YmFycmF5X2ExZjczY2Q0YjViNDJmZTFcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0N1tcIl9fd2JnX3N1YmFycmF5X2ExZjczY2Q0YjViNDJmZTFcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3NldF8xZjliMDRmMTcwMDU1ZDMzXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDggPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDhbXCJfX3diZ19zZXRfMWY5YjA0ZjE3MDA1NWQzM1wiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl90aHJvd1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ5ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ5W1wiX193YmluZGdlbl90aHJvd1wiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9tZW1vcnlcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNTAgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNTBbXCJfX3diaW5kZ2VuX21lbW9yeVwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNDI5XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNTEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNTEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNTFbXCJfX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjQyOVwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9LFxufTtcblxudmFyIHdhc21Nb2R1bGVNYXAgPSB7XG5cdFwiaW5kZXhfdHNcIjogW1xuXHRcdFwiLi9wb2xpZnkvcG9saWZ5X2JnLndhc21cIlxuXHRdXG59O1xuXG4vLyBvYmplY3Qgd2l0aCBhbGwgV2ViQXNzZW1ibHkuaW5zdGFuY2UgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy53ID0ge307XG5cbi8vIEZldGNoICsgY29tcGlsZSBjaHVuayBsb2FkaW5nIGZvciB3ZWJhc3NlbWJseVxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLndhc20gPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXG5cdHZhciB3YXNtTW9kdWxlcyA9IHdhc21Nb2R1bGVNYXBbY2h1bmtJZF0gfHwgW107XG5cblx0d2FzbU1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbih3YXNtTW9kdWxlSWQsIGlkeCkge1xuXHRcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSA9IGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF07XG5cblx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiIG9yIFwiYWxyZWFkeSBsb2FkZWRcIi5cblx0XHRpZihpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSlcblx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGltcG9ydE9iamVjdCA9IHdhc21JbXBvcnRPYmplY3RzW3dhc21Nb2R1bGVJZF0oKTtcblx0XHRcdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsge1wiaW5kZXhfdHNcIjp7XCIuL3BvbGlmeS9wb2xpZnlfYmcud2FzbVwiOlwiYmJkZGQwOGZjMTEzZGNjNTE0YWRcIn19W2NodW5rSWRdW3dhc21Nb2R1bGVJZF0gKyBcIi5tb2R1bGUud2FzbVwiKTtcblx0XHRcdHZhciBwcm9taXNlO1xuXHRcdFx0aWYoaW1wb3J0T2JqZWN0ICYmIHR5cGVvZiBpbXBvcnRPYmplY3QudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwcm9taXNlID0gUHJvbWlzZS5hbGwoW1dlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKSwgaW1wb3J0T2JqZWN0XSkudGhlbihmdW5jdGlvbihpdGVtcykge1xuXHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShpdGVtc1swXSwgaXRlbXNbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cHJvbWlzZSA9IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcSwgaW1wb3J0T2JqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBieXRlc1Byb21pc2UgPSByZXEudGhlbihmdW5jdGlvbih4KSB7IHJldHVybiB4LmFycmF5QnVmZmVyKCk7IH0pO1xuXHRcdFx0XHRwcm9taXNlID0gYnl0ZXNQcm9taXNlLnRoZW4oZnVuY3Rpb24oYnl0ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydE9iamVjdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy53W3dhc21Nb2R1bGVJZF0gPSAocmVzLmluc3RhbmNlIHx8IHJlcykuZXhwb3J0cztcblx0XHRcdH0pKTtcblx0XHR9XG5cdH0pO1xufTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ib290c3RyYXAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=