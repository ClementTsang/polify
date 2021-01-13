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
/******/ 					"__wbg_wasmimage_new": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_wasmimage_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
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
/******/ 					"__wbg_arrayBuffer_0ba17dfaad804b6f": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_arrayBuffer_0ba17dfaad804b6f"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_d7d53dd79ca28903": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_fetch_d7d53dd79ca28903"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_c73f06b5ed8b878d": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_getRandomValues_c73f06b5ed8b878d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_5fa0a72035c7bfd9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_randomFillSync_5fa0a72035c7bfd9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_ff1e47f7076e0ee1": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_static_accessor_MODULE_ff1e47f7076e0ee1"]();
/******/ 					},
/******/ 					"__wbg_self_23b14d60c8dbf9da": function() {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_self_23b14d60c8dbf9da"]();
/******/ 					},
/******/ 					"__wbg_require_1dab18ea211c4fa1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_require_1dab18ea211c4fa1"](p0i32,p1i32,p2i32);
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
/******/ 					"__wbg_new_94a7dfa9529ec6e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_new_94a7dfa9529ec6e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_7c6bd521992b4022": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_newnoargs_7c6bd521992b4022"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_951bd0c6d815d6f1": function(p0i32,p1i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbg_call_951bd0c6d815d6f1"](p0i32,p1i32);
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
/******/ 					"__wbindgen_closure_wrapper473": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./polify/polify_bg.js"].exports["__wbindgen_closure_wrapper473"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./polify/polify_bg.wasm":"fff247026593f46b0d6d"}[wasmModuleId] + ".module.wasm");
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
            preprocessedImage.free();
            polyImage.free();
            workingImage.free();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQSw2QkFBNkIsMEJBQTBCOztRQUV2RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0EsT0FBTztRQUNQ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bGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrQ2h1bmtDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVpbGQud29ya2VyXCI6IDFcbiBcdH07XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG4gXHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuIFx0ZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuXG4gXHR2YXIgd2FzbUltcG9ydE9iamVjdHMgPSB7XG4gXHRcdFwiLi9wb2xpZnkvcG9saWZ5X2JnLndhc21cIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFwiLi9wb2xpZnlfYmcuanNcIjoge1xuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ193YXNtaW1hZ2VfbmV3XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3dhc21pbWFnZV9uZXdcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWZcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fc3RyaW5nX25ld1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX3N0cmluZ19uZXdcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld3dpdGhoZWFkZXJzXzllODVmODNhYjQ1Y2ZjMjFcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3d2l0aGhlYWRlcnNfOWU4NWY4M2FiNDVjZmMyMVwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZGVsZXRlX2E4MzU0NDVlMzg5M2I0ZThcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfZGVsZXRlX2E4MzU0NDVlMzg5M2I0ZThcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2luc3RhbmNlb2ZfUmVzcG9uc2VfZjUyYzY1YzM4OTg5MDYzOVwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlX2Y1MmM2NWMzODk4OTA2MzlcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX29rX2MyMDY0M2UwYTQ1ZGM1YTBcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193Ymdfb2tfYzIwNjQzZTBhNDVkYzVhMFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfaGVhZGVyc182ZmFmYjJjNzY2OWE4YWM1XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2hlYWRlcnNfNmZhZmIyYzc2NjlhOGFjNVwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3d2l0aG9wdGJ1ZmZlcnNvdXJjZWFuZGluaXRfM2JkNGEyMTAyZmMwM2FhN1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF8zYmQ0YTIxMDJmYzAzYWE3XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19hcnJheUJ1ZmZlcl8wYmExN2RmYWFkODA0YjZmXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2FycmF5QnVmZmVyXzBiYTE3ZGZhYWQ4MDRiNmZcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2ZldGNoX2Q3ZDUzZGQ3OWNhMjg5MDNcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfZmV0Y2hfZDdkNTNkZDc5Y2EyODkwM1wiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9jYl9kcm9wXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fY2JfZHJvcFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZ2V0UmFuZG9tVmFsdWVzX2M3M2YwNmI1ZWQ4Yjg3OGRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfZ2V0UmFuZG9tVmFsdWVzX2M3M2YwNmI1ZWQ4Yjg3OGRcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzVmYTBhNzIwMzVjN2JmZDlcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfcmFuZG9tRmlsbFN5bmNfNWZhMGE3MjAzNWM3YmZkOVwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc3RhdGljX2FjY2Vzc29yX01PRFVMRV9mZjFlNDdmNzA3NmUwZWUxXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zdGF0aWNfYWNjZXNzb3JfTU9EVUxFX2ZmMWU0N2Y3MDc2ZTBlZTFcIl0oKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zZWxmXzIzYjE0ZDYwYzhkYmY5ZGFcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3NlbGZfMjNiMTRkNjBjOGRiZjlkYVwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JlcXVpcmVfMWRhYjE4ZWEyMTFjNGZhMVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yZXF1aXJlXzFkYWIxOGVhMjExYzRmYTFcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2NyeXB0b19kZjk2ZjM1NzdjOGE5YmFlXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NyeXB0b19kZjk2ZjM1NzdjOGE5YmFlXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19tc0NyeXB0b18zMzFlZmNkYjliZTQwZDdjXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX21zQ3J5cHRvXzMzMWVmY2RiOWJlNDBkN2NcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19uZXdfOTRhN2RmYTk1MjllYzZlOFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXdfOTRhN2RmYTk1MjllYzZlOFwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3bm9hcmdzXzdjNmJkNTIxOTkyYjQwMjJcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3bm9hcmdzXzdjNmJkNTIxOTkyYjQwMjJcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2NhbGxfOTUxYmQwYzZkODE1ZDZmMVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19jYWxsXzk1MWJkMGM2ZDgxNWQ2ZjFcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2NhbGxfYmY3NDViMTc1OGJiNjY5M1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19jYWxsX2JmNzQ1YjE3NThiYjY2OTNcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld19iYTA3ZDBkYWEwZTQ2NzdlXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXdfYmEwN2QwZGFhMGU0Njc3ZVwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld19iYjRlNDRlZjA4OWU0NWI0XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld19iYjRlNDRlZjA4OWU0NWI0XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19yZXNvbHZlXzZlNjFlNjQwOTI1YTBkYjlcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfcmVzb2x2ZV82ZTYxZTY0MDkyNWEwZGI5XCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ190aGVuX2RkMzc4NTU5Nzk3NDc5OGFcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfdGhlbl9kZDM3ODU1OTc5NzQ3OThhXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ190aGVuXzBmOTU3ZTBmNGMzZTUzN2FcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfdGhlbl8wZjk1N2UwZjRjM2U1MzdhXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zZWxmXzZiYWYzYTNhYTdiNjM0MTVcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3NlbGZfNmJhZjNhM2FhN2I2MzQxNVwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3dpbmRvd182M2ZjNDAyN2I2NmMyNjViXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ193aW5kb3dfNjNmYzQwMjdiNjZjMjY1YlwiXSgpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dsb2JhbFRoaXNfNTEzZmIyNDdlOGU0ZTZkMlwiOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfZ2xvYmFsVGhpc181MTNmYjI0N2U4ZTRlNmQyXCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZ2xvYmFsX2I4NzI0NWNkODg2ZDcxMTNcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dsb2JhbF9iODcyNDVjZDg4NmQ3MTEzXCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfYnVmZmVyXzNmMTJhMWM2MDhjNmQwNGVcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfYnVmZmVyXzNmMTJhMWM2MDhjNmQwNGVcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoXzRjNTEzNDJmODcyOTljNWFcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfNGM1MTM0MmY4NzI5OWM1YVwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3X2M2YzAyMjhlNmQyMmEyZjlcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3X2M2YzAyMjhlNmQyMmEyZjlcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3NldF9iOTFhZmFjOWZkMjE2ZDk5XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX3NldF9iOTFhZmFjOWZkMjE2ZDk5XCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19sZW5ndGhfYzY0NWU3YzAyMjMzYjQ0MFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19sZW5ndGhfYzY0NWU3YzAyMjMzYjQ0MFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3d2l0aGxlbmd0aF9hNDI5ZTA4ZjhhOGZlNGIzXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld3dpdGhsZW5ndGhfYTQyOWUwOGY4YThmZTRiM1wiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc3ViYXJyYXlfMDJlMmZjZmE2YjI4NWNiMlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zdWJhcnJheV8wMmUyZmNmYTZiMjg1Y2IyXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zZXRfOWJkZDQxMzM4NTE0NjEzN1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9wb2xpZnkvcG9saWZ5X2JnLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zZXRfOWJkZDQxMzM4NTE0NjEzN1wiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9kZWJ1Z19zdHJpbmdcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9kZWJ1Z19zdHJpbmdcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fdGhyb3dcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl90aHJvd1wiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9tZW1vcnlcIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL3BvbGlmeS9wb2xpZnlfYmcuanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fbWVtb3J5XCJdKCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI0NzNcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vcG9saWZ5L3BvbGlmeV9iZy5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI0NzNcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSxcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG4gXHRcdHByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0XHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuYm9vdHN0cmFwLndvcmtlci5qc1wiKTtcbiBcdFx0XHR9XG4gXHRcdH0pKTtcblxuIFx0XHQvLyBGZXRjaCArIGNvbXBpbGUgY2h1bmsgbG9hZGluZyBmb3Igd2ViYXNzZW1ibHlcblxuIFx0XHR2YXIgd2FzbU1vZHVsZXMgPSB7XCIwXCI6W1wiLi9wb2xpZnkvcG9saWZ5X2JnLndhc21cIl19W2NodW5rSWRdIHx8IFtdO1xuXG4gXHRcdHdhc21Nb2R1bGVzLmZvckVhY2goZnVuY3Rpb24od2FzbU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhID0gaW5zdGFsbGVkV2FzbU1vZHVsZXNbd2FzbU1vZHVsZUlkXTtcblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIgb3IgXCJhbHJlYWR5IGxvYWRlZFwiLlxuIFx0XHRcdGlmKGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhKVxuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSk7XG4gXHRcdFx0ZWxzZSB7XG4gXHRcdFx0XHR2YXIgaW1wb3J0T2JqZWN0ID0gd2FzbUltcG9ydE9iamVjdHNbd2FzbU1vZHVsZUlkXSgpO1xuIFx0XHRcdFx0dmFyIHJlcSA9IGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyB7XCIuL3BvbGlmeS9wb2xpZnlfYmcud2FzbVwiOlwiZmZmMjQ3MDI2NTkzZjQ2YjBkNmRcIn1bd2FzbU1vZHVsZUlkXSArIFwiLm1vZHVsZS53YXNtXCIpO1xuIFx0XHRcdFx0dmFyIHByb21pc2U7XG4gXHRcdFx0XHRpZihpbXBvcnRPYmplY3QgaW5zdGFuY2VvZiBQcm9taXNlICYmIHR5cGVvZiBXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBQcm9taXNlLmFsbChbV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyhyZXEpLCBpbXBvcnRPYmplY3RdKS50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGl0ZW1zWzBdLCBpdGVtc1sxXSk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuIFx0XHRcdFx0XHRwcm9taXNlID0gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVxLCBpbXBvcnRPYmplY3QpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0dmFyIGJ5dGVzUHJvbWlzZSA9IHJlcS50aGVuKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHguYXJyYXlCdWZmZXIoKTsgfSk7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBieXRlc1Byb21pc2UudGhlbihmdW5jdGlvbihieXRlcykge1xuIFx0XHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgaW1wb3J0T2JqZWN0KTtcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF0gPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLndbd2FzbU1vZHVsZUlkXSA9IChyZXMuaW5zdGFuY2UgfHwgcmVzKS5leHBvcnRzO1xuIFx0XHRcdFx0fSkpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9iamVjdCB3aXRoIGFsbCBXZWJBc3NlbWJseS5pbnN0YW5jZSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLncgPSB7fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vYnVpbGQud29ya2VyLnRzXCIpO1xuIiwiY29uc3QgY3R4OiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcblxuY3R4LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIldvcmtlciBzdGFydGluZyB1cC5cIik7XG5cbiAgaW1wb3J0KFwicG9saWZ5XCIpXG4gICAgLnRoZW4oKHBvbGlmeSkgPT4ge1xuICAgICAgcG9saWZ5Lldhc21JbWFnZS5jcmVhdGVfd2FzbV9pbWFnZShldmVudC5kYXRhWzBdKVxuICAgICAgICAudGhlbigod29ya2luZ0ltYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9saWZ5Q29uZmlnID0ge1xuICAgICAgICAgICAgZWRnZV90aHJlc2hvbGQ6IGV2ZW50LmRhdGFbMV0sXG4gICAgICAgICAgICBoaWdoX3RocmVzaG9sZDogZXZlbnQuZGF0YVsyXSxcbiAgICAgICAgICAgIGxvd190aHJlc2hvbGQ6IGV2ZW50LmRhdGFbM10sXG4gICAgICAgICAgICBtYXhfdmVydGljZXM6IGV2ZW50LmRhdGFbNF0sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGxldCBwcmVwcm9jZXNzZWRJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlKFxuICAgICAgICAgICAgd29ya2luZ0ltYWdlLFxuICAgICAgICAgICAgcG9saWZ5Q29uZmlnLmxvd190aHJlc2hvbGQsXG4gICAgICAgICAgICBwb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGRcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbGV0IHBvbHlJbWFnZSA9IHdvcmtpbmdJbWFnZS53YXNtX3RyaWFuZ3VsYXRpb24oXG4gICAgICAgICAgICBwcmVwcm9jZXNzZWRJbWFnZSxcbiAgICAgICAgICAgIHBvbGlmeUNvbmZpZy5tYXhfdmVydGljZXMsXG4gICAgICAgICAgICBwb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGRcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbGV0IHJlc3A6IFJlc3BvbnNlID0gcG9seUltYWdlLmJ1aWxkKCk7XG4gICAgICAgICAgbGV0IHBvbHlCbG9iOiBhbnkgPSBudWxsO1xuXG4gICAgICAgICAgcHJlcHJvY2Vzc2VkSW1hZ2UuZnJlZSgpO1xuICAgICAgICAgIHBvbHlJbWFnZS5mcmVlKCk7XG4gICAgICAgICAgd29ya2luZ0ltYWdlLmZyZWUoKTtcblxuICAgICAgICAgIGlmIChyZXNwLm9rKSB7XG4gICAgICAgICAgICByZXNwXG4gICAgICAgICAgICAgIC5ibG9iKClcbiAgICAgICAgICAgICAgLnRoZW4oKGJsb2I6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlCbG9iID0gYmxvYjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBvcGVuaW5nIGJsb2I6XCIgKyBlcnIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKHBvbHlCbG9iKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb2xpZnkgdGhyZXcgYW4gZXJyb3Igd2hpbGUgYnVpbGRpbmcuXCIpO1xuICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBidWlsZGluZyBpbWFnZTogXCIgKyBlcnIpO1xuICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgaW1wb3J0aW5nIHBvbGlmeTogXCIgKyBlcnIpO1xuICAgICAgY3R4LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9