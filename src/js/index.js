import { canvas, context, fontsizeLo, fontsizeUp, inputLoad, inputLowerText, inputUpperText, lowerText, upperText } from "./constants.js"

// load image in the canvas
inputLoad.addEventListener("change", (e) => {
    const file = e.target.files[0]
    console.log(URL.createObjectURL(file))
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

// input text 
inputUpperText.addEventListener("input", () => {
    upperText.textContent = inputUpperText.value.toUpperCase()
})

inputLowerText.addEventListener("input", () => {
    lowerText.textContent = inputLowerText.value.toUpperCase()
})

// change font size from the text
// value - font size, target - upper or lower text
function setFontSize(value, target) {
    return target.style.fontSize = `${value}px`
}

fontsizeUp.addEventListener("change", () => {
    setFontSize(fontsizeUp.value, upperText)
})

fontsizeLo.addEventListener("change", () => {
    setFontSize(fontsizeLo.value, lowerText)
})
