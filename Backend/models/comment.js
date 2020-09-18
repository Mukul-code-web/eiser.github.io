const mongoose=require('mongoose');
var Comment=mongoose.model('Comment',{
    image:{type:String},
    fullname:{type:String},
    email:{type:String},
    phonenumber:{type:Number},
    message:{type:String},
    date:{type:String}
});
module.exports=Comment;