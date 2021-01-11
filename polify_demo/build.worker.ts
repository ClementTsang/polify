const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {
  console.log("Worker starting up.");

  let polyObjectUrl: any = null;

  import("polify")
    .then((polify) => {
      const workingImage = new polify.WasmImage(event.data[0]);
      const tempWorkingImage = new polify.WasmImage(event.data[0]);
      const polifyConfig = {
        edge_threshold: event.data[1],
        high_threshold: event.data[2],
        low_threshold: event.data[3],
        max_vertices: event.data[4],
      };

      let preprocessedImage = new polify.WasmPreprocessedImage(
        tempWorkingImage,
        polifyConfig.low_threshold,
        polifyConfig.high_threshold
      );

      workingImage
        .wasm_triangulation(
          preprocessedImage,
          polifyConfig.max_vertices,
          polifyConfig.edge_threshold
        )
        .build()
        .then((resp: Response) => {
          resp
            .blob()
            .then((blob: Object) => {
              polyObjectUrl = URL.createObjectURL(blob);
            })
            .catch((err: any) => {
              console.error("Error while opening blob:" + err);
            })
            .finally(() => {
              ctx.postMessage(polyObjectUrl);
            });
        })
        .catch((err: any) => {
          console.error("Error while building image: " + err);
          ctx.postMessage(polyObjectUrl);
        });
    })
    .catch((err: any) => {
      console.error("Error while importing polify: " + err);
      ctx.postMessage(polyObjectUrl);
    });
});
