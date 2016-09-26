var express = require('express');
var router = express.Router();
var validator = require('validator');
var rides = require('../database/ride.js');

router.get('/:username', function(req, res, next) {
  if(!req.isAuthenticated()){
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  rides.getRides()
  .then(function(rideData){
    // Need to add rideData to render function
    res.render('signedinUser', {title: signedinUser});
  });
});

router.get('/mountain/:mountainId/rides', function(req, res, next){
  if(!req.isAuthenticated()){
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  rides.getRidesByMountainId(req.params.mountainId)
  .then(function(rideData){
    // Need to add rideData to render function
    res.render('signedinUser', {title: signedinUser});
  });
});

module.exports = router;
