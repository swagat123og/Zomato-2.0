const foodPartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel=require('../models/user.model');



async function authFoodPartnerMiddleWare(req, res, next) {
    const token = req.cookies.token;
    //it is used to chexk wether the partner is loged in or not
    
    if (!token) {
        return res.status(401).json({
            message: "Please Login"
        });
    }

    try{
        //decoding the token using secre key
     const decoded= await jwt.verify(token,process.env.JWT_SECRET);
     // extracting the id from model by using food parter id that we set during login and register;
     const foodpartner = await foodPartnerModel.findById(decoded._id);
     req.foodpartner=foodpartner;
     next();
     
    }catch(err){
      return res.status(401).json({
            message: "Invalid Login"
        });
    }

}

async function authUserMiddleQare(req,res,next){
  const token=req.cookies.token;
  if(!token){
    return res.send(401).json({
        message:"User Not Found Please Login"
    })
  }
  try{

    const decoded=jwt.verify(token,process.env.JWT_SECRET);

    const user=await userModel.findOne(decoded._id);
    req.user=user;
    next();

  }catch(err){
    return res.status(401).json({
        message:"Something Went Wrong"
    })
  }
}

module.exports={
    authFoodPartnerMiddleWare,
    authUserMiddleQare
};