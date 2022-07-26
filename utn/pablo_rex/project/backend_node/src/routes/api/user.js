const express = require("express");
const { handleGetDashboard, handleGetAvatars } = require("../../controllers/user");


const router = express.Router();


router.get("/avatar", handleGetAvatars);
router.get("/profile", handleGetDashboard);

module.exports = router;