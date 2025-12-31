const mongoose = require('mongoose');
//Creating The Server
function connectDB(){
    mongoose.connect('mongodb://localhost:27017/Food-delivery')
    .then(()=>{
        console.log("Database connected Succesfullly");
    })
    .catch((err)=>{
        console.log(err);
    })
}
//Send to Server.js to run and connect the Database
module.exports=connectDB;