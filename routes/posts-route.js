//install express
const router = require("express").Router();
const db = require ("../db")
//install controllers
require("../controllers/posts-controller");

// /api/posts
router.get("/api/posts", function (req, res) {
  return res.json(db);
});

// /api/posts/:postsId
router.get("/api/posts/:postsId", function (req, res) {
  return res.json(db);
});

module.exports = router;
