//! A library for generating a low-poly images.

#![deny(missing_docs)]
#![deny(broken_intra_doc_links)]
#![deny(unused_results)]
#![forbid(rust_2018_idioms)]

pub mod error;
pub mod image;
pub mod triangulation;
pub mod wasm_triangulation;

pub use crate::image::*;
pub use error::*;
pub use triangulation::*;
pub use wasm_triangulation::*;
