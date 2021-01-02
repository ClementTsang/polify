class PolifyDemo {
    isUsingPaste = true;

    constructor () {
        this.isUsingPaste = true;

        let pasteImage = document.getElementById("paste-image")
        let uploadImage = document.getElementById("upload-image")

        let pasteImageAction = document.getElementById("paste-image-action")
        let uploadImageAction = document.getElementById("upload-image-action")

        pasteImage.addEventListener("click", () => {
            pasteImage.classList.add("is-active");
            uploadImage.classList.remove("is-active");

            console.log("!!!")
            
            uploadImageAction.classList.add("is-hidden");
            pasteImageAction.classList.remove("is-hidden");
        })

        uploadImage.addEventListener("click", () => {
            uploadImage.classList.add("is-active");
            pasteImage.classList.remove("is-active");

            pasteImageAction.classList.add("is-hidden");
            uploadImageAction.classList.remove("is-hidden");
        })
    }
}

bulmaSlider.attach();
new PolifyDemo()