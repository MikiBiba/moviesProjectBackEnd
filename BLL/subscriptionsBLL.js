const Subscription = require("../models/subscriptionSchema");

module.exports = {
  getAllSubs() {
    return new Promise((resolve, reject) => {
      Subscription.find({}, (error, subscriptions) => {
        if (error) reject(error);
        else resolve(subscriptions);
      });
    });
  },
};
