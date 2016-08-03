var dbObj = require('./../config/mongoconnection'); //mongoose object required to communicate with database

var adSchema = {
    name:String,
    dateCreated: { type: Date, default: Date.now },
    images:[{
            url:String
            }
            ],
    isOpenForSale:Boolean,
    _creator : { type: Number, ref: 'User' }
    
   
};


var adSchemaObj = new dbObj.Schema(adSchema, {collection:"ad", versionKey: false});  //creates our  schema structure

var adObj       = dbObj.model("ad", adSchemaObj);  //uses the schema created to form our model
module.exports       = adObj;