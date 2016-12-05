var config = require('./config');

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.sendFile(config.root + '/index.html');
  });
};
