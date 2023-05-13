class UserRouter {
  constructor(UserController, express) {
    this.UserController = UserController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:id", this.UserController.getOneProfile);
    router.post("/", this.UserController.getOrCreate);
    router.put("/", this.UserController.editProfile);
    return router;
  };
}

module.exports = UserRouter;
