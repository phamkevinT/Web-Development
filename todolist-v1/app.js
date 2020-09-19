const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

// Array of items
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs'); // Tells our app to use EJS
app.use(bodyParser.urlencoded({
  extended: true
})); // Needed to use Body Parser
app.use(express.static("public"));

// Our GET function for home route
app.get("/", function (req, res) {

  let day = date.getDate();

  // Render a file called "list" inside the "views" folder with extenstion ".ejs". "kindOfDay" and "newListItems" is a KEY in the list.ejs
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});


// Our POST function for home route
app.post("/", function (req, res) {

  // Get the user's input from the form in list.ejs
  let item = req.body.newItem;

  // Add to work list
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    // Adds the input to the array
    items.push(item);
    // When a post a request is triggered, save newItem to item and redirect to the home route which goes to the app.get() above.
    res.redirect("/");
  }

});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});


app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});