var express = require('express');
var router = express.Router();
var models = require('../models/');

router.get('/', function(req, res) {
  res.render('add');
});

router.post('/submit', function(req, res) {
  var title = req.body.title;
  var body = req.body.body;
  var generateUrlName = function(name) {
    if (typeof name != "undefined" && name !== "") {
      return name.replace(/[\s]/ig,"_").replace(/[^\w]/ig,"");
    } else {
      return Math.random().toString(36).substring(2,7);
    }
  };
  var url_name = generateUrlName(title);
  var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
  p.save();
  res.redirect('/');
});

module.exports = router;
