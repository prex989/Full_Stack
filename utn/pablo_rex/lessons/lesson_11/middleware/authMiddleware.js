const {verifyJSONWebToken} = require("../helpers/handleJWT");

const authMiddleware = (req, res, next) =>{

    const token = req.session.token;
    if(!token)
    return res.json({error: "Ud no envió el token"});

    const userData = verifyJSONWebToken(token);

    if(userData){
        req.user = userData;
         return next();
    }
       
    else
        return res.json({error:"Ud no esta autenticado"});
}

module.exports = {
    authMiddleware
}