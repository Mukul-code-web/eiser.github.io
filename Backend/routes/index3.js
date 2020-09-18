const express=require('express');
const router=express.Router();
const ctrlUser=require('../controllers/userControllers');

router.put('/resetpassword',ctrlUser.resetpassword);
module.exports=router;