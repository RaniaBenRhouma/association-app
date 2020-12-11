const mongoose = require("mongoose");

// Schema post
// id post
// #id user
// content
// [comments ids]
//

const postSchema = mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  content: {
    type: String,
    required: true,
  },

  comments: [
    {
      idComment: Number,
      idUserC: { type: mongoose.Types.ObjectId, ref: "User" },
      content: String,
    },
  ],
});

module.exports = Post = mongoose.model("post", postSchema);
