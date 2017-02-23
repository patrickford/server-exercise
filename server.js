"use strict";

var express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/name/:first/:last', function(req, res) {
  res.send('My name is ' + req.params.first + ' ' + req.params.last);
})

app.post('/name', jsonParser, function(req, res) {
  console.log(req.body);
  res.json({name: req.body.first + ' ' + req.body.last, location: 'Alameda'})
})

app.listen(8080)
console.log("Listening on http://localhost:8080")

/*
CRUD = Create, Read, Update, Delete

REST Verbs: POST, GET, PUT, DELETE
*/
