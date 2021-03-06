/**
      // "Named Function"
      document.querySelector("button").addEventListener("click", handleClick); // Notice that its not "handleClick()" as this is an instant function call
      function handleClick() {
        alert("I got clicked!");
      }
**/

// The number of elements with CLASS 'drum'
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through all element when CLASS 'drum'
for (var i = 0; i < numberOfDrumButtons; i++) {

  // "Anonymous Function" that replaces the one above.
  // This adds event listner to each '.drum' CLASS in order, hence the for loop
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // The letter that was pressed

    makeSound(buttonInnerHTML); // Passes the letter that was pressed to the function

    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting Keyboard Press
// Add a listener to the whole page/doc
// On key down press, get the key that was pressed and pass to function makeSound
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  // Switch Statement
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickBase = new Audio('sounds/kick-bass.mp3');
      kickBase.play();
      break;

    default: console.log(this.innerHTML);

  }
}

// Add animation to pressed button
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); // Gets the key and add a "." to use as a class element from html

  activeButton.classList.add("pressed"); // When button is active, apply the "pressed" css styling to the class
  setTimeout(function() { activeButton.classList.remove("pressed"); }, 100); // 100 = time-out time
}
