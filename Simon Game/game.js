var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


// jQuery to detect when any of the button are userClickedPattern
// Triggers handler function
$(".btn").click(function() {
  // Stores the ID of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  // Adds user's chosen color to array
  userClickedPattern.push(userChosenColour);

  // Plays the sound of button user pressed
  playSound("userChosenColour");
});


// Determine the next button in the sequence
function nextSequence() {

  // Get a number from 1 to 4
  var randomNumber = Math.floor(Math.random() * 4);

  // Get a color based on the random number
  var randomChosenColour = buttonColours[randomNumber];

  // Add Random Color to Array
  gamePattern.push(randomChosenColour);

  // Select button with same ID has randomChosenColour and make button flash
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // Plays sound of next button in sequence
  playSound(randomChosenColour);
}


// Function that plays the sound of a button
function playSound(name) {

  // Play sound for the button selected
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
