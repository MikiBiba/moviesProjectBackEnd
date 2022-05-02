const Movie = require("../models/movieSchema");
const memberBLL = require("./memberBLL");

module.exports = {
  getAllMovies() {
    return new Promise((res, rej) =>
      Movie.find({}, (err, data) => (err ? rej(err) : res(data)))
    );
  },
  async getAllMoviesWithSub() {
    return Promise.all(
      (
        await Movie.aggregate([
          {
            $lookup: {
              from: "subscriptions",
              localField: "_id",
              foreignField: "movieId",
              as: "subscriptions",
            },
          },
        ])
      ).map(async (movie) => ({
        ...movie,
        subscriptions: await Promise.all(
          movie.subscriptions.map(async (subscription) => ({
            ...subscription,
            member: await memberBLL.getOneMember(subscription.memberId),
          }))
        ),
      }))
    );
  },
  addNewMovie(obj) {
    return new Promise((resolve, reject) => {
      const newMovie = new Movie({
        name: obj.name,
        genres: obj.genres,
        imageUrl: obj.imageUrl,
        yearPremiered: obj.yearPremiered,
      });
      newMovie.save((err) => {
        if (err) return reject(err);
        resolve(`${newMovie.name} added to db`);
      });
    });
  },

  getOneMovie(id) {
    return new Promise((resolve, reject) => {
      Movie.findById(id, (error, movie) => {
        if (error) reject(error);
        else resolve(movie);
      });
    });
  },
  updateMovie(id, obj) {
    return new Promise((resolve, reject) => {
      Movie.findByIdAndUpdate(id, obj, (error) => {
        if (error) reject(error);
        else resolve(`${Movie.name} updated!`);
      });
    });
  },
  deleteMovie(id) {
    return new Promise((resolve, reject) => {
      Movie.findByIdAndDelete(id, (error) => {
        if (error) reject(error);
        else resolve(Movie.name + " Deleted");
      });
    });
  },
};
