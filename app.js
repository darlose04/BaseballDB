const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/*
// require models
let BatterProjections = require('./models/batterProj');
let PitcherProjections = require('./models/pitcherProj');
let Batters2018 = require('./models/batters2018');
let Batters2017 = require('./models/batters2017');
*/
const port = 3000;

// DB config
const db = require('./config/keys').MongoURI;

// Connect to DB
// mongoose.connect("mongodb://localhost:27017/baseballstats", {useNewUrlParser: true});
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// root route
app.get('/', (req, res) => {
  res.render("landing");
});


// Routes
app.use('/', require('./routes/stats'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));