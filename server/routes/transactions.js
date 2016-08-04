var express = require('express');
var router = express.Router();
var path=require('path');
var transactionController=require('./../controllers/transactionController');


//POST is create
router.post('/',transactionController.createTransaction);

//GET is read
router.get('/',transactionController.searchTransaction );

//PUT is update
router.put('/', transactionController.updateTransaction);

//DELETE is ofcourse delete :-)u
router.delete('/', transactionController.deleteTransaction);



module.exports = router;