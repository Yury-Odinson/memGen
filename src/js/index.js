import { buttonDownload, canvas, context, inputLoad } from "./constants.js"

const image = new Image()

// load image in the canvas
inputLoad.addEventListener("change", (e) => {
    const file = e.target.files[0]
    image.width = 800
    image.height = 800
    image.src = URL.createObjectURL(file)

    image.onload = () => {
        renderImage()
    }
    image.onerror = () => {
        console.log("check")
    }
})

export function renderImage() {
    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
}

buttonDownload.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png")
    const downloadLink = document.createElement("a")
    downloadLink.href = dataURL

    // link for download result image
    downloadLink.download = "my_mem.png"
    // simulation click event for download
    downloadLink.click()
})
