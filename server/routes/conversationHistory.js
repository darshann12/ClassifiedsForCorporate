var express = require('express');
var router = express.Router();
var path=require('path');
var conversationHistoryController=require('./../controllers/conversationHistoryController');


//POST is create
router.post('/',conversationHistoryController.updateConversationHistory);

//GET is read
router.get('/',conversationHistoryController.searchConversationHistory );

//PUT is update
router.put('/', conversationHistoryController.updateConversationHistory);

//DELETE is ofcourse delete :-)u
router.delete('/', conversationHistoryController.deleteConversationHistory);



module.exports = router;x