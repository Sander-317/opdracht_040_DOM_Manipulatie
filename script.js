const bigFiveButton = document.querySelectorAll(".big-five-button")
const RemoveFirstItemButton = document.getElementById("remove-first-item-button")

document.querySelectorAll(".big-five-button").forEach(button => button.addEventListener("click", () => bigFiveSpotted(button.innerHTML)))
RemoveFirstItemButton.addEventListener("click", removeFirstItem)

// const newLi = document.createElement("li")
const spottedAnimalsList = document.getElementById("spotted-animals-list")


function bigFiveSpotted(animal) {
    console.log(animal)
    let newLi = document.createElement("li")
    newLi.innerHTML = `${animal}`
    console.log(newLi)
    spottedAnimalsList.appendChild(newLi)
}

function removeFirstItem() {
   spottedAnimalsList.removeChild(spottedAnimalsList.childNodes[0])
}