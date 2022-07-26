const express = require("express");
const router = express.Router();

const userRouter = require("@routes/userRouter");

const {getDocApi,getSpoty} = require("@controllers/apiController");


router.use("/user",userRouter);

router.get("/",getDocApi);

router.get("/spoty", getSpoty);

module.exports = router;
