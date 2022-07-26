const express = require("express");

const authRouter = require("./auth");
const userRouter = require("./user");

const router = express.Router();

router.use("/auth", authRouter);

router.use("/user", userRouter);

router.get("/", (req, res) => {

  console.log(req.query);

  return res.send("Estoy en la api");
})

module.exports = router;