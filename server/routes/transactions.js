var express = require('express');
var router = express.Router();
var path=require('path');
var transactionController=require('./../controllers/transactionController');


//POST is create
router.post('/',transactionController.createTransaction);

//GET is read
router.get('/',transactionController.getTransaction );

router.search('/search',transactionController.searchTransaction );

//DELETE is ofcourse delete :-)u
router.delete('/', transactionController.deleteTransaction);

router.get('/search',transactionController.searchTransaction );


module.exports = router;