const express = require ("express")
const app = express()
const PORT = 5000

const {connectToServer,getDb} = require("./config/mongo/connection");
const route_users = require("./routes/userRouter");

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

app.get("/", handleRequest);

app.use("/users",route_users);

app.listen(PORT, ()=>{

    console.log("Server is running on port " + PORT);
    connectToServer((error)=>{
        if(error)
        console.log(error);
        else console.log("connection establioshed with database mongo");
    })
})