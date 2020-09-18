const express=require('express');
var router=express.Router();
var Review=require('../models/review');


router.get('/',function(req,res){
  Review.find(function(err,docs){
      if(!err){
          res.send(docs);
      }
      else{
          console.log('Error in Retriving ReviewData : ' +JSON.stringify(err,undefined,2));
      }
  })
})

router.get('/reviewCount',function(req,res){
    Review.countDocuments().exec((err, count) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ count: count });
    });
})

router.get('/reviewCount/average',function(req,res){
    Review.aggregate([{$group: {_id:null, avg: {$avg:"$reviewstar"} } }]).exec((err,data)=>{
        if(err){
            res.send(err);
            return
        }
        res.json(data);
    })
})


 
router.post('/', (req, res,) => {
var rev = new Review({
      name: req.body.name,
      emailaddress: req.body.emailaddress,
      mobilenumber: req.body.mobilenumber,
      reviewmessage:req.body.reviewmessage,
      reviewstar:req.body.reviewstar,
      image:req.body.image
  });
  rev.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in ReviewData Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports=router;








