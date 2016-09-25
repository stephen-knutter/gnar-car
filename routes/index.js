var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

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

module.exports = router;
