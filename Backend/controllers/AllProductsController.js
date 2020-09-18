const express=require('express');
var router=express.Router();




router.post('/', (req, res) => {
    var proo = new AllProducts({
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
    proo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
          res.status(422).send(['Already add to Cart.']);
      else
          return next(err); }
  });
  });

  module.exports=router;