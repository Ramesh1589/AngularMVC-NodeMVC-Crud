var mongoose = require('mongoose');
var customers ={
    firstName:String,
    lastName: String,
    code: String,
    mobileNumber: Number,
    emailId: String 
};

var customerSchema = mongoose.Schema(customers);
mongoose.model('customer', customerSchema);