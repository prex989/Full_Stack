const express = require('express');

const animalrouter = require("./routes/Animals")

const {get_animals} = require('./controller/AnimalController');

const app = express();

app.use(express.static("__dirname"));

app.use("/forest",animalrouter);

app.get("/",(request,response)=>{
    return response.json({message:"welcome"});
})

app.get("/animals",get_animals);


app.listen(8000,()=>{
    console.log("Server is Running on port 8000");
})