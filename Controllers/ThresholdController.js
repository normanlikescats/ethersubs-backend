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

  // Create a threshold entry
  createThreshold = async (req, res) => {
    const {
      user_id,
      creator_id,
      total_contribution
    } = req.body
    try {
      const createdThreshold = await this.thresholdModel.create(
        {
          user_id: user_id,
          creator_id: creator_id,
          total_contribution: total_contribution,
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
    const newTotalAmount = req.body
    try {
      const editedThreshold = await this.thresholdModel.update(
        {
          total_contribution: newTotalAmount,
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
