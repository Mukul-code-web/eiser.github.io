import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  shopListData:Product[]=[];

  constructor(public productService:ProductService,public wishlistservice:WishlistService,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.loadWishListData();
    this.resetForm();
  }

  loadWishListData(){
    this.wishlistservice.getWishListData().subscribe(res=>{
    this.shopListData=res as Product[];
    })
  }

removeitem(x,id){
  if (confirm('Are you sure to remove this product from wishlist ?') == true) {
  this.shopListData.splice(x, 1);
  this.wishlistservice.deleteWishList(id).subscribe((res)=>{
  })
  this.wishlistservice.removeFromWishList(id).subscribe((res)=>{
  })
}
  }

  resetForm(form?:any){
    if (form)
    form.reset();
    this.contactservice.selectedSubscribed={
      EMAIL:"",
    }
  }

  onSubmit(form?:NgForm){
    this.contactservice.postSubscribed(form.value).subscribe((res) => {
      this.resetForm(form);
      this.toaster.show('Subscribed!!');
    })
  }
  
}
