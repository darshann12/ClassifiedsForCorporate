var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session')
var color=require('colors');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var chatroom = require('./middlewares/chatroom');
onlineUsers={};



//configure multer storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
      var newName= req.session.username+"-"+req.body.name+"-"+file.originalname;
     
    cb(null, newName);
  }
})




app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../client')));
app.use(express.static(path.join(__dirname, './uploads')));

app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
    resave : false,
  secret: 'cfc secret',
  cookie: { secure:false },
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}))
app.use(multer({storage:storage}).any());
app.use(bodyParser.json())
app.use('/', function (req, res, next) {
  console.log(color.green('session:', req.session.username));
  next();
});

// parse application/json 

app.use('/', routes);

chatroom.init(io);



http.listen(3000, function() {
  console.log('Listening on port 3000...')
})