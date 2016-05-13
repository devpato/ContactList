var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('mongodb://user:pass@ds021172.mlab.com:21172/contactlist',['contactlist']);
/*db.contactlist.find(function(req,res){
    console.log(docs);
    res.json(docs);    
});*/

/*app.get('/',function(req,res){
    res.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.get("/contactList", function (req, res, next) {
    db.contactlist.find(function (err, docs) {
       console.log(docs);
       res.json(docs);  
    });
    //return next();
});
app.post('/contactList',function(req,res){
    console.log(req.body);
    db.contactlist.insert(req.body,function(err,doc){
       res.json(doc); 
    });
});
app.delete('/contactList/:id',function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({'_id': mongojs.ObjectID(id)},function(err,doc){
      res.json(doc);

  });
});
//Setting up router for our contactList
/*app.get('/contactlist',function(req,res){
    console.log("I received a GET REQUEST");
    //dummy data for contactList
    //export PATH=$PATH:/usr/local/mongodb/bin if can't run mongoDB
    
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
    
 });*/
app.listen(3000);
console.log("Server running on por:3000");