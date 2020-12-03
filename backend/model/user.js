const mongoose = require('mongoose');
const Event = require('./event');



const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   password:{
    type: String,
    required: true,
  },
   email: {
    type: String,
    required: true,
    // unique:true,
  },
  role:{
    type: String,
    default:'user'
  },
  img:{
    type: String,
    default:'https://th.bing.com/th/id/OIP.4LmPhASgsmH_aeAbdRI84AD6D6?pid=Api&w=250&h=250&rs=1'

  },
    phoneNumber: String,

    choosenEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],

});

module.exports = User = mongoose.model('user', userSchema);
