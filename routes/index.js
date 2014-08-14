var express = require('express');
var router = express.Router();
var models = require('../models/');

router.get('/', function(req, res) {
  // connect to db and get docs info
  models.Page.find({}, function(err, docs){
  res.render('index', { docs: docs });
  });
});

router.post('/edit', function(req, res) {
  console.log('this is the console log from edit button', req.body);
  // go to an edit page?
});

router.post('/delete', function(req, res) {
  console.log('this is the console log from delete button', req.body);
  models.Page.findByIdAndRemove(req.body.id, function(err, docs) {
    // remove
  });
});

module.exports = router;
