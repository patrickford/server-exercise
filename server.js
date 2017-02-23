"use strict";

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
var jsonParser = bodyParser.json();

app.get('/name/:first/:last', function(req, res) {
  res.send('My name is ' + req.params.first + ' ' + req.params.last);
});

app.post('/name', jsonParser, function(req, res) {
  res.json({name: req.body.first + ' ' + req.body.last, location: 'Alameda'})
});

app.listen(8080);
console.log("Listening on http://localhost:8080");

/*
CRUD terms: Create  Read  Update  Delete
REST Verbs: POST    GET   PUT     DELETE
*/
