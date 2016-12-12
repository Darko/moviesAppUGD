var config = require('./config');
var path = require('path');
var express = require('express');
var controller = require('../app/controllers/resources');

module.exports = function (app) {

  // Index page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Movies
  app.get('/api/popular', controller.index);
  app.get('/api/:resource', controller.show);
  app.post('/api/resource', controller.create);
  app.delete('/api/:resource', controller.remove);

};
