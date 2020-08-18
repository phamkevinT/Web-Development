const express = require("express");
const https = require("htpps");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=a956a4d31c0ebed91fd0619bdbd3c6c7&units=imperial";
  https.get(url, function(response) {
    console.log(response);
  })



  res.send("Server is up and running.");
})






app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
