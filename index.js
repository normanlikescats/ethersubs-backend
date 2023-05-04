const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;
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
const { users, comments } = db;

const UserController = require("./Controllers/UserController");
const CommentController = require("./Controllers/CommentController");

const UserRouter = require("./Routers/UserRouter");
const CommentRouter = require("./Routers/CommentRouter");

const userController = new UserController(users);
const commentController = new CommentController(comments);

const userRouter = new UserRouter(userController, express, checkJwt).route();
const commentRouter = new CommentRouter(commentController, express).route();

app.use("/profile", userRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
