import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule }    from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { ShopcategoryComponent } from './shoplist/shopcategory/shopcategory.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductcheckoutComponent } from './productcheckout/productcheckout.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ContactComponent } from './contact/contact.component';
import { TrackorderComponent } from './trackorder/trackorder.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { PlaceorderdetailsComponent } from './placeorderdetails/placeorderdetails.component';
import { MenlistComponent } from './menlist/menlist.component';
import { MenComponent } from './menlist/men/men.component';
import { WomenlistComponent } from './womenlist/womenlist.component';
import { WomenComponent } from './womenlist/women/women.component';
import { JacketlistComponent } from './jacketlist/jacketlist.component';
import { JacketComponent } from './jacketlist/jacket/jacket.component';
import { NightwearlistComponent } from './nightwearlist/nightwearlist.component';
import { NightwearComponent } from './nightwearlist/nightwear/nightwear.component';
import { CoatlistComponent } from './coatlist/coatlist.component';
import { CoatComponent } from './coatlist/coat/coat.component';
import { PantlistComponent } from './pantlist/pantlist.component';
import { PantComponent } from './pantlist/pant/pant.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { Home3Component } from './home/home3/home3.component';
import { TshirtcollectionComponent } from './tshirtcollection/tshirtcollection.component';
import { TshirtComponent } from './tshirtcollection/tshirt/tshirt.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistdataComponent } from './wishlist/wishlistdata/wishlistdata.component';
import { ReplyformComponent } from './productdetails/replyform/replyform.component';
import { ReplylistComponent } from './productdetails/replyform/replylist/replylist.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreditcarddetailsComponent } from './creditcard/creditcarddetails/creditcarddetails.component';
import { EisercouponsComponent } from './eisercoupons/eisercoupons.component';
import { CouponComponent } from './eisercoupons/coupon/coupon.component';
import { BlogdataComponent } from './blog/blogdata/blogdata.component';
import { BlogphpComponent } from './blog/php/blogphp/blogphp.component';
import { BlogjavascriptComponent } from './blog/blogdata/blogjavascript/blogjavascript.component';
import { PhpComponent } from './blog/php/php.component';
import { IonicComponent } from './blog/ionic/ionic.component';
import { BlogionicComponent } from './blog/ionic/blogionic/blogionic.component';
import { AngularComponent } from './blog/angular/angular.component';
import { BlogangularComponent } from './blog/angular/blogangular/blogangular.component';
import { ReactComponent } from './blog/react/react.component';
import { BlogreactComponent } from './blog/react/blogreact/blogreact.component';
import { JqueryComponent } from './blog/jquery/jquery.component';
import { BlogjqueryComponent } from './blog/jquery/blogjquery/blogjquery.component';
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
import { BlogreplyformComponent } from './blogdetails/blogreplyform/blogreplyform.component';
import { BlogreplylistComponent } from './blogdetails/blogreplyform/blogreplylist/blogreplylist.component';
import { Home4Component } from './home/home4/home4.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProfileComponent,
    HomeComponent,
    SettingComponent,
    SignupComponent,
    SigninComponent,
    ShopcategoryComponent,
    ProductdetailsComponent,
    ProductcheckoutComponent,
    BlogComponent,
    BlogdetailsComponent,
    ContactComponent,
    TrackorderComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    ShoplistComponent,
    CartlistComponent,
    ShopcartComponent,
    PlaceorderdetailsComponent,
    MenlistComponent,
    MenComponent,
    WomenlistComponent,
    WomenComponent,
    JacketlistComponent,
    JacketComponent,
    NightwearlistComponent,
    NightwearComponent,
    CoatlistComponent,
    CoatComponent,
    PantlistComponent,
    PantComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    TshirtcollectionComponent,
    TshirtComponent,
    WishlistComponent,
    WishlistdataComponent,
    ReplyformComponent,
    ReplylistComponent,
    ProfileeditComponent,
    CreditcardComponent,
    CreditcarddetailsComponent,
    EisercouponsComponent,
    CouponComponent,
    BlogdataComponent,
    BlogphpComponent,
    BlogjavascriptComponent,
    PhpComponent,
    IonicComponent,
    BlogionicComponent,
    AngularComponent,
    BlogangularComponent,
    ReactComponent,
    BlogreactComponent,
    JqueryComponent,
    BlogjqueryComponent,
    AngulartutorialComponent,
    PhptutorialComponent,
    JquerytutorialComponent,
    JavascripttutorialComponent,
    ExpressjstutorialComponent,
    NodejstutorialComponent,
    MongodbtutorialComponent,
    HtmltutorialComponent,
    BootstraptutorialComponent,
    TypescripttutorialComponent,
    BlogreplyformComponent,
    BlogreplylistComponent,
    Home4Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
