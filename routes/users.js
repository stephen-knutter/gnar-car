var express = require('express');
var router = express.Router();
var queries = require('../database/user');
var passport = require('../passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/rides/:username', function(req, res, next) {
  if(!req.isAuthenticated()) return res.redirect('/');
  var user = req.user;

  res.render('rides', {title: user.username + ' | Rides', user: user});
});

router.get('/ride/:id', function(req, res, next) {
  var id = req.params.id;
  var user1 = 'user1';

  queries.getAllUsers()
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

module.exports = router;
