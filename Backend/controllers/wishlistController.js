const express=require('express');
var router=express.Router();
var Wishlist=require('../models/wishlist');

router.get('/',function(req,res){
    Wishlist.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Wishdata : ' +JSON.stringify(err,undefined,2));
        }
    })
  })


  router.post('/', (req, res) => {
    var wish = new Wishlist({
      id:req.body._id
    });
    wish.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Wishlist Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

  router.delete('/:id', (req, res) => {
    Wishlist.deleteOne({id:req.params.id}, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Wishlist Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});



  module.exports=router;