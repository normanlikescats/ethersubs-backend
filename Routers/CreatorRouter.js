class CreatorRouter {
  constructor(creatorController, express, checkJwt) {
    this.creatorController = creatorController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/all", this.creatorController.getAllCreators);
    router.get("/user/:userId", this.creatorController.getAllCreatorsByUser);
    router.get("/:id", this.creatorController.getOneCreator);
    router.post("/create", this.checkJwt, this.creatorController.createCreator);
    router.put("/edit/:id", this.checkJwt, this.creatorController.editCreator);
    router.delete("/delete/:id", this.checkJwt, this.creatorController.deleteCreator)
    

    return router;
  };
}

module.exports = CreatorRouter;
