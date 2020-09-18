const mongoose=require('mongoose');
var WishlistData=mongoose.model('WishlistData',{
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    imageurl:{type:String},
    imageurl2:{type:String},
    imageurl3:{type:String},
    dprice:{type:String},
    qty:{type:Number},
    id:{type:Number}
});
module.exports=WishlistData;