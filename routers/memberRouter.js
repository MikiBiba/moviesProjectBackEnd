const express = require("express");
const router = express.Router();
const memberBLL = require("../BLL/memberBLL");

router.route("/").get(async (req, res) => {
  const members = await memberBLL.getAllMembers();
  return res.json(members);
});

router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await memberBLL.addNewMember(obj);
  return res.json(result);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const member = await memberBLL.getOneMember(id);
  return res.json(member);
});

router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const result = await memberBLL.deleteMember(id);
  return res.json(result);
});

module.exports = router;
