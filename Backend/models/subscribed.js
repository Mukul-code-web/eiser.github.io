const mongoose=require('mongoose');
var Subscribed=mongoose.model('Subscribed',{
    EMAIL:{type:String},
});
module.exports=Subscribed;