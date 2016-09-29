var express = require('express');
var router = express.Router();
var users = require('../database/user');
var rides = require('../database/ride');
var cars = require('../database/car');
var passport = require('../passport');

// Get user's rides
router.get('/:username/rides', function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/');
  var user = req.user;
  var isLoggedIn = true;

  res.render('rides',
    {title: user.username + ' | Rides', user: user, loggedIn: isLoggedIn});
});

// Remove a user from a ride
router.post('/:username/rides/:rideID/delete', function(req, res, next){
  if (!req.isAuthenticated()) return res.redirect('/');
  var username = req.user.username;
  var rideID = req.params.rideID;
  var userID;
  users.findUser(username)
  .then(function(userData){
    userID = userData[0].id;
    rides.deleteRiderInRide(userID,rideID)
    .then(function(){
      res.redirect('/rides');
    });
  });
});

// Get user profile
router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  var rating;
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var isLoggedIn = true;
  var loggedInUser = false;
  if (username === user.username) {
    loggedInUser = true;
  }
  users.findUser(username)
  .then(function(userData) {
    var userID = userData[0].id;
    rides.getRideDataByUserID(userID)
    .then(function(rideData) {
      users.getUserRating(userID)
      .then(function(rating) {
        rating = Math.floor(rating.avg);
        res.render('profile',
          {rideData: rideData,
            userData: userData,
            loggedInUser: loggedInUser,
            loggedIn: isLoggedIn,
            user: user,
            rating: rating});
      });
    });
  });
});

// Edit user profile

router.get('/:username/edit', function(req, res, next) {
  var username = req.params.username;
  if (!req.isAuthenticated()) return res.redirect('/');
  if (req.user.username !== username) return res.redirect('/');

  var msg = false;
  if (req.flash()) msg = req.flash();

  users.findCarByUser(req.user.id)
  .then(function(data) {

    var car = data[0];
    var drives = {};
    drives._awd = drives._fwd = drives._rwd = drives._4wd = false;

    if(car){
      var driveId = car.drive_id;
      switch(driveId) {
        case 1:
        drives._awd = true;
        break;
        case 2:
        drives._fwd = true;
        break;
        case 3:
        drives._rwd = true;
        break;
        case 4:
        drives._4wd = true;
        break;
      }
    }

    var user = req.user;
    var isLoggedIn = true;
    res.render('edit',
      {title: username + 'edit', user: user, car: car, drives: drives, loggedIn: isLoggedIn, msg: msg});
  });
});

router.post('/:username/edit', function(req, res, next) {
  var usernameParam = req.params.username;
  var update = req.body;

  var userId = update.id;
  var username = update.username;
  var password = update.password;
  var phone = update.phone;
  var email = update.email;
  var address = update.address;
  var city = update.city;
  var state = update.state;
  var zip = update.zipcode;

  if (!userId || !username || !phone || !email ||
      !address || !city || !state || !zip) {
    req.flash('usererror', 'One or more fields blank');
    return res.redirect('/users/' + usernameParam + '/edit');
  }
  
  users.updateUser(userId, username, phone, email, address, city, state, zip)
    .then(function(data) {
      req.flash('usersuccess', 'Profile successfully updated');
      req.login(update, function(err) {
        if (err) return next(err);
        return res.redirect('/users/' + req.user.username + '/edit');
      });
    });
});

module.exports = router;
