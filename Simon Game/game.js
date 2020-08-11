var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern= [];

function nextSequence() {
  // Get a number from 1 to 4
  var randomNumber = Math.floor(Math.random() * 4);

  // Get a color based on the random number
  var randomChosenColour = buttonColours[randomNumber];

  // Add Random Color to Array
  gamePattern.push(randomChosenColour);

  // Select button with same ID has randomChosenColour and make button flash
  $("#" + randomChosenColour").fadeIn(100).fadeOut(100).fadeIn(100);

  // Play sound for the button selected
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
