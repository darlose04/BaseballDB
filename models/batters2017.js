const mongoose = require('mongoose');

batting2017Schema = new mongoose.Schema({
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
}, {collection: 'batting2017'});

module.exports = mongoose.model("Batters2017", batting2017Schema);