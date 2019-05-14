const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/colorado-campground"
);

const dataSeed = [
  {
    address: "Dummy Address",
    activities: "Dummy Activities",
  }
]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });