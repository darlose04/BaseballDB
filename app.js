const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect("mongodb://localhost:27017/baseballstats", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// root route
app.get('/', (req, res) => {
  res.render("landing");
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));