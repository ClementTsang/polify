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
/* harmony import */ var worker_loader_build_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! worker-loader!./build.worker */ "./node_modules/worker-loader/dist/cjs.js!./build.worker.ts");

// @ts-ignore

// @ts-ignore

var PolifyDemo = /** @class */ (function () {
    function PolifyDemo() {
        var _this = this;
        this.isUsingPaste = true;
        this.isProcessing = false;
        this.polyObjectUrl = null;
        this.isError = false;
        this.preprocessedImage = null;
        this.workingImage = null;
        this.imageObjectUrl = _public_ulrich_mareli_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.showPoly = false;
        this.imageBlob = null;
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        var highThresholdSlider = document.getElementById("high-threshold");
        var lowThresholdSlider = document.getElementById("low-threshold");
        maxVerticesSlider.onmouseup = function () {
            _this.polifyConfig.max_vertices = parseInt(maxVerticesSlider.value);
        };
        edgeThresholdSlider.onmouseup = function () {
            _this.polifyConfig.edge_threshold = parseFloat(edgeThresholdSlider.value);
        };
        highThresholdSlider.onmouseup = function () {
            _this.polifyConfig.high_threshold = parseFloat(highThresholdSlider.value);
        };
        lowThresholdSlider.onmouseup = function () {
            _this.polifyConfig.low_threshold = parseFloat(lowThresholdSlider.value);
        };
        this.polifyConfig = polify__WEBPACK_IMPORTED_MODULE_0__["TriangulationConfig"].new(parseFloat(maxVerticesSlider.value), parseFloat(edgeThresholdSlider.value), parseFloat(lowThresholdSlider.value), parseFloat(highThresholdSlider.value));
        this.buildImage();
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
        var polifySwitch = document.getElementById("polify-switch");
        polifySwitch.checked = false;
        var progressBar = document.getElementById("progress-bar");
        polifySwitch.addEventListener("click", function () {
            if (!polifySwitch.checked) {
                _this.showPoly = false;
                _this.disableSliders();
                displayedImage.style.display = "block";
                progressBar.style.display = "none";
                displayedImage.src = _this.imageObjectUrl;
            }
            else {
                _this.showPoly = true;
                if (_this.isProcessing) {
                    displayedImage.style.display = "none";
                    progressBar.style.display = "block";
                }
                else {
                    _this.enableSliders();
                    displayedImage.style.display = "block";
                    progressBar.style.display = "none";
                    displayedImage.src = _this.polyObjectUrl;
                }
            }
        });
    }
    PolifyDemo.prototype.enableSliders = function () {
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        var highThresholdSlider = document.getElementById("high-threshold");
        var lowThresholdSlider = document.getElementById("low-threshold");
        maxVerticesSlider.removeAttribute("disabled");
        edgeThresholdSlider.removeAttribute("disabled");
        highThresholdSlider.removeAttribute("disabled");
        lowThresholdSlider.removeAttribute("disabled");
    };
    PolifyDemo.prototype.disableSliders = function () {
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        var highThresholdSlider = document.getElementById("high-threshold");
        var lowThresholdSlider = document.getElementById("low-threshold");
        maxVerticesSlider.setAttribute("disabled", "disabled");
        edgeThresholdSlider.setAttribute("disabled", "disabled");
        highThresholdSlider.setAttribute("disabled", "disabled");
        lowThresholdSlider.setAttribute("disabled", "disabled");
    };
    // preprocessImage(): polify.WasmPreprocessedImage | null {
    //   console.log("Called preprocess.");
    //   const imageUrl: string = document
    //     .getElementById("displayed-image")
    //     .getAttribute("src");
    //   console.log("imageUrl: " + imageUrl);
    //   if (this.workingImage !== null) {
    //     this.workingImage.free();
    //   }
    //   this.workingImage = new polify.WasmImage(imageUrl);
    //   const tempWorkingImage = new polify.WasmImage(imageUrl);
    //   try {
    //     if (this.workingImage !== null) {
    //       let preprocessedImage = new polify.WasmPreprocessedImage(
    //         tempWorkingImage,
    //         this.polifyConfig.low_threshold,
    //         this.polifyConfig.high_threshold
    //       );
    //       console.log("Returning preprocessed image...");
    //       return preprocessedImage;
    //     } else {
    //       console.error("workingImage was null...?");
    //     }
    //   } catch (err: any) {
    //     console.error("Error while preprocessing: " + err);
    //   }
    //   return null;
    // }
    // updateImage(): polify.WasmImage | null {
    //   console.log("Called update.");
    //   if (this.preprocessedImage !== null && this.workingImage !== null) {
    //     try {
    //       console.log("Returning updated image.");
    //       return this.workingImage.wasm_triangulation(
    //         this.preprocessedImage,
    //         this.polifyConfig.max_vertices,
    //         this.polifyConfig.edge_threshold
    //       );
    //     } catch (err: any) {
    //       console.error("Error while updating: " + err);
    //     }
    //   } else {
    //     console.error("Either preprocessedImage or workingImage were null...");
    //   }
    //   return null;
    // }
    PolifyDemo.prototype.buildImage = function () {
        var _this = this;
        console.log("Building image...");
        this.isProcessing = true;
        this.isError = false;
        this.disableSliders();
        var imageUrl = this.imageObjectUrl;
        var worker = new worker_loader_build_worker__WEBPACK_IMPORTED_MODULE_2__["default"]();
        console.log("image sent: " + JSON.stringify(imageUrl));
        worker.postMessage([
            imageUrl,
            this.polifyConfig.edge_threshold,
            this.polifyConfig.high_threshold,
            this.polifyConfig.low_threshold,
            this.polifyConfig.max_vertices,
        ]);
        worker.onmessage = function (e) {
            console.log("Received message from worker");
            if (e.data !== null) {
                _this.imageBlob = e.data;
                _this.polyObjectUrl = URL.createObjectURL(_this.imageBlob);
                var displayedImage = document.getElementById("displayed-image");
                var progressBar = document.getElementById("progress-bar");
                if (_this.showPoly) {
                    displayedImage.style.display = "block";
                    progressBar.style.display = "none";
                    displayedImage.src = _this.polyObjectUrl;
                }
            }
            else {
                console.error("Something went wrong with the worker...");
                _this.isError = true;
            }
            _this.isProcessing = false;
            if (_this.showPoly) {
                _this.enableSliders();
            }
            console.log("Done.");
        };
    };
    return PolifyDemo;
}());
console.log("Initializing.");
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

