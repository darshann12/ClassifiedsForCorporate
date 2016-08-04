var dbObj = require('./../config/mongoconnection');

var conversationHistorySchema = {
sender : {type: String , required : true}, 
reciever : {type : String, required : true},
product : {type : String, required : true},    
message : { type : String,required : true},
date : { type: Date, default: Date.now }
}

var convObj = new dbObj.Schema(convoSchema,{collection:"conversationHistory",version : false}));

var conversationObj = dbObj.Schema("conversationHistory",transObj);
module.exports = conversationObj;