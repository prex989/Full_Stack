const { userModel } = require("../models");

const { isTheSameHash } = require("../helpers/handleEncrypt");
const { getJSONWebToken } = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");

const handleAuthLogin = async (req, res, next) => {

  try {

    const { email, password } = req.body;

    const user = await userModel.findFirst({ email: email });
    console.log(user);
    if (!user) {
      res.status(400);
      return res.json({ error: "User not registered" });
    }


    const isAuthorized = await isTheSameHash(password, user.password);



    if (!isAuthorized) {
      res.status(401);
      return res.json({ error: "User not authorized" });
    }


    return res.redirect("/dashboard");

  } catch (error) {

    console.log(error);
    res.status(500);
    return res.json({ "error": error });
  }
}


module.exports.handleAuthLogin = handleAuthLogin;