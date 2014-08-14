var express = require('express');
var router = express.Router();
var models = require('../models/');

router.get('/', function(req, res) {
  // connect to db and get docs info
  models.Page.find({}, function(err, docs){
  res.render('index', { docs: docs });
  });

});

module.exports = router;
