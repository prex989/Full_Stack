

const setCookie = (req, token) => {
  req.session.token = token;
  return true;
};

module.exports = {
  setCookie
};