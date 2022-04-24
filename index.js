const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const movieRouter = require("./routers/movieRouter");
const subscriptionRouter = require("./routers/subscriptionsRouter");
const moviesWithSubscriptionsRouter = require("./routers/moviesWithSubscriptionsRouter");

const app = express();
const port = 8000;

require("./configs/db");

app.use(cors());
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/moviesWithSubscriptions", moviesWithSubscriptionsRouter);
app.use("/subscriptions", subscriptionRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
