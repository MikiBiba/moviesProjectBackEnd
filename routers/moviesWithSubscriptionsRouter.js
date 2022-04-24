const express = require("express");
const movieBLL = require("../BLL/movieBLL");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await movieBLL.getAllMoviesWithSubscriptions();
  return res.json(data);
});

module.exports = router;
