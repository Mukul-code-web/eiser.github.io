const mongoose=require('mongoose');
var Wishlist=mongoose.model('Wishlist',{
    id:{type:Number}
});
module.exports=Wishlist;