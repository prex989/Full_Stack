const multer = require("multer")


const myStorage = require("../helpers/handleStorage");

const uploadMiddleware = multer({ 
    storage: myStorage,
    limits:{
        fileSize: 5 * 1024 * 1024 
    }
 });


module.exports = uploadMiddleware;