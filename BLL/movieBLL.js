const Movie = require("../models/movieSchema");


module.exports = {
  getAllMovies() {
    return new Promise((res, rej) =>
      Movie.find({}, (err, data) => (err ? rej(err) : res(data)))
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
