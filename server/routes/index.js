var express = require('express');
var router = express.Router();
var path = require('path');
var users = require('../routes/users');
var advertisements = require('../routes/advertisements');
var conversationHistory = require('../routes/conversationHistory');
var transactions = require('../routes/transactions');
var userController = require('../controllers/userController');

router.use('/users', users);
router.use('/advertisements', advertisements);
router.use('/conversationHistory', conversationHistory);
router.use('/transactions', transactions);

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/', 'index.html'));
});

router.get('/isloggedin', userController.isLoggedIn);


module.exports = router;