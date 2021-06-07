const bigFiveButton = document.querySelectorAll(".big-five-button")
const removeFirstItemButton = document.getElementById("remove-first-item-button")
const removeAllButton = document.getElementById("remove-all-button")

document.querySelectorAll(".big-five-button").forEach(button => button.addEventListener("click", () => bigFiveSpotted(button.innerHTML)))
removeFirstItemButton.addEventListener("click", removeFirstItem)
removeAllButton.addEventListener("click", removeAll)


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

function removeAll(){
    spottedAnimalsList.innerHTML = ""
}
