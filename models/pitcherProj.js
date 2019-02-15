const mongoose = require('mongoose');

pitcherProjectionSchema = new mongoose.Schema({
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
}, {collection: 'pitcherprojections'});

module.exports = mongoose.model("PitcherProjections", pitcherProjectionSchema);