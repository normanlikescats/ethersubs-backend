class CreatorController {
  constructor(creatorModel) {
    this.creatorModel = creatorModel;
  }

  // Grab all Creator Profiles
  getAllCreators = async (req, res) =>{
    try {
      const allCreators = await this.creatorModel.findAll();
      return res.json(allCreators)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Get one Creator Profile
  getOneCreator = async (req, res) =>{
    const id = req.params.id
    try {
      const oneCreators = await this.creatorModel.findAll(
        {
          where: {
            id: id
          }
        }
      );
      return res.json(oneCreators)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create Creator Profile
  createCreator = async (req, res) => {
    const {
      user_id,
      bio,
      name,
      image,
      twitter,
      substack,
      discord,
      youtube,
      website,
      tier_1,
      tier_2,
      tier_3,
      threshold
    } = req.body
    try {
      const createdCreator = await this.creatorModel.create(
        {
          user_id: user_id,
          bio: bio,
          name: name,
          image: image,
          twitter: twitter,
          substack: substack,
          discord: discord,
          youtube: youtube,
          website: website,
          tier_1: tier_1,
          tier_2: tier_2,
          tier_3: tier_3,
          threshold: threshold
        }
      );
      return res.json(createdCreator);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };


  // Edit Creator Profile
  editCreator = async (req, res) => {
    const id = req.params.id
    const {
      bio,
      name,
      image,
      twitter,
      substack,
      discord,
      youtube,
      website,
      tier_1,
      tier_2,
      tier_3,
      threshold
    } = req.body
    try {
      const updatedProfile = await this.creatorModel.update(
        {
          bio: bio,
          name: name,
          image: image,
          twitter: twitter,
          substack: substack,
          discord: discord,
          youtube: youtube,
          website: website,
          tier_1: tier_1,
          tier_2: tier_2,
          tier_3: tier_3,
          threshold: threshold
        },
        {
          returning: true,
          where:{
            id: id
          }
        }
      );
      res.json(updatedProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Delete Creator Profile
  deleteCreator = async (req, res) => {
    const id = req.params.id
    // code in dependency deletion here
    try{
      await this.creatorModel.destroy(
        {
          where:{
            id: id
          }
        }
      ) 
      return res.json({msg: "Creator Profile Deleted"})
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CreatorController;
