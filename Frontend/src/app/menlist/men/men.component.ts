import { Component, OnInit,Input} from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  removetowishlistMessage:boolean;
  addtowishlistMessage:boolean;
  showSuccessMessage:boolean;
  serverErrorMessages:String;
  server:boolean;

  @Input() productItem:Product
  @Input() addedToWishlist:boolean;
  

  constructor(public msg:MessangersService,public productservice:ProductService,public router:Router,public wishlistservice:WishlistService) { }

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
