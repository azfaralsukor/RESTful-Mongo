const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  skillsets: {
    type: String,
    required: true
  },
  hobby: {
    type: String,
  },
}));