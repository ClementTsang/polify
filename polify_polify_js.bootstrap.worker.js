"use strict";
(self["webpackChunkpolify_demo"] = self["webpackChunkpolify_demo"] || []).push([["polify_polify_js"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWZ5X3BvbGlmeV9qcy5ib290c3RyYXAud29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ087QUFDaEQsNkRBQWMsQ0FBQyw0Q0FBSTtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIL0I7QUFDTztBQUNQO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLDBCQUEwQjs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFBb0QsOEJBQThCOztBQUVsRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyx3Q0FBd0M7QUFDL0M7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9saWZ5LWRlbW8vLi9wb2xpZnkvcG9saWZ5LmpzIiwid2VicGFjazovL3BvbGlmeS1kZW1vLy4vcG9saWZ5L3BvbGlmeV9iZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3BvbGlmeV9iZy53YXNtXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL3BvbGlmeV9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG5leHBvcnQgKiBmcm9tIFwiLi9wb2xpZnlfYmcuanNcIjtcbiIsImxldCB3YXNtO1xuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF93YXNtKHZhbCkge1xuICAgIHdhc20gPSB2YWw7XG59XG5cblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgxMjgpLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAxMzIpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuY29uc3QgQ0xPU1VSRV9EVE9SUyA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShzdGF0ZSA9PiB7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLmdldChzdGF0ZS5kdG9yKShzdGF0ZS5hLCBzdGF0ZS5iKVxufSk7XG5cbmZ1bmN0aW9uIG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIGR0b3IsIGYpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHsgYTogYXJnMCwgYjogYXJnMSwgY250OiAxLCBkdG9yIH07XG4gICAgY29uc3QgcmVhbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IHVwIHdpdGggYSBjbG9zdXJlIHdlIGluY3JlbWVudCB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlXG4gICAgICAgIC8vIGNvdW50LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgUnVzdCBjbG9zdXJlIGVudmlyb25tZW50IHdvbid0XG4gICAgICAgIC8vIGJlIGRlYWxsb2NhdGVkIHdoaWxlIHdlJ3JlIGludm9raW5nIGl0LlxuICAgICAgICBzdGF0ZS5jbnQrKztcbiAgICAgICAgY29uc3QgYSA9IHN0YXRlLmE7XG4gICAgICAgIHN0YXRlLmEgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGYoYSwgc3RhdGUuYiwgLi4uYXJncyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoLS1zdGF0ZS5jbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzAuZ2V0KHN0YXRlLmR0b3IpKGEsIHN0YXRlLmIpO1xuICAgICAgICAgICAgICAgIENMT1NVUkVfRFRPUlMudW5yZWdpc3RlcihzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmEgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZWFsLm9yaWdpbmFsID0gc3RhdGU7XG4gICAgQ0xPU1VSRV9EVE9SUy5yZWdpc3RlcihyZWFsLCBzdGF0ZSwgc3RhdGUpO1xuICAgIHJldHVybiByZWFsO1xufVxuZnVuY3Rpb24gX193YmdfYWRhcHRlcl8yMihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8xKGFyZzAsIGFyZzEsIGFkZEhlYXBPYmplY3QoYXJnMikpO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRDbGFzcyhpbnN0YW5jZSwga2xhc3MpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIGtsYXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7a2xhc3MubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnB0cjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF80KGFkZEhlYXBPYmplY3QoZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9fd2JnX2FkYXB0ZXJfODcoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfNShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpLCBhZGRIZWFwT2JqZWN0KGFyZzMpKTtcbn1cblxuY29uc3QgTm9kZUxpc3RGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193Ymdfbm9kZWxpc3RfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIGxpc3Qgb2Ygbm9kZXMuXG4qL1xuZXhwb3J0IGNsYXNzIE5vZGVMaXN0IHtcblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgTm9kZUxpc3RGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyKTtcbiAgICB9XG59XG5cbmNvbnN0IFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0ciA+Pj4gMCkpO1xuLyoqXG4qIEEgYFRyaWFuZ3VsYXRpb25Db25maWdgIGlzIHRoZSBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBhZmZlY3QgdGhlIHRyaWFuZ3VsYXRpb25cbiogYWxnb3JpdGhtJ3Mgb3V0cHV0LlxuKi9cbmV4cG9ydCBjbGFzcyBUcmlhbmd1bGF0aW9uQ29uZmlnIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShUcmlhbmd1bGF0aW9uQ29uZmlnLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5fX3diZ19wdHIgPSBwdHI7XG4gICAgICAgIFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24ucmVnaXN0ZXIob2JqLCBvYmouX193YmdfcHRyLCBvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgVHJpYW5ndWxhdGlvbkNvbmZpZ0ZpbmFsaXphdGlvbi51bnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnRpY2VzIHdlIHdhbnQuXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IG1heF92ZXJ0aWNlcygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0ID4+PiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBtYXhfdmVydGljZXMoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX21heF92ZXJ0aWNlcyh0aGlzLl9fd2JnX3B0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBlZGdlX3RocmVzaG9sZCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19lZGdlX3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBlZGdlX3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIExvdyB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgZ3JlYXRlciB0aGFuIDAuMCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBoaWdoX3RocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgbG93X3RocmVzaG9sZCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGxvd190aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgaGlnaF90aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfaGlnaF90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgaGlnaF90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBUcmlhbmd1bGF0aW9uQ29uZmlnYC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1RyaWFuZ3VsYXRpb25Db25maWd9XG4gICAgKi9cbiAgICBzdGF0aWMgbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udHJpYW5ndWxhdGlvbmNvbmZpZ19uZXcobWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gVHJpYW5ndWxhdGlvbkNvbmZpZy5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmNvbnN0IFdhc21JbWFnZUZpbmFsaXphdGlvbiA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShwdHIgPT4gd2FzbS5fX3diZ193YXNtaW1hZ2VfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBpbWFnZXMuXG4qL1xuZXhwb3J0IGNsYXNzIFdhc21JbWFnZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoV2FzbUltYWdlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5fX3diZ19wdHIgPSBwdHI7XG4gICAgICAgIFdhc21JbWFnZUZpbmFsaXphdGlvbi5yZWdpc3RlcihvYmosIG9iai5fX3diZ19wdHIsIG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fd2JnX3B0cjtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSAwO1xuICAgICAgICBXYXNtSW1hZ2VGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3dhc21pbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbUltYWdlYC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlX3dhc21faW1hZ2UodXJsKSB7XG4gICAgICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMCh1cmwsIHdhc20uX193YmluZGdlbl9leHBvcnRfMiwgd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8zKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2VfY3JlYXRlX3dhc21faW1hZ2UocHRyMCwgbGVuMCk7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQnVpbGRzIGFuIGltYWdlIGZyb20gYSBgV2FzbUltYWdlYC5cbiAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2VfYnVpbGQocHRyKTtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbG93LXBvbHkgYFdhc21JbWFnZWAgdmlhIHRoZSB0cmlhbmd1bGF0aW9uIG1ldGhvZC5cbiAgICAqXG4gICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGp1c3QgYSB3cmFwcGVyIHRoYXQgY2FsbHMgMyBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlciBmb3IgeW91OlxuICAgICogLSBgcHJlcHJvY2Vzc19pbWFnZWAgdG8gcHJlcHJvY2VzcyB0aGUgaW1hZ2UuXG4gICAgKiAtIGBub2RlX2RldGVjdGlvbmAgdG8gZGV0ZWN0IG5vZGVzIHVzaW5nIHRoZSBwcmVwcm9jZXNzZWQgaW1hZ2UuXG4gICAgKiAtIGB0cmlhbmd1bGF0aW9uYCB0byBjb21wdXRlIHRoZSB0cmlhbmd1bGF0aW9uIG9mIHRoZSBub2RlLWRldGVjdGVkIGltYWdlLlxuICAgICpcbiAgICAqIFlvdSBjYW4gaW5zdGVhZCBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBtYW51YWxseSBpZiB5b3Ugd2lzaCB0byBhbHRlciB0aGUgc3RlcHMgaW4gYW55IHdheS5cbiAgICAqIEBwYXJhbSB7VHJpYW5ndWxhdGlvbkNvbmZpZ30gY29uZmlnXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgX2Fzc2VydENsYXNzKGNvbmZpZywgVHJpYW5ndWxhdGlvbkNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX3dhc21fdHJpYW5ndWxhdGVfaW1hZ2UocHRyLCBjb25maWcuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUcmlhbmd1bGF0ZXMgcG9pbnRzIGdpdmVuIGEgbm9kZSBsaXN0LlxuICAgICogQHBhcmFtIHtXYXNtUHJlcHJvY2Vzc2VkSW1hZ2V9IHByZXByb2Nlc3NlZF9pbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heF92ZXJ0aWNlc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VfdGhyZXNob2xkXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0aW9uKHByZXByb2Nlc3NlZF9pbWFnZSwgbWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MocHJlcHJvY2Vzc2VkX2ltYWdlLCBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UpO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRpb24odGhpcy5fX3diZ19wdHIsIHByZXByb2Nlc3NlZF9pbWFnZS5fX3diZ19wdHIsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cblxuY29uc3QgV2FzbVByZXByb2Nlc3NlZEltYWdlRmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX3dhc21wcmVwcm9jZXNzZWRpbWFnZV9mcmVlKHB0ciA+Pj4gMCkpO1xuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIHByZS1wcm9jZXNzZWQgaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2Uge1xuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fd2JnX3B0cjtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSAwO1xuICAgICAgICBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2VGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3dhc21wcmVwcm9jZXNzZWRpbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbVByZXByb2Nlc3NlZEltYWdlYC5cbiAgICAqIEBwYXJhbSB7V2FzbUltYWdlfSBpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhpbWFnZSwgV2FzbUltYWdlKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtcHJlcHJvY2Vzc2VkaW1hZ2Vfd2FzbV9wcmVwcm9jZXNzX2ltYWdlKGltYWdlLl9fd2JnX3B0ciwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IHJldCA+Pj4gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYoYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ193YXNtaW1hZ2VfbmV3KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBXYXNtSW1hZ2UuX193cmFwKGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9zdHJpbmdfbmV3KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19mZXRjaF80NWM4YTJhNzgzY2Y2Y2NkKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuZmV0Y2goZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhoZWFkZXJzXzE2MjMzYTA4ZTc2NWMyYjAoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBIZWFkZXJzKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2RlbGV0ZV81ZTBmYzBlMTEzNzRkOGNiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZGVsZXRlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlXzg0OWViOTNlNzU3MzRiNmUoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZ2V0T2JqZWN0KGFyZzApIGluc3RhbmNlb2YgUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfb2tfMzhkN2MzMGJiYzY2NzE5ZShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm9rO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaGVhZGVyc185NjIwYmZhZGEzODA3NjRhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuaGVhZGVycztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0X2E0ZmE4MWU3NzI1OWJiOTYoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBSZXNwb25zZShnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2Vycm9yX2FmZjkyZDFkZDdhMzU1NjYoKSB7XG4gICAgY29uc3QgcmV0ID0gUmVzcG9uc2UuZXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FycmF5QnVmZmVyXzI5OTMxZDUyYzcyMDZiMDIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5hcnJheUJ1ZmZlcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2NiX2Ryb3AoYXJnMCkge1xuICAgIGNvbnN0IG9iaiA9IHRha2VPYmplY3QoYXJnMCkub3JpZ2luYWw7XG4gICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgIG9iai5hID0gMDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IGZhbHNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcXVldWVNaWNyb3Rhc2tfNDgxOTcxYjBkODdmM2RkNChhcmcwKSB7XG4gICAgcXVldWVNaWNyb3Rhc2soZ2V0T2JqZWN0KGFyZzApKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19xdWV1ZU1pY3JvdGFza18zY2JhZTJlYzZiNmNkM2Q2KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkucXVldWVNaWNyb3Rhc2s7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YoZ2V0T2JqZWN0KGFyZzApKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NyeXB0b19kMDViNjhhMzU3MmJiOGNhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc19vYmplY3QoYXJnMCkge1xuICAgIGNvbnN0IHZhbCA9IGdldE9iamVjdChhcmcwKTtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YodmFsKSA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcHJvY2Vzc19iMDJiMzU3MDI4MGQwMzY2KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkucHJvY2VzcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3ZlcnNpb25zX2MxY2I0MjIxM2NlZGYwZjUoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS52ZXJzaW9ucztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25vZGVfNDNiMTA4OWY0MDdlNGVjMihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm5vZGU7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX3N0cmluZyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGdldE9iamVjdChhcmcwKSkgPT09ICdzdHJpbmcnO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmVxdWlyZV85YTdlMGY2NjdlYWQ0OTk1KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IG1vZHVsZS5yZXF1aXJlO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19tc0NyeXB0b18xMGZjOTRhZmVlOTJiZDc2KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkubXNDcnlwdG87XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19yYW5kb21GaWxsU3luY19iNzBjY2JkZjQ5MjZhOTlkKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkucmFuZG9tRmlsbFN5bmModGFrZU9iamVjdChhcmcxKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRSYW5kb21WYWx1ZXNfN2U0MmI0ZmI4Nzc5ZGM2ZCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmdldFJhbmRvbVZhbHVlcyhnZXRPYmplY3QoYXJnMSkpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3bm9hcmdzX2UyNTgwODdjZDBkYWEwZWEoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBGdW5jdGlvbihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF8yN2MwZjg3ODAxZGVkZjkzKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNzJmYjlhMThiNWFlMjYyNCgpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZWxmX2NlMGRiZmM0NWNmMmY1YmUoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ193aW5kb3dfYzZmYjkzOWE3ZjQzNjc4MygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSB3aW5kb3cud2luZG93O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nbG9iYWxUaGlzX2QxZTZhZjQ4NTZiYTMzMWIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsVGhpcy5nbG9iYWxUaGlzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nbG9iYWxfMjA3YjU1ODk0MjUyNzQ4OSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBnbG9iYWwuZ2xvYmFsO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfMjhjNTExZDliYWViZmE4OShhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jYWxsX2IzY2E3YzYwNTFmOWJlYzEoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzgxNzQwNzUwZGE0MDcyNGYoYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGF0ZTAgPSB7YTogYXJnMCwgYjogYXJnMX07XG4gICAgICAgIHZhciBjYjAgPSAoYXJnMCwgYXJnMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYSA9IHN0YXRlMC5hO1xuICAgICAgICAgICAgc3RhdGUwLmEgPSAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX193YmdfYWRhcHRlcl84NyhhLCBzdGF0ZTAuYiwgYXJnMCwgYXJnMSk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHN0YXRlMC5hID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IFByb21pc2UoY2IwKTtcbiAgICAgICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZTAuYSA9IHN0YXRlMC5iID0gMDtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmVzb2x2ZV9iMDA4M2E3OTY3ODI4ZWM4KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBQcm9taXNlLnJlc29sdmUoZ2V0T2JqZWN0KGFyZzApKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3RoZW5fMGM4NmE2MGU4ZmNmZTlmNihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRoZW4oZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3RoZW5fYTczY2FhOWE4Nzk5MTU2NihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnRoZW4oZ2V0T2JqZWN0KGFyZzEpLCBnZXRPYmplY3QoYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYnVmZmVyXzEyZDA3OWNjMjFlMTRiZGIoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5idWZmZXI7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9hYTRhMTdjMzNhMDZlNWNiKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCksIGFyZzEgPj4+IDAsIGFyZzIgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzYzYjkyYmM4NjcxZWQ0NjQoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50OEFycmF5KGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfYTQ3YmFjNzAzMDZhMTlhNyhhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnNldChnZXRPYmplY3QoYXJnMSksIGFyZzIgPj4+IDApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2xlbmd0aF9jMjBhNDBmMTUwMjBkNjhhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aGxlbmd0aF9lOWI0ODc4Y2ViYWRiM2QzKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShhcmcwID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3N1YmFycmF5X2ExZjczY2Q0YjViNDJmZTEoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5zdWJhcnJheShhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF8xZjliMDRmMTcwMDU1ZDMzKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBSZWZsZWN0LnNldChnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gcmV0O1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9tZW1vcnkoKSB7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5tZW1vcnk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2Nsb3N1cmVfd3JhcHBlcjQyOShhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgNDMsIF9fd2JnX2FkYXB0ZXJfMjIpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=