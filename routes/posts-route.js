const router = require("express").Router();
const {
  getAllPosts,
  getPostsById,
} = require("../controllers/posts-controller");

// /api/posts
router.route("/").get(getAllPosts);

// /api/posts/:postsId
router.route("/:postsId").get(getPostsById);

module.exports = router;
