require('dotenv').config()

const express = require("express");
const cookieSession = require('cookie-session')
const app = express();
const { nameCookie, keyCookie } = require("./config/cookies");

// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: true })); //This enable the request.query for GET requests
app.use(express.json()); //This enable the request.body for POST requests
//app.use(express.json());    // <==== parse request body as JSON;
app.use(cookieSession({ name: nameCookie, keys: [keyCookie] }))
// set the view engine to ejs
app.set('view engine', 'hbs');

const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

app.use("/api", apiRoute);
app.use("/", webRoute);
app.use("/users", express.static(__dirname + "/storage"));

module.exports = app;



