const express = require("express");
const moviesAndMembersBLL = require("../BLL/moviesAndMembers");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await moviesAndMembersBLL.getAllMoviesWithSub();
  return res.json(data);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const data = await movieBLL.getOneMovie(id);
  return res.json(data);
});

module.exports = router;
