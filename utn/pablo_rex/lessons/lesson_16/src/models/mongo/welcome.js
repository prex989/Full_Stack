const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
  message: String
});

const Welcome = mongoose.model('welcome', welcomeSchema);


Welcome.getMessage = function () {
  return welcomeSchema
}

module.exports = Welcome;
