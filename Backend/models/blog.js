const mongoose=require('mongoose');
var Blog=mongoose.model('Blog',{
    name:{type:String,unique: true},
    description:{type:String},
    imageurl:{type:String},
    category:{type:String},
    id:{type:String}
});
module.exports=Blog;