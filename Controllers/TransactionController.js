class TransactionController {
  constructor(transactionModel, creatorModel, userModel) {
    this.transactionModel = transactionModel;
    this.creatorModel = creatorModel;
    this.userModel = userModel;
  }

  // Grab all txns by User
  getAllTransactionsByUser = async (req, res) =>{
    const user_id = req.params.userId
    try {
      const allTransactionsByUser = await this.transactionModel.findAll(
        {
          where:{
            user_id: user_id
          },
          order: [
            ['created_at', 'DESC']
          ],
          include: {
            model: this.creatorModel,
            attributes: ['name']
          }
        }
      );
      return res.json(allTransactionsByUser)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Grab all txns by Creator(s)
  getAllTransactionsByCreator = async (req, res) =>{
    const rawCreatorId = req.params.creatorId
    let creator_id = rawCreatorId
    if(creator_id.includes("-")){
      creator_id = creator_id.split("-")
    }
    console.log(creator_id)
    try {
      const allTransactionsByCreator = await this.transactionModel.findAll(
        {
          where:{
            creator_id: creator_id
          },
          order: [
            ['created_at', 'DESC']
          ],
          include: [{
            model: this.userModel,
            attributes: ['display_name' , 'wallet']
          },
          {
            model: this.creatorModel,
            attributes: ['name']
          }]
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
