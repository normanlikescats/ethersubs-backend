class FollowRouter {
  constructor(followController, express) {
    this.followController = followController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/user/:userId", this.followController.getAllFollowsByUser);
    router.get("/creator/:creatorId", this.followController.getAllFollowsByCreator);
    router.post("/create", this.followController.createFollow);
    router.delete("/delete", this.followController.deleteFollow)
    

    return router;
  };
}

module.exports = FollowRouter;
