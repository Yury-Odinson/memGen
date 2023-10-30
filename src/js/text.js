import { canvas, context, fontSize, inputLowerText, inputUpperText, selectFont } from "./constants.js"
import { renderImage } from "./index.js"

let fSize = 50
let fStyle = "Comic Sans MS"

function renderText(fontSize, fontStyle) {
    context.font = `bold ${fontSize}px ${fontStyle}`
    context.fontWidth = "900"
    context.strokeStyle = "black"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.lineWidth = 10
    context.strokeText(inputUpperText.value.toUpperCase(), canvas.width / 2, 100)
    context.fillText(inputUpperText.value.toUpperCase(), canvas.width / 2, 100)
    context.strokeText(inputLowerText.value.toUpperCase(), canvas.width / 2, 730)
    context.fillText(inputLowerText.value.toUpperCase(), canvas.width / 2, 730)
}

// input text 
inputUpperText.addEventListener("change", () => {
    renderImage()
    renderText(fSize, fStyle)
})
inputLowerText.addEventListener("change", () => {
    renderImage()
    renderText(fSize, fStyle)
})

// change font size from the text
fontSize.onchange = () => {
    renderImage()
    renderText(fSize, fStyle)
    fSize = fontSize.value
}

selectFont.addEventListener("change", () => {
    fStyle = selectFont.value
    renderImage()
    renderText(fSize, fStyle)
})