/***/ "./node_modules/worker-loader/dist/cjs.js!./build.worker.ts":
/*!******************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./build.worker.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "bootstrap.worker.js");
}


/***/ }),

/***/ "./polify/polify.js":
/*!**************************!*\
  !*** ./polify/polify.js ***!
  \**************************/
/*! exports provided: NodeList, TriangulationConfig, WasmImage, WasmPreprocessedImage, __wbindgen_object_drop_ref, __wbg_wasmimage_new, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper473 */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_wasmimage_new", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_wasmimage_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_clone_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithheaders_9e85f83ab45cfc21", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithheaders_9e85f83ab45cfc21"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_delete_a835445e3893b4e8", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_delete_a835445e3893b4e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Response_f52c65c389890639", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_Response_f52c65c389890639"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ok_c20643e0a45dc5a0", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ok_c20643e0a45dc5a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_headers_6fafb2c7669a8ac5", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_headers_6fafb2c7669a8ac5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_arrayBuffer_0ba17dfaad804b6f", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_arrayBuffer_0ba17dfaad804b6f"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper473", function() { return _polify_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper473"]; });




/***/ }),

/***/ "./polify/polify_bg.js":
/*!*****************************!*\
  !*** ./polify/polify_bg.js ***!
  \*****************************/
