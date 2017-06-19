var db = require('./config/mongoose')();
var server = require('./config/express');
var environment = require('./config/environment/developement');

server.listen(environment.port, function(){
    console.log("Server running on port no 3000");
});