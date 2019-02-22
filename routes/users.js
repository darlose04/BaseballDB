const express = require('express');
const router = express.Router();

// User model required here when necessary

// login page
router.get('/login', (req, res) => {
  res.render('login');
});

// register page
router.get('/register', (req, res) => {
  res.render('register');
});