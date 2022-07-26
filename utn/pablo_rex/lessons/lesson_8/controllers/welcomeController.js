const path = require ('path');

const {getDb} = require("../config/mongo/connection")


const handleRequest = (req,res,next)=>{

    const dbConnect = getDb();
    dbConnect
      .collection("welcome")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching welcome collection!");
       } else {
          res.json(result);
        }
  });
    
  //  res.sendFile(__dirname + "/views/index.html");
}

const handleWelcomeWeb =  (req,res,next)=>{
  return res.sendFile(path.resolve(__dirname+"/../views/welcome.html"));
}

module.exports.handleWelcome = handleRequest;
module.exports.handleWelcomeWeb = handleWelcomeWeb;