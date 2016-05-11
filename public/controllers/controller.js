angular.module('contactListApp',[])
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/contactList').success(function(response){
        console.log("test of data");
        $scope.contactList = response;
    });
}]);
