const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/user');

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
    // validation passed
    User.findOne({ username: username })
      .then(user => {
        if(user) {
          // user exists
          errors.push({ msg: 'Username is already taken' })
          res.render('register', {
            errors,
            username,
            password,
            password2
          });
        } else {
          const newUser = new User({
            username, // this is es6, same as username: username
            password
          });

          // hash password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              // set password to hashed
              newUser.password = hash;
              // save the user
              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'You are now registered and can log in');
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
  }
});

// login handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// logout handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;