var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes.js')(app, express);

var port = process.env.PORT || 8000;

// start listening to requests on port 8000
app.listen(port);
console.log('HenryLyford.com listening on ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;
