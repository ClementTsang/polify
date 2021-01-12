self["webpackChunk"]([0],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./polify/polify.js":
/*!**************************!*\
  !*** ./polify/polify.js ***!
  \**************************/
/*! exports provided: NodeList, TriangulationConfig, WasmImage, WasmPreprocessedImage, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbindgen_object_clone_ref, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polify_bg.wasm */ "./polify/polify_bg.wasm");
/* harmony import */ var _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polify_bg.js */ "./polify/polify_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["NodeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriangulationConfig", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["TriangulationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasmImage", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["WasmImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WasmPreprocessedImage", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["WasmPreprocessedImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_drop_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Response_f52c65c389890639", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_Response_f52c65c389890639"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ok_c20643e0a45dc5a0", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ok_c20643e0a45dc5a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_headers_6fafb2c7669a8ac5", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_headers_6fafb2c7669a8ac5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_arrayBuffer_0ba17dfaad804b6f", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_arrayBuffer_0ba17dfaad804b6f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_clone_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithheaders_9e85f83ab45cfc21", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithheaders_9e85f83ab45cfc21"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_delete_a835445e3893b4e8", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_delete_a835445e3893b4e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_fetch_d7d53dd79ca28903", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_fetch_d7d53dd79ca28903"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_cb_drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_c73f06b5ed8b878d", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getRandomValues_c73f06b5ed8b878d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_randomFillSync_5fa0a72035c7bfd9", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_randomFillSync_5fa0a72035c7bfd9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_static_accessor_MODULE_ff1e47f7076e0ee1", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_static_accessor_MODULE_ff1e47f7076e0ee1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_23b14d60c8dbf9da", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_self_23b14d60c8dbf9da"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_require_1dab18ea211c4fa1", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_require_1dab18ea211c4fa1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_crypto_df96f3577c8a9bae", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_crypto_df96f3577c8a9bae"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_msCrypto_331efcdb9be40d7c", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_msCrypto_331efcdb9be40d7c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_is_undefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_94a7dfa9529ec6e8", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_94a7dfa9529ec6e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_7c6bd521992b4022", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newnoargs_7c6bd521992b4022"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_951bd0c6d815d6f1", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_951bd0c6d815d6f1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_bf745b1758bb6693", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_bf745b1758bb6693"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_ba07d0daa0e4677e", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_ba07d0daa0e4677e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_bb4e44ef089e45b4", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_bb4e44ef089e45b4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_6e61e640925a0db9", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_resolve_6e61e640925a0db9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_dd3785597974798a", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_then_dd3785597974798a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_0f957e0f4c3e537a", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_then_0f957e0f4c3e537a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_6baf3a3aa7b63415", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_self_6baf3a3aa7b63415"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_63fc4027b66c265b", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_window_63fc4027b66c265b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_513fb247e8e4e6d2", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_globalThis_513fb247e8e4e6d2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_b87245cd886d7113", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_global_b87245cd886d7113"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_3f12a1c608c6d04e", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buffer_3f12a1c608c6d04e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4c51342f87299c5a", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_4c51342f87299c5a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_c6c0228e6d22a2f9", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_c6c0228e6d22a2f9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_b91afac9fd216d99", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_b91afac9fd216d99"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_c645e7c02233b440", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_length_c645e7c02233b440"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithlength_a429e08f8a8fe4b3", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithlength_a429e08f8a8fe4b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_02e2fcfa6b285cb2", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_subarray_02e2fcfa6b285cb2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_9bdd413385146137", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_9bdd413385146137"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_debug_string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_memory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper502", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper502"]; });




/***/ }),

/***/ "./polify/polify_bg.js":
/*!*****************************!*\
  !*** ./polify/polify_bg.js ***!
  \*****************************/
/*! exports provided: NodeList, TriangulationConfig, WasmImage, WasmPreprocessedImage, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbindgen_object_clone_ref, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return NodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangulationConfig", function() { return TriangulationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmImage", function() { return WasmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmPreprocessedImage", function() { return WasmPreprocessedImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Response_f52c65c389890639", function() { return __wbg_instanceof_Response_f52c65c389890639; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ok_c20643e0a45dc5a0", function() { return __wbg_ok_c20643e0a45dc5a0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_headers_6fafb2c7669a8ac5", function() { return __wbg_headers_6fafb2c7669a8ac5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7", function() { return __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_arrayBuffer_0ba17dfaad804b6f", function() { return __wbg_arrayBuffer_0ba17dfaad804b6f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithheaders_9e85f83ab45cfc21", function() { return __wbg_newwithheaders_9e85f83ab45cfc21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_delete_a835445e3893b4e8", function() { return __wbg_delete_a835445e3893b4e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_fetch_d7d53dd79ca28903", function() { return __wbg_fetch_d7d53dd79ca28903; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_c73f06b5ed8b878d", function() { return __wbg_getRandomValues_c73f06b5ed8b878d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_randomFillSync_5fa0a72035c7bfd9", function() { return __wbg_randomFillSync_5fa0a72035c7bfd9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_static_accessor_MODULE_ff1e47f7076e0ee1", function() { return __wbg_static_accessor_MODULE_ff1e47f7076e0ee1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_23b14d60c8dbf9da", function() { return __wbg_self_23b14d60c8dbf9da; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_require_1dab18ea211c4fa1", function() { return __wbg_require_1dab18ea211c4fa1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_crypto_df96f3577c8a9bae", function() { return __wbg_crypto_df96f3577c8a9bae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_msCrypto_331efcdb9be40d7c", function() { return __wbg_msCrypto_331efcdb9be40d7c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_94a7dfa9529ec6e8", function() { return __wbg_new_94a7dfa9529ec6e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_7c6bd521992b4022", function() { return __wbg_newnoargs_7c6bd521992b4022; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_951bd0c6d815d6f1", function() { return __wbg_call_951bd0c6d815d6f1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_bf745b1758bb6693", function() { return __wbg_call_bf745b1758bb6693; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_ba07d0daa0e4677e", function() { return __wbg_new_ba07d0daa0e4677e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_bb4e44ef089e45b4", function() { return __wbg_new_bb4e44ef089e45b4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_6e61e640925a0db9", function() { return __wbg_resolve_6e61e640925a0db9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_dd3785597974798a", function() { return __wbg_then_dd3785597974798a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_0f957e0f4c3e537a", function() { return __wbg_then_0f957e0f4c3e537a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_6baf3a3aa7b63415", function() { return __wbg_self_6baf3a3aa7b63415; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_63fc4027b66c265b", function() { return __wbg_window_63fc4027b66c265b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_513fb247e8e4e6d2", function() { return __wbg_globalThis_513fb247e8e4e6d2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_b87245cd886d7113", function() { return __wbg_global_b87245cd886d7113; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_3f12a1c608c6d04e", function() { return __wbg_buffer_3f12a1c608c6d04e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4c51342f87299c5a", function() { return __wbg_newwithbyteoffsetandlength_4c51342f87299c5a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_c6c0228e6d22a2f9", function() { return __wbg_new_c6c0228e6d22a2f9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_b91afac9fd216d99", function() { return __wbg_set_b91afac9fd216d99; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_c645e7c02233b440", function() { return __wbg_length_c645e7c02233b440; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithlength_a429e08f8a8fe4b3", function() { return __wbg_newwithlength_a429e08f8a8fe4b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_02e2fcfa6b285cb2", function() { return __wbg_subarray_02e2fcfa6b285cb2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_9bdd413385146137", function() { return __wbg_set_9bdd413385146137; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return __wbindgen_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper502", function() { return __wbindgen_closure_wrapper502; });
/* harmony import */ var _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polify_bg.wasm */ "./polify/polify_bg.wasm");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_export_2"].get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_18(arg0, arg1, arg2) {
    _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h284d827442cf05be"](arg0, arg1, addHeapObject(arg2));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_exn_store"](addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function __wbg_adapter_73(arg0, arg1, arg2, arg3) {
    _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasm_bindgen__convert__closures__invoke2_mut__hdd3c7e3729f810aa"](arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
* A list of nodes.
*/
class NodeList {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_nodelist_free"](ptr);
    }
}
/**
* A `TriangulationConfig` is the parameters that will affect the triangulation
* algorithm's output.
*/
class TriangulationConfig {

    static __wrap(ptr) {
        const obj = Object.create(TriangulationConfig.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_triangulationconfig_free"](ptr);
    }
    /**
    * The maximum number of vertices we want.
    * @returns {number}
    */
    get max_vertices() {
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_triangulationconfig_max_vertices"](this.ptr);
        return ret >>> 0;
    }
    /**
    * The maximum number of vertices we want.
    * @param {number} arg0
    */
    set max_vertices(arg0) {
        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_triangulationconfig_max_vertices"](this.ptr, arg0);
    }
    /**
    * The minimal strength of potential vertices.
    * @returns {number}
    */
    get edge_threshold() {
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_triangulationconfig_edge_threshold"](this.ptr);
        return ret;
    }
    /**
    * The minimal strength of potential vertices.
    * @param {number} arg0
    */
    set edge_threshold(arg0) {
        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_triangulationconfig_edge_threshold"](this.ptr, arg0);
    }
    /**
    * Low threshold for edge detection in preprocess step.  Must be greater than 0.0, and must
    * be strictly smaller than high_threshold, otherwise an error will be thrown when trying to
    * preprocess.
    *
    * Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    * edge detection.
    * @returns {number}
    */
    get low_threshold() {
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_triangulationconfig_low_threshold"](this.ptr);
        return ret;
    }
    /**
    * Low threshold for edge detection in preprocess step.  Must be greater than 0.0, and must
    * be strictly smaller than high_threshold, otherwise an error will be thrown when trying to
    * preprocess.
    *
    * Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    * edge detection.
    * @param {number} arg0
    */
    set low_threshold(arg0) {
        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_triangulationconfig_low_threshold"](this.ptr, arg0);
    }
    /**
    * High threshold for edge detection in preprocess step.  Must be less than 1140, and must
    * be strictly greater than threshold, otherwise an error will be thrown when trying to
    * preprocess.
    *
    * Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    * edge detection.
    * @returns {number}
    */
    get high_threshold() {
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_triangulationconfig_high_threshold"](this.ptr);
        return ret;
    }
    /**
    * High threshold for edge detection in preprocess step.  Must be less than 1140, and must
    * be strictly greater than threshold, otherwise an error will be thrown when trying to
    * preprocess.
    *
    * Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    * edge detection.
    * @param {number} arg0
    */
    set high_threshold(arg0) {
        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_triangulationconfig_high_threshold"](this.ptr, arg0);
    }
    /**
    * Creates a new `TriangulationConfig`.
    * @param {number} max_vertices
    * @param {number} edge_threshold
    * @param {number} low_threshold
    * @param {number} high_threshold
    * @returns {TriangulationConfig}
    */
    static new(max_vertices, edge_threshold, low_threshold, high_threshold) {
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["triangulationconfig_new"](max_vertices, edge_threshold, low_threshold, high_threshold);
        return TriangulationConfig.__wrap(ret);
    }
}
/**
* A WebAssembly-compatible struct to work with images.
*/
class WasmImage {

    static __wrap(ptr) {
        const obj = Object.create(WasmImage.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_wasmimage_free"](ptr);
    }
    /**
    * Creates a new `WasmImage`.
    * @param {string} url
    */
    constructor(url) {
        var ptr0 = passStringToWasm0(url, _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_new"](ptr0, len0);
        return WasmImage.__wrap(ret);
    }
    /**
    * Builds an image from a `WasmImage`.
    * @returns {Promise<any>}
    */
    build() {
        var ptr = this.ptr;
        this.ptr = 0;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_build"](ptr);
        return takeObject(ret);
    }
    /**
    * Returns a low-poly `WasmImage` via the triangulation method.
    *
    * This function is just a wrapper that calls 3 functions in this order for you:
    * - `preprocess_image` to preprocess the image.
    * - `node_detection` to detect nodes using the preprocessed image.
    * - `triangulation` to compute the triangulation of the node-detected image.
    *
    * You can instead call these functions manually if you wish to alter the steps in any way.
    * @param {TriangulationConfig} config
    * @returns {WasmImage}
    */
    wasm_triangulate_image(config) {
        var ptr = this.ptr;
        this.ptr = 0;
        _assertClass(config, TriangulationConfig);
        var ptr0 = config.ptr;
        config.ptr = 0;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_wasm_triangulate_image"](ptr, ptr0);
        return WasmImage.__wrap(ret);
    }
    /**
    * Triangulates points given a node list.
    * @param {WasmPreprocessedImage} preprocessed_image
    * @param {number} max_vertices
    * @param {number} edge_threshold
    * @returns {WasmImage}
    */
    wasm_triangulation(preprocessed_image, max_vertices, edge_threshold) {
        var ptr = this.ptr;
        this.ptr = 0;
        _assertClass(preprocessed_image, WasmPreprocessedImage);
        var ptr0 = preprocessed_image.ptr;
        preprocessed_image.ptr = 0;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_wasm_triangulation"](ptr, ptr0, max_vertices, edge_threshold);
        return WasmImage.__wrap(ret);
    }
}
/**
* A WebAssembly-compatible struct to work with pre-processed images.
*/
class WasmPreprocessedImage {

    static __wrap(ptr) {
        const obj = Object.create(WasmPreprocessedImage.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_wasmpreprocessedimage_free"](ptr);
    }
    /**
    * Creates a new `WasmPreprocessedImage`.
    * @param {WasmImage} image
    * @param {number} low_threshold
    * @param {number} high_threshold
    */
    constructor(image, low_threshold, high_threshold) {
        _assertClass(image, WasmImage);
        var ptr0 = image.ptr;
        image.ptr = 0;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmpreprocessedimage_wasm_preprocess_image"](ptr0, low_threshold, high_threshold);
        return WasmPreprocessedImage.__wrap(ret);
    }
}

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

const __wbg_instanceof_Response_f52c65c389890639 = function(arg0) {
    var ret = getObject(arg0) instanceof Response;
    return ret;
};

const __wbg_ok_c20643e0a45dc5a0 = function(arg0) {
    var ret = getObject(arg0).ok;
    return ret;
};

const __wbg_headers_6fafb2c7669a8ac5 = function(arg0) {
    var ret = getObject(arg0).headers;
    return addHeapObject(ret);
};

const __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7 = handleError(function(arg0, arg1) {
    var ret = new Response(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

const __wbg_arrayBuffer_0ba17dfaad804b6f = handleError(function(arg0) {
    var ret = getObject(arg0).arrayBuffer();
    return addHeapObject(ret);
});

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbg_newwithheaders_9e85f83ab45cfc21 = handleError(function(arg0) {
    var ret = new Headers(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_delete_a835445e3893b4e8 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).delete(getStringFromWasm0(arg1, arg2));
});

const __wbg_fetch_d7d53dd79ca28903 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).fetch(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    return ret;
};

const __wbg_getRandomValues_c73f06b5ed8b878d = handleError(function(arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
});

const __wbg_randomFillSync_5fa0a72035c7bfd9 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
});

const __wbg_static_accessor_MODULE_ff1e47f7076e0ee1 = function() {
    var ret = module;
    return addHeapObject(ret);
};

const __wbg_self_23b14d60c8dbf9da = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

const __wbg_require_1dab18ea211c4fa1 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

const __wbg_crypto_df96f3577c8a9bae = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

const __wbg_msCrypto_331efcdb9be40d7c = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

const __wbg_new_94a7dfa9529ec6e8 = function(arg0, arg1) {
    var ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_newnoargs_7c6bd521992b4022 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_call_951bd0c6d815d6f1 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

const __wbg_call_bf745b1758bb6693 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

const __wbg_new_ba07d0daa0e4677e = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

const __wbg_new_bb4e44ef089e45b4 = function(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_73(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        var ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

const __wbg_resolve_6e61e640925a0db9 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

const __wbg_then_dd3785597974798a = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_then_0f957e0f4c3e537a = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

const __wbg_self_6baf3a3aa7b63415 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

const __wbg_window_63fc4027b66c265b = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

const __wbg_globalThis_513fb247e8e4e6d2 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

const __wbg_global_b87245cd886d7113 = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

const __wbg_buffer_3f12a1c608c6d04e = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

const __wbg_newwithbyteoffsetandlength_4c51342f87299c5a = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_new_c6c0228e6d22a2f9 = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

const __wbg_set_b91afac9fd216d99 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

const __wbg_length_c645e7c02233b440 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

const __wbg_newwithlength_a429e08f8a8fe4b3 = function(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

const __wbg_subarray_02e2fcfa6b285cb2 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_set_9bdd413385146137 = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
});

const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const __wbindgen_memory = function() {
    var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"];
    return addHeapObject(ret);
};

const __wbindgen_closure_wrapper502 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 52, __wbg_adapter_18);
    return addHeapObject(ret);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./polify/polify_bg.wasm":
/*!*******************************!*\
  !*** ./polify/polify_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_wasmimage_free, wasmimage_new, wasmimage_build, wasmimage_wasm_triangulate_image, wasmimage_wasm_triangulation, __wbg_wasmpreprocessedimage_free, wasmpreprocessedimage_wasm_preprocess_image, __wbg_triangulationconfig_free, __wbg_get_triangulationconfig_max_vertices, __wbg_set_triangulationconfig_max_vertices, __wbg_get_triangulationconfig_edge_threshold, __wbg_set_triangulationconfig_edge_threshold, __wbg_get_triangulationconfig_low_threshold, __wbg_set_triangulationconfig_low_threshold, __wbg_get_triangulationconfig_high_threshold, __wbg_set_triangulationconfig_high_threshold, triangulationconfig_new, __wbg_nodelist_free, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h284d827442cf05be, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__hdd3c7e3729f810aa */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./polify_bg.js */ "./polify/polify_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wb2xpZnkvcG9saWZ5LmpzIiwid2VicGFjazovLy8uL3BvbGlmeS9wb2xpZnlfYmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7Ozs7Ozs7Ozs7Ozs7QUNBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDOztBQUV6Qzs7QUFFQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbURBQW1ELCtCQUErQjs7QUFFbEY7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxzREFBVztBQUNwRiw4Q0FBOEMsc0RBQVc7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSTtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxJQUFJLFlBQVksSUFBSSxVQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsc0RBQVc7QUFDcEYsOENBQThDLHNEQUFXO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsbUVBQXdCOztBQUV4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRLQUFpSTtBQUNySTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxZQUFZLG9FQUF5QjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtHQUFvRTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtRUFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsOEVBQW1DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCLDBGQUErQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsUUFBUSwwRkFBK0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0IsNEZBQWlEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxRQUFRLDRGQUFpRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0IsMkZBQWdEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsUUFBUSwyRkFBZ0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCLDRGQUFpRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFFBQVEsNEZBQWlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQix1RUFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsb0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsMENBQTBDLGlFQUFzQixFQUFFLGtFQUF1QjtBQUN6RjtBQUNBLGtCQUFrQiw2REFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0RBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0ZBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEMsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEVBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGdGQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJGQUFnRDtBQUNsRTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxzQ0FBc0MsaUVBQXNCLEVBQUUsa0VBQXVCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLGNBQWMsc0RBQVc7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmJvb3RzdHJhcC53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9wb2xpZnlfYmcud2FzbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcG9saWZ5X2JnLmpzXCI7IiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3BvbGlmeV9iZy53YXNtJztcblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMikuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gZGVidWdTdHJpbmcodmFsKSB7XG4gICAgLy8gcHJpbWl0aXZlIHR5cGVzXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHwgdmFsID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICBgJHt2YWx9YDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsfVwiYDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB2YWwuZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYFN5bWJvbCgke2Rlc2NyaXB0aW9ufSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbC5uYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYEZ1bmN0aW9uKCR7bmFtZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG9iamVjdHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGxldCBkZWJ1ZyA9ICdbJztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRlYnVnICs9IGRlYnVnU3RyaW5nKHZhbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSAnLCAnICsgZGVidWdTdHJpbmcodmFsW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyArPSAnXSc7XG4gICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICB9XG4gICAgLy8gVGVzdCBmb3IgYnVpbHQtaW5cbiAgICBjb25zdCBidWlsdEluTWF0Y2hlcyA9IC9cXFtvYmplY3QgKFteXFxdXSspXFxdLy5leGVjKHRvU3RyaW5nLmNhbGwodmFsKSk7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBpZiAoYnVpbHRJbk1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc05hbWUgPSBidWlsdEluTWF0Y2hlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWlsZWQgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkICdbb2JqZWN0IENsYXNzTmFtZV0nXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgPT0gJ09iamVjdCcpIHtcbiAgICAgICAgLy8gd2UncmUgYSB1c2VyIGRlZmluZWQgY2xhc3Mgb3IgT2JqZWN0XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IGF2b2lkcyBwcm9ibGVtcyB3aXRoIGN5Y2xlcywgYW5kIGlzIGdlbmVyYWxseSBtdWNoXG4gICAgICAgIC8vIGVhc2llciB0aGFuIGxvb3BpbmcgdGhyb3VnaCBvd25Qcm9wZXJ0aWVzIG9mIGB2YWxgLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlcnJvcnNcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbC5uYW1lfTogJHt2YWwubWVzc2FnZX1cXG4ke3ZhbC5zdGFja31gO1xuICAgIH1cbiAgICAvLyBUT0RPIHdlIGNvdWxkIHRlc3QgZm9yIG1vcmUgdGhpbmdzIGhlcmUsIGxpa2UgYFNldGBzIGFuZCBgTWFwYHMuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgZHRvciwgZikge1xuICAgIGNvbnN0IHN0YXRlID0geyBhOiBhcmcwLCBiOiBhcmcxLCBjbnQ6IDEsIGR0b3IgfTtcbiAgICBjb25zdCByZWFsID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gRmlyc3QgdXAgd2l0aCBhIGNsb3N1cmUgd2UgaW5jcmVtZW50IHRoZSBpbnRlcm5hbCByZWZlcmVuY2VcbiAgICAgICAgLy8gY291bnQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBSdXN0IGNsb3N1cmUgZW52aXJvbm1lbnQgd29uJ3RcbiAgICAgICAgLy8gYmUgZGVhbGxvY2F0ZWQgd2hpbGUgd2UncmUgaW52b2tpbmcgaXQuXG4gICAgICAgIHN0YXRlLmNudCsrO1xuICAgICAgICBjb25zdCBhID0gc3RhdGUuYTtcbiAgICAgICAgc3RhdGUuYSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZihhLCBzdGF0ZS5iLCAuLi5hcmdzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICgtLXN0YXRlLmNudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMi5nZXQoc3RhdGUuZHRvcikoYSwgc3RhdGUuYik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlYWwub3JpZ2luYWwgPSBzdGF0ZTtcblxuICAgIHJldHVybiByZWFsO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8xOChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgd2FzbS5fZHluX2NvcmVfX29wc19fZnVuY3Rpb25fX0ZuTXV0X19BX19fX091dHB1dF9fX1JfYXNfd2FzbV9iaW5kZ2VuX19jbG9zdXJlX19XYXNtQ2xvc3VyZV9fX2Rlc2NyaWJlX19pbnZva2VfX2gyODRkODI3NDQyY2YwNWJlKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMikpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0Q2xhc3MoaW5zdGFuY2UsIGtsYXNzKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBrbGFzcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBleHBlY3RlZCBpbnN0YW5jZSBvZiAke2tsYXNzLm5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5wdHI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGFkZEhlYXBPYmplY3QoZSkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyAxLCBwdHIgLyAxICsgbGVuKTtcbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfNzMoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHdhc20ud2FzbV9iaW5kZ2VuX19jb252ZXJ0X19jbG9zdXJlc19faW52b2tlMl9tdXRfX2hkZDNjN2UzNzI5ZjgxMGFhKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMiksIGFkZEhlYXBPYmplY3QoYXJnMykpO1xufVxuXG4vKipcbiogQSBsaXN0IG9mIG5vZGVzLlxuKi9cbmV4cG9ydCBjbGFzcyBOb2RlTGlzdCB7XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfbm9kZWxpc3RfZnJlZShwdHIpO1xuICAgIH1cbn1cbi8qKlxuKiBBIGBUcmlhbmd1bGF0aW9uQ29uZmlnYCBpcyB0aGUgcGFyYW1ldGVycyB0aGF0IHdpbGwgYWZmZWN0IHRoZSB0cmlhbmd1bGF0aW9uXG4qIGFsZ29yaXRobSdzIG91dHB1dC5cbiovXG5leHBvcnQgY2xhc3MgVHJpYW5ndWxhdGlvbkNvbmZpZyB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFRyaWFuZ3VsYXRpb25Db25maWcucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ190cmlhbmd1bGF0aW9uY29uZmlnX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgbWF4X3ZlcnRpY2VzKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0ID4+PiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBtYXhfdmVydGljZXMoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX21heF92ZXJ0aWNlcyh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBlZGdlX3RocmVzaG9sZCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgZWRnZV90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGxvd190aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIExvdyB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgZ3JlYXRlciB0aGFuIDAuMCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBoaWdoX3RocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbG93X3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbG93X3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogSGlnaCB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgbGVzcyB0aGFuIDExNDAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBncmVhdGVyIHRoYW4gdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBoaWdoX3RocmVzaG9sZCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfaGlnaF90aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgaGlnaF90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBUcmlhbmd1bGF0aW9uQ29uZmlnYC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1RyaWFuZ3VsYXRpb25Db25maWd9XG4gICAgKi9cbiAgICBzdGF0aWMgbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLnRyaWFuZ3VsYXRpb25jb25maWdfbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFRyaWFuZ3VsYXRpb25Db25maWcuX193cmFwKHJldCk7XG4gICAgfVxufVxuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIGltYWdlcy5cbiovXG5leHBvcnQgY2xhc3MgV2FzbUltYWdlIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoV2FzbUltYWdlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfd2FzbWltYWdlX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBXYXNtSW1hZ2VgLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAodXJsLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2VfbmV3KHB0cjAsIGxlbjApO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEJ1aWxkcyBhbiBpbWFnZSBmcm9tIGEgYFdhc21JbWFnZWAuXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHZhciBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2VfYnVpbGQocHRyKTtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbG93LXBvbHkgYFdhc21JbWFnZWAgdmlhIHRoZSB0cmlhbmd1bGF0aW9uIG1ldGhvZC5cbiAgICAqXG4gICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGp1c3QgYSB3cmFwcGVyIHRoYXQgY2FsbHMgMyBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlciBmb3IgeW91OlxuICAgICogLSBgcHJlcHJvY2Vzc19pbWFnZWAgdG8gcHJlcHJvY2VzcyB0aGUgaW1hZ2UuXG4gICAgKiAtIGBub2RlX2RldGVjdGlvbmAgdG8gZGV0ZWN0IG5vZGVzIHVzaW5nIHRoZSBwcmVwcm9jZXNzZWQgaW1hZ2UuXG4gICAgKiAtIGB0cmlhbmd1bGF0aW9uYCB0byBjb21wdXRlIHRoZSB0cmlhbmd1bGF0aW9uIG9mIHRoZSBub2RlLWRldGVjdGVkIGltYWdlLlxuICAgICpcbiAgICAqIFlvdSBjYW4gaW5zdGVhZCBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBtYW51YWxseSBpZiB5b3Ugd2lzaCB0byBhbHRlciB0aGUgc3RlcHMgaW4gYW55IHdheS5cbiAgICAqIEBwYXJhbSB7VHJpYW5ndWxhdGlvbkNvbmZpZ30gY29uZmlnXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShjb25maWcpIHtcbiAgICAgICAgdmFyIHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhjb25maWcsIFRyaWFuZ3VsYXRpb25Db25maWcpO1xuICAgICAgICB2YXIgcHRyMCA9IGNvbmZpZy5wdHI7XG4gICAgICAgIGNvbmZpZy5wdHIgPSAwO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShwdHIsIHB0cjApO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRyaWFuZ3VsYXRlcyBwb2ludHMgZ2l2ZW4gYSBub2RlIGxpc3QuXG4gICAgKiBAcGFyYW0ge1dhc21QcmVwcm9jZXNzZWRJbWFnZX0gcHJlcHJvY2Vzc2VkX2ltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtXYXNtSW1hZ2V9XG4gICAgKi9cbiAgICB3YXNtX3RyaWFuZ3VsYXRpb24ocHJlcHJvY2Vzc2VkX2ltYWdlLCBtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuICAgICAgICBfYXNzZXJ0Q2xhc3MocHJlcHJvY2Vzc2VkX2ltYWdlLCBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UpO1xuICAgICAgICB2YXIgcHRyMCA9IHByZXByb2Nlc3NlZF9pbWFnZS5wdHI7XG4gICAgICAgIHByZXByb2Nlc3NlZF9pbWFnZS5wdHIgPSAwO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0aW9uKHB0ciwgcHRyMCwgbWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiBXYXNtSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxufVxuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIHByZS1wcm9jZXNzZWQgaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2Uge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21QcmVwcm9jZXNzZWRJbWFnZWAuXG4gICAgKiBAcGFyYW0ge1dhc21JbWFnZX0gaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MoaW1hZ2UsIFdhc21JbWFnZSk7XG4gICAgICAgIHZhciBwdHIwID0gaW1hZ2UucHRyO1xuICAgICAgICBpbWFnZS5wdHIgPSAwO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtcHJlcHJvY2Vzc2VkaW1hZ2Vfd2FzbV9wcmVwcm9jZXNzX2ltYWdlKHB0cjAsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFdhc21QcmVwcm9jZXNzZWRJbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fc3RyaW5nX25ldyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfaW5zdGFuY2VvZl9SZXNwb25zZV9mNTJjNjVjMzg5ODkwNjM5ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBSZXNwb25zZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX29rX2MyMDY0M2UwYTQ1ZGM1YTAgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5vaztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2hlYWRlcnNfNmZhZmIyYzc2NjlhOGFjNSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmhlYWRlcnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF8zYmQ0YTIxMDJmYzAzYWE3ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgUmVzcG9uc2UoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2FycmF5QnVmZmVyXzBiYTE3ZGZhYWQ4MDRiNmYgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5hcnJheUJ1ZmZlcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGhlYWRlcnNfOWU4NWY4M2FiNDVjZmMyMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gbmV3IEhlYWRlcnMoZ2V0T2JqZWN0KGFyZzApKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19kZWxldGVfYTgzNTQ0NWUzODkzYjRlOCA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZGVsZXRlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2ZldGNoX2Q3ZDUzZGQ3OWNhMjg5MDMgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5mZXRjaChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9jYl9kcm9wID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIGNvbnN0IG9iaiA9IHRha2VPYmplY3QoYXJnMCkub3JpZ2luYWw7XG4gICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgIG9iai5hID0gMDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciByZXQgPSBmYWxzZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2dldFJhbmRvbVZhbHVlc19jNzNmMDZiNWVkOGI4NzhkID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5nZXRSYW5kb21WYWx1ZXMoZ2V0T2JqZWN0KGFyZzEpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfcmFuZG9tRmlsbFN5bmNfNWZhMGE3MjAzNWM3YmZkOSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkucmFuZG9tRmlsbFN5bmMoZ2V0QXJyYXlVOEZyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9NT0RVTEVfZmYxZTQ3ZjcwNzZlMGVlMSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBtb2R1bGU7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZWxmXzIzYjE0ZDYwYzhkYmY5ZGEgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3JlcXVpcmVfMWRhYjE4ZWEyMTFjNGZhMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnJlcXVpcmUoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19jcnlwdG9fZGY5NmYzNTc3YzhhOWJhZSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX21zQ3J5cHRvXzMzMWVmY2RiOWJlNDBkN2MgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5tc0NyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5faXNfdW5kZWZpbmVkID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld185NGE3ZGZhOTUyOWVjNmU4ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld25vYXJnc183YzZiZDUyMTk5MmI0MDIyID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NhbGxfOTUxYmQwYzZkODE1ZDZmMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19jYWxsX2JmNzQ1YjE3NThiYjY2OTMgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfYmEwN2QwZGFhMGU0Njc3ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfYmI0ZTQ0ZWYwODllNDViNCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUwID0ge2E6IGFyZzAsIGI6IGFyZzF9O1xuICAgICAgICB2YXIgY2IwID0gKGFyZzAsIGFyZzEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0ZTAuYTtcbiAgICAgICAgICAgIHN0YXRlMC5hID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2JnX2FkYXB0ZXJfNzMoYSwgc3RhdGUwLmIsIGFyZzAsIGFyZzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTAuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShjYjApO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlMC5hID0gc3RhdGUwLmIgPSAwO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19yZXNvbHZlXzZlNjFlNjQwOTI1YTBkYjkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IFByb21pc2UucmVzb2x2ZShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfdGhlbl9kZDM3ODU1OTc5NzQ3OThhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkudGhlbihnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfdGhlbl8wZjk1N2UwZjRjM2U1MzdhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkudGhlbihnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZWxmXzZiYWYzYTNhYTdiNjM0MTUgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3dpbmRvd182M2ZjNDAyN2I2NmMyNjViID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHdpbmRvdy53aW5kb3c7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZ2xvYmFsVGhpc181MTNmYjI0N2U4ZTRlNmQyID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19nbG9iYWxfYjg3MjQ1Y2Q4ODZkNzExMyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBnbG9iYWwuZ2xvYmFsO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2J1ZmZlcl8zZjEyYTFjNjA4YzZkMDRlID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfNGM1MTM0MmY4NzI5OWM1YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApLCBhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19jNmMwMjI4ZTZkMjJhMmY5ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2V0X2I5MWFmYWM5ZmQyMTZkOTkgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnNldChnZXRPYmplY3QoYXJnMSksIGFyZzIgPj4+IDApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2xlbmd0aF9jNjQ1ZTdjMDIyMzNiNDQwID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGxlbmd0aF9hNDI5ZTA4ZjhhOGZlNGIzID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShhcmcwID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N1YmFycmF5XzAyZTJmY2ZhNmIyODVjYjIgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5zdWJhcnJheShhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NldF85YmRkNDEzMzg1MTQ2MTM3ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBSZWZsZWN0LnNldChnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gcmV0O1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2RlYnVnX3N0cmluZyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZGVidWdTdHJpbmcoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIwO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9tZW1vcnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gd2FzbS5tZW1vcnk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjUwMiA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgNTIsIF9fd2JnX2FkYXB0ZXJfMTgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9