var express = require('express');
var router = express.Router();
var cars = require('../database/car');
var passport = require('../passport');

router.post('/new', function(req, res, next) {
  if (!req.isAuthenticated) res.redirect('/');
  var userId = req.user.id;
  var redirectUrl = '/users/' + req.user.username + '/edit';

  var car = req.body;

  var make = car.make;
  var model = car.model;
  var seats = car.seats;
  var skiracks = car.skiracks;
  var drive = car.drive;
  var smoking = car.smoking;
  var dogs = car.dogs;

  if (!make || !model || !seats ||
    !skiracks || !drive || !smoking ||
    !dogs) {
    req.flash('empty', 'One or more fields blank');

    return res.redirect(redirectUrl);
  }

  cars.insertCar(userId, make, model, seats, skiracks, drive, smoking, dogs)
    .then(function(data) {
      req.flash('success', 'Car successfully added');
      return res.redirect(redirectUrl);
    })
});

module.exports = router;
