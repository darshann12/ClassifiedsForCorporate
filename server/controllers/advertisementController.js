var advertisement = require('./../models/advertisement');
var db = require('./../config/mongoconnection');
var path = require('path');
var url = require('url');


var advertisementController ={};

advertisementController.createAdvertisement = function(req,res){
    advertisement.create(req.body.advertisement,function(err,advertisement){
     if(err){
     res.send(err);
     }
        else{
         console.log("the add was created successfully");
            res.json(user);
        }
    });
}

advertisementController.deleteAdvertisement = function(req,res){
advertisement.findOneAndRemove({'_id' : req.body.id},function(err){
if(err){
 console.log(err); 
    res.send(err);
}
    else
    {
    console.log("ad removed successfully");    
    }
})
    
}

advertisementController.updateAdvertisement = function(req,res){
 var query ={'_id' : req.body.advertisement._id};
     user.findOneAndUpdate(query, req.body.advertisement, {upsert:false}, function(err, doc){
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

advertisementController.searchAdvertisement = function(req,res){
    var url_parts = url.parse(req.url, true);
    var options =url_parts.query;
    var query = {};
    if('name' in options){
    query =  { 'name' : options.name }
    }
    
    if('saleType' in options){
        query = {
            'saleType': options.saleType, 
        }
    }
  if('category' in options){
        query = {
            'category' : {"$in" : options.category}, 
        }
    }
  if('dateCreated' in options){
        query = {
            'dateCreated' : {"$gte" : options.dateCreated}, 
        }
    }
    
   if('dateExp' in options){
        query = {
            'dateExp' : {"$gte" : options.dateExp}, 
        }
    }
  if('priceLess' in options){
query = {
    'price' : {"$lte" : options.priceLess}    
}
}
 if('priceGreater' in options){
query = {
    'price' : {"$gte" : options.priceGreater}    
}
}
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
        if (query._id.match(/^[0-9a-fA-F]{24}$/)) {

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
}

module.exports = advertisementController;