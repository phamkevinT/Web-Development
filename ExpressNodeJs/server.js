//jshint esversion:6

const express = require("express");

const app = express();

// What should happen when browser gets in touch with server and makes GET request
app.get("/", function(request, response) {
  response.send("<h1>Hello, world!</h1>");
});

// Listen to HTTP request on server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
