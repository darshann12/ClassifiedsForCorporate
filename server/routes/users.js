var express = require('express');
var router = express.Router();
var path=require('path');
var userController=require('./../controllers/userController');


//POST is create
router.post('/',userController.createUser);

//GET is read
//router.get('/user', );

//PUT is update
//router.put('/user', );

//DELETE is ofcourse delete :-)u
//router.get('/user', );


module.exports = router;