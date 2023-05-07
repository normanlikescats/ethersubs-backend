class TransactionRouter {
  constructor(transactionController, express) {
    this.transactionController = transactionController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/user/:userId", this.transactionController.getAllTransactionsByUser);
    router.get("/creator/:creatorId", this.transactionController.getAllTransactionsByCreator);
    router.get("/:id", this.transactionController.getOneTransaction);
    router.post("/create", this.transactionController.createTransaction);
    router.delete("/delete/:id", this.transactionController.deleteTransaction)
    

    return router;
  };
}

module.exports = TransactionRouter;
