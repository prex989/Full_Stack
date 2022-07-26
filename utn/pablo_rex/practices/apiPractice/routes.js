const express = require('express');
const fetch = require('node-fetch')
const router=express.Router();
const {getAllProducts,postProducts} = require('./controller.js');

router.get("/", getAllProducts);

router.post("/", postProducts);

module.exports=router;
