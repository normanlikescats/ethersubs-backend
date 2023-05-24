class ThresholdController {
  constructor(thresholdModel) {
    this.thresholdModel = thresholdModel;
  }

  // Get one threshold
  getOneThreshold = async (req, res) =>{
    const user_id = req.params.userId
    const creator_id = req.params.creatorId
    try {
      const oneThreshold = await this.thresholdModel.findAll(
        {
          where: {
            user_id: user_id,
            creator_id: creator_id
          }
        }
      );
      return res.json(oneThreshold)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Find or create threshold
  getOrCreate = async (req, res) => {
    const {
      user_id,
      creator_id,
      amount,
      status
    } = req.body
    console.log(amount)
    try {
      const [threshold, created] = await this.thresholdModel.findOrCreate(
        {
          where: {
            user_id: user_id,
            creator_id: creator_id
          },
          defaults :{
            user_id: user_id,
            creator_id: creator_id,
            total_contribution: amount,
            status: status
          }
        }
      );
      return res.json({threshold: threshold, created: created});
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Create a threshold entry
  createThreshold = async (req, res) => {
    const {
      user_id,
      creator_id,
      total_contribution,
      status
    } = req.body
    try {
      const createdThreshold = await this.thresholdModel.create(
        {
          user_id: user_id,
          creator_id: creator_id,
          total_contribution: total_contribution,
          status: status
        }
      );
      return res.json(createdThreshold);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Edit threshold entry
  editThreshold = async(req,res) => {
    const user_id = req.params.userId
    const creator_id = req.params.creatorId
    const {newTotalAmount, status} = req.body
    console.log(status)
    console.log(newTotalAmount)
    try {
      const editedThreshold = await this.thresholdModel.update(
        {
          total_contribution: newTotalAmount,
          status: status
        },
        {
          returning: true,
          where:{
            user_id:user_id,
            creator_id:creator_id
          }
        }
      );
      return res.json(editedThreshold)
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = ThresholdController;
