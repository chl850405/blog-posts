const { Schema, model } = require("mongoose");

const postsSchema = new Schema(
  {
    author: {
      type: String,
    },
    authorId: {
      type: String,
    },
    tags: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
    },
    popularity: {
      type: String,
    },
    reads: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//create user model using user schema
const Posts = model("Posts", postsSchema);
//export user model
module.exports = Posts;
