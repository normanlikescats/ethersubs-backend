class CreatorController {
  constructor(creatorModel, postModel, commentModel, followModel, transactionModel) {
    this.creatorModel = creatorModel;
    this.postModel = postModel;
    this.commentModel = commentModel;
    this.followModel = followModel;
    this.transactionModel = transactionModel;
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
    let postIdArr;
    let commentIdArr;
    let followIdArr;
    let transactionIdArr;
    // search for posts
    try{
      const postId = await this.postModel.findAll({
        attributes: ['id'],
        where:{
          creator_id: id
        }
      })
      let stringifiedPostId = JSON.stringify(postId)
      let parsedPostId = JSON.parse(stringifiedPostId)
      postIdArr = parsedPostId.map(id => id.id)
    } catch(err) {
      return res.status(400).json({ error: true, msg: err });
    }
    // search for comments
    try{
      const commentId = await this.commentModel.findAll({
        attributes: ['id'],
        where:{
          post_id: postIdArr
        }
      })
      let stringifiedCommentId = JSON.stringify(commentId)
      let parsedCommentId = JSON.parse(stringifiedCommentId)
      commentIdArr = parsedCommentId.map(id => id.id)
    } catch(err) {
      return res.status(400).json({ error: true, msg: err });
    }
    // search for follows
    try{
      const followsId = await this.followModel.findAll({
        attributes: ['id'],
        where:{
          creator_id: id
        }
      })
      let stringifiedFollowId = JSON.stringify(followsId)
      let parsedFollowId = JSON.parse(stringifiedFollowId)
      followIdArr = parsedFollowId.map(id => id.id)
    } catch(err) {
      return res.status(400).json({ error: true, msg: err });
    }
    // search for transactions
    try{
      const transactionId = await this.transactionModel.findAll({
        attributes: ['id'],
        where:{
          creator_id: id
        }
      })
      let stringifiedTransactionId = JSON.stringify(transactionId)
      let parsedTranasctionId = JSON.parse(stringifiedTransactionId)
      transactionIdArr = parsedTranasctionId.map(id => id.id)
    } catch(err) {
      return res.status(400).json({ error: true, msg: err });
    }
    try{
      // delete comments
      await this.commentModel.destroy(
        {
          where:{
            id: commentIdArr
          }
        }
      )
      // delete posts
      await this.postModel.destroy(
        {
          where:{
            id: postIdArr
          }
        }
      )
      // delete follows
      await this.followModel.destroy(
        {
          where:{
            id: followIdArr
          }
        }
      )
      // delete transactions
      await this.transactionModel.destroy(
        {
          where:{
            id: transactionIdArr
          }
        }
      )
      // delete creator
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
