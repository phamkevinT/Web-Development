// Button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Buttons that game generated
var gamePattern = [];

// Buttons that user clicked
var userClickedPattern = [];

// Keep track of whether game has started or not
var started = false;

// Game level
var level = 0;


// jQuery to detect if keyboard key has been pressed
$(document).keypress(function () {
  if(!started) {
    // If game has started, change title to "Level 0" and call nextSequence()
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


// jQuery to detect when any of the button are userClickedPattern
// Triggers handler function
$(".btn").click(function() {
  // Stores the ID of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  // Adds user's chosen color to array
  userClickedPattern.push(userChosenColour);

  // Plays the sound of button user pressed
  playSound(userChosenColour);

  // Animate button that user chose
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length -1);
});


// Checks user's button choice against game's button choice
function checkAnswer(currentLevel) {

  // Checks if user's recent answer is same as game's
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    // Check that they have finished all the button sequence before moving onto next level
    if(userClickedPattern.length === gamePattern.length) {

      // Progress to next level after 1000 milisecon delay
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {

    // Plays this sound when user chooses wrong button
    playSound("wrong");

    // Change body of website to "Game Over" and revert back to normal after delay
    $("body").addClass("game-over");

    // Change title to "Game Over, Press Any Key to Restart"
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    // Restart the game;
    startOver();
  }
}


// Determine the next button in the sequence
function nextSequence() {

  // Resets the user's button choice pattern for the next level
  userClickedPattern = [];

  // Increase level once everytime function is called
  level++;

  // Update the game level everytime function is called
  $("#level-title").text("Level " + level);

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


// Animates User Clicks
function animatePress(currentColour) {

  // jQuery to add the "pressed" styling to the button's class
  $("#" + currentColour).addClass("pressed");

  // Remove "pressed" class styling after 100 miliseconds
  setTimeout (function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


// Restart the game from the beginning
function startOver() {

  // Reset level to zero
  level = 0;
  // Reset game pattern to empty
  gamePattern = [];
  // Change game state to false
  started = false;
}
