class UserRouter {
  constructor(UserController, express, checkJwt) {
    this.UserController = UserController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:id", this.UserController.getOneProfile);
    router.post("/", this.checkJwt, this.UserController.getOrCreate);
    router.put("/", this.checkJwt, this.UserController.editProfile);
    return router;
  };
}

module.exports = UserRouter;
