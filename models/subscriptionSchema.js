const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "subscriptions",
  mongoose.Schema({
    memberId: String,
    movieId: String,
    date: String,
  })
);
