const mongoose=require('mongoose');
var CreditCard=mongoose.model('CreditCard',{
    username:{type:String},
    cardNumber:{type:Number},
    month:{type:Number},
    year:{type:Number},
    cvv:{type:Number}
});
module.exports=CreditCard;