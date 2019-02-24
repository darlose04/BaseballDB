const mongoose = require('mongoose');

pitching2018Schema = new mongoose.Schema({
  Player: String,
  Team: String,
  G: Number,
  GS: Number,
  QS: Number,
  IP: Number,
  K: Number,
  HLD: Number,
  SV: Number,
  ERA: Number,
  WHIP: Number
}, {collection: 'pitching2018'});

module.exports = mongoose.model("Pitchers2018", pitching2018Schema);