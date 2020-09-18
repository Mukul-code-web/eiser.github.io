const express=require('express');
var router=express.Router();
var CreditCard=require('../models/creditcard');

  router.post('/',(req, res,) => {
  var Cre = new CreditCard({
        username: req.body.username,
        cardNumber: req.body.cardNumber,
        month: req.body.month,
        year:req.body.year,
        cvv:req.body.cvv
    });
    Cre.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in CreditCardDetails Save :' + JSON.stringify(err, undefined, 2)); }
    });
  });
  
  module.exports=router;