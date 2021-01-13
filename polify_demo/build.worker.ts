const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {
  console.log("Worker starting up.");

  import("polify")
    .then((polify) => {
      polify.WasmImage.create_wasm_image(event.data[0])
        .then((workingImage) => {
          const polifyConfig = {
            edge_threshold: event.data[1],
            high_threshold: event.data[2],
            low_threshold: event.data[3],
            max_vertices: event.data[4],
          };

          let preprocessedImage = new polify.WasmPreprocessedImage(
            workingImage,
            polifyConfig.low_threshold,
            polifyConfig.high_threshold
          );

          let polyImage = workingImage.wasm_triangulation(
            preprocessedImage,
            polifyConfig.max_vertices,
            polifyConfig.edge_threshold
          );

          let resp: Response = polyImage.build();
          let polyBlob: any = null;

          preprocessedImage.free();
          polyImage.free();
          workingImage.free();

          if (resp.ok) {
            resp
              .blob()
              .then((blob: Object) => {
                polyBlob = blob;
              })
              .catch((err: any) => {
                console.error("Error while opening blob:" + err);
              })
              .finally(() => {
                ctx.postMessage(polyBlob);
              });
          } else {
            console.error("Polify threw an error while building.");
            ctx.postMessage(null);
          }
        })
        .catch((err: any) => {
          console.error("Error while building image: " + err);
          ctx.postMessage(null);
        });
    })
    .catch((err: any) => {
      console.error("Error while importing polify: " + err);
      ctx.postMessage(null);
    });
});
