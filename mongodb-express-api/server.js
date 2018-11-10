const express = require('express')
const srv = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test_db")
srv.use(express.urlencoded({extended: true}))

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

const Person = mongoose.model("Person", personSchema);

srv.get('/',(req,res)=>{
    Person.find({}, function(err, persons){
        if(err){
            console.log("OH NO, ERROR!");
            console.log(err);
        } else {
            res.send(persons)
        }
   });
})

srv.post('/',(req,res)=>{
    Person.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
     }, function(err, person){
         if(err){
             console.log(err);
         } else {
             res.redirect('/')
         }
     });
})

srv.listen(3000,()=>{
    console.log('The server is running on http://localhost:3000/')
})
