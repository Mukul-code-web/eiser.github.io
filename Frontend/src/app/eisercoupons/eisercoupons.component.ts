import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import {WishlistService } from 'src/app/shared/wishlist.service';
declare var $: any;

@Component({
  selector: 'app-eisercoupons',
  templateUrl: './eisercoupons.component.html',
  styleUrls: ['./eisercoupons.component.css']
})
export class EisercouponsComponent implements OnInit {

  wishlist:number[]=[];
  shopList:Product[]=[];

  constructor(private toaster: ToastrService,public contactservice:ContactService,public productService:ProductService,public wishlistservice:WishlistService) { }

  ngOnInit(): void {
    this.shopList=this.productService.getcouponproduct();
    this.resetForm();
    this.loadWishList();
  }

  loadWishList(){
    this.wishlistservice.getWishList().subscribe(productIds=>{
    this.wishlist=productIds
    })
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
