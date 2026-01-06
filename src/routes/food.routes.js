const express = require('express');
const router=express.Router();
const authMiddleWare=require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');
const multer=require('multer');

const upload = multer({ 
    storage:multer.memoryStorage()
 })
//post (/api/food/) also for protection we used a middleware
router.post('/',
authMiddleWare.authFoodPartnerMiddleWare,
upload.single("video"),
foodController.createFood);


//get (/api/food/) also for protection we used a middleware
router.get('/',
authMiddleWare.authUserMiddleQare,
foodController.getFoodItems);



module.exports=router;

