/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"build.worker": 1
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./polify/polify_bg.wasm": function() {
/******/ 			return {
/******/ 				"./polify_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_wasmimage_new": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_wasmimage_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithheaders_9e85f83ab45cfc21": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newwithheaders_9e85f83ab45cfc21"](p0i32);
/******/ 					},
/******/ 					"__wbg_delete_a835445e3893b4e8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_delete_a835445e3893b4e8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_f52c65c389890639": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_instanceof_Response_f52c65c389890639"](p0i32);
/******/ 					},
/******/ 					"__wbg_ok_c20643e0a45dc5a0": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_ok_c20643e0a45dc5a0"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_6fafb2c7669a8ac5": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_headers_6fafb2c7669a8ac5"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_a6346e035b74330d": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_error_a6346e035b74330d"]();
/******/ 					},
/******/ 					"__wbg_arrayBuffer_0ba17dfaad804b6f": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_arrayBuffer_0ba17dfaad804b6f"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_d7d53dd79ca28903": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_fetch_d7d53dd79ca28903"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_self_23b14d60c8dbf9da": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_self_23b14d60c8dbf9da"]();
/******/ 					},
/******/ 					"__wbg_crypto_df96f3577c8a9bae": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_crypto_df96f3577c8a9bae"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_331efcdb9be40d7c": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_msCrypto_331efcdb9be40d7c"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_1dab18ea211c4fa1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_require_1dab18ea211c4fa1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_c73f06b5ed8b878d": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_getRandomValues_c73f06b5ed8b878d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_ff1e47f7076e0ee1": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_static_accessor_MODULE_ff1e47f7076e0ee1"]();
/******/ 					},
/******/ 					"__wbg_randomFillSync_5fa0a72035c7bfd9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_randomFillSync_5fa0a72035c7bfd9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_951bd0c6d815d6f1": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_call_951bd0c6d815d6f1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_6baf3a3aa7b63415": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_self_6baf3a3aa7b63415"]();
/******/ 					},
/******/ 					"__wbg_window_63fc4027b66c265b": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_window_63fc4027b66c265b"]();
/******/ 					},
/******/ 					"__wbg_globalThis_513fb247e8e4e6d2": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_globalThis_513fb247e8e4e6d2"]();
/******/ 					},
/******/ 					"__wbg_global_b87245cd886d7113": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_global_b87245cd886d7113"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_7c6bd521992b4022": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newnoargs_7c6bd521992b4022"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_94a7dfa9529ec6e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_new_94a7dfa9529ec6e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_bf745b1758bb6693": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_call_bf745b1758bb6693"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_ba07d0daa0e4677e": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_new_ba07d0daa0e4677e"]();
/******/ 					},
/******/ 					"__wbg_new_bb4e44ef089e45b4": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_new_bb4e44ef089e45b4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_6e61e640925a0db9": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_resolve_6e61e640925a0db9"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_dd3785597974798a": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_then_dd3785597974798a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_0f957e0f4c3e537a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_then_0f957e0f4c3e537a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_3f12a1c608c6d04e": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_buffer_3f12a1c608c6d04e"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_4c51342f87299c5a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newwithbyteoffsetandlength_4c51342f87299c5a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_c6c0228e6d22a2f9": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_new_c6c0228e6d22a2f9"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_b91afac9fd216d99": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_set_b91afac9fd216d99"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_c645e7c02233b440": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_length_c645e7c02233b440"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_a429e08f8a8fe4b3": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newwithlength_a429e08f8a8fe4b3"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_02e2fcfa6b285cb2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_subarray_02e2fcfa6b285cb2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_9bdd413385146137": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_set_9bdd413385146137"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper503": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_closure_wrapper503"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + chunkId + ".bootstrap.worker.js");
/******/ 			}
/******/ 		}));
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./polify/polify_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./polify/polify_bg.wasm":"1fb3815aee18ef7a4dfb"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ts-loader/index.js!./build.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-loader/index.js!./build.worker.ts":
/*!**************************************************!*\
  !*** ./node_modules/ts-loader!./build.worker.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = self;
ctx.addEventListener("message", function (event) {
    console.log("Worker starting up.");
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! polify */ "./polify/polify.js"))
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQSw2QkFBNkIsMEJBQTBCOztRQUV2RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQ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RSxDQUFDO1lBQ3ZDLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQztZQUV6QixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1gsSUFBSTtxQkFDRCxJQUFJLEVBQUU7cUJBQ04sSUFBSSxDQUFDLFVBQUMsSUFBWTtvQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEdBQVE7b0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDO3FCQUNELE9BQU8sQ0FBQztvQkFDUCxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztnQkFDdkQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQyxHQUFRO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdHN0cmFwLndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrQ2h1bmtDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVpbGQud29ya2VyXCI6IDFcbiBcdH07XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG4gXHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuIFx0ZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuXG4gXHR2YXIgd2FzbUltcG9ydE9iamVjdHMgPSB7XG4gXHRcdFwiLi9wb2xpZnkvcG9saWZ5X2JnLndhc21cIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFwiLi9wb2xpZnlfYmcuanNcIjoge1xuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX3N0cmluZ19uZXdcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9zdHJpbmdfbmV3XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ193YXNtaW1hZ2VfbmV3XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3dhc21pbWFnZV9uZXdcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWZcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld3dpdGhoZWFkZXJzXzllODVmODNhYjQ1Y2ZjMjFcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3d2l0aGhlYWRlcnNfOWU4NWY4M2FiNDVjZmMyMVwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZGVsZXRlX2E4MzU0NDVlMzg5M2I0ZThcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfZGVsZXRlX2E4MzU0NDVlMzg5M2I0ZThcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2luc3RhbmNlb2ZfUmVzcG9uc2VfZjUyYzY1YzM4OTg5MDYzOVwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlX2Y1MmM2NWMzODk4OTA2MzlcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX29rX2MyMDY0M2UwYTQ1ZGM1YTBcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfb2tfYzIwNjQzZTBhNDVkYzVhMFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfaGVhZGVyc182ZmFmYjJjNzY2OWE4YWM1XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2hlYWRlcnNfNmZhZmIyYzc2NjlhOGFjNVwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3d2l0aG9wdGJ1ZmZlcnNvdXJjZWFuZGluaXRfM2JkNGEyMTAyZmMwM2FhN1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF8zYmQ0YTIxMDJmYzAzYWE3XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19lcnJvcl9hNjM0NmUwMzViNzQzMzBkXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19lcnJvcl9hNjM0NmUwMzViNzQzMzBkXCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfYXJyYXlCdWZmZXJfMGJhMTdkZmFhZDgwNGI2ZlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19hcnJheUJ1ZmZlcl8wYmExN2RmYWFkODA0YjZmXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19mZXRjaF9kN2Q1M2RkNzljYTI4OTAzXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2ZldGNoX2Q3ZDUzZGQ3OWNhMjg5MDNcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fY2JfZHJvcFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX2NiX2Ryb3BcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3NlbGZfMjNiMTRkNjBjOGRiZjlkYVwiOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfc2VsZl8yM2IxNGQ2MGM4ZGJmOWRhXCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY3J5cHRvX2RmOTZmMzU3N2M4YTliYWVcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfY3J5cHRvX2RmOTZmMzU3N2M4YTliYWVcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX21zQ3J5cHRvXzMzMWVmY2RiOWJlNDBkN2NcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbXNDcnlwdG9fMzMxZWZjZGI5YmU0MGQ3Y1wiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9pc191bmRlZmluZWRcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9pc191bmRlZmluZWRcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JlcXVpcmVfMWRhYjE4ZWEyMTFjNGZhMVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yZXF1aXJlXzFkYWIxOGVhMjExYzRmYTFcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19jNzNmMDZiNWVkOGI4NzhkXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19jNzNmMDZiNWVkOGI4NzhkXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zdGF0aWNfYWNjZXNzb3JfTU9EVUxFX2ZmMWU0N2Y3MDc2ZTBlZTFcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9NT0RVTEVfZmYxZTQ3ZjcwNzZlMGVlMVwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzVmYTBhNzIwMzVjN2JmZDlcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfcmFuZG9tRmlsbFN5bmNfNWZhMGE3MjAzNWM3YmZkOVwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY2FsbF85NTFiZDBjNmQ4MTVkNmYxXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NhbGxfOTUxYmQwYzZkODE1ZDZmMVwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc2VsZl82YmFmM2EzYWE3YjYzNDE1XCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zZWxmXzZiYWYzYTNhYTdiNjM0MTVcIl0oKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ193aW5kb3dfNjNmYzQwMjdiNjZjMjY1YlwiOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfd2luZG93XzYzZmM0MDI3YjY2YzI2NWJcIl0oKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19nbG9iYWxUaGlzXzUxM2ZiMjQ3ZThlNGU2ZDJcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dsb2JhbFRoaXNfNTEzZmIyNDdlOGU0ZTZkMlwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dsb2JhbF9iODcyNDVjZDg4NmQ3MTEzXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19nbG9iYWxfYjg3MjQ1Y2Q4ODZkNzExM1wiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld25vYXJnc183YzZiZDUyMTk5MmI0MDIyXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld25vYXJnc183YzZiZDUyMTk5MmI0MDIyXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19uZXdfOTRhN2RmYTk1MjllYzZlOFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXdfOTRhN2RmYTk1MjllYzZlOFwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY2FsbF9iZjc0NWIxNzU4YmI2NjkzXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NhbGxfYmY3NDViMTc1OGJiNjY5M1wiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3X2JhMDdkMGRhYTBlNDY3N2VcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld19iYTA3ZDBkYWEwZTQ2NzdlXCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3X2JiNGU0NGVmMDg5ZTQ1YjRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3X2JiNGU0NGVmMDg5ZTQ1YjRcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3Jlc29sdmVfNmU2MWU2NDA5MjVhMGRiOVwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yZXNvbHZlXzZlNjFlNjQwOTI1YTBkYjlcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3RoZW5fZGQzNzg1NTk3OTc0Nzk4YVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ190aGVuX2RkMzc4NTU5Nzk3NDc5OGFcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3RoZW5fMGY5NTdlMGY0YzNlNTM3YVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ190aGVuXzBmOTU3ZTBmNGMzZTUzN2FcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2J1ZmZlcl8zZjEyYTFjNjA4YzZkMDRlXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2J1ZmZlcl8zZjEyYTFjNjA4YzZkMDRlXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF80YzUxMzQyZjg3Mjk5YzVhXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoXzRjNTEzNDJmODcyOTljNWFcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld19jNmMwMjI4ZTZkMjJhMmY5XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld19jNmMwMjI4ZTZkMjJhMmY5XCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zZXRfYjkxYWZhYzlmZDIxNmQ5OVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zZXRfYjkxYWZhYzlmZDIxNmQ5OVwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbGVuZ3RoX2M2NDVlN2MwMjIzM2I0NDBcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbGVuZ3RoX2M2NDVlN2MwMjIzM2I0NDBcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld3dpdGhsZW5ndGhfYTQyOWUwOGY4YThmZTRiM1wiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXd3aXRobGVuZ3RoX2E0MjllMDhmOGE4ZmU0YjNcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3N1YmFycmF5XzAyZTJmY2ZhNmIyODVjYjJcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfc3ViYXJyYXlfMDJlMmZjZmE2YjI4NWNiMlwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc2V0XzliZGQ0MTMzODUxNDYxMzdcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfc2V0XzliZGQ0MTMzODUxNDYxMzdcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fZGVidWdfc3RyaW5nXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fZGVidWdfc3RyaW5nXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX3Rocm93XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fdGhyb3dcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fbWVtb3J5XCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX21lbW9yeVwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNTAzXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNTAzXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0sXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuIFx0XHRwcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdFx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJvb3RzdHJhcC53b3JrZXIuanNcIik7XG4gXHRcdFx0fVxuIFx0XHR9KSk7XG5cbiBcdFx0Ly8gRmV0Y2ggKyBjb21waWxlIGNodW5rIGxvYWRpbmcgZm9yIHdlYmFzc2VtYmx5XG5cbiBcdFx0dmFyIHdhc21Nb2R1bGVzID0ge1wiMFwiOltcIi4vcG9saWZ5L3BvbGlmeV9iZy53YXNtXCJdfVtjaHVua0lkXSB8fCBbXTtcblxuIFx0XHR3YXNtTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHdhc21Nb2R1bGVJZCkge1xuIFx0XHRcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSA9IGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF07XG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiIG9yIFwiYWxyZWFkeSBsb2FkZWRcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSlcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpO1xuIFx0XHRcdGVsc2Uge1xuIFx0XHRcdFx0dmFyIGltcG9ydE9iamVjdCA9IHdhc21JbXBvcnRPYmplY3RzW3dhc21Nb2R1bGVJZF0oKTtcbiBcdFx0XHRcdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsge1wiLi9wb2xpZnkvcG9saWZ5X2JnLndhc21cIjpcIjFmYjM4MTVhZWUxOGVmN2E0ZGZiXCJ9W3dhc21Nb2R1bGVJZF0gKyBcIi5tb2R1bGUud2FzbVwiKTtcbiBcdFx0XHRcdHZhciBwcm9taXNlO1xuIFx0XHRcdFx0aWYoaW1wb3J0T2JqZWN0IGluc3RhbmNlb2YgUHJvbWlzZSAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuIFx0XHRcdFx0XHRwcm9taXNlID0gUHJvbWlzZS5hbGwoW1dlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKSwgaW1wb3J0T2JqZWN0XSkudGhlbihmdW5jdGlvbihpdGVtcykge1xuIFx0XHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShpdGVtc1swXSwgaXRlbXNbMV0pO1xuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH0gZWxzZSBpZih0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcbiBcdFx0XHRcdFx0cHJvbWlzZSA9IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcSwgaW1wb3J0T2JqZWN0KTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHZhciBieXRlc1Byb21pc2UgPSByZXEudGhlbihmdW5jdGlvbih4KSB7IHJldHVybiB4LmFycmF5QnVmZmVyKCk7IH0pO1xuIFx0XHRcdFx0XHRwcm9taXNlID0gYnl0ZXNQcm9taXNlLnRoZW4oZnVuY3Rpb24oYnl0ZXMpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydE9iamVjdCk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy53W3dhc21Nb2R1bGVJZF0gPSAocmVzLmluc3RhbmNlIHx8IHJlcykuZXhwb3J0cztcbiBcdFx0XHRcdH0pKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvYmplY3Qgd2l0aCBhbGwgV2ViQXNzZW1ibHkuaW5zdGFuY2UgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy53ID0ge307XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2J1aWxkLndvcmtlci50c1wiKTtcbiIsImNvbnN0IGN0eDogV29ya2VyID0gc2VsZiBhcyBhbnk7XG5cbmN0eC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJXb3JrZXIgc3RhcnRpbmcgdXAuXCIpO1xuXG4gIGltcG9ydChcInBvbGlmeVwiKVxuICAgIC50aGVuKChwb2xpZnkpID0+IHtcbiAgICAgIHBvbGlmeS5XYXNtSW1hZ2UuY3JlYXRlX3dhc21faW1hZ2UoZXZlbnQuZGF0YVswXSlcbiAgICAgICAgLnRoZW4oKHdvcmtpbmdJbWFnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvbGlmeUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGVkZ2VfdGhyZXNob2xkOiBldmVudC5kYXRhWzFdLFxuICAgICAgICAgICAgaGlnaF90aHJlc2hvbGQ6IGV2ZW50LmRhdGFbMl0sXG4gICAgICAgICAgICBsb3dfdGhyZXNob2xkOiBldmVudC5kYXRhWzNdLFxuICAgICAgICAgICAgbWF4X3ZlcnRpY2VzOiBldmVudC5kYXRhWzRdLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZShcbiAgICAgICAgICAgIHdvcmtpbmdJbWFnZSxcbiAgICAgICAgICAgIHBvbGlmeUNvbmZpZy5sb3dfdGhyZXNob2xkLFxuICAgICAgICAgICAgcG9saWZ5Q29uZmlnLmhpZ2hfdGhyZXNob2xkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGxldCBwb2x5SW1hZ2UgPSB3b3JraW5nSW1hZ2Uud2FzbV90cmlhbmd1bGF0aW9uKFxuICAgICAgICAgICAgcHJlcHJvY2Vzc2VkSW1hZ2UsXG4gICAgICAgICAgICBwb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzLFxuICAgICAgICAgICAgcG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGxldCByZXNwOiBSZXNwb25zZSA9IHBvbHlJbWFnZS5idWlsZCgpO1xuICAgICAgICAgIGxldCBwb2x5QmxvYjogYW55ID0gbnVsbDtcblxuICAgICAgICAgIGlmIChyZXNwLm9rKSB7XG4gICAgICAgICAgICByZXNwXG4gICAgICAgICAgICAgIC5ibG9iKClcbiAgICAgICAgICAgICAgLnRoZW4oKGJsb2I6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlCbG9iID0gYmxvYjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBvcGVuaW5nIGJsb2I6XCIgKyBlcnIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKHBvbHlCbG9iKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb2xpZnkgdGhyZXcgYW4gZXJyb3Igd2hpbGUgYnVpbGRpbmcuXCIpO1xuICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBidWlsZGluZyBpbWFnZTogXCIgKyBlcnIpO1xuICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgaW1wb3J0aW5nIHBvbGlmeTogXCIgKyBlcnIpO1xuICAgICAgY3R4LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9