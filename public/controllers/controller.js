angular.module('contactListApp',[])
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    //dummy data
   person1 = {
       name: 'Tim',
       email:'time@gmail.com',
       number: '(222)-222-222'
   };
   person2 = {
       name: 'Kate',
       email:'kate@gmail.com',
       number: '(333)-333-333'
   };
   person3 = {
       name: 'Jose',
       email:'jode@gmail.com',
       number: '(111)-111-111'
   };
   //adding dummy data to our array
   var contactList = [person1,person2,person3];
   
   //this allow us to use the contact list in the html file using ng-repeat
   $scope.contactList = contactList;
}]);
