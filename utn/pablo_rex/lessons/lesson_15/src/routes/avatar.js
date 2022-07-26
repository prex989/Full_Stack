"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const express =require("express");
const route = express.Router();
const avatar_1 = require("../controllers/avatar");
route.get("/", avatar_1.getAvatar.);
route.post("/", avatar_1.postAvatar);
exports.default = route;
//module.exports =route;
