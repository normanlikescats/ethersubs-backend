class FollowRouter {
  constructor(followController, express, checkJwt) {
    this.followController = followController;
    this.express = express;
    this.checkJwt = checkJwt
  }
  route = () => {
    let router = this.express.Router();

    router.get("/user/:userId", this.checkJwt, this.followController.getAllFollowsByUser);
    router.get("/creator/:creatorId", this.checkJwt, this.followController.getAllFollowsByCreator);
    router.get("/one/:creatorId/:userId", this.checkJwt, this.followController.getFollowsByCreatorByUser);
    router.post("/create", this.checkJwt, this.followController.createFollow);
    router.delete("/delete/:userId/:creatorId", this.checkJwt, this.followController.deleteFollow)
    

    return router;
  };
}

module.exports = FollowRouter;
