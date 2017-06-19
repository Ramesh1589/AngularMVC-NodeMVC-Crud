var mongoose = require('mongoose');
var config = require('./environment/developement');
var connectionString = config.databases.mongodb;
mongoose.connect(connectionString);

var mongodb = function(){
    var db = mongoose.connection;
    db.once('open', function(){
        console.log('Database Connected');
    });

    db.on('error', function(err){
        console.log(err);
    });
    //importing models
    require('../server/model/customers.model');
}

module.exports = mongodb;
