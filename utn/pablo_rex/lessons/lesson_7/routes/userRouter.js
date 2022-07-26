const express = require("express");
const route = express.Router();
const {getAllusers,postUser} = require("../controllers/userController")

route.get("/");

route.post("");

module.exports = route;

