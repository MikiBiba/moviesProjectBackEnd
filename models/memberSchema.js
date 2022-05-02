const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "members",
  mongoose.Schema({
    name: String,
    email: String,
    city: String,
  })
);
