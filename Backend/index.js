require('./config/passportConfig');
require('./config/config');
require('./db');
var User=require('./models/user');
var Comment=require('./models/comment');

const multer = require('multer');
const path = require('path');
var Storage=multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});
 var upload=multer({
     storage:Storage
 }).single('image');


const express=require('express');
const bodyparser=require('body-parser');
const passport=require('passport');
const cors=require('cors');

var employeeControllers=require('./controllers/employeeControllers');
var userControllers=require('./controllers/userControllers');
var cartdataController=require('./controllers/cartdataController');
var billingController=require('./controllers/billingController');
var wishlistController=require('./controllers/wishlistController');
var wishlistdataController=require('./controllers/wishlistdataController');
var commentController=require('./controllers/commentController');
var reviewController=require('./controllers/reviewController');
var commentreplyController=require('./controllers/commentreplyController');
var contactController=require('./controllers/contactController');
var subscribedController=require('./controllers/subscribedController');
var creditcardController=require('./controllers/creditcardController');
var blogController=require('./controllers/blogController');
var blogcommentController=require('./controllers/blogcommentController');
var LikeController=require('./controllers/userlikeController');


const rtsIndex = require('./routes/index.routes');
const rtsIndex2 = require('./routes/index2');
const rtsIndex3 = require('./routes/index3');
const router = require('./controllers/commentController');

var app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors(({origin:'http://localhost:4200'})));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', rtsIndex);
app.use('/api2', rtsIndex2);
app.use('/api3', rtsIndex3);
app.set('view engine', 'pug');
app.set('views','./views');

router.use(express.static(__dirname+"./public/"));


app.listen(8080,function(){
    console.log('Express Server started at port : 8080');
});

app.use('/employees',employeeControllers);
app.use('/users',userControllers);
app.use('/cartlist',cartdataController);
app.use('/billing',billingController);
app.use('/wishlist',wishlistController);
app.use('/wishlistdata',wishlistdataController);
app.use('/comments',commentController);
app.use('/reviews',reviewController);
app.use('/reviews/reviewCount',reviewController);
app.use('/reviews/reviewCount/average',reviewController);
app.use('/commentsreply',commentreplyController);
app.use('/contacts',contactController);
app.use('/subscribed',subscribedController);
app.use('/creditcarddetails',creditcardController);
app.use('/bloglist',blogController);
app.use('/blogcomments',blogcommentController);
app.use('/Like',LikeController);

app.get('/error', function(req, res) {
  Comment.find(function(err,docs){
    if(!err){
        res.render('error.pug',{title:'Upload File',records:docs,success:''}); 
    }
    else{
        console.log('Error in Retriving Comment : ' +JSON.stringify(err,undefined,2));
    }
})
});

app.post('/profile',upload,function(req,res,next){
  var imagefile=req.file.filename;
  var success=req.file.filename +"Upload Successfully";

  var imagedetails=new Comment({
        image:imagefile
  })
imagedetails.save(function(err,doc){
if(err) throw err;
res.render('error.pug',{title:'Upload File',success:success});
})
})


passport.serializeUser(function(user, done) {
    done(null, user)
  })
  passport.deserializeUser(function(user, done) {
    done(null, user)
  })

  

  



 
        





