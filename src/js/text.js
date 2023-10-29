import { canvas, context, fontSize, inputLowerText, inputUpperText } from "./constants.js"
import { renderImage } from "./index.js"

let fSize = 50

function setText(fontSize, fontStyle) {
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
    setText(fSize, "Monsterrat")
})
inputLowerText.addEventListener("change", () => {
    renderImage()
    setText(fSize, "Monsterrat")
})

// change font size from the text
fontSize.onchange = () => {
    renderImage()
    setText(fSize, "Monsterrat")
    fSize = fontSize.value
}
