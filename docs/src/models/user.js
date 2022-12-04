const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const user = mongoose.Schema({
  email: String,
  full_name: String,
  phone: Number,
  password: String,
});

user.plugin(passportLocalMongoose);
module.exports = mongoose.model('Users', user);
