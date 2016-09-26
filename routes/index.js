var express = require('express');
var router = express.Router();
var validator = require('validator');
var users = require('../database/user');
var flash = require('req-flash');

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Sign Up'});
});

router.post('/signup', function(req, res, next) {
  var formVars = req.body;

  var errors = {};
  var username = formVars.username;
  var email = formVars.email;
  var password = formVars.password;
  var confirm = formVars.confirm;

  if (!username || !email || !password || !confirm) return false;

  if (validator.isEmail(email)) {
    errors.email = true;
  }

  if (password !== confirm) {
    errors.password = true;
  }

  if (!validator.isAlphanumeric(username) ||
    (username.length < 5 || username.length > 20)
  ) {
    errors.username = true;
  }

  if (errors) res.send(req.flash({errors}));

  users.getAllUsers().then(function(data) {
    console.log(data);
  });
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
