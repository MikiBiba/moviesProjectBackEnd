const Member = require("../models/memberSchema");
const Movie = require("../models/movieSchema");
const movieBLL = require("../BLL/movieBLL");
const memberBLL = require("../BLL/memberBLL");

module.exports = {
  async getAllMembersWithSub() {
    return Promise.all(
      (
        await Member.aggregate([
          {
            $lookup: {
              from: "subscriptions",
              localField: "_id",
              foreignField: "memberId",
              as: "subscriptions",
            },
          },
        ])
      ).map(async (member) => ({
        ...member,
        subscriptions: await Promise.all(
          member.subscriptions.map(async (subscription) => ({
            ...subscription,
            movie: await movieBLL.getOneMovie(subscription.movieId),
          }))
        ),
      }))
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
};
