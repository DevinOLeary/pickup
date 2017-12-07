const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  location: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  }
});

let Event = mongoose.model('Event', EventSchema);

module.exports = {Event}
