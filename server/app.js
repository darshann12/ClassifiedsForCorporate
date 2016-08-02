var express = require('express');
var app = express();
var routes = require('./routes');



app.use(express.static(__dirname + '../client/assets'));
app.use('/', routes);





app.listen(3000, function() {
  console.log('Listening on port 3000...')
})