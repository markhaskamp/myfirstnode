var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Eddie would go');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("listening on " + port);
});

