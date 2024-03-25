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
/* harmony export */   NodeList: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.NodeList),
/* harmony export */   TriangulationConfig: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.TriangulationConfig),
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
/* harmony export */   __wbindgen_closure_wrapper429: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper429),
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
/* harmony export */   NodeList: () => (/* binding */ NodeList),
/* harmony export */   TriangulationConfig: () => (/* binding */ TriangulationConfig),
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
/* harmony export */   __wbindgen_closure_wrapper429: () => (/* binding */ __wbindgen_closure_wrapper429),
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


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

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

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbg_wasmimage_new(arg0) {
    const ret = WasmImage.__wrap(arg0);
    return addHeapObject(ret);
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
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

function __wbindgen_closure_wrapper429(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 43, __wbg_adapter_22);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkMsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU8sbURBQW1EO0FBQzFEO0FBQ0E7QUFDQSxDQUFDOztBQUVNLDJDQUEyQztBQUNsRDtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyxrRUFBa0U7QUFDekU7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU8sZ0RBQWdEO0FBQ3ZEO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyw0Q0FBNEM7QUFDbkQ7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU8sbURBQW1EO0FBQzFEO0FBQ0EsQ0FBQzs7QUFFTSxvREFBb0Q7QUFDM0Q7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPLHlDQUF5QztBQUNoRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBLENBQUM7O0FBRU0sMkNBQTJDO0FBQ2xEO0FBQ0E7QUFDQSxDQUFDOztBQUVNLCtDQUErQztBQUN0RDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSwyQ0FBMkM7QUFDbEQsZ0JBQWdCLHFCQUFNO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyx3Q0FBd0M7QUFDL0M7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9wdWJsaWMvdWxyaWNoLW1hcmVsaS5qcGciLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL2J1aWxkLndvcmtlci50cyIsIndlYnBhY2s6Ly9wb2xpZnktZGVtby8uL3BvbGlmeS9wb2xpZnkuanMiLCJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9wb2xpZnkvcG9saWZ5X2JnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ1bHJpY2gtbWFyZWxpLmpwZ1wiOyIsImltcG9ydCAqIGFzIHBvbGlmeSBmcm9tIFwicG9saWZ5XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZGVmYXVsdEltYWdlIGZyb20gXCIuL3B1YmxpYy91bHJpY2gtbWFyZWxpLmpwZ1wiO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgV29ya2VyIGZyb20gXCJ3b3JrZXItbG9hZGVyIS4vYnVpbGQud29ya2VyXCI7XG5cbmNsYXNzIFBvbGlmeURlbW8ge1xuICBpc1VzaW5nUGFzdGU6IGJvb2xlYW47XG4gIGlzUHJvY2Vzc2luZzogYm9vbGVhbjtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgcG9saWZ5Q29uZmlnOiBwb2xpZnkuVHJpYW5ndWxhdGlvbkNvbmZpZztcbiAgaW1hZ2VPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHBvbHlPYmplY3RVcmw6IHN0cmluZyB8IG51bGw7XG4gIHByZXByb2Nlc3NlZEltYWdlOiBwb2xpZnkuV2FzbVByZXByb2Nlc3NlZEltYWdlIHwgbnVsbDtcbiAgd29ya2luZ0ltYWdlOiBwb2xpZnkuV2FzbUltYWdlIHwgbnVsbDtcbiAgc2hvd1BvbHk6IGJvb2xlYW47XG4gIGltYWdlQmxvYjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNVc2luZ1Bhc3RlID0gdHJ1ZTtcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucG9seU9iamVjdFVybCA9IG51bGw7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5wcmVwcm9jZXNzZWRJbWFnZSA9IG51bGw7XG4gICAgdGhpcy53b3JraW5nSW1hZ2UgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBkZWZhdWx0SW1hZ2U7XG4gICAgdGhpcy5zaG93UG9seSA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VCbG9iID0gbnVsbDtcblxuICAgIGNvbnN0IG1heFZlcnRpY2VzU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC12ZXJ0aWNlc1wiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGVkZ2VUaHJlc2hvbGRTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZWRnZS10aHJlc2hvbGRcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8vIEFsc28gZm9yY2VmdWxseSByZXNldCB2YWx1ZXMgdG8gc3RvY2suXG4gICAgbWF4VmVydGljZXNTbGlkZXIudmFsdWUgPSBcIjEwMDBcIjtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnZhbHVlID0gXCIxMC4wXCI7XG5cbiAgICB0aGlzLnBvbGlmeUNvbmZpZyA9IHBvbGlmeS5Ucmlhbmd1bGF0aW9uQ29uZmlnLm5ldyhcbiAgICAgIHBhcnNlRmxvYXQobWF4VmVydGljZXNTbGlkZXIudmFsdWUpLFxuICAgICAgcGFyc2VGbG9hdChlZGdlVGhyZXNob2xkU2xpZGVyLnZhbHVlKSxcbiAgICAgIDAuMDUsXG4gICAgICA1LjBcbiAgICApO1xuXG4gICAgY29uc3QgdXBkYXRlTWF4VmVydGljZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhcnNlSW50KG1heFZlcnRpY2VzU2xpZGVyLnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZCAhPSBuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnBvbGlmeUNvbmZpZy5tYXhfdmVydGljZXMgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVFZGdlVGhyZXNob2xkID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KGVkZ2VUaHJlc2hvbGRTbGlkZXIudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkID0gbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5vbm1vdXNldXAgPSB1cGRhdGVNYXhWZXJ0aWNlcztcbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5vbnRvdWNoZW5kID0gdXBkYXRlTWF4VmVydGljZXM7XG5cbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLm9ubW91c2V1cCA9IHVwZGF0ZUVkZ2VUaHJlc2hvbGQ7XG4gICAgZWRnZVRocmVzaG9sZFNsaWRlci5vbnRvdWNoZW5kID0gdXBkYXRlRWRnZVRocmVzaG9sZDtcblxuICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuXG4gICAgY29uc3QgcGFzdGVJbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzdGUtaW1hZ2VcIik7XG4gICAgY29uc3QgdXBsb2FkSW1hZ2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZC1pbWFnZVwiKTtcblxuICAgIGNvbnN0IHBhc3RlSW1hZ2VBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3RlLWltYWdlLWFjdGlvblwiKTtcbiAgICBjb25zdCB1cGxvYWRJbWFnZUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBsb2FkLWltYWdlLWFjdGlvblwiKTtcblxuICAgIHBhc3RlSW1hZ2VUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHVwbG9hZEltYWdlVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG5cbiAgICAgIHVwbG9hZEltYWdlQWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICBwYXN0ZUltYWdlQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRJbWFnZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXBsb2FkSW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICAgIHBhc3RlSW1hZ2VUYWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgcGFzdGVJbWFnZUFjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgdXBsb2FkSW1hZ2VBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwbG9hZEltYWdlQWN0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjdXBsb2FkLWltYWdlLWFjdGlvbiBpbnB1dFt0eXBlPWZpbGVdXCJcbiAgICApO1xuICAgIGNvbnN0IGRpc3BsYXllZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImRpc3BsYXllZC1pbWFnZVwiXG4gICAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICB1cGxvYWRJbWFnZUFjdGlvbklucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHVwbG9hZEltYWdlQWN0aW9uSW5wdXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaWxlID0gdXBsb2FkSW1hZ2VBY3Rpb25JbnB1dC5maWxlc1swXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGxvYWQtaW1hZ2UtYWN0aW9uIC5maWxlLW5hbWVcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGZpbGUubmFtZTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zcmMgPSB0aGlzLmltYWdlT2JqZWN0VXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBhc3RlSW1hZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcGFzdGUtaW1hZ2UtYWN0aW9uIGJ1dHRvblwiXG4gICAgKTtcbiAgICBjb25zdCBwYXN0ZUltYWdlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjcGFzdGUtaW1hZ2UtYWN0aW9uIGlucHV0XCJcbiAgICApO1xuICAgIHBhc3RlSW1hZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZU9iamVjdFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZU9iamVjdFVybCA9IHBhc3RlSW1hZ2VJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5pbWFnZU9iamVjdFVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRJbWFnZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZSA9IFwiXCI7IC8vIEluaXQgdG8gYmUgZW1wdHkgYW5kIGRpc2FibGVkLlxuICAgIHBhc3RlSW1hZ2VCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG5cbiAgICBwYXN0ZUltYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChwYXN0ZUltYWdlSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXN0ZUltYWdlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFzdGVJbWFnZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwYXN0ZUltYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXN0ZUltYWdlSW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICAgIHBhc3RlSW1hZ2VJbnB1dC52YWx1ZSAhPSBudWxsICYmXG4gICAgICAgICAgcGFzdGVJbWFnZUlucHV0LnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW1hZ2VPYmplY3RVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbWFnZU9iamVjdFVybCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaW1hZ2VPYmplY3RVcmwgPSBwYXN0ZUltYWdlSW5wdXQudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuc2hvd1BvbHkpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5idWlsZEltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBvbGlmeVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJwb2xpZnktc3dpdGNoXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcG9saWZ5U3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJwcm9ncmVzcy1iYXJcIlxuICAgICkgYXMgSFRNTFByb2dyZXNzRWxlbWVudDtcbiAgICBwb2xpZnlTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghcG9saWZ5U3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93UG9seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZVNsaWRlcnMoKTtcblxuICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dQb2x5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVuYWJsZVNsaWRlcnMoKTtcbiAgICAgICAgICBkaXNwbGF5ZWRJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAgIGlmICh0aGlzLnBvbHlPYmplY3RVcmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgZGlzcGxheWVkSW1hZ2Uuc3JjID0gdGhpcy5wb2x5T2JqZWN0VXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlU2xpZGVycygpIHtcbiAgICBjb25zdCBtYXhWZXJ0aWNlc1NsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtdmVydGljZXNcIlxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBlZGdlVGhyZXNob2xkU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImVkZ2UtdGhyZXNob2xkXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBtYXhWZXJ0aWNlc1NsaWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZVNsaWRlcnMoKSB7XG4gICAgY29uc3QgbWF4VmVydGljZXNTbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LXZlcnRpY2VzXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZWRnZVRocmVzaG9sZFNsaWRlcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJlZGdlLXRocmVzaG9sZFwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgbWF4VmVydGljZXNTbGlkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICBlZGdlVGhyZXNob2xkU2xpZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICAvLyBwcmVwcm9jZXNzSW1hZ2UoKTogcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZSB8IG51bGwge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQ2FsbGVkIHByZXByb2Nlc3MuXCIpO1xuXG4gIC8vICAgY29uc3QgaW1hZ2VVcmw6IHN0cmluZyA9IGRvY3VtZW50XG4gIC8vICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5ZWQtaW1hZ2VcIilcbiAgLy8gICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhcImltYWdlVXJsOiBcIiArIGltYWdlVXJsKTtcblxuICAvLyAgIGlmICh0aGlzLndvcmtpbmdJbWFnZSAhPT0gbnVsbCkge1xuICAvLyAgICAgdGhpcy53b3JraW5nSW1hZ2UuZnJlZSgpO1xuICAvLyAgIH1cblxuICAvLyAgIHRoaXMud29ya2luZ0ltYWdlID0gbmV3IHBvbGlmeS5XYXNtSW1hZ2UoaW1hZ2VVcmwpO1xuICAvLyAgIGNvbnN0IHRlbXBXb3JraW5nSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21JbWFnZShpbWFnZVVybCk7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGlmICh0aGlzLndvcmtpbmdJbWFnZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBsZXQgcHJlcHJvY2Vzc2VkSW1hZ2UgPSBuZXcgcG9saWZ5Lldhc21QcmVwcm9jZXNzZWRJbWFnZShcbiAgLy8gICAgICAgICB0ZW1wV29ya2luZ0ltYWdlLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmxvd190aHJlc2hvbGQsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcuaGlnaF90aHJlc2hvbGRcbiAgLy8gICAgICAgKTtcblxuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlJldHVybmluZyBwcmVwcm9jZXNzZWQgaW1hZ2UuLi5cIik7XG5cbiAgLy8gICAgICAgcmV0dXJuIHByZXByb2Nlc3NlZEltYWdlO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIndvcmtpbmdJbWFnZSB3YXMgbnVsbC4uLj9cIik7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBwcmVwcm9jZXNzaW5nOiBcIiArIGVycik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICAvLyB1cGRhdGVJbWFnZSgpOiBwb2xpZnkuV2FzbUltYWdlIHwgbnVsbCB7XG4gIC8vICAgY29uc29sZS5sb2coXCJDYWxsZWQgdXBkYXRlLlwiKTtcblxuICAvLyAgIGlmICh0aGlzLnByZXByb2Nlc3NlZEltYWdlICE9PSBudWxsICYmIHRoaXMud29ya2luZ0ltYWdlICE9PSBudWxsKSB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlJldHVybmluZyB1cGRhdGVkIGltYWdlLlwiKTtcblxuICAvLyAgICAgICByZXR1cm4gdGhpcy53b3JraW5nSW1hZ2Uud2FzbV90cmlhbmd1bGF0aW9uKFxuICAvLyAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2VkSW1hZ2UsXG4gIC8vICAgICAgICAgdGhpcy5wb2xpZnlDb25maWcubWF4X3ZlcnRpY2VzLFxuICAvLyAgICAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmVkZ2VfdGhyZXNob2xkXG4gIC8vICAgICAgICk7XG4gIC8vICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgdXBkYXRpbmc6IFwiICsgZXJyKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVpdGhlciBwcmVwcm9jZXNzZWRJbWFnZSBvciB3b3JraW5nSW1hZ2Ugd2VyZSBudWxsLi4uXCIpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiBudWxsO1xuICAvLyB9XG5cbiAgYnVpbGRJbWFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJ1aWxkaW5nIGltYWdlLi4uXCIpO1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVTbGlkZXJzKCk7XG5cbiAgICBjb25zdCBkaXNwbGF5ZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJkaXNwbGF5ZWQtaW1hZ2VcIlxuICAgICkgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG4gICAgaWYgKHRoaXMucG9seU9iamVjdFVybCAhPSBudWxsKSB7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMucG9seU9iamVjdFVybCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VVcmw6IHN0cmluZyA9IHRoaXMuaW1hZ2VPYmplY3RVcmw7XG5cbiAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZSBzZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KGltYWdlVXJsKSk7XG5cbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1xuICAgICAgaW1hZ2VVcmwsXG4gICAgICB0aGlzLnBvbGlmeUNvbmZpZy5lZGdlX3RocmVzaG9sZCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLmhpZ2hfdGhyZXNob2xkLFxuICAgICAgdGhpcy5wb2xpZnlDb25maWcubG93X3RocmVzaG9sZCxcbiAgICAgIHRoaXMucG9saWZ5Q29uZmlnLm1heF92ZXJ0aWNlcyxcbiAgICBdKTtcblxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIHdvcmtlci5gKTtcblxuICAgICAgaWYgKGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlQmxvYiA9IGUuZGF0YTtcbiAgICAgICAgdGhpcy5wb2x5T2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmltYWdlQmxvYik7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBcInByb2dyZXNzLWJhclwiXG4gICAgICAgICkgYXMgSFRNTFByb2dyZXNzRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5zaG93UG9seSkge1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRpc3BsYXllZEltYWdlLnNyYyA9IHRoaXMucG9seU9iamVjdFVybDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHdvcmtlci4uLlwiKTtcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnNob3dQb2x5KSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2xpZGVycygpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcIlRlcm1pbmF0aW5nIHdvcmtlci4gQnllLWJ5ZSFcIik7XG4gICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhcIkluaXRpYWxpemluZy5cIik7XG4vLyBAdHMtaWdub3JlXG5idWxtYVNsaWRlci5hdHRhY2goKTtcbm5ldyBQb2xpZnlEZW1vKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrZXJfZm4oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJib290c3RyYXAud29ya2VyLmpzXCIpO1xufVxuIiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9wb2xpZnlfYmcud2FzbVwiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi9wb2xpZnlfYmcuanNcIjtcbl9fd2JnX3NldF93YXNtKHdhc20pO1xuZXhwb3J0ICogZnJvbSBcIi4vcG9saWZ5X2JnLmpzXCI7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMTI4KS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMTMyKSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmNvbnN0IENMT1NVUkVfRFRPUlMgPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoc3RhdGUgPT4ge1xuICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMC5nZXQoc3RhdGUuZHRvcikoc3RhdGUuYSwgc3RhdGUuYilcbn0pO1xuXG5mdW5jdGlvbiBtYWtlTXV0Q2xvc3VyZShhcmcwLCBhcmcxLCBkdG9yLCBmKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IGE6IGFyZzAsIGI6IGFyZzEsIGNudDogMSwgZHRvciB9O1xuICAgIGNvbnN0IHJlYWwgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyBGaXJzdCB1cCB3aXRoIGEgY2xvc3VyZSB3ZSBpbmNyZW1lbnQgdGhlIGludGVybmFsIHJlZmVyZW5jZVxuICAgICAgICAvLyBjb3VudC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIFJ1c3QgY2xvc3VyZSBlbnZpcm9ubWVudCB3b24ndFxuICAgICAgICAvLyBiZSBkZWFsbG9jYXRlZCB3aGlsZSB3ZSdyZSBpbnZva2luZyBpdC5cbiAgICAgICAgc3RhdGUuY250Kys7XG4gICAgICAgIGNvbnN0IGEgPSBzdGF0ZS5hO1xuICAgICAgICBzdGF0ZS5hID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmKGEsIHN0YXRlLmIsIC4uLmFyZ3MpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKC0tc3RhdGUuY250ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLmdldChzdGF0ZS5kdG9yKShhLCBzdGF0ZS5iKTtcbiAgICAgICAgICAgICAgICBDTE9TVVJFX0RUT1JTLnVucmVnaXN0ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhbC5vcmlnaW5hbCA9IHN0YXRlO1xuICAgIENMT1NVUkVfRFRPUlMucmVnaXN0ZXIocmVhbCwgc3RhdGUsIHN0YXRlKTtcbiAgICByZXR1cm4gcmVhbDtcbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfMjIoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpKTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCwgMSkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4sIDEpID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzLCAxKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBvZmZzZXQsIDEpID4+PiAwO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0Q2xhc3MoaW5zdGFuY2UsIGtsYXNzKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBrbGFzcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBleHBlY3RlZCBpbnN0YW5jZSBvZiAke2tsYXNzLm5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5wdHI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfNChhZGRIZWFwT2JqZWN0KGUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzg3KGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzUoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSwgYWRkSGVhcE9iamVjdChhcmczKSk7XG59XG5cbmNvbnN0IE5vZGVMaXN0RmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyID4+PiAwKSk7XG4vKipcbiogQSBsaXN0IG9mIG5vZGVzLlxuKi9cbmV4cG9ydCBjbGFzcyBOb2RlTGlzdCB7XG5cbiAgICBfX2Rlc3Ryb3lfaW50b19yYXcoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX193YmdfcHRyO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IDA7XG4gICAgICAgIE5vZGVMaXN0RmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ19ub2RlbGlzdF9mcmVlKHB0cik7XG4gICAgfVxufVxuXG5jb25zdCBUcmlhbmd1bGF0aW9uQ29uZmlnRmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX3RyaWFuZ3VsYXRpb25jb25maWdfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIGBUcmlhbmd1bGF0aW9uQ29uZmlnYCBpcyB0aGUgcGFyYW1ldGVycyB0aGF0IHdpbGwgYWZmZWN0IHRoZSB0cmlhbmd1bGF0aW9uXG4qIGFsZ29yaXRobSdzIG91dHB1dC5cbiovXG5leHBvcnQgY2xhc3MgVHJpYW5ndWxhdGlvbkNvbmZpZyB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoVHJpYW5ndWxhdGlvbkNvbmZpZy5wcm90b3R5cGUpO1xuICAgICAgICBvYmouX193YmdfcHRyID0gcHRyO1xuICAgICAgICBUcmlhbmd1bGF0aW9uQ29uZmlnRmluYWxpemF0aW9uLnJlZ2lzdGVyKG9iaiwgb2JqLl9fd2JnX3B0ciwgb2JqKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBfX2Rlc3Ryb3lfaW50b19yYXcoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX193YmdfcHRyO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IDA7XG4gICAgICAgIFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3RyaWFuZ3VsYXRpb25jb25maWdfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBtYXhfdmVydGljZXMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbWF4X3ZlcnRpY2VzKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdmVydGljZXMgd2Ugd2FudC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgbWF4X3ZlcnRpY2VzKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgZWRnZV90aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtaW5pbWFsIHN0cmVuZ3RoIG9mIHBvdGVudGlhbCB2ZXJ0aWNlcy5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgZWRnZV90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2VkZ2VfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGxvd190aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfbG93X3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogTG93IHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBncmVhdGVyIHRoYW4gMC4wLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgc21hbGxlciB0aGFuIGhpZ2hfdGhyZXNob2xkLCBvdGhlcndpc2UgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gd2hlbiB0cnlpbmcgdG9cbiAgICAqIHByZXByb2Nlc3MuXG4gICAgKlxuICAgICogQW55dGhpbmcgYmV0d2VlbiBbYGxvd190aHJlc2hvbGRgXSBhbmQgW2BoaWdoX3RocmVzaG9sZGBdIHdpbGwgYmUgcmVtb3ZlZCBkdXJpbmdcbiAgICAqIGVkZ2UgZGV0ZWN0aW9uLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBsb3dfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IGhpZ2hfdGhyZXNob2xkKCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLl9fd2JnX2dldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIaWdoIHRocmVzaG9sZCBmb3IgZWRnZSBkZXRlY3Rpb24gaW4gcHJlcHJvY2VzcyBzdGVwLiAgTXVzdCBiZSBsZXNzIHRoYW4gMTE0MCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGhpZ2hfdGhyZXNob2xkKGFyZzApIHtcbiAgICAgICAgd2FzbS5fX3diZ19zZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19oaWdoX3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgVHJpYW5ndWxhdGlvbkNvbmZpZ2AuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWF4X3ZlcnRpY2VzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZWRnZV90aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqIEByZXR1cm5zIHtUcmlhbmd1bGF0aW9uQ29uZmlnfVxuICAgICovXG4gICAgc3RhdGljIG5ldyhtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnRyaWFuZ3VsYXRpb25jb25maWdfbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFRyaWFuZ3VsYXRpb25Db25maWcuX193cmFwKHJldCk7XG4gICAgfVxufVxuXG5jb25zdCBXYXNtSW1hZ2VGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193Ymdfd2FzbWltYWdlX2ZyZWUocHRyID4+PiAwKSk7XG4vKipcbiogQSBXZWJBc3NlbWJseS1jb21wYXRpYmxlIHN0cnVjdCB0byB3b3JrIHdpdGggaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtSW1hZ2Uge1xuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgcHRyID0gcHRyID4+PiAwO1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFdhc21JbWFnZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmouX193YmdfcHRyID0gcHRyO1xuICAgICAgICBXYXNtSW1hZ2VGaW5hbGl6YXRpb24ucmVnaXN0ZXIob2JqLCBvYmouX193YmdfcHRyLCBvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgV2FzbUltYWdlRmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ193YXNtaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21JbWFnZWAuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICovXG4gICAgc3RhdGljIGNyZWF0ZV93YXNtX2ltYWdlKHVybCkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAodXJsLCB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzIsIHdhc20uX193YmluZGdlbl9leHBvcnRfMyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX2NyZWF0ZV93YXNtX2ltYWdlKHB0cjAsIGxlbjApO1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEJ1aWxkcyBhbiBpbWFnZSBmcm9tIGEgYFdhc21JbWFnZWAuXG4gICAgKiBAcmV0dXJucyB7YW55fVxuICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX2J1aWxkKHB0cik7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIGxvdy1wb2x5IGBXYXNtSW1hZ2VgIHZpYSB0aGUgdHJpYW5ndWxhdGlvbiBtZXRob2QuXG4gICAgKlxuICAgICogVGhpcyBmdW5jdGlvbiBpcyBqdXN0IGEgd3JhcHBlciB0aGF0IGNhbGxzIDMgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXIgZm9yIHlvdTpcbiAgICAqIC0gYHByZXByb2Nlc3NfaW1hZ2VgIHRvIHByZXByb2Nlc3MgdGhlIGltYWdlLlxuICAgICogLSBgbm9kZV9kZXRlY3Rpb25gIHRvIGRldGVjdCBub2RlcyB1c2luZyB0aGUgcHJlcHJvY2Vzc2VkIGltYWdlLlxuICAgICogLSBgdHJpYW5ndWxhdGlvbmAgdG8gY29tcHV0ZSB0aGUgdHJpYW5ndWxhdGlvbiBvZiB0aGUgbm9kZS1kZXRlY3RlZCBpbWFnZS5cbiAgICAqXG4gICAgKiBZb3UgY2FuIGluc3RlYWQgY2FsbCB0aGVzZSBmdW5jdGlvbnMgbWFudWFsbHkgaWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHN0ZXBzIGluIGFueSB3YXkuXG4gICAgKiBAcGFyYW0ge1RyaWFuZ3VsYXRpb25Db25maWd9IGNvbmZpZ1xuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGVfaW1hZ2UoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhjb25maWcsIFRyaWFuZ3VsYXRpb25Db25maWcpO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRlX2ltYWdlKHB0ciwgY29uZmlnLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiBXYXNtSW1hZ2UuX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVHJpYW5ndWxhdGVzIHBvaW50cyBnaXZlbiBhIG5vZGUgbGlzdC5cbiAgICAqIEBwYXJhbSB7V2FzbVByZXByb2Nlc3NlZEltYWdlfSBwcmVwcm9jZXNzZWRfaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1dhc21JbWFnZX1cbiAgICAqL1xuICAgIHdhc21fdHJpYW5ndWxhdGlvbihwcmVwcm9jZXNzZWRfaW1hZ2UsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpIHtcbiAgICAgICAgX2Fzc2VydENsYXNzKHByZXByb2Nlc3NlZF9pbWFnZSwgV2FzbVByZXByb2Nlc3NlZEltYWdlKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2Vfd2FzbV90cmlhbmd1bGF0aW9uKHRoaXMuX193YmdfcHRyLCBwcmVwcm9jZXNzZWRfaW1hZ2UuX193YmdfcHRyLCBtYXhfdmVydGljZXMsIGVkZ2VfdGhyZXNob2xkKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmNvbnN0IFdhc21QcmVwcm9jZXNzZWRJbWFnZUZpbmFsaXphdGlvbiA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShwdHIgPT4gd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBwcmUtcHJvY2Vzc2VkIGltYWdlcy5cbiovXG5leHBvcnQgY2xhc3MgV2FzbVByZXByb2Nlc3NlZEltYWdlIHtcblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgV2FzbVByZXByb2Nlc3NlZEltYWdlRmluYWxpemF0aW9uLnVucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ193YXNtcHJlcHJvY2Vzc2VkaW1hZ2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgYFdhc21QcmVwcm9jZXNzZWRJbWFnZWAuXG4gICAgKiBAcGFyYW0ge1dhc21JbWFnZX0gaW1hZ2VcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dfdGhyZXNob2xkXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaF90aHJlc2hvbGRcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBsb3dfdGhyZXNob2xkLCBoaWdoX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MoaW1hZ2UsIFdhc21JbWFnZSk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbXByZXByb2Nlc3NlZGltYWdlX3dhc21fcHJlcHJvY2Vzc19pbWFnZShpbWFnZS5fX3diZ19wdHIsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSByZXQgPj4+IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2FzbWltYWdlX25ldyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gV2FzbUltYWdlLl9fd3JhcChhcmcwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fc3RyaW5nX25ldyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZmV0Y2hfNDVjOGEyYTc4M2NmNmNjZChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmZldGNoKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXd3aXRoaGVhZGVyc18xNjIzM2EwOGU3NjVjMmIwKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgSGVhZGVycyhnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19kZWxldGVfNWUwZmMwZTExMzc0ZDhjYigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmRlbGV0ZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9SZXNwb25zZV84NDllYjkzZTc1NzM0YjZlKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX29rXzM4ZDdjMzBiYmM2NjcxOWUoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5vaztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2hlYWRlcnNfOTYyMGJmYWRhMzgwNzY0YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmhlYWRlcnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXd3aXRob3B0YnVmZmVyc291cmNlYW5kaW5pdF9hNGZhODFlNzcyNTliYjk2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgUmVzcG9uc2UoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19lcnJvcl9hZmY5MmQxZGQ3YTM1NTY2KCkge1xuICAgIGNvbnN0IHJldCA9IFJlc3BvbnNlLmVycm9yKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19hcnJheUJ1ZmZlcl8yOTkzMWQ1MmM3MjA2YjAyKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYXJyYXlCdWZmZXIoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jYl9kcm9wKGFyZzApIHtcbiAgICBjb25zdCBvYmogPSB0YWtlT2JqZWN0KGFyZzApLm9yaWdpbmFsO1xuICAgIGlmIChvYmouY250LS0gPT0gMSkge1xuICAgICAgICBvYmouYSA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSBmYWxzZTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3F1ZXVlTWljcm90YXNrXzQ4MTk3MWIwZDg3ZjNkZDQoYXJnMCkge1xuICAgIHF1ZXVlTWljcm90YXNrKGdldE9iamVjdChhcmcwKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcXVldWVNaWNyb3Rhc2tfM2NiYWUyZWM2YjZjZDNkNihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnF1ZXVlTWljcm90YXNrO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc19mdW5jdGlvbihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGdldE9iamVjdChhcmcwKSkgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jcnlwdG9fZDA1YjY4YTM1NzJiYjhjYShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfb2JqZWN0KGFyZzApIHtcbiAgICBjb25zdCB2YWwgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Byb2Nlc3NfYjAyYjM1NzAyODBkMDM2NihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnByb2Nlc3M7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ192ZXJzaW9uc19jMWNiNDIyMTNjZWRmMGY1KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkudmVyc2lvbnM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19ub2RlXzQzYjEwODlmNDA3ZTRlYzIoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5ub2RlO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc19zdHJpbmcoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihnZXRPYmplY3QoYXJnMCkpID09PSAnc3RyaW5nJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3JlcXVpcmVfOWE3ZTBmNjY3ZWFkNDk5NSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBtb2R1bGUucmVxdWlyZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbXNDcnlwdG9fMTBmYzk0YWZlZTkyYmQ3NihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm1zQ3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmFuZG9tRmlsbFN5bmNfYjcwY2NiZGY0OTI2YTk5ZCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnJhbmRvbUZpbGxTeW5jKHRha2VPYmplY3QoYXJnMSkpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0UmFuZG9tVmFsdWVzXzdlNDJiNGZiODc3OWRjNmQoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5nZXRSYW5kb21WYWx1ZXMoZ2V0T2JqZWN0KGFyZzEpKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld25vYXJnc19lMjU4MDg3Y2QwZGFhMGVhKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfMjdjMGY4NzgwMWRlZGY5MygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzcyZmI5YTE4YjVhZTI2MjQoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2VsZl9jZTBkYmZjNDVjZjJmNWJlKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2luZG93X2M2ZmI5MzlhN2Y0MzY3ODMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsVGhpc19kMWU2YWY0ODU2YmEzMzFiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsXzIwN2I1NTg5NDI1Mjc0ODkoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc191bmRlZmluZWQoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzI4YzUxMWQ5YmFlYmZhODkoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF9iM2NhN2M2MDUxZjliZWMxKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld184MTc0MDc1MGRhNDA3MjRmKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUwID0ge2E6IGFyZzAsIGI6IGFyZzF9O1xuICAgICAgICB2YXIgY2IwID0gKGFyZzAsIGFyZzEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0ZTAuYTtcbiAgICAgICAgICAgIHN0YXRlMC5hID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2JnX2FkYXB0ZXJfODcoYSwgc3RhdGUwLmIsIGFyZzAsIGFyZzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTAuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBQcm9taXNlKGNiMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUwLmEgPSBzdGF0ZTAuYiA9IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Jlc29sdmVfYjAwODNhNzk2NzgyOGVjOChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuXzBjODZhNjBlOGZjZmU5ZjYoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuX2E3M2NhYTlhODc5OTE1NjYoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfYWE0YTE3YzMzYTA2ZTVjYihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApLCBhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X2E0N2JhYzcwMzA2YTE5YTcoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sZW5ndGhfYzIwYTQwZjE1MDIwZDY4YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhsZW5ndGhfZTliNDg3OGNlYmFkYjNkMyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoYXJnMCA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdWJhcnJheV9hMWY3M2NkNGI1YjQyZmUxKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuc3ViYXJyYXkoYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfMWY5YjA0ZjE3MDA1NWQzMygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gUmVmbGVjdC5zZXQoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fbWVtb3J5KCkge1xuICAgIGNvbnN0IHJldCA9IHdhc20ubWVtb3J5O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI0MjkoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIDQzLCBfX3diZ19hZGFwdGVyXzIyKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9