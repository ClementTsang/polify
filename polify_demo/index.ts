import * as polify from "polify";
// @ts-ignore
import defaultImage from "./public/ulrich-mareli.jpg";

// @ts-ignore
import Worker from "worker-loader!./build.worker";

class PolifyDemo {
  isUsingPaste: boolean;
  isProcessing: boolean;
  isError: boolean;
  polifyConfig: polify.TriangulationConfig;
  imageObjectUrl: string | null;
  polyObjectUrl: string | null;
  preprocessedImage: polify.WasmPreprocessedImage | null;
  workingImage: polify.WasmImage | null;
  showPoly: boolean;
  imageBlob: any;

  constructor() {
    this.isUsingPaste = true;
    this.isProcessing = false;
    this.polyObjectUrl = null;
    this.isError = false;
    this.preprocessedImage = null;
    this.workingImage = null;
    this.imageObjectUrl = defaultImage;
    this.showPoly = false;
    this.imageBlob = null;

    const maxVerticesSlider: HTMLInputElement = document.getElementById(
      "max-vertices"
    ) as HTMLInputElement;
    const edgeThresholdSlider: HTMLInputElement = document.getElementById(
      "edge-threshold"
    ) as HTMLInputElement;
    const highThresholdSlider: HTMLInputElement = document.getElementById(
      "high-threshold"
    ) as HTMLInputElement;
    const lowThresholdSlider: HTMLInputElement = document.getElementById(
      "low-threshold"
    ) as HTMLInputElement;

    maxVerticesSlider.onmouseup = () => {
      this.polifyConfig.max_vertices = parseInt(maxVerticesSlider.value);
    };

    edgeThresholdSlider.onmouseup = () => {
      this.polifyConfig.edge_threshold = parseFloat(edgeThresholdSlider.value);
    };

    highThresholdSlider.onmouseup = () => {
      this.polifyConfig.high_threshold = parseFloat(highThresholdSlider.value);
    };

    lowThresholdSlider.onmouseup = () => {
      this.polifyConfig.low_threshold = parseFloat(lowThresholdSlider.value);
    };

    this.polifyConfig = polify.TriangulationConfig.new(
      parseFloat(maxVerticesSlider.value),
      parseFloat(edgeThresholdSlider.value),
      parseFloat(lowThresholdSlider.value),
      parseFloat(highThresholdSlider.value)
    );

    this.buildImage();

    const pasteImageTab = document.getElementById("paste-image");
    const uploadImageTab = document.getElementById("upload-image");

    const pasteImageAction = document.getElementById("paste-image-action");
    const uploadImageAction = document.getElementById("upload-image-action");

    pasteImageTab.addEventListener("click", () => {
      pasteImageTab.classList.add("is-active");
      uploadImageTab.classList.remove("is-active");

      uploadImageAction.classList.add("is-hidden");
      pasteImageAction.classList.remove("is-hidden");
    });

    uploadImageTab.addEventListener("click", () => {
      uploadImageTab.classList.add("is-active");
      pasteImageTab.classList.remove("is-active");

      pasteImageAction.classList.add("is-hidden");
      uploadImageAction.classList.remove("is-hidden");
    });

    const uploadImageActionInput: HTMLInputElement = document.querySelector(
      "#upload-image-action input[type=file]"
    );
    const displayedImage: HTMLImageElement = document.getElementById(
      "displayed-image"
    ) as HTMLImageElement;
    displayedImage.src = this.imageObjectUrl;

    uploadImageActionInput.onchange = () => {
      if (uploadImageActionInput.files.length > 0) {
        const file = uploadImageActionInput.files[0];
        document.querySelector("#upload-image-action .file-name").textContent =
          file.name;

        if (this.imageObjectUrl !== null) {
          URL.revokeObjectURL(this.imageObjectUrl);
        }
        this.imageObjectUrl = window.URL.createObjectURL(file);
        displayedImage.src = this.imageObjectUrl;

        // Call polify here...
      }
    };

    const pasteImageButton = document.querySelector(
      "#paste-image-action button"
    );
    const pasteImageInput: HTMLInputElement = document.querySelector(
      "#paste-image-action input"
    );
    pasteImageButton.addEventListener("click", () => {
      if (
        pasteImageInput != null &&
        pasteImageInput.value != null &&
        pasteImageInput.value.length > 0
      ) {
        if (this.imageObjectUrl !== null) {
          URL.revokeObjectURL(this.imageObjectUrl);
        }
        this.imageObjectUrl = pasteImageInput.value;
        displayedImage.src = this.imageObjectUrl;
      }

      // Call polify here...
    });
    pasteImageInput.addEventListener("input", () => {
      if (pasteImageInput.value.length > 0) {
        pasteImageButton.removeAttribute("disabled");
      } else {
        pasteImageButton.setAttribute("disabled", "");
      }
    });
    pasteImageInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (
          pasteImageInput != null &&
          pasteImageInput.value != null &&
          pasteImageInput.value.length > 0
        ) {
          if (this.imageObjectUrl !== null) {
            URL.revokeObjectURL(this.imageObjectUrl);
          }
          this.imageObjectUrl = pasteImageInput.value;
          displayedImage.src = this.imageObjectUrl;
        }
      }
    });

    const polifySwitch = document.getElementById(
      "polify-switch"
    ) as HTMLInputElement;
    polifySwitch.checked = false;
    const progressBar = document.getElementById(
      "progress-bar"
    ) as HTMLProgressElement;
    polifySwitch.addEventListener("click", () => {
      if (!polifySwitch.checked) {
        this.showPoly = false;

        maxVerticesSlider.setAttribute("disabled", "disabled");
        edgeThresholdSlider.setAttribute("disabled", "disabled");
        highThresholdSlider.setAttribute("disabled", "disabled");
        lowThresholdSlider.setAttribute("disabled", "disabled");

        displayedImage.style.display = "block";
        progressBar.style.display = "none";
        displayedImage.src = this.imageObjectUrl;
      } else {
        this.showPoly = true;

        maxVerticesSlider.removeAttribute("disabled");
        edgeThresholdSlider.removeAttribute("disabled");
        highThresholdSlider.removeAttribute("disabled");
        lowThresholdSlider.removeAttribute("disabled");

        if (this.isProcessing) {
          displayedImage.style.display = "none";
          progressBar.style.display = "block";
        } else {
          displayedImage.style.display = "block";
          progressBar.style.display = "none";
          displayedImage.src = this.polyObjectUrl;
        }
      }
    });
  }

  // preprocessImage(): polify.WasmPreprocessedImage | null {
  //   console.log("Called preprocess.");

  //   const imageUrl: string = document
  //     .getElementById("displayed-image")
  //     .getAttribute("src");

  //   console.log("imageUrl: " + imageUrl);

  //   if (this.workingImage !== null) {
  //     this.workingImage.free();
  //   }

  //   this.workingImage = new polify.WasmImage(imageUrl);
  //   const tempWorkingImage = new polify.WasmImage(imageUrl);
  //   try {
  //     if (this.workingImage !== null) {
  //       let preprocessedImage = new polify.WasmPreprocessedImage(
  //         tempWorkingImage,
  //         this.polifyConfig.low_threshold,
  //         this.polifyConfig.high_threshold
  //       );

  //       console.log("Returning preprocessed image...");

  //       return preprocessedImage;
  //     } else {
  //       console.error("workingImage was null...?");
  //     }
  //   } catch (err: any) {
  //     console.error("Error while preprocessing: " + err);
  //   }

  //   return null;
  // }

  // updateImage(): polify.WasmImage | null {
  //   console.log("Called update.");

  //   if (this.preprocessedImage !== null && this.workingImage !== null) {
  //     try {
  //       console.log("Returning updated image.");

  //       return this.workingImage.wasm_triangulation(
  //         this.preprocessedImage,
  //         this.polifyConfig.max_vertices,
  //         this.polifyConfig.edge_threshold
  //       );
  //     } catch (err: any) {
  //       console.error("Error while updating: " + err);
  //     }
  //   } else {
  //     console.error("Either preprocessedImage or workingImage were null...");
  //   }

  //   return null;
  // }

  buildImage() {
    console.log("Building image...");
    this.isProcessing = true;
    this.isError = false;

    const imageUrl: string = this.imageObjectUrl;

    const worker = new Worker();
    console.log("image sent: " + JSON.stringify(imageUrl));

    worker.postMessage([
      imageUrl,
      this.polifyConfig.edge_threshold,
      this.polifyConfig.high_threshold,
      this.polifyConfig.low_threshold,
      this.polifyConfig.max_vertices,
    ]);

    worker.onmessage = (e: any) => {
      console.log("Received message from worker");

      if (e.data !== null) {
        this.imageBlob = e.data;
        this.polyObjectUrl = URL.createObjectURL(this.imageBlob);

        const displayedImage: HTMLImageElement = document.getElementById(
          "displayed-image"
        ) as HTMLImageElement;

        const progressBar = document.getElementById(
          "progress-bar"
        ) as HTMLProgressElement;

        if (this.showPoly) {
          displayedImage.style.display = "block";
          progressBar.style.display = "none";
          displayedImage.src = this.polyObjectUrl;
        }
      } else {
        console.error("Something went wrong with the worker...");
        this.isError = true;
      }

      this.isProcessing = false;
      console.log("Done.");
    };
  }
}

// @ts-ignore
bulmaSlider.attach();
new PolifyDemo();
