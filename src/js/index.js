const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const inputLoad = document.getElementById("inputLoad")

inputLoad.addEventListener("change", (e) => {
    const file = e.target.files[0]
    console.log(URL.createObjectURL(file))
    const image = new Image()
    image.src = URL.createObjectURL(file)

    image.onload = () => {
        image.width = canvas.width
        image.height = canvas.height
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
    image.onerror = () => {
        console.log("check")
    }
})
