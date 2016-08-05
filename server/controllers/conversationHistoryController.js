var conversationHistory = require('./../models/conversationHistory');
var db = require('./../config/mongoconnection');
var path = require('path');

var conversationHistoryController ={};

conversationHistoryController.updateConversationHistory = function(req,res){
    
    var convoData = req.body.data
var query = {{ '$and' : [ { "sender": convoData.sender },
                                { "reciever" : convoData.reciever} ] }};

message = {'sender' : convoData.sender,
           'reciever' : convoData.reciever,
           'product' : convoData.product,
           'messageData' : {
               { '$inc' : {'count':1}},
               { '$addToSet' : { 'message' : convoData.message}},
            }
}
          
                                
conversationHistory.update(query,message,{upsert:true},function(err, doc){
    if(err){
     console.log("some error has occured");}
    else{
    console.log("data updated");
    }
});
}

conversationHistory.deleteConversationHistory = function(req,res){
    conversationHistory.findOneAndRemove({'_id' : req.body.id},function(err){
if(err){
 console.log(err);   
}
    else
    {
    console.log("History deleted successfully");    
    }
})

}

conversationHistory.searchConversationHistory = function(req,res){
    var options = req.body.options;
    var query = {};
    
    if('dataStart' in options){
        query = {
            'message.date' : {"$gte" : option.dateStart}, 
        }
    }
    
   if('dateEnd' in options){
        query = {
            'message.date' : {"$lte" : option.dateExp}, 
        }
    }
    
     conversationHistory.find(query,function(err,docs){
      if(err){
 console.log("error occured while searching");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
     
 } ) 
}



    
    