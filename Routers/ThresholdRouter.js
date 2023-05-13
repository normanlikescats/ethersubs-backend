class ThresholdRouter {
  constructor(thresholdController, express) {
    this.thresholdController = thresholdController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId/:creatorId", this.thresholdController.getOneThreshold);
    router.post("/create", this.thresholdController.createThreshold);
    router.put("/edit/:userId/:creatorId", this.thresholdController.editThreshold)
    

    return router;
  };
}

module.exports = ThresholdRouter;
