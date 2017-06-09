var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/public/assets'));

/* ################################## Call Routes ################################## */
require('./app/routes.js')(app);

app.listen(3000);

