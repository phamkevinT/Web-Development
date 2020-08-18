const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=a956a4d31c0ebed91fd0619bdbd3c6c7&units=imperial";
  https.get(url, function(response) {
    console.log(response.statusCode);


    response.on("data", function(data) {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      console.log(temp);

      const description = weatherData.weather[0].description;
      console.log(description);

      // Turning Object into a String
          // const object = {
          //   name: "Kevin",
          //   favFood: "Ramen"
          // }
          // console.log(JSON.stringify(object));

    })
  })



  res.send("Server is up and running.");
})






app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
