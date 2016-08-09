var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session')
var color=require('colors');

var currentSession;

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
    resave : false,
  secret: 'cfc secret',
  cookie: { secure: true },
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}))
app.use(bodyParser.json())
app.use('/', function (req, res, next) {
  console.log(color.green('session:', Object.keys(req.session)));
  next();
});

// parse application/json 

app.use('/', routes);


app.listen(3000, function() {
  console.log('Listening on port 3000...')
})