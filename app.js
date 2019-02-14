const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// require models
let BatterProjections = require('./models/batterProj');

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

app.listen(port, () => console.log(`Example app listening on port ${port}`));