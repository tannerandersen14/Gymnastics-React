var express = require('express');

var app = express();

app.use(express.static(__dirname + '/app/dist'));
app.listen(10205, function() {
  console.log('Listening on port ', 10205);
})