const mongoose = require('mongoose');

pitching2017Schema = new mongoose.Schema({
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
}, {collection: 'pitching2017'});

module.exports = mongoose.model("Pitchers2017", pitching2017Schema);