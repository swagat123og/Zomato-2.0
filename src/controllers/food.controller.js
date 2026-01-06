const foodModel=require('../models/food.model');
const storageServices =require('../services/storage.service');
const {v4:uuid}=require('uuid');

async function createFood(req,res) {
    const fileUloadResult = await storageServices.uploadFile(req.file.buffer,uuid());
    const foodItem= await foodModel.create({
      name:req.body.name,
      description:req.body.description,
      video:fileUloadResult.url,
      foodPartner:req.user
    })

    res.status(201).json({
        message:"food created succesfuly",
        food:foodItem
    })
}

async function getFoodItems(req,res){
    const foodItems=await foodModel.find({});
    res.status(200).json({
        message:"food viwed succesfuly",
        food:foodItems
    })
}



module.exports={
    createFood,
    getFoodItems
}