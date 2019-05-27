const db = require('../database/models');

module.exports = {
  logout: function(req, res) {
    if (req.user) {
      req.logout();
      res.send({ msg: 'Logging out' })
    } else {
      res.send({ msg: 'No user to log out' })
    }
  }
}