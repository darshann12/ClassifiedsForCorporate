var transaction = require('./../models/transactions');
var db=require('./../config/mongoconnection');
var path = require('path');
var url = require('url');


var transactionController={};

transactionController.createTransaction= function(req,res){


    transaction.create(
        req.body.transaction
        ,function(err, doc) {
            if (err)
                res.send(err);
            else{
                console.log("transaction completed successfully ");
                res.send(doc);

            }
        });
}

transactionController.updateTransaction = function(req,res){
    var query ={'_id' : req.body.transaction._id};
    transaction.findOneAndUpdate(query, req.body.transaction, {upsert:false}, function(err, doc){
        if(err){
            console.log("some error has occured");
            res.send(err);
        }
        else{
            console.log("data updated");
            res.json(doc);
        }
    }); 


}


transactionController.deleteTransaction =function(req,res){
    transaction.findOneAndRemove({'_id' : req.body.id},function(err){
        if(err){
            console.log(err);   
        }
        else
        {
            console.log("transaction removed successfully");    
        }
    })

}

transactionController.getTransaction = function(req,res){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query._id);
    if (query._id.match(/^[0-9a-fA-F]{24}$/)) {
        transaction.find({'_id': query._id},function(err,docs){
            if(err){
                console.log("error occured while get");
                console.log(err);
            }
            else{
                res.json(docs);    
            }
        })
    }
}

transactionController.searchTransaction = function(req,res){
    var url_parts = url.parse(req.url, true);
    var options = url_parts.query;
    var query = { $or:[{'buyer':options.buyer}, {'seller':options.seller} ]};

    console.log("the option obj"+options.buyer);
    console.log("the option obj"+options.seller);

    /*        if('seller' in options){
    query =  { 'seller' : options.seller }
    }

        if('buyer' in options){
    query =  { 'buyer' : options.buyer }
    }*/





    console.log(query);
    transaction.find(query,function(err,docs){
        if(err){
            console.log("error occured while searching");
            console.log(err);
        }
        else{
            res.json(docs);    
        }

    } )   
}

module.exports = transactionController;