const UserModel = require("../models/mongo/userModel");
const getAllUsers = (req,res,next)=>{

};

const postUser= async (req,res,next)=>{
    const data = req.body;

    const user = new UserModel(data);
    
    await user.save();

    res.send("User added", user);
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
