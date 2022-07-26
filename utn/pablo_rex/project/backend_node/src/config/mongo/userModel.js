const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  image: String
});

console.log("Using Moongose");

const User = mongoose.model('User', userSchema);

const customCreate = async (dataUser) => {

  const user = new User(dataUser);
  await user.save();
  return user;
}

const customUpdate = async (dataToFind, dataToUpdate) => {

  await User.updateOne(dataToFind, dataToUpdate);

}

const customFind = async (dataToFind) => {
  const user = await User.findOne(dataToFind).lean().exec();
  return user;
}


User.create = customCreate;

User.updateFirst = customUpdate;
User.findFirst = customFind;

module.exports = User;
