var express = require('express');
var router = express.Router();
var validator = require('validator');
var rides = require('../database/ride.js');
var users = require('../database/user.js');
var passport = require('../passport.js');

router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  rides.getRides()
  .then(function(rideData) {
    // Need to add rideData to render function
    console.log(rideData);
    res.render('rides', {username: req.user.username, user: user});
  });
});

router.get('/mountain/:mountainId/rides', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  rides.getRidesByMountainId(req.params.mountainId)
  .then(function(rideData) {
    // Need to add rideData to render function
    res.render('rides', {title: signedinUser});
  });
});

module.exports = router;
