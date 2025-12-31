const express = require('express');
const app=express();
const cookie_parser=require('cookie-parser');
const authRoutes=require('./routes/auth.routes');


//it is used so that we can read the data coming from the frontend;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookie_parser());

//created the app and send to server to run ;
app.get('/',function(req,res){
    res.send("hello world");
})
//declare it by require it from routes then 
//want to use in post man so then after
//baseurl/api/auth/user/login then it work
app.use('/api/auth',authRoutes);

module.exports=app;