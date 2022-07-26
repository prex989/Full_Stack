const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  image: String
});

const User = mongoose.model('User', userSchema);
console.log("using mongo model");
module.exports = User;