const Movie = require("../models/movieSchema");

module.exports = {
  getAllMovies() {
    return new Promise((res, rej) => {
      Movie.find({}, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
  },
  getAllMoviesWithSubscriptions() {
    return Movie.aggregate([
      {
        $lookup: {
          from: "subscriptions",
          localField: "_id",
          foreignField: "movieId",
          as: "subscriptions",
        },
      },
    ]);
  },
};
