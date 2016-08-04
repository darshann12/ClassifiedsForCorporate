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
<<<<<<< HEAD
    isOpenForSale:{type:Boolean,required : true },
    creator : { type: String },
    price : {type:Number ,required: true},
    isNegotiable :{type:Boolean,required : true },
    comments :[{ body: String, 
                 date: Date.now,
                 user : String}]
  };
=======
    isOpenForSale:Boolean,
    _creator : { type: Number, ref: 'user' }
    
   
};
>>>>>>> ca125320403ca690dc167f76ec4ed96d97a5b1a7


var adSchemaObj = new dbObj.Schema(adSchema, {collection:"advertisements", versionKey: false});  //creates our  schema structure

<<<<<<< HEAD
var adObj       = dbObj.model("advertisements", adSchemaObj);  //uses the schema created to form our model
module.exports       = adObj;
=======
var adObj = dbObj.model("ad", adSchemaObj);  //uses the schema created to form our model
module.exports = adObj;
>>>>>>> ca125320403ca690dc167f76ec4ed96d97a5b1a7
