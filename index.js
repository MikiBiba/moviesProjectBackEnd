const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const movieRouter = require("./routers/movieRouter");
const subscriptionRouter = require("./routers/subscriptionsRouter");

const app = express();
const port = 8000;

require("./configs/db");

app.use(cors());
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/subscriptions", subscriptionRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
