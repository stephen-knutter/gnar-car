var express = require('express');
var router = express.Router();
var validator = require('validator');
var users = require('../database/user');
var passport = require('../passport');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var rides = require('../database/ride.js');

var auth = expressJWT({secret: process.env.SECRET, userProperty: 'payload'});

router.get('/signup', function(req, res, next) {
  if (req.isAuthenticated()) return res.redirect('/');

  var msg = false;
  if (req.flash()) msg = req.flash();
  res.render('signup', {title: 'Sign Up', msg: msg});
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', {
  // res.redirect('/rides');
  failureRedirect: '/signup',
  successRedirect: '/rides'
}));

router.post('/signup', function(req, res, next) {
  var formVars = req.body;

  var errors = false;
  var username = formVars.username;
  var email = formVars.email;
  var password = formVars.password;
  var confirm = formVars.confirm;

  if (!username || !email || !password || !confirm) return false;

  if (!validator.isEmail(email)) {
    req.flash('email', 'Invalid email');
    errors = true;
  }

  if (password !== confirm) {
    req.flash('password', 'Invalid password');
    errors = true;
  }

  if (!validator.isAlphanumeric(username) ||
    (username.length < 5 || username.length > 20)
  ) {
    req.flash('username', 'Invalid username');
    errors = true;
  }

  if (errors) {
    res.redirect('/signup');
    return;
  }

  users.findUser(username).then(function(data) {
    if (data.length) {
      req.flash('username', 'Invalid username');
      res.redirect('/signup');
      return;
    }

    users.addUser(username, email, password)
    .then(function(data) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/rides');
      });
    });
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = req.user;
  rides.getRideMountainDriverData()
  .then(function(rideData) {
    res.render('index',
      {title: 'GnarCar', rideData: rideData, user: user});
  });
});

module.exports = router;
