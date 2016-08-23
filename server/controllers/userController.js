var user = require('./../models/user');
var db=require('./../config/mongoconnection');
var path = require('path');
var url = require('url');


var userController={};

userController.createUser=function(req, res){
    console.log(req.body.user);
    user.create(
        req.body.user
        , function(err, user) {
            if (err)
                res.send(err);
            else{
                console.log("user :"+user.firstName+" is saved");
                res.json(user);

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
    console.log(req.session);

    if(req.session.username){
        var query ={'username' : req.body.user.username};
        console.log(req.body.user.mobile);
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
    else{

        res.send("session does not exist");   
    }
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
    var loginObject = req.body.loginObject;
    console.log(loginObject.username);
    console.log(loginObject.password);
    var query={};
    query={"$and" : [{"username" :loginObject.username},{"password" : loginObject.password}]};
    user.findOne(query,function(err,record){



        if(!err) {
            console.log("fetched record:"+record);
            if(!record){
                console.log("login failed");
                res.send("login failed");
            }else{


                req.session._id=record._id;
                req.session.username = record.username;
                console.log("logged in successfully session username:"+req.session.username);

                res.send(req.session.username);
            }


        }

        else{
            console.log("login failed");
            res.send("login failed");

        }


    });

}

userController.logout = function(req,res,next){
    console.log("loggin out"+req.session.username);
    req.session.destroy(function(err){
        if(err){
            console.log(err);}
        else{
            console.log("user logged out successfully");
            res.send("loggedOut");

        }
    })  

}


userController.isUsernameAvailable =function(req,res){
    var url_parts = url.parse(req.url, true);
    var checkUsername = url_parts.Username;
    user.find({"username" : checkUsername},{"_id":0,"username":1}).limit(1).exec(function(err,doc){
        if(err){
            res.send(err);
            console.log("failed to query the db for data");
        }
        else{
            if(doc.length >=1){
                res.send(false);   
                console.log("the username is already taken");
            }
            else {
                res.send(true);   
            }
        }
    })

}


userController.isEmailAvailable = function(req,res){
    var url_parts = url.parse(req.url, true);
    var checkEmail = url_parts.email;
    user.find({"email" : checkEmail},{"_id":0,"email":1}).limit(1).exec(function(err,doc){
        if(err){
            res.send(err);
            console.log("failed to query the db for data");
        }
        else{
            if(doc.length >=1){
                res.send(false);   
                console.log("the email is already registered");
            }
            else {
                res.send(true);   
            }
        }
    })


}


userController.isMobileExists = function(req,res){
    var url_parts = url.parse(req.url, true);
    var checkMobile = url_parts.mobile;
    user.find({"mobile" : checkMobile},{"_id":0,"mobile":1}).limit(1).exec(function(err,doc){
        if(err){
            res.send(err);
            console.log("failed to query the db for data");
        }
        else{
            if(doc.length >=1){
                res.send(false);   
                console.log("the mobile is already registered");
            }
            else {
                res.send(true);   
            }
        }
    })


}

userController.isLoggedIn = function(req,res){

    if(req.session){

        console.log("Checking is user logged in"+req.session.username);

    }
    else{
        res.send(false);
    }

    if(req.session.username){
        res.send(true);
    }
    else{
        res.send(false);
    }


}


module.exports = userController;