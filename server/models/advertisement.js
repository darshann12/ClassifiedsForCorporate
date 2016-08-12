var dbObj = require('./../config/mongoconnection'); //mongoose object required to communicate with database

var advertisementSchema = {
    name:{type:String, required : true},
    saleType:{required : true , type: String, 
          enum : ['RENT','SELL']},
    category:{ type: String, 
          enum : ['BOOKS','ELECTRONIC APPLIANCES','FURNITURE','HOUSE','MOBILES TABLETS','VEHICLES']},
    dateCreated: { type: Date, default: Date.now },
    dateExp:{type : Date, required : true},
    description : {type:String, required : true},
        
    images:[{
            url:String
            }
            ],
    creator : { type: String },
    price : {type:Number ,required: true},
    isNegotiable :{type:Boolean,required : true },
    comments :[{ body: String, 
                 date:{ type: Date, default: Date.now },
                 user : String}],
    status:{type:String,enum:['OPEN','CLOSED'],default:'OPEN'}

   

    
   
};



var advertisementSchemaObj = new dbObj.Schema(advertisementSchema, {collection:"advertisements", versionKey: false});  //creates schema 


var advertisementObj      = dbObj.model("advertisements", advertisementSchemaObj);  //uses the schema created to form our model
module.exports       = advertisementObj;


