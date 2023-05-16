class CommentRouter {
  constructor(commentController, express, checkJwt) {
    this.commentController = commentController;
    this.express = express;
    this.checkJwt = checkJwt
  }
  route = () => {
    let router = this.express.Router();

    router.get("/post/:postId", this.checkJwt,this.commentController.getAllCommentsByPost);
    router.get("/:id", this.checkJwt, this.commentController.getOneComment);
    router.post("/create", this.checkJwt, this.commentController.createComment);
    router.put("/edit/:id", this.checkJwt, this.commentController.editComment)
    router.delete("/delete/:id", this.checkJwt, this.commentController.deleteComment)
    

    return router;
  };
}

module.exports = CommentRouter;
