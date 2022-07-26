const userModel = require("../models/mongo/userModel");
const {isTheSameHash} = require("../helpers/handleEncrypt");

const handleAuthLogin = async (req,res,next) =>{

    try{

        const {email, password} = req.body;
    
        const user = await userModel.findOne({ email: email }).exec();
        

        if(!user){
            res.status(400);
            return res.json({error:"User not registered"});
        }

        const isAuthorized = await isTheSameHash(password,user.password);
            
        if(!isAuthorized){
            res.status(401);
            return res.json({error:"User not authorized"});
        }

        return res.json({user:user,message:"You are logged in"});
    
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({"server_error":error});
    }
}


module.exports.handleAuthLogin = handleAuthLogin;