const fetch = require('node-fetch');

const resolvePromise = parameter =>{
    console.log("Resolved",parameter);
}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}

fetch("https://youtube.com").then(resolvePromise).catch(rejectPromise);