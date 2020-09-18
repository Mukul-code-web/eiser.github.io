const express=require('express');
var router=express.Router();

var Employee=require('../models/employee');


router.get('/',function(req,res){
  Employee.find(function(err,docs){
      if(!err){
          res.send(docs);
      }
      else{
          console.log('Error in Retriving Employees : ' +JSON.stringify(err,undefined,2));
      }
  })
})

router.post('/', (req, res) => {
  var emp = new Employee({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      pincode: req.body.pincode,
  });
  emp.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
  });
});


  
  router.put('/',function(req,res){
        Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},function(err,docs){
          if(!err){
            res.send(docs);
          }else{
            console.log("Error during record update :" +err);
          }
        })
  });

  router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});
    

module.exports=router;