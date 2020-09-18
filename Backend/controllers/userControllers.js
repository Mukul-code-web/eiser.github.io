const express=require('express');
var router=express.Router();
var User=require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const _ = require('lodash');
const DOMAIN = "sandboxa7bcf90e911640eb8ee9a99a2c765ac1.mailgun.org";
const mg = mailgun({apiKey: "0a67c7874c3e90f4da89efc84bb62421-7fba8a4e-4d7f1abe", domain: DOMAIN});



router.get('/',function(req,res){
    User.find(function(err,docs){
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Users : ' +JSON.stringify(err,undefined,2));
        }
    })
  })

router.post('/', (req, res,next) => {
    var use = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    
     
    use.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { if (err.code == 11000)
            res.status(422).send(['Duplicate email adrress found.']);
        else
            return next(err); }
    });
});

router.put('/',function(req,res){
    User.findOneAndUpdate({_id:req.body._id},req.body,{new:true},function(err,docs){
      if(!err){
        res.send(docs);
      }else{
        console.log("Error during record update :" +err);
      }
    })
});


router.get('/auth/facebook', passport.authenticate('facebook', { 
    scope : ['public_profile', 'email']
  }));
  // handle the callback after facebook has authenticated the user
  router.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
          successRedirect : 'http://localhost:4200/Profile',
          failureRedirect : '/'
      }));


router.get('/auth/google', passport.authenticate('google', { 
scope:['profile','email']
}));
// handle the callback after google has authenticated the user
router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect : 'http://localhost:4200/Profile',
        failureRedirect : '/'
    }));


router.get('/auth/twitter', passport.authenticate('twitter', { 
scope:['profile','email']
 }));
// handle the callback after google has authenticated the user
router.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
         successRedirect : 'http://localhost:4200/Profile',
        failureRedirect : '/'
         }));



module.exports=router;


  module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
  }



  module.exports.forgotpassword=(req,res) =>{
    const {email}=req.body;
    User.findOne({email},(err,user) =>{
        if(err || !user){
            return res.status(400).json({error:"User with this email does not exists"});
            }
    const token=jwt.sign({_id: user._id},process.env.RESET_PASSWORD_KEY,{expiresIn:'20m'});
    const data = {
        from: "Mailgun Sandbox <postmaster@sandboxa7bcf90e911640eb8ee9a99a2c765ac1.mailgun.org>",
        to: "ms2224852@gmail.com",
        subject: "Reset Password Link",
        html:` <h2>Please paste on given bold encodes string in your resetlink field.</h2>,
            <a href="">${process.env.CLIENT_URL}/resetpassword/<b>${token}<b></a>
            `
    };
    return user.updateOne({resetLink:token},(err,success) =>{
        if(err){
            return res.status(400).json({error:"reset password link eror"});
        }
        else{
            mg.messages().send(data,(err, body) => {
                if(err){
                   return res.json({error:err.message})
                }
                else{
                return res.json({message:'Email has been sent,kindly follow the instruction'});
                }
            });
        }
    })
    })
}



module.exports.resetpassword=(req,res) =>{
    const {resetLink,newPass}=req.body;
    if(resetLink){
        jwt.verify(resetLink,process.env.RESET_PASSWORD_KEY,function(err,decodedData){
            if(err){
                return res.status(401).json({
                    error:"Incorrect token or it is expired."
                })
            }
            User.findOne({resetLink},(err,user) =>{
                if(err || !user){
                    return res.status(400).json({error:"User with this token does not exists"});
                    }

                    const obj={
                        password:newPass
                    }

                    user = _.extend(user,obj);
                    user.save((err,result) =>{
                        if(err){
                            return res.status(400).json({error:"reset password error"});
                        }
                        else{
                            return res.status(200).json({message:"Your password has been changed."});
                        }
                    })
            })
        })
    }
    else{
        return res.status(401).json({message:"Authentication error!!!"});
    }
}

module.exports=router;
  



