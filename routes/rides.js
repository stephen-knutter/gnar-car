var express = require('express');
var router = express.Router();
var validator = require('validator');
var rides = require('../database/ride.js');
var users = require('../database/user.js');
var mountains = require('../database/mountain.js')
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

router.get('/offer', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  var destination = req.body.destination
  var user = req.user;

  mountains.findMountains()
    .then( function(mountains) {
      console.log("user here: ", user.username)
      console.log(mountains.name)
      res.render('offerride', {
        user: user,
        mountains: mountains
      })
    })
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


router.get('/:rideID', function(req, res, next) {
  console.log('Router reached');
// Added this lines just for reference
// Will have to correct functionality
  var rideID = req.params.rideID;
  users.getAllUsers()
    .then(function(data) {
      console.log(data);
      res.render('ride', {
        data: data
      });
    })
    .catch(function(err) {
      next(err);
    });
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
