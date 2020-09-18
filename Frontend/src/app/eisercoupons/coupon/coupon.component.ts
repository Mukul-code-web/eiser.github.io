import { Component, OnInit,Input} from '@angular/core';
import {ProductService} from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() productItem:Product
  @Input() addedToWishlist:boolean;
  removetowishlistMessage:boolean;
  addtowishlistMessage:boolean;
  showSuccessMessage:boolean;
  serverErrorMessages:String;
  server:boolean;

  constructor(public productservice:ProductService,public wishlistservice:WishlistService,public router:Router) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
      this.productservice.postcoupondata(this.productItem).subscribe(res =>{
       if(res){
         this.showSuccessMessage=true;
       setTimeout(()=>this.showSuccessMessage=false,3000); 
       }
       },
err=>{
if(err.status === 422){
  this.serverErrorMessages=err.error;
  this.server=true;
setTimeout(()=>this.server=false,3000);
}} 
);
}

handleAddToWishlist(){
  this.wishlistservice.addToWishList(this.productItem._id).subscribe(()=>{
   this.addedToWishlist = true;
  })
}

handleRemoveFromWishlist(){
  this.wishlistservice.removeFromWishList(this.productItem._id).subscribe(()=>{
    this.addedToWishlist = false;
  })
}

function(){
  this.handleAddToWishlist();
  this.wishlistservice.postWishList(this.productItem).subscribe(res=>{
    this.addtowishlistMessage=true;
    setTimeout(()=>this.addtowishlistMessage=false,3000);
  })
}

function1(){
  this.handleRemoveFromWishlist();
  this.wishlistservice.deleteWishList(this.productItem._id).subscribe(res=>{
    this.removetowishlistMessage=true;
    setTimeout(()=>this.removetowishlistMessage=false,3000);
  })
}

getNavigation(link, id){
  if(id === ''){
      this.router.navigate([link]);
  } else {
      this.router.navigate([link + '/' + id]);
  }
}


}
