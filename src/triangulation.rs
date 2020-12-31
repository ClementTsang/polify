//! Uses [Delaunay triangluation](https://en.wikipedia.org/wiki/Delaunay_triangulation) to
//! generate low-poly images.
//!
//! Approach based on https://cjqian.github.io/docs/tri_iw_paper.pdf

use image::{DynamicImage, GrayImage};
use imageproc::edges::canny;

/// A [`TriangulationConfig`] are the parameters that will affect the triangulation
/// algorithm's output.
pub struct TriangulationConfig {
    /// The percentage of vertices / total pixel count we want in our output.
    pub rate: f32,

    /// The maximum number of vertices we want.
    pub max_vertices: u32,

    /// The minimal strength of potential vertices.
    pub edge_threshold: f32,

    /// Low threshold for edge detection in preprocess step.
    pub low_threshold: f32,

    /// High threshold for edge detection in preprocess step.
    pub high_threshold: f32,
}

/// A pre-processed image.
pub struct PreprocessedImage(GrayImage);

/// An image with node detection done on it.
pub struct NodeDetectedImage(DynamicImage);

/// Returns a low-poly [`DynamicImage`] via the triangulation method.
///
/// This function is just a wrapper that calls 3 functions in this order for you:
/// - [`preprocess_image`] to preprocess the image.
/// - [`node_detection`] to detect nodes using the preprocessed image.
/// - [`triangulation`] to compute the triangulation of the node-detected image.
///
/// You can instead call these functions manually if you wish to alter the steps in any way.
pub fn triangulate_image(image: &DynamicImage, config: &TriangulationConfig) {
    // First, we preprocess.
    let preprocessed_image: PreprocessedImage =
        preprocess_image(image.clone(), config.low_threshold, config.high_threshold);

    // Next, node detection.

    // Lastly, triangulation.
}

/// Preprocesses the image.
pub fn preprocess_image(
    image: DynamicImage,
    low_threshold: f32,
    high_threshold: f32,
) -> PreprocessedImage {
    PreprocessedImage(canny(
        image.as_luma8().unwrap(),
        low_threshold,
        high_threshold,
    ))
}

/// Detects nodes in a pre-processed image.
pub fn node_detection(image: PreprocessedImage, rate: f32, points: u32) {}

/// Triangulates points on a node-detected image.
pub fn triangulation(image: NodeDetectedImage) {}
