use std::time::Instant;

fn main() {
    println!("Starting...");

    let start = Instant::now();
    triangulate_image("./erik-mclean.jpg", "./doggo.png");
    println!(
        "Image 1 took {} seconds",
        Instant::now().duration_since(start).as_secs()
    );

    let start = Instant::now();
    triangulate_image("./siyuan.jpg", "./mountains.png");
    println!(
        "Image 2 took {} seconds",
        Instant::now().duration_since(start).as_secs()
    );

    let start = Instant::now();
    triangulate_image("./anton-lecock.jpg", "./rocks.png");
    println!(
        "Image 3 took {} seconds",
        Instant::now().duration_since(start).as_secs()
    );
}

fn triangulate_image(load: &str, save: &str) {
    let loaded = polify::load_image(load).unwrap();
    let trig = polify::triangulate_image(
        &loaded,
        &polify::TriangulationConfig {
            max_vertices: 4500,
            edge_threshold: 20.0,
            low_threshold: 0.05,
            high_threshold: 5.0,
        },
    )
    .unwrap();
    polify::save_image(trig, save, true).unwrap();
}
