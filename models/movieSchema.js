const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "movies",
  mongoose.Schema({
    name: String,
    yearPremiered: String,
    genres: [String],
    imageUrl: String,
  })
);
