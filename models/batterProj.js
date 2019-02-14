const mongoose = require('mongoose');

batterProjectionSchema = new mongoose.Schema({
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

module.exports = mongoose.model("BatterProjections", batterProjectionSchema);