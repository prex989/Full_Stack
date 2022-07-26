const express = require("express");

const route = express.Router();

//route.use("/create_animal", express.static(path.resolve(__dirname+"/../views/create_animal.html")))

const {get_animals,create_animal,store_animal} = require('../controller/AnimalController');


route.get("/animals",get_animals);

route.get("/create_animal",create_animal);

route.post("/create_animal",store_animal);

module.exports = route;