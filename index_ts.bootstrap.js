"use strict";
(self["webpackChunkpolify_demo"] = self["webpackChunkpolify_demo"] || []).push([["index_ts"],{

/***/ "./public/ulrich-mareli.jpg":
/*!**********************************!*\
  !*** ./public/ulrich-mareli.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ulrich-mareli.jpg");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        // Also forcefully reset values to stock.
        maxVerticesSlider.value = "1000";
        edgeThresholdSlider.value = "10.0";
        this.polifyConfig = polify__WEBPACK_IMPORTED_MODULE_0__.TriangulationConfig.new(parseFloat(maxVerticesSlider.value), parseFloat(edgeThresholdSlider.value), 0.05, 5.0);
        var updateMaxVertices = function () {
            var newValue = parseInt(maxVerticesSlider.value);
            if (_this.polifyConfig.edge_threshold != newValue) {
                _this.polifyConfig.max_vertices = newValue;
                if (_this.showPoly) {
                    displayedImage.style.display = "none";
                    progressBar.style.display = "block";
                }
                _this.buildImage();
            }
        };
        var updateEdgeThreshold = function () {
            var newValue = parseFloat(edgeThresholdSlider.value);
            if (_this.polifyConfig.edge_threshold != newValue) {
                _this.polifyConfig.edge_threshold = newValue;
                if (_this.showPoly) {
                    displayedImage.style.display = "none";
                    progressBar.style.display = "block";
                }
                _this.buildImage();
            }
        };
        maxVerticesSlider.onmouseup = updateMaxVertices;
        maxVerticesSlider.ontouchend = updateMaxVertices;
        edgeThresholdSlider.onmouseup = updateEdgeThreshold;
        edgeThresholdSlider.ontouchend = updateEdgeThreshold;
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
                else {
                    displayedImage.style.display = "none";
                    progressBar.style.display = "block";
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
                else {
                    displayedImage.style.display = "none";
                    progressBar.style.display = "block";
                }
                _this.buildImage();
            }
        });
        pasteImageInput.value = ""; // Init to be empty and disabled.
        pasteImageButton.setAttribute("disabled", "");
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
                    else {
                        displayedImage.style.display = "none";
                        progressBar.style.display = "block";
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
                    if (_this.polyObjectUrl != null) {
                        displayedImage.src = _this.polyObjectUrl;
                    }
                }
            }
        });
    }
    PolifyDemo.prototype.enableSliders = function () {
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        maxVerticesSlider.removeAttribute("disabled");
        edgeThresholdSlider.removeAttribute("disabled");
    };
    PolifyDemo.prototype.disableSliders = function () {
        var maxVerticesSlider = document.getElementById("max-vertices");
        var edgeThresholdSlider = document.getElementById("edge-threshold");
        maxVerticesSlider.setAttribute("disabled", "disabled");
        edgeThresholdSlider.setAttribute("disabled", "disabled");
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
        var displayedImage = document.getElementById("displayed-image");
        displayedImage.src = this.imageObjectUrl;
        if (this.polyObjectUrl != null) {
            URL.revokeObjectURL(this.polyObjectUrl);
        }
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
            console.log("Received message from worker.");
            if (e.data !== null) {
                _this.imageBlob = e.data;
                _this.polyObjectUrl = URL.createObjectURL(_this.imageBlob);
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
            console.log("Terminating worker. Bye-bye!");
            worker.terminate();
        };
    };
    return PolifyDemo;
}());
console.log("Initializing.");
// @ts-ignore
bulmaSlider.attach();
new PolifyDemo();


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./build.worker.ts":
/*!******************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./build.worker.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "bootstrap.worker.js");
}


/***/ }),

/***/ "./polify/polify.js":
/*!**************************!*\
  !*** ./polify/polify.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromaSamplePosition: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.ChromaSamplePosition),
/* harmony export */   ChromaSampling: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.ChromaSampling),
/* harmony export */   NodeList: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.NodeList),
/* harmony export */   PixelRange: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.PixelRange),
/* harmony export */   TriangulationConfig: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.TriangulationConfig),
/* harmony export */   Tune: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.Tune),
/* harmony export */   WasmImage: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.WasmImage),
/* harmony export */   WasmPreprocessedImage: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.WasmPreprocessedImage),
/* harmony export */   __wbg_arrayBuffer_29931d52c7206b02: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_arrayBuffer_29931d52c7206b02),
/* harmony export */   __wbg_buffer_12d079cc21e14bdb: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_buffer_12d079cc21e14bdb),
/* harmony export */   __wbg_call_27c0f87801dedf93: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_27c0f87801dedf93),
/* harmony export */   __wbg_call_b3ca7c6051f9bec1: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_b3ca7c6051f9bec1),
/* harmony export */   __wbg_crypto_d05b68a3572bb8ca: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_crypto_d05b68a3572bb8ca),
/* harmony export */   __wbg_delete_5e0fc0e11374d8cb: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_delete_5e0fc0e11374d8cb),
/* harmony export */   __wbg_error_aff92d1dd7a35566: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_error_aff92d1dd7a35566),
/* harmony export */   __wbg_fetch_45c8a2a783cf6ccd: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_fetch_45c8a2a783cf6ccd),
/* harmony export */   __wbg_getRandomValues_7e42b4fb8779dc6d: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getRandomValues_7e42b4fb8779dc6d),
/* harmony export */   __wbg_globalThis_d1e6af4856ba331b: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_globalThis_d1e6af4856ba331b),
/* harmony export */   __wbg_global_207b558942527489: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_global_207b558942527489),
/* harmony export */   __wbg_headers_9620bfada380764a: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_headers_9620bfada380764a),
/* harmony export */   __wbg_instanceof_Response_849eb93e75734b6e: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Response_849eb93e75734b6e),
/* harmony export */   __wbg_length_c20a40f15020d68a: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_c20a40f15020d68a),
/* harmony export */   __wbg_msCrypto_10fc94afee92bd76: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_msCrypto_10fc94afee92bd76),
/* harmony export */   __wbg_new_28c511d9baebfa89: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_28c511d9baebfa89),
/* harmony export */   __wbg_new_63b92bc8671ed464: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_63b92bc8671ed464),
/* harmony export */   __wbg_new_72fb9a18b5ae2624: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_72fb9a18b5ae2624),
/* harmony export */   __wbg_new_81740750da40724f: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_81740750da40724f),
/* harmony export */   __wbg_newnoargs_e258087cd0daa0ea: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newnoargs_e258087cd0daa0ea),
/* harmony export */   __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb),
/* harmony export */   __wbg_newwithheaders_16233a08e765c2b0: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithheaders_16233a08e765c2b0),
/* harmony export */   __wbg_newwithlength_e9b4878cebadb3d3: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithlength_e9b4878cebadb3d3),
/* harmony export */   __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96),
/* harmony export */   __wbg_node_43b1089f407e4ec2: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_node_43b1089f407e4ec2),
/* harmony export */   __wbg_ok_38d7c30bbc66719e: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_ok_38d7c30bbc66719e),
/* harmony export */   __wbg_process_b02b3570280d0366: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_process_b02b3570280d0366),
/* harmony export */   __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_queueMicrotask_3cbae2ec6b6cd3d6),
/* harmony export */   __wbg_queueMicrotask_481971b0d87f3dd4: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_queueMicrotask_481971b0d87f3dd4),
/* harmony export */   __wbg_randomFillSync_b70ccbdf4926a99d: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_randomFillSync_b70ccbdf4926a99d),
/* harmony export */   __wbg_require_9a7e0f667ead4995: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_require_9a7e0f667ead4995),
/* harmony export */   __wbg_resolve_b0083a7967828ec8: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_resolve_b0083a7967828ec8),
/* harmony export */   __wbg_self_ce0dbfc45cf2f5be: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_self_ce0dbfc45cf2f5be),
/* harmony export */   __wbg_set_1f9b04f170055d33: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_1f9b04f170055d33),
/* harmony export */   __wbg_set_a47bac70306a19a7: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_a47bac70306a19a7),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   __wbg_subarray_a1f73cd4b5b42fe1: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_subarray_a1f73cd4b5b42fe1),
/* harmony export */   __wbg_then_0c86a60e8fcfe9f6: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_then_0c86a60e8fcfe9f6),
/* harmony export */   __wbg_then_a73caa9a87991566: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_then_a73caa9a87991566),
/* harmony export */   __wbg_versions_c1cb42213cedf0f5: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_versions_c1cb42213cedf0f5),
/* harmony export */   __wbg_wasmimage_new: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_wasmimage_new),
/* harmony export */   __wbg_window_c6fb939a7f436783: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_window_c6fb939a7f436783),
/* harmony export */   __wbindgen_cb_drop: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_cb_drop),
/* harmony export */   __wbindgen_closure_wrapper879: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper879),
/* harmony export */   __wbindgen_is_function: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_function),
/* harmony export */   __wbindgen_is_object: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_object),
/* harmony export */   __wbindgen_is_string: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_string),
/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),
/* harmony export */   __wbindgen_memory: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_memory),
/* harmony export */   __wbindgen_object_clone_ref: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_clone_ref),
/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),
/* harmony export */   __wbindgen_string_new: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_new),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _polify_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polify_bg.wasm */ "./polify/polify_bg.wasm");
/* harmony import */ var _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polify_bg.js */ "./polify/polify_bg.js");


