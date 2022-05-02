const express = require("express");
const memberBLL = require("../BLL/memberBLL");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await memberBLL.getAllMembersWithSub();
  return res.json(data);
});

module.exports = router;
