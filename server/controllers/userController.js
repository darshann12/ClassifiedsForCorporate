var user = require('./../models/user');
var db=require('./../config/mongoconnection');
var path = require('path');



var userController={};

userController.createUser=function(req, res){
    
    console.log(req.body);
    
    //object.save can be used as a alternative

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
 user.find({'username ': req.body.username},function(err,docs){
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
//    user.findOne(query,function(err,doc){
//     if(err){
//     console.log("some error has occured");}
//    else{
//    doc = req.body.user;    
//    user.save(doc); 
//    }
//        
//    })
    
    user.findOneAndUpdate(query, req.body.user, {upsert:false}, function(err, doc){
    if(err){
     console.log("some error has occured");}
    else{
    console.log("data updated");
    }
});
    
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