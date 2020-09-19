const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name (For this project, it is called fruitsDB)
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {
  useUnifiedTopology: true
});

// Use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Finding the database
  findDocuments(db, function() {
    client.close();
  });
});


const insertDocuments = function (db, callback) {
  // Get the documents collection (For this project, our collection is named 'fruits')
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}


const findDocuments = function(db, callback) {
  // Get the documents collection (from fruitsDB get the fruits collection)
  const collection = db.collection('fruits');
  // Find some documents (find some 'fruits)
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    // Log all fruits in the DB
    console.log(fruits)
    callback(fruits);
  });
}