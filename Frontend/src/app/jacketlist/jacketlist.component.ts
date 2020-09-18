import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jacketlist',
  templateUrl: './jacketlist.component.html',
  styleUrls: ['./jacketlist.component.css']
})
export class JacketlistComponent implements OnInit {

  shopList:Product[]=[];
  wishlist:number[]=[]

  constructor(public productService:ProductService,public wishlistservice:WishlistService,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.shopList=this.productService.getjacketproducts();
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
