const bigFiveButton = document.querySelectorAll(".big-five-button").forEach(button => {
    button.addEventListener("click", bigFiveSpotted )
})

function bigFiveSpotted(animal) {
    console.log("works")
    // console.log(document.getElementsByTagName("button").innerText)
    console.log(animal.getElementsByClassName(".big-five-button").innerText)
    // console.log(document.getElementsById("lion").innerText)
    // console.log(animal.innerText)
}
