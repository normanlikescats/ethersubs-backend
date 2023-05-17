class ThresholdRouter {
  constructor(thresholdController, express, checkJwt) {
    this.thresholdController = thresholdController;
    this.express = express;
    this.checkJwt= checkJwt
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId/:creatorId", this.checkJwt, this.thresholdController.getOneThreshold);
    router.post("/getOrCreate", this.checkJwt, this.thresholdController.getOrCreate);
    router.post("/create", this.checkJwt, this.thresholdController.createThreshold);
    router.put("/edit/:userId/:creatorId", this.checkJwt, this.thresholdController.editThreshold)
    

    return router;
  };
}

module.exports = ThresholdRouter;
