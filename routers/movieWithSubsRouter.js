const express = require("express");
const jwt = require("jsonwebtoken")
const moviesAndMembersBLL = require("../BLL/moviesAndMembers");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401);
  const ACCESS_SERCRET_TOKEN = "someTokenKey";

  jwt.verify(token, ACCESS_SERCRET_TOKEN, async (err, data) => {
    if (err) return res.status(500);
    data = await moviesAndMembersBLL.getAllMoviesWithSub();
    return res.json(data);
  })
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const data = await movieBLL.getOneMovie(id);
  return res.json(data);
});

module.exports = router;
