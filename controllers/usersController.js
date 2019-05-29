const db = require('../database/models');
const passport = require('../passport');

module.exports = {
  login(req, res) {

    console.log('logged in?', req.user);
    const userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
}
