const { welcome } = require("../models");

const handleWelcome = (req, res) => {

  const message = welcome.getMessage();
  res.send(message);
};

module.exports = {
  handleWelcome
}