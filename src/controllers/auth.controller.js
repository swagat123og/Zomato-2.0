const userModel=require('../models/user.model');

async function registerUser(req,res) {
    const{fullname,email,password}=req.body;

    //finding the user on the basis of email
    const userExistAllready = await userModel.findOne({email});

    //funtion to check wether the user exist or not
    if(userExistAllready){
        return res.status(400).json({
            messsage:"User Already Exists"
        })
    };


    
}