/**
      document.querySelector("button").addEventListener("click", handleClick); // Notice that its not "handleClick()" as this is an instant function call
      function handleClick() {
        alert("I got clicked!");
      }
**/

// The number of elements with CLASS 'drum'
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through all element when CLASS 'drum'
for (var i = 0; i < numberOfDrumButtons; i++) {

  // Anonymous Functions that replaces the one above.
  // This adds event listner to each '.drum' CLASS in order, hence the for loop
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");

    // What to do when click detected.
  });
}
