var mongoose = require('mongoose');
var db = 'mongodb://localhost/socket_chat_db';

module.exports = mongoose.connect(db);