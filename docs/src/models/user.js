const mongoose = require('mongoose');

const user = mongoose.Schema({
  email: String,
  full_name: String,
  phone: Number,
  password: String,
});

module.exports = mongoose.model('Users', user);
