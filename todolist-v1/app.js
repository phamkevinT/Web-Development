const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Array of items
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs'); // Tells our app to use EJS
app.use(bodyParser.urlencoded({extended: true})); // Needed to use Body Parser


// Our GET function for home route
app.get("/", function (req, res) {

  let today = new Date();
  
  // 'Styling' to be added to our today variable
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);


  // Render a file called "list" inside the "views" folder with extenstion ".ejs". "kindOfDay" and "newListItems" is a KEY in the list.ejs
  res.render("list", {kindOfDay: day, newListItems: items});

});


// Our POST function for home route
app.post("/", function(req, res) {

  // Get the user's input from the form in list.ejs
  let item = req.body.newItem; 
  
  // Adds the input to the array
  items.push(item);

  // When a post a request is triggered, save newItem to item and redirect to the home route which goes to the app.get() above.
  res.redirect("/"); 

});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});