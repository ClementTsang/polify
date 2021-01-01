fn main() {
    triangulate_image("./erik-mclean.jpg", "./doggo.png");
    triangulate_image("./siyuan.jpg", "./mountains.png");
    triangulate_image("./anton-lecock.jpg", "./rocks.png");
}

fn triangulate_image(load: &str, save: &str) {
    let loaded = polify::load_image(load).unwrap();
    let trig = polify::triangulate_image(
        &loaded,
        &polify::TriangulationConfig {
            rate: 0.05,
            max_vertices: 4000,
            edge_threshold: 20.0,
            low_threshold: 0.05,
            high_threshold: 5.0,
        },
    );
    polify::save_image(trig, save, true).unwrap();
}
