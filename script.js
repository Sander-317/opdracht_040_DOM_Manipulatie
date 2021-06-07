const bigFiveButton = document.querySelectorAll(".big-five-button")

// .forEach(button => {
//     button.addEventListener("click", bigFiveSpotted(button) )
// })

document.querySelectorAll(".big-five-button").forEach(button => button.addEventListener("click", () => bigFiveSpotted(button.innerHTML)))

function bigFiveSpotted(animal) {
    console.log("works")
    // console.log(document.getElementsByTagName("button").innerText)
    // console.log(document.getElementsByClassName(".big-five-button").innerHTML)
    // console.log(animal.innerHTML)
    console.log(animal)
}
