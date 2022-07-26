const fetch = require('node-fetch');

const { URL_API } = require('../../config');

let spoty = ["estoy vacio"];

const resolvePromise = jsonData =>{

    spoty = jsonData;

}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}


const getAll = async ()=>{

    const response = await fetch(URL_API+"/spoty");
    spoty = await response.json();
    
    return spoty;
};

const save = async (spotyData)=>{
    const response = await fetch(URL_API+"/spoty",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (spotyData)
    })    

    const message = await response.json();
    return{
        message: message
    }
}


const animal = {
    getAll : getAll,
    save: save
}

module.exports = animal;