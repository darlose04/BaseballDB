const mongoose = require('mongoose');

batters2017Schema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Batters2017", batters2017Schema);