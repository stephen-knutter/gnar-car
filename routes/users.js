var express = require('express');
var router = express.Router();
var queries = require("../database/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/rides/:username', function(req, res, next) {
  var username = req.params.username;

  res.render('rides', {title: username});
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
