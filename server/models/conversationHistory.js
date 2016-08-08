var dbObj = require('./../config/mongoconnection');

var conversationHistorySchema = {
sender : {type: String , required : true}, 
reciever : {type : String, required : true},
product : {type : String, required : true},    
messageData :{ 
    count : {type : Number , required : true},
    message : { type : String,required : true},
    date : { type: Date, default: Date.now }
             
             }
             }

var conversationShemaObj = new dbObj.Schema(conversationHistorySchema,{collection:"conversationHistory",version : false});

var conversationObj = dbObj.model("conversationHistory",conversationShemaObj);
module.exports = conversationObj;