
const mongoose = require('mongoose');
const {mongo} = require("../config");


const connectionString = mongo.MONGO_URI;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(connectionString);
// };

module.exports ={
  connectToServer : async function(){
    await mongoose.connect(connectionString);
  },
  getDb: function (){
    
  }
}

