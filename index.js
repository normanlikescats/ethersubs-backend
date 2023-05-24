const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const checkJwt = auth({
  audience: process.env.DB_AUDIENCE,
  issuerBaseURL: process.env.DB_ISSUER_BASEURL,
  tokenSigningAlg: 'RS256'
});

const db = require("./db/models/index");

// import models
const { users, creators, posts, transactions, comments, follows, thresholds } = db;

// Require Controllers
const UserController = require("./Controllers/UserController");
const CreatorController = require("./Controllers/CreatorController");
const PostController = require("./Controllers/PostController");
const TransactionController = require("./Controllers/TransactionController");
const CommentController = require("./Controllers/CommentController");
const FollowController = require("./Controllers/FollowController");
const ThresholdController = require("./Controllers/ThresholdController");

// Require Routers
const UserRouter = require("./Routers/UserRouter");
const CreatorRouter = require("./Routers/CreatorRouter");
const PostRouter = require("./Routers/PostRouter");
const TransactionRouter = require("./Routers/TransactionRouter");
const CommentRouter = require("./Routers/CommentRouter");
const FollowRouter = require("./Routers/FollowRouter");
const ThresholdRouter = require("./Routers/ThresholdRouter");

// Define Controllers
const userController = new UserController(users);
const creatorController = new CreatorController(creators, posts, comments, follows, transactions, users);
const postController = new PostController(posts, comments, creators);
const transactionController = new TransactionController(transactions, creators, users);
const commentController = new CommentController(comments, users);
const followController = new FollowController(follows, creators);
const thresholdController = new ThresholdController(thresholds);

// Define Routers
const userRouter = new UserRouter(userController, express, checkJwt).route();
const creatorRouter = new CreatorRouter(creatorController, express, checkJwt).route();
const postRouter = new PostRouter(postController, express, checkJwt).route();
const transactionRouter = new TransactionRouter(transactionController, express, checkJwt).route();
const commentRouter = new CommentRouter(commentController, express, checkJwt).route();
const followRouter = new FollowRouter(followController, express, checkJwt).route();
const thresholdRouter = new ThresholdRouter(thresholdController, express, checkJwt).route();

app.use("/users", userRouter);
app.use("/creators", creatorRouter);
app.use("/posts", postRouter);
app.use("/transactions", transactionRouter);
app.use("/comments", commentRouter);
app.use("/follows", followRouter);
app.use("/thresholds", thresholdRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
