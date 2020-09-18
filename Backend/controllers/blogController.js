const express=require('express');
var router=express.Router();

var Blog=require('../models/blog');

router.get('/:id',function(req,res){
    Blog.findOne({ id:req.params.id},function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Cartdata : ' +err);
        }
    })
  })

router.post('/', (req, res,next) => {
    var blo = new Blog({
        name: req.body.name,
        description: req.body.description,
        imageurl: req.body.imageurl,
        category:req.body.category,
        id:req.body._id
    });
    blo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
          res.status(422).send(['Already add to database.']);
      else
          return next(err); }
  });
});

module.exports=router;