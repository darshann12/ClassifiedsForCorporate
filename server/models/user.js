var dbObj = require('./../config/mongoconnection'); //mongoose object required to communicate with database
var mongoose = require('mongoose');
var userSchema = {
    _id : Number,
    firstName: String,
	lastName: String,
    username: String,
    password: String,
	telephone: String,
	address: String,
	email: String,
    ads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ad' }]
};


var userSchemaObj = new dbObj.Schema(userSchema, {collection:"user", versionKey: false});  //creates our  schema structure

var userObj       = dbObj.model("user", userSchemaObj);  //uses the schema created to form our model
module.exports       = userObj;


