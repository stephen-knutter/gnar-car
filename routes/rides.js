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
  var user = req.user;
  rides.getRideData()
  .then(function(rideData) {
    res.render('rides',
      {username: user.username, rideData: rideData, user: user});
  });
});

router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var destination = req.body.destination
  var user = req.user;

  mountains.findOptionsForRideOffer()
    .then( function(mountains) {
      console.log("user here: ", user.username);
      console.log(mountains);
      console.log(mountains[0].car_id);
      console.log(mountains[1].car_id);
      res.render('offerride', {
        user: user,
        mountains: mountains
      });
    })
    return users
})

router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var destination = req.body.destination
  var user = req.user;
  console.log("user here: ", user.username)


  res.render('offerride', {
    user: user
  })
})



// queries.Rides({
//       title: postTitle,
//       post_body: postEntry,
//       author_id: data[0].uid,
//       postDate: postDate
//     })
//   })
//   .then(function(data) {
//       res.redirect('/users/posts')
//       console.log("Hello")
//   })
//   .catch(function(err) {
//       next(err)
//   })


////


router.get('/:rideID', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var user = req.user;
  var rideID = req.params.rideID;
  rides.getRideDataByRideID(rideID)
  .then(function(rideData){
    rides.getCarDataByRideID(rideID)
    .then(function(carData){
      riders.findRidersByRideID(rideID)
      .then(function(riderData){
        rides.getDriverRatingByRideID(rideID)
        .then(function(rating){
          var userRating = Math.round(rating.avg);
          res.render('ride', {rideData: rideData, carData: carData, riderData: riderData, rating: userRating, username: user.username, user: user});
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

router.get('/mountains/:mountainId', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  var user = req.user;
  rides.getRideDataByMountainId(req.params.mountainId)
  .then(function(rideData) {
    res.render('rides', {username: signedinUser, rideData: rideData, user:user});
  });
});

module.exports = router;
