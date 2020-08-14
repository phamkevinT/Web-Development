//jshint esversion:6

const express = require("express");

const app = express();

// Listen to HTTP request on server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
