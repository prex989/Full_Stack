const express = require("express");

const {authMiddleware} = require("../middleware/authMiddleware");

const route = express.Router();

const {handleWelcomeWeb, handleLoginWeb, handleRegisterWeb, handleDashboardWeb} = require("../controllers/welcomeController");

const {handleAuthLogin} = require("../controllers/authController");

route.get("/",handleWelcomeWeb);

route.get("/login",handleLoginWeb);

route.post("/login",handleAuthLogin);

route.get("/register",handleRegisterWeb);

route.get("/dashboard",authMiddleware,handleDashboardWeb)

module.exports = route;