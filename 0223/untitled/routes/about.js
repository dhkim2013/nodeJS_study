var express = require('express');
var router = express.Router();
var jsondata = require('../jdata.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'about', name : 'aboutpage', jdata : jsondata });
});

module.exports = router;
