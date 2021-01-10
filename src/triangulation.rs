//! Uses [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) to
//! generate low-poly images.
//!
//! Approach based on https://cjqian.github.io/docs/tri_iw_paper.pdf

use crate::PolifyError;

use delaunator::triangulate;
use image::{DynamicImage, GrayImage, ImageBuffer, Luma, Rgb, RgbImage};
use imageproc::definitions::HasBlack;
use imageproc::definitions::HasWhite;
use imageproc::drawing::draw_polygon_mut;
use rand::seq::IteratorRandom;

use wasm_bindgen::prelude::*;

// #[cfg(target_arch = "wasm32")]

#[cfg(not(target_arch = "wasm32"))]
use rayon::prelude::*;

#[wasm_bindgen]
/// A [`TriangulationConfig`] is the parameters that will affect the triangulation
/// algorithm's output.
pub struct TriangulationConfig {
    /// The maximum number of vertices we want.
    pub max_vertices: u32,

    /// The minimal strength of potential vertices.
    pub edge_threshold: f64,

    /// Low threshold for edge detection in preprocess step.  Must be greater than 0.0, and must
    /// be strictly smaller than high_threshold, otherwise an error will be thrown when trying to
    /// preprocess.
    ///
    /// Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    /// edge detection.
    pub low_threshold: f32,

    /// High threshold for edge detection in preprocess step.  Must be less than 1140, and must
    /// be strictly greater than threshold, otherwise an error will be thrown when trying to
    /// preprocess.
    ///
    /// Anything between [`low_threshold`] and [`high_threshold`] will be removed during
    /// edge detection.
    pub high_threshold: f32,
}

/// A pre-processed image.
#[derive(Debug, Clone)]
pub struct PreprocessedImage {
    /// A black and white image.
    pub image: GrayImage,
}

#[wasm_bindgen]

/// A list of nodes.
#[derive(Debug, Clone)]
pub struct NodeList {
    list: Vec<delaunator::Point>,
}

/// Returns a low-poly [`DynamicImage`] via the triangulation method.
///
/// This function is just a wrapper that calls 3 functions in this order for you:
/// - [`preprocess_image`] to preprocess the image.
/// - [`node_detection`] to detect nodes using the preprocessed image.
/// - [`triangulation`] to compute the triangulation of the node-detected image.
///
/// You can instead call these functions manually if you wish to alter the steps in any way.
pub fn triangulate_image(
    image: &DynamicImage,
    config: &TriangulationConfig,
) -> crate::error::Result<DynamicImage> {
    // First, we preprocess.

    let preprocessed_image: PreprocessedImage =
        preprocess_image(image, config.low_threshold, config.high_threshold)?;
    let (width, height) = preprocessed_image.image.dimensions();

    // Next, node detection.
    let node_list = node_detection(
        &preprocessed_image,
        config.max_vertices,
        config.edge_threshold,
    );

    // Lastly, triangulation.
    Ok(triangulation(node_list, image, width, height)?)
}

/// Preprocesses the image.
pub fn preprocess_image(
    image: &DynamicImage,
    low_threshold: f32,
    high_threshold: f32,
) -> crate::error::Result<PreprocessedImage> {
    if low_threshold <= 0.0 {
        return Err(crate::error::PolifyError::InvalidSetting(
            "low_threshold must be greater than 0.0".to_string(),
        ));
    } else if high_threshold >= 1140.0 {
        return Err(crate::error::PolifyError::InvalidSetting(
            "high_threshold must be less than than 1140".to_string(),
        ));
    } else if low_threshold >= high_threshold {
        return Err(crate::error::PolifyError::InvalidSetting(
            "low_threshold must be less than high_threshold".to_string(),
        ));
    }

    Ok(PreprocessedImage {
        image: canny(
            image
                .grayscale()
                .as_luma8()
                .ok_or(crate::error::PolifyError::LumaConversion)?,
            low_threshold,
            high_threshold,
        )?,
    })
}

