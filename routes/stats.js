const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// require models
let BatterProjections = require('../models/batterProj');
let Batters2018 = require('../models/batters2018');
let Batters2017 = require('../models/batters2017');
let PitcherProjections = require('../models/pitcherProj');
let Pitchers2018 = require('../models/pitchers2018');
let Pitchers2017 = require('../models/pitchers2017');

// ==============================
// REMEMBER TO ADD ENSUREAUTHENTICATED MIDDLEWARE TO ROUTES BEFORE PUSHING TO HEROKU
//===============================

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

// pitching 2018 stats route
router.get('/pitching2018', (req, res) => {
  // get all 2018 pitching from the database (not in db yet though)
  Pitchers2018.find({}, (err, all2018Pitchers) => {
    if(err) {
      console.log(err);
    } else {
      res.render("pitchers2018", {pitchers2018: all2018Pitchers});
    }
  });
});

// pitching 2017 stats route
router.get('/pitching2017', (req, res) => {
  // get all 2017 pitching from the database (not in db yet though)
  Pitchers2017.find({}, (err, all2018Pitchers) => {
    if(err) {
      console.log(err);
    } else {
      res.render("pitchers2017", {pitchers2017: all2017Pitchers});
    }
  });
});

module.exports = router;