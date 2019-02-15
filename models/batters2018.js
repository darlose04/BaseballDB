const mongoose = require('mongoose');

batting2018Schema = new mongoose.Schema({
  Player: String,
  Team: String,
  Pos: String,
  G: Number,
  R: Number,
  HR: Number,
  RBI: Number,
  SB: Number,
  AVG: Number,
  OBP: Number,
  SLG: Number,
  OPS: Number
}, {collection: 'batting2018'});

module.exports = mongoose.model("Batters2018", batting2018Schema);