//! A set of functions used for edge-related utilities.

use image::{
    imageops::{blur, filter3x3, grayscale},
    DynamicImage, ImageBuffer, Rgba,
};

/// General-purpose edge detection algorithm based on Canny edge detection.
pub(crate) fn edge_detection(image: DynamicImage) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let mut returned_image: DynamicImage;

    // Reduce noise, we'll use a Gaussian blur
    let mut image_buffer = blur(&image, 1.0);

    // Find intensity gradients

    // Apply non-max. suppression

    // Apply double threshold to find potential edges

    // Finalize

    image_buffer
}
