var express = require('express');
var users = require('../routes/users');
var router = express.Router();
var path = require('path');


router.use('/users', users);



router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../../client/', 'index.html'));
});


module.exports = router;