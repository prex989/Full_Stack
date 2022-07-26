require('dotenv').config();

const express = require("express");
const  cookieSession = require('cookie-session')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))


const {connectToServer} = require("./config/mongo/connection");
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

const PORT = process.env.PORT || 5000;

app.use("/api",apiRoute);
app.use("/",webRoute);
app.use("/users",express.static(__dirname+"/storage"));



app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer().then(()=>{
        console.log("connection stablished");
        
    }).catch((error)=>{
        console.log("connection refused");
        console.log(error);
    })

});