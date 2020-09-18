const express=require('express');
var router=express.Router();
var BlogComment=require('../models/blogcomment');

router.get('/',function(req,res){
    BlogComment.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving BlogComment : ' +JSON.stringify(err,undefined,2));
        }
    })
  })

  router.get('/blogcommentCount',function(req,res){
    BlogComment.countDocuments().exec((err, count) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ count: count });
    });
})
   
  router.post('/', (req, res,) => {
  var success=req.body.image;
  var bcom = new BlogComment({
        image:success,
        fullname: req.body.fullname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        message: req.body.message,
        date:req.body.date
    });
    bcom.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BlogComment Save :' + JSON.stringify(err, undefined, 2)); }
    });
  });
  
  module.exports=router;