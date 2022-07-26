const getAll = ()=>{
    
}

const animal = {
    getAll : getAll
};
module.exports = animal;

const option = "api";

if (option =="api"){
    module.exports = require("./api/Animal");
else if (option =="mysql"){
    module.exports = require("./mysql/Animal");  
else if (option =="mongo"){
    module.exports = require("./mongo/Animal");  
}