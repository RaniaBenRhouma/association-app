const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
   img:{
    type: String,
    required: true,
  },
   desc: {
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  },

});

module.exports = Event = mongoose.model('event', eventSchema);
