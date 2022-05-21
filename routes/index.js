var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/me', (req, res)=>{
  res.json({
    message:'Welcome back to home'
  });
});

module.exports = router;
