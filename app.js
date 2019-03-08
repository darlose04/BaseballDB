const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// const User = require('./models/user');

const PORT = process.env.PORT || 3000;

// passport config
require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI;

// Connect to DB
// mongoose.connect("mongodb://localhost:27017/baseballstats", {useNewUrlParser: true});
mongoose.connect(db, {useNewUrlParser: true, dbName: 'baseball'})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// express session middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// create currentUser
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// let users = User.find({}, (err, allUsers) => {
//   if(err) {
//     console.log(err);
//   } else {
//     users = {users: allUsers}
//   }
// });

// access all users in database
// app.use((req, res, next) => {
//   res.locals.users = req.users;
//   next();
// });

// User.find({}, (err, allUsers) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let users = {users: allUsers};
//     // console.log(users.users[0].username);
//     for (let i = 0; i < users.users.length; i++) {
//       console.log(users.users[i].username);
//     }
//   }
// });

// global vars for connect-flash messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  // res.locals.ops = 0.85;
  next();
});

// set view engine to ejs
app.set("view engine", "ejs");

// Routes
// index routes
app.use('/', require('./routes/index'));
// user routes
app.use('/users', require('./routes/users'));
// link to stats js routes
app.use('/stats', require('./routes/stats'));
// link to search routes
app.use('/search', require('./routes/search'));

app.listen(PORT, () => console.log(`Baseball app listening on port ${PORT}`));