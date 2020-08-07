/**
      document.querySelector("button").addEventListener("click", handleClick); // Notice that its not "handleClick()" as this is an instant function call
      function handleClick() {
        alert("I got clicked!");
      }
**/

// Anonymous Functions that replaces the one above.

document.querySelector("button").addEventListener("click", function() {
  alert("I got clicked!");
});
