const express = require('express');
const authcontroller = require('../controllers/auth.controller');
const router=express.Router();

//user auth apis
router.post('/user/register',authcontroller.registerUser);
router.post('/user/login',authcontroller.loginUser);
router.get('/user/logout',authcontroller.logoutUser);

//food-partner auth
router.post('/food-partner/register',authcontroller.RegisterFoodPartner);
router.post('/food-partner/login',authcontroller.loginFoodPartner);
router.get('/food-partner/logout',authcontroller.logoutFoodPartner);

module.exports=router;