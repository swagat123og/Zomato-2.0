const foodPartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

module.exports={
    authFoodPartnerMiddleWare
};