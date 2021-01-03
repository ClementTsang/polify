class PolifyDemo {
    isUsingPaste = true;

    constructor () {
        this.isUsingPaste = true;

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
        
        let imageObjectUrl = null;
        const uploadImageActionInput = document.querySelector("#upload-image-action input[type=file]");
        uploadImageActionInput.onchange = () => {
            if (uploadImageActionInput.files.length > 0) {
                const file = uploadImageActionInput.files[0];
                document.querySelector("#upload-image-action .file-name").textContent = file.name;
                
                if (imageObjectUrl !== null ){
                    URL.revokeObjectURL(imageObjectUrl)
                }
                imageObjectUrl = window.URL.createObjectURL(file);
                document.getElementById("displayed-image").setAttribute("src", imageObjectUrl)

                // Call polify here...
            }
        }

        const pasteImageButton = document.querySelector("#paste-image-action button");
        const pasteImageInput = document.querySelector("#paste-image-action input");
        pasteImageButton.addEventListener("click", () => {
            if (imageObjectUrl !== null ){
                URL.revokeObjectURL(imageObjectUrl)
            }
            document.getElementById("displayed-image").setAttribute("src", pasteImageInput.value)
        });
        pasteImageInput.addEventListener("keyup", event => {
            if (event.keyCode === 13) {
                event.preventDefault();
                if (imageObjectUrl !== null ){
                    URL.revokeObjectURL(imageObjectUrl)
                }
                document.getElementById("displayed-image").setAttribute("src", pasteImageInput.value)
            }
        });


        const maxVerticesSlider = document.getElementById("max-vertices")
        const edgeThresholdSlider = document.getElementById("edge-threshold")
        const highThresholdSlider = document.getElementById("high-threshold")
        const lowThresholdSlider = document.getElementById("low-threshold")

        maxVerticesSlider.onchange = () => {
            const newValue = maxVerticesSlider.value.parseInt();
        }

        edgeThresholdSlider.onchange = () => {
            const newValue = edgeThresholdSlider.value.parseFloat();
        }

        highThresholdSlider.onchange = () => {
            const newValue = highThresholdSlider.value.parseFloat();
        }

        lowThresholdSlider.onchange = () => {
            const newValue = lowThresholdSlider.value.parseFloat();
        }

        const polifySwitch = document.getElementById("polify-switch");
        polifySwitch.addEventListener("click", () => {
            if (polifySwitch.hasAttribute("checked")) {
                polifySwitch.removeAttribute("checked");

                maxVerticesSlider.setAttribute("disabled", "disabled");
                edgeThresholdSlider.setAttribute("disabled", "disabled");
                highThresholdSlider.setAttribute("disabled", "disabled");
                lowThresholdSlider.setAttribute("disabled", "disabled");
            } else {
                polifySwitch.setAttribute("checked", "checked");

                maxVerticesSlider.removeAttribute("disabled");
                edgeThresholdSlider.removeAttribute("disabled");
                highThresholdSlider.removeAttribute("disabled");
                lowThresholdSlider.removeAttribute("disabled");
            }
        });

    }
}

bulmaSlider.attach();
new PolifyDemo()