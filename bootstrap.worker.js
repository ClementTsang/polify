/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ts-loader/index.js!./build.worker.ts":
/*!***********************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./build.worker.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var ctx = self;
ctx.addEventListener("message", function (event) {
    console.log("Worker starting up.");
    __webpack_require__.e(/*! import() */ "polify_polify_js").then(__webpack_require__.bind(__webpack_require__, /*! polify */ "./polify/polify.js"))
        .then(function (polify) {
        polify.WasmImage.create_wasm_image(event.data[0])
            .then(function (workingImage) {
            var polifyConfig = {
                edge_threshold: event.data[1],
                high_threshold: event.data[2],
                low_threshold: event.data[3],
                max_vertices: event.data[4],
            };
            var preprocessedImage = new polify.WasmPreprocessedImage(workingImage, polifyConfig.low_threshold, polifyConfig.high_threshold);
            var polyImage = workingImage.wasm_triangulation(preprocessedImage, polifyConfig.max_vertices, polifyConfig.edge_threshold);
            var resp = polyImage.build();
            var polyBlob = null;
            if (resp.ok) {
                resp
                    .blob()
                    .then(function (blob) {
                    polyBlob = blob;
                })
                    .catch(function (err) {
                    console.error("Error while opening blob:" + err);
                })
                    .finally(function () {
                    ctx.postMessage(polyBlob);
                });
            }
            else {
                console.error("Polify threw an error while building.");
                ctx.postMessage(null);
            }
        })
            .catch(function (err) {
            console.error("Error while building image: " + err);
            ctx.postMessage(null);
        });
    })
        .catch(function (err) {
        console.error("Error while importing polify: " + err);
        ctx.postMessage(null);
    });
});


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
/******/ 			return "" + chunkId + ".bootstrap.worker.js";
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"build.worker": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpolify_demo"] = self["webpackChunkpolify_demo"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
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
/******/ 						"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_string_new"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_wasmimage_new": function(p0i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbg_wasmimage_new"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache2 === undefined) wasmImportedFuncCache2 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache2["__wbindgen_object_drop_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache3 === undefined) wasmImportedFuncCache3 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache3["__wbindgen_object_clone_ref"](p0i32);
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
/******/ 						"__wbindgen_closure_wrapper879": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache51 === undefined) wasmImportedFuncCache51 = __webpack_require__.c["./polify/polify_bg.js"].exports;
/******/ 							return wasmImportedFuncCache51["__wbindgen_closure_wrapper879"](p0i32,p1i32,p2i32);
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"polify_polify_js": [
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
/******/ 					var req = fetch(__webpack_require__.p + "" + {"polify_polify_js":{"./polify/polify_bg.wasm":"14467afc361c115ebc04"}}[chunkId][wasmModuleId] + ".module.wasm");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/ts-loader/index.js!./build.worker.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaURBQWlELG9CQUFvQixrREFBa0Q7V0FDdkg7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsS0FBSztXQUNMO1dBQ0EsS0FBSztXQUNMLDhDQUE4Qyx5QkFBeUI7V0FDdkU7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1VFM1RBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9idWlsZC53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby93ZWJwYWNrL3J1bnRpbWUvd2FzbSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvbGlmeS1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdHg6IFdvcmtlciA9IHNlbGYgYXMgYW55O1xuXG5jdHguYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiV29ya2VyIHN0YXJ0aW5nIHVwLlwiKTtcblxuICBpbXBvcnQoXCJwb2xpZnlcIilcbiAgICAudGhlbigocG9saWZ5KSA9PiB7XG4gICAgICBwb2xpZnkuV2FzbUltYWdlLmNyZWF0ZV93YXNtX2ltYWdlKGV2ZW50LmRhdGFbMF0pXG4gICAgICAgIC50aGVuKCh3b3JraW5nSW1hZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBwb2xpZnlDb25maWcgPSB7XG4gICAgICAgICAgICBlZGdlX3RocmVzaG9sZDogZXZlbnQuZGF0YVsxXSxcbiAgICAgICAgICAgIGhpZ2hfdGhyZXNob2xkOiBldmVudC5kYXRhWzJdLFxuICAgICAgICAgICAgbG93X3RocmVzaG9sZDogZXZlbnQuZGF0YVszXSxcbiAgICAgICAgICAgIG1heF92ZXJ0aWNlczogZXZlbnQuZGF0YVs0XSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgbGV0IHByZXByb2Nlc3NlZEltYWdlID0gbmV3IHBvbGlmeS5XYXNtUHJlcHJvY2Vzc2VkSW1hZ2UoXG4gICAgICAgICAgICB3b3JraW5nSW1hZ2UsXG4gICAgICAgICAgICBwb2xpZnlDb25maWcubG93X3RocmVzaG9sZCxcbiAgICAgICAgICAgIHBvbGlmeUNvbmZpZy5oaWdoX3RocmVzaG9sZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBsZXQgcG9seUltYWdlID0gd29ya2luZ0ltYWdlLndhc21fdHJpYW5ndWxhdGlvbihcbiAgICAgICAgICAgIHByZXByb2Nlc3NlZEltYWdlLFxuICAgICAgICAgICAgcG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyxcbiAgICAgICAgICAgIHBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBsZXQgcmVzcDogUmVzcG9uc2UgPSBwb2x5SW1hZ2UuYnVpbGQoKTtcbiAgICAgICAgICBsZXQgcG9seUJsb2I6IGFueSA9IG51bGw7XG5cbiAgICAgICAgICBpZiAocmVzcC5vaykge1xuICAgICAgICAgICAgcmVzcFxuICAgICAgICAgICAgICAuYmxvYigpXG4gICAgICAgICAgICAgIC50aGVuKChibG9iOiBPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwb2x5QmxvYiA9IGJsb2I7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgb3BlbmluZyBibG9iOlwiICsgZXJyKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZShwb2x5QmxvYik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9saWZ5IHRocmV3IGFuIGVycm9yIHdoaWxlIGJ1aWxkaW5nLlwiKTtcbiAgICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgYnVpbGRpbmcgaW1hZ2U6IFwiICsgZXJyKTtcbiAgICAgICAgICBjdHgucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGltcG9ydGluZyBwb2xpZnk6IFwiICsgZXJyKTtcbiAgICAgIGN0eC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5ib290c3RyYXAud29ya2VyLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1aWxkLndvcmtlclwiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb2xpZnlfZGVtb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb2xpZnlfZGVtb1wiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gaW5zdGFsbENodW5rO1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwiLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyB3YXNtIG1vZHVsZXNcbnZhciBpbnN0YWxsZWRXYXNtTW9kdWxlcyA9IHt9O1xuXG5mdW5jdGlvbiBwcm9taXNlUmVzb2x2ZSgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9XG5cbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU2O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTc7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU5O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTExO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEyO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEzO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE1O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE2O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE4O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE5O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIzO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI2O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI4O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI5O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMxO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMyO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMzO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM1O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM2O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM4O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM5O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQxO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQyO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQzO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ1O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ2O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ4O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ5O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTUwO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTUxO1xudmFyIHdhc21JbXBvcnRPYmplY3RzID0ge1xuXHRcIi4vcG9saWZ5L3BvbGlmeV9iZy53YXNtXCI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi4vcG9saWZ5X2JnLmpzXCI6IHtcblx0XHRcdFx0XCJfX3diaW5kZ2VuX3N0cmluZ19uZXdcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUwID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMFtcIl9fd2JpbmRnZW5fc3RyaW5nX25ld1wiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfd2FzbWltYWdlX25ld1wiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxW1wiX193Ymdfd2FzbWltYWdlX25ld1wiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMltcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlM1tcIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfZmV0Y2hfNDVjOGEyYTc4M2NmNmNjZFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0W1wiX193YmdfZmV0Y2hfNDVjOGEyYTc4M2NmNmNjZFwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbmV3d2l0aGhlYWRlcnNfMTYyMzNhMDhlNzY1YzJiMFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTUgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1W1wiX193YmdfbmV3d2l0aGhlYWRlcnNfMTYyMzNhMDhlNzY1YzJiMFwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfZGVsZXRlXzVlMGZjMGUxMTM3NGQ4Y2JcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU2ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNltcIl9fd2JnX2RlbGV0ZV81ZTBmYzBlMTEzNzRkOGNiXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlXzg0OWViOTNlNzU3MzRiNmVcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU3ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlN1tcIl9fd2JnX2luc3RhbmNlb2ZfUmVzcG9uc2VfODQ5ZWI5M2U3NTczNGI2ZVwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfb2tfMzhkN2MzMGJiYzY2NzE5ZVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTggPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlOCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU4W1wiX193Ymdfb2tfMzhkN2MzMGJiYzY2NzE5ZVwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfaGVhZGVyc185NjIwYmZhZGEzODA3NjRhXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlOSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU5ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTlbXCJfX3diZ19oZWFkZXJzXzk2MjBiZmFkYTM4MDc2NGFcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0X2E0ZmE4MWU3NzI1OWJiOTZcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMFtcIl9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0X2E0ZmE4MWU3NzI1OWJiOTZcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2Vycm9yX2FmZjkyZDFkZDdhMzU1NjZcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTFbXCJfX3diZ19lcnJvcl9hZmY5MmQxZGQ3YTM1NTY2XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfYXJyYXlCdWZmZXJfMjk5MzFkNTJjNzIwNmIwMlwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEyID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEyW1wiX193YmdfYXJyYXlCdWZmZXJfMjk5MzFkNTJjNzIwNmIwMlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9jYl9kcm9wXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTMgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTNbXCJfX3diaW5kZ2VuX2NiX2Ryb3BcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3F1ZXVlTWljcm90YXNrXzQ4MTk3MWIwZDg3ZjNkZDRcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNFtcIl9fd2JnX3F1ZXVlTWljcm90YXNrXzQ4MTk3MWIwZDg3ZjNkZDRcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3F1ZXVlTWljcm90YXNrXzNjYmFlMmVjNmI2Y2QzZDZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNVtcIl9fd2JnX3F1ZXVlTWljcm90YXNrXzNjYmFlMmVjNmI2Y2QzZDZcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JpbmRnZW5faXNfZnVuY3Rpb25cIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNltcIl9fd2JpbmRnZW5faXNfZnVuY3Rpb25cIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2NyeXB0b19kMDViNjhhMzU3MmJiOGNhXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTcgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTdbXCJfX3diZ19jcnlwdG9fZDA1YjY4YTM1NzJiYjhjYVwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9pc19vYmplY3RcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOFtcIl9fd2JpbmRnZW5faXNfb2JqZWN0XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19wcm9jZXNzX2IwMmIzNTcwMjgwZDAzNjZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOVtcIl9fd2JnX3Byb2Nlc3NfYjAyYjM1NzAyODBkMDM2NlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfdmVyc2lvbnNfYzFjYjQyMjEzY2VkZjBmNVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIwID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIwID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIwW1wiX193YmdfdmVyc2lvbnNfYzFjYjQyMjEzY2VkZjBmNVwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfbm9kZV80M2IxMDg5ZjQwN2U0ZWMyXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjFbXCJfX3diZ19ub2RlXzQzYjEwODlmNDA3ZTRlYzJcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JpbmRnZW5faXNfc3RyaW5nXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjIgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjJbXCJfX3diaW5kZ2VuX2lzX3N0cmluZ1wiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfcmVxdWlyZV85YTdlMGY2NjdlYWQ0OTk1XCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIzID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIzW1wiX193YmdfcmVxdWlyZV85YTdlMGY2NjdlYWQ0OTk1XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbXNDcnlwdG9fMTBmYzk0YWZlZTkyYmQ3NlwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI0ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI0W1wiX193YmdfbXNDcnlwdG9fMTBmYzk0YWZlZTkyYmQ3NlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfcmFuZG9tRmlsbFN5bmNfYjcwY2NiZGY0OTI2YTk5ZFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1W1wiX193YmdfcmFuZG9tRmlsbFN5bmNfYjcwY2NiZGY0OTI2YTk5ZFwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfZ2V0UmFuZG9tVmFsdWVzXzdlNDJiNGZiODc3OWRjNmRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNltcIl9fd2JnX2dldFJhbmRvbVZhbHVlc183ZTQyYjRmYjg3NzlkYzZkXCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXdub2FyZ3NfZTI1ODA4N2NkMGRhYTBlYVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI3ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI3W1wiX193YmdfbmV3bm9hcmdzX2UyNTgwODdjZDBkYWEwZWFcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2NhbGxfMjdjMGY4NzgwMWRlZGY5M1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI4ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI4ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI4W1wiX193YmdfY2FsbF8yN2MwZjg3ODAxZGVkZjkzXCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXdfNzJmYjlhMThiNWFlMjYyNFwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyOVtcIl9fd2JnX25ld183MmZiOWExOGI1YWUyNjI0XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfc2VsZl9jZTBkYmZjNDVjZjJmNWJlXCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMwID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMwID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMwW1wiX193Ymdfc2VsZl9jZTBkYmZjNDVjZjJmNWJlXCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfd2luZG93X2M2ZmI5MzlhN2Y0MzY3ODNcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzFbXCJfX3diZ193aW5kb3dfYzZmYjkzOWE3ZjQzNjc4M1wiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2dsb2JhbFRoaXNfZDFlNmFmNDg1NmJhMzMxYlwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzMltcIl9fd2JnX2dsb2JhbFRoaXNfZDFlNmFmNDg1NmJhMzMxYlwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2dsb2JhbF8yMDdiNTU4OTQyNTI3NDg5XCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMzID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMzW1wiX193YmdfZ2xvYmFsXzIwN2I1NTg5NDI1Mjc0ODlcIl0oKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM0ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM0W1wiX193YmluZGdlbl9pc191bmRlZmluZWRcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld18yOGM1MTFkOWJhZWJmYTg5XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzUgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzVbXCJfX3diZ19uZXdfMjhjNTExZDliYWViZmE4OVwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfY2FsbF9iM2NhN2M2MDUxZjliZWMxXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzZbXCJfX3diZ19jYWxsX2IzY2E3YzYwNTFmOWJlYzFcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld184MTc0MDc1MGRhNDA3MjRmXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzcgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzdbXCJfX3diZ19uZXdfODE3NDA3NTBkYTQwNzI0ZlwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfcmVzb2x2ZV9iMDA4M2E3OTY3ODI4ZWM4XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMzggPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMzggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMzhbXCJfX3diZ19yZXNvbHZlX2IwMDgzYTc5Njc4MjhlYzhcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3RoZW5fMGM4NmE2MGU4ZmNmZTlmNlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM5ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM5ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTM5W1wiX193YmdfdGhlbl8wYzg2YTYwZThmY2ZlOWY2XCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ190aGVuX2E3M2NhYTlhODc5OTE1NjZcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MFtcIl9fd2JnX3RoZW5fYTczY2FhOWE4Nzk5MTU2NlwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfYnVmZmVyXzEyZDA3OWNjMjFlMTRiZGJcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0MVtcIl9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9hYTRhMTdjMzNhMDZlNWNiXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDIgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDJbXCJfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9hYTRhMTdjMzNhMDZlNWNiXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXdfNjNiOTJiYzg2NzFlZDQ2NFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQzID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQzW1wiX193YmdfbmV3XzYzYjkyYmM4NjcxZWQ0NjRcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3NldF9hNDdiYWM3MDMwNmExOWE3XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDQgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDRbXCJfX3diZ19zZXRfYTQ3YmFjNzAzMDZhMTlhN1wiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbGVuZ3RoX2MyMGE0MGYxNTAyMGQ2OGFcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NVtcIl9fd2JnX2xlbmd0aF9jMjBhNDBmMTUwMjBkNjhhXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19uZXd3aXRobGVuZ3RoX2U5YjQ4NzhjZWJhZGIzZDNcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0NltcIl9fd2JnX25ld3dpdGhsZW5ndGhfZTliNDg3OGNlYmFkYjNkM1wiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfc3ViYXJyYXlfYTFmNzNjZDRiNWI0MmZlMVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ3ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQ3W1wiX193Ymdfc3ViYXJyYXlfYTFmNzNjZDRiNWI0MmZlMVwiXShwMGkzMixwMWkzMixwMmkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfc2V0XzFmOWIwNGYxNzAwNTVkMzNcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0OCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0OCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0OFtcIl9fd2JnX3NldF8xZjliMDRmMTcwMDU1ZDMzXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX3Rocm93XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlNDkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNDkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNDlbXCJfX3diaW5kZ2VuX3Rocm93XCJdKHAwaTMyLHAxaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX21lbW9yeVwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MFtcIl9fd2JpbmRnZW5fbWVtb3J5XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI4NzlcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MSA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1MVtcIl9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyODc5XCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0sXG59O1xuXG52YXIgd2FzbU1vZHVsZU1hcCA9IHtcblx0XCJwb2xpZnlfcG9saWZ5X2pzXCI6IFtcblx0XHRcIi4vcG9saWZ5L3BvbGlmeV9iZy53YXNtXCJcblx0XVxufTtcblxuLy8gb2JqZWN0IHdpdGggYWxsIFdlYkFzc2VtYmx5Lmluc3RhbmNlIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18udyA9IHt9O1xuXG4vLyBGZXRjaCArIGNvbXBpbGUgY2h1bmsgbG9hZGluZyBmb3Igd2ViYXNzZW1ibHlcbl9fd2VicGFja19yZXF1aXJlX18uZi53YXNtID0gZnVuY3Rpb24oY2h1bmtJZCwgcHJvbWlzZXMpIHtcblxuXHR2YXIgd2FzbU1vZHVsZXMgPSB3YXNtTW9kdWxlTWFwW2NodW5rSWRdIHx8IFtdO1xuXG5cdHdhc21Nb2R1bGVzLmZvckVhY2goZnVuY3Rpb24od2FzbU1vZHVsZUlkLCBpZHgpIHtcblx0XHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEgPSBpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdO1xuXG5cdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIiBvciBcImFscmVhZHkgbG9hZGVkXCIuXG5cdFx0aWYoaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpXG5cdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhKTtcblx0XHRlbHNlIHtcblx0XHRcdHZhciBpbXBvcnRPYmplY3QgPSB3YXNtSW1wb3J0T2JqZWN0c1t3YXNtTW9kdWxlSWRdKCk7XG5cdFx0XHR2YXIgcmVxID0gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIHtcInBvbGlmeV9wb2xpZnlfanNcIjp7XCIuL3BvbGlmeS9wb2xpZnlfYmcud2FzbVwiOlwiMTQ0NjdhZmMzNjFjMTE1ZWJjMDRcIn19W2NodW5rSWRdW3dhc21Nb2R1bGVJZF0gKyBcIi5tb2R1bGUud2FzbVwiKTtcblx0XHRcdHZhciBwcm9taXNlO1xuXHRcdFx0aWYoaW1wb3J0T2JqZWN0ICYmIHR5cGVvZiBpbXBvcnRPYmplY3QudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwcm9taXNlID0gUHJvbWlzZS5hbGwoW1dlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKSwgaW1wb3J0T2JqZWN0XSkudGhlbihmdW5jdGlvbihpdGVtcykge1xuXHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShpdGVtc1swXSwgaXRlbXNbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cHJvbWlzZSA9IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcSwgaW1wb3J0T2JqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBieXRlc1Byb21pc2UgPSByZXEudGhlbihmdW5jdGlvbih4KSB7IHJldHVybiB4LmFycmF5QnVmZmVyKCk7IH0pO1xuXHRcdFx0XHRwcm9taXNlID0gYnl0ZXNQcm9taXNlLnRoZW4oZnVuY3Rpb24oYnl0ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydE9iamVjdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy53W3dhc21Nb2R1bGVJZF0gPSAocmVzLmluc3RhbmNlIHx8IHJlcykuZXhwb3J0cztcblx0XHRcdH0pKTtcblx0XHR9XG5cdH0pO1xufTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vYnVpbGQud29ya2VyLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9