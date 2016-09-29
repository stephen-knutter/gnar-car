var express = require('express');
var router = express.Router();
var validator = require('validator');
var rides = require('../database/ride.js');
var users = require('../database/user.js');
var mountains = require('../database/mountain.js');
var riders = require('../database/rider.js');
var passport = require('../passport.js');

router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var isLoggedIn = true;
  var user = req.user;
  rides.getRideData()
  .then(function(rideData) {
    return users.isUserInRideID(user.id)
    .then(function(userInRideYN){
      console.log(userInRideYN);
      res.render('rides',
      {username: user.username,
        rideData: rideData,
        user: user,
        loggedIn: isLoggedIn,
        userInRideYN: userInRideYN
      });
    })
  });
});

router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var isLoggedIn = true;
  var user = req.user;
  mountains.findMountains()
  .then(function(mountains) {
    users.findCarByUser(user.id)
    .then(function(data) {
      res.render('offerride', {
        user: user,
        mountains: mountains,
        loggedIn: isLoggedIn,
        data: data
      });
    });
  });
});

router.post('/offer', function(req, res, next) {
  var carID = req.body.carID;
  var mountainID = req.body.mountainID;
  var departureDate = req.body.departureDate;
  var departureTime = req.body.departureTime;
  var returnDate = req.body.returnDate;
  var returnTime = req.body.returnTime;
  var seatsAvailable = req.body.seatsAvailable;
  var costPerSeat = req.body.costPerSeat;
  var meetupLocation = req.body.meetupLocation;
  rides.addRide(carID, mountainID, departureDate, departureTime, returnDate, returnTime, seatsAvailable, costPerSeat, meetupLocation)
  .then(function() {
    res.redirect('/rides');
  });
});

router.get('/:rideID', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var rideID = req.params.rideID;
  var signedInUsersRide;
  rides.getRideDataByRideID(rideID)
  .then(function(rideData){
    if(rideData[0].username === user.username){
      signedInUsersRide = true;
    }
    rides.getCarDataByRideID(rideID)
    .then(function(carData){
      riders.findRidersByRideID(rideID)
      .then(function(riderData){
        rides.getDriverRatingByRideID(rideID)
        .then(function(rating){
          var userRating = Math.round(rating.avg);
          res.render('ride', {rideData: rideData, rideID: rideID, carData: carData, riderData: riderData, rating: userRating, username: user.username, user: user, signedInUsersRide: signedInUsersRide});
        });
      });
    });
  });
});

router.post('/:rideID', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var rideID = req.params.rideID;
  var url = '/rides/' + rideID;
  users.findUser(user.username)
  .then(function(userData){
    var userID = userData[0].id;
    riders.addRiderToRide(rideID, userID)
    .then(function(){
      res.redirect(url);
    });
  });
});

router.post('/:rideID/delete',function(req, res, next){
  rides.deleteRide(req.params.rideID)
  .then(function(){
    res.redirect('/rides');
  });
});

module.exports = router;
