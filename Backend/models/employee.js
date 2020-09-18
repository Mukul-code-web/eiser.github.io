const mongoose=require('mongoose');
var Employee=mongoose.model('Employee',{
    name:{type:String},
    address:{type:String},
    phone:{type:String},
    pincode:{type:Number}
});
module.exports=Employee;