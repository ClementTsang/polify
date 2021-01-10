// @ts-ignore
import * as polify from "polify";
// @ts-ignore
import defaultImage from "./public/ulrich-mareli.jpg";

class PolifyDemo {
  isUsingPaste: boolean;
  isProcessing: boolean;
  polifyConfig: polify.TriangulationConfig;
  imageObjectUrl: string | null;
  polyObjectUrl: string | null;

  constructor() {
    this.isUsingPaste = true;
    this.isProcessing = false;
    this.polyObjectUrl = null;
    this.imageObjectUrl = defaultImage;

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
      const newValue = parseInt(maxVerticesSlider.value);
    };

    edgeThresholdSlider.onmouseup = () => {
      const newValue = parseFloat(edgeThresholdSlider.value);
    };

    highThresholdSlider.onmouseup = () => {
      const newValue = parseFloat(highThresholdSlider.value);
    };

    lowThresholdSlider.onmouseup = () => {
      const newValue = parseFloat(lowThresholdSlider.value);
    };

    this.polifyConfig = polify.TriangulationConfig.new(
      parseFloat(maxVerticesSlider.value),
      parseFloat(edgeThresholdSlider.value),
      parseFloat(lowThresholdSlider.value),
      parseFloat(highThresholdSlider.value)
    );

    const imageUrl: string = document
      .getElementById("displayed-image")
      .getAttribute("src");
    console.log("imageUrl: " + imageUrl);

    const workingImage: polify.WorkingImage = new polify.WorkingImage(imageUrl);
    polify
      .wasm_triangulate_image(workingImage, this.polifyConfig)
      .then((resp: Response) => {
        resp.blob().then((blob) => {
          this.polyObjectUrl = URL.createObjectURL(blob);
        });
      })
      .catch((err: Error) => {
        console.error("Error while triangulating: " + err);
      });

    const polifySwitch = document.getElementById("polify-switch");
    polifySwitch.addEventListener("click", () => {
      if (polifySwitch.hasAttribute("checked")) {
        polifySwitch.removeAttribute("checked");

        maxVerticesSlider.setAttribute("disabled", "disabled");
        edgeThresholdSlider.setAttribute("disabled", "disabled");
        highThresholdSlider.setAttribute("disabled", "disabled");
        lowThresholdSlider.setAttribute("disabled", "disabled");

        displayedImage.src = this.imageObjectUrl;
      } else {
        polifySwitch.setAttribute("checked", "checked");

        maxVerticesSlider.removeAttribute("disabled");
        edgeThresholdSlider.removeAttribute("disabled");
        highThresholdSlider.removeAttribute("disabled");
        lowThresholdSlider.removeAttribute("disabled");

        displayedImage.src = this.polyObjectUrl;
      }
    });
  }
}

// @ts-ignore
bulmaSlider.attach();
new PolifyDemo();
