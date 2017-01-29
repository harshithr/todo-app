const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/todo-app", function(err, db){
    if(err){
        console.log(err + "Unable to connect to server");
    }else {
        console.log("Connected to server");
    }

    ad.collection("todos").insertOne({
        text: "Something to do",
        completed: false
    })

    db.close();
});

