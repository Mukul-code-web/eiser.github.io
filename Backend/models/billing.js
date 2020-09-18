const mongoose=require('mongoose');
var Billing=mongoose.model('Billing',{
    address:{type:String,unique: true},
    paymentmethod:{type:String}
});
module.exports=Billing;