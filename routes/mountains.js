var express = require('express');
var router = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var mountain = require('../database/mountain.js');

/* GET home page. */
router.get('/mountain/:mountainId', function(req, res, next) {
  var conditions;
  var forecast;
  var forecastDescription;
  var weatherCodes = [];
  var weatherIcons = [];

  // mountain.findMountainsById(req.params.mountainId)
  // .then(function(mountainInfo){
    // request(mountainInfo[api_url], function(error, response, body)
    //   if(!error & response.statusCode == 200){
    //     parser.parseString(body, function(err,result){
    //       // res.json({weatherData: result});
    //       res.render('mountains', {mountainInfo: mountainInfo, weatherData:result});
    //     });
    //   }
    // });

    request('http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=ee1b280c-f69d-45a2-8373-6e19cd428117', function(error, response, body){
      if(!error & response.statusCode == 200){
        parser.parseString(body, function(err,result){
          result = result.weather;
          conditions = result.snow_report;
          forecast = result.forecast;
          for (var i = 0; i < forecast.length; i++) {
            weatherCodes.push(Number(forecast[i].day[0].weather_code[0]));
          }
          // Need to make a mountain to get the associated weather Icon
          // for (var j = 0; j < weatherCodes.length; j++) {
          //   mountain.getWeatherIcon(weatherCodes[j])
          //   .then(function(weatherIcon){
          //     weatherIcons.push(weatherIcon);
          //   });
          // }
          weatherIcons = ['/images/weather_icons/Sunny.gif','/images/weather_icons/Sunny.gif','/images/weather_icons/Sunny.gif','/images/weather_icons/Sunny.gif','/images/weather_icons/PartCloudRainThunderDay.gif','/images/weather_icons/Sunny.gif'];

          for (var k = 0; k < forecast.length; k++) {
            forecast[k].weatherIcon = weatherIcons[k];
          }

          res.render('mountains', {weatherData: result, conditions: conditions, forecast: forecast});
        });
      }
    // });
  });

});

module.exports = router;
