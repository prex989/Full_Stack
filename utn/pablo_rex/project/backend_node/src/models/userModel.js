const {CONNECION_DATA} = require("../config/config");

if(CONNECION_DATA=="api")
    module.exports = require("./api/userModel");
else if(CONNECION_DATA=="mysql")
    module.exports = require("./mysql/userModel");
else if(CONNECION_DATA=="mongo")
    module.exports = require("./mongo/userModel");
else
    module.exports = require("./api/userModel");