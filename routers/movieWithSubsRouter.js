const express = require("express");
const movieBLL = require("../BLL/movieBLL");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await movieBLL.getAllMoviesWithSub();
  return res.json(data);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const data = await movieBLL.getOneMovie(id);
  return res.json(data);
});

module.exports = router;
