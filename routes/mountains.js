var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:mountainName', function(req, res, next) {
  res.render('mountains');
});

module.exports = router;
