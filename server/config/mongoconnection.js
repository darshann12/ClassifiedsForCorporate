/**
 * Sets the database connection using mongoose.
 * @type {exports}
 */

var mongoose = require('mongoose');
var config   = require('./../config/config');
var db       = mongoose.connection;
var connectionInstance;

/*IF ALREADY WE HAVE A CONNECTION, DO NOT CONNECT TO DATABASE AGAIN*/
if(connectionInstance) {
    module.exports = connectionInstance;
    return;
}

connectionInstance  =  mongoose.connect(config.mongo.ConnectionUrl);

/*HANDLE CONNECTION ERRORS*/
db.on('error', function (err) {
    if(err) {
        throw err;
    }
});

/*IF DATABASE IS CONNECTED*/
db.once('open', function() {
    console.log("MongoDb connected successfully");
});


module.exports = connectionInstance;




