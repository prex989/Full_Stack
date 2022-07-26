const { Sequelize } = require('sequelize');

const { mysql } = require("../database");
const connectionString = mysql.uri;
const sequelize = new Sequelize(connectionString);

module.exports = sequelize;