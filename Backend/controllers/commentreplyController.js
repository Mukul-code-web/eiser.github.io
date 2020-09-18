const express=require('express');
var router=express.Router();
var CommentReply=require('../models/commentreply');



router.get('/',function(req,res){
  CommentReply.find(function(err,docs){
      if(!err){
          res.send(docs);
      }
      else{
          console.log('Error in Retriving ReplyComment : ' +JSON.stringify(err,undefined,2));
      }
  })
})
 
router.post('/', (req, res,) => {
var rep = new CommentReply({
      image:req.body.image,
      fullname: req.body.fullname,
      email: req.body.email,
      message: req.body.message,
      date:req.body.date,
      commentId:req.body.commentId
  });
  rep.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in ReplyComment Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports=router;