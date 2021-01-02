//! Uses [Delaunay triangluation](https://en.wikipedia.org/wiki/Delaunay_triangulation) to
//! generate low-poly images.
//!
//! Approach based on https://cjqian.github.io/docs/tri_iw_paper.pdf

use crate::PolifyError;

use delaunator::triangulate;
use image::{DynamicImage, GrayImage, Rgb, RgbImage};
use imageproc::{drawing::draw_polygon_mut, edges::canny};
use rand::seq::IteratorRandom;

/// A [`TriangulationConfig`] are the parameters that will affect the triangulation
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
pub struct PreprocessedImage(GrayImage);

/// A list of nodes.
#[derive(Debug, Clone)]
pub struct NodeList(Vec<delaunator::Point>);

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
    let (width, height) = preprocessed_image.0.dimensions();

    // Next, node detection.
    let node_list = node_detection(
        preprocessed_image,
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

    Ok(PreprocessedImage(canny(
        image
            .grayscale()
            .as_luma8()
            .ok_or(crate::error::PolifyError::LumaConversion)?,
        low_threshold,
        high_threshold,
    )))
}

/// Detects nodes in a pre-processed image.
pub fn node_detection(
    preprocessed_image: PreprocessedImage,
    max_vertices: u32,
    edge_threshold: f64,
) -> NodeList {
    let mut rng = rand::thread_rng();
    let (width, height) = preprocessed_image.0.dimensions();

    let mut node_list: Vec<delaunator::Point> = vec![];

    for i in 0..width {
        for j in 0..height {
            if i > 0 && (i + 1) < width && j > 0 && (j + 1) < height {
                let sum_of_pixels: f64 = ((i - 1)..(i + 1))
                    .map(|x| {
                        ((j - 1)..(j + 1))
                            .map(|y| preprocessed_image.0.get_pixel(x, y).0[0] as u32)
                            .sum::<u32>()
                    })
                    .sum::<u32>() as f64;

                let edge_density = 1.0 / 9.0 * sum_of_pixels;
                if edge_density > edge_threshold {
                    node_list.push(delaunator::Point {
                        x: i as f64,
                        y: j as f64,
                    });
                }
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

    NodeList(node_list)
}

/// Triangulates points given a node list.
pub fn triangulation(
    node_list: NodeList,
    image: &DynamicImage,
    width: u32,
    height: u32,
) -> crate::error::Result<DynamicImage> {
    // ...because why write our own?
    let triangulation = triangulate(&node_list.0).ok_or(PolifyError::Triangulation)?;

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
            &node_list.0[points[0]],
            &node_list.0[points[1]],
            &node_list.0[points[2]],
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
