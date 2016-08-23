var conversationHistory = require('./../models/conversationHistory');
var db = require('./../config/mongoconnection');
var path = require('path');

var conversationHistoryController ={};

conversationHistoryController.updateConversationHistory = function(req,res){

    var convoData = req.body.data
    var query = { '$and' : [ { "sender": convoData.sender },
                            { "reciever" : convoData.reciever} ] };

    message = {'sender' : convoData.sender,
               'reciever' : convoData.reciever,
               'product' : convoData.product,
               'messageData' : {
                   '$inc' : {'count':1},
                   '$addToSet' : { 'message' : convoData.message},
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

conversationHistoryController.deleteConversationHistory = function(req,res){
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

conversationHistoryController.searchConversationHistory = function(req,res){
    var url_parts = url.parse(req.url, true);
    var options = url_parts.options;
    var query = {};

    if('reciever' in options){
        query = {
            'reciever' : options.reciver 
        } 

    }

    if('product' in options){
        query = {
            'product' : options.product 
        } 

    }

    if('keywords' in options){
        query = {
            'message' : {"$regex" : '/'+options.keyboards+'/'}
        } 
    }

    if('dateStart' in options){
        query = {
            'message.date' : {"$gte" : options.dateStart} 
        }
    }

    if('dateEnd' in options){
        query = {
            'message.date' : {"$lte" : options.dateExp} 
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


module.exports = conversationHistoryController;


