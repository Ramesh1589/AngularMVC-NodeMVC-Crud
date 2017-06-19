app.controller("myController", function($scope, $route, $routeParams, $http, $filter){
    
     $scope.getCustomers = function(){
        $http.get('/api/customers/').then(function(response){
        $scope.customers = response.data;
            
        });
    };
    
     $scope.showCustomer = function(){
        var id = $routeParams.id;
        $http.get('/api/customers/'+ id).then(function(response){
        $scope.customer = response.data;
            
        });
    };
   
     $scope.addCustomer = function(){
        $http.post('/api/customers/', $scope.customer).then(function(response){
        window.location.href = '#/customers';
            
        });
    };
    
     $scope.updateCustomer = function(){
        var id = $routeParams.id;
        $http.put('/api/customers/'+ id,$scope.customer).then(function(response){
          window.location.href = '#/customers';
            
        });
    };
    
     $scope.deleteCustomer = function(id){
        var id = id;
        $http.delete('/api/customers/'+ id).then(function(response){
        $route.reload()
            
        });
    };
     
        $scope.date = new Date();
        $scope.search=function(){
            $scope.searchQuery = angular.copy($scope.query);
            $scope.customersToFilter = $scope.customers;
            $scope.searchReasult = true;

        }
    
});

