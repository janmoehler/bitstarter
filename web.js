#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var infile = "index.html";
var readedbuffer = fs.readFileSync(infile);
var readedstring = readedbuffer.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readedstring);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

