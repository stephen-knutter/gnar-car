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
  rides.getRideMountainDriverData()
  .then(function(rideData) {
    res.render('rides',
      {username: user.username, rideData: rideData, user: user});
  });
});

router.get('/:rideID', function(req, res, next) {
  console.log('Router reached');
});

router.get('/mountains/:mountainId', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  var user = req.user;
  rides.getRideMountainDriverDataByMountainId(req.params.mountainId)
  .then(function(rideData) {
    res.render('rides', {username: signedinUser, rideData: rideData, user:user});
  });
});

module.exports = router;
