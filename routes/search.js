const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// models
let BatterProjections = require('../models/batterProj');
let PitcherProjections = require('../models/pitcherProj');

// ==============================
// REMEMBER TO ADD ENSUREAUTHENTICATED MIDDLEWARE TO ROUTES BEFORE PUSHING TO HEROKU
//===============================

// batting search route
router.get('/batting', ensureAuthenticated, (req, res) => {
  res.render("search/batterSearch");
});

router.post('/batting', ensureAuthenticated, (req, res) => {
  // get data from form
  let runs = req.body.runs;
  let homeruns = req.body.homeruns;
  let rbi = req.body.rbi;
  let sb = req.body.sb;
  let ops = req.body.ops;

  BatterProjections.find({
    R: {$gte: runs}, 
    HR: {$gte: homeruns},
    RBI: {$gte: rbi},
    SB: {$gte: sb},
    OPS: {$gte: ops}
  }, (err, allQualifiedBatters) => {
    if (err) {
      console.log(err);
    } else {
      res.render("search/batterSearchResult", {batters: allQualifiedBatters});
    }
  });
});


// pitching search route
router.get('/pitching', ensureAuthenticated, (req, res) => {
  res.render("search/pitcherSearch");
});

router.post('/pitching', ensureAuthenticated, (req, res) => {
  // get data from form
  let strikeouts = req.body.strikeouts;
  let holds = req.body.holds;
  let saves = req.body.saves;
  let whip = req.body.whip;
  let era = req.body.era;
  let qs = req.body.qs;

  PitcherProjections.find({
    K: {$gte: strikeouts},
    HLD: {$gte: holds},
    SV: {$gte: saves},
    WHIP: {$lte: whip},
    ERA: {$lte: era},
    QS: {$gte: qs}
  }, (err, allQualifiedPitchers) => {
    if (err) {
      console.log(err);
    } else {
      res.render("search/pitcherSearchResult", {pitchers: allQualifiedPitchers});
    }
  });
});

module.exports = router;