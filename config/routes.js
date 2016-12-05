var config = require('./config');
var path = require('path');
var express = require('express');

module.exports = function (app) {

  // Index page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Movies
  app.get('/popular', function (req, res) {
    // Fix this to serve actual data
    res.send('Deez are popular moviezz');
  });

};
