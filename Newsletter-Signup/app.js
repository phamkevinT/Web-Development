const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

// Have to use this line in order for our static files to be used by server
app.use(express.static("public"));
// Have to use this line in order to use body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})


app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  // Turn the data/info above to a JSON object
  const jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/ad76f36bac";
  const options = {
    method: "POST",
    auth: "kevin1:7f3725f2e5a1236b45ab576f6f78b07c-us17"
  }

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

// Running the server on localhost port 3000
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
