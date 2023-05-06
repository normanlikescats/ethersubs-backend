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
const { users, creators } = db;

// Require Controllers
const UserController = require("./Controllers/UserController");
const CreatorController = require("./Controllers/CreatorController");

// Require Routers
const UserRouter = require("./Routers/UserRouter");
const CreatorRouter = require("./Routers/CreatorRouter");

// Define Controllers
const userController = new UserController(users);
const creatorController = new CreatorController(creators);

// Define Routers
const userRouter = new UserRouter(userController, express).route();
const creatorRouter = new CreatorRouter(creatorController, express).route();

app.use("/users", userRouter);
app.use("/creators", creatorRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
