var express = require('express');
var router = express.Router();
var validator = require('validator');

router.get('/rides', function(req, res, next) {
  if(!req.isAuthenticated()){
    res.redirect('/login');
    return;
  }
  var signedinUser = req.params.username;
  res.render('signedinUser', {title: signedinUser});
});
