require('dotenv').config();

const app = require('./src/app');
const connectDB=require('./src/db/db');


//funtion call of database 
connectDB();

app.listen(3000,()=>{
    console.log("server is running");
})