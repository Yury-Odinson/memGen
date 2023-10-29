import { canvas, context } from "./constants.js"

const currentImage = localStorage.getItem("image")

export function getStorageImg() {
    const storageImage = new Image()
    storageImage.src = currentImage
    canvas.width = storageImage.width
    canvas.height = storageImage.height
    context.drawImage(storageImage, 0, 0, canvas.width, canvas.height)
}
