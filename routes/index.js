const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// root route
router.get('/', (req, res) => {
  res.render('landing')
});

// Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    username: req.user.username
  });
});

module.exports = router;