import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductcheckoutComponent } from './productcheckout/productcheckout.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ContactComponent } from './contact/contact.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { PlaceorderdetailsComponent } from './placeorderdetails/placeorderdetails.component';
import { MenlistComponent } from './menlist/menlist.component';
import { WomenlistComponent } from './womenlist/womenlist.component';
import { JacketlistComponent } from './jacketlist/jacketlist.component';
import { NightwearlistComponent } from './nightwearlist/nightwearlist.component';
import { CoatlistComponent } from './coatlist/coatlist.component';
import { PantlistComponent } from './pantlist/pantlist.component';
import { TshirtcollectionComponent } from './tshirtcollection/tshirtcollection.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreditcarddetailsComponent } from './creditcard/creditcarddetails/creditcarddetails.component';
import { EisercouponsComponent } from './eisercoupons/eisercoupons.component';
import { BlogdataComponent } from './blog/blogdata/blogdata.component';
import { PhpComponent } from './blog/php/php.component';
import { IonicComponent } from './blog/ionic/ionic.component';
import { AngularComponent } from './blog/angular/angular.component';
import { ReactComponent } from './blog/react/react.component';
import { JqueryComponent } from './blog/jquery/jquery.component';
import { AngulartutorialComponent } from './blog/angulartutorial/angulartutorial.component';
import { PhptutorialComponent } from './blog/phptutorial/phptutorial.component';
import { JquerytutorialComponent } from './blog/jquerytutorial/jquerytutorial.component';
import { JavascripttutorialComponent } from './blog/javascripttutorial/javascripttutorial.component';
import { ExpressjstutorialComponent } from './blog/expressjstutorial/expressjstutorial.component';
import { NodejstutorialComponent } from './blog/nodejstutorial/nodejstutorial.component';
import { MongodbtutorialComponent } from './blog/mongodbtutorial/mongodbtutorial.component';
import { HtmltutorialComponent } from './blog/htmltutorial/htmltutorial.component';
import { BootstraptutorialComponent } from './blog/bootstraptutorial/bootstraptutorial.component';
import { TypescripttutorialComponent } from './blog/typescripttutorial/typescripttutorial.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
 {path:'Profile',component:ProfileComponent,canActivate:[AuthGuard]},
 {path:'Setting',component:SettingComponent},
 {path:'Addresses',component:EmployeeComponent},
 {path:'SignUp',component:SignupComponent},
 {path:'SignIn',component:SigninComponent},
 {path:'ShopList',component:ShoplistComponent,canActivate:[AuthGuard]},
 {path:'ProductDetails/:id',component:ProductdetailsComponent,canActivate:[AuthGuard]},
 {path:'ProductCheckout',component:ProductcheckoutComponent,canActivate:[AuthGuard]},
 {path:'Blog',component:BlogComponent,
 children:[{path:'',redirectTo:'BlogData',pathMatch:'full'},
            {path:'BlogData',component:BlogdataComponent},
            {path:'Php',component:PhpComponent},
            {path:'Ionic',component:IonicComponent},
            {path:'Angular',component:AngularComponent},
            {path:'React',component:ReactComponent},
            {path:'Jquery',component:JqueryComponent},
            {path:'AngularTutorial',component:AngulartutorialComponent},
            {path:'PhpTutorial',component:PhptutorialComponent},
            {path:'JqueryTutorial',component:JquerytutorialComponent},
            {path:'JavascriptTutorial',component:JavascripttutorialComponent},
            {path:'ExpressJSTutorial',component:ExpressjstutorialComponent},
            {path:'NodeJSTutorial',component:NodejstutorialComponent},
            {path:'MongoDBTutorial',component:MongodbtutorialComponent},
            {path:'HtmlTutorial',component:HtmltutorialComponent},
            {path:'BootstrapTutorial',component:BootstraptutorialComponent},
            {path:'TypeScriptTutorial',component:TypescripttutorialComponent}]},
 {path:'BlogDetails/:id',component:BlogdetailsComponent},
 {path:'Contact',component:ContactComponent},
 {path:'TrackOrder',component:TrackorderComponent},
 {path:'ResetPassword',component:ResetpasswordComponent,canActivate:[AuthGuard]},
 {path:'ForgotPassword',component:ForgotpasswordComponent,canActivate:[AuthGuard]},
 {path:'ShopCart',component:ShopcartComponent},
 {path:'PlaceOrder',component:PlaceorderdetailsComponent},
 {path:'Collections1',component:MenlistComponent,canActivate:[AuthGuard]},
 {path:'Collections2',component:WomenlistComponent},
 {path:'Collections3',component:JacketlistComponent},
 {path:'Collections4',component:NightwearlistComponent},
 {path:'Collections5',component:CoatlistComponent},
 {path:'Collections6',component:PantlistComponent},
 {path:'Collections7',component:TshirtcollectionComponent},
 {path:'WishList',component:WishlistComponent},
 {path:'ProfileEdit',component:ProfileeditComponent},
 {path:'CreditCard',component:CreditcardComponent},
 {path:'CreditCardDetails',component:CreditcarddetailsComponent},
 {path:'EiserCoupons',component:EisercouponsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
