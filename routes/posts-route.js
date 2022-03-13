//install express
const router = require("express").Router();
const db = require ("../db/data.json")
//install controllers
require("../controllers/posts-controller");

// /api/posts
router.get("/api/posts", function (req, res) {
  return res.json(db);
});


module.exports = router;
