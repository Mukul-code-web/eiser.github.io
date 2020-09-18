const mongoose=require('mongoose');
var CommentReply=mongoose.model('CommentReply',{
    image:{type:String},
    fullname:{type:String},
    email:{type:String},
    message:{type:String},
    date:{type:String},
    commentId:{type:String}
});
module.exports=CommentReply;