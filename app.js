const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// require models
let BatterProjections = require('./models/batterProj');
let PitcherProjections = require('./models/pitcherProj');
let Batters2018 = require('./models/batters2018');
let Batters2017 = require('./models/batters2017');

const port = 3000;

mongoose.connect("mongodb://localhost:27017/baseballstats", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// root route
app.get('/', (req, res) => {
  res.render("landing");
});

// batting projections route
app.get('/battingprojections', (req, res) => {
  // get all batter projections from the database
  BatterProjections.find({}, (err, allBatters) => {
    if(err) {
      console.log(err);
    } else {
      res.render("batterProjections", {batters: allBatters});
    }
  });
});

// batting 2018 stats route
app.get('/batting2018', (req, res) => {
  Batters2018.find({}, (err, allBatters) => {
    if(err) {
      console.log(err);
    } else {
      res.render("batters2018", {batters: allBatters});
    }
  });
});

// batting 2017 stats route
app.get('/batting2017', (req, res) => {
  Batters2018.find({}, (err, allBatters) => {
    if(err) {
      console.log(err);
    } else {
      res.render("batters2017", {batters: allBatters});
    }
  });
});

// pitching projections route
app.get('/pitchingprojections', (req, res) => {
  // get all pitcher projections from the database
  PitcherProjections.find({}, (err, allPitchers) => {
    if(err) {
      console.log(err);
    } else {
      res.render("pitcherProjections", {pitchers: allPitchers});
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));