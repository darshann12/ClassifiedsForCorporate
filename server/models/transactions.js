var dbObj = require('./../config/mongoconnection'); //mongoose object

var transactionSchema = {
seller : {type: String , required : true}, 
buyer : {type : String, required : true},
price : {type : Number, required : true},
product : {type : String, required : true},   
warrantyDate : {type : Date},
date : { type: Date, default: Date.now }
    }

var transObj = new dbObj.Schema(transactionSchema,{collection:"transactions",version : false});

var transactionObj = dbObj.model("transactions",transObj);
module.exports = transactionObj;