const { DataTypes } = require('sequelize');
const sequelize = require("../../config/mysql/connection");

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users'
});

console.log("Using Sequelize")


const customUpdate = async (dataToFind, dataToUpdate) => {

    await User.update(dataToUpdate, { where: dataToFind });

}


const customFind = async (dataToFind)=>{
    
    const user = await User.findOne({ where: dataToFind });
    return user;
}


User.updateFirst = customUpdate;
User.findFirst = customFind;


module.exports = User;