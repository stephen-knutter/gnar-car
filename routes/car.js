var express = require('express');
var router = express.Router();
var users = require('../database/user');
var passport = require('../passport');

router.post('/new', function(req, res, next) {
  var car = req.body;
  console.log(car);
  res.redirect('/users/user1/edit');
  var make = car.make;
  var model = car.model;
  var seats = car.seats;
  var skiracks = car.skiracks;
  var transmission = car.transmission;
  var smoking = car.smoking;
});

module.exports = router;
