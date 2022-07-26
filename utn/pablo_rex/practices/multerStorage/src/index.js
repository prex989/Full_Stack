const app = require("./server");
const handleStartServer = require("@utils/handleStartServer");

const PORT = process.env.PORT || 4000;

app.listen(PORT, handleStartServer);