class PostRouter {
  constructor(postController, express, checkJwt) {
    this.postController = postController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/all/:creatorId", this.checkJwt, this.postController.getAllPostsByCreator);
    router.get("/post/:id", this.checkJwt, this.postController.getOnePost);
    router.post("/create", this.checkJwt, this.postController.createPost);
    router.put("/edit/:id", this.checkJwt, this.postController.editPost);
    router.delete("/delete/:id", this.checkJwt, this.postController.deletePost)
    

    return router;
  };
}

module.exports = PostRouter;
