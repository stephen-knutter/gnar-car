var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Sign Up'});
});

router.post('/signup', function(req, res, next) {
  var formVars = req.body;

  var username = formVars.username;
  var email = formVars.email;
  var password = formVars.password;
  var confirm  = formVars.confirm;

  if(!username || !email || !password || !confirm){
    return false;
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;
