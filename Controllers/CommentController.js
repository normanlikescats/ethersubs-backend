class CommentController {
  constructor(commentModel, userModel) {
    this.commentModel = commentModel;
    this.userModel = userModel;
  }

  // Grab all comments by post
  getAllCommentsByPost = async (req, res) =>{
    const post_id = req.params.postId
    try {
      const allCommentsByPost = await this.commentModel.findAll(
        {
          where:{
            post_id: post_id
          },
          include:{
            model: this.userModel,
            attributes: ['display_name', 'photo_url']
          },
          order: [
            ['created_at', 'DESC']
          ]
        }
      );
      return res.json(allCommentsByPost)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Get one comment
  getOneComment = async (req, res) =>{
    const id = req.params.id
    try {
      const oneComment = await this.commentModel.findAll(
        {
          where: {
            id: id
          },
          include:{
            model: this.userModel,
            attributes: ['id', 'display_name', 'photo_url']
          }
        }
      );
      return res.json(oneComment)
    } catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Create a comment
  createComment = async (req, res) => {
    const {
      user_id,
      post_id,
      comment
    } = req.body
    try {
      const createdComment = await this.commentModel.create(
        {
          user_id: user_id,
          post_id: post_id,
          comment: comment
        }
      );
      return res.json(createdComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };


  // Edit comment
  editComment = async (req, res) => {
    const id = req.params.id
    const {
      comment
    } = req.body
    try {
      const updatedComment = await this.commentModel.update(
        {
          comment: comment
        },
        {
          returning: true,
          where:{
            id: id
          }
        }
      );
      res.json(updatedComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Delete comment
  deleteComment = async (req, res) => {
    const id = req.params.id
    // code in dependency deletion here
    try{
      await this.commentModel.destroy(
        {
          where:{
            id: id
          }
        }
      ) 
      return res.json({msg: "Comment Deleted"})
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CommentController;
