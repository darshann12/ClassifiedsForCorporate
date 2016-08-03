var user = require('./../models/user');
var db=require('./../config/mongoconnection');
var path = require('path');
var session = require('express-session');


var userController={};

userController.registeruser=function(req, res,next)
{
    console.log('inRegisterUser');
    console.log(req.body);
    
    //object.save can be used as a alternative
  user.find({username : req.body.username},function(err,docs){
  if(docs.length == 0){
        user.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            username : req.body.username,
            password : req.body.password,
            telephone:req.body.telephone,
            address:req.body.address,
            email:req.body.email, 
            accessid: '0'
            }, function(err, user) {
            if (err)
                res.send(err);
            else{
                console.log("user :"+user.firstName+" is saved");
                res.redirect('/');
          
            }});
  }
  else {
  console.log("usename is already taken");
                      res.redirect('/'); //resend to certain url
 }
  
  })
  
    
}


userController.login=function(req, res,next)
{
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


userController.findUsers = function(req,res,next){
 user.find({'name' : req.body.name},function(err,docs){
 if(err){
 console.log("error occured while searching");
     console.log(err);
 }
     else{
      res.json(docs);    
     }
 })

}

module.exports.userController = userController;