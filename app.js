var mongoose = require("./db/mon-files");
var Todo = require("./models/todo");
var User = require("./models/user");
var express = require("express");
const bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/todos", function(req, res){
    var newTodo = new Todo({
       text: req.body.text
    }).save().then(function (data) {
        res.send(data);
    }, function(err){
        res.status(400).send(err);
    });
});

app.get("/todos", function(req, res){
    Todo.find().then(function(data){
        res.send(data);
    }, function(err){
        res.status(400).send(err);
    });
});

app.get("/todos/:id", function(req, res){
   var id = req.params.id;

   if(!ObjectID.isValid(id)){
       return res.status(404).send();
   }

   Todo.findById(id).then(function(data){
       if(!data){
            return res.status(404).send();
       }

       res.send(data);

   }).catch(function(err){
        res.status(400).send();
   });
});

app.listen(3000, function(){
    console.log("Server started...");
});








