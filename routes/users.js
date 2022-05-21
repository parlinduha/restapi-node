var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is homepage users');
});
router.get('/admin', (req, res, next) => {
  res.send('this is homepage Admin');
});



module.exports = router;
