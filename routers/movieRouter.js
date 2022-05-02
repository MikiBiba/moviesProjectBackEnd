const express = require("express");
const router = express.Router();
const movieBLL = require("../BLL/movieBLL");

router.route("/").get(async (req, res) => {
  const data = await movieBLL.getAllMovies();
  return res.json(data);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const data = await movieBLL.getOneMovie(id);
  return res.json(data);
});

router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const data = await movieBLL.updateMovie(id, obj);
  return res.json(data);
});

router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await movieBLL.addNewMovie(obj);
  return res.json(result);
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const data = await movieBLL.deleteMovie(id);
  return res.json(data);
});

module.exports = router;
