const { Schema, model } = require("mongoose");

const postsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    authorId: {
      type: String,
    },
    tags: {
      type: String,
    },
    //default date set at javascript Date.now
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    // Array of nested documents created with the pingSchema
    reads: [pingSchema],
    likes: [pingSchema],
    popularity: [pingSchema],
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
