const express = require('express');
const router = express.Router();

// require models
let BatterProjections = require('../models/batterProj');
let PitcherProjections = require('../models/pitcherProj');
let Batters2018 = require('../models/batters2018');
let Batters2017 = require('../models/batters2017');

// batting projections route
router.get('/battingprojections', (req, res) => {
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
router.get('/batting2018', (req, res) => {
  Batters2018.find({}, (err, all2018Batters) => {
    if(err) {
      console.log(err);
    } else {
      res.render("batters2018", {batters2018: all2018Batters});
    }
  });
});

// batting 2017 stats route
router.get('/batting2017', (req, res) => {
  Batters2017.find({}, (err, all2017Batters) => {
    if(err) {
      console.log(err);
    } else {
      res.render("batters2017", {batters2017: all2017Batters});
    }
  });
});

// pitching projections route
router.get('/pitchingprojections', (req, res) => {
  // get all pitcher projections from the database
  PitcherProjections.find({}, (err, allPitchers) => {
    if(err) {
      console.log(err);
    } else {
      res.render("pitcherProjections", {pitchers: allPitchers});
    }
  });
});

module.exports = router;