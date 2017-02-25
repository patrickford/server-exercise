"use strict";

// Import required modules
var express = require('express');
var bodyParser = require('body-parser');

// Instantiate Express app
var app = express();

// Set /public directory as static web server
app.use(express.static('public'));

// Get middleware for parsing JSON in requests
var jsonParser = bodyParser.json();

// Get route with path parameters
app.get('/name/:first/:last', function(req, res) {
  res.send('My name is ' + req.params.first + ' ' + req.params.last);
});

// POST route with data passed in request object body
app.post('/name', jsonParser, function(req, res) {
  res.json({name: req.body.first + ' ' + req.body.last, location: 'Alameda'})
});

// Listen for events on port 8080 of localhost
app.listen(8080);
console.log("Listening on http://localhost:8080");

/*
CRUD terms: Create  Read  Update  Delete
REST Verbs: POST    GET   PUT     DELETE
*/
