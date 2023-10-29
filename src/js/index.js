import { buttonDownload, canvas, context, inputLoad, upperText, lowerText } from "./constants.js"
import { storageUpperText, storageLowerText } from "./storage.js"

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
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;

    // Устанавливаем имя файла для скачивания (можете указать любое имя)
    downloadLink.download = "my_image.png";
    // Симулируем клик на ссылку для начала загрузки
    downloadLink.click();
})

upperText.textContent = storageUpperText
lowerText.textContent = storageLowerText
