const Subscription = require("../models/subscriptionSchema");

module.exports = {
  getAllSubs() {
    return new Promise((res, rej) => {
      Subscription.find({}, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
  },
};
