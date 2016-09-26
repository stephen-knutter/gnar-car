var express = require('express');
var router = express.Router();
var validator = require('validator');

router.get('/:username', function(req, res, next) {
  if(!req.isAuthenticated()){
    res.redirect('/signup');
    return;
  }
  var signedinUser = req.params.username;
  res.render('signedinUser', {title: signedinUser});
});

module.exports = router;
