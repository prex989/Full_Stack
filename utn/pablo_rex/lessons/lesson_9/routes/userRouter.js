const express = require("express");
const route = express.Router();
const {getAllUsers,postUser} = require("../controllers/userController")

route.get("/",getAllUsers);

route.post("/",postUser);

module.exports = route;

