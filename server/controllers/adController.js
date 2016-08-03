var ad = require('./../models/ad');
var db=require('./../config/mongoconnection');
var path = require('path');
var session = require('express-session');


var adController={};

adController.create=function(req, res,next)
{

    
}



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
module.exports.adController = adController;