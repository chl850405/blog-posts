const router = require("express").Router();
// const db = require ("../db/index.js")
const {
  getAllPosts,
  getPostsById,
} = require("../controllers/posts-controller");

// /api/po
router.get("/api/posts", function (req, res) {
  return res.json(getAllPosts);
});

// /api/posts/:postsId
router.get("/api/posts/:postsId", function (req, res) {
  return res.json(getPostsById);
});

module.exports = router;
