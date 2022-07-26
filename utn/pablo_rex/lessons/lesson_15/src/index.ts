import dotenv from "dotenv";
dotenv.config();

//require("dotenv").config(); //reemplezada con import

import express from "express";
//const express = require("express");

import avatarRoute from "../build/routes/avatar";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server on port " + PORT);
});
