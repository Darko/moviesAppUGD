var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path');

var mongoose = require('mongoose'),
    config = require('./config/config');

mongoose.connect(config.db);
mongoose.connection.on('error', console.log);

require('./app/models/user');

require('./config/express')(app);
require('./config/routes.js')(app);

app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/views', express.static(path.join(__dirname, 'public/views')));
app.use('/components', express.static(path.join(__dirname, 'public/components')));
app.use('/index.html', express.static(path.join(__dirname, 'public/index.html')));

http.listen(3500, function () {
  console.log('Running on port ' + 3500);
});

require('./app/controllers/user');
