import { Component, OnInit,Input,HostListener} from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
import { Subscribed } from '../shared/subscribed.model';
import {Blog } from '../shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shopList:Product[]=[];
  shopList2:Product[]=[];
  shopList3:Product[]=[];
  shopList4:Blog[]=[];
  wishlist:number[]=[]
  isShow: boolean;
  topPosToStartShowing = 2000;

  constructor(public productService:ProductService,public wishlistservice:WishlistService,private toaster: ToastrService,public contactservice:ContactService,public blogservice:BlogService) { }

  ngOnInit(): void {
    this.shopList=this.productService.gethome1products();
    this.shopList2=this.productService.gethome2products();
    this.shopList3=this.productService.gethome3products();
    this.shopList4=this.blogservice.getHomeBlog();
    this.loadWishList();
    this.refreshSubscribedList();
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

refreshSubscribedList(){
  this.contactservice.getSubscribed().subscribe((res)=> {
    this.contactservice.Subscribeds=res as Subscribed[];
  });
}

@HostListener('window:scroll')
checkScroll() {
 const scrollPosition=window.pageYOffset;
 if (scrollPosition >= this.topPosToStartShowing) {
  this.isShow = true;
} else {
  this.isShow = false;
}
}

gotoTop() {
  window.scroll({ 
    top:0, 
    left: 0, 
    behavior: 'smooth' 
  });
}

}
