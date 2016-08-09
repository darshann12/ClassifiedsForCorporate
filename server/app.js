var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session')



app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
app.use('/', routes);

app.use(session({ secret: 'cfc secret', cookie: { maxAge: 60000 }}))




app.listen(3000, function() {
  console.log('Listening on port 3000...')
})