const Member = require("../models/memberSchema");


module.exports = {
  getAllMembers() {
    return new Promise((resolve, reject) => {
      Member.find({}, (error, members) => {
        if (error) reject(error);
        else resolve(members);
      });
    });
  },
  getOneMember(id) {
    return new Promise((resolve, reject) => {
      Member.findById(id, (error, member) => {
        if (error) reject(error);
        else resolve(member);
      });
    });
  },
  addNewMember(obj) {
    return new Promise((resolve, reject) => {
      const newMember = new Member({
        name: obj.name,
        email: obj.email,
        city: obj.city,
      });
      newMember.save((err) => {
        if (err) return reject(err);
        resolve(`The member added to db`);
      });
    });
  },
  deleteMember(id) {
    return new Promise((resolve, reject) => {
      Member.findByIdAndDelete(id, (error) => {
        if (error) reject(error);
        else resolve(Member.name + " Deleted");
      });
    });
  },
};
