var express = require('express');
var router = express.Router();
var path=require('path');
var userController=require('./../controllers/userController');


//POST is create
router.post('/',userController.createUser);

//GET is read
router.get('/',userController.getUser );

//PUT is update
router.put('/', userController.updateUser);

//DELETE is ofcourse delete :-)u
router.delete('/', userController.deleteUser);

router.post('/login',userController.login);

router.post('/logout',userController.logout);

module.exports = router;