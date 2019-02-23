const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const PORT = process.env.PORT || 3000;

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

// connect flash
app.use(flash());

// set view engine to ejs
app.set("view engine", "ejs");



// Routes
// index routes
app.use('/', require('./routes/index'));
// user routes
app.use('/users', require('./routes/users'));
// link to stats js routes
app.use('/stats', require('./routes/stats'));

app.listen(PORT, () => console.log(`Baseball app listening on port ${PORT}`));