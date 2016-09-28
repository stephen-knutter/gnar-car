var express = require('express');
var router = express.Router();
var users = require('../database/user');
var passport = require('../passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username/rides', function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/');
  var user = req.user;

  res.render('rides', {title: user.username + ' | Rides', user: user});
});

router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  if (!username) return res.redirect('/');
  var user;
  var isLoggedIn;
  if (req.isAuthenticated()) {
    isLoggedIn = true;
    user = req.user;
    res.render('profile', {title: username, user: user, loggedIn: isLoggedIn});
  } else {
    users.findUser(username).then(function(data) {
      user = data[0];
      res.render('profile', {title: username, user: user});
    });
  }
});

router.get('/:username/edit', function(req, res, next) {
  var username = req.params.username;
  if (!req.isAuthenticated()) return res.redirect('/');
  if (req.user.username !== username) return res.redirect('/');

  var user = req.user;
  var isLoggedIn = true
  res.render('edit',
    {title: username + 'edit', user: user, loggedIn: isLoggedIn});
});

module.exports = router;
