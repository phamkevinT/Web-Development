// First Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Gets a string to randomly choose dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // Gets the picture from the images folder. Ex. "images/dice1.png"

var image1 = document.querySelectorAll("img")[0]; // Gets the FIRST "img" tag. [0] indicates the first "img" tag.
image1.setAttribute("src", randomImageSource); // Sets the attribute of FIRST "img" tag to the randomImageSource


// Second Dice -- Shortened version of the one above

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Determining winner of dice rolls

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
