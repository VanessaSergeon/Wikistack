var express = require('express');
var router = express.Router();
var models = require('../models/');
// var marked = require('marked');

router.get('/:url_name', function(req, res) {
  //we can use req.param.page_title
  //to find from the db
  models.Page.findOne({url_name: req.params.url_name}, function(err, page) {
    res.render('show', {page: page});
  });
});
module.exports = router;
