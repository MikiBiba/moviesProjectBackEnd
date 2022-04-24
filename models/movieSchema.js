const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "movies",
  mongoose.Schema({
    name: String,
    yearPremiered: String,
    geners: [String],
    imageUrl: String,
  })
);
