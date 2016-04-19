var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var io = require('socket.io').listen(server);

var app = express();

var PORT = process.env.PORT || 3000;

//middleware
app.use(logger('dev'));
app.use(express.static('public'));

//routes
var routes = require('./controllers/router.js');
app.use('/', routes);

//connection
app.listen(PORT, function(){
  console.log("listening on", PORT);
});