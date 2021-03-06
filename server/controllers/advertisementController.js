var advertisement = require('./../models/advertisement');
var db = require('./../config/mongoconnection');
var path = require('path');
var url = require('url');


var advertisementController ={};

advertisementController.createAdvertisement = function(req,res){




    console.log(req.files);
    console.log(req.body);
    var advertisementObj=req.body;
    advertisementObj.creator = req.session.username;
    advertisementObj.images=[];
    advertisementObj.images.push({url:req.files[0].filename});

    advertisement.create(advertisementObj,function(err,advertisement){
        if(err){
            res.send(err);
        }
        else{
            console.log("the add was created successfully");
            res.json(advertisement);
        }
    });
}

advertisementController.deleteAdvertisement = function(req,res){
    console.log( "deleting ad with id "+req.body.id);
    advertisement.findOneAndRemove({'_id' : req.body.id},function(err){
        if(err){
            console.log(err); 
            res.send(err);
        }
        else
        {
            console.log("ad removed successfully");    
            res.send(true);
        }
    })

}

advertisementController.updateAdvertisement = function(req,res){
    var query ={'_id' : req.body.advertisement._id};
    advertisement.findOneAndUpdate(query, req.body.advertisement, {upsert:false}, function(err, doc){
        if(err){
            console.log("some error has occured");
            res.send(err);
        }
        else{
            console.log("in updateAdvertisement"+req.body.advertisement);
            console.log("data updated"+doc);
            res.json(doc);
        }
    }); 


}

advertisementController.searchAdvertisement = function(req,res){
    var url_parts = url.parse(req.url, true);
    var options =url_parts.query;
    var query = {};
    if('name' in options){
        query =  { 'name' :{ "$regex": options.name, "$options": "i" } }
    }
    if('upperPriceLimit' in options){
        query.price={$lte:options.upperPriceLimit}
    }
    if('category' in options){
        query.category=options.category;
    }
    if('saleType' in options){
        query.saleType=options.saleType;
    }
    if('isNegotiable' in options){
        query.isNegotiable=options.isNegotiable;
    }
    query.status="OPEN";


    console.log(options);
    console.log(query);
    advertisement.find(query).limit(options.limit).exec(function(err,docs){
        if(err){
            console.log("error occured while searching");
            console.log(err);
            res.send(err)
        }
        else{
            res.json(docs);    
        }

    } )   
}

advertisementController.getAdvertisement = function(req,res){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;


    advertisement.find({'_id': query._id},function(err,docs){
        if(err){
            console.log("error occured while get");
            console.log(err);
        }
        else{
            res.json(docs);    
        }
    })

}


advertisementController.getUserAdvertisements = function(req,res){

    var username = req.session.username;
    advertisement.find({'creator': username},function(err,docs){
        if(err){
            console.log("error occured while getting myAdvertisements");
            console.log(err);
        }
        else{
            res.json(docs);    
        }
    })

}
module.exports = advertisementController;