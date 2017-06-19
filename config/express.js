//loading express modules..

var express = require('express');
var logger = require('./logger');
var bodyParser = require('body-parser');
var path = require("path");


var app = express();
app.use(logger);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var publicDir = path.resolve("../", "app");
console.log(publicDir);
app.use(express.static(publicDir+"/client"));
app.set("view engine", 'html');; 

//importing Routes
//require('../server/route/index.route')(app);
require('../server/route/customer.route')(app);
module.exports = app;