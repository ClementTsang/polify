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
/* harmony export */   __wbindgen_closure_wrapper452: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper452),
/* harmony export */   __wbindgen_debug_string: () => (/* reexport safe */ _polify_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),
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
/* harmony export */   __wbindgen_closure_wrapper452: () => (/* binding */ __wbindgen_closure_wrapper452),
/* harmony export */   __wbindgen_debug_string: () => (/* binding */ __wbindgen_debug_string),
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

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)
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
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
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
function __wbg_adapter_24(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3effe7330839cd30(arg0, arg1, addHeapObject(arg2));
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
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_85(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h1fa3ce64a794967a(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
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
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
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

function __wbindgen_is_function(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

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
                return __wbg_adapter_85(a, state0.b, arg0, arg1);
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

function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper452(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 44, __wbg_adapter_24);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWZ5X3BvbGlmeV9qcy5ib290c3RyYXAud29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUNoRCw2REFBYyxDQUFDLDRDQUFJO0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSC9CO0FBQ087QUFDUDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQSwwQkFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0RBQW9ELDhCQUE4Qjs7QUFFbEY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsSUFBSSxZQUFZLElBQUksVUFB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YWNrOi8vcG9saWZ5LWRlbW8vLi9wb2xpZnkvcG9saWZ5X2JnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vcG9saWZ5X2JnLndhc21cIjtcbmltcG9ydCB7IF9fd2JnX3NldF93YXNtIH0gZnJvbSBcIi4vcG9saWZ5X2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbmV4cG9ydCAqIGZyb20gXCIuL3BvbGlmeV9iZy5qc1wiO1xuIiwibGV0IHdhc207XG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X3dhc20odmFsKSB7XG4gICAgd2FzbSA9IHZhbDtcbn1cblxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDEyOCkuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDEzMikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWRVaW50OE1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRVaW50OE1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIGAke3ZhbH1gO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYFwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgYHZhbGAuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgSlNPTi5zdHJpbmdpZnkodmFsKSArICcpJztcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVycm9yc1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gYCR7dmFsLm5hbWV9OiAke3ZhbC5tZXNzYWdlfVxcbiR7dmFsLnN0YWNrfWA7XG4gICAgfVxuICAgIC8vIFRPRE8gd2UgY291bGQgdGVzdCBmb3IgbW9yZSB0aGluZ3MgaGVyZSwgbGlrZSBgU2V0YHMgYW5kIGBNYXBgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWRJbnQzMk1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRJbnQzMk1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkSW50MzJNZW1vcnkwO1xufVxuXG5jb25zdCBDTE9TVVJFX0RUT1JTID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHN0YXRlID0+IHtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzIuZ2V0KHN0YXRlLmR0b3IpKHN0YXRlLmEsIHN0YXRlLmIpXG59KTtcblxuZnVuY3Rpb24gbWFrZU11dENsb3N1cmUoYXJnMCwgYXJnMSwgZHRvciwgZikge1xuICAgIGNvbnN0IHN0YXRlID0geyBhOiBhcmcwLCBiOiBhcmcxLCBjbnQ6IDEsIGR0b3IgfTtcbiAgICBjb25zdCByZWFsID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gRmlyc3QgdXAgd2l0aCBhIGNsb3N1cmUgd2UgaW5jcmVtZW50IHRoZSBpbnRlcm5hbCByZWZlcmVuY2VcbiAgICAgICAgLy8gY291bnQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBSdXN0IGNsb3N1cmUgZW52aXJvbm1lbnQgd29uJ3RcbiAgICAgICAgLy8gYmUgZGVhbGxvY2F0ZWQgd2hpbGUgd2UncmUgaW52b2tpbmcgaXQuXG4gICAgICAgIHN0YXRlLmNudCsrO1xuICAgICAgICBjb25zdCBhID0gc3RhdGUuYTtcbiAgICAgICAgc3RhdGUuYSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZihhLCBzdGF0ZS5iLCAuLi5hcmdzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICgtLXN0YXRlLmNudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdhc20uX193YmluZGdlbl9leHBvcnRfMi5nZXQoc3RhdGUuZHRvcikoYSwgc3RhdGUuYik7XG4gICAgICAgICAgICAgICAgQ0xPU1VSRV9EVE9SUy51bnJlZ2lzdGVyKHN0YXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlYWwub3JpZ2luYWwgPSBzdGF0ZTtcbiAgICBDTE9TVVJFX0RUT1JTLnJlZ2lzdGVyKHJlYWwsIHN0YXRlLCBzdGF0ZSk7XG4gICAgcmV0dXJuIHJlYWw7XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzI0KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICB3YXNtLl9keW5fY29yZV9fb3BzX19mdW5jdGlvbl9fRm5NdXRfX0FfX19fT3V0cHV0X19fUl9hc193YXNtX2JpbmRnZW5fX2Nsb3N1cmVfX1dhc21DbG9zdXJlX19fZGVzY3JpYmVfX2ludm9rZV9faDNlZmZlNzMzMDgzOWNkMzAoYXJnMCwgYXJnMSwgYWRkSGVhcE9iamVjdChhcmcyKSk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRDbGFzcyhpbnN0YW5jZSwga2xhc3MpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIGtsYXNzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7a2xhc3MubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLnB0cjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4bl9zdG9yZShhZGRIZWFwT2JqZWN0KGUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBfX3diZ19hZGFwdGVyXzg1KGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB3YXNtLndhc21fYmluZGdlbl9fY29udmVydF9fY2xvc3VyZXNfX2ludm9rZTJfbXV0X19oMWZhM2NlNjRhNzk0OTY3YShhcmcwLCBhcmcxLCBhZGRIZWFwT2JqZWN0KGFyZzIpLCBhZGRIZWFwT2JqZWN0KGFyZzMpKTtcbn1cblxuY29uc3QgTm9kZUxpc3RGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193Ymdfbm9kZWxpc3RfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIGxpc3Qgb2Ygbm9kZXMuXG4qL1xuZXhwb3J0IGNsYXNzIE5vZGVMaXN0IHtcblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgTm9kZUxpc3RGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX25vZGVsaXN0X2ZyZWUocHRyKTtcbiAgICB9XG59XG5cbmNvbnN0IFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0ciA+Pj4gMCkpO1xuLyoqXG4qIEEgYFRyaWFuZ3VsYXRpb25Db25maWdgIGlzIHRoZSBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBhZmZlY3QgdGhlIHRyaWFuZ3VsYXRpb25cbiogYWxnb3JpdGhtJ3Mgb3V0cHV0LlxuKi9cbmV4cG9ydCBjbGFzcyBUcmlhbmd1bGF0aW9uQ29uZmlnIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShUcmlhbmd1bGF0aW9uQ29uZmlnLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5fX3diZ19wdHIgPSBwdHI7XG4gICAgICAgIFRyaWFuZ3VsYXRpb25Db25maWdGaW5hbGl6YXRpb24ucmVnaXN0ZXIob2JqLCBvYmouX193YmdfcHRyLCBvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgVHJpYW5ndWxhdGlvbkNvbmZpZ0ZpbmFsaXphdGlvbi51bnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIHdhc20uX193YmdfdHJpYW5ndWxhdGlvbmNvbmZpZ19mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHZlcnRpY2VzIHdlIHdhbnQuXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IG1heF92ZXJ0aWNlcygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19tYXhfdmVydGljZXModGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0ID4+PiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2ZXJ0aWNlcyB3ZSB3YW50LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBtYXhfdmVydGljZXMoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX21heF92ZXJ0aWNlcyh0aGlzLl9fd2JnX3B0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBlZGdlX3RocmVzaG9sZCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19lZGdlX3RocmVzaG9sZCh0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICogVGhlIG1pbmltYWwgc3RyZW5ndGggb2YgcG90ZW50aWFsIHZlcnRpY2VzLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqL1xuICAgIHNldCBlZGdlX3RocmVzaG9sZChhcmcwKSB7XG4gICAgICAgIHdhc20uX193Ymdfc2V0X3RyaWFuZ3VsYXRpb25jb25maWdfZWRnZV90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIExvdyB0aHJlc2hvbGQgZm9yIGVkZ2UgZGV0ZWN0aW9uIGluIHByZXByb2Nlc3Mgc3RlcC4gIE11c3QgYmUgZ3JlYXRlciB0aGFuIDAuMCwgYW5kIG11c3RcbiAgICAqIGJlIHN0cmljdGx5IHNtYWxsZXIgdGhhbiBoaWdoX3RocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgbG93X3RocmVzaG9sZCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5fX3diZ19nZXRfdHJpYW5ndWxhdGlvbmNvbmZpZ19sb3dfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBMb3cgdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLjAsIGFuZCBtdXN0XG4gICAgKiBiZSBzdHJpY3RseSBzbWFsbGVyIHRoYW4gaGlnaF90aHJlc2hvbGQsIG90aGVyd2lzZSBhbiBlcnJvciB3aWxsIGJlIHRocm93biB3aGVuIHRyeWluZyB0b1xuICAgICogcHJlcHJvY2Vzcy5cbiAgICAqXG4gICAgKiBBbnl0aGluZyBiZXR3ZWVuIFtgbG93X3RocmVzaG9sZGBdIGFuZCBbYGhpZ2hfdGhyZXNob2xkYF0gd2lsbCBiZSByZW1vdmVkIGR1cmluZ1xuICAgICogZWRnZSBkZXRlY3Rpb24uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICovXG4gICAgc2V0IGxvd190aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2xvd190aHJlc2hvbGQodGhpcy5fX3diZ19wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgaGlnaF90aHJlc2hvbGQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uX193YmdfZ2V0X3RyaWFuZ3VsYXRpb25jb25maWdfaGlnaF90aHJlc2hvbGQodGhpcy5fX3diZ19wdHIpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAqIEhpZ2ggdGhyZXNob2xkIGZvciBlZGdlIGRldGVjdGlvbiBpbiBwcmVwcm9jZXNzIHN0ZXAuICBNdXN0IGJlIGxlc3MgdGhhbiAxMTQwLCBhbmQgbXVzdFxuICAgICogYmUgc3RyaWN0bHkgZ3JlYXRlciB0aGFuIHRocmVzaG9sZCwgb3RoZXJ3aXNlIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvXG4gICAgKiBwcmVwcm9jZXNzLlxuICAgICpcbiAgICAqIEFueXRoaW5nIGJldHdlZW4gW2Bsb3dfdGhyZXNob2xkYF0gYW5kIFtgaGlnaF90aHJlc2hvbGRgXSB3aWxsIGJlIHJlbW92ZWQgZHVyaW5nXG4gICAgKiBlZGdlIGRldGVjdGlvbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKi9cbiAgICBzZXQgaGlnaF90aHJlc2hvbGQoYXJnMCkge1xuICAgICAgICB3YXNtLl9fd2JnX3NldF90cmlhbmd1bGF0aW9uY29uZmlnX2hpZ2hfdGhyZXNob2xkKHRoaXMuX193YmdfcHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGBUcmlhbmd1bGF0aW9uQ29uZmlnYC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhfdmVydGljZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBlZGdlX3RocmVzaG9sZFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICogQHJldHVybnMge1RyaWFuZ3VsYXRpb25Db25maWd9XG4gICAgKi9cbiAgICBzdGF0aWMgbmV3KG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udHJpYW5ndWxhdGlvbmNvbmZpZ19uZXcobWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gVHJpYW5ndWxhdGlvbkNvbmZpZy5fX3dyYXAocmV0KTtcbiAgICB9XG59XG5cbmNvbnN0IFdhc21JbWFnZUZpbmFsaXphdGlvbiA9ICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKVxuICAgID8geyByZWdpc3RlcjogKCkgPT4ge30sIHVucmVnaXN0ZXI6ICgpID0+IHt9IH1cbiAgICA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShwdHIgPT4gd2FzbS5fX3diZ193YXNtaW1hZ2VfZnJlZShwdHIgPj4+IDApKTtcbi8qKlxuKiBBIFdlYkFzc2VtYmx5LWNvbXBhdGlibGUgc3RydWN0IHRvIHdvcmsgd2l0aCBpbWFnZXMuXG4qL1xuZXhwb3J0IGNsYXNzIFdhc21JbWFnZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoV2FzbUltYWdlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5fX3diZ19wdHIgPSBwdHI7XG4gICAgICAgIFdhc21JbWFnZUZpbmFsaXphdGlvbi5yZWdpc3RlcihvYmosIG9iai5fX3diZ19wdHIsIG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fd2JnX3B0cjtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSAwO1xuICAgICAgICBXYXNtSW1hZ2VGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3dhc21pbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbUltYWdlYC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlX3dhc21faW1hZ2UodXJsKSB7XG4gICAgICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMCh1cmwsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2VfY3JlYXRlX3dhc21faW1hZ2UocHRyMCwgbGVuMCk7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQnVpbGRzIGFuIGltYWdlIGZyb20gYSBgV2FzbUltYWdlYC5cbiAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtaW1hZ2VfYnVpbGQocHRyKTtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbG93LXBvbHkgYFdhc21JbWFnZWAgdmlhIHRoZSB0cmlhbmd1bGF0aW9uIG1ldGhvZC5cbiAgICAqXG4gICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGp1c3QgYSB3cmFwcGVyIHRoYXQgY2FsbHMgMyBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlciBmb3IgeW91OlxuICAgICogLSBgcHJlcHJvY2Vzc19pbWFnZWAgdG8gcHJlcHJvY2VzcyB0aGUgaW1hZ2UuXG4gICAgKiAtIGBub2RlX2RldGVjdGlvbmAgdG8gZGV0ZWN0IG5vZGVzIHVzaW5nIHRoZSBwcmVwcm9jZXNzZWQgaW1hZ2UuXG4gICAgKiAtIGB0cmlhbmd1bGF0aW9uYCB0byBjb21wdXRlIHRoZSB0cmlhbmd1bGF0aW9uIG9mIHRoZSBub2RlLWRldGVjdGVkIGltYWdlLlxuICAgICpcbiAgICAqIFlvdSBjYW4gaW5zdGVhZCBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBtYW51YWxseSBpZiB5b3Ugd2lzaCB0byBhbHRlciB0aGUgc3RlcHMgaW4gYW55IHdheS5cbiAgICAqIEBwYXJhbSB7VHJpYW5ndWxhdGlvbkNvbmZpZ30gY29uZmlnXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0ZV9pbWFnZShjb25maWcpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgX2Fzc2VydENsYXNzKGNvbmZpZywgVHJpYW5ndWxhdGlvbkNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ud2FzbWltYWdlX3dhc21fdHJpYW5ndWxhdGVfaW1hZ2UocHRyLCBjb25maWcuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIFdhc21JbWFnZS5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBUcmlhbmd1bGF0ZXMgcG9pbnRzIGdpdmVuIGEgbm9kZSBsaXN0LlxuICAgICogQHBhcmFtIHtXYXNtUHJlcHJvY2Vzc2VkSW1hZ2V9IHByZXByb2Nlc3NlZF9pbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1heF92ZXJ0aWNlc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGVkZ2VfdGhyZXNob2xkXG4gICAgKiBAcmV0dXJucyB7V2FzbUltYWdlfVxuICAgICovXG4gICAgd2FzbV90cmlhbmd1bGF0aW9uKHByZXByb2Nlc3NlZF9pbWFnZSwgbWF4X3ZlcnRpY2VzLCBlZGdlX3RocmVzaG9sZCkge1xuICAgICAgICBfYXNzZXJ0Q2xhc3MocHJlcHJvY2Vzc2VkX2ltYWdlLCBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2UpO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLndhc21pbWFnZV93YXNtX3RyaWFuZ3VsYXRpb24odGhpcy5fX3diZ19wdHIsIHByZXByb2Nlc3NlZF9pbWFnZS5fX3diZ19wdHIsIG1heF92ZXJ0aWNlcywgZWRnZV90aHJlc2hvbGQpO1xuICAgICAgICByZXR1cm4gV2FzbUltYWdlLl9fd3JhcChyZXQpO1xuICAgIH1cbn1cblxuY29uc3QgV2FzbVByZXByb2Nlc3NlZEltYWdlRmluYWxpemF0aW9uID0gKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7fSwgdW5yZWdpc3RlcjogKCkgPT4ge30gfVxuICAgIDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KHB0ciA9PiB3YXNtLl9fd2JnX3dhc21wcmVwcm9jZXNzZWRpbWFnZV9mcmVlKHB0ciA+Pj4gMCkpO1xuLyoqXG4qIEEgV2ViQXNzZW1ibHktY29tcGF0aWJsZSBzdHJ1Y3QgdG8gd29yayB3aXRoIHByZS1wcm9jZXNzZWQgaW1hZ2VzLlxuKi9cbmV4cG9ydCBjbGFzcyBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2Uge1xuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fd2JnX3B0cjtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSAwO1xuICAgICAgICBXYXNtUHJlcHJvY2Vzc2VkSW1hZ2VGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3dhc21wcmVwcm9jZXNzZWRpbWFnZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBgV2FzbVByZXByb2Nlc3NlZEltYWdlYC5cbiAgICAqIEBwYXJhbSB7V2FzbUltYWdlfSBpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGxvd190aHJlc2hvbGRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoX3RocmVzaG9sZFxuICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIGxvd190aHJlc2hvbGQsIGhpZ2hfdGhyZXNob2xkKSB7XG4gICAgICAgIF9hc3NlcnRDbGFzcyhpbWFnZSwgV2FzbUltYWdlKTtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS53YXNtcHJlcHJvY2Vzc2VkaW1hZ2Vfd2FzbV9wcmVwcm9jZXNzX2ltYWdlKGltYWdlLl9fd2JnX3B0ciwgbG93X3RocmVzaG9sZCwgaGlnaF90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLl9fd2JnX3B0ciA9IHJldCA+Pj4gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYoYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ193YXNtaW1hZ2VfbmV3KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBXYXNtSW1hZ2UuX193cmFwKGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9zdHJpbmdfbmV3KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19mZXRjaF80NWM4YTJhNzgzY2Y2Y2NkKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuZmV0Y2goZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhoZWFkZXJzXzE2MjMzYTA4ZTc2NWMyYjAoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBIZWFkZXJzKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2RlbGV0ZV81ZTBmYzBlMTEzNzRkOGNiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZGVsZXRlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX1Jlc3BvbnNlXzg0OWViOTNlNzU3MzRiNmUoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZ2V0T2JqZWN0KGFyZzApIGluc3RhbmNlb2YgUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfb2tfMzhkN2MzMGJiYzY2NzE5ZShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm9rO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaGVhZGVyc185NjIwYmZhZGEzODA3NjRhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuaGVhZGVycztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhvcHRidWZmZXJzb3VyY2VhbmRpbml0X2E0ZmE4MWU3NzI1OWJiOTYoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBSZXNwb25zZShnZXRPYmplY3QoYXJnMCksIGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2Vycm9yX2FmZjkyZDFkZDdhMzU1NjYoKSB7XG4gICAgY29uc3QgcmV0ID0gUmVzcG9uc2UuZXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FycmF5QnVmZmVyXzI5OTMxZDUyYzcyMDZiMDIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5hcnJheUJ1ZmZlcigpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2NiX2Ryb3AoYXJnMCkge1xuICAgIGNvbnN0IG9iaiA9IHRha2VPYmplY3QoYXJnMCkub3JpZ2luYWw7XG4gICAgaWYgKG9iai5jbnQtLSA9PSAxKSB7XG4gICAgICAgIG9iai5hID0gMDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IGZhbHNlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY3J5cHRvX2QwNWI2OGEzNTcyYmI4Y2EoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5jcnlwdG87XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX29iamVjdChhcmcwKSB7XG4gICAgY29uc3QgdmFsID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZih2YWwpID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGw7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19wcm9jZXNzX2IwMmIzNTcwMjgwZDAzNjYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5wcm9jZXNzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfdmVyc2lvbnNfYzFjYjQyMjEzY2VkZjBmNShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnZlcnNpb25zO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfbm9kZV80M2IxMDg5ZjQwN2U0ZWMyKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkubm9kZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfc3RyaW5nKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YoZ2V0T2JqZWN0KGFyZzApKSA9PT0gJ3N0cmluZyc7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19yZXF1aXJlXzlhN2UwZjY2N2VhZDQ5OTUoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gbW9kdWxlLnJlcXVpcmU7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX21zQ3J5cHRvXzEwZmM5NGFmZWU5MmJkNzYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5tc0NyeXB0bztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3JhbmRvbUZpbGxTeW5jX2I3MGNjYmRmNDkyNmE5OWQoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5yYW5kb21GaWxsU3luYyh0YWtlT2JqZWN0KGFyZzEpKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldFJhbmRvbVZhbHVlc183ZTQyYjRmYjg3NzlkYzZkKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuZ2V0UmFuZG9tVmFsdWVzKGdldE9iamVjdChhcmcxKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YoZ2V0T2JqZWN0KGFyZzApKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld25vYXJnc19lMjU4MDg3Y2QwZGFhMGVhKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfMjdjMGY4NzgwMWRlZGY5MygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzcyZmI5YTE4YjVhZTI2MjQoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2VsZl9jZTBkYmZjNDVjZjJmNWJlKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2luZG93X2M2ZmI5MzlhN2Y0MzY3ODMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsVGhpc19kMWU2YWY0ODU2YmEzMzFiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsXzIwN2I1NTg5NDI1Mjc0ODkoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc191bmRlZmluZWQoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzI4YzUxMWQ5YmFlYmZhODkoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF9iM2NhN2M2MDUxZjliZWMxKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld184MTc0MDc1MGRhNDA3MjRmKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdGUwID0ge2E6IGFyZzAsIGI6IGFyZzF9O1xuICAgICAgICB2YXIgY2IwID0gKGFyZzAsIGFyZzEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdGF0ZTAuYTtcbiAgICAgICAgICAgIHN0YXRlMC5hID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2JnX2FkYXB0ZXJfODUoYSwgc3RhdGUwLmIsIGFyZzAsIGFyZzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTAuYSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBQcm9taXNlKGNiMCk7XG4gICAgICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUwLmEgPSBzdGF0ZTAuYiA9IDA7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Jlc29sdmVfYjAwODNhNzk2NzgyOGVjOChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKGdldE9iamVjdChhcmcwKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuXzBjODZhNjBlOGZjZmU5ZjYoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ190aGVuX2E3M2NhYTlhODc5OTE1NjYoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS50aGVuKGdldE9iamVjdChhcmcxKSwgZ2V0T2JqZWN0KGFyZzIpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aGJ5dGVvZmZzZXRhbmRsZW5ndGhfYWE0YTE3YzMzYTA2ZTVjYihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0T2JqZWN0KGFyZzApLCBhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X2E0N2JhYzcwMzA2YTE5YTcoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sZW5ndGhfYzIwYTQwZjE1MDIwZDY4YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmxlbmd0aDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGhsZW5ndGhfZTliNDg3OGNlYmFkYjNkMyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoYXJnMCA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdWJhcnJheV9hMWY3M2NkNGI1YjQyZmUxKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuc3ViYXJyYXkoYXJnMSA+Pj4gMCwgYXJnMiA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfMWY5YjA0ZjE3MDA1NWQzMygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gUmVmbGVjdC5zZXQoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSksIGdldE9iamVjdChhcmcyKSk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fZGVidWdfc3RyaW5nKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBkZWJ1Z1N0cmluZyhnZXRPYmplY3QoYXJnMSkpO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4xID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4xO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIxO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fbWVtb3J5KCkge1xuICAgIGNvbnN0IHJldCA9IHdhc20ubWVtb3J5O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jbG9zdXJlX3dyYXBwZXI0NTIoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IG1ha2VNdXRDbG9zdXJlKGFyZzAsIGFyZzEsIDQ0LCBfX3diZ19hZGFwdGVyXzI0KTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9