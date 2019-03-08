const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// models
let BatterProjections = require('../models/batterProj');
let PitcherProjections = require('../models/pitcherProj');

// ==============================
// REMEMBER TO ADD ENSUREAUTHENTICATED MIDDLEWARE TO ROUTES BEFORE PUSHING TO HEROKU
//===============================