(0,_polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_polify_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./polify/polify_bg.js":
/*!*****************************!*\
  !*** ./polify/polify_bg.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromaSamplePosition: () => (/* binding */ ChromaSamplePosition),
/* harmony export */   ChromaSampling: () => (/* binding */ ChromaSampling),
/* harmony export */   NodeList: () => (/* binding */ NodeList),
/* harmony export */   PixelRange: () => (/* binding */ PixelRange),
/* harmony export */   TriangulationConfig: () => (/* binding */ TriangulationConfig),
/* harmony export */   Tune: () => (/* binding */ Tune),
/* harmony export */   WasmImage: () => (/* binding */ WasmImage),
/* harmony export */   WasmPreprocessedImage: () => (/* binding */ WasmPreprocessedImage),
/* harmony export */   __wbg_arrayBuffer_29931d52c7206b02: () => (/* binding */ __wbg_arrayBuffer_29931d52c7206b02),
/* harmony export */   __wbg_buffer_12d079cc21e14bdb: () => (/* binding */ __wbg_buffer_12d079cc21e14bdb),
/* harmony export */   __wbg_call_27c0f87801dedf93: () => (/* binding */ __wbg_call_27c0f87801dedf93),
/* harmony export */   __wbg_call_b3ca7c6051f9bec1: () => (/* binding */ __wbg_call_b3ca7c6051f9bec1),
/* harmony export */   __wbg_crypto_d05b68a3572bb8ca: () => (/* binding */ __wbg_crypto_d05b68a3572bb8ca),
/* harmony export */   __wbg_delete_5e0fc0e11374d8cb: () => (/* binding */ __wbg_delete_5e0fc0e11374d8cb),
/* harmony export */   __wbg_error_aff92d1dd7a35566: () => (/* binding */ __wbg_error_aff92d1dd7a35566),
/* harmony export */   __wbg_fetch_45c8a2a783cf6ccd: () => (/* binding */ __wbg_fetch_45c8a2a783cf6ccd),
/* harmony export */   __wbg_getRandomValues_7e42b4fb8779dc6d: () => (/* binding */ __wbg_getRandomValues_7e42b4fb8779dc6d),
/* harmony export */   __wbg_globalThis_d1e6af4856ba331b: () => (/* binding */ __wbg_globalThis_d1e6af4856ba331b),
/* harmony export */   __wbg_global_207b558942527489: () => (/* binding */ __wbg_global_207b558942527489),
/* harmony export */   __wbg_headers_9620bfada380764a: () => (/* binding */ __wbg_headers_9620bfada380764a),
/* harmony export */   __wbg_instanceof_Response_849eb93e75734b6e: () => (/* binding */ __wbg_instanceof_Response_849eb93e75734b6e),
/* harmony export */   __wbg_length_c20a40f15020d68a: () => (/* binding */ __wbg_length_c20a40f15020d68a),
/* harmony export */   __wbg_msCrypto_10fc94afee92bd76: () => (/* binding */ __wbg_msCrypto_10fc94afee92bd76),
/* harmony export */   __wbg_new_28c511d9baebfa89: () => (/* binding */ __wbg_new_28c511d9baebfa89),
/* harmony export */   __wbg_new_63b92bc8671ed464: () => (/* binding */ __wbg_new_63b92bc8671ed464),
/* harmony export */   __wbg_new_72fb9a18b5ae2624: () => (/* binding */ __wbg_new_72fb9a18b5ae2624),
/* harmony export */   __wbg_new_81740750da40724f: () => (/* binding */ __wbg_new_81740750da40724f),
/* harmony export */   __wbg_newnoargs_e258087cd0daa0ea: () => (/* binding */ __wbg_newnoargs_e258087cd0daa0ea),
/* harmony export */   __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: () => (/* binding */ __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb),
/* harmony export */   __wbg_newwithheaders_16233a08e765c2b0: () => (/* binding */ __wbg_newwithheaders_16233a08e765c2b0),
/* harmony export */   __wbg_newwithlength_e9b4878cebadb3d3: () => (/* binding */ __wbg_newwithlength_e9b4878cebadb3d3),
/* harmony export */   __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96: () => (/* binding */ __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96),
/* harmony export */   __wbg_node_43b1089f407e4ec2: () => (/* binding */ __wbg_node_43b1089f407e4ec2),
/* harmony export */   __wbg_ok_38d7c30bbc66719e: () => (/* binding */ __wbg_ok_38d7c30bbc66719e),
/* harmony export */   __wbg_process_b02b3570280d0366: () => (/* binding */ __wbg_process_b02b3570280d0366),
/* harmony export */   __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => (/* binding */ __wbg_queueMicrotask_3cbae2ec6b6cd3d6),
/* harmony export */   __wbg_queueMicrotask_481971b0d87f3dd4: () => (/* binding */ __wbg_queueMicrotask_481971b0d87f3dd4),
/* harmony export */   __wbg_randomFillSync_b70ccbdf4926a99d: () => (/* binding */ __wbg_randomFillSync_b70ccbdf4926a99d),
/* harmony export */   __wbg_require_9a7e0f667ead4995: () => (/* binding */ __wbg_require_9a7e0f667ead4995),
/* harmony export */   __wbg_resolve_b0083a7967828ec8: () => (/* binding */ __wbg_resolve_b0083a7967828ec8),
/* harmony export */   __wbg_self_ce0dbfc45cf2f5be: () => (/* binding */ __wbg_self_ce0dbfc45cf2f5be),
/* harmony export */   __wbg_set_1f9b04f170055d33: () => (/* binding */ __wbg_set_1f9b04f170055d33),
/* harmony export */   __wbg_set_a47bac70306a19a7: () => (/* binding */ __wbg_set_a47bac70306a19a7),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbg_subarray_a1f73cd4b5b42fe1: () => (/* binding */ __wbg_subarray_a1f73cd4b5b42fe1),
/* harmony export */   __wbg_then_0c86a60e8fcfe9f6: () => (/* binding */ __wbg_then_0c86a60e8fcfe9f6),
/* harmony export */   __wbg_then_a73caa9a87991566: () => (/* binding */ __wbg_then_a73caa9a87991566),
/* harmony export */   __wbg_versions_c1cb42213cedf0f5: () => (/* binding */ __wbg_versions_c1cb42213cedf0f5),
/* harmony export */   __wbg_wasmimage_new: () => (/* binding */ __wbg_wasmimage_new),
/* harmony export */   __wbg_window_c6fb939a7f436783: () => (/* binding */ __wbg_window_c6fb939a7f436783),
/* harmony export */   __wbindgen_cb_drop: () => (/* binding */ __wbindgen_cb_drop),
/* harmony export */   __wbindgen_closure_wrapper879: () => (/* binding */ __wbindgen_closure_wrapper879),
/* harmony export */   __wbindgen_is_function: () => (/* binding */ __wbindgen_is_function),
/* harmony export */   __wbindgen_is_object: () => (/* binding */ __wbindgen_is_object),
/* harmony export */   __wbindgen_is_string: () => (/* binding */ __wbindgen_is_string),
/* harmony export */   __wbindgen_is_undefined: () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   __wbindgen_memory: () => (/* binding */ __wbindgen_memory),
/* harmony export */   __wbindgen_object_clone_ref: () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   __wbindgen_object_drop_ref: () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   __wbindgen_string_new: () => (/* binding */ __wbindgen_string_new),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_0.get(state.dtor)(state.a, state.b)
});

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
                wasm.__wbindgen_export_0.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    wasm.__wbindgen_export_1(arg0, arg1, addHeapObject(arg2));
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
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

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
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export_4(addHeapObject(e));
    }
}
function __wbg_adapter_87(arg0, arg1, arg2, arg3) {
    wasm.__wbindgen_export_5(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
*/
const Tune = Object.freeze({ Psnr:0,"0":"Psnr",Psychovisual:1,"1":"Psychovisual", });
/**
* Chroma subsampling format
*/
const ChromaSampling = Object.freeze({
/**
* Both vertically and horizontally subsampled.
*/
Cs420:0,"0":"Cs420",
/**
* Horizontally subsampled.
*/
Cs422:1,"1":"Cs422",
/**
* Not subsampled.
*/
Cs444:2,"2":"Cs444",
/**
* Monochrome.
*/
Cs400:3,"3":"Cs400", });
/**
* Allowed pixel value range
*
* C.f. `VideoFullRangeFlag` variable specified in ISO/IEC 23091-4/ITU-T H.273
*/
const PixelRange = Object.freeze({
/**
* Studio swing representation
*/
Limited:0,"0":"Limited",
/**
* Full swing representation
*/
Full:1,"1":"Full", });
/**
* Sample position for subsampled chroma
*/
const ChromaSamplePosition = Object.freeze({
/**
* The source video transfer function must be signaled
* outside the AV1 bitstream.
*/
Unknown:0,"0":"Unknown",
/**
* Horizontally co-located with (0, 0) luma sample, vertically positioned
* in the middle between two luma samples.
*/
Vertical:1,"1":"Vertical",
/**
* Co-located with (0, 0) luma sample.
*/
Colocated:2,"2":"Colocated", });

const NodeListFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_nodelist_free(ptr >>> 0));
/**
* A list of nodes.
*/
class NodeList {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        NodeListFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_nodelist_free(ptr);
    }
}

const TriangulationConfigFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_triangulationconfig_free(ptr >>> 0));
/**
* A `TriangulationConfig` is the parameters that will affect the triangulation
* algorithm's output.
*/
class TriangulationConfig {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TriangulationConfig.prototype);
        obj.__wbg_ptr = ptr;
        TriangulationConfigFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TriangulationConfigFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_triangulationconfig_free(ptr);
    }
    /**
    * The maximum number of vertices we want.
    * @returns {number}
    */
    get max_vertices() {
        const ret = wasm.__wbg_get_triangulationconfig_max_vertices(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * The maximum number of vertices we want.
    * @param {number} arg0
    */
    set max_vertices(arg0) {
        wasm.__wbg_set_triangulationconfig_max_vertices(this.__wbg_ptr, arg0);
    }
    /**
    * The minimal strength of potential vertices.
    * @returns {number}
    */
    get edge_threshold() {
        const ret = wasm.__wbg_get_triangulationconfig_edge_threshold(this.__wbg_ptr);
        return ret;
    }
    /**
    * The minimal strength of potential vertices.
    * @param {number} arg0
    */
    set edge_threshold(arg0) {
        wasm.__wbg_set_triangulationconfig_edge_threshold(this.__wbg_ptr, arg0);
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
        const ret = wasm.__wbg_get_triangulationconfig_low_threshold(this.__wbg_ptr);
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
        wasm.__wbg_set_triangulationconfig_low_threshold(this.__wbg_ptr, arg0);
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
        const ret = wasm.__wbg_get_triangulationconfig_high_threshold(this.__wbg_ptr);
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
        wasm.__wbg_set_triangulationconfig_high_threshold(this.__wbg_ptr, arg0);
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
        const ret = wasm.triangulationconfig_new(max_vertices, edge_threshold, low_threshold, high_threshold);
        return TriangulationConfig.__wrap(ret);
    }
}

const WasmImageFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmimage_free(ptr >>> 0));
/**
* A WebAssembly-compatible struct to work with images.
*/
class WasmImage {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(WasmImage.prototype);
        obj.__wbg_ptr = ptr;
        WasmImageFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmImageFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmimage_free(ptr);
    }
    /**
    * Creates a new `WasmImage`.
    * @param {string} url
    * @returns {Promise<any>}
    */
    static create_wasm_image(url) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmimage_create_wasm_image(ptr0, len0);
        return takeObject(ret);
    }
    /**
    * Builds an image from a `WasmImage`.
    * @returns {any}
    */
    build() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmimage_build(ptr);
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
        const ptr = this.__destroy_into_raw();
        _assertClass(config, TriangulationConfig);
        const ret = wasm.wasmimage_wasm_triangulate_image(ptr, config.__wbg_ptr);
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
        const ret = wasm.wasmimage_wasm_triangulation(this.__wbg_ptr, preprocessed_image.__wbg_ptr, max_vertices, edge_threshold);
        return WasmImage.__wrap(ret);
    }
}

const WasmPreprocessedImageFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmpreprocessedimage_free(ptr >>> 0));
/**
* A WebAssembly-compatible struct to work with pre-processed images.
*/
class WasmPreprocessedImage {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmPreprocessedImageFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmpreprocessedimage_free(ptr);
    }
    /**
    * Creates a new `WasmPreprocessedImage`.
    * @param {WasmImage} image
    * @param {number} low_threshold
    * @param {number} high_threshold
    */
    constructor(image, low_threshold, high_threshold) {
        _assertClass(image, WasmImage);
        const ret = wasm.wasmpreprocessedimage_wasm_preprocess_image(image.__wbg_ptr, low_threshold, high_threshold);
        this.__wbg_ptr = ret >>> 0;
        return this;
    }
}

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbg_wasmimage_new(arg0) {
    const ret = WasmImage.__wrap(arg0);
    return addHeapObject(ret);
};

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbg_fetch_45c8a2a783cf6ccd(arg0, arg1, arg2) {
    const ret = getObject(arg0).fetch(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

function __wbg_newwithheaders_16233a08e765c2b0() { return handleError(function (arg0) {
    const ret = new Headers(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

function __wbg_delete_5e0fc0e11374d8cb() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).delete(getStringFromWasm0(arg1, arg2));
}, arguments) };

function __wbg_instanceof_Response_849eb93e75734b6e(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Response;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_ok_38d7c30bbc66719e(arg0) {
    const ret = getObject(arg0).ok;
    return ret;
};

function __wbg_headers_9620bfada380764a(arg0) {
    const ret = getObject(arg0).headers;
    return addHeapObject(ret);
};

function __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96() { return handleError(function (arg0, arg1) {
    const ret = new Response(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_error_aff92d1dd7a35566() {
    const ret = Response.error();
    return addHeapObject(ret);
};

function __wbg_arrayBuffer_29931d52c7206b02() { return handleError(function (arg0) {
    const ret = getObject(arg0).arrayBuffer();
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_cb_drop(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    return ret;
};

function __wbg_queueMicrotask_481971b0d87f3dd4(arg0) {
    queueMicrotask(getObject(arg0));
};

function __wbg_queueMicrotask_3cbae2ec6b6cd3d6(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
};

function __wbindgen_is_function(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

function __wbg_crypto_d05b68a3572bb8ca(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

function __wbindgen_is_object(arg0) {
    const val = getObject(arg0);
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
};

function __wbg_process_b02b3570280d0366(arg0) {
    const ret = getObject(arg0).process;
    return addHeapObject(ret);
};

function __wbg_versions_c1cb42213cedf0f5(arg0) {
    const ret = getObject(arg0).versions;
    return addHeapObject(ret);
};

function __wbg_node_43b1089f407e4ec2(arg0) {
    const ret = getObject(arg0).node;
    return addHeapObject(ret);
};

function __wbindgen_is_string(arg0) {
    const ret = typeof(getObject(arg0)) === 'string';
    return ret;
};

function __wbg_require_9a7e0f667ead4995() { return handleError(function () {
    const ret = module.require;
    return addHeapObject(ret);
}, arguments) };

function __wbg_msCrypto_10fc94afee92bd76(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

function __wbg_randomFillSync_b70ccbdf4926a99d() { return handleError(function (arg0, arg1) {
    getObject(arg0).randomFillSync(takeObject(arg1));
}, arguments) };

function __wbg_getRandomValues_7e42b4fb8779dc6d() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

function __wbg_newnoargs_e258087cd0daa0ea(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_call_27c0f87801dedf93() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_72fb9a18b5ae2624() {
    const ret = new Object();
    return addHeapObject(ret);
};

function __wbg_self_ce0dbfc45cf2f5be() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_window_c6fb939a7f436783() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbg_globalThis_d1e6af4856ba331b() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_207b558942527489() { return handleError(function () {
    const ret = __webpack_require__.g.global;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

function __wbg_new_28c511d9baebfa89(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_call_b3ca7c6051f9bec1() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_81740750da40724f(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_87(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

function __wbg_resolve_b0083a7967828ec8(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_then_0c86a60e8fcfe9f6(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

function __wbg_then_a73caa9a87991566(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

function __wbg_buffer_12d079cc21e14bdb(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_new_63b92bc8671ed464(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_set_a47bac70306a19a7(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

function __wbg_length_c20a40f15020d68a(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

function __wbg_newwithlength_e9b4878cebadb3d3(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

function __wbg_subarray_a1f73cd4b5b42fe1(arg0, arg1, arg2) {
    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_set_1f9b04f170055d33() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments) };

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper879(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 92, __wbg_adapter_22);
    return addHeapObject(ret);
};



/***/ }),

/***/ "./polify/polify_bg.wasm":
/*!*******************************!*\
  !*** ./polify/polify_bg.wasm ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.id];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name) exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./polify_bg.js */ "./polify/polify_bg.js");


// exec wasm module
wasmExports[""]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPLHlDQUF5QztBQUNoRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPLHdDQUF3QztBQUMvQztBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL2luZGV4LnRzIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vYnVpbGQud29ya2VyLnRzIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vcG9saWZ5L3BvbGlmeS5qcyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL3BvbGlmeS9wb2xpZnlfYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInVscmljaC1tYXJlbGkuanBnXCI7IiwiaW1wb3J0ICogYXMgcG9saWZ5IGZyb20gXCJwb2xpZnlcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBkZWZhdWx0SW1hZ2UgZnJvbSBcIi4vcHVibGljL3VscmljaC1tYXJlbGkuanBnXCI7XG5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBXb3JrZXIgZnJvbSBcIndvcmtlci1sb2FkZXIhLi9idWlsZC53b3JrZXJcIjtcblxuY2xhc3MgUG9saWZ5RGVtbyB7XG4gIGlzVXNpbmdQYXN0ZTogYm9vbGVhbjtcbiAgaXNQcm9jZXNzaW5nOiBib29sZWFuO1xuICBpc0Vycm9yOiBib29sZWFuO1xuICBwb2xpZnlDb25maWc6IHBvbGlmeS5Ucmlhbmd1bGF0aW9uQ29uZmlnO1xuICBpbWFnZU9iamVjdFVybDogc3RyaW5nIHwgbnVsbDtcbiAgcG9seU9iamVjdFVybDogc3RyaW5nIHwgbnVsbDtcbiAgcHJlcHJvY2Vzc2VkSW1hZ2U6IHBvbGlmeS5XYXNtUHJlcHJvY2Vzc2VkSW1hZ2UgfCBudWxsO1xuICB3b3JraW5nSW1hZ2U6IHBvbGlmeS5XYXNtSW1hZ2UgfCBudWxsO1xuICBzaG93UG9seTogYm9vbGVhbjtcbiAgaW1hZ2VCbG9iOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc1VzaW5nUGFzdGUgPSB0cnVlO1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb2x5T2JqZWN0VXJsID0gbnVsbDtcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLnByZXByb2Nlc3NlZEltYWdlID0gbnVsbDtcbiAgICB0aGlzLndvcmtpbmdJbWFnZSA9IG51bGw7XG4gICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IGRlZmF1bHRJbWFnZTtcbiAgICB0aGlzLnNob3dQb2x5ID0gZmFsc2U7XG4gICAgdGhpcy5pbWFnZUJsb2IgPSBudWxsO1xuXG4gICAgY29uc3QgbWF4VmVydGljZXNTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LXZlcnRpY2VzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZWRnZVRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJlZGdlLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLy8gQWxzbyBmb3JjZWZ1bGx5IHJlc2V0IHZhbHVlcyB0byBzdG9jay5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci52YWx1ZSA9IFwiMTAwMFwiO1xuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIudmFsdWUgPSBcIjEwLjBcIjtcblxuICAgIHRoaXMucG9saWZ5Q29uZmlnID0gcG9saWZ5LlRyaWFuZ3VsYXRpb25Db25maWcubmV3KFxuICAgICAgcGFyc2VGbG9hdChtYXhWZXJ0aWNlc1NsaWRlci52YWx1ZSksXG4gICAgICBwYXJzZUZsb2F0KGVkZ2VUaHJlc2hvbGRTbGlkZXIudmFsdWUpLFxuICAgICAgMC4wNSxcbiAgICAgIDUuMFxuICAgICk7XG5cbiAgICBjb25zdCB1cGRhdGVNYXhWZXJ0aWNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VJbnQobWF4VmVydGljZXNTbGlkZXIudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUVkZ2VUaHJlc2hvbGQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQoZWRnZVRocmVzaG9sZFNsaWRlci52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGQgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5wb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGQgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLm9ubW91c2V1cCA9IHVwZGF0ZU1heFZlcnRpY2VzO1xuICAgIG1heFZlcnRpY2VzU2xpZGVyLm9udG91Y2hlbmQgPSB1cGRhdGVNYXhWZXJ0aWNlcztcblxuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIub25tb3VzZXVwID0gdXBkYXRlRWRnZVRocmVzaG9sZDtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLm9udG91Y2hlbmQgPSB1cGRhdGVFZGdlVGhyZXNob2xkO1xuXG4gICAgdGhpcy5idWlsZEltYWdlKCk7XG5cbiAgICBjb25zdCBwYXN0ZUltYWdlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXN0ZS1pbWFnZVwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlXCIpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2UtYWN0aW9uXCIpO1xuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWQtaW1hZ2UtYWN0aW9uXCIpO1xuXG4gICAgcGFzdGVJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgIHBhc3RlSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIHVwbG9hZEltYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGxvYWRJbWFnZVRhYi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgcGFzdGVJbWFnZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICB1cGxvYWRJbWFnZUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIGlucHV0W3R5cGU9ZmlsZV1cIlxuICAgICk7XG4gICAgY29uc3QgZGlzcGxheWVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZGlzcGxheWVkLWltYWdlXCJcbiAgICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcblxuICAgIHVwbG9hZEltYWdlQWN0aW9uSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAodXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB1cGxvYWRJbWFnZUFjdGlvbklucHV0LmZpbGVzWzBdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwbG9hZC1pbWFnZS1hY3Rpb24gLmZpbGUtbmFtZVwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgZmlsZS5uYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgIGlmICghdGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gYnV0dG9uXCJcbiAgICApO1xuICAgIGNvbnN0IHBhc3RlSW1hZ2VJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwYXN0ZS1pbWFnZS1hY3Rpb24gaW5wdXRcIlxuICAgICk7XG4gICAgcGFzdGVJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlT2JqZWN0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlT2JqZWN0VXJsID0gcGFzdGVJbWFnZUlucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlID0gXCJcIjsgLy8gSW5pdCB0byBiZSBlbXB0eSBhbmQgZGlzYWJsZWQuXG4gICAgcGFzdGVJbWFnZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcblxuICAgIHBhc3RlSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBhc3RlSW1hZ2VJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBhc3RlSW1hZ2VCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXN0ZUltYWdlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhc3RlSW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dCAhPSBudWxsICYmXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmltYWdlT2JqZWN0VXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHBhc3RlSW1hZ2VJbnB1dC52YWx1ZTtcblxuICAgICAgICAgIGlmICghdGhpcy5zaG93UG9seSkge1xuICAgICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmJ1aWxkSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9saWZ5U3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInBvbGlmeS1zd2l0Y2hcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBwb2xpZnlTd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInByb2dyZXNzLWJhclwiXG4gICAgKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuICAgIHBvbGlmeVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFwb2xpZnlTd2l0Y2guY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dQb2x5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlU2xpZGVycygpO1xuXG4gICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1BvbHkgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW5hYmxlU2xpZGVycygpO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMucG9seU9iamVjdFVybCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLnBvbHlPYmplY3RVcmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVTbGlkZXJzKCkge1xuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIG1heFZlcnRpY2VzU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlU2xpZGVycygpIHtcbiAgICBjb25zdCBtYXhWZXJ0aWNlc1NsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtdmVydGljZXNcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlZGdlVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImVkZ2UtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIGVkZ2VUaHJlc2hvbGRTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIC8vIHByZXByb2Nlc3NJbWFnZSgpOiBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlIHwgbnVsbCB7XG4gIC8vICAgY29uc29sZS5sb2coXCJDYWxsZWQgcHJlcHJvY2Vzcy5cIik7XG5cbiAgLy8gICBjb25zdCBpbWFnZVVybDogc3RyaW5nID0gZG9jdW1lbnRcbiAgLy8gICAgIC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXllZC1pbWFnZVwiKVxuICAvLyAgICAgLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKFwiaW1hZ2VVcmw6IFwiICsgaW1hZ2VVcmwpO1xuXG4gIC8vICAgaWYgKHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICB0aGlzLndvcmtpbmdJbWFnZS5mcmVlKCk7XG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy53b3JraW5nSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21JbWFnZShpbWFnZVVybCk7XG4gIC8vICAgY29uc3QgdGVtcFdvcmtpbmdJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbUltYWdlKGltYWdlVXJsKTtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgaWYgKHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGxldCBwcmVwcm9jZXNzZWRJbWFnZSA9IG5ldyBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlKFxuICAvLyAgICAgICAgIHRlbXBXb3JraW5nSW1hZ2UsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5oaWdoX3RocmVzaG9sZFxuICAvLyAgICAgICApO1xuXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIHByZXByb2Nlc3NlZCBpbWFnZS4uLlwiKTtcblxuICAvLyAgICAgICByZXR1cm4gcHJlcHJvY2Vzc2VkSW1hZ2U7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwid29ya2luZ0ltYWdlIHdhcyBudWxsLi4uP1wiKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHByZXByb2Nlc3Npbmc6IFwiICsgZXJyKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIC8vIHVwZGF0ZUltYWdlKCk6IHBvbGlmeS5XYXNtSW1hZ2UgfCBudWxsIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIkNhbGxlZCB1cGRhdGUuXCIpO1xuXG4gIC8vICAgaWYgKHRoaXMucHJlcHJvY2Vzc2VkSW1hZ2UgIT09IG51bGwgJiYgdGhpcy53b3JraW5nSW1hZ2UgIT09IG51bGwpIHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIHVwZGF0ZWQgaW1hZ2UuXCIpO1xuXG4gIC8vICAgICAgIHJldHVybiB0aGlzLndvcmtpbmdJbWFnZS53YXNtX3RyaWFuZ3VsYXRpb24oXG4gIC8vICAgICAgICAgdGhpcy5wcmVwcm9jZXNzZWRJbWFnZSxcbiAgLy8gICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5tYXhfdmVydGljZXMsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcuZWRnZV90aHJlc2hvbGRcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSB1cGRhdGluZzogXCIgKyBlcnIpO1xuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRWl0aGVyIHByZXByb2Nlc3NlZEltYWdlIG9yIHdvcmtpbmdJbWFnZSB3ZXJlIG51bGwuLi5cIik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICBidWlsZEltYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQnVpbGRpbmcgaW1hZ2UuLi5cIik7XG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZVNsaWRlcnMoKTtcblxuICAgIGNvbnN0IGRpc3BsYXllZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImRpc3BsYXllZC1pbWFnZVwiXG4gICAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICBpZiAodGhpcy5wb2x5T2JqZWN0VXJsICE9IG51bGwpIHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5wb2x5T2JqZWN0VXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZVVybDogc3RyaW5nID0gdGhpcy5pbWFnZU9iamVjdFVybDtcblxuICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHNlbnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoaW1hZ2VVcmwpKTtcblxuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXG4gICAgICBpbWFnZVVybCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGQsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5sb3dfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzLFxuICAgIF0pO1xuXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBtZXNzYWdlIGZyb20gd29ya2VyLmApO1xuXG4gICAgICBpZiAoZS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCbG9iID0gZS5kYXRhO1xuICAgICAgICB0aGlzLnBvbHlPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuaW1hZ2VCbG9iKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5wb2x5T2JqZWN0VXJsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgd29ya2VyLi4uXCIpO1xuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgdGhpcy5lbmFibGVTbGlkZXJzKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVGVybWluYXRpbmcgd29ya2VyLiBCeWUtYnllIVwiKTtcbiAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICB9O1xuICB9XG59XG5cbmNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nLlwiKTtcbi8vIEB0cy1pZ25vcmVcbmJ1bG1hU2xpZGVyLmF0dGFjaCgpO1xubmV3IFBvbGlmeURlbW8oKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJvb3RzdHJhcC53b3JrZXIuanNcIik7XG59XG4iLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3BvbGlmeV9iZy53YXNtXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL3BvbGlmeV9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG5leHBvcnQgKiBmcm9tIFwiLi9wb2xpZnlfYmcuanNcIjtcbiIsImxldCB3YXNtO1xuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF93YXNtKHZhbCkge1xuICAgIHdhc20gPSB2YWw7XG59XG5cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWRVaW50OE1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRVaW50OE1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDEyOCkuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMTMyKSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3QgQ0xPU1VSRV9EVE9SUyA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShzdGF0ZSA9PiB7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLmdldChzdGF0ZS5kdG9yKShzdGF0ZS5hLCBzdGF0ZS5iKVxufSk7XG5cbmZ1bmN0aW9uIG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIGR0b3IsIGYpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHsgYTogYXJnMCwgYjogYXJnMSwgY250OiAxLCBkdG9yIH07XG4gICAgY29uc3QgcmVhbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IHVwIHdpdGggYSBjbG9zdXJlIHdlIGluY3JlbWVudCB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlXG4gICAgICAgIC8vIGNvdW50LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgUnVzdCBjbG9zdXJlIGVudmlyb25tZW50IHdvbid0XG4gICAgICAgIC8vIGJlIGRlYWxsb2NhdGVkIHdoaWxlIHdlJ3JlIGludm9raW5nIGl0LlxuICAgICAgICBzdGF0ZS5jbnQrKztcbiAgICAgICAgY29uc3QgYSA9IHN0YXRlLmE7XG4gICAgICAgIHN0YXRlLmEgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYoYSwgc3RhdGUuYiwgLi4uYXJncyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoLS1zdGF0ZS5jbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzAuZ2V0KHN0YXRlLmR0b3IpKGEsIHN0YXRlLmIpO1xuICAgICAgICAgICAgICAgIENMT1NVUkVfRFRPUlMudW5yZWdpc3RlcihzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmEgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZWFsLm9yaWdpbmFsID0gc3RhdGU7XG4gICAgQ0xPU1VSRV9EVE9SUy5yZWdpc3RlcihyZWFsLCBzdGF0ZSwgc3RhdGUpO1xuICAgIHJldHVybiByZWFsO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8yMihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8xKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMikpO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRDbGFzcyhpbnN0YW5jZSwga2xhc3MpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIGtsYXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7a2xhc3MubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnB0cjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF80KGFkZEhlYXBPYmplY3QoZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfODcoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfNShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpLCBhZGRIZWFwT2JqZWN0KGFyZzMpKTtcbn1cblxuLyoqXG4qL1xuZXhwb3J0IGNvbnN0IFR1bmUgPSBPYmplY3QuZnJlZXplKHsgUHNucjowLFwiMFwiOlwiUHNuclwiLFBzeWNob3Zpc3VhbDoxLFwiMVwiOlwiUHN5Y2hvdmlzdWFsXCIsIH0pO1xuLyoqXG4qIENocm9tYSBzdWJzYW1wbGluZyBmb3JtYXRcbiovXG5leHBvcnQgY29uc3QgQ2hyb21hU2FtcGxpbmcgPSBPYmplY3QuZnJlZXplKHtcbi8qKlxuKiBCb3RoIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSBzdWJzYW1wbGVkLlxuKi9cbkNzNDIwOjAsXCIwXCI6XCJDczQyMFwiLFxuLyoqXG4qIEhvcml6b250YWxseSBzdWJzYW1wbGVkLlxuKi9cbkNzNDIyOjEsXCIxXCI6XCJDczQyMlwiLFxuLyoqXG4qIE5vdCBzdWJzYW1wbGVkLlxuKi9cbkNzNDQ0OjIsXCIyXCI6XCJDczQ0NFwiLFxuLyoqXG4qIE1vbm9jaHJvbWUuXG4qL1xuQ3M0MDA6MyxcIjNcIjpcIkNzNDAwXCIsIH0pO1xuLyoqXG4qIEFsbG93ZWQgcGl4ZWwgdmFsdWUgcmFuZ2VcbipcbiogQy5mLiBgVmlkZW9GdWxsUmFuZ2VGbGFnYCB2YXJpYWJsZSBzcGVjaWZpZWQgaW4gSVNPL0lFQyAyMzA5MS00L0lUVS1UIEguMjczXG4qL1xuZXhwb3J0IGNvbnN0IFBpeGVsUmFuZ2UgPSBPYmplY3QuZnJlZXplKHtcbi8qKlxuKiBTdHVkaW8gc3dpbmcgcmVwcmVzZW50YXRpb25cbiovXG5MaW1pdGVkOjAsXCIwXCI6XCJMaW1pdGVkXCIsXG4vKipcbiogRnVsbCBzd2luZyByZXByZXNlbnRhdGlvblxuKi9cbkZ1bGw6MSxcIjFcIjpcIkZ1bGxcIiwgfSk7XG4vKipcbiogU2FtcGxlIHBvc2l0aW9uIGZvciBzdWJzYW1wbGVkIGNocm9tYVxuKi9cbmV4cG9ydCBjb25zdCBDaHJvbWFTYW1wbGVQb3NpdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuLyoqXG4qIFRoZSBzb3VyY2UgdmlkZW8gdHJhbnNmZXIgZnVuY3Rpb24gbXVzdCBiZSBzaWduYWxlZFxuKiBvdXRzaWRlIHRoZSBBVjEgYml0c3RyZWFtLlxuKi9cblVua25vd246MCxcIjBcIjpcIlVua25vd25cIixcbi8qKlxuKiBIb3Jpem9udGFsbHkgY28tbG9jYXRlZCB3aXRoICgwLCAwKSBsdW1hIHNhbXBsZSwgdmVydGljYWxseSBwb3NpdGlvbmVkXG4qIGluIHRoZSBtaWRkbGUgYmV0d2VlbiB0d28gbHVtYSBzYW1wbGVzLlxuKi9cblZlcnRpY2FsOjEsXCIxXCI6XCJWZXJ0aWNhbFwiLFxuLyoqXG4qIENvLWxvY2F0ZWQgd2l0aCAoMCwgMCkgbHVtYSBzYW1wbGUuXG4qL1xuQ29sb2NhdGVkOjIsXCIyXCI6XCJDb2xvY2F0ZWRcIiwgfSk7XG5cbmNvbnN0IE5vZGVMaXN0RmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyID4+PiAwKSk7XG4vKipcbiogQSBsaXN0IG9mIG5vZGVzLlxuKi9cbmV4cG9ydCBjbGFzcyBOb2RlTGlzdCB7XG5cbiAgICBfX2Rlc3Ryb3lfaW50b19yYXcoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX193YmdfcHRyO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IDA7XG4gICAgICAgIE5vZGVMaXN0RmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ19ub2RlbGlzdF9mcmVlKHB0cik7XG4gICAgfVxufVxuXG5jb25zdCBUcmlhbmd1bGF0aW9uQ29uZmlnRmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX3RyaWFuZ3VsYXRpb25jb25maWdfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIGBUcmlhbmd1bGF0aW9uQ29uZmlnYCBpcyB0aGUgcGFyYW1ldGVycyB0aGF0IHdpbGwgYWZmZWN0IHRoZSB0cmlhbmd1bGF0aW9uXG4qIGFsZ29yaXRobSdzIG91dHB1dC5cbiovXG5leHBvcnQgY2xhc3MgVHJpYW5ndWxhdGlvbkNvbmZpZyB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoVHJpYW5ndWxhdGlvbkNvbmZpZy5wcm90b3R5cGUpO1xuICAgICAgICBvYmouX193YmdfcHRyID0gcHRyO1xuICAgICAgICBUcmlhbmd1bGF0aW9uQ29uZmlnRmluYWxpemF0aW9uLnJlZ2lzdGVyKG9iaiwgb2JqLl9fd2JnX3B0ciwgb2JqKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBfX2Rlc3Ryb3lfaW50b19yYXcoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX193YmdfcHRyO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IDA7XG4gICAgICAgIFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3RyaWFuZ3VsYXRpb25jb25maWdfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBtYXhfdmVydGljZXMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbWF4X3ZlcnRpY2VzKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbWF4X3ZlcnRpY2VzKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgZWRnZV90aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgZWRnZV90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGxvd190aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbG93X3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogTG93IHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBncmVhdGVyIHRoYW4gMC4wLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIGhpZ2hfdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBsb3dfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGhpZ2hfdGhyZXNob2xkKCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGhpZ2hfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19oaWdoX3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtUcmlhbmd1bGF0aW9uQ29uZmlnfVxuICAgICovXG4gICAgc3RhdGljIG5ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnRyaWFuZ3VsYXRpb25jb25maWdfbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFRyaWFuZ3VsYXRpb25Db25maWcuX193cmFwKHJldCk7XG4gICAgfVxufVxuXG5jb25zdCBXYXNtSW1hZ2VGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193Ymdfd2FzbWltYWdlX2ZyZWUocHRyID4+PiAwKSk7XG4vKipcbiogQSBXZWJBc3NlbWJseS1jb21wYXRpYmxlIHN0cnVjdCB0byB3b3JrIHdpdGggaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtSW1hZ2Uge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgcHRyID0gcHRyID4+PiAwO1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFdhc21JbWFnZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmouX193YmdfcHRyID0gcHRyO1xuICAgICAgICBXYXNtSW1hZ2VGaW5hbGl6YXRpb24ucmVnaXN0ZXIob2JqLCBvYmouX193YmdfcHRyLCBvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgV2FzbUltYWdlRmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ193YXNtaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21JbWFnZWAuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICovXG4gICAgc3RhdGljIGNyZWF0ZV93YXNtX2ltYWdlKHVybCkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAodXJsLCB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzIsIHdhc20uX193YmluZGdlbl9leHBvcnRfMyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX2NyZWF0ZV93YXNtX2ltYWdlKHB0cjAsIGxlbjApO1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEJ1aWxkcyBhbiBpbWFnZSBmcm9tIGEgYFdhc21JbWFnZWAuXG4gICAgKiBAcmV0dXJucyB7YW55fVxuICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX2J1aWxkKHB0cik7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIGxvdy1wb2x5IGBXYXNtSW1hZ2VgIHZpYSB0aGUgdHJpYW5ndWxhdGlvbiBtZXRob2QuXG4gICAgKlxuICAgICogVGhpcyBmdW5jdGlvbiBpcyBqdXN0IGEgd3JhcHBlciB0aGF0IGNhbGxzIDMgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXIgZm9yIHlvdTpcbiAgICAqIC0gYHByZXByb2Nlc3NfaW1hZ2VgIHRvIHByZXByb2Nlc3MgdGhlIGltYWdlLlxuICAgICogLSBgbm9kZV9kZXRlY3Rpb25gIHRvIGRldGVjdCBub2RlcyB1c2luZyB0aGUgcHJlcHJvY2Vzc2VkIGltYWdlLlxuICAgICogLSBgdHJpYW5ndWxhdGlvbmAgdG8gY29tcHV0ZSB0aGUgdHJpYW5ndWxhdGlvbiBvZiB0aGUgbm9kZS1kZXRlY3RlZCBpbWFnZS5cbiAgICAqXG4gICAgKiBZb3UgY2FuIGluc3RlYWQgY2FsbCB0aGVzZSBmdW5jdGlvbnMgbWFudWFsbHkgaWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHN0ZXBzIGluIGFueSB3YXkuXG4gICAgKiBAcGFyYW0ge1RyaWFuZ3VsYXRpb25Db25maWd9IGNvbmZpZ1xuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGVfaW1hZ2UoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhjb25maWcsIFRyaWFuZ3VsYXRpb25Db25maWcpO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRlX2ltYWdlKHB0ciwgY29uZmlnLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiBXYXNtSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVHJpYW5ndWxhdGVzIHBvaW50cyBnaXZlbiBhIG5vZGUgbGlzdC5cbiAgICAqIEBwYXJhbSB7V2FzbVByZXByb2Nlc3NlZEltYWdlfSBwcmVwcm9jZXNzZWRfaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGlvbihwcmVwcm9jZXNzZWRfaW1hZ2UsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpIHtcbiAgICAgICAgX2Fzc2VydENsYXNzKHByZXByb2Nlc3NlZF9pbWFnZSwgV2FzbVByZXByb2Nlc3NlZEltYWdlKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0aW9uKHRoaXMuX193YmdfcHRyLCBwcmVwcm9jZXNzZWRfaW1hZ2UuX193YmdfcHRyLCBtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmNvbnN0IFdhc21QcmVwcm9jZXNzZWRJbWFnZUZpbmFsaXphdGlvbiA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShwdHIgPT4gd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBwcmUtcHJvY2Vzc2VkIGltYWdlcy5cbiovXG5leHBvcnQgY2xhc3MgV2FzbVByZXByb2Nlc3NlZEltYWdlIHtcblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgV2FzbVByZXByb2Nlc3NlZEltYWdlRmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21QcmVwcm9jZXNzZWRJbWFnZWAuXG4gICAgKiBAcGFyYW0ge1dhc21JbWFnZX0gaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MoaW1hZ2UsIFdhc21JbWFnZSk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbXByZXByb2Nlc3NlZGltYWdlX3dhc21fcHJlcHJvY2Vzc19pbWFnZShpbWFnZS5fX3diZ19wdHIsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSByZXQgPj4+IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fc3RyaW5nX25ldyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2FzbWltYWdlX25ldyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gV2FzbUltYWdlLl9fd3JhcChhcmcwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZmV0Y2hfNDVjOGEyYTc4M2NmNmNjZChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmZldGNoKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXd3aXRoaGVhZGVyc18xNjIzM2EwOGU3NjVjMmIwKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgSGVhZGVycyhnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19kZWxldGVfNWUwZmMwZTExMzc0ZDhjYigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmRlbGV0ZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9SZXNwb25zZV84NDllYjkzZTc1NzM0YjZlKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX29rXzM4ZDdjMzBiYmM2NjcxOWUoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5vaztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2hlYWRlcnNfOTYyMGJmYWRhMzgwNzY0YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmhlYWRlcnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF9hNGZhODFlNzcyNTliYjk2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgUmVzcG9uc2UoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19lcnJvcl9hZmY5MmQxZGQ3YTM1NTY2KCkge1xuICAgIGNvbnN0IHJldCA9IFJlc3BvbnNlLmVycm9yKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19hcnJheUJ1ZmZlcl8yOTkzMWQ1MmM3MjA2YjAyKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYXJyYXlCdWZmZXIoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jYl9kcm9wKGFyZzApIHtcbiAgICBjb25zdCBvYmogPSB0YWtlT2JqZWN0KGFyZzApLm9yaWdpbmFsO1xuICAgIGlmIChvYmouY250LS0gPT0gMSkge1xuICAgICAgICBvYmouYSA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSBmYWxzZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3F1ZXVlTWljcm90YXNrXzQ4MTk3MWIwZDg3ZjNkZDQoYXJnMCkge1xuICAgIHF1ZXVlTWljcm90YXNrKGdldE9iamVjdChhcmcwKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcXVldWVNaWNyb3Rhc2tfM2NiYWUyZWM2YjZjZDNkNihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnF1ZXVlTWljcm90YXNrO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc19mdW5jdGlvbihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGdldE9iamVjdChhcmcwKSkgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jcnlwdG9fZDA1YjY4YTM1NzJiYjhjYShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfb2JqZWN0KGFyZzApIHtcbiAgICBjb25zdCB2YWwgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Byb2Nlc3NfYjAyYjM1NzAyODBkMDM2NihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnByb2Nlc3M7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ192ZXJzaW9uc19jMWNiNDIyMTNjZWRmMGY1KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkudmVyc2lvbnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19ub2RlXzQzYjEwODlmNDA3ZTRlYzIoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5ub2RlO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc19zdHJpbmcoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihnZXRPYmplY3QoYXJnMCkpID09PSAnc3RyaW5nJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3JlcXVpcmVfOWE3ZTBmNjY3ZWFkNDk5NSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBtb2R1bGUucmVxdWlyZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbXNDcnlwdG9fMTBmYzk0YWZlZTkyYmQ3NihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm1zQ3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmFuZG9tRmlsbFN5bmNfYjcwY2NiZGY0OTI2YTk5ZCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnJhbmRvbUZpbGxTeW5jKHRha2VPYmplY3QoYXJnMSkpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0UmFuZG9tVmFsdWVzXzdlNDJiNGZiODc3OWRjNmQoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5nZXRSYW5kb21WYWx1ZXMoZ2V0T2JqZWN0KGFyZzEpKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld25vYXJnc19lMjU4MDg3Y2QwZGFhMGVhKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfMjdjMGY4NzgwMWRlZGY5MygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzcyZmI5YTE4YjVhZTI2MjQoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2VsZl9jZTBkYmZjNDVjZjJmNWJlKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2luZG93X2M2ZmI5MzlhN2Y0MzY3ODMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsVGhpc19kMWU2YWY0ODU2YmEzMzFiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsXzIwN2I1NTg5NDI1Mjc0ODkoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc191bmRlZmluZWQoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzI4YzUxMWQ5YmFlYmZhODkoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF9iM2NhN2M2MDUxZjliZWMxKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld184MTc0MDc1MGRhNDA3MjRmKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUwID0ge2E6IGFyZzAsIGI6IGFyZzF9O1xuICAgICAgICB2YXIgY2IwID0gKGFyZzAsIGFyZzEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0ZTAuYTtcbiAgICAgICAgICAgIHN0YXRlMC5hID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2JnX2FkYXB0ZXJfODcoYSwgc3RhdGUwLmIsIGFyZzAsIGFyZzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTAuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBQcm9taXNlKGNiMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUwLmEgPSBzdGF0ZTAuYiA9IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Jlc29sdmVfYjAwODNhNzk2NzgyOGVjOChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuXzBjODZhNjBlOGZjZmU5ZjYoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuX2E3M2NhYTlhODc5OTE1NjYoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfYWE0YTE3YzMzYTA2ZTVjYihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApLCBhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X2E0N2JhYzcwMzA2YTE5YTcoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sZW5ndGhfYzIwYTQwZjE1MDIwZDY4YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhsZW5ndGhfZTliNDg3OGNlYmFkYjNkMyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoYXJnMCA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdWJhcnJheV9hMWY3M2NkNGI1YjQyZmUxKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuc3ViYXJyYXkoYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfMWY5YjA0ZjE3MDA1NWQzMygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gUmVmbGVjdC5zZXQoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fbWVtb3J5KCkge1xuICAgIGNvbnN0IHJldCA9IHdhc20ubWVtb3J5O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI4NzkoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIDkyLCBfX3diZ19hZGFwdGVyXzIyKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9