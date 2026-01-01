const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
      fullname:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String
      }
},{timestamps:true});
const foodPartnerModel=mongoose.model("foodPartner",foodPartnerSchema);
module.exports=foodPartnerModel;