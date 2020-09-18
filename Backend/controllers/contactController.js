const express=require('express');
var router=express.Router();
var Contact=require('../models/contact');

router.get('/',function(req,res){
    Contact.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Contact : ' +JSON.stringify(err,undefined,2));
        }
    })
  })
   
  router.post('/',(req, res,) => {
  var con = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date:req.body.date,
        subject:req.body.subject
    });
    con.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Save :' + JSON.stringify(err, undefined, 2)); }
    });
  });
  
  module.exports=router;