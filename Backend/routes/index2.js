const express=require('express');
const router=express.Router();
const ctrlUser=require('../controllers/userControllers');

router.put('/forgotpassword',ctrlUser.forgotpassword);
module.exports=router;