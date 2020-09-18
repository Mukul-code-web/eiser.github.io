const mongoose=require('mongoose');
var Product=mongoose.model('Product',{
    name:{type:String,unique: true},
    description:{type:String},
    price:{type:Number},
    imageurl:{type:String},
    imageurl2:{type:String},
    imageurl3:{type:String},
    dprice:{type:String},
    qty:{type:Number},
    id:{type:String}
});
module.exports=Product;