import { canvas, context, fontSize, inputLowerText, inputUpperText, selectFont } from "./constants.js"
import { renderImage } from "./index.js"

let xCoorUP = 400
let yCoorUP = 100
let xCoorLO = 400
let yCoorLO = 700
let fSize = 50
let fStyle = "Comic Sans MS"

function renderText(fontSize, fontStyle) {
    context.font = `bold ${fontSize}px ${fontStyle}`
    context.fontWidth = "900"
    context.strokeStyle = "black"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.lineWidth = 15
    context.strokeText(inputUpperText.value.toUpperCase(), xCoorUP, yCoorUP)
    context.fillText(inputUpperText.value.toUpperCase(), xCoorUP, yCoorUP)
    context.strokeText(inputLowerText.value.toUpperCase(), xCoorLO, yCoorLO)
    context.fillText(inputLowerText.value.toUpperCase(), xCoorLO, yCoorLO)
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
    console.log(fSize)
}

selectFont.addEventListener("change", () => {
    fStyle = selectFont.value
    renderImage()
    renderText(fSize, fStyle)
})

canvas.addEventListener("mousedown", () => {
    let mousedown = true
    canvas.addEventListener("mousemove", (event) => {
        if (mousedown) {
            let x = event.clientX - canvas.getBoundingClientRect().left
            let y = event.clientY - canvas.getBoundingClientRect().top
            determinePosition(x, y)
            renderImage()
            renderText(fSize, fStyle)
        }
    })
    canvas.addEventListener("mouseup", () => {
        mousedown = false
    })
})

// determine position upper or lower text. 
function determinePosition(positionX, positionY) {
    if (positionY <= 400) {
        return xCoorUP = positionX, yCoorUP = positionY
    } else {
        return xCoorLO = positionX, yCoorLO = positionY
    }
}
