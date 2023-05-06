class PostController {
  constructor(postModel) {
    this.postModel = postModel;
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
    // code in dependency deletion here
    try{
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
