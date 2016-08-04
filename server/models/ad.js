var dbObj = require('./../config/mongoconnection'); //mongoose object required to communicate with database

var adSchema = {
    name:{type:String, required : true},
    saleType:{required : true , type: String, 
          enum : ['rent','sell']},
    saleType:{ type: String, 
          enum : ['mobiles','laptops','home applicance','other']},
    dateCreated: { type: Date, default: Date.now },
    dateExp:{type : Date, required : true},
        
    images:[{
            url:String
            }
            ],
    isOpenForSale:{type:Boolean,required : true },
    creator : { type: String },
    price : {type:Number ,required: true},
    isNegotiable :{type:Boolean,required : true },
    comments :[{ body: String, 
                 date: Date.now,
                 user : String}]
  };


var adSchemaObj = new dbObj.Schema(adSchema, {collection:"advertisements", versionKey: false});  //creates our  schema structure

var adObj       = dbObj.model("advertisements", adSchemaObj);  //uses the schema created to form our model
module.exports       = adObj;