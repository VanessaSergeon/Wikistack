var express = require('express');
var router = express.Router();
var models = require('../models/');

// router.get('/', function(req, res) {
//   // connect to db and get docs info
//   models.Page.find({}, function(err, docs){
//   res.render('index', { docs: docs });
//   });
// });

router.post('/edit/:id', function(req, res) {
  console.log('this is the console log from edit button', req.body.id);
  models.Page.find({}, function(err, docs){
  res.render('edit', { docs: docs });
  });
  // render page contents to an edit page with a text area
});

router.post('/submitEdit', function(req, res) {
  console.log('this is the console log from edit SUBMIT button', req.body.id);
  // save again
});

module.exports = router;
