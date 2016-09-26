var express = require('express');
var router = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

/* GET home page. */
router.get('/mountain/:mountainId', function(req, res, next) {
  var conditions;
  var forecast;
  var forecastDescription;
  var weatherIcon;
  // res.render('mountains');

  // query.findMountainsById(req.params.mountainId)
  // .then(function(mountainInfo){
    // request(mountainInfo[api_url], function(error, response, body){
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
          console.log(forecast);
          // Need to make a query to get the associated weather Icon
          res.render('mountains', {weatherData: result, conditions: conditions, forecast: forecast, forecastDescription: forecastDescription});
          // res.render('mountains', {mountainInfo: mountainInfo, weatherData:result});
        });
      }
    // });
  });

});

module.exports = router;
