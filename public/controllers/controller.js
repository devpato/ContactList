angular.module('contactListApp',[])
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function(){
        $http.get('/contactList').success(function(response){
            console.log("test of data");
            $scope.contactList = response;
            $scope.contact = "" ;
        });
    };
    refresh();
    

    $scope.addConctact = function () {
        console.log($scope.contact);
        //this sends the input data to the server
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log(response);
            refresh();
        });       
        
    };
    $scope.remove = function (id) {
        console.log(id);
        //this sends the input data to the server
        $http.delete('/contactList/' + id).success(function(response){
            refresh();
        });        
    };
    
}]);

