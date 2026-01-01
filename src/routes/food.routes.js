const express = require('express');
const router=express.Router();
const authMiddleWare=require('../middleware/auth.middleware');
const foodController = require('../controllers/food.controller');

// (/api/food/) also for protection we used a middleware
router.post('/',authMiddleWare.authFoodPartnerMiddleWare,foodController.createFood);

module.exports=router;