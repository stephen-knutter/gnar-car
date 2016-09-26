var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mountain/:mountainId', function(req, res, next) {
  // query.findMountainsById(req.params.mountainId)
  // .then(function(mountainInfo){
  //   res.render('mountains', {mountainInfo: mountainInfo});
  // });
  // Placeholder until database is set up
  res.render('mountains');
});

module.exports = router;
