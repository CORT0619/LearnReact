// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

var = express();
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
	console.log('MongoDB Error: ', err);
});


// routes
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});
