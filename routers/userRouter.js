const express = require("express");
const router = express.Router();
const userBLL = require("../BLL/userBLL");

router.route("/").get(async (req, res) => {
  const data = await userBLL.getAllUsers();
  return res.json(data);
});

module.exports = router;
