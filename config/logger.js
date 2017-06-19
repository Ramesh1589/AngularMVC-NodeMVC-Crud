module.exports = function(req, res, next){
    console.log("Request Came from Client");
    next();
}