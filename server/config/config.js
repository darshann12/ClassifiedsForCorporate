var env = process.env.NODE_ENV || 'development';

var config = module.exports = {};

config.env = env;

config.appPort   = '8000';
config.hostUrl   = 'http://localhost:8000';

config.mongo     = {};
config.mongo.db   = 'cfc';
config.mongo.host = 'localhost';
config.mongo.port = '27017';


module.exports   = config;