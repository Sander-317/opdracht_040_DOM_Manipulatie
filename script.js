const bigFiveButton = document.querySelectorAll(".big-five-button")

document.querySelectorAll(".big-five-button").forEach(button => button.addEventListener("click", () => bigFiveSpotted(button.innerHTML)))

const newLi = document.createElement("li")

function bigFiveSpotted(animal) {
    console.log(animal)
    let newLi = document.createElement("li")
    newLi.innerHTML = `${animal}`
    console.log(newLi)
}
