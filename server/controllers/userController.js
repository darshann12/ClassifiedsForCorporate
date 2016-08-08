var user = require('./../models/user');
var db=require('./../config/mongoconnection');
var path = require('path');
var url = require('url');


var userController={};

userController.createUser=function(req, res){
       
    user.create(
         req.body.user
            , function(err, user) {
            if (err)
                res.send(err);
            else{
                console.log("user :"+user.firstName+" is saved");
                res.redirect('/');
          
            }
        });

}

userController.getUser = function(req,res,next){
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
console.log(query);
 user.find({'username': query.username},function(err,docs){
 if(err){
 console.log("error occured while searching");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
 })

}


userController.deleteUser = function(req,res){
    var query ={'username' : req.body.username};
    user.remove(query,function(err){
    if(err){
        console.log("could not delete");
    }
        else {
         console.log("deleted"); 
            res.redirect(); //where you want to go 
        }
    
    
    })
    
    
}



userController.updateUser = function(req,res){
    var query ={'username' : req.body.user.username};
  console.log(req.body.user.telephone);
    user.findOneAndUpdate(query, req.body.user, {upsert:false}, function(err, doc){
    if(err){
     console.log("some error has occured");}
    else{
        res.json(req.body.user);
        console.log(doc);
    console.log("data updated");
    }
});
    
}
 
userController.searchUser = function(req,res){
     var url_parts = url.parse(req.url, true);
      var user = url_parts.searchUser;
    var query = {};
    query = {$text : {
    $search : user,
    $caseSensitive : false     
    }}
        user.find(query,function(err,docs){
 if(err){
 console.log("error occured while get");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
 })
    
}


userController.login=function(req, res,next){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
     console.log(password);
     console.log("hello login");
   user.findOne({"username": username },function(err,record){
       if(record)
       {
           console.log(records.password);
           console.log(password);
           if(records.password==password)
           {
               sessionData = req.session;
               sessionData.username = username;
             
           }
  }
    
 });
    
}

userController.logout = function(req,res,next){
  req.session.destroy(function(err){
  if(err){
  console.log(err);}
      else{
       console.log("user logged out successfully");
          res.redirect('/');
          
      }
  })  

}

module.exports = userController;