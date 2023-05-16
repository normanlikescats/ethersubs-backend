class TransactionRouter {
  constructor(transactionController, express, checkJwt) {
    this.transactionController = transactionController;
    this.express = express;
    this.checkJwt = checkJwt
  }
  route = () => {
    let router = this.express.Router();

    router.get("/user/:userId", this.checkJwt, this.transactionController.getAllTransactionsByUser);
    router.get("/creator/:creatorId", this.checkJwt, this.transactionController.getAllTransactionsByCreator);
    router.get("/:id", this.checkJwt, this.transactionController.getOneTransaction);
    router.post("/create", this.checkJwt, this.transactionController.createTransaction);
    router.delete("/delete/:id", this.checkJwt, this.transactionController.deleteTransaction)
    

    return router;
  };
}

module.exports = TransactionRouter;
