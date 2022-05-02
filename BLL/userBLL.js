const User = require("../models/userSchema");

module.exports = {
  getAllUsers() {
    return new Promise((resolve, reject) => {
      User.find({}, (error, users) => {
        if (error) reject(err);
        else resolve(users);
      });
    });
  },
};
