class FollowController {
  constructor(followModel) {
    this.followModel = followModel;
  }

  // Grab all follows by User
  getAllFollowsByUser = async (req, res) =>{
    const user_id = req.params.userId
    try {
      const allFollowsByUser = await this.followModel.findAll(
        {
          where:{
            user_id: user_id
          }
        }
      );
      return res.json(allFollowsByUser)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Grab all follows by Creator
  getAllFollowsByCreator = async (req, res) =>{
    const creator_id = req.params.creatorId
    try {
      const allFollowsByCreator = await this.followModel.findAll(
        {
          where:{
            creator_id: creator_id
          }
        }
      );
      return res.json(allFollowsByCreator)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create a comment
  createFollow = async (req, res) => {
    const {
      user_id,
      creator_id
    } = req.body
    try {
      const createdFollow = await this.followModel.create(
        {
          user_id: user_id,
          creator_id: creator_id
        }
      );
      return res.json(createdFollow);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Delete comment
  deleteFollow = async (req, res) => {
    const {
      user_id,
      creator_id
    } = req.body
    // code in dependency deletion here
    try{
      await this.followModel.destroy(
        {
          where:{
            user_id: user_id,
            creator_id: creator_id
          }
        }
      ) 
      return res.json({msg: "Follow removed!"})
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = FollowController;
