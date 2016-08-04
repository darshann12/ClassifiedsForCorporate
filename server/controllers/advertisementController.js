var advertisement = require('./../models/advertisement');
var db = require('./../config/mongoconnection');
var path = require('path');


var advertisementController ={};

advertisementController.createAdvertisement = function(req,res){
    advertisement.create(req.body.advertisement,function(err,user){
     if(err){
     res.send(err);
     }
        else{
         console.log("the add was created successfully");
            res.redirect('/');
        }
    });
}

advertisementController.deleteAdvertisement = function(req,res){
advertisement.findOneAndRemove({'_id' : req.body.id},function(err){
if(err){
 console.log(err);   
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
     console.log("some error has occured");}
    else{
    console.log("data updated");
    }
}); 
    
    
}

advertisementController.searchAdvertisement = function(req,res){
    var options = req.body.options;
    var query = {};
    
    if('saleType' in options){
        query = {
            saleType : option.saleType, 
        }
    }
  if('category' in options){
        query = {
            category : {"$in" : option.category}, 
        }
    }
  if('dateCreated' in options){
        query = {
            dateCreated : {"$gte" : option.dateCreated}, 
        }
    }
    
   if('dateExp' in options){
        query = {
            dateExp : {"$gte" : option.dateExp}, 
        }
    }
  if('priceLess' in options){
query = {
    price : {"$lte" : option.price}    
}
}
 if('priceGreater' in options){
query = {
    price : {"$gte" : option.price}    
}
}
 advertisement.find(query,function(err,docs){
      if(err){
 console.log("error occured while searching");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
     
 } )   
}

advertisementController.getAdvertisement = function(req,res){
     advertisement.find({'_id': req.body._id},function(err,docs){
 if(err){
 console.log("error occured while get");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
 })
    
}

module.exports = advertisementController;