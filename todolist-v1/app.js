const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs'); // Tells how app to use EJS


app.get("/", function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thurday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: Current day is equal to " + currentDay);
  }

  // Render a file called "list" inside the "views" folder with extenstion ".ejs". "kindOfDay" is a KEY in the list.ejs
  res.render("list", {
    kindOfDay: day
  });

});




app.listen(3000, function () {
  console.log("Server started on port 3000");
});