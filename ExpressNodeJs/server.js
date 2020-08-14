//jshint esversion:6

const express = require("express");

const app = express();

// What should happen when browser gets in touch with server and makes GET request at Home Page
app.get("/", function(request, response) {
  response.send("<h1>Hello, world!</h1>");
});

// Contact Page GET Request
app.get("/contact", function(req, res) {
  res.send("Contact me at: phambamkevin@gmail.com");
});

// About Page GET Request
app.get("/about", function(req, res) {
  res.send("This is a bio page about me.");
});

// Listen to HTTP request on server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
