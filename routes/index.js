const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const server = require('http').Server(router);
const io = require('socket.io')(server);
const path = require('path');
const Chat = require('../models/chat');

// root route
router.get('/', (req, res) => {
  res.render('landing')
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', {
    username: req.user.username
  });
});

// chat route
router.get('/chat', ensureAuthenticated, (req, res) => {
  res.render('chat', {
    username: req.user.username
  });
});



module.exports = router;