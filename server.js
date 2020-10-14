var express = require('express');
var cors = require('cors');
var app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/iCrowdTask", {useNewUrlParser:true, useUnifiedTopology: true});
const Task = require("./models/Task");

// ROUTES

app.post('/task', (req,res)=>{ // 
    //console.log("post called "+JSON.stringify(req.body));

    const task = new Task(
        {
            type : req.body.type,
            title : req.body.title,
            description : req.body.description,
            expiry : req.body.expiry,
            requireMaster : req.body.requireMaster,
            reward : req.body.reward,
            workers : req.body.workers,
            question : req.body.question,
            answer : req.body.answer,
            translation : req.body.translation,
            choiceA : req.body.choiceA,
            choiceB : req.body.choiceB,
            choiceC : req.body.choiceC,
        }
    )

    task.save((err) =>{ 
        if (err){
            console.log(err);            
        }
        else{
            console.log("Success!");
        }
    });

    res.json('success') // success

});

// ROUTES END

app.listen(5000, function (request, response){
    console.log("Server is running on 5000");
})