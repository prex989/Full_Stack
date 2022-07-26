const path = require("path");

const {getDb} = require("../config/mongo/connection");

const handleRequest = (request,response,next)=>{
    
    const dbConnect = getDb();
    dbConnect
        .collection("welcome")
        .find({})
        .toArray(function (err, result) {
            if (err) 
                response.status(400).send("Error fetching welcome collection!");
            else 
                response.json(result);
        })
    //Constate de NODE => __dirname
    //response.sendFile(__dirname+"/views/welcome.html");
}

const handleWelcomeWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/welcome.html"));
}

const handleLoginWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/login.html"));
}

const handleRegisterWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/register.html"));
}


module.exports.handleWelcome = handleRequest;
module.exports.handleWelcomeWeb = handleWelcomeWeb;
module.exports.handleLoginWeb = handleLoginWeb;
module.exports.handleRegisterWeb = handleRegisterWeb;