const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  image: String,
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

const customFindOne = async (dataToFind) => {
  const user = await User.findOne(dataToFind).lean().exec();
  return user;
}

const customFindAll = async () => {
  const user = await User.find({}, { "avatar": 1, "_id": 0 });
  return user;
}


User.customCreate = customCreate;
User.customUpdate = customUpdate;
User.customFind = customFind;
User.customFindOne = customFindOne;
User.customFindAll = customFindAll;

module.exports = User;
