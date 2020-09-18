const express=require('express');
var router=express.Router();
var Subscribed=require('../models/subscribed');

router.get('/',function(req,res){
    Subscribed.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Subscribed : ' +JSON.stringify(err,undefined,2));
        }
    })
  })

router.post('/', (req, res,) => {
    var sub = new Subscribed({
          EMAIL: req.body.EMAIL,
      });
      sub.save((err, doc) => {
          if (!err) { res.send(doc); }
          else { console.log('Error in Subscribed Save :' + JSON.stringify(err, undefined, 2)); }
      });
    });
    
    module.exports=router;