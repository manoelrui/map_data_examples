var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var us_boroughs = require('../public/us-states.json');
  res.render('index', { title: 'USA Choropleth Map', boroughs: us_boroughs });
});

module.exports = router;
