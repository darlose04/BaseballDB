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

// Register Handle
router.post('/register', (req, res) => {
  const { username, password, password2} = req.body;
  let errors = [];

  // check required fields
  if (!username || !password || !password) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  // check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match'});
  }

  // check password length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      username,
      password,
      password2
    });
  } else {
    res.send('pass');
  }
});

module.exports = router;