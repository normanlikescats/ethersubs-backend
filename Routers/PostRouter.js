class PostRouter {
  constructor(postController, express) {
    this.postController = postController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/all/:creatorId", this.postController.getAllPostsByCreator);
    router.get("/post/:id", this.postController.getOnePost);
    router.post("/create", this.postController.createPost);
    router.put("/edit/:id", this.postController.editPost);
    router.delete("/delete/:id", this.postController.deletePost)
    

    return router;
  };
}

module.exports = PostRouter;
