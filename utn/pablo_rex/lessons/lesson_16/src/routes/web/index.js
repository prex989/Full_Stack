const express = require("express");
const { handleWelcome } = require("../../controllers/welcome");
const router = express.Router();

router.get("/", handleWelcome);

module.exports = router;