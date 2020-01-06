use std::fs::*;

const RELATIVE_SAMPLE_FILE_PATH: &str = "./examples/sample_images/erik-mclean.jpg";

#[test]
/// Basic test on whether or not the library even works at all.
fn basic_polify_test() -> std::io::Result<()> {

    // TODO: Replace this result with the one built into polify
    println!("basic_polify_test successfully started.");

    let opened_file = File::open(RELATIVE_SAMPLE_FILE_PATH)?;

    println!("basic_polify_test successfully concluded.");
    Ok(())
}