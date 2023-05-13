class CreatorRouter {
  constructor(creatorController, express) {
    this.creatorController = creatorController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/all", this.creatorController.getAllCreators);
    router.get("/user/:userId", this.creatorController.getAllCreatorsByUser);
    router.get("/:id", this.creatorController.getOneCreator);
    router.post("/create", this.creatorController.createCreator);
    router.put("/edit/:id", this.creatorController.editCreator);
    router.delete("/delete/:id", this.creatorController.deleteCreator)
    

    return router;
  };
}

module.exports = CreatorRouter;
