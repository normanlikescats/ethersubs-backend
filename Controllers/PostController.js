class PostController {
  constructor(postModel, commentModel, creatorModel) {
    this.postModel = postModel;
    this.commentModel = commentModel;
    this.creatorModel = creatorModel;
  }

  // Grab all posts by Creators
  getAllPostsByCreator = async (req, res) =>{
    const creator_id = req.params.creatorId
    try {
      const allPostsByCreator = await this.postModel.findAll(
        {
          where:{
            creator_id: creator_id
          }
        }
      );
      return res.json(allPostsByCreator)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Get one post
  getOnePost = async (req, res) =>{
    const id = req.params.id
    try {
      const onePost = await this.postModel.findAll(
        {
          where: {
            id: id
          },
          include: {
            model: this.creatorModel,
            attributes: ['name']
          }
        }
      );
      return res.json(onePost)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create a post
  createPost = async (req, res) => {
    const {
      creator_id,
      title,
      content,
      image
    } = req.body
    try {
      const createdPost = await this.postModel.create(
        {
          creator_id: creator_id,
          title: title,
          content: content,
          image: image
        }
      );
      return res.json(createdPost);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };


  // Edit Post
  editPost = async (req, res) => {
    const id = req.params.id
    const {
      title,
      content,
      image
    } = req.body
    try {
      const updatedPost = await this.postModel.update(
        {
          title: title,
          content: content,
          image: image
        },
        {
          returning: true,
          where:{
            id: id
          }
        }
      );
      res.json(updatedPost);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Delete Post
  deletePost = async (req, res) => {
    const id = req.params.id
    // search for post's comments to delete first
    let commentIdArr;
    try{
      const commentId = await this.commentModel.findAll({
        attributes: ['id'],
        where:{
          post_id: id
        }
      })
      let stringifiedCommentId = JSON.stringify(commentId)
      let parsedCommentId = JSON.parse(stringifiedCommentId)
      commentIdArr = parsedCommentId.map(id => id.id)
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
      // delete post
      await this.postModel.destroy(
        {
          where:{
            id: id
          }
        }
      ) 
      return res.json({msg: "Post Deleted"})
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = PostController;
