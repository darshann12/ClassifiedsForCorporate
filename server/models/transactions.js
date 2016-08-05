var dbObj = require('./../config/mongoconnection'); //mongoose object

var transactionSchema = {
seller : {type: String , required : true}, 
buyer : {type : String, required : true},
price : {type : Number, required : true},
warrantyDate : {type : Date},
date : { type: Date, default: Date.now }
    }

var transObj = new dbObj.Schema(transactionSchema,{collection:"transactionHistory",version : false});

var transactionObj = dbObj.model("transactionHistory",transObj);
module.exports = transactionObj;