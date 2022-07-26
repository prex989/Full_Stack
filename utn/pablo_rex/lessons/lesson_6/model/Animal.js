const {CONNECION_DATA} = require("../config");

if(CONNECION_DATA=="api")
    module.exports = require("./api/Animal");
else if(CONNECION_DATA=="mysql")
    module.exports = require("./mysql/Animal");
else if(CONNECION_DATA=="mongo")
    module.exports = require("./mongo/Animal");
else
    module.exports = require("./api/Animal");