const fetch = require('node-fetch');

const resolvePromise = parameter =>{
    console.log("Resolved",parameter);
}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}

fetch("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums").then(resolvePromise).catch(rejectPromise);