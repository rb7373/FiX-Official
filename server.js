var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

process.on('uncaughtException', function(err) {
	console.log('Error server');
    console.log(err);
});

app.listen(config.port);

console.log('Listening on port: ' + config.port + ' ...');