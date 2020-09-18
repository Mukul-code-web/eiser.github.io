const express=require('express');
const router=express.Router();
const ctrlUser=require('../controllers/userControllers');

router.post('/authenticate',ctrlUser.authenticate);



module.exports=router;
