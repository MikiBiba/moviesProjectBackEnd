const User = require("../models/userSchema");

const getAllUsers = () => {
  return new Promise((res, rej) => {
    User.find({}, (err, users) => {
      if (err) {
        rej(err);
      }
      res(users);
    });
  });
};

const getAllMovies = () => {
  return new Promise((res, rej) => {
    User.find({}, (err, users) => {
      if (err) {
        rej(err);
      }
      res(users);
    });
  });
};

module.exports = { getAllUsers, getAllMovies };
