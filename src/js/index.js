import { buttonDownload, canvas, context, inputLoad, upperText, inputUpperText, lowerText, inputLowerText } from "./constants.js"
import { getStorageImg, storageUpperText, storageLowerText } from "./storage.js"

// load image from localStorage
getStorageImg()

// load image in the canvas
inputLoad.addEventListener("change", (e) => {
    const file = e.target.files[0]
    const image = new Image()
    image.src = URL.createObjectURL(file)

    image.onload = () => {
        localStorage.setItem("image", image.src)
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
    image.onerror = () => {
        console.log("check")
    }
})

buttonDownload.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png")
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;

    // Устанавливаем имя файла для скачивания (можете указать любое имя)
    downloadLink.download = "my_image.png";
    // Симулируем клик на ссылку для начала загрузки
    downloadLink.click();
})

inputUpperText.value = storageUpperText.toLocaleLowerCase()
upperText.textContent = storageUpperText
inputLowerText.value = storageLowerText.toLocaleLowerCase()
lowerText.textContent = storageLowerText
