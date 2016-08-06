// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

var helpers = require('./app/Components/utils/helpers.js');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

//connection to mongodb
var databaseUrl = 'react';
var collections = ["learnReact"];

var db = mongojs(databaseUrl, collections);

db.on('error', function(err){

	if(err)
		throw err;

	console.log('Connected to DB');
});


// routes
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

app.post('/appdata', function(req, res){



});



// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
