var express = require('express');
var router = express.Router();
var validator = require('validator');
var users = require('../database/user');

router.get('/signup', function(req, res, next) {
  var msg = false;
  if (req.flash) msg = req.flash();
  res.render('signup', {title: 'Sign Up', msg: msg});
});

router.post('/signup', function(req, res, next) {
  var formVars = req.body;

  var username = formVars.username;
  var email = formVars.email;
  var password = formVars.password;
  var confirm = formVars.confirm;

  if (!username || !email || !password || !confirm) return false;

  if (validator.isEmail(email)) {
    req.flash('email', email);
  }

  if (password !== confirm) {
    req.flash('password', true);
  }

  if (!validator.isAlphanumeric(username) ||
    (username.length < 5 || username.length > 20)
  ) {
    req.flash('username', username);
  }

  if (req.flash()) res.redirect('/signup');
  // if (errors) return res.send(req.flash({errors}));
  //
  // users.getAllUsers().then(function(data) {
  //   console.log(data);
  // });
});

router.get('/:signedinUser', function(req, res, next) {
  var signedinUser = req.params.username;

  res.render('signedinUser', {title: signedinUser});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'GnarCar'});
});

module.exports = router;
