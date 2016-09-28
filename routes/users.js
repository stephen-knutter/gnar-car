var express = require('express');
var router = express.Router();
var users = require('../database/user');
var rides = require('../database/ride');
var passport = require('../passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username/rides', function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/');
  var user = req.user;

  res.render('rides', {title: user.username + ' | Rides', user: user});
});

router.get('/:username', function(req, res, next) {
  var loggedInUser;
  var username = req.params.username;
  var rating;
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  if(username === user.username){
    loggedInUser = true;
  }
  else {
    loggedInUser = false;
  }
  users.findUser(username)
  .then(function(userData){
    var userID = userData[0].id;
    rides.getRideDataByUserID(userID)
    .then(function(rideData){
      users.getUserRating(userID)
      .then(function(rating){
        rating = Math.floor(rating.avg);
        res.render('profile', {rideData: rideData, userData: userData, loggedIn: loggedInUser, username: username, rating: rating});
      });
    });
  });
});

router.get('/:username/edit', function(req, res, next) {
  var username = req.params.username;
  if (!req.isAuthenticated()) return res.redirect('/');
  if (req.user.username !== username) return res.redirect('/');

  var msg = false;
  if (req.flash()) msg = req.flash();

  var user = req.user;
  var isLoggedIn = true;
  res.render('edit',
    {title: username + 'edit', user: user, loggedIn: isLoggedIn, msg: msg});
});

router.post('/:username/edit', function(req, res, next) {
  var usernameParam = req.params.username;
  var update = req.body;

  var userId = update.user_id;
  var username = update.username;
  var phone = update.phone;
  var email = update.email;
  var address = update.address;
  var city = update.city;
  var state = update.state;
  var zip = update.zipcode;

  if (!userId || !username || !phone || !email ||
      !address || !city || !state || !zip) {
    req.flash('update', 'One or more fields blank');
    return res.redirect('/users/' + usernameParam + '/edit');
  }

  users.updateUser(userId, username, phone, email, address, city, state, zip)
    .then(function(data) {
      var redirectUrl = '/users/' + username + '/edit';
      req.user.username = username;
      res.redirect(redirectUrl);
    });
});
module.exports = router;
