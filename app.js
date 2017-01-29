var mongoose = require("./db/mon-files");
var Todo = require("./models/todo");
var User = require("./models/user");
var express = require("express");
const bodyParser = require("body-parser");

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

app.listen(3000, function(){
    console.log("Server started...");
});








