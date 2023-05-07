class TransactionController {
  constructor(transactionModel) {
    this.transactionModel = transactionModel;
  }

  // Grab all txns by User
  getAllTransactionsByUser = async (req, res) =>{
    const user_id = req.params.userId
    try {
      const allTransactionsByUser = await this.transactionModel.findAll(
        {
          where:{
            user_id: user_id
          }
        }
      );
      return res.json(allTransactionsByUser)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Grab all txns by Creator
  getAllTransactionsByCreator = async (req, res) =>{
    const creator_id = req.params.creatorId
    try {
      const allTransactionsByCreator = await this.transactionModel.findAll(
        {
          where:{
            creator_id: creator_id
          }
        }
      );
      return res.json(allTransactionsByCreator)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Get one transaction
  getOneTransaction = async (req, res) =>{
    const id = req.params.id
    try {
      const oneTransaction = await this.transactionModel.findAll(
        {
          where: {
            id: id
          }
        }
      );
      return res.json(oneTransaction)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create a transaction
  createTransaction = async (req, res) => {
    const {
      user_id,
      creator_id,
      amount,
      asset,
      transaction_hash
    } = req.body
    try {
      const createdTransaction = await this.transactionModel.create(
        {
          user_id: user_id,
          creator_id: creator_id,
          amount: amount,
          asset: asset,
          transaction_hash: transaction_hash
        }
      );
      return res.json(createdTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Delete Post
  deleteTransaction = async (req, res) => {
    const id = req.params.id
    // code in dependency deletion here
    try{
      await this.transactionModel.destroy(
        {
          where:{
            id: id
          }
        }
      ) 
      return res.json({msg: "Transaction Deleted"})
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = TransactionController;
