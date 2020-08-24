const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs'); // Tells how app to use EJS
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {

  var today = new Date();
  
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);


  // Render a file called "list" inside the "views" folder with extenstion ".ejs". "kindOfDay" is a KEY in the list.ejs
  res.render("list", {kindOfDay: day, newListItems: items});

});

// This is another test commit
// This is also another test commit


app.post("/", function(req, res) {
  var item = req.body.newItem; 
  
  items.push(item);

  // When a post a request is triggered, save newItem to item and redirect to the home route which goes to the app.get() above.
  res.redirect("/"); 

});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});