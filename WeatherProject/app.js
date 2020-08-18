const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); // Used to read HTML

// This line is needed to use express module
const app = express();

// This line is needed to use the body-parser module
app.use(bodyParser.urlencoded({extended: true}));


// Used to get the index.html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {

  // The City
  // 'cityName' is the name of HTML input in index.html
  const query = req.body.cityName;

  // The API Key generated from OpenWeatherMap
  const appKey = "a956a4d31c0ebed91fd0619bdbd3c6c7";

  // The temperature unit in Fahrenheit per OpenWeatherMap
  const tempUnit = "imperial";

  // URL is from Postman using the OpenWeatherMap API with keys= q, appid, units
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "&units=" + tempUnit;

  // Get the information from the API URL in the form of a JSON object
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);

      // Gets the temperature from JSON
      // Use JSON Viewer Extention frm Google Chrome to get the path
      const temp = weatherData.main.temp;

      // Gets the weather description from JSON
      const weatherDescription = weatherData.weather[0].description;

      // Gets the image icon corresponding to the weather from JSON
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit.</h1>");
      res.write("<h2>The weather is currently " + weatherDescription + ".</h2>");
      res.write("<img src=" + imageURL + ">");
      res.send();

      // Turning Object into a String
          // const object = {
          //   name: "Kevin",
          //   favFood: "Ramen"
          // }
          // console.log(JSON.stringify(object));

    })
  })
});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
