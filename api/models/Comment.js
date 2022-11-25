const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: String,
    },
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
    },
    name: {
        type: String
    }
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
