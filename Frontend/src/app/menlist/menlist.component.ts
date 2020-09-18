import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {ProductService} from 'src/app/shared/product.service';
import {Router} from '@angular/router';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-menlist',
  templateUrl: './menlist.component.html',
  styleUrls: ['./menlist.component.css']
})
export class MenlistComponent implements OnInit {

  shopList:Product[]=[];
  wishlist:number[]=[]

  constructor(public productService:ProductService,public router:Router,public wishlistservice:WishlistService,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.shopList=this.productService.getmenproducts();
    this.loadWishList();
    this.resetForm();
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
