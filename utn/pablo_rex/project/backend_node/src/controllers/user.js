const { getHashedPassword } = require("../helpers/handleEncrypt");
const { getJSONWebToken, verifyJSONWebToken } = require("../helpers/handleJWT");
const { userModel } = require("../models");
const { isTheSameHash } = require("../helpers/handleEncrypt");
//const { setCookie } = require("../helpers/handleCookie");
const jwt = require('jsonwebtoken');
const { secretKey } = require("../config/config");

const handleGetDashboard = async (req, res) => {
  try {
    let { token } = req.query;

    if (!token)
      return res.json({ error: "Usuario no autenticado" });

    const userData = verifyJSONWebToken(token);

    //------------------------------------
    const { email } = userData;

    const user = await userModel.customFindOne({ email: email });

    if (!user) {
      res.status(400);
      return res.json({ error: "Perfil no encontrado" });
    }
    return res.json({
      message: "Perfil del usuario con toda su informacion",
      body: {
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        image: user.image
      }
    });

  } catch (error) {
    res.json({ message: error.message })
  }
}

const handleGetAvatars = async (req, res) => {
  try {
    const avatars = await userModel.customFindAll();

    return res.json({
      message: "Listado de Avatars en Base de Datos",
      body: avatars
    });
  } catch (error) {
    res.json({ message: error.message })
  }
}

module.exports = {
  handleGetDashboard,
  handleGetAvatars
}