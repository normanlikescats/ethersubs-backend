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
const { users, creators, posts } = db;

// Require Controllers
const UserController = require("./Controllers/UserController");
const CreatorController = require("./Controllers/CreatorController");
const PostController = require("./Controllers/PostController");

// Require Routers
const UserRouter = require("./Routers/UserRouter");
const CreatorRouter = require("./Routers/CreatorRouter");
const PostRouter = require("./Routers/PostRouter");

// Define Controllers
const userController = new UserController(users);
const creatorController = new CreatorController(creators);
const postController = new PostController(posts);

// Define Routers
const userRouter = new UserRouter(userController, express).route();
const creatorRouter = new CreatorRouter(creatorController, express).route();
const postRouter = new PostRouter(postController, express).route();

app.use("/users", userRouter);
app.use("/creators", creatorRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
