const express = require("express");
const router = express.Router();
const subscriptionBLL = require("../BLL/subscriptionsBLL");

router.route("/").get(async (req, res) => {
  const data = await subscriptionBLL.getAllSubs();
  return res.json(data);
});

module.exports = router;
