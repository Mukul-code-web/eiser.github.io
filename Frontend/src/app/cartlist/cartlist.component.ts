import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  cartItems=[
    //{id:1,productId:1,productName:"Test 1",qty:3,price:100},
     // {id:2,productId:2,productName:"Test 2",qty:2,price:200},
    //{id:3,productId:3,productName:"Test 3",qty:4,price:50},
    //{id:4,productId:4,productName:"Test 4",qty:1,price:100},
  ];

 
  cartTotal=0;

  constructor(public msg:MessangersService,private toaster: ToastrService,public contactservice:ContactService) {
    
   }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product:Product) =>{
    this.addProductToCart(product); 
    this.resetForm();
  })
  }

  addProductToCart(product:Product){
    let productExists = false
    for(let i in this.cartItems){
    if(this.cartItems[i].productId === product._id){
      this.cartItems[i].qty++
      productExists = true
    }
    }
    if(!productExists){
    this.cartItems.push({
      productId:product._id,
      productName:product.name,
      qty:product.qty,
      price:product.price,
      imageurl:product.imageurl
    })
  }
  this.cartTotal=0 
  this.cartItems.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
  })
}

removeitem(x,item){
this.cartItems.splice(x, 1);
this.cartTotal -= (item.qty * item.price)
this.cartTotal=0 
this.cartItems.forEach(item =>{
this.cartTotal += (item.qty * item.price)
})
}

increament(item) {
  item.qty++;
  this.cartTotal = (item.qty * item.price)
  this.cartTotal=0 
  this.cartItems.forEach(item =>{
  this.cartTotal += (item.qty * item.price)
  })
}

decreament(item) {
  item.qty--;
  this.cartTotal = (item.qty * item.price)
  this.cartTotal=0 
  this.cartItems.forEach(item =>{
  this.cartTotal += (item.qty * item.price)
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
