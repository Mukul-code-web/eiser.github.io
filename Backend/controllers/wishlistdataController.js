const express=require('express');
var router=express.Router();
var WishlistData=require('../models/wishlistdata');

router.get('/',function(req,res){
    WishlistData.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Wishlistdata : ' +JSON.stringify(err,undefined,2));
        }
    })
  })


  router.post('/', (req, res) => {
    var wishdata = new WishlistData({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageurl: req.body.imageurl,
        imageurl2:req.body.imageurl2,
        imageurl3:req.body.imageurl3,
        dprice:req.body.dprice,
        qty:req.body.qty,
        id:req.body._id
    });
    wishdata.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Wishlistdata Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
    WishlistData.deleteOne({id:req.params.id}, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in WishlistData Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports=router;