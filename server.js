var express = require('express');
var app = express();

/*app.get('/',function(req,res){
    res.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + '/public'));

//Setting up router for our contactList
app.get('/contactList',function(req,res){
    console.log("I received a GET REQUEST");
    //dummy data for contactList
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

    var contactList = [person1,person2,person3];
    //response to the get request see it in JSON format
    res.json(contactList);
 });
app.listen(3000);
console.log("Server running on por:3000");