var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost/customers');

var Customer = mongoose.model('Customer', mongoose.Schema({
    firstName:String,
    lastName: String,
    code: String,
    mobileNumber: Number,
    emailId: String 
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/customers', function(req, res){
    Customer.find(function(err, customers){
        if(err){
            res.send(err);
        }else{
            res.json(customers);
        }
    
    });
});

app.get('/api/customers/:id', function(req, res){
    Customer.findOne({_id:req.params.id},function(err, customer){
        if(err){
            res.send(err);
        }else{
        res.json(customer);
        }
    });
});

app.post('/api/customers', function(req, res){
    Customer.create(req.body, function(err, customers){
        if(err){
            res.send(err);
        }else{
        res.json(customers);
        }
    });
});

app.delete('/api/customers/:id', function(req, res){
    Customer.findOneAndRemove({_id:req.params.id}, function(err, customer){
        if(err){
            res.send(err);
        }else{
        res.json(customer);
        }
    });
});

app.put('/api/customers/:id', function(req, res){
    var query = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        code: req.body.code,
        mobileNumber: req.body.mobileNumber,
        emailId: req.body.emailId
    };
    Customer.findOneAndUpdate({_id:req.params.id}, query, function(err, customer){
        if(err){
            res.send(err);
        }else{            
        res.json(customer);
        }
    });
});

app.listen(3000, function(){
    console.log('Server is listening on port number 3000...');
});
