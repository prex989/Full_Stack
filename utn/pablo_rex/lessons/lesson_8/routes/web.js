const express = require("express");

const route = express.Router();

const {handleWelcomeWeb} = require("../controllers/welcomeController");
const route_users = require("./userRouter");

route.get("/",handleWelcomeWeb);



module.exports = route;