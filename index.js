
var crash = new Audio("./sounds/crash.mp3")
var kickBass = new Audio("./sounds/kick-bass.mp3")
var snare = new Audio("./sounds/snare.mp3")
var tom1 = new Audio("./sounds/tom-1.mp3")
var tom2 = new Audio("./sounds/tom-2.mp3")
var tom3 = new Audio("./sounds/tom-3.mp3")
var tom4 = new Audio("./sounds/tom-4.mp3")


var numberDrum = document.querySelectorAll(".drum").length


for (var i = 0; i < numberDrum; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;  // identificador do que esta acontecendo no HTML   
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML);
    });

}

// DETECT TE KEYBOARD PRESS
var currentKey = document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key){

    switch (key) {
        case "w": tom1.play()
            break;
        case "a": tom2.play()
            break;
        case "s": tom3.play()
            break;
        case "d": tom4.play()
            break;
        case "j": crash.play()
            break;
        case "k": kickBass.play()
            break;
        case "l": snare.play()
            break
        default: console.log(key)
            break;
    }
}

function buttonAnimation(currentKey){
    activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}