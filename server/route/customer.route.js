var customerCtrl = require('../controller/customerController');


module.exports = function(app){
    app.post("/api/customers", customerCtrl.createCustomer);
    app.get("/api/customers", customerCtrl.get);
    app.get("/api/customers/:id", customerCtrl.viewCustomer);
    app.put("/api/customers/:id", customerCtrl.editCustomer);
    app.delete("/api/customers/:id", customerCtrl.deleteCustomer);
    
    
};