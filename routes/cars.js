var express = require('express');
var router = express.Router();
var cars = require('../database/car');
var passport = require('../passport');

router.post('/update', function(req, res, next) {
  if(!req.isAuthenticated()) return res.redirect('/');
  var update = req.body;

  var carId = parseInt(update.id);
  var make = update.make;
  var model = update.model;
  var seats = parseInt(update.seats);
  var skiracks = parseInt(update.skiracks);
  var dogs = parseInt(update.dogs);
  var drive = parseInt(update.drive);
  var smoking = parseInt(update.smoking);

  cars.updateCar(carId, make, model, seats, skiracks, dogs, drive, smoking).then(function(data) {
    req.flash('carsuccess', 'Car updated successfully');
    return res.redirect('/users/' + req.user.username + '/edit');
  });
});

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
