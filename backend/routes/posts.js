const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPostsBySearch,
  getPostsByCreator,
  getPost,
  createPost,
  updatePost,
  likePost,
  commentPost,
  deletePost,
} = require("../controllers/posts.js");

const auth = require("../middleware/auth.js");

router.route("/creator").get(getPostsByCreator);

router.route("/search").get(getPostsBySearch);

router.route("/").get(getPosts);

router.route("/:id").get(getPost);

router.route("/").post(auth, createPost);
router.route("/:id").patch(auth, updatePost);
router.route("/:id").delete(auth, deletePost);
router.route("/:id/likePost").patch(auth, likePost);
router.route("/:id/commentPost").patch(commentPost);

module.exports = router;
