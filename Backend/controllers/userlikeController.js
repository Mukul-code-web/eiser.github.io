const express=require('express');
var router=express.Router();

var Like=require('../models/userlike');

router.get('/LikeCount',function(req,res){
    Like.countDocuments().exec((err, count) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ count: count });
    });
  })

router.post('/', (req, res,next) => {
    var lik = new Like({
        userid:req.body._id
    });
    lik.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
          res.status(422).send(['You are already like this post.']);
      else
          return next(err); }
  });
});

module.exports=router;