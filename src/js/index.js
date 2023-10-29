import { buttonDownload, canvas, context, inputLoad } from "./constants.js"

// load image in the canvas
inputLoad.addEventListener("change", (e) => {
    const file = e.target.files[0]
    const image = new Image()
    image.src = URL.createObjectURL(file)

    image.onload = () => {
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
    image.onerror = () => {
        console.log("check")
    }
})
