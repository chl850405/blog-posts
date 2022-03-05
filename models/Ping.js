// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const { Schema, Types } = require("mongoose");


const pingSchema = new Schema(
  {
    popularity: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    reads: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    tags: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    popularity: {
        type: Schema.Types.ObjectId,
        ref: "Posts",
      },

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = pingSchema;
