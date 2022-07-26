const app = require("./server");

const initConnectionDatabase = require("./config/connection");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("Server on port " + PORT);

    initConnectionDatabase();

});