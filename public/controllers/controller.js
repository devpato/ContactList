angular.module('contactListApp',[])
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/contactList').success(function(response){
        console.log("test of data");
        $scope.contactList = response;
    });
    
    $scope.addConctact = function () {
        console.log($scope.contact);
        //this sends the input data to the server
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log(response);
        });       
        
    };
    
}]);

