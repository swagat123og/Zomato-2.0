const express = require('express');
const router=express.Router();
const authMiddleWare=require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');
const multer=require('multer');

const upload = multer({ 
    storage:multer.memoryStorage()
 })
// (/api/food/) also for protection we used a middleware
router.post('/',authMiddleWare.authFoodPartnerMiddleWare,upload.single("video"),foodController.createFood);

module.exports=router;