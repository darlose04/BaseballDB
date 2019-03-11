const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
}, {collection: 'chats'});

module.exports = mongoose.model("Chat", ChatSchema)