fn canny(
    image: &GrayImage,
    low_threshold: f32,
    high_threshold: f32,
) -> crate::error::Result<GrayImage> {
    use std::cmp::{max, min};

    // Quick blur
    const BLUR: u32 = 7;
    const RATE: f32 = 0.05;
    const KERNEL: [f32; 9] = [1.0, 1.0, 1.0, 1.0, -8.0, 1.0, 1.0, 1.0, 1.0];

    let (width, height) = image.dimensions();

    #[cfg(target_arch = "wasm32")]
    let blurred_image: ImageBuffer<Luma<f32>, Vec<f32>> = ImageBuffer::from_vec(
        width,
        height,
        (0..width)
            .map(|i| {
                (0..height).map(move |j| {
                    let h: f32 = (max(0, i - BLUR)..min(width - 1, i + BLUR))
                        .map(|x| image.get_pixel(x, j).0[0] as f32 / (2 * BLUR) as f32)
                        .sum();

                    h / (2.0 * RATE)
                })
            })
            .flatten()
            .collect::<Vec<_>>(),
    )
    .ok_or(crate::error::PolifyError::PreProcessing)?;

    #[cfg(not(target_arch = "wasm32"))]
    let blurred_image: ImageBuffer<Luma<f32>, Vec<f32>> = ImageBuffer::from_vec(
        width,
        height,
        (0..width)
            .into_par_iter()
            .map(|i| {
                (0..height).into_par_iter().map(move |j| {
                    let h: f32 = (max(0, i - BLUR)..min(width - 1, i + BLUR))
                        .map(|x| image.get_pixel(x, j).0[0] as f32 / (2 * BLUR) as f32)
                        .sum();

                    h / (2.0 * RATE)
                })
            })
            .flatten()
            .collect::<Vec<_>>(),
    )
    .ok_or(crate::error::PolifyError::PreProcessing)?;

    // Apply filter
    let filtered_image = image::imageops::filter3x3(&blurred_image, &KERNEL);

    Ok(hysteresis(&filtered_image, low_threshold, high_threshold))
}

/// Filter out edges with the thresholds.  Non-recursive breadth-first search.  From imageproc.
fn hysteresis(
    input: &ImageBuffer<Luma<f32>, Vec<f32>>,
    low_thresh: f32,
    high_thresh: f32,
) -> ImageBuffer<Luma<u8>, Vec<u8>> {
    let max_brightness = Luma::white();
    let min_brightness = Luma::black();
    // Init output image as all black.
    let mut out = ImageBuffer::from_pixel(input.width(), input.height(), min_brightness);
    // Stack. Possible optimization: Use previously allocated memory, i.e. gx.
    let mut edges = Vec::with_capacity(((input.width() * input.height()) / 2) as usize);
    for y in 1..input.height() - 1 {
        for x in 1..input.width() - 1 {
            let inp_pix = *input.get_pixel(x, y);
            let out_pix = *out.get_pixel(x, y);
            // If the edge strength is higher than high_thresh, mark it as an edge.
            if inp_pix[0] >= high_thresh && out_pix[0] == 0 {
                out.put_pixel(x, y, max_brightness);
                edges.push((x, y));
                // Track neighbors until no neighbor is >= low_thresh.
                while !edges.is_empty() {
                    let (nx, ny) = edges.pop().unwrap();
                    let neighbor_indices = [
                        (nx + 1, ny),
                        (nx + 1, ny + 1),
                        (nx, ny + 1),
                        (nx - 1, ny - 1),
                        (nx - 1, ny),
                        (nx - 1, ny + 1),
                    ];

                    for neighbor_idx in &neighbor_indices {
                        let in_neighbor = *input.get_pixel(neighbor_idx.0, neighbor_idx.1);
                        let out_neighbor = *out.get_pixel(neighbor_idx.0, neighbor_idx.1);
                        if in_neighbor[0] >= low_thresh && out_neighbor[0] == 0 {
                            out.put_pixel(neighbor_idx.0, neighbor_idx.1, max_brightness);
                            edges.push((neighbor_idx.0, neighbor_idx.1));
                        }
                    }
                }
            }
        }
    }
    out
}

/// Detects nodes in a pre-processed image.
pub fn node_detection(
    preprocessed_image: &PreprocessedImage,
    max_vertices: u32,
    edge_threshold: f64,
) -> NodeList {
    use std::cmp::{max, min};

    let mut rng = rand::thread_rng();
    let (width, height) = preprocessed_image.image.dimensions();

    let mut node_list: Vec<delaunator::Point> = vec![];

    for i in 0..width {
        for j in 0..height {
            let sum_of_pixels: f64 = (max(0, i - 1)..min(width - 1, i + 1))
                .map(|x| {
                    (max(0, j - 1)..min(height - 1, j + 1))
                        .map(|y| preprocessed_image.image.get_pixel(x, y).0[0] as u32)
                        .sum::<u32>()
                })
                .sum::<u32>() as f64;

            let edge_density = sum_of_pixels / 9.0;
            if edge_density > edge_threshold {
                node_list.push(delaunator::Point {
                    x: i as f64,
                    y: j as f64,
                });
            }
        }
    }

    let mut node_list = node_list
        .into_iter()
        .choose_multiple(&mut rng, max_vertices as usize);

    node_list.push(delaunator::Point { x: 0.0, y: 0.0 });
    node_list.push(delaunator::Point {
        x: 0.0,
        y: height as f64 - 1.0,
    });
    node_list.push(delaunator::Point {
        x: width as f64 - 1.0,
        y: 0.0,
    });
    node_list.push(delaunator::Point {
        x: width as f64 - 1.0,
        y: height as f64 - 1.0,
    });

    NodeList { list: node_list }
}

/// Triangulates points given a node list.
pub fn triangulation(
    node_list: NodeList,
    image: &DynamicImage,
    width: u32,
    height: u32,
) -> crate::error::Result<DynamicImage> {
    // ...because why write our own?
    let triangulation = triangulate(&node_list.list).ok_or(PolifyError::Triangulation)?;

    // Now let's convert the triangulation into an image.
    let mut img = RgbImage::new(width, height);
    let rgb_img = image
        .as_rgb8()
        .ok_or(crate::error::PolifyError::RgbConversion)?;
    let consecutive_slices = consecutive_slices(&triangulation.triangles, 3);
    for points in consecutive_slices {
        // Assert should hopefully mean we optimize out bounds check...
        assert!(points.len() == 3);

        let pixels = (
            &node_list.list[points[0]],
            &node_list.list[points[1]],
            &node_list.list[points[2]],
        );

        // Center of gravity in triangle...
        let (cog_x, cog_y) = (
            ((pixels.0.x + pixels.1.x + pixels.2.x) / 3.0) as u32,
            ((pixels.0.y + pixels.1.y + pixels.2.y) / 3.0) as u32,
        );

        if cog_x < width && cog_y < height {
            let colour_values = rgb_img.get_pixel(cog_x, cog_y).0;
            assert!(colour_values.len() >= 3);

            let colour = Rgb([colour_values[0], colour_values[1], colour_values[2]]);

            let coord_1 = imageproc::point::Point {
                x: pixels.0.x as i32,
                y: pixels.0.y as i32,
            };
            let coord_2 = imageproc::point::Point {
                x: pixels.1.x as i32,
                y: pixels.1.y as i32,
            };
            let coord_3 = imageproc::point::Point {
                x: pixels.2.x as i32,
                y: pixels.2.y as i32,
            };

            draw_polygon_mut(&mut img, &[coord_1, coord_2, coord_3], colour);
        }
    }

    Ok(DynamicImage::ImageRgb8(img))
}

// Groups an array into a nested array.  Will drop values if it can't iterate by num_per_group.
fn consecutive_slices(data: &[usize], num_per_group: usize) -> impl Iterator<Item = &[usize]> {
    (0..data.len()).step_by(num_per_group).flat_map(move |i| {
        if i + num_per_group < data.len() {
            Some(&data[i..(i + num_per_group)])
        } else {
            None
        }
    })
}
