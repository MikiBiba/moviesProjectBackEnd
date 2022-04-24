const express = require("express");
const router = express.Router();
const movieBLL = require("../BLL/movieBLL");

router.route("/").get(async (req, res) => {
  const data = await movieBLL.getAllMovies();
  return res.json(data);
});

module.exports = router;
