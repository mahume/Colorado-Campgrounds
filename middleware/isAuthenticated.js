const db = require('../database');

module.exports = function(req, res, next) {
  if (req.user) {
    console.log(req.user);

    db.User.find({ _id: req.user._id })
      .then(user => {
        if (!user) return res.status(401).json({ error: 'Unauthenticated '});
        return next();
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error });
      })
  } else {
    return res.status(401).json({ error: 'Unauthenticated '});
  }
}