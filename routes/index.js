const express = require('express');
const router = express.Router();

// root route
router.get('/', (req, res) => {
  res.render('landing', {
    // username: req.user.username
  })
});

module.exports = router;