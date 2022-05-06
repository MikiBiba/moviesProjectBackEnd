const express = require("express");
const moviesAndMemberBLL = require("../BLL/moviesAndMembers");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await moviesAndMemberBLL.getAllMembersWithSub();
  return res.json(data);
});

module.exports = router;
