const mongoose=require('mongoose');
var Contact=mongoose.model('Contact',{
    name:{type:String},
    email:{type:String},
    message:{type:String},
    date:{type:String},
    subject:{type:String}
});
module.exports=Contact;