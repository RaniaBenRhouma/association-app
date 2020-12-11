// Schema comment
     // _id comment
     // #id user 
     // #id post
     // content
//

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({

  idUser:{ 
       type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  idPost:{ 
       type: mongoose.Schema.Types.ObjectId, ref: 'Post' },

  content:  {
    type: String,
    required: true,
  },

});

module.exports = Comment = mongoose.model('comment', commentSchema);

