const express=require('express');
var router=express.Router();

var Billing=require('../models/billing');

router.get('/',function(req,res){
    Billing.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Billing Details : ' +JSON.stringify(err,undefined,2));
        }
    })
  })
  
  router.post('/', (req, res) => {
    var bill = new Billing({
        address: req.body.address,
        paymentmethod:req.body.payment
    });
    bill.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
            res.status(422).send(['Duplicate address found.']);
        else
            return next(err); }
    });
  });
  module.exports=router;