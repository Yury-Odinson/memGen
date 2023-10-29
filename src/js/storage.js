import { canvas, context } from "./constants.js"

export function getStorageImg() {
    const storageImage = new Image()
    storageImage.src = localStorage.getItem("image")
    canvas.width = storageImage.width
    canvas.height = storageImage.height
    context.drawImage(storageImage, 0, 0, canvas.width, canvas.height)
}

export const storageUpperText = localStorage.getItem("upperText")
export const storageLowerText = localStorage.getItem("lowerText")

export function setStorageText(key, value) {
    localStorage.setItem(key, value)
}