/*! exports provided: NodeList, TriangulationConfig, WasmImage, WasmPreprocessedImage, __wbindgen_object_drop_ref, __wbg_wasmimage_new, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbg_newwithheaders_9e85f83ab45cfc21, __wbg_delete_a835445e3893b4e8, __wbg_instanceof_Response_f52c65c389890639, __wbg_ok_c20643e0a45dc5a0, __wbg_headers_6fafb2c7669a8ac5, __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7, __wbg_arrayBuffer_0ba17dfaad804b6f, __wbg_fetch_d7d53dd79ca28903, __wbindgen_cb_drop, __wbg_getRandomValues_c73f06b5ed8b878d, __wbg_randomFillSync_5fa0a72035c7bfd9, __wbg_static_accessor_MODULE_ff1e47f7076e0ee1, __wbg_self_23b14d60c8dbf9da, __wbg_require_1dab18ea211c4fa1, __wbg_crypto_df96f3577c8a9bae, __wbg_msCrypto_331efcdb9be40d7c, __wbindgen_is_undefined, __wbg_new_94a7dfa9529ec6e8, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_call_bf745b1758bb6693, __wbg_new_ba07d0daa0e4677e, __wbg_new_bb4e44ef089e45b4, __wbg_resolve_6e61e640925a0db9, __wbg_then_dd3785597974798a, __wbg_then_0f957e0f4c3e537a, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_globalThis_513fb247e8e4e6d2, __wbg_global_b87245cd886d7113, __wbg_buffer_3f12a1c608c6d04e, __wbg_newwithbyteoffsetandlength_4c51342f87299c5a, __wbg_new_c6c0228e6d22a2f9, __wbg_set_b91afac9fd216d99, __wbg_length_c645e7c02233b440, __wbg_newwithlength_a429e08f8a8fe4b3, __wbg_subarray_02e2fcfa6b285cb2, __wbg_set_9bdd413385146137, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return NodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangulationConfig", function() { return TriangulationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmImage", function() { return WasmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmPreprocessedImage", function() { return WasmPreprocessedImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_wasmimage_new", function() { return __wbg_wasmimage_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithheaders_9e85f83ab45cfc21", function() { return __wbg_newwithheaders_9e85f83ab45cfc21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_delete_a835445e3893b4e8", function() { return __wbg_delete_a835445e3893b4e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Response_f52c65c389890639", function() { return __wbg_instanceof_Response_f52c65c389890639; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ok_c20643e0a45dc5a0", function() { return __wbg_ok_c20643e0a45dc5a0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_headers_6fafb2c7669a8ac5", function() { return __wbg_headers_6fafb2c7669a8ac5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7", function() { return __wbg_newwithoptbuffersourceandinit_3bd4a2102fc03aa7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_arrayBuffer_0ba17dfaad804b6f", function() { return __wbg_arrayBuffer_0ba17dfaad804b6f; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper473", function() { return __wbindgen_closure_wrapper473; });
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

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
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
function __wbg_adapter_75(arg0, arg1, arg2, arg3) {
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
    * @returns {Promise<any>}
    */
    static create_wasm_image(url) {
        var ptr0 = passStringToWasm0(url, _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_create_wasm_image"](ptr0, len0);
        return takeObject(ret);
    }
    /**
    * Builds an image from a `WasmImage`.
    * @returns {any}
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
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_wasm_triangulate_image"](ptr, config.ptr);
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
        _assertClass(preprocessed_image, WasmPreprocessedImage);
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmimage_wasm_triangulation"](this.ptr, preprocessed_image.ptr, max_vertices, edge_threshold);
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
        var ret = _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasmpreprocessedimage_wasm_preprocess_image"](image.ptr, low_threshold, high_threshold);
        return WasmPreprocessedImage.__wrap(ret);
    }
}

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbg_wasmimage_new = function(arg0) {
    var ret = WasmImage.__wrap(arg0);
    return addHeapObject(ret);
};

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

const __wbg_newwithheaders_9e85f83ab45cfc21 = handleError(function(arg0) {
    var ret = new Headers(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_delete_a835445e3893b4e8 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).delete(getStringFromWasm0(arg1, arg2));
});

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
                return __wbg_adapter_75(a, state0.b, arg0, arg1);
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

const __wbindgen_closure_wrapper473 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 44, __wbg_adapter_18);
    return addHeapObject(ret);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./polify/polify_bg.wasm":
/*!*******************************!*\
  !*** ./polify/polify_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __wbg_triangulationconfig_free, __wbg_get_triangulationconfig_max_vertices, __wbg_set_triangulationconfig_max_vertices, __wbg_get_triangulationconfig_edge_threshold, __wbg_set_triangulationconfig_edge_threshold, __wbg_get_triangulationconfig_low_threshold, __wbg_set_triangulationconfig_low_threshold, __wbg_get_triangulationconfig_high_threshold, __wbg_set_triangulationconfig_high_threshold, triangulationconfig_new, __wbg_nodelist_free, __wbg_wasmimage_free, wasmimage_create_wasm_image, wasmimage_build, wasmimage_wasm_triangulate_image, wasmimage_wasm_triangulation, __wbg_wasmpreprocessedimage_free, wasmpreprocessedimage_wasm_preprocess_image, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h284d827442cf05be, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__hdd3c7e3729f810aa */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcG9saWZ5L3BvbGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9wb2xpZnkvcG9saWZ5X2JnLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDakMsYUFBYTtBQUN5QztBQUV0RCxhQUFhO0FBQ3FDO0FBRWxEO0lBWUU7UUFBQSxpQkEwS0M7UUF6S0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGlFQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBTSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDakUsY0FBYyxDQUNLLENBQUM7UUFDdEIsSUFBTSxtQkFBbUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDbkUsZ0JBQWdCLENBQ0csQ0FBQztRQUN0QixJQUFNLG1CQUFtQixHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNuRSxnQkFBZ0IsQ0FDRyxD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QTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQWU7QUFDZixvQkFBb0IscUJBQXVCO0FBQzNDOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7Ozs7Ozs7Ozs7Ozs7QUNBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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OztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBLHNDQUFzQyxpRUFBc0IsRUFBRSxrRUFBdUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsY0FBYyxzREFBVztBQUN6QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOXJCQTtBQUFlLG9GQUF1QixzQkFBc0IsRSIsImZpbGUiOiIwLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvbGlmeSBmcm9tIFwicG9saWZ5XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZGVmYXVsdEltYWdlIGZyb20gXCIuL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZ1wiO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgV29ya2VyIGZyb20gXCJ3b3JrZXItbG9hZGVyIS4vYnVpbGQud29ya2VyXCI7XG5cbmNsYXNzIFBvbGlmeURlbW8ge1xuICBpc1VzaW5nUGFzdGU6IGJvb2xlYW47XG4gIGlzUHJvY2Vzc2luZzogYm9vbGVhbjtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgcG9saWZ5Q29uZmlnOiBwb2xpZnkuVHJpYW5ndWxhdGlvbkNvbmZpZztcbiAgaW1hZ2VPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHBvbHlPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHByZXByb2Nlc3NlZEltYWdlOiBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlIHwgbnVsbDtcbiAgd29ya2luZ0ltYWdlOiBwb2xpZnkuV2FzbUltYWdlIHwgbnVsbDtcbiAgc2hvd1BvbHk6IGJvb2xlYW47XG4gIGltYWdlQmxvYjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNVc2luZ1Bhc3RlID0gdHJ1ZTtcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucG9seU9iamVjdFVybCA9IG51bGw7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5wcmVwcm9jZXNzZWRJbWFnZSA9IG51bGw7XG4gICAgdGhpcy53b3JraW5nSW1hZ2UgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBkZWZhdWx0SW1hZ2U7XG4gICAgdGhpcy5zaG93UG9seSA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VCbG9iID0gbnVsbDtcblxuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBoaWdoVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImhpZ2gtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbG93VGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImxvdy10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyA9IHBhcnNlSW50KG1heFZlcnRpY2VzU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgZWRnZVRocmVzaG9sZFNsaWRlci5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZCA9IHBhcnNlRmxvYXQoZWRnZVRocmVzaG9sZFNsaWRlci52YWx1ZSk7XG4gICAgfTtcblxuICAgIGhpZ2hUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGQgPSBwYXJzZUZsb2F0KGhpZ2hUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICBsb3dUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCA9IHBhcnNlRmxvYXQobG93VGhyZXNob2xkU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5wb2xpZnlDb25maWcgPSBwb2xpZnkuVHJpYW5ndWxhdGlvbkNvbmZpZy5uZXcoXG4gICAgICBwYXJzZUZsb2F0KG1heFZlcnRpY2VzU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQoZWRnZVRocmVzaG9sZFNsaWRlci52YWx1ZSksXG4gICAgICBwYXJzZUZsb2F0KGxvd1RocmVzaG9sZFNsaWRlci52YWx1ZSksXG4gICAgICBwYXJzZUZsb2F0KGhpZ2hUaHJlc2hvbGRTbGlkZXIudmFsdWUpXG4gICAgKTtcblxuICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2VcIik7XG4gICAgY29uc3QgdXBsb2FkSW1hZ2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZC1pbWFnZVwiKTtcblxuICAgIGNvbnN0IHBhc3RlSW1hZ2VBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3RlLWltYWdlLWFjdGlvblwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlLWFjdGlvblwiKTtcblxuICAgIHBhc3RlSW1hZ2VUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHVwbG9hZEltYWdlVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgIHVwbG9hZEltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgcGFzdGVJbWFnZUFjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjdXBsb2FkLWltYWdlLWFjdGlvbiBpbnB1dFt0eXBlPWZpbGVdXCJcbiAgICApO1xuICAgIGNvbnN0IGRpc3BsYXllZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImRpc3BsYXllZC1pbWFnZVwiXG4gICAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICB1cGxvYWRJbWFnZUFjdGlvbklucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHVwbG9hZEltYWdlQWN0aW9uSW5wdXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaWxlID0gdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlc1swXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIC5maWxlLW5hbWVcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGZpbGUubmFtZTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuXG4gICAgICAgIC8vIENhbGwgcG9saWZ5IGhlcmUuLi5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gYnV0dG9uXCJcbiAgICApO1xuICAgIGNvbnN0IHBhc3RlSW1hZ2VJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gaW5wdXRcIlxuICAgICk7XG4gICAgcGFzdGVJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gcGFzdGVJbWFnZUlucHV0LnZhbHVlO1xuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHBvbGlmeSBoZXJlLi4uXG4gICAgfSk7XG4gICAgcGFzdGVJbWFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAocGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGFzdGVJbWFnZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhc3RlSW1hZ2VCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGFzdGVJbWFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuaW1hZ2VPYmplY3RVcmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gcGFzdGVJbWFnZUlucHV0LnZhbHVlO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBvbGlmeVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJwb2xpZnktc3dpdGNoXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcG9saWZ5U3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJwcm9ncmVzcy1iYXJcIlxuICAgICkgYXMgSFRNTFByb2dyZXNzRWxlbWVudDtcbiAgICBwb2xpZnlTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghcG9saWZ5U3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93UG9seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZVNsaWRlcnMoKTtcblxuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dQb2x5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVuYWJsZVNsaWRlcnMoKTtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLnBvbHlPYmplY3RVcmw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVNsaWRlcnMoKSB7XG4gICAgY29uc3QgbWF4VmVydGljZXNTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LXZlcnRpY2VzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZWRnZVRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJlZGdlLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGhpZ2hUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaGlnaC10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsb3dUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibG93LXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgbWF4VmVydGljZXNTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgZWRnZVRocmVzaG9sZFNsaWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBoaWdoVGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGxvd1RocmVzaG9sZFNsaWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGVTbGlkZXJzKCkge1xuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBoaWdoVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImhpZ2gtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbG93VGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImxvdy10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgZWRnZVRocmVzaG9sZFNsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIGhpZ2hUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICBsb3dUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIC8vIHByZXByb2Nlc3NJbWFnZSgpOiBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlIHwgbnVsbCB7XG4gIC8vICAgY29uc29sZS5sb2coXCJDYWxsZWQgcHJlcHJvY2Vzcy5cIik7XG5cbiAgLy8gICBjb25zdCBpbWFnZVVybDogc3RyaW5nID0gZG9jdW1lbnRcbiAgLy8gICAgIC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXllZC1pbWFnZVwiKVxuICAvLyAgICAgLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKFwiaW1hZ2VVcmw6IFwiICsgaW1hZ2VVcmwpO1xuXG4gIC8vICAgaWYgKHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICB0aGlzLndvcmtpbmdJbWFnZS5mcmVlKCk7XG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy53b3JraW5nSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21JbWFnZShpbWFnZVVybCk7XG4gIC8vICAgY29uc3QgdGVtcFdvcmtpbmdJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbUltYWdlKGltYWdlVXJsKTtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgaWYgKHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGxldCBwcmVwcm9jZXNzZWRJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlKFxuICAvLyAgICAgICAgIHRlbXBXb3JraW5nSW1hZ2UsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5oaWdoX3RocmVzaG9sZFxuICAvLyAgICAgICApO1xuXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIHByZXByb2Nlc3NlZCBpbWFnZS4uLlwiKTtcblxuICAvLyAgICAgICByZXR1cm4gcHJlcHJvY2Vzc2VkSW1hZ2U7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwid29ya2luZ0ltYWdlIHdhcyBudWxsLi4uP1wiKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHByZXByb2Nlc3Npbmc6IFwiICsgZXJyKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIC8vIHVwZGF0ZUltYWdlKCk6IHBvbGlmeS5XYXNtSW1hZ2UgfCBudWxsIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIkNhbGxlZCB1cGRhdGUuXCIpO1xuXG4gIC8vICAgaWYgKHRoaXMucHJlcHJvY2Vzc2VkSW1hZ2UgIT09IG51bGwgJiYgdGhpcy53b3JraW5nSW1hZ2UgIT09IG51bGwpIHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIHVwZGF0ZWQgaW1hZ2UuXCIpO1xuXG4gIC8vICAgICAgIHJldHVybiB0aGlzLndvcmtpbmdJbWFnZS53YXNtX3RyaWFuZ3VsYXRpb24oXG4gIC8vICAgICAgICAgdGhpcy5wcmVwcm9jZXNzZWRJbWFnZSxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5tYXhfdmVydGljZXMsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGRcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSB1cGRhdGluZzogXCIgKyBlcnIpO1xuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRWl0aGVyIHByZXByb2Nlc3NlZEltYWdlIG9yIHdvcmtpbmdJbWFnZSB3ZXJlIG51bGwuLi5cIik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICBidWlsZEltYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQnVpbGRpbmcgaW1hZ2UuLi5cIik7XG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZVNsaWRlcnMoKTtcblxuICAgIGNvbnN0IGltYWdlVXJsOiBzdHJpbmcgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuXG4gICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2Ugc2VudDogXCIgKyBKU09OLnN0cmluZ2lmeShpbWFnZVVybCkpO1xuXG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcbiAgICAgIGltYWdlVXJsLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGQsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5oaWdoX3RocmVzaG9sZCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmxvd190aHJlc2hvbGQsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5tYXhfdmVydGljZXMsXG4gICAgXSk7XG5cbiAgICB3b3JrZXIub25tZXNzYWdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBtZXNzYWdlIGZyb20gd29ya2VyXCIpO1xuXG4gICAgICBpZiAoZS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCbG9iID0gZS5kYXRhO1xuICAgICAgICB0aGlzLnBvbHlPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuaW1hZ2VCbG9iKTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5ZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIFwiZGlzcGxheWVkLWltYWdlXCJcbiAgICAgICAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgXCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICApIGFzIEhUTUxQcm9ncmVzc0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLnBvbHlPYmplY3RVcmw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSB3b3JrZXIuLi5cIik7XG4gICAgICAgIHRoaXMuaXNFcnJvciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zaG93UG9seSkge1xuICAgICAgICB0aGlzLmVuYWJsZVNsaWRlcnMoKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiRG9uZS5cIik7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhcIkluaXRpYWxpemluZy5cIik7XG4vLyBAdHMtaWdub3JlXG5idWxtYVNsaWRlci5hdHRhY2goKTtcbm5ldyBQb2xpZnlEZW1vKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya2VyX2ZuKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYm9vdHN0cmFwLndvcmtlci5qc1wiKTtcbn1cbiIsImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vcG9saWZ5X2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BvbGlmeV9iZy5qc1wiOyIsImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9wb2xpZnlfYmcud2FzbSc7XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU3RyaW5nKHZhbCkge1xuICAgIC8vIHByaW1pdGl2ZSB0eXBlc1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8IHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAgYCR7dmFsfWA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBgXCIke3ZhbH1cImA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzeW1ib2wnKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdTeW1ib2wnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBTeW1ib2woJHtkZXNjcmlwdGlvbn0pYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YWwubmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmIG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBGdW5jdGlvbigke25hbWV9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvYmplY3RzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB2YWwubGVuZ3RoO1xuICAgICAgICBsZXQgZGVidWcgPSAnWyc7XG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSBkZWJ1Z1N0cmluZyh2YWxbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVidWcgKz0gJywgJyArIGRlYnVnU3RyaW5nKHZhbFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcgKz0gJ10nO1xuICAgICAgICByZXR1cm4gZGVidWc7XG4gICAgfVxuICAgIC8vIFRlc3QgZm9yIGJ1aWx0LWluXG4gICAgY29uc3QgYnVpbHRJbk1hdGNoZXMgPSAvXFxbb2JqZWN0IChbXlxcXV0rKVxcXS8uZXhlYyh0b1N0cmluZy5jYWxsKHZhbCkpO1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgaWYgKGJ1aWx0SW5NYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gYnVpbHRJbk1hdGNoZXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFpbGVkIHRvIG1hdGNoIHRoZSBzdGFuZGFyZCAnW29iamVjdCBDbGFzc05hbWVdJ1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lID09ICdPYmplY3QnKSB7XG4gICAgICAgIC8vIHdlJ3JlIGEgdXNlciBkZWZpbmVkIGNsYXNzIG9yIE9iamVjdFxuICAgICAgICAvLyBKU09OLnN0cmluZ2lmeSBhdm9pZHMgcHJvYmxlbXMgd2l0aCBjeWNsZXMsIGFuZCBpcyBnZW5lcmFsbHkgbXVjaFxuICAgICAgICAvLyBlYXNpZXIgdGhhbiBsb29waW5nIHRocm91Z2ggb3duUHJvcGVydGllcyBvZiBgdmFsYC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBKU09OLnN0cmluZ2lmeSh2YWwpICsgJyknO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZXJyb3JzXG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWwubmFtZX06ICR7dmFsLm1lc3NhZ2V9XFxuJHt2YWwuc3RhY2t9YDtcbiAgICB9XG4gICAgLy8gVE9ETyB3ZSBjb3VsZCB0ZXN0IGZvciBtb3JlIHRoaW5ncyBoZXJlLCBsaWtlIGBTZXRgcyBhbmQgYE1hcGBzLlxuICAgIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxubGV0IGNhY2hlZ2V0SW50MzJNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRJbnQzMk1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRJbnQzMk1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRJbnQzMk1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIGR0b3IsIGYpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHsgYTogYXJnMCwgYjogYXJnMSwgY250OiAxLCBkdG9yIH07XG4gICAgY29uc3QgcmVhbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IHVwIHdpdGggYSBjbG9zdXJlIHdlIGluY3JlbWVudCB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlXG4gICAgICAgIC8vIGNvdW50LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgUnVzdCBjbG9zdXJlIGVudmlyb25tZW50IHdvbid0XG4gICAgICAgIC8vIGJlIGRlYWxsb2NhdGVkIHdoaWxlIHdlJ3JlIGludm9raW5nIGl0LlxuICAgICAgICBzdGF0ZS5jbnQrKztcbiAgICAgICAgY29uc3QgYSA9IHN0YXRlLmE7XG4gICAgICAgIHN0YXRlLmEgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYoYSwgc3RhdGUuYiwgLi4uYXJncyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoLS1zdGF0ZS5jbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzIuZ2V0KHN0YXRlLmR0b3IpKGEsIHN0YXRlLmIpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmEgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZWFsLm9yaWdpbmFsID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcmVhbDtcbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfMTgoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHdhc20uX2R5bl9jb3JlX19vcHNfX2Z1bmN0aW9uX19Gbk11dF9fQV9fX19PdXRwdXRfX19SX2FzX3dhc21fYmluZGdlbl9fY2xvc3VyZV9fV2FzbUNsb3N1cmVfX19kZXNjcmliZV9faW52b2tlX19oMjg0ZDgyNzQ0MmNmMDViZShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydENsYXNzKGluc3RhbmNlLCBrbGFzcykge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2Yga2xhc3MpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgJHtrbGFzcy5uYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2UucHRyO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4bl9zdG9yZShhZGRIZWFwT2JqZWN0KGUpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VThGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyIC8gMSwgcHRyIC8gMSArIGxlbik7XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzc1KGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB3YXNtLndhc21fYmluZGdlbl9fY29udmVydF9fY2xvc3VyZXNfX2ludm9rZTJfbXV0X19oZGQzYzdlMzcyOWY4MTBhYShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpLCBhZGRIZWFwT2JqZWN0KGFyZzMpKTtcbn1cblxuLyoqXG4qIEEgbGlzdCBvZiBub2Rlcy5cbiovXG5leHBvcnQgY2xhc3MgTm9kZUxpc3Qge1xuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyKTtcbiAgICB9XG59XG4vKipcbiogQSBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AgaXMgdGhlIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGFmZmVjdCB0aGUgdHJpYW5ndWxhdGlvblxuKiBhbGdvcml0aG0ncyBvdXRwdXQuXG4qL1xuZXhwb3J0IGNsYXNzIFRyaWFuZ3VsYXRpb25Db25maWcge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShUcmlhbmd1bGF0aW9uQ29uZmlnLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnRpY2VzIHdlIHdhbnQuXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IG1heF92ZXJ0aWNlcygpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbWF4X3ZlcnRpY2VzKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbWF4X3ZlcnRpY2VzKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgZWRnZV90aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWluaW1hbCBzdHJlbmd0aCBvZiBwb3RlbnRpYWwgdmVydGljZXMuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGVkZ2VfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19lZGdlX3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogTG93IHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBncmVhdGVyIHRoYW4gMC4wLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIGhpZ2hfdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBsb3dfdGhyZXNob2xkKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGxvd190aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgaGlnaF90aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGhpZ2hfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19oaWdoX3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtUcmlhbmd1bGF0aW9uQ29uZmlnfVxuICAgICovXG4gICAgc3RhdGljIG5ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS50cmlhbmd1bGF0aW9uY29uZmlnX25ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiBUcmlhbmd1bGF0aW9uQ29uZmlnLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBpbWFnZXMuXG4qL1xuZXhwb3J0IGNsYXNzIFdhc21JbWFnZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFdhc21JbWFnZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3dhc21pbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbUltYWdlYC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlX3dhc21faW1hZ2UodXJsKSB7XG4gICAgICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAodXJsLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2VfY3JlYXRlX3dhc21faW1hZ2UocHRyMCwgbGVuMCk7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQnVpbGRzIGFuIGltYWdlIGZyb20gYSBgV2FzbUltYWdlYC5cbiAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgdmFyIHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndhc21pbWFnZV9idWlsZChwdHIpO1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFJldHVybnMgYSBsb3ctcG9seSBgV2FzbUltYWdlYCB2aWEgdGhlIHRyaWFuZ3VsYXRpb24gbWV0aG9kLlxuICAgICpcbiAgICAqIFRoaXMgZnVuY3Rpb24gaXMganVzdCBhIHdyYXBwZXIgdGhhdCBjYWxscyAzIGZ1bmN0aW9ucyBpbiB0aGlzIG9yZGVyIGZvciB5b3U6XG4gICAgKiAtIGBwcmVwcm9jZXNzX2ltYWdlYCB0byBwcmVwcm9jZXNzIHRoZSBpbWFnZS5cbiAgICAqIC0gYG5vZGVfZGV0ZWN0aW9uYCB0byBkZXRlY3Qgbm9kZXMgdXNpbmcgdGhlIHByZXByb2Nlc3NlZCBpbWFnZS5cbiAgICAqIC0gYHRyaWFuZ3VsYXRpb25gIHRvIGNvbXB1dGUgdGhlIHRyaWFuZ3VsYXRpb24gb2YgdGhlIG5vZGUtZGV0ZWN0ZWQgaW1hZ2UuXG4gICAgKlxuICAgICogWW91IGNhbiBpbnN0ZWFkIGNhbGwgdGhlc2UgZnVuY3Rpb25zIG1hbnVhbGx5IGlmIHlvdSB3aXNoIHRvIGFsdGVyIHRoZSBzdGVwcyBpbiBhbnkgd2F5LlxuICAgICogQHBhcmFtIHtUcmlhbmd1bGF0aW9uQ29uZmlnfSBjb25maWdcbiAgICAqIEByZXR1cm5zIHtXYXNtSW1hZ2V9XG4gICAgKi9cbiAgICB3YXNtX3RyaWFuZ3VsYXRlX2ltYWdlKGNvbmZpZykge1xuICAgICAgICB2YXIgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcbiAgICAgICAgX2Fzc2VydENsYXNzKGNvbmZpZywgVHJpYW5ndWxhdGlvbkNvbmZpZyk7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRlX2ltYWdlKHB0ciwgY29uZmlnLnB0cik7XG4gICAgICAgIHJldHVybiBXYXNtSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVHJpYW5ndWxhdGVzIHBvaW50cyBnaXZlbiBhIG5vZGUgbGlzdC5cbiAgICAqIEBwYXJhbSB7V2FzbVByZXByb2Nlc3NlZEltYWdlfSBwcmVwcm9jZXNzZWRfaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGlvbihwcmVwcm9jZXNzZWRfaW1hZ2UsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpIHtcbiAgICAgICAgX2Fzc2VydENsYXNzKHByZXByb2Nlc3NlZF9pbWFnZSwgV2FzbVByZXByb2Nlc3NlZEltYWdlKTtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ud2FzbWltYWdlX3dhc21fdHJpYW5ndWxhdGlvbih0aGlzLnB0ciwgcHJlcHJvY2Vzc2VkX2ltYWdlLnB0ciwgbWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiBXYXNtSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxufVxuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIHByZS1wcm9jZXNzZWQgaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2Uge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21QcmVwcm9jZXNzZWRJbWFnZWAuXG4gICAgKiBAcGFyYW0ge1dhc21JbWFnZX0gaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MoaW1hZ2UsIFdhc21JbWFnZSk7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndhc21wcmVwcm9jZXNzZWRpbWFnZV93YXNtX3ByZXByb2Nlc3NfaW1hZ2UoaW1hZ2UucHRyLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ193YXNtaW1hZ2VfbmV3ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBXYXNtSW1hZ2UuX193cmFwKGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3N0cmluZ19uZXcgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld3dpdGhoZWFkZXJzXzllODVmODNhYjQ1Y2ZjMjEgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IG5ldyBIZWFkZXJzKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZGVsZXRlX2E4MzU0NDVlMzg5M2I0ZTggPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmRlbGV0ZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlX2Y1MmM2NWMzODk4OTA2MzkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFJlc3BvbnNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfb2tfYzIwNjQzZTBhNDVkYzVhMCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm9rO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfaGVhZGVyc182ZmFmYjJjNzY2OWE4YWM1ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuaGVhZGVycztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0XzNiZDRhMjEwMmZjMDNhYTcgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBSZXNwb25zZShnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfYXJyYXlCdWZmZXJfMGJhMTdkZmFhZDgwNGI2ZiA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmFycmF5QnVmZmVyKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZmV0Y2hfZDdkNTNkZDc5Y2EyODkwMyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmZldGNoKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2NiX2Ryb3AgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgY29uc3Qgb2JqID0gdGFrZU9iamVjdChhcmcwKS5vcmlnaW5hbDtcbiAgICBpZiAob2JqLmNudC0tID09IDEpIHtcbiAgICAgICAgb2JqLmEgPSAwO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHJldCA9IGZhbHNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfZ2V0UmFuZG9tVmFsdWVzX2M3M2YwNmI1ZWQ4Yjg3OGQgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmdldFJhbmRvbVZhbHVlcyhnZXRPYmplY3QoYXJnMSkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19yYW5kb21GaWxsU3luY181ZmEwYTcyMDM1YzdiZmQ5ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5yYW5kb21GaWxsU3luYyhnZXRBcnJheVU4RnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3RhdGljX2FjY2Vzc29yX01PRFVMRV9mZjFlNDdmNzA3NmUwZWUxID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IG1vZHVsZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NlbGZfMjNiMTRkNjBjOGRiZjlkYSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfcmVxdWlyZV8xZGFiMThlYTIxMWM0ZmExID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkucmVxdWlyZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NyeXB0b19kZjk2ZjM1NzdjOGE5YmFlID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbXNDcnlwdG9fMzMxZWZjZGI5YmU0MGQ3YyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm1zQ3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9pc191bmRlZmluZWQgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3Xzk0YTdkZmE5NTI5ZWM2ZTggPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3bm9hcmdzXzdjNmJkNTIxOTkyYjQwMjIgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IG5ldyBGdW5jdGlvbihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfY2FsbF85NTFiZDBjNmQ4MTVkNmYxID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NhbGxfYmY3NDViMTc1OGJiNjY5MyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19iYTA3ZDBkYWEwZTQ2NzdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IG5ldyBPYmplY3QoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19iYjRlNDRlZjA4OWU0NWI0ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGF0ZTAgPSB7YTogYXJnMCwgYjogYXJnMX07XG4gICAgICAgIHZhciBjYjAgPSAoYXJnMCwgYXJnMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYSA9IHN0YXRlMC5hO1xuICAgICAgICAgICAgc3RhdGUwLmEgPSAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX193YmdfYWRhcHRlcl83NShhLCBzdGF0ZTAuYiwgYXJnMCwgYXJnMSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHN0YXRlMC5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKGNiMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUwLmEgPSBzdGF0ZTAuYiA9IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3Jlc29sdmVfNmU2MWU2NDA5MjVhMGRiOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ190aGVuX2RkMzc4NTU5Nzk3NDc5OGEgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ190aGVuXzBmOTU3ZTBmNGMzZTUzN2EgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NlbGZfNmJhZjNhM2FhN2I2MzQxNSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193Ymdfd2luZG93XzYzZmM0MDI3YjY2YzI2NWIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19nbG9iYWxUaGlzXzUxM2ZiMjQ3ZThlNGU2ZDIgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gZ2xvYmFsVGhpcy5nbG9iYWxUaGlzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2dsb2JhbF9iODcyNDVjZDg4NmQ3MTEzID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IGdsb2JhbC5nbG9iYWw7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfYnVmZmVyXzNmMTJhMWM2MDhjNmQwNGUgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5idWZmZXI7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF80YzUxMzQyZjg3Mjk5YzVhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCksIGFyZzEgPj4+IDAsIGFyZzIgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3X2M2YzAyMjhlNmQyMmEyZjkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IG5ldyBVaW50OEFycmF5KGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZXRfYjkxYWZhYzlmZDIxNmQ5OSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuc2V0KGdldE9iamVjdChhcmcxKSwgYXJnMiA+Pj4gMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbGVuZ3RoX2M2NDVlN2MwMjIzM2I0NDAgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5sZW5ndGg7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRobGVuZ3RoX2E0MjllMDhmOGE4ZmU0YjMgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IG5ldyBVaW50OEFycmF5KGFyZzAgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc3ViYXJyYXlfMDJlMmZjZmE2YjI4NWNiMiA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnN1YmFycmF5KGFyZzEgPj4+IDAsIGFyZzIgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2V0XzliZGQ0MTMzODUxNDYxMzcgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IFJlZmxlY3Quc2V0KGdldE9iamVjdChhcmcwKSwgZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiByZXQ7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fZGVidWdfc3RyaW5nID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBkZWJ1Z1N0cmluZyhnZXRPYmplY3QoYXJnMSkpO1xuICAgIHZhciBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAxXSA9IGxlbjA7XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjA7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX21lbW9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSB3YXNtLm1lbW9yeTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyNDczID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCA0NCwgX193YmdfYWRhcHRlcl8xOCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ1bHJpY2gtbWFyZWxpLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=