const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const movieRouter = require("./routers/movieRouter");
const subscriptionRouter = require("./routers/subscriptionRouter");
const movieWithSubsRouter = require("./routers/movieWithSubsRouter");
const memberRouter = require("./routers/memberRouter");
const memberWithSubRouter = require("./routers/memberWithSub");
const userRouter = require("./routers/userRouter");

const app = express();
const port = 8000;

require("./configs/db");

app.use(bodyParser.json());
app.use(cors({}));
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/members", memberRouter);
app.use("/users", userRouter);
app.use("/moviesWithSubs", movieWithSubsRouter);
app.use("/membersWithSubs", memberWithSubRouter);
app.use("/subscriptions", subscriptionRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
