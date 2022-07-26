

const  getSpoty = async (request,response)=>{

    const spoty = await spoty.getAll(); //Esto tambien es una promesa

    return response.json(spoty);


}

const postSpoty= async (req,res)=>{
    let dataPost = req.body
   
    .then(res=>res.json())
    .then(res=>JSON.stringify(res))
    .catch(error=>console.log(error.json()))
    res.send(`Dato cargado en la API`);
 }

const getDocApi = (req,res,next)=>{
    return res.send("Doc API");
}

module.exports = {getDocApi,getSpoty,postSpoty}