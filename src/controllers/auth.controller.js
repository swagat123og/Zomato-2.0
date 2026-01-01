const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

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

    // after finding that user not exist we gash the password
    const hashedPassword=await bcrypt.hash(password,10);


    // then we create a user
    const user = await userModel.create({
        fullname,
        email,
        password:hashedPassword
    });
    // cookie is generated and saved
    const token=await jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET);
   
    res.cookie("token",token);
//    we are sending these to front end
    res.status(201).json({
        messsage:"User Registered Succesfully"
        ,user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname 
        }
    })
}

async function loginUser(req,res) {
   const{email,password}=req.body;
     //finding the user on the basis of email
    const user = await userModel.findOne({email});

    //funtion to check wether the user exist or not
    if(!user){
        return res.status(400).json({
            messsage:"Invalid Email Or Password"
        })
    };
   // after finding that user exist we compare the password
    const isPassWordValid = await bcrypt.compare(password,user.password);
    
    if(!isPassWordValid){
      return res.status(400).json({
            messsage:"Invalid Email Or Password"
        })  
    }

     // cookie is generated and saved
    const token=await jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token);
    //    we are sending these to front end
    res.status(200).json({
        messsage:"User LoggedIn Succesfully"
        ,user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname 
        }
    })

}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User Logged Out Succesfully"
    })
}

module.exports={
   registerUser,
   loginUser,
   logoutUser
};