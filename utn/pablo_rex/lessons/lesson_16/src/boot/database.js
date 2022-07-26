const { connection, MONGO, MYSQL } = require("../config/database")
let initialization;
switch (connection) {

  case MYSQL:
    console.log("A trabajar con mysql");
    initialization = require("./mysql/init")
    break;
  case MONGO:
    console.log("A trabajar con mongodb");
    initialization = require("./mongo/init")
    break;
  default:
    throw `Se debe especificar una conexion y debe ser ${MYSQL} o ${MONGO}, no debe ser ${connection}`;
}

// 

module.exports = initialization;