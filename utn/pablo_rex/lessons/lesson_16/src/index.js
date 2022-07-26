require("dotenv").config();
const server = require("./boot/server");
const initDatabase = require("./boot/database");

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server on port: http://localhost:${PORT}/`)

    initDatabase();
});