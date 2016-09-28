var express = require('express');
var router = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var mountain = require('../database/mountain.js');

/* GET mountain page page. */
router.get('/', function(req, res, next) {
  res.render('mountains', {title: 'Ski Mountains | GnarCar'});
});

router.get('/:mountainId', function(req, res, next) {
  var api_url;
  var conditions;
  var forecast;
  var forecastDescription;
  var weatherCodes = [];
  var allIcons;
  var weatherIcons = [];
  var user = req.user;

  mountain.findMountainsById(req.params.mountainId)
  .then(function(mountainInfo){
    api_url = mountainInfo[0].api_url;
    request(api_url, function(error, response, body){
      if (!error & response.statusCode == 200) {
        parser.parseString(body, function(err, result){
          result = result.weather;
          conditions = result.snow_report;
          forecast = result.forecast;
          for (var i = 0; i < forecast.length; i++) {
            weatherCodes.push(Number(forecast[i].day[0].weather_code[0]));
            forecast[i].day_max_temp[0] = Math.floor(forecast[i].day_max_temp[0] * (9/5)) + 32;
            forecast[i].night_min_temp[0] = Math.floor(forecast[i].night_min_temp[0] * (9/5) + 32);
          }
          mountain.getAllIcons()
          .then(function(data){
            for (var j = 0; j < weatherCodes.length; j++) {
              for (var k = 0; k < data.length; k++) {
                if(data[k].id == weatherCodes[j]){
                  weatherIcons.push(data[k].icon);
                }
              }
            }
          })
          .then(function() {
            for (var k = 0; k < forecast.length; k++) {
              forecast[k].weatherIcon = weatherIcons[k];
            }

            res.render('mountains',
            {mountainInfo: mountainInfo,
            weatherData: result,
            conditions: conditions,
            forecast: forecast,
            user: user});
          });
        });
      }
    });
  });
});

router.get('/:mountainId/rides', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.user.username;
  var user = req.user;
  rides.getRideDataByMountainId(req.params.mountainId)
  .then(function(rideData) {
    res.render('rides',
      {username: signedinUser, rideData: rideData, user: user});
  });
});

module.exports = router;
