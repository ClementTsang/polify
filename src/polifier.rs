//! Handles the bulk of the library.

use image::GenericImageView;
use image::ImageError;

mod edge_utils;
use edge_utils::edge_detection;

/// The general, user-modifiable, low-polygon image generation method.  Heavily based on
/// this paper: <https://cjqian.github.io/docs/tri_iw_paper.pdf>
pub fn polify_image(image_path: String) -> String {
    image_path
}

/// A version based on the triangulation method, based on the Delaunay triangulation
/// method: <https://en.wikipedia.org/wiki/Delaunay_triangulation>.
/// This is offered as an alternative generation type.
pub fn triangulation_polify_image(image_path: String) -> Result<String, ImageError> {
    // Open image (will fail if invalid)
    let img = image::open(&image_path)?;
    let write_path = image_path;

    Ok(write_path)
}
