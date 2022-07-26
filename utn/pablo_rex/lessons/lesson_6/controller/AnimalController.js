const animal = require("../model/Animal");

const path = require("path");
//funciones async son promesas tambien

module.exports.get_animals = async (request,response)=>{

    const animals = await animal.getAll(); //Esto tambien es una promesa

    return response.json(animals);


}

module.exports.create_animal = (request,response)=>{

    return response.sendFile(path.resolve(__dirname+"/../views/create_animal.html"));
}

module.exports.store_animal = (request,response)=>{
   
    const data = request.body;
    const message = animal.save(data);
    console.log(data);
    return response.json(message);
}