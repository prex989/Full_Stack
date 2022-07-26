const { connection, MYSQL, MONGO } = require("../config/database");

let userModel;

switch (connection) {

  case MYSQL:
    userModel = require("./mysql/userModel"); break;
  case MONGO:
    userModel = require("./mongo/userModel"); break;
  default:
    throw `Must be specified DB_CONNECTION and only can be ${MYSQL} or ${MONGO}`;
}

module.exports = {
  userModel,
};