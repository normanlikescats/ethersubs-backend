class FollowController {
  constructor(followModel, creatorModel) {
    this.followModel = followModel;
    this.creatorModel = creatorModel;
  }

  // Grab all follows by User
  getAllFollowsByUser = async (req, res) =>{
    const user_id = req.params.userId
    try {
      const allFollowsByUser = await this.followModel.findAll(
        {
          attributes: ['creator_id'],
          where:{
            user_id: user_id
          },
          include: {
            model: this.creatorModel,
            attributes: ['name', 'image', 'bio']
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
          attributes: ['user_id'],
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

  // Grab all follows by Creator by User
  getFollowsByCreatorByUser = async (req, res) =>{
    const creator_id = req.params.creatorId
    const user_id = req.params.userId
    try {
      const followsByCreatorByUser = await this.followModel.findAll(
        {
          where:{
            creator_id: creator_id,
            user_id: user_id
          }
        }
      );
      return res.json(followsByCreatorByUser)
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
