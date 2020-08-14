const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // Write this line of code whenever using body-parser


// Home page aka index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html"); // __dirname gets us the full path
});


app.post("/", function(req, res) {

  var num1 = Number(req.body.num1); // Have to turn into a Number to prevent appending as string
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});


// bmiCalculator page
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});


// Running the server locally on localhost:3000
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
