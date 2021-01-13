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
        // Also forcefully reset values to stock.
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
                if (!_this.showPoly) {
                    displayedImage.src = _this.imageObjectUrl;
                }
                _this.buildImage();
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
                if (!_this.showPoly) {
                    displayedImage.src = _this.imageObjectUrl;
                }
                _this.buildImage();
            }
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
                    if (!_this.showPoly) {
                        displayedImage.src = _this.imageObjectUrl;
                    }
                    _this.buildImage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcG9saWZ5L3BvbGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9wb2xpZnkvcG9saWZ5X2JnLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDakMsYUFBYTtBQUN5QztBQUV0RCxhQUFhO0FBQ3FDO0FBRWxEO0lBWUU7UUFBQSxpQkFxTEM7UUFwTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGlFQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBTSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDakUsY0FBYyxDQUNLLENBQUM7UUFDdEIsSUFBTSxtQkFBbUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDbkUsZ0JBQWdCLENBQ0csQ0FBQztRQUN0QixJQUFNLG1CQUFtQixHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNuRSxnQkFBZ0IsQ0FDRyxD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LCJmaWxlIjoiMC5ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwb2xpZnkgZnJvbSBcInBvbGlmeVwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGRlZmF1bHRJbWFnZSBmcm9tIFwiLi9wdWJsaWMvdWxyaWNoLW1hcmVsaS5qcGdcIjtcblxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IFdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlciEuL2J1aWxkLndvcmtlclwiO1xuXG5jbGFzcyBQb2xpZnlEZW1vIHtcbiAgaXNVc2luZ1Bhc3RlOiBib29sZWFuO1xuICBpc1Byb2Nlc3Npbmc6IGJvb2xlYW47XG4gIGlzRXJyb3I6IGJvb2xlYW47XG4gIHBvbGlmeUNvbmZpZzogcG9saWZ5LlRyaWFuZ3VsYXRpb25Db25maWc7XG4gIGltYWdlT2JqZWN0VXJsOiBzdHJpbmcgfCBudWxsO1xuICBwb2x5T2JqZWN0VXJsOiBzdHJpbmcgfCBudWxsO1xuICBwcmVwcm9jZXNzZWRJbWFnZTogcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZSB8IG51bGw7XG4gIHdvcmtpbmdJbWFnZTogcG9saWZ5Lldhc21JbWFnZSB8IG51bGw7XG4gIHNob3dQb2x5OiBib29sZWFuO1xuICBpbWFnZUJsb2I6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzVXNpbmdQYXN0ZSA9IHRydWU7XG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvbHlPYmplY3RVcmwgPSBudWxsO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMucHJlcHJvY2Vzc2VkSW1hZ2UgPSBudWxsO1xuICAgIHRoaXMud29ya2luZ0ltYWdlID0gbnVsbDtcbiAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gZGVmYXVsdEltYWdlO1xuICAgIHRoaXMuc2hvd1BvbHkgPSBmYWxzZTtcbiAgICB0aGlzLmltYWdlQmxvYiA9IG51bGw7XG5cbiAgICBjb25zdCBtYXhWZXJ0aWNlc1NsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtdmVydGljZXNcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlZGdlVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImVkZ2UtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaGlnaFRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJoaWdoLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxvd1RocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJsb3ctdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvLyBBbHNvIGZvcmNlZnVsbHkgcmVzZXQgdmFsdWVzIHRvIHN0b2NrLlxuXG4gICAgbWF4VmVydGljZXNTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzID0gcGFyc2VJbnQobWF4VmVydGljZXNTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkID0gcGFyc2VGbG9hdChlZGdlVGhyZXNob2xkU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgaGlnaFRocmVzaG9sZFNsaWRlci5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5oaWdoX3RocmVzaG9sZCA9IHBhcnNlRmxvYXQoaGlnaFRocmVzaG9sZFNsaWRlci52YWx1ZSk7XG4gICAgfTtcblxuICAgIGxvd1RocmVzaG9sZFNsaWRlci5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5sb3dfdGhyZXNob2xkID0gcGFyc2VGbG9hdChsb3dUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICB0aGlzLnBvbGlmeUNvbmZpZyA9IHBvbGlmeS5Ucmlhbmd1bGF0aW9uQ29uZmlnLm5ldyhcbiAgICAgIHBhcnNlRmxvYXQobWF4VmVydGljZXNTbGlkZXIudmFsdWUpLFxuICAgICAgcGFyc2VGbG9hdChlZGdlVGhyZXNob2xkU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQobG93VGhyZXNob2xkU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQoaGlnaFRocmVzaG9sZFNsaWRlci52YWx1ZSlcbiAgICApO1xuXG4gICAgdGhpcy5idWlsZEltYWdlKCk7XG5cbiAgICBjb25zdCBwYXN0ZUltYWdlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXN0ZS1pbWFnZVwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlXCIpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2UtYWN0aW9uXCIpO1xuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWQtaW1hZ2UtYWN0aW9uXCIpO1xuXG4gICAgcGFzdGVJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgIHBhc3RlSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIHVwbG9hZEltYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGxvYWRJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICB1cGxvYWRJbWFnZUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIGlucHV0W3R5cGU9ZmlsZV1cIlxuICAgICk7XG4gICAgY29uc3QgZGlzcGxheWVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZGlzcGxheWVkLWltYWdlXCJcbiAgICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcblxuICAgIHVwbG9hZEltYWdlQWN0aW9uSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAodXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB1cGxvYWRJbWFnZUFjdGlvbklucHV0LmZpbGVzWzBdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwbG9hZC1pbWFnZS1hY3Rpb24gLmZpbGUtbmFtZVwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgZmlsZS5uYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgIGlmICghdGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gYnV0dG9uXCJcbiAgICApO1xuICAgIGNvbnN0IHBhc3RlSW1hZ2VJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gaW5wdXRcIlxuICAgICk7XG4gICAgcGFzdGVJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gcGFzdGVJbWFnZUlucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGFzdGVJbWFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAocGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGFzdGVJbWFnZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhc3RlSW1hZ2VCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGFzdGVJbWFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuaW1hZ2VPYmplY3RVcmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gcGFzdGVJbWFnZUlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwb2xpZnlTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwicG9saWZ5LXN3aXRjaFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHBvbGlmeVN3aXRjaC5jaGVja2VkID0gZmFsc2U7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICApIGFzIEhUTUxQcm9ncmVzc0VsZW1lbnQ7XG4gICAgcG9saWZ5U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXBvbGlmeVN3aXRjaC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd1BvbHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpc2FibGVTbGlkZXJzKCk7XG5cbiAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93UG9seSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVTbGlkZXJzKCk7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5wb2x5T2JqZWN0VXJsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVTbGlkZXJzKCkge1xuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBoaWdoVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImhpZ2gtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbG93VGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImxvdy10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgaGlnaFRocmVzaG9sZFNsaWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBsb3dUaHJlc2hvbGRTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlU2xpZGVycygpIHtcbiAgICBjb25zdCBtYXhWZXJ0aWNlc1NsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtdmVydGljZXNcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlZGdlVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImVkZ2UtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaGlnaFRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJoaWdoLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxvd1RocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJsb3ctdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICBoaWdoVGhyZXNob2xkU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgbG93VGhyZXNob2xkU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICAvLyBwcmVwcm9jZXNzSW1hZ2UoKTogcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZSB8IG51bGwge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQ2FsbGVkIHByZXByb2Nlc3MuXCIpO1xuXG4gIC8vICAgY29uc3QgaW1hZ2VVcmw6IHN0cmluZyA9IGRvY3VtZW50XG4gIC8vICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5ZWQtaW1hZ2VcIilcbiAgLy8gICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhcImltYWdlVXJsOiBcIiArIGltYWdlVXJsKTtcblxuICAvLyAgIGlmICh0aGlzLndvcmtpbmdJbWFnZSAhPT0gbnVsbCkge1xuICAvLyAgICAgdGhpcy53b3JraW5nSW1hZ2UuZnJlZSgpO1xuICAvLyAgIH1cblxuICAvLyAgIHRoaXMud29ya2luZ0ltYWdlID0gbmV3IHBvbGlmeS5XYXNtSW1hZ2UoaW1hZ2VVcmwpO1xuICAvLyAgIGNvbnN0IHRlbXBXb3JraW5nSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21JbWFnZShpbWFnZVVybCk7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGlmICh0aGlzLndvcmtpbmdJbWFnZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBsZXQgcHJlcHJvY2Vzc2VkSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZShcbiAgLy8gICAgICAgICB0ZW1wV29ya2luZ0ltYWdlLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmxvd190aHJlc2hvbGQsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGRcbiAgLy8gICAgICAgKTtcblxuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlJldHVybmluZyBwcmVwcm9jZXNzZWQgaW1hZ2UuLi5cIik7XG5cbiAgLy8gICAgICAgcmV0dXJuIHByZXByb2Nlc3NlZEltYWdlO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIndvcmtpbmdJbWFnZSB3YXMgbnVsbC4uLj9cIik7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBwcmVwcm9jZXNzaW5nOiBcIiArIGVycik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICAvLyB1cGRhdGVJbWFnZSgpOiBwb2xpZnkuV2FzbUltYWdlIHwgbnVsbCB7XG4gIC8vICAgY29uc29sZS5sb2coXCJDYWxsZWQgdXBkYXRlLlwiKTtcblxuICAvLyAgIGlmICh0aGlzLnByZXByb2Nlc3NlZEltYWdlICE9PSBudWxsICYmIHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlJldHVybmluZyB1cGRhdGVkIGltYWdlLlwiKTtcblxuICAvLyAgICAgICByZXR1cm4gdGhpcy53b3JraW5nSW1hZ2Uud2FzbV90cmlhbmd1bGF0aW9uKFxuICAvLyAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2VkSW1hZ2UsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkXG4gIC8vICAgICAgICk7XG4gIC8vICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgdXBkYXRpbmc6IFwiICsgZXJyKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVpdGhlciBwcmVwcm9jZXNzZWRJbWFnZSBvciB3b3JraW5nSW1hZ2Ugd2VyZSBudWxsLi4uXCIpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiBudWxsO1xuICAvLyB9XG5cbiAgYnVpbGRJbWFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJ1aWxkaW5nIGltYWdlLi4uXCIpO1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVTbGlkZXJzKCk7XG5cbiAgICBjb25zdCBpbWFnZVVybDogc3RyaW5nID0gdGhpcy5pbWFnZU9iamVjdFVybDtcblxuICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHNlbnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoaW1hZ2VVcmwpKTtcblxuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXG4gICAgICBpbWFnZVVybCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGQsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5sb3dfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzLFxuICAgIF0pO1xuXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIHdvcmtlclwiKTtcblxuICAgICAgaWYgKGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlQmxvYiA9IGUuZGF0YTtcbiAgICAgICAgdGhpcy5wb2x5T2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmltYWdlQmxvYik7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBcImRpc3BsYXllZC1pbWFnZVwiXG4gICAgICAgICkgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5wb2x5T2JqZWN0VXJsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgd29ya2VyLi4uXCIpO1xuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgdGhpcy5lbmFibGVTbGlkZXJzKCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIkRvbmUuXCIpO1xuICAgIH07XG4gIH1cbn1cblxuY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcuXCIpO1xuLy8gQHRzLWlnbm9yZVxuYnVsbWFTbGlkZXIuYXR0YWNoKCk7XG5uZXcgUG9saWZ5RGVtbygpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJvb3RzdHJhcC53b3JrZXIuanNcIik7XG59XG4iLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3BvbGlmeV9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wb2xpZnlfYmcuanNcIjsiLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vcG9saWZ5X2JnLndhc20nO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIGAke3ZhbH1gO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYFwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgYHZhbGAuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgSlNPTi5zdHJpbmdpZnkodmFsKSArICcpJztcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVycm9yc1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gYCR7dmFsLm5hbWV9OiAke3ZhbC5tZXNzYWdlfVxcbiR7dmFsLnN0YWNrfWA7XG4gICAgfVxuICAgIC8vIFRPRE8gd2UgY291bGQgdGVzdCBmb3IgbW9yZSB0aGluZ3MgaGVyZSwgbGlrZSBgU2V0YHMgYW5kIGBNYXBgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoKTtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbik7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMpO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWdldEludDMyTWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0SW50MzJNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0SW50MzJNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0SW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0SW50MzJNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCBkdG9yLCBmKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IGE6IGFyZzAsIGI6IGFyZzEsIGNudDogMSwgZHRvciB9O1xuICAgIGNvbnN0IHJlYWwgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBGaXJzdCB1cCB3aXRoIGEgY2xvc3VyZSB3ZSBpbmNyZW1lbnQgdGhlIGludGVybmFsIHJlZmVyZW5jZVxuICAgICAgICAvLyBjb3VudC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIFJ1c3QgY2xvc3VyZSBlbnZpcm9ubWVudCB3b24ndFxuICAgICAgICAvLyBiZSBkZWFsbG9jYXRlZCB3aGlsZSB3ZSdyZSBpbnZva2luZyBpdC5cbiAgICAgICAgc3RhdGUuY250Kys7XG4gICAgICAgIGNvbnN0IGEgPSBzdGF0ZS5hO1xuICAgICAgICBzdGF0ZS5hID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmKGEsIHN0YXRlLmIsIC4uLmFyZ3MpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKC0tc3RhdGUuY250ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8yLmdldChzdGF0ZS5kdG9yKShhLCBzdGF0ZS5iKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhbC5vcmlnaW5hbCA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHJlYWw7XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzE4KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB3YXNtLl9keW5fY29yZV9fb3BzX19mdW5jdGlvbl9fRm5NdXRfX0FfX19fT3V0cHV0X19fUl9hc193YXNtX2JpbmRnZW5fX2Nsb3N1cmVfX1dhc21DbG9zdXJlX19fZGVzY3JpYmVfX2ludm9rZV9faDI4NGQ4Mjc0NDJjZjA1YmUoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRDbGFzcyhpbnN0YW5jZSwga2xhc3MpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIGtsYXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7a2xhc3MubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnB0cjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHdhc20uX193YmluZGdlbl9leG5fc3RvcmUoYWRkSGVhcE9iamVjdChlKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVU4RnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl83NShhcmcwLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgd2FzbS53YXNtX2JpbmRnZW5fX2NvbnZlcnRfX2Nsb3N1cmVzX19pbnZva2UyX211dF9faGRkM2M3ZTM3MjlmODEwYWEoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSwgYWRkSGVhcE9iamVjdChhcmczKSk7XG59XG5cbi8qKlxuKiBBIGxpc3Qgb2Ygbm9kZXMuXG4qL1xuZXhwb3J0IGNsYXNzIE5vZGVMaXN0IHtcblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ19ub2RlbGlzdF9mcmVlKHB0cik7XG4gICAgfVxufVxuLyoqXG4qIEEgYFRyaWFuZ3VsYXRpb25Db25maWdgIGlzIHRoZSBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBhZmZlY3QgdGhlIHRyaWFuZ3VsYXRpb25cbiogYWxnb3JpdGhtJ3Mgb3V0cHV0LlxuKi9cbmV4cG9ydCBjbGFzcyBUcmlhbmd1bGF0aW9uQ29uZmlnIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoVHJpYW5ndWxhdGlvbkNvbmZpZy5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3RyaWFuZ3VsYXRpb25jb25maWdfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBtYXhfdmVydGljZXMoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX21heF92ZXJ0aWNlcyh0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQgPj4+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnRpY2VzIHdlIHdhbnQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IG1heF92ZXJ0aWNlcyhhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbWF4X3ZlcnRpY2VzKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWluaW1hbCBzdHJlbmd0aCBvZiBwb3RlbnRpYWwgdmVydGljZXMuXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGVkZ2VfdGhyZXNob2xkKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19lZGdlX3RocmVzaG9sZCh0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBlZGdlX3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIExvdyB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgZ3JlYXRlciB0aGFuIDAuMCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBoaWdoX3RocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgbG93X3RocmVzaG9sZCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbG93X3RocmVzaG9sZCh0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogTG93IHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBncmVhdGVyIHRoYW4gMC4wLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIGhpZ2hfdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBsb3dfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGhpZ2hfdGhyZXNob2xkKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19oaWdoX3RocmVzaG9sZCh0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogSGlnaCB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgbGVzcyB0aGFuIDExNDAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBncmVhdGVyIHRoYW4gdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBoaWdoX3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfaGlnaF90aHJlc2hvbGQodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFRyaWFuZ3VsYXRpb25Db25maWdgLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heF92ZXJ0aWNlc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbG93X3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhpZ2hfdGhyZXNob2xkXG4gICAgKiBAcmV0dXJucyB7VHJpYW5ndWxhdGlvbkNvbmZpZ31cbiAgICAqL1xuICAgIHN0YXRpYyBuZXcobWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20udHJpYW5ndWxhdGlvbmNvbmZpZ19uZXcobWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gVHJpYW5ndWxhdGlvbkNvbmZpZy5fX3dyYXAocmV0KTtcbiAgICB9XG59XG4vKipcbiogQSBXZWJBc3NlbWJseS1jb21wYXRpYmxlIHN0cnVjdCB0byB3b3JrIHdpdGggaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtSW1hZ2Uge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShXYXNtSW1hZ2UucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ193YXNtaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21JbWFnZWAuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICovXG4gICAgc3RhdGljIGNyZWF0ZV93YXNtX2ltYWdlKHVybCkge1xuICAgICAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHVybCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ud2FzbWltYWdlX2NyZWF0ZV93YXNtX2ltYWdlKHB0cjAsIGxlbjApO1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEJ1aWxkcyBhbiBpbWFnZSBmcm9tIGEgYFdhc21JbWFnZWAuXG4gICAgKiBAcmV0dXJucyB7YW55fVxuICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHZhciBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2VfYnVpbGQocHRyKTtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbG93LXBvbHkgYFdhc21JbWFnZWAgdmlhIHRoZSB0cmlhbmd1bGF0aW9uIG1ldGhvZC5cbiAgICAqXG4gICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGp1c3QgYSB3cmFwcGVyIHRoYXQgY2FsbHMgMyBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlciBmb3IgeW91OlxuICAgICogLSBgcHJlcHJvY2Vzc19pbWFnZWAgdG8gcHJlcHJvY2VzcyB0aGUgaW1hZ2UuXG4gICAgKiAtIGBub2RlX2RldGVjdGlvbmAgdG8gZGV0ZWN0IG5vZGVzIHVzaW5nIHRoZSBwcmVwcm9jZXNzZWQgaW1hZ2UuXG4gICAgKiAtIGB0cmlhbmd1bGF0aW9uYCB0byBjb21wdXRlIHRoZSB0cmlhbmd1bGF0aW9uIG9mIHRoZSBub2RlLWRldGVjdGVkIGltYWdlLlxuICAgICpcbiAgICAqIFlvdSBjYW4gaW5zdGVhZCBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBtYW51YWxseSBpZiB5b3Ugd2lzaCB0byBhbHRlciB0aGUgc3RlcHMgaW4gYW55IHdheS5cbiAgICAqIEBwYXJhbSB7VHJpYW5ndWxhdGlvbkNvbmZpZ30gY29uZmlnXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShjb25maWcpIHtcbiAgICAgICAgdmFyIHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhjb25maWcsIFRyaWFuZ3VsYXRpb25Db25maWcpO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShwdHIsIGNvbmZpZy5wdHIpO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRyaWFuZ3VsYXRlcyBwb2ludHMgZ2l2ZW4gYSBub2RlIGxpc3QuXG4gICAgKiBAcGFyYW0ge1dhc21QcmVwcm9jZXNzZWRJbWFnZX0gcHJlcHJvY2Vzc2VkX2ltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtXYXNtSW1hZ2V9XG4gICAgKi9cbiAgICB3YXNtX3RyaWFuZ3VsYXRpb24ocHJlcHJvY2Vzc2VkX2ltYWdlLCBtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkKSB7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhwcmVwcm9jZXNzZWRfaW1hZ2UsIFdhc21QcmVwcm9jZXNzZWRJbWFnZSk7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRpb24odGhpcy5wdHIsIHByZXByb2Nlc3NlZF9pbWFnZS5wdHIsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBwcmUtcHJvY2Vzc2VkIGltYWdlcy5cbiovXG5leHBvcnQgY2xhc3MgV2FzbVByZXByb2Nlc3NlZEltYWdlIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoV2FzbVByZXByb2Nlc3NlZEltYWdlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfd2FzbXByZXByb2Nlc3NlZGltYWdlX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2VgLlxuICAgICogQHBhcmFtIHtXYXNtSW1hZ2V9IGltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbG93X3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGhpZ2hfdGhyZXNob2xkXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbWFnZSwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpIHtcbiAgICAgICAgX2Fzc2VydENsYXNzKGltYWdlLCBXYXNtSW1hZ2UpO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtcHJlcHJvY2Vzc2VkaW1hZ2Vfd2FzbV9wcmVwcm9jZXNzX2ltYWdlKGltYWdlLnB0ciwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gV2FzbVByZXByb2Nlc3NlZEltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfd2FzbWltYWdlX25ldyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gV2FzbUltYWdlLl9fd3JhcChhcmcwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9zdHJpbmdfbmV3ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRoaGVhZGVyc185ZTg1ZjgzYWI0NWNmYzIxID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgSGVhZGVycyhnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2RlbGV0ZV9hODM1NDQ1ZTM4OTNiNGU4ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5kZWxldGUoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfaW5zdGFuY2VvZl9SZXNwb25zZV9mNTJjNjVjMzg5ODkwNjM5ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBSZXNwb25zZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX29rX2MyMDY0M2UwYTQ1ZGM1YTAgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5vaztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2hlYWRlcnNfNmZhZmIyYzc2NjlhOGFjNSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmhlYWRlcnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF8zYmQ0YTIxMDJmYzAzYWE3ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgUmVzcG9uc2UoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2FycmF5QnVmZmVyXzBiYTE3ZGZhYWQ4MDRiNmYgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5hcnJheUJ1ZmZlcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2ZldGNoX2Q3ZDUzZGQ3OWNhMjg5MDMgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5mZXRjaChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9jYl9kcm9wID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIGNvbnN0IG9iaiA9IHRha2VPYmplY3QoYXJnMCkub3JpZ2luYWw7XG4gICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgIG9iai5hID0gMDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciByZXQgPSBmYWxzZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2dldFJhbmRvbVZhbHVlc19jNzNmMDZiNWVkOGI4NzhkID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5nZXRSYW5kb21WYWx1ZXMoZ2V0T2JqZWN0KGFyZzEpKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfcmFuZG9tRmlsbFN5bmNfNWZhMGE3MjAzNWM3YmZkOSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkucmFuZG9tRmlsbFN5bmMoZ2V0QXJyYXlVOEZyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9NT0RVTEVfZmYxZTQ3ZjcwNzZlMGVlMSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBtb2R1bGU7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZWxmXzIzYjE0ZDYwYzhkYmY5ZGEgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3JlcXVpcmVfMWRhYjE4ZWEyMTFjNGZhMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnJlcXVpcmUoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19jcnlwdG9fZGY5NmYzNTc3YzhhOWJhZSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX21zQ3J5cHRvXzMzMWVmY2RiOWJlNDBkN2MgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5tc0NyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5faXNfdW5kZWZpbmVkID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld185NGE3ZGZhOTUyOWVjNmU4ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld25vYXJnc183YzZiZDUyMTk5MmI0MDIyID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2NhbGxfOTUxYmQwYzZkODE1ZDZmMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19jYWxsX2JmNzQ1YjE3NThiYjY2OTMgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfYmEwN2QwZGFhMGU0Njc3ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfYmI0ZTQ0ZWYwODllNDViNCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUwID0ge2E6IGFyZzAsIGI6IGFyZzF9O1xuICAgICAgICB2YXIgY2IwID0gKGFyZzAsIGFyZzEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0ZTAuYTtcbiAgICAgICAgICAgIHN0YXRlMC5hID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2JnX2FkYXB0ZXJfNzUoYSwgc3RhdGUwLmIsIGFyZzAsIGFyZzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTAuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShjYjApO1xuICAgICAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlMC5hID0gc3RhdGUwLmIgPSAwO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19yZXNvbHZlXzZlNjFlNjQwOTI1YTBkYjkgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IFByb21pc2UucmVzb2x2ZShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfdGhlbl9kZDM3ODU1OTc5NzQ3OThhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkudGhlbihnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfdGhlbl8wZjk1N2UwZjRjM2U1MzdhID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkudGhlbihnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZWxmXzZiYWYzYTNhYTdiNjM0MTUgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3dpbmRvd182M2ZjNDAyN2I2NmMyNjViID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHdpbmRvdy53aW5kb3c7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZ2xvYmFsVGhpc181MTNmYjI0N2U4ZTRlNmQyID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19nbG9iYWxfYjg3MjQ1Y2Q4ODZkNzExMyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBnbG9iYWwuZ2xvYmFsO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2J1ZmZlcl8zZjEyYTFjNjA4YzZkMDRlID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfNGM1MTM0MmY4NzI5OWM1YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApLCBhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld19jNmMwMjI4ZTZkMjJhMmY5ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2V0X2I5MWFmYWM5ZmQyMTZkOTkgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnNldChnZXRPYmplY3QoYXJnMSksIGFyZzIgPj4+IDApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2xlbmd0aF9jNjQ1ZTdjMDIyMzNiNDQwID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGxlbmd0aF9hNDI5ZTA4ZjhhOGZlNGIzID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBuZXcgVWludDhBcnJheShhcmcwID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3N1YmFycmF5XzAyZTJmY2ZhNmIyODVjYjIgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5zdWJhcnJheShhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NldF85YmRkNDEzMzg1MTQ2MTM3ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBSZWZsZWN0LnNldChnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gcmV0O1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2RlYnVnX3N0cmluZyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZGVidWdTdHJpbmcoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIwO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9tZW1vcnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gd2FzbS5tZW1vcnk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjQ3MyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgNDQsIF9fd2JnX2FkYXB0ZXJfMTgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidWxyaWNoLW1hcmVsaS5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9