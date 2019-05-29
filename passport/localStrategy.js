const User = require('../database/models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'username', // not necessary, DEFAULT
  },
  function(username, password, done) {
    console.log('PASSPORT.AUTHENTICATE?')
    User.findOne({ username }, (err, user) => {
      if (err) {
        console.log({ err })
        return done(err);
      }
      if (!user) {
        console.log('INCORRECT UNAME')
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!user.checkPassword(password)) {
        console.log('INCORRECT PASSWORD')
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    });
  }
);

module.exports = strategy;
