const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
var configAuth = require('./auth');
var User=require('../models/user');



passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);



passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL
},
function(token, refreshToken, profile,done) {
    process.nextTick(function() {
        User.findOne({ 'id' : profile.id }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, user); 
            } else {
                var newUser = new User({
                id    : profile.id,                
                token : token,                  
                name  : profile.name.givenName + ' ' + profile.name.familyName, 
                });
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));



passport.use(new GoogleStrategy({
    clientID        : configAuth.GoogleAuth.GOOGLE_CLIENT_ID,
    clientSecret    : configAuth.GoogleAuth.clientSecret,
    callbackURL     : configAuth.GoogleAuth.callbackURL
},
function(token, refreshToken, profile,done) {
    process.nextTick(function() {
        User.findOne({ 'userId' : profile.id }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, user); 
            } else {
                var newUser  = new User({
                userId   : profile.id,                
                token : token,                     
                username : profile.displayName,
                picture : profile._json.picture
                });
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));



/*
passport.use(new TwitterStrategy({
    clientID        : configAuth.TwitterAuth.TWITTER_CLIENT_ID,
    clientSecret    : configAuth.TwitterAuth.clientSecret,
    callbackURL     : configAuth.TwitterAuth.callbackURL
},
function(token, refreshToken, profile,done) {
    process.nextTick(function() {
     User.findOne({ 'userId' : profile.id }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, user); 
            } else {
                var newUser=new User({
                userId   : profile.id,                   
                token : token,                  
                username : profile.displayName,
                picture : profile._json.picture
                });
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));
*/






