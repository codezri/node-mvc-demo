const express = require('express');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const db = require('./db.js');
const { init: initAuth } = require('./auth');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'pug');

initAuth();
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/', dashboardRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, console.log('Server is running on port: ' + PORT));
  });
