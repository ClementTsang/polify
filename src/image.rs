//! API to load an image in the first place.

use image::{io::Reader as ImageReader, DynamicImage};
use std::path::Path;

/// Loads an image from `load_path`.
pub fn load_image<P>(load_path: P) -> crate::error::Result<DynamicImage>
where
    P: AsRef<Path>,
{
    Ok(ImageReader::open(load_path)?.decode()?)
}

/// Saves `image` to `path`.  If `overwrite` is set to `false`, then this function will
/// error out if a file already exists at the path.
pub fn save_image<P>(image: DynamicImage, save_path: P, overwrite: bool) -> crate::error::Result<()>
where
    P: AsRef<Path>,
{
    if !overwrite && save_path.as_ref().exists() {
        Err(crate::error::PolifyError::FileAlreadyExists(
            save_path.as_ref().to_str().unwrap().to_string(),
        ))
    } else {
        image.save(save_path)?;
        Ok(())
    }
}
