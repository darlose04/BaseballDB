const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// root route
app.get('/', (req, res) => {
  res.render("landing");
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));