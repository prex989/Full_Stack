const jwt = require('jsonwebtoken');

const { secretKey } = require("../config/config");

const getJSONWebToken = (userData) => {

  const payload = {
    email: userData.email,
    name: userData.name,
    avatar: userData.avatar,
    image: userData.image
  };

  return jwt.sign(payload, secretKey);

}

const verifyJSONWebToken = (token) => {

  return jwt.verify(token, secretKey);

}

module.exports = {
  getJSONWebToken,
  verifyJSONWebToken
}