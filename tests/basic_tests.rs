use std::thread::sleep;

use polify::error::Result;

const RELATIVE_SAMPLE_FILE_PATH: &str = "./examples/sample_images/erik-mclean.jpg";

#[test]
/// Tests basic loads and saves.
fn test_loads_and_saves() -> Result<()> {
    use std::path::Path;
    const RELATIVE_SAVE_PATH: &str = "./examples/sample_images/SAVE_TEST_1.jpg";

    assert!(
        Path::new(RELATIVE_SAMPLE_FILE_PATH).exists(),
        "File could not be found..."
    );

    let load = polify::load_image(RELATIVE_SAMPLE_FILE_PATH)?;

    let did_save_ok = polify::save_image(load, RELATIVE_SAVE_PATH, true).is_ok();
    let saved_path = Path::new(RELATIVE_SAVE_PATH);

    assert!(saved_path.exists(), "Saved path doesn't exist...");
    std::fs::remove_file(saved_path).expect("Could not properly delete the test save file.");

    assert!(did_save_ok, "File didn't properly save...");

    Ok(())
}

#[test]
/// Tests if the override parameter on save works.
fn test_save_override() -> Result<()> {
    use std::path::Path;
    const RELATIVE_SAVE_PATH: &str = "./examples/sample_images/SAVE_TEST_2.jpg";

    assert!(
        Path::new(RELATIVE_SAMPLE_FILE_PATH).exists(),
        "File could not be found..."
    );

    let load = polify::load_image(RELATIVE_SAMPLE_FILE_PATH)?;
    let save_path = Path::new(RELATIVE_SAVE_PATH);

    if save_path.exists() {
        std::fs::remove_file(save_path).expect("Could not properly delete the test save file.");

        // Sleep to help ensure the file is really gone...
        sleep(std::time::Duration::from_millis(5000));
    }

    assert!(
        polify::save_image(load.clone(), save_path, false).is_ok(),
        "First save failed."
    );
    assert!(
        polify::save_image(load.clone(), save_path, false).is_err(),
        "Second save passed when it should have failed."
    );
    assert!(
        polify::save_image(load, save_path, true).is_ok(),
        "Third save failed."
    );

    std::fs::remove_file(save_path).expect("Could not properly delete the test save file.");

    Ok(())
}
