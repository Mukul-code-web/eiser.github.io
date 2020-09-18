const express=require('express');
var router=express.Router();
var Comment=require('../models/comment');


const multer = require('multer');
const path = require('path');
var Storage=multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});
 var upload=multer({
     storage:Storage
 }).single('image');

router.get('/',function(req,res){
  Comment.find(function(err,docs){
      if(!err){
          res.send(docs);
      }
      else{
          console.log('Error in Retriving Comment : ' +JSON.stringify(err,undefined,2));
      }
  })
})
 
router.post('/',upload, (req, res,) => {
var success=req.body.image;
var com = new Comment({
      image:success,
      fullname: req.body.fullname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      message: req.body.message,
      date:req.body.date
  });
  com.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Comment Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports=router;