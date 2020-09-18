const mongoose=require('mongoose');
var BlogComment=mongoose.model('BlogComment',{
    image:{type:String},
    fullname:{type:String},
    email:{type:String},
    phonenumber:{type:Number},
    message:{type:String},
    date:{type:String}
});
module.exports=BlogComment;