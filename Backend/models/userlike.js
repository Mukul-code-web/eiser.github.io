const mongoose=require('mongoose');
var Like=mongoose.model('Like',{
    userid:{type:Array,unique: true},
});
module.exports=Like;