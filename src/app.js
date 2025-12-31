const express = require('express');
const app=express();

//it is used so that we can read the data coming from the frontend;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//created the app and send to server to run ;
app.get('/',function(req,res){
    res.send("hello world");
})

module.exports=app;