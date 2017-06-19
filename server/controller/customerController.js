var customerCtrl = {};
var Customer = require('mongoose').model('customer')

customerCtrl.get = function(req, res){
    Customer.find(function(err, customers){
        if(err){
            res.send(err);
        }else{
            res.json(customers);
        }
    
    });
};
customerCtrl.viewCustomer = function(req, res){
    Customer.findOne({_id:req.params.id},function(err, customer){
        if(err){
            res.send(err);
        }else{
        res.json(customer);
        }
    });
};
customerCtrl.createCustomer = function(req, res){
    Customer.create(req.body, function(err, customers){
        if(err){
            res.send(err);
        }else{
        res.json(customers);
        }
    });
};

customerCtrl.deleteCustomer = function(req, res){
    Customer.findOneAndRemove({_id:req.params.id}, function(err, customer){
        if(err){
            res.send(err);
        }else{
        res.json(customer);
        }
    });
};

customerCtrl.editCustomer = function(req, res){
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
};


module.exports = customerCtrl;