const fetch = require('node-fetch')

const getAllProducts=async (req,res)=>{
 const data = await fetch('https://fakestoreapi/products')
                .then(res=>res.json())
                //.then(json=>console.log(json))
    .catch (err=>{console.log(err.json);})
    res.send(data)
  };   



const postProducts= async (req,res)=>{
    let dataPost = req.body
    let dataPush = await fetch("https://6275b491bc9e46be1a0e149a.mockapi.io/products",{
        method:"POST",
        body: JSON.stringify(dataPost),
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },

})   
    .then(res=>res.json())
    .then(res=>JSON.stringify(res))
    .catch(error=>console.log(error.json()))
    res.send(`Dato cargado en la API ${dataPush}`)
};





module.exports={getAllProducts,postProducts}