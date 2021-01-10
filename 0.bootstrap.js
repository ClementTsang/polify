(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polify */ "./polify/polify.js");
/* harmony import */ var _public_ulrich_mareli_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/ulrich-mareli.jpg */ "./public/ulrich-mareli.jpg");
// @ts-ignore

// @ts-ignore

var PolifyDemo = /** @class */ (function () {
    function PolifyDemo() {
        var _this = this;
        this.isUsingPaste = true;
        this.isProcessing = false;
        this.polyObjectUrl = null;
        this.imageObjectUrl = _public_ulrich_mareli_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
        var pasteImageTab = document.getElementById("paste-image");
        var uploadImageTab = document.getElementById("upload-image");
        var pasteImageAction = document.getElementById("paste-image-action");
        var uploadImageAction = document.getElementById("upload-image-action");
        pasteImageTab.addEventListener("click", function () {
            pasteImageTab.classList.add("is-active");
            uploadImageTab.classList.remove("is-active");
            uploadImageAction.classList.add("is-hidden");
            pasteImageAction.classList.remove("is-hidden");
        });
        uploadImageTab.addEventListener("click", function () {
            uploadImageTab.classList.add("is-active");
            pasteImageTab.classList.remove("is-active");
            pasteImageAction.classList.add("is-hidden");
            uploadImageAction.classList.remove("is-hidden");
        });
        var uploadImageActionInput = document.querySelector("#upload-image-action input[type=file]");
        var displayedImage = document.getElementById("displayed-image");
        displayedImage.src = this.imageObjectUrl;
        uploadImageActionInput.onchange = function () {
            if (uploadImageActionInput.files.length > 0) {
                var file = uploadImageActionInput.files[0];
                document.querySelector("#upload-image-action .file-name").textContent =
                    file.name;
                if (_this.imageObjectUrl !== null) {
                    URL.revokeObjectURL(_this.imageObjectUrl);
                }
                _this.imageObjectUrl = window.URL.createObjectURL(file);
                displayedImage.src = _this.imageObjectUrl;
                // Call polify here...
            }
        };
        var pasteImageButton = document.querySelector("#paste-image-action button");
        var pasteImageInput = document.querySelector("#paste-image-action input");
        pasteImageButton.addEventListener("click", function () {
            if (pasteImageInput != null &&
                pasteImageInput.value != null &&
                pasteImageInput.value.length > 0) {
                if (_this.imageObjectUrl !== null) {
                    URL.revokeObjectURL(_this.imageObjectUrl);
                }
                _this.imageObjectUrl = pasteImageInput.value;
                displayedImage.src = _this.imageObjectUrl;
            }
            // Call polify here...
        });
        pasteImageInput.addEventListener("input", function () {
            if (pasteImageInput.value.length > 0) {
                pasteImageButton.removeAttribute("disabled");
            }
            else {
                pasteImageButton.setAttribute("disabled", "");
            }
        });
        pasteImageInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if (pasteImageInput != null &&
                    pasteImageInput.value != null &&
                    pasteImageInput.value.length > 0) {
                    if (_this.imageObjectUrl !== null) {
                        URL.revokeObjectURL(_this.imageObjectUrl);
                    }
                    _this.imageObjectUrl = pasteImageInput.value;
                    displayedImage.src = _this.imageObjectUrl;
                }
            }
        });
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        var highThresholdSlider = document.getElementById("high-threshold");
        var lowThresholdSlider = document.getElementById("low-threshold");
        maxVerticesSlider.onmouseup = function () {
            var newValue = parseInt(maxVerticesSlider.value);
        };
        edgeThresholdSlider.onmouseup = function () {
            var newValue = parseFloat(edgeThresholdSlider.value);
        };
        highThresholdSlider.onmouseup = function () {
            var newValue = parseFloat(highThresholdSlider.value);
        };
        lowThresholdSlider.onmouseup = function () {
            var newValue = parseFloat(lowThresholdSlider.value);
        };
        this.polifyConfig = polify__WEBPACK_IMPORTED_MODULE_0__["TriangulationConfig"].new(parseFloat(maxVerticesSlider.value), parseFloat(edgeThresholdSlider.value), parseFloat(lowThresholdSlider.value), parseFloat(highThresholdSlider.value));
        var imageUrl = document
            .getElementById("displayed-image")
            .getAttribute("src");
        console.log("imageUrl: " + imageUrl);
        var workingImage = new polify__WEBPACK_IMPORTED_MODULE_0__["WorkingImage"](imageUrl);
        polify__WEBPACK_IMPORTED_MODULE_0__["wasm_triangulate_image"](workingImage, this.polifyConfig)
            .then(function (resp) {
            resp.blob().then(function (blob) {
                _this.polyObjectUrl = URL.createObjectURL(blob);
            });
        })
            .catch(function (err) {
            console.error("Error while triangulating: " + err);
        });
        var polifySwitch = document.getElementById("polify-switch");
        polifySwitch.addEventListener("click", function () {
            if (polifySwitch.hasAttribute("checked")) {
                polifySwitch.removeAttribute("checked");
                maxVerticesSlider.setAttribute("disabled", "disabled");
                edgeThresholdSlider.setAttribute("disabled", "disabled");
                highThresholdSlider.setAttribute("disabled", "disabled");
                lowThresholdSlider.setAttribute("disabled", "disabled");
                displayedImage.src = _this.imageObjectUrl;
            }
            else {
                polifySwitch.setAttribute("checked", "checked");
                maxVerticesSlider.removeAttribute("disabled");
                edgeThresholdSlider.removeAttribute("disabled");
                highThresholdSlider.removeAttribute("disabled");
                lowThresholdSlider.removeAttribute("disabled");
                displayedImage.src = _this.polyObjectUrl;
            }
        });
    }
    return PolifyDemo;
}());
// @ts-ignore
bulmaSlider.attach();
new PolifyDemo();


/***/ }),

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
/*! exports provided: wasm_triangulate_image, NodeList, TriangulationConfig, WorkingImage, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbindgen_object_clone_ref, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polify_bg.wasm */ "./polify/polify_bg.wasm");
/* harmony import */ var _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polify_bg.js */ "./polify/polify_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wasm_triangulate_image", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["wasm_triangulate_image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["NodeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriangulationConfig", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["TriangulationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkingImage", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["WorkingImage"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper472", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper472"]; });




/***/ }),

/***/ "./polify/polify_bg.js":
/*!*****************************!*\
  !*** ./polify/polify_bg.js ***!
  \*****************************/
/*! exports provided: wasm_triangulate_image, NodeList, TriangulationConfig, WorkingImage, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbindgen_object_clone_ref, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasm_triangulate_image", function() { return wasm_triangulate_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return NodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangulationConfig", function() { return TriangulationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingImage", function() { return WorkingImage; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper472", function() { return __wbindgen_closure_wrapper472; });
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
/**
* Returns a low-poly [`DynamicImage`] via the triangulation method.
*
* This function is just a wrapper that calls 3 functions in this order for you:
* - [`preprocess_image`] to preprocess the image.
* - [`node_detection`] to detect nodes using the preprocessed image.
* - [`triangulation`] to compute the triangulation of the node-detected image.
*
* You can instead call these functions manually if you wish to alter the steps in any way.
* @param {WorkingImage} image
* @param {TriangulationConfig} config
* @returns {Promise<any>}
*/
function wasm_triangulate_image(image, config) {
    _assertClass(image, WorkingImage);
    var ptr0 = image.ptr;
    image.ptr = 0;
    _assertClass(config, TriangulationConfig);
    var ptr1 = config.ptr;
    config.ptr = 0;
    var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasm_triangulate_image"](ptr0, ptr1);
    return takeObject(ret);
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
function __wbg_adapter_71(arg0, arg1, arg2, arg3) {
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
class WorkingImage {

    static __wrap(ptr) {
        const obj = Object.create(WorkingImage.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_workingimage_free"](ptr);
    }
    /**
    * Creates a new [`WorkingImage`].
    * @param {string} url
    */
    constructor(url) {
        var ptr0 = passStringToWasm0(url, _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["workingimage_new"](ptr0, len0);
        return WorkingImage.__wrap(ret);
    }
    /**
    * Builds an image from a [`WorkingImage`].
    * @returns {Promise<any>}
    */
    build() {
        var ptr = this.ptr;
        this.ptr = 0;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["workingimage_build"](ptr);
        return takeObject(ret);
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
                return __wbg_adapter_71(a, state0.b, arg0, arg1);
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

const __wbindgen_closure_wrapper472 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_18);
    return addHeapObject(ret);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./polify/polify_bg.wasm":
/*!*******************************!*\
  !*** ./polify/polify_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_triangulationconfig_free, __wbg_get_triangulationconfig_max_vertices, __wbg_set_triangulationconfig_max_vertices, __wbg_get_triangulationconfig_edge_threshold, __wbg_set_triangulationconfig_edge_threshold, __wbg_get_triangulationconfig_low_threshold, __wbg_set_triangulationconfig_low_threshold, __wbg_get_triangulationconfig_high_threshold, __wbg_set_triangulationconfig_high_threshold, triangulationconfig_new, __wbg_nodelist_free, __wbg_workingimage_free, workingimage_new, workingimage_build, wasm_triangulate_image, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h284d827442cf05be, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__hdd3c7e3729f810aa */
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

/***/ }),

/***/ "./public/ulrich-mareli.jpg":
/*!**********************************!*\
  !*** ./public/ulrich-mareli.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ulrich-mareli.jpg");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wb2xpZnkvcG9saWZ5LmpzIiwid2VicGFjazovLy8uL3BvbGlmeS9wb2xpZnlfYmcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3VscmljaC1tYXJlbGkuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFhO0FBQ29CO0FBQ2pDLGFBQWE7QUFDeUM7QUFFdEQ7SUFPRTtRQUFBLGlCQTRLQztRQTNLQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLGlFQUFZLENBQUM7UUFFbkMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9ELElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXpFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDdEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFN0MsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUN2QyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU1QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLHNCQUFzQixHQUFxQixRQUFRLENBQUMsYUFBYSxDQUNyRSx1Q0FBdUMsQ0FDeEMsQ0FBQztRQUNGLElBQU0sY0FBYyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUM5RCxpQkFBaUIsQ0FDRSxDQUFDO1FBQ3RCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUV6QyxzQkFBc0IsQ0FBQyxRQUFRLEdBQUc7WUFDaEMsSUFBSSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0MsSUFBTSxJQUFJLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsV0FBVztvQkFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFWixJQUFJLEtBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO29CQUNoQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsY0FBYyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2dCQUV6QyxzQkFBc0I7YUFDdkI7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQzdDLDRCQUE0QixDQUM3QixDQUFDO1FBQ0YsSUFBTSxlQUFlLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQzlELDJCQUEyQixDQUM1QixDQUFDO1FBQ0YsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3pDLElBQ0UsZUFBZSxJQUFJLElBQUk7Z0JBQ3ZCLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDN0IsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNoQztnQkFDQSxJQUFJLEtBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO29CQUNoQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxjQUFjLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7YUFDMUM7WUFFRCxzQkFBc0I7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7WUFDOUMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUNFLGVBQWUsSUFBSSxJQUFJO29CQUN2QixlQUFlLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQzdCLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDaEM7b0JBQ0EsSUFBSSxLQUFJLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTt3QkFDaEMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzFDO29CQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztvQkFDNUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2lCQUMxQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLGlCQUFpQixHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNqRSxjQUFjLENBQ0ssQ0FBQztRQUN0QixJQUFNLG1CQUFtQixHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNuRSxnQkFBZ0IsQ0FDRyxDQUFDO1FBQ3RCLElBQU0sbUJBQW1CLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQ25FLGdCQUFnQixDQUNHLENBQUM7UUFDdEIsSUFBTSxrQkFBa0IsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDbEUsZUFBZSxDQUNJLENBQUM7UUFFdEIsaUJBQWlCLENBQUMsU0FBUyxHQUFHO1lBQzVCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUM7UUFFRixtQkFBbUIsQ0FBQyxTQUFTLEdBQUc7WUFDOUIsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLG1CQUFtQixDQUFDLFNBQVMsR0FBRztZQUM5QixJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO1FBRUYsa0JBQWtCLENBQUMsU0FBUyxHQUFHO1lBQzdCLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLDBEQUEwQixDQUFDLEdBQUcsQ0FDaEQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUNuQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQ3JDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFDcEMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUN0QyxDQUFDO1FBRUYsSUFBTSxRQUFRLEdBQVcsUUFBUTthQUM5QixjQUFjLENBQUMsaUJBQWlCLENBQUM7YUFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQU0sWUFBWSxHQUF3QixJQUFJLG1EQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLDZEQUN5QixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxVQUFDLElBQWM7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ3BCLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNyQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXhDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZELG1CQUFtQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3pELG1CQUFtQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3pELGtCQUFrQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRXhELGNBQWMsQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFaEQsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hELG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUvQyxjQUFjLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7QUFFRCxhQUFhO0FBQ2IsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JCLElBQUksVUFBVSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQzdMakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7Ozs7Ozs7Ozs7Ozs7QUNBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxzQ0FBc0MsaUVBQXNCLEVBQUUsa0VBQXVCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLGNBQWMsc0RBQVc7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xwQkE7QUFBZSxvRkFBdUIsc0JBQXNCLEUiLCJmaWxlIjoiMC5ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBwb2xpZnkgZnJvbSBcInBvbGlmeVwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGRlZmF1bHRJbWFnZSBmcm9tIFwiLi9wdWJsaWMvdWxyaWNoLW1hcmVsaS5qcGdcIjtcblxuY2xhc3MgUG9saWZ5RGVtbyB7XG4gIGlzVXNpbmdQYXN0ZTogYm9vbGVhbjtcbiAgaXNQcm9jZXNzaW5nOiBib29sZWFuO1xuICBwb2xpZnlDb25maWc6IHBvbGlmeS5Ucmlhbmd1bGF0aW9uQ29uZmlnO1xuICBpbWFnZU9iamVjdFVybDogc3RyaW5nIHwgbnVsbDtcbiAgcG9seU9iamVjdFVybDogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzVXNpbmdQYXN0ZSA9IHRydWU7XG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvbHlPYmplY3RVcmwgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBkZWZhdWx0SW1hZ2U7XG5cbiAgICBjb25zdCBwYXN0ZUltYWdlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXN0ZS1pbWFnZVwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlXCIpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2UtYWN0aW9uXCIpO1xuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWQtaW1hZ2UtYWN0aW9uXCIpO1xuXG4gICAgcGFzdGVJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgIHBhc3RlSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIHVwbG9hZEltYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGxvYWRJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICB1cGxvYWRJbWFnZUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIGlucHV0W3R5cGU9ZmlsZV1cIlxuICAgICk7XG4gICAgY29uc3QgZGlzcGxheWVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZGlzcGxheWVkLWltYWdlXCJcbiAgICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcblxuICAgIHVwbG9hZEltYWdlQWN0aW9uSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAodXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB1cGxvYWRJbWFnZUFjdGlvbklucHV0LmZpbGVzWzBdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwbG9hZC1pbWFnZS1hY3Rpb24gLmZpbGUtbmFtZVwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgZmlsZS5uYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICAgICAgLy8gQ2FsbCBwb2xpZnkgaGVyZS4uLlxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwYXN0ZUltYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Bhc3RlLWltYWdlLWFjdGlvbiBidXR0b25cIlxuICAgICk7XG4gICAgY29uc3QgcGFzdGVJbWFnZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Bhc3RlLWltYWdlLWFjdGlvbiBpbnB1dFwiXG4gICAgKTtcbiAgICBwYXN0ZUltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhc3RlSW1hZ2VJbnB1dCAhPSBudWxsICYmXG4gICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZSAhPSBudWxsICYmXG4gICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VPYmplY3RVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuaW1hZ2VPYmplY3RVcmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBwYXN0ZUltYWdlSW5wdXQudmFsdWU7XG4gICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGwgcG9saWZ5IGhlcmUuLi5cbiAgICB9KTtcbiAgICBwYXN0ZUltYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXN0ZUltYWdlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFzdGVJbWFnZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwYXN0ZUltYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZSAhPSBudWxsICYmXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW1hZ2VPYmplY3RVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBwYXN0ZUltYWdlSW5wdXQudmFsdWU7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWF4VmVydGljZXNTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LXZlcnRpY2VzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZWRnZVRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJlZGdlLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGhpZ2hUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaGlnaC10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsb3dUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibG93LXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgbWF4VmVydGljZXNTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUludChtYXhWZXJ0aWNlc1NsaWRlci52YWx1ZSk7XG4gICAgfTtcblxuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KGVkZ2VUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICBoaWdoVGhyZXNob2xkU2xpZGVyLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChoaWdoVGhyZXNob2xkU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgbG93VGhyZXNob2xkU2xpZGVyLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChsb3dUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICB0aGlzLnBvbGlmeUNvbmZpZyA9IHBvbGlmeS5Ucmlhbmd1bGF0aW9uQ29uZmlnLm5ldyhcbiAgICAgIHBhcnNlRmxvYXQobWF4VmVydGljZXNTbGlkZXIudmFsdWUpLFxuICAgICAgcGFyc2VGbG9hdChlZGdlVGhyZXNob2xkU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQobG93VGhyZXNob2xkU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQoaGlnaFRocmVzaG9sZFNsaWRlci52YWx1ZSlcbiAgICApO1xuXG4gICAgY29uc3QgaW1hZ2VVcmw6IHN0cmluZyA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5ZWQtaW1hZ2VcIilcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZVVybDogXCIgKyBpbWFnZVVybCk7XG5cbiAgICBjb25zdCB3b3JraW5nSW1hZ2U6IHBvbGlmeS5Xb3JraW5nSW1hZ2UgPSBuZXcgcG9saWZ5LldvcmtpbmdJbWFnZShpbWFnZVVybCk7XG4gICAgcG9saWZ5XG4gICAgICAud2FzbV90cmlhbmd1bGF0ZV9pbWFnZSh3b3JraW5nSW1hZ2UsIHRoaXMucG9saWZ5Q29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3A6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc3AuYmxvYigpLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgICAgICB0aGlzLnBvbHlPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHRyaWFuZ3VsYXRpbmc6IFwiICsgZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgcG9saWZ5U3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2xpZnktc3dpdGNoXCIpO1xuICAgIHBvbGlmeVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBvbGlmeVN3aXRjaC5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG4gICAgICAgIHBvbGlmeVN3aXRjaC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xuXG4gICAgICAgIG1heFZlcnRpY2VzU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgaGlnaFRocmVzaG9sZFNsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICBsb3dUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblxuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9saWZ5U3dpdGNoLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuXG4gICAgICAgIG1heFZlcnRpY2VzU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBoaWdoVGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBsb3dUaHJlc2hvbGRTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5wb2x5T2JqZWN0VXJsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIEB0cy1pZ25vcmVcbmJ1bG1hU2xpZGVyLmF0dGFjaCgpO1xubmV3IFBvbGlmeURlbW8oKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3BvbGlmeV9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wb2xpZnlfYmcuanNcIjsiLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vcG9saWZ5X2JnLndhc20nO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIGAke3ZhbH1gO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYFwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgYHZhbGAuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgSlNPTi5zdHJpbmdpZnkodmFsKSArICcpJztcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVycm9yc1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gYCR7dmFsLm5hbWV9OiAke3ZhbC5tZXNzYWdlfVxcbiR7dmFsLnN0YWNrfWA7XG4gICAgfVxuICAgIC8vIFRPRE8gd2UgY291bGQgdGVzdCBmb3IgbW9yZSB0aGluZ3MgaGVyZSwgbGlrZSBgU2V0YHMgYW5kIGBNYXBgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoKTtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbik7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0SW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCBkdG9yLCBmKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IGE6IGFyZzAsIGI6IGFyZzEsIGNudDogMSwgZHRvciB9O1xuICAgIGNvbnN0IHJlYWwgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBGaXJzdCB1cCB3aXRoIGEgY2xvc3VyZSB3ZSBpbmNyZW1lbnQgdGhlIGludGVybmFsIHJlZmVyZW5jZVxuICAgICAgICAvLyBjb3VudC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIFJ1c3QgY2xvc3VyZSBlbnZpcm9ubWVudCB3b24ndFxuICAgICAgICAvLyBiZSBkZWFsbG9jYXRlZCB3aGlsZSB3ZSdyZSBpbnZva2luZyBpdC5cbiAgICAgICAgc3RhdGUuY250Kys7XG4gICAgICAgIGNvbnN0IGEgPSBzdGF0ZS5hO1xuICAgICAgICBzdGF0ZS5hID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmKGEsIHN0YXRlLmIsIC4uLmFyZ3MpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKC0tc3RhdGUuY250ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8yLmdldChzdGF0ZS5kdG9yKShhLCBzdGF0ZS5iKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhbC5vcmlnaW5hbCA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHJlYWw7XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzE4KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB3YXNtLl9keW5fY29yZV9fb3BzX19mdW5jdGlvbl9fRm5NdXRfX0FfX19fT3V0cHV0X19fUl9hc193YXNtX2JpbmRnZW5fX2Nsb3N1cmVfX1dhc21DbG9zdXJlX19fZGVzY3JpYmVfX2ludm9rZV9faDI4NGQ4Mjc0NDJjZjA1YmUoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRDbGFzcyhpbnN0YW5jZSwga2xhc3MpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIGtsYXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7a2xhc3MubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnB0cjtcbn1cbi8qKlxuKiBSZXR1cm5zIGEgbG93LXBvbHkgW2BEeW5hbWljSW1hZ2VgXSB2aWEgdGhlIHRyaWFuZ3VsYXRpb24gbWV0aG9kLlxuKlxuKiBUaGlzIGZ1bmN0aW9uIGlzIGp1c3QgYSB3cmFwcGVyIHRoYXQgY2FsbHMgMyBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlciBmb3IgeW91OlxuKiAtIFtgcHJlcHJvY2Vzc19pbWFnZWBdIHRvIHByZXByb2Nlc3MgdGhlIGltYWdlLlxuKiAtIFtgbm9kZV9kZXRlY3Rpb25gXSB0byBkZXRlY3Qgbm9kZXMgdXNpbmcgdGhlIHByZXByb2Nlc3NlZCBpbWFnZS5cbiogLSBbYHRyaWFuZ3VsYXRpb25gXSB0byBjb21wdXRlIHRoZSB0cmlhbmd1bGF0aW9uIG9mIHRoZSBub2RlLWRldGVjdGVkIGltYWdlLlxuKlxuKiBZb3UgY2FuIGluc3RlYWQgY2FsbCB0aGVzZSBmdW5jdGlvbnMgbWFudWFsbHkgaWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHN0ZXBzIGluIGFueSB3YXkuXG4qIEBwYXJhbSB7V29ya2luZ0ltYWdlfSBpbWFnZVxuKiBAcGFyYW0ge1RyaWFuZ3VsYXRpb25Db25maWd9IGNvbmZpZ1xuKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXNtX3RyaWFuZ3VsYXRlX2ltYWdlKGltYWdlLCBjb25maWcpIHtcbiAgICBfYXNzZXJ0Q2xhc3MoaW1hZ2UsIFdvcmtpbmdJbWFnZSk7XG4gICAgdmFyIHB0cjAgPSBpbWFnZS5wdHI7XG4gICAgaW1hZ2UucHRyID0gMDtcbiAgICBfYXNzZXJ0Q2xhc3MoY29uZmlnLCBUcmlhbmd1bGF0aW9uQ29uZmlnKTtcbiAgICB2YXIgcHRyMSA9IGNvbmZpZy5wdHI7XG4gICAgY29uZmlnLnB0ciA9IDA7XG4gICAgdmFyIHJldCA9IHdhc20ud2FzbV90cmlhbmd1bGF0ZV9pbWFnZShwdHIwLCBwdHIxKTtcbiAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4bl9zdG9yZShhZGRIZWFwT2JqZWN0KGUpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VThGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyIC8gMSwgcHRyIC8gMSArIGxlbik7XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzcxKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB3YXNtLndhc21fYmluZGdlbl9fY29udmVydF9fY2xvc3VyZXNfX2ludm9rZTJfbXV0X19oZGQzYzdlMzcyOWY4MTBhYShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpLCBhZGRIZWFwT2JqZWN0KGFyZzMpKTtcbn1cblxuLyoqXG4qIEEgbGlzdCBvZiBub2Rlcy5cbiovXG5leHBvcnQgY2xhc3MgTm9kZUxpc3Qge1xuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyKTtcbiAgICB9XG59XG4vKipcbiogQSBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AgaXMgdGhlIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGFmZmVjdCB0aGUgdHJpYW5ndWxhdGlvblxuKiBhbGdvcml0aG0ncyBvdXRwdXQuXG4qL1xuZXhwb3J0IGNsYXNzIFRyaWFuZ3VsYXRpb25Db25maWcge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShUcmlhbmd1bGF0aW9uQ29uZmlnLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnRpY2VzIHdlIHdhbnQuXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IG1heF92ZXJ0aWNlcygpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbWF4X3ZlcnRpY2VzKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbWF4X3ZlcnRpY2VzKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgZWRnZV90aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWluaW1hbCBzdHJlbmd0aCBvZiBwb3RlbnRpYWwgdmVydGljZXMuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGVkZ2VfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19lZGdlX3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogTG93IHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBncmVhdGVyIHRoYW4gMC4wLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIGhpZ2hfdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBsb3dfdGhyZXNob2xkKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGxvd190aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgaGlnaF90aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGhpZ2hfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19oaWdoX3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtUcmlhbmd1bGF0aW9uQ29uZmlnfVxuICAgICovXG4gICAgc3RhdGljIG5ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS50cmlhbmd1bGF0aW9uY29uZmlnX25ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiBUcmlhbmd1bGF0aW9uQ29uZmlnLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBpbWFnZXMuXG4qL1xuZXhwb3J0IGNsYXNzIFdvcmtpbmdJbWFnZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFdvcmtpbmdJbWFnZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3dvcmtpbmdpbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBbYFdvcmtpbmdJbWFnZWBdLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAodXJsLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53b3JraW5naW1hZ2VfbmV3KHB0cjAsIGxlbjApO1xuICAgICAgICByZXR1cm4gV29ya2luZ0ltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEJ1aWxkcyBhbiBpbWFnZSBmcm9tIGEgW2BXb3JraW5nSW1hZ2VgXS5cbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgdmFyIHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndvcmtpbmdpbWFnZV9idWlsZChwdHIpO1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9zdHJpbmdfbmV3ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlX2Y1MmM2NWMzODk4OTA2MzkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFJlc3BvbnNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfb2tfYzIwNjQzZTBhNDVkYzVhMCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm9rO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfaGVhZGVyc182ZmFmYjJjNzY2OWE4YWM1ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuaGVhZGVycztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0XzNiZDRhMjEwMmZjMDNhYTcgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBSZXNwb25zZShnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfYXJyYXlCdWZmZXJfMGJhMTdkZmFhZDgwNGI2ZiA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmFycmF5QnVmZmVyKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRoaGVhZGVyc185ZTg1ZjgzYWI0NWNmYzIxID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgSGVhZGVycyhnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2RlbGV0ZV9hODM1NDQ1ZTM4OTNiNGU4ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5kZWxldGUoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZmV0Y2hfZDdkNTNkZDc5Y2EyODkwMyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmZldGNoKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2NiX2Ryb3AgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgY29uc3Qgb2JqID0gdGFrZU9iamVjdChhcmcwKS5vcmlnaW5hbDtcbiAgICBpZiAob2JqLmNudC0tID09IDEpIHtcbiAgICAgICAgb2JqLmEgPSAwO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHJldCA9IGZhbHNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfZ2V0UmFuZG9tVmFsdWVzX2M3M2YwNmI1ZWQ4Yjg3OGQgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmdldFJhbmRvbVZhbHVlcyhnZXRPYmplY3QoYXJnMSkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19yYW5kb21GaWxsU3luY181ZmEwYTcyMDM1YzdiZmQ5ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5yYW5kb21GaWxsU3luYyhnZXRBcnJheVU4RnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3RhdGljX2FjY2Vzc29yX01PRFVMRV9mZjFlNDdmNzA3NmUwZWUxID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IG1vZHVsZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NlbGZfMjNiMTRkNjBjOGRiZjlkYSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfcmVxdWlyZV8xZGFiMThlYTIxMWM0ZmExID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkucmVxdWlyZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NyeXB0b19kZjk2ZjM1NzdjOGE5YmFlID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbXNDcnlwdG9fMzMxZWZjZGI5YmU0MGQ3YyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm1zQ3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9pc191bmRlZmluZWQgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3Xzk0YTdkZmE5NTI5ZWM2ZTggPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3bm9hcmdzXzdjNmJkNTIxOTkyYjQwMjIgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBGdW5jdGlvbihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfY2FsbF85NTFiZDBjNmQ4MTVkNmYxID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NhbGxfYmY3NDViMTc1OGJiNjY5MyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19iYTA3ZDBkYWEwZTQ2NzdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IG5ldyBPYmplY3QoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19iYjRlNDRlZjA4OWU0NWI0ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGF0ZTAgPSB7YTogYXJnMCwgYjogYXJnMX07XG4gICAgICAgIHZhciBjYjAgPSAoYXJnMCwgYXJnMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYSA9IHN0YXRlMC5hO1xuICAgICAgICAgICAgc3RhdGUwLmEgPSAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX193YmdfYWRhcHRlcl83MShhLCBzdGF0ZTAuYiwgYXJnMCwgYXJnMSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHN0YXRlMC5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKGNiMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUwLmEgPSBzdGF0ZTAuYiA9IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3Jlc29sdmVfNmU2MWU2NDA5MjVhMGRiOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ190aGVuX2RkMzc4NTU5Nzk3NDc5OGEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ190aGVuXzBmOTU3ZTBmNGMzZTUzN2EgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NlbGZfNmJhZjNhM2FhN2I2MzQxNSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193Ymdfd2luZG93XzYzZmM0MDI3YjY2YzI2NWIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19nbG9iYWxUaGlzXzUxM2ZiMjQ3ZThlNGU2ZDIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gZ2xvYmFsVGhpcy5nbG9iYWxUaGlzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2dsb2JhbF9iODcyNDVjZDg4NmQ3MTEzID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IGdsb2JhbC5nbG9iYWw7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfYnVmZmVyXzNmMTJhMWM2MDhjNmQwNGUgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5idWZmZXI7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF80YzUxMzQyZjg3Mjk5YzVhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCksIGFyZzEgPj4+IDAsIGFyZzIgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3X2M2YzAyMjhlNmQyMmEyZjkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IG5ldyBVaW50OEFycmF5KGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZXRfYjkxYWZhYzlmZDIxNmQ5OSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuc2V0KGdldE9iamVjdChhcmcxKSwgYXJnMiA+Pj4gMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbGVuZ3RoX2M2NDVlN2MwMjIzM2I0NDAgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5sZW5ndGg7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRobGVuZ3RoX2E0MjllMDhmOGE4ZmU0YjMgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IG5ldyBVaW50OEFycmF5KGFyZzAgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3ViYXJyYXlfMDJlMmZjZmE2YjI4NWNiMiA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnN1YmFycmF5KGFyZzEgPj4+IDAsIGFyZzIgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2V0XzliZGQ0MTMzODUxNDYxMzcgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IFJlZmxlY3Quc2V0KGdldE9iamVjdChhcmcwKSwgZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiByZXQ7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fZGVidWdfc3RyaW5nID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBkZWJ1Z1N0cmluZyhnZXRPYmplY3QoYXJnMSkpO1xuICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAxXSA9IGxlbjA7XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjA7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX21lbW9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSB3YXNtLm1lbW9yeTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNDcyID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCA0OCwgX193YmdfYWRhcHRlcl8xOCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ1bHJpY2gtbWFyZWxpLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=