var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/interno', function(req, res) {
  res.render('interno', { title: 'interno' });
});
module.exports = router;
