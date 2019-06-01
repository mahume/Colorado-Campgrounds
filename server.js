const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const routes = require('./routes');

// your local database url
// 27017 is the default mongoDB port

const app = express();

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'random-secret', // pick a random string to make the hash that is generated secure
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false, // required
  saveUninitialized: false, // required
}));
    
// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use(express.static(path.join(__dirname + 'client/build')))
app.use('/', routes);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
