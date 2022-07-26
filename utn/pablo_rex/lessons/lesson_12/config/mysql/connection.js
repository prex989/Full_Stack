const { Sequelize } = require('sequelize');

const {mysql} = require("../database");

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: 'mysql'
});

module.exports = sequelize;