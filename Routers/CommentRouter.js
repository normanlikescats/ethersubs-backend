class CommentRouter {
  constructor(commentController, express) {
    this.commentController = commentController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/post/:postId", this.commentController.getAllCommentsByPost);
    router.get("/:id", this.commentController.getOneComment);
    router.post("/create", this.commentController.createComment);
    router.put("/edit/:id", this.commentController.editComment)
    router.delete("/delete/:id", this.commentController.deleteComment)
    

    return router;
  };
}

module.exports = CommentRouter;
