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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcG9saWZ5L3BvbGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9wb2xpZnkvcG9saWZ5X2JnLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDakMsYUFBYTtBQUN5QztBQUV0RCxhQUFhO0FBQ3FDO0FBRWxEO0lBWUU7UUFBQSxpQkFtTEM7UUFsTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGlFQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBTSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDakUsY0FBYyxDQUNLLENBQUM7UUFDdEIsSUFBTSxtQkFBbUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDbkUsZ0JBQWdCLENBQ0csQ0FBQztRQUN0QixJQUFNLG1CQUFtQixHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNuRSxnQkFBZ0IsQ0FDRyxD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b3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvbGlmeSBmcm9tIFwicG9saWZ5XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZGVmYXVsdEltYWdlIGZyb20gXCIuL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZ1wiO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgV29ya2VyIGZyb20gXCJ3b3JrZXItbG9hZGVyIS4vYnVpbGQud29ya2VyXCI7XG5cbmNsYXNzIFBvbGlmeURlbW8ge1xuICBpc1VzaW5nUGFzdGU6IGJvb2xlYW47XG4gIGlzUHJvY2Vzc2luZzogYm9vbGVhbjtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgcG9saWZ5Q29uZmlnOiBwb2xpZnkuVHJpYW5ndWxhdGlvbkNvbmZpZztcbiAgaW1hZ2VPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHBvbHlPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHByZXByb2Nlc3NlZEltYWdlOiBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlIHwgbnVsbDtcbiAgd29ya2luZ0ltYWdlOiBwb2xpZnkuV2FzbUltYWdlIHwgbnVsbDtcbiAgc2hvd1BvbHk6IGJvb2xlYW47XG4gIGltYWdlQmxvYjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNVc2luZ1Bhc3RlID0gdHJ1ZTtcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucG9seU9iamVjdFVybCA9IG51bGw7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5wcmVwcm9jZXNzZWRJbWFnZSA9IG51bGw7XG4gICAgdGhpcy53b3JraW5nSW1hZ2UgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBkZWZhdWx0SW1hZ2U7XG4gICAgdGhpcy5zaG93UG9seSA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VCbG9iID0gbnVsbDtcblxuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBoaWdoVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImhpZ2gtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbG93VGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImxvdy10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyA9IHBhcnNlSW50KG1heFZlcnRpY2VzU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgZWRnZVRocmVzaG9sZFNsaWRlci5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZCA9IHBhcnNlRmxvYXQoZWRnZVRocmVzaG9sZFNsaWRlci52YWx1ZSk7XG4gICAgfTtcblxuICAgIGhpZ2hUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGQgPSBwYXJzZUZsb2F0KGhpZ2hUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgIH07XG5cbiAgICBsb3dUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCA9IHBhcnNlRmxvYXQobG93VGhyZXNob2xkU2xpZGVyLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5wb2xpZnlDb25maWcgPSBwb2xpZnkuVHJpYW5ndWxhdGlvbkNvbmZpZy5uZXcoXG4gICAgICBwYXJzZUZsb2F0KG1heFZlcnRpY2VzU2xpZGVyLnZhbHVlKSxcbiAgICAgIHBhcnNlRmxvYXQoZWRnZVRocmVzaG9sZFNsaWRlci52YWx1ZSksXG4gICAgICBwYXJzZUZsb2F0KGxvd1RocmVzaG9sZFNsaWRlci52YWx1ZSksXG4gICAgICBwYXJzZUZsb2F0KGhpZ2hUaHJlc2hvbGRTbGlkZXIudmFsdWUpXG4gICAgKTtcblxuICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2VcIik7XG4gICAgY29uc3QgdXBsb2FkSW1hZ2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZC1pbWFnZVwiKTtcblxuICAgIGNvbnN0IHBhc3RlSW1hZ2VBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3RlLWltYWdlLWFjdGlvblwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlLWFjdGlvblwiKTtcblxuICAgIHBhc3RlSW1hZ2VUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHVwbG9hZEltYWdlVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgIHVwbG9hZEltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgcGFzdGVJbWFnZUFjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjdXBsb2FkLWltYWdlLWFjdGlvbiBpbnB1dFt0eXBlPWZpbGVdXCJcbiAgICApO1xuICAgIGNvbnN0IGRpc3BsYXllZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImRpc3BsYXllZC1pbWFnZVwiXG4gICAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICB1cGxvYWRJbWFnZUFjdGlvbklucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHVwbG9hZEltYWdlQWN0aW9uSW5wdXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaWxlID0gdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlc1swXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIC5maWxlLW5hbWVcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGZpbGUubmFtZTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBhc3RlSW1hZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcGFzdGUtaW1hZ2UtYWN0aW9uIGJ1dHRvblwiXG4gICAgKTtcbiAgICBjb25zdCBwYXN0ZUltYWdlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcGFzdGUtaW1hZ2UtYWN0aW9uIGlucHV0XCJcbiAgICApO1xuICAgIHBhc3RlSW1hZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHBhc3RlSW1hZ2VJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhc3RlSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBhc3RlSW1hZ2VJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBhc3RlSW1hZ2VCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXN0ZUltYWdlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhc3RlSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dCAhPSBudWxsICYmXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHBhc3RlSW1hZ2VJbnB1dC52YWx1ZTtcblxuICAgICAgICAgIGlmICghdGhpcy5zaG93UG9seSkge1xuICAgICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9saWZ5U3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInBvbGlmeS1zd2l0Y2hcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBwb2xpZnlTd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInByb2dyZXNzLWJhclwiXG4gICAgKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuICAgIHBvbGlmeVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFwb2xpZnlTd2l0Y2guY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dQb2x5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlU2xpZGVycygpO1xuXG4gICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1BvbHkgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW5hYmxlU2xpZGVycygpO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMucG9seU9iamVjdFVybDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlU2xpZGVycygpIHtcbiAgICBjb25zdCBtYXhWZXJ0aWNlc1NsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtdmVydGljZXNcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlZGdlVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImVkZ2UtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaGlnaFRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJoaWdoLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxvd1RocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJsb3ctdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGhpZ2hUaHJlc2hvbGRTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgbG93VGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZVNsaWRlcnMoKSB7XG4gICAgY29uc3QgbWF4VmVydGljZXNTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LXZlcnRpY2VzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZWRnZVRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJlZGdlLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGhpZ2hUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaGlnaC10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsb3dUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibG93LXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgbWF4VmVydGljZXNTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgaGlnaFRocmVzaG9sZFNsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIGxvd1RocmVzaG9sZFNsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgLy8gcHJlcHJvY2Vzc0ltYWdlKCk6IHBvbGlmeS5XYXNtUHJlcHJvY2Vzc2VkSW1hZ2UgfCBudWxsIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIkNhbGxlZCBwcmVwcm9jZXNzLlwiKTtcblxuICAvLyAgIGNvbnN0IGltYWdlVXJsOiBzdHJpbmcgPSBkb2N1bWVudFxuICAvLyAgICAgLmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheWVkLWltYWdlXCIpXG4gIC8vICAgICAuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuXG4gIC8vICAgY29uc29sZS5sb2coXCJpbWFnZVVybDogXCIgKyBpbWFnZVVybCk7XG5cbiAgLy8gICBpZiAodGhpcy53b3JraW5nSW1hZ2UgIT09IG51bGwpIHtcbiAgLy8gICAgIHRoaXMud29ya2luZ0ltYWdlLmZyZWUoKTtcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLndvcmtpbmdJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbUltYWdlKGltYWdlVXJsKTtcbiAgLy8gICBjb25zdCB0ZW1wV29ya2luZ0ltYWdlID0gbmV3IHBvbGlmeS5XYXNtSW1hZ2UoaW1hZ2VVcmwpO1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBpZiAodGhpcy53b3JraW5nSW1hZ2UgIT09IG51bGwpIHtcbiAgLy8gICAgICAgbGV0IHByZXByb2Nlc3NlZEltYWdlID0gbmV3IHBvbGlmeS5XYXNtUHJlcHJvY2Vzc2VkSW1hZ2UoXG4gIC8vICAgICAgICAgdGVtcFdvcmtpbmdJbWFnZSxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5sb3dfdGhyZXNob2xkLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmhpZ2hfdGhyZXNob2xkXG4gIC8vICAgICAgICk7XG5cbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJSZXR1cm5pbmcgcHJlcHJvY2Vzc2VkIGltYWdlLi4uXCIpO1xuXG4gIC8vICAgICAgIHJldHVybiBwcmVwcm9jZXNzZWRJbWFnZTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3b3JraW5nSW1hZ2Ugd2FzIG51bGwuLi4/XCIpO1xuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgcHJlcHJvY2Vzc2luZzogXCIgKyBlcnIpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiBudWxsO1xuICAvLyB9XG5cbiAgLy8gdXBkYXRlSW1hZ2UoKTogcG9saWZ5Lldhc21JbWFnZSB8IG51bGwge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQ2FsbGVkIHVwZGF0ZS5cIik7XG5cbiAgLy8gICBpZiAodGhpcy5wcmVwcm9jZXNzZWRJbWFnZSAhPT0gbnVsbCAmJiB0aGlzLndvcmtpbmdJbWFnZSAhPT0gbnVsbCkge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJSZXR1cm5pbmcgdXBkYXRlZCBpbWFnZS5cIik7XG5cbiAgLy8gICAgICAgcmV0dXJuIHRoaXMud29ya2luZ0ltYWdlLndhc21fdHJpYW5ndWxhdGlvbihcbiAgLy8gICAgICAgICB0aGlzLnByZXByb2Nlc3NlZEltYWdlLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZFxuICAvLyAgICAgICApO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHVwZGF0aW5nOiBcIiArIGVycik7XG4gIC8vICAgICB9XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFaXRoZXIgcHJlcHJvY2Vzc2VkSW1hZ2Ugb3Igd29ya2luZ0ltYWdlIHdlcmUgbnVsbC4uLlwiKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIGJ1aWxkSW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJCdWlsZGluZyBpbWFnZS4uLlwiKTtcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlU2xpZGVycygpO1xuXG4gICAgY29uc3QgaW1hZ2VVcmw6IHN0cmluZyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZSBzZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KGltYWdlVXJsKSk7XG5cbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1xuICAgICAgaW1hZ2VVcmwsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmhpZ2hfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyxcbiAgICBdKTtcblxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG1lc3NhZ2UgZnJvbSB3b3JrZXJcIik7XG5cbiAgICAgIGlmIChlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZUJsb2IgPSBlLmRhdGE7XG4gICAgICAgIHRoaXMucG9seU9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5pbWFnZUJsb2IpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgXCJkaXNwbGF5ZWQtaW1hZ2VcIlxuICAgICAgICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBcInByb2dyZXNzLWJhclwiXG4gICAgICAgICkgYXMgSFRNTFByb2dyZXNzRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMucG9seU9iamVjdFVybDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHdvcmtlci4uLlwiKTtcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2xpZGVycygpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJEb25lLlwiKTtcbiAgICB9O1xuICB9XG59XG5cbmNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nLlwiKTtcbi8vIEB0cy1pZ25vcmVcbmJ1bG1hU2xpZGVyLmF0dGFjaCgpO1xubmV3IFBvbGlmeURlbW8oKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrZXJfZm4oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJib290c3RyYXAud29ya2VyLmpzXCIpO1xufVxuIiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9wb2xpZnlfYmcud2FzbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcG9saWZ5X2JnLmpzXCI7IiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3BvbGlmeV9iZy53YXNtJztcblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMikuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZnVuY3Rpb24gZGVidWdTdHJpbmcodmFsKSB7XG4gICAgLy8gcHJpbWl0aXZlIHR5cGVzXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHwgdmFsID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICBgJHt2YWx9YDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsfVwiYDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB2YWwuZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYFN5bWJvbCgke2Rlc2NyaXB0aW9ufSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbC5uYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYEZ1bmN0aW9uKCR7bmFtZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG9iamVjdHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGxldCBkZWJ1ZyA9ICdbJztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRlYnVnICs9IGRlYnVnU3RyaW5nKHZhbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSAnLCAnICsgZGVidWdTdHJpbmcodmFsW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyArPSAnXSc7XG4gICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICB9XG4gICAgLy8gVGVzdCBmb3IgYnVpbHQtaW5cbiAgICBjb25zdCBidWlsdEluTWF0Y2hlcyA9IC9cXFtvYmplY3QgKFteXFxdXSspXFxdLy5leGVjKHRvU3RyaW5nLmNhbGwodmFsKSk7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBpZiAoYnVpbHRJbk1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc05hbWUgPSBidWlsdEluTWF0Y2hlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWlsZWQgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkICdbb2JqZWN0IENsYXNzTmFtZV0nXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgPT0gJ09iamVjdCcpIHtcbiAgICAgICAgLy8gd2UncmUgYSB1c2VyIGRlZmluZWQgY2xhc3Mgb3IgT2JqZWN0XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IGF2b2lkcyBwcm9ibGVtcyB3aXRoIGN5Y2xlcywgYW5kIGlzIGdlbmVyYWxseSBtdWNoXG4gICAgICAgIC8vIGVhc2llciB0aGFuIGxvb3BpbmcgdGhyb3VnaCBvd25Qcm9wZXJ0aWVzIG9mIGB2YWxgLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlcnJvcnNcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbC5uYW1lfTogJHt2YWwubWVzc2FnZX1cXG4ke3ZhbC5zdGFja31gO1xuICAgIH1cbiAgICAvLyBUT0RPIHdlIGNvdWxkIHRlc3QgZm9yIG1vcmUgdGhpbmdzIGhlcmUsIGxpa2UgYFNldGBzIGFuZCBgTWFwYHMuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgZHRvciwgZikge1xuICAgIGNvbnN0IHN0YXRlID0geyBhOiBhcmcwLCBiOiBhcmcxLCBjbnQ6IDEsIGR0b3IgfTtcbiAgICBjb25zdCByZWFsID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gRmlyc3QgdXAgd2l0aCBhIGNsb3N1cmUgd2UgaW5jcmVtZW50IHRoZSBpbnRlcm5hbCByZWZlcmVuY2VcbiAgICAgICAgLy8gY291bnQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBSdXN0IGNsb3N1cmUgZW52aXJvbm1lbnQgd29uJ3RcbiAgICAgICAgLy8gYmUgZGVhbGxvY2F0ZWQgd2hpbGUgd2UncmUgaW52b2tpbmcgaXQuXG4gICAgICAgIHN0YXRlLmNudCsrO1xuICAgICAgICBjb25zdCBhID0gc3RhdGUuYTtcbiAgICAgICAgc3RhdGUuYSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZihhLCBzdGF0ZS5iLCAuLi5hcmdzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICgtLXN0YXRlLmNudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMi5nZXQoc3RhdGUuZHRvcikoYSwgc3RhdGUuYik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlYWwub3JpZ2luYWwgPSBzdGF0ZTtcblxuICAgIHJldHVybiByZWFsO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8xOChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgd2FzbS5fZHluX2NvcmVfX29wc19fZnVuY3Rpb25fX0ZuTXV0X19BX19fX091dHB1dF9fX1JfYXNfd2FzbV9iaW5kZ2VuX19jbG9zdXJlX19XYXNtQ2xvc3VyZV9fX2Rlc2NyaWJlX19pbnZva2VfX2gyODRkODI3NDQyY2YwNWJlKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMikpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0Q2xhc3MoaW5zdGFuY2UsIGtsYXNzKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBrbGFzcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBleHBlY3RlZCBpbnN0YW5jZSBvZiAke2tsYXNzLm5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5wdHI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGFkZEhlYXBPYmplY3QoZSkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyAxLCBwdHIgLyAxICsgbGVuKTtcbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfNzUoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHdhc20ud2FzbV9iaW5kZ2VuX19jb252ZXJ0X19jbG9zdXJlc19faW52b2tlMl9tdXRfX2hkZDNjN2UzNzI5ZjgxMGFhKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMiksIGFkZEhlYXBPYmplY3QoYXJnMykpO1xufVxuXG4vKipcbiogQSBsaXN0IG9mIG5vZGVzLlxuKi9cbmV4cG9ydCBjbGFzcyBOb2RlTGlzdCB7XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfbm9kZWxpc3RfZnJlZShwdHIpO1xuICAgIH1cbn1cbi8qKlxuKiBBIGBUcmlhbmd1bGF0aW9uQ29uZmlnYCBpcyB0aGUgcGFyYW1ldGVycyB0aGF0IHdpbGwgYWZmZWN0IHRoZSB0cmlhbmd1bGF0aW9uXG4qIGFsZ29yaXRobSdzIG91dHB1dC5cbiovXG5leHBvcnQgY2xhc3MgVHJpYW5ndWxhdGlvbkNvbmZpZyB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFRyaWFuZ3VsYXRpb25Db25maWcucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG5cbiAgICAgICAgd2FzbS5fX3diZ190cmlhbmd1bGF0aW9uY29uZmlnX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgbWF4X3ZlcnRpY2VzKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0ID4+PiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBtYXhfdmVydGljZXMoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX21heF92ZXJ0aWNlcyh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBlZGdlX3RocmVzaG9sZCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgZWRnZV90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGxvd190aHJlc2hvbGQoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIExvdyB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgZ3JlYXRlciB0aGFuIDAuMCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBoaWdoX3RocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbG93X3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbG93X3RocmVzaG9sZCh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogSGlnaCB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgbGVzcyB0aGFuIDExNDAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBncmVhdGVyIHRoYW4gdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBoaWdoX3RocmVzaG9sZCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfaGlnaF90aHJlc2hvbGQodGhpcy5wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgaGlnaF90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBUcmlhbmd1bGF0aW9uQ29uZmlnYC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1RyaWFuZ3VsYXRpb25Db25maWd9XG4gICAgKi9cbiAgICBzdGF0aWMgbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLnRyaWFuZ3VsYXRpb25jb25maWdfbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFRyaWFuZ3VsYXRpb25Db25maWcuX193cmFwKHJldCk7XG4gICAgfVxufVxuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIGltYWdlcy5cbiovXG5leHBvcnQgY2xhc3MgV2FzbUltYWdlIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoV2FzbUltYWdlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193Ymdfd2FzbWltYWdlX2ZyZWUocHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBXYXNtSW1hZ2VgLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVfd2FzbV9pbWFnZSh1cmwpIHtcbiAgICAgICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMCh1cmwsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIHZhciByZXQgPSB3YXNtLndhc21pbWFnZV9jcmVhdGVfd2FzbV9pbWFnZShwdHIwLCBsZW4wKTtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBCdWlsZHMgYW4gaW1hZ2UgZnJvbSBhIGBXYXNtSW1hZ2VgLlxuICAgICogQHJldHVybnMge2FueX1cbiAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICB2YXIgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ud2FzbWltYWdlX2J1aWxkKHB0cik7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIGxvdy1wb2x5IGBXYXNtSW1hZ2VgIHZpYSB0aGUgdHJpYW5ndWxhdGlvbiBtZXRob2QuXG4gICAgKlxuICAgICogVGhpcyBmdW5jdGlvbiBpcyBqdXN0IGEgd3JhcHBlciB0aGF0IGNhbGxzIDMgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXIgZm9yIHlvdTpcbiAgICAqIC0gYHByZXByb2Nlc3NfaW1hZ2VgIHRvIHByZXByb2Nlc3MgdGhlIGltYWdlLlxuICAgICogLSBgbm9kZV9kZXRlY3Rpb25gIHRvIGRldGVjdCBub2RlcyB1c2luZyB0aGUgcHJlcHJvY2Vzc2VkIGltYWdlLlxuICAgICogLSBgdHJpYW5ndWxhdGlvbmAgdG8gY29tcHV0ZSB0aGUgdHJpYW5ndWxhdGlvbiBvZiB0aGUgbm9kZS1kZXRlY3RlZCBpbWFnZS5cbiAgICAqXG4gICAgKiBZb3UgY2FuIGluc3RlYWQgY2FsbCB0aGVzZSBmdW5jdGlvbnMgbWFudWFsbHkgaWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHN0ZXBzIGluIGFueSB3YXkuXG4gICAgKiBAcGFyYW0ge1RyaWFuZ3VsYXRpb25Db25maWd9IGNvbmZpZ1xuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGVfaW1hZ2UoY29uZmlnKSB7XG4gICAgICAgIHZhciBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuICAgICAgICBfYXNzZXJ0Q2xhc3MoY29uZmlnLCBUcmlhbmd1bGF0aW9uQ29uZmlnKTtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ud2FzbWltYWdlX3dhc21fdHJpYW5ndWxhdGVfaW1hZ2UocHRyLCBjb25maWcucHRyKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUcmlhbmd1bGF0ZXMgcG9pbnRzIGdpdmVuIGEgbm9kZSBsaXN0LlxuICAgICogQHBhcmFtIHtXYXNtUHJlcHJvY2Vzc2VkSW1hZ2V9IHByZXByb2Nlc3NlZF9pbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heF92ZXJ0aWNlc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VfdGhyZXNob2xkXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0aW9uKHByZXByb2Nlc3NlZF9pbWFnZSwgbWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MocHJlcHJvY2Vzc2VkX2ltYWdlLCBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UpO1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0aW9uKHRoaXMucHRyLCBwcmVwcm9jZXNzZWRfaW1hZ2UucHRyLCBtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG59XG4vKipcbiogQSBXZWJBc3NlbWJseS1jb21wYXRpYmxlIHN0cnVjdCB0byB3b3JrIHdpdGggcHJlLXByb2Nlc3NlZCBpbWFnZXMuXG4qL1xuZXhwb3J0IGNsYXNzIFdhc21QcmVwcm9jZXNzZWRJbWFnZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFdhc21QcmVwcm9jZXNzZWRJbWFnZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICB3YXNtLl9fd2JnX3dhc21wcmVwcm9jZXNzZWRpbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbVByZXByb2Nlc3NlZEltYWdlYC5cbiAgICAqIEBwYXJhbSB7V2FzbUltYWdlfSBpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhpbWFnZSwgV2FzbUltYWdlKTtcbiAgICAgICAgdmFyIHJldCA9IHdhc20ud2FzbXByZXByb2Nlc3NlZGltYWdlX3dhc21fcHJlcHJvY2Vzc19pbWFnZShpbWFnZS5wdHIsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFdhc21QcmVwcm9jZXNzZWRJbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZiA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3dhc21pbWFnZV9uZXcgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IFdhc21JbWFnZS5fX3dyYXAoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWYgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fc3RyaW5nX25ldyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aGhlYWRlcnNfOWU4NWY4M2FiNDVjZmMyMSA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gbmV3IEhlYWRlcnMoZ2V0T2JqZWN0KGFyZzApKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19kZWxldGVfYTgzNTQ0NWUzODkzYjRlOCA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZGVsZXRlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2luc3RhbmNlb2ZfUmVzcG9uc2VfZjUyYzY1YzM4OTg5MDYzOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApIGluc3RhbmNlb2YgUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19va19jMjA2NDNlMGE0NWRjNWEwID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkub2s7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19oZWFkZXJzXzZmYWZiMmM3NjY5YThhYzUgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5oZWFkZXJzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3d2l0aG9wdGJ1ZmZlcnNvdXJjZWFuZGluaXRfM2JkNGEyMTAyZmMwM2FhNyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFJlc3BvbnNlKGdldE9iamVjdChhcmcwKSwgZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19hcnJheUJ1ZmZlcl8wYmExN2RmYWFkODA0YjZmID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuYXJyYXlCdWZmZXIoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19mZXRjaF9kN2Q1M2RkNzljYTI4OTAzID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuZmV0Y2goZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fY2JfZHJvcCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICBjb25zdCBvYmogPSB0YWtlT2JqZWN0KGFyZzApLm9yaWdpbmFsO1xuICAgIGlmIChvYmouY250LS0gPT0gMSkge1xuICAgICAgICBvYmouYSA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19nZXRSYW5kb21WYWx1ZXNfYzczZjA2YjVlZDhiODc4ZCA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZ2V0UmFuZG9tVmFsdWVzKGdldE9iamVjdChhcmcxKSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3JhbmRvbUZpbGxTeW5jXzVmYTBhNzIwMzVjN2JmZDkgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnJhbmRvbUZpbGxTeW5jKGdldEFycmF5VThGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zdGF0aWNfYWNjZXNzb3JfTU9EVUxFX2ZmMWU0N2Y3MDc2ZTBlZTEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gbW9kdWxlO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2VsZl8yM2IxNGQ2MGM4ZGJmOWRhID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19yZXF1aXJlXzFkYWIxOGVhMjExYzRmYTEgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5yZXF1aXJlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfY3J5cHRvX2RmOTZmMzU3N2M4YTliYWUgPSBmdW5jdGlvbihhcmcwKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5jcnlwdG87XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19tc0NyeXB0b18zMzFlZmNkYjliZTQwZDdjID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkubXNDcnlwdG87XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfOTRhN2RmYTk1MjllYzZlOCA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdub2FyZ3NfN2M2YmQ1MjE5OTJiNDAyMiA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEZ1bmN0aW9uKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19jYWxsXzk1MWJkMGM2ZDgxNWQ2ZjEgPSBoYW5kbGVFcnJvcihmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfY2FsbF9iZjc0NWIxNzU4YmI2NjkzID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3X2JhMDdkMGRhYTBlNDY3N2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfbmV3X2JiNGU0NGVmMDg5ZTQ1YjQgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHN0YXRlMCA9IHthOiBhcmcwLCBiOiBhcmcxfTtcbiAgICAgICAgdmFyIGNiMCA9IChhcmcwLCBhcmcxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhID0gc3RhdGUwLmE7XG4gICAgICAgICAgICBzdGF0ZTAuYSA9IDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX3diZ19hZGFwdGVyXzc1KGEsIHN0YXRlMC5iLCBhcmcwLCBhcmcxKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc3RhdGUwLmEgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoY2IwKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZTAuYSA9IHN0YXRlMC5iID0gMDtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfcmVzb2x2ZV82ZTYxZTY0MDkyNWEwZGI5ID0gZnVuY3Rpb24oYXJnMCkge1xuICAgIHZhciByZXQgPSBQcm9taXNlLnJlc29sdmUoZ2V0T2JqZWN0KGFyZzApKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3RoZW5fZGQzNzg1NTk3OTc0Nzk4YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRoZW4oZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3RoZW5fMGY5NTdlMGY0YzNlNTM3YSA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRoZW4oZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193Ymdfc2VsZl82YmFmM2EzYWE3YjYzNDE1ID0gaGFuZGxlRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ193aW5kb3dfNjNmYzQwMjdiNjZjMjY1YiA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSB3aW5kb3cud2luZG93O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX2dsb2JhbFRoaXNfNTEzZmIyNDdlOGU0ZTZkMiA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSBnbG9iYWxUaGlzLmdsb2JhbFRoaXM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmdfZ2xvYmFsX2I4NzI0NWNkODg2ZDcxMTMgPSBoYW5kbGVFcnJvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBfX3diZ19idWZmZXJfM2YxMmExYzYwOGM2ZDA0ZSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmJ1ZmZlcjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoXzRjNTEzNDJmODcyOTljNWEgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IG5ldyBVaW50OEFycmF5KGdldE9iamVjdChhcmcwKSwgYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19uZXdfYzZjMDIyOGU2ZDIyYTJmOSA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX3NldF9iOTFhZmFjOWZkMjE2ZDk5ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19sZW5ndGhfYzY0NWU3YzAyMjMzYjQ0MCA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JnX25ld3dpdGhsZW5ndGhfYTQyOWUwOGY4YThmZTRiMyA9IGZ1bmN0aW9uKGFyZzApIHtcbiAgICB2YXIgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoYXJnMCA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zdWJhcnJheV8wMmUyZmNmYTZiMjg1Y2IyID0gZnVuY3Rpb24oYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHZhciByZXQgPSBnZXRPYmplY3QoYXJnMCkuc3ViYXJyYXkoYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diZ19zZXRfOWJkZDQxMzM4NTE0NjEzNyA9IGhhbmRsZUVycm9yKGZ1bmN0aW9uKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgcmV0ID0gUmVmbGVjdC5zZXQoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIHJldDtcbn0pO1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9kZWJ1Z19zdHJpbmcgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgdmFyIHJldCA9IGRlYnVnU3RyaW5nKGdldE9iamVjdChhcmcxKSk7XG4gICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMDtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbn07XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3Rocm93ID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fbWVtb3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHdhc20ubWVtb3J5O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI0NzMgPSBmdW5jdGlvbihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgdmFyIHJldCA9IG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIDQ0LCBfX3diZ19hZGFwdGVyXzE4KTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInVscmljaC1tYXJlbGkuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==