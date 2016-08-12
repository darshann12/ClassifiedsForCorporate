var dbObj = require('./../config/mongoconnection'); //mongoose object
var mongoose = require('mongoose');
var transactionSchema = {
seller : {type: String , required : true}, 
buyer : {type : String, required : true},
price : {type : Number, required : true},
product : {type : String, required : true},
status:{type:String,enum:['ACCEPTED','REJECTED','PROCESSING'],required:true,default:"PROCESSING"},
warrantyDate : {type : Date},
date : { type: Date, default: Date.now },
advertisement: {type: mongoose.Schema.Types.ObjectId, ref: 'advertisement'}
    }

var transObj = new dbObj.Schema(transactionSchema,{collection:"transactions",version : false});

var transactionObj = dbObj.model("transactions",transObj);
module.exports = transactionObj;