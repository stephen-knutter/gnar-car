var express = require('express');
var router = express.Router();
var users = require('../database/user');
var passport = require('../passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username/rides', function(req, res, next) {
  if(!req.isAuthenticated()) return res.redirect('/');
  var user = req.user;

  res.render('rides', {title: user.username + ' | Rides', user: user});
});

router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  if (!username) return res.redirect('/');
  var user;
  if (req.isAuthenticated()) {
    user = req.user;
    res.render('profile', {title: username, user: user});
  } else {
    var findUser = users.findUser(username).then(function(data) {
      user = data[0];
      console.log(user);
      res.render('profile', {title: username, user: user});
    });
  }
});

module.exports = router;
