import { Component, OnInit,Input} from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import {ProductService} from 'src/app/shared/product.service';
import { Router } from '@angular/router';
import {WishlistService } from 'src/app/shared/wishlist.service';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  removetowishlistMessage:boolean;
  addtowishlistMessage:boolean;
  showSuccessMessage:boolean;
  serverErrorMessages:String;
  server:boolean;

  @Input() addedToWishlist:boolean;
  @Input() productItem:Product
 


  constructor(public msg:MessangersService,public productservice:ProductService,private router: Router,public wishlistservice:WishlistService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
      this.productservice.postcartdata(this.productItem).subscribe(res =>{
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
  this.msg.sendMsg(this.productItem);
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
