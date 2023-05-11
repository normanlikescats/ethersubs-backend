const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*const checkJwt = auth({
  audience: process.env.DB_AUDIENCE,
  issuerBaseURL: process.env.DB_ISSUER_BASEURL,
});*/

const db = require("./db/models/index");

// import models
const { users, creators, posts, transactions, comments, follows } = db;

// Require Controllers
const UserController = require("./Controllers/UserController");
const CreatorController = require("./Controllers/CreatorController");
const PostController = require("./Controllers/PostController");
const TransactionController = require("./Controllers/TransactionController");
const CommentController = require("./Controllers/CommentController");
const FollowController = require("./Controllers/FollowController");

// Require Routers
const UserRouter = require("./Routers/UserRouter");
const CreatorRouter = require("./Routers/CreatorRouter");
const PostRouter = require("./Routers/PostRouter");
const TransactionRouter = require("./Routers/TransactionRouter");
const CommentRouter = require("./Routers/CommentRouter");
const FollowRouter = require("./Routers/FollowRouter");

// Define Controllers
const userController = new UserController(users);
const creatorController = new CreatorController(creators, posts, comments, follows, transactions, users);
const postController = new PostController(posts, comments);
const transactionController = new TransactionController(transactions);
const commentController = new CommentController(comments);
const followController = new FollowController(follows);

// Define Routers
const userRouter = new UserRouter(userController, express).route();
const creatorRouter = new CreatorRouter(creatorController, express).route();
const postRouter = new PostRouter(postController, express).route();
const transactionRouter = new TransactionRouter(transactionController, express).route();
const commentRouter = new CommentRouter(commentController, express).route();
const followRouter = new FollowRouter(followController, express).route();

app.use("/users", userRouter);
app.use("/creators", creatorRouter);
app.use("/posts", postRouter);
app.use("/transactions", transactionRouter);
app.use("/comments", commentRouter);
app.use("/follows", followRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
