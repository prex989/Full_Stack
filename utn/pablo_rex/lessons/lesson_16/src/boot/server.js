const express = require("express");

const webRouter = require("../routes/web");

const app = express();

app.use("/",webRouter);

module.exports = app;