import { fontsizeLo, fontsizeUp, inputLowerText, inputUpperText, lowerText, upperText } from "./constants.js"

// input text 
inputUpperText.addEventListener("input", () => {
    upperText.textContent = inputUpperText.value.toUpperCase()
    setCursor(upperText)
})

inputLowerText.addEventListener("input", () => {
    lowerText.textContent = inputLowerText.value.toUpperCase()
    setCursor(lowerText)
})

// change cursor style (for the future to move text)
function setCursor(target) {
    if (target.textContent !== "") {
        target.parentElement.style.cursor = "move"
    } else {
        target.parentElement.style.cursor = "default"
    }
}

// change font size from the text
// value - font size, target - upper or lower text
function setFontSize(value, target) {
    return target.style.fontSize = `${value}px`
}

fontsizeUp.onchange = () => setFontSize(fontsizeUp.value, upperText)
fontsizeLo.onchange = () => setFontSize(fontsizeLo.value, lowerText)
