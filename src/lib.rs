//! A library for quickly generating low-polygon images from a source picture.
//! Techniques based on the ones described here: <https://cjqian.github.io/docs/tri_iw_paper.pdf>

extern crate image;

mod polifier;
pub use polifier::{polify_image, triangulation_polify_image};
