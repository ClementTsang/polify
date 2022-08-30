//! Code to do triangulation on WASM targets.

use futures::Future;
use js_sys::Promise;
use std::io::Cursor;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::{future_to_promise, JsFuture};

use crate::triangulation::*;

/// A WebAssembly-compatible struct to work with images.
#[wasm_bindgen]
pub struct WasmImage {
    image_box: Box<Result<WasmImageInfo, JsValue>>,
}

struct WasmImageInfo {
    image: image::DynamicImage,
    headers: web_sys::Headers,
    format: image::ImageFormat,
}

/// From https://blog.stackpath.com/image-manipulation/.
#[wasm_bindgen]
impl WasmImage {
    /// Creates a new `WasmImage`.
    pub fn create_wasm_image(url: &str) -> Promise {
        // Start fetch
        #[allow(unused_unsafe)]
        let global = unsafe { js_sys::global().unchecked_into::<web_sys::WorkerGlobalScope>() };
        let resp_promise = global.fetch_with_str(url);
        future_to_promise(
            JsFuture::from(resp_promise)
                // Read buffer if response is OK
                .and_then(|resp_val| {
                    let resp: web_sys::Response = resp_val.dyn_into().unwrap();
                    if !resp.ok() {
                        // Just throw the response on failure
                        return Err(JsValue::from(resp));
                    }
                    Ok((resp.headers(), resp.array_buffer().unwrap()))
                })
                // Extract buffer from promise
                .and_then(move |(headers, buf_promise)| {
                    JsFuture::from(buf_promise).map(move |buf_val| (headers, buf_val))
                })
                // Copy buffer to byte array and load image
                .and_then(move |(headers, buf)| {
                    let uint8_arr = js_sys::Uint8Array::new(&buf);
                    let mut bytes = vec![0; uint8_arr.length() as usize];
                    uint8_arr.copy_to(&mut bytes);
                    let format = image::guess_format(&bytes).map_err(err_img_to_js)?;
                    Ok(JsValue::from(WasmImage {
                        image_box: Box::new(Ok(WasmImageInfo {
                            image: image::load_from_memory_with_format(&bytes, format)
                                .map_err(err_img_to_js)?,
                            headers,
                            format,
                        })),
                    }))
                }),
        )
    }

    /// Builds an image from a `WasmImage`.
    pub fn build(self) -> JsValue {
        let response = self
            .image_box
            .and_then(move |info| {
                // We'll use the same headers, but remove length
                let headers = web_sys::Headers::new_with_headers(&info.headers)?;
                headers.delete("Content-Length")?;
                // Write to a buffer
                let mut buf = Cursor::new(Vec::new());
                info.image
                    .write_to(&mut buf, info.format)
                    .map_err(err_img_to_js)?;

                // Build the response
                let body = js_sys::Uint8Array::from(buf.get_ref().as_slice());
                let resp = web_sys::Response::new_with_opt_buffer_source_and_init(
                    Some(&body),
                    web_sys::ResponseInit::new().headers(&headers),
                )?;
                Ok(JsValue::from(resp))
            })
            .or_else(|_err| {
                let resp = web_sys::Response::error();
                Ok(JsValue::from(resp))
            });

        match response {
            Ok(resp) => resp,
            Err(resp) => resp,
        }
    }

    /// Returns a low-poly `WasmImage` via the triangulation method.
    ///
    /// This function is just a wrapper that calls 3 functions in this order for you:
    /// - `preprocess_image` to preprocess the image.
    /// - `node_detection` to detect nodes using the preprocessed image.
    /// - `triangulation` to compute the triangulation of the node-detected image.
    ///
    /// You can instead call these functions manually if you wish to alter the steps in any way.
    pub fn wasm_triangulate_image(self, config: &TriangulationConfig) -> WasmImage {
        WasmImage {
            image_box: Box::new(self.image_box.and_then(|info| {
                match preprocess_image(&info.image, config.low_threshold, config.high_threshold) {
                    Ok(preprocessed_image) => {
                        // Next, node detection.
                        let node_list = node_detection(
                            &preprocessed_image,
                            config.max_vertices,
                            config.edge_threshold,
                        );

                        // Lastly, triangulation.
                        match triangulation(&info.image, node_list) {
                            Ok(trig) => Ok(WasmImageInfo {
                                image: trig,
                                ..info
                            }),
                            Err(err) => Err(JsValue::from(err)),
                        }
                    }
                    Err(err) => Err(JsValue::from(err)),
                }
            })),
        }
    }

    /// Triangulates points given a node list.
    pub fn wasm_triangulation(
        &self,
        preprocessed_image: &WasmPreprocessedImage,
        max_vertices: u32,
        edge_threshold: f64,
    ) -> WasmImage {
        let image_box = match &*self.image_box {
            Ok(info) => match &*preprocessed_image.image_box {
                Ok(preprocessed_image) => {
                    let node_list =
                        node_detection(&preprocessed_image, max_vertices, edge_threshold);

                    match triangulation(&info.image, node_list) {
                        Ok(image) => Ok(WasmImageInfo {
                            image,
                            headers: info.headers.clone(),
                            format: info.format,
                        }),
                        Err(err) => Err(JsValue::from(err)),
                    }
                }
                Err(err) => Err(JsValue::from(err)),
            },
            Err(err) => Err(JsValue::from(err)),
        };

        WasmImage {
            image_box: Box::new(image_box),
        }
    }
}

/// A WebAssembly-compatible struct to work with pre-processed images.
#[wasm_bindgen]
pub struct WasmPreprocessedImage {
    image_box: Box<Result<PreprocessedImage, JsValue>>,
}

#[wasm_bindgen]
impl WasmPreprocessedImage {
    #[wasm_bindgen(constructor)]
    /// Creates a new `WasmPreprocessedImage`.
    pub fn wasm_preprocess_image(
        image: &WasmImage,
        low_threshold: f32,
        high_threshold: f32,
    ) -> WasmPreprocessedImage {
        let image_box = match &*image.image_box {
            Ok(info) => match preprocess_image(&info.image, low_threshold, high_threshold) {
                Ok(preprocessed_image) => Ok(preprocessed_image),
                Err(err) => Err(JsValue::from(err)),
            },
            Err(err) => Err(JsValue::from(err)),
        };

        WasmPreprocessedImage {
            image_box: Box::new(image_box),
        }
    }
}

fn err_img_to_js(i: image::ImageError) -> JsValue {
    JsValue::from(js_sys::Error::new(&format!("Image error: {}", i)))
}
