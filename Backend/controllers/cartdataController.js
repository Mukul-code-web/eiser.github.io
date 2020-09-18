const express=require('express');
var router=express.Router();

var Product=require('../models/cartdata');
var AllProducts=require('../models/AllProducts');


router.get('/',function(req,res){
    Product.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Cartdata : ' +JSON.stringify(err,undefined,2));
        }
    })
  })

  router.get('/:id',function(req,res){
    AllProducts.findOne({ id:req.params.id},function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Cartdata : ' +err);
        }
    })
  })
  
  router.post('/', (req, res,next) => {
    var pro = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageurl: req.body.imageurl,
        imageurl2:req.body.imageurl2,
        imageurl3:req.body.imageurl3,
        dprice:req.body.dprice,
        qty:req.body.qty,
        address: req.body.address,
        paymentmethod:req.body.payment,
        id:req.body._id
    });
    pro.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
          res.status(422).send(['Already add to Cart.']);
      else
          return next(err); }
  });
});

  router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Cartdata Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id',function(req,res){
  Product.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,doc){
    if(!err){
      res.send(doc);
    }else{
      console.log("Error during record update :" +err);
    }
  })
});

  module.exports=router;