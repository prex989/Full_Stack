const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql/connection");

const welcomeSchema = {
  message: DataTypes.STRING
};

const Welcome = sequelize.define('welcome', welcomeSchema, {
  tableName: 'welcome'
});

Welcome.getMessage = function () {
  return "Mensaje con mysql";
}

module.exports = Welcome;