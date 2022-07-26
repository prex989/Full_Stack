import { NextFunction, Request, Response } from "express";

interface Avatar{
    name:string,
    image:string
}


export const getAvatar=function (req:Request,res:Response,next:NextFunction){

    const avatar:Avatar ={
        name: "avatarName",
        image: "avatarImage"
    }
    res
    return res.json(avatar);
}

export const postAvatar =function (req:Request,res:Response,next:NextFunction){

    const avatar:Avatar=req.body;
    const message = "Avatar Saved"
    return res.send(message)
    }

    export default postAvatar;

// module.exports={
//     getAvatar,
//     postAvatar
// }
