const express = require('express');
require('dotenv').config();

const PORT= process.env.PORT || 5000;
const app= express();
const routes=require("./routes");

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use("",routes);


app.listen (PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
});




