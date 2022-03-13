//imports posts from models
const Posts = require("../models/Posts");

const postsController = {
  // get all posts
  async getPosts({}, res) {
    //find posts
    Posts.find({});
    // define an empty query document
    const query = {};
    // sort in ascending (1) order by length
    const sort = { length: 1, _id: 1 };
    const cursor = collection.find(query).sort(sort);
    await cursor.forEach(console.dir);

    if (!tag) {
      return res.status(400).json({ message: "Tags parameter is required" });
    }
    if (
      (sort != `science`,
      `design`,
      `tech`,
      `startups`,
      `health`,
      `history`,
      `culture`,
      `politics`)
    ) {
      return res.status(400).json({ message: "sortBy parameter is invalid" });
    }
    if ((direction != `asc`, `desc`)) {
      return res
        .status(400)
        .json({ message: "Direction parameter is invalid" });
    }

    res.json(foundPosts);
  },
};

module.exports = postsController;
