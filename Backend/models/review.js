const mongoose=require('mongoose');
var Review=mongoose.model('Review',{
    name:{type:String},
    emailaddress:{type:String},
    mobilenumber:{type:Number},
    reviewmessage:{type:String},
    reviewstar:{type:Number},
    image:{type:String}
});
module.exports=Review;