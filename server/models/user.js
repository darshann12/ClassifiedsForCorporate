var dbObj = require('./../config/mongoconnection'); //mongoose object required to communicate with database
var userSchema = {
    firstName:{type:String, required : true},
	lastName: {type:String, required : true},
    username: {type:String, required : true,unique : true},
    password: {type:String, required : true},
	mobile: {type:Number,required : true,unique : true},
	address: {type:String, required : true},
	email: {type:String, required : true,unique : true},
    ads: [{ type: Number , unique : true }],
    ratings:[{rate : {type:Number},
             byUser : {type:String}}]
};


var userSchemaObj = new dbObj.Schema(userSchema, {collection:"user", versionKey: false});  //creates our  schema structure

var userObj       = dbObj.model("user", userSchemaObj);  //uses the schema created to form our model
module.exports       = userObj;


