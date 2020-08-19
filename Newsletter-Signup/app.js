const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// Have to use this line in order for our static files to be used by server
app.use(express.static("public"));
// Have to use this line in order to use body-parser
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})


app.post("/", function(req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);

});

// Running the server on localhost port 3000
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
