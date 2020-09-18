import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { Product } from '../shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
    

  showDeleteMessage:boolean;
  cartTotal=0;

  constructor(public productservice:ProductService,public msg:MessangersService,private toaster: ToastrService,public contactservice:ContactService) {
    
   }
 
  ngOnInit(): void {
    this.refreshcartList();
    this.resetForm();
  }
  

  refreshcartList(){
    this.productservice.getcartdata().subscribe((res)=> {
    this.productservice.selectedproducts=res as Product[];
    this.productservice.selectedproducts.forEach(emp =>{
    this.cartTotal += (emp.qty * emp.price)
      })
    });
   }


   removeitem(x,emp,_id:number){
    if (confirm('Are you sure to delete this product ?') == true) {
      this.productservice.selectedproducts.splice(x, 1);
      this.cartTotal -= (emp.qty * emp.price)
      this.cartTotal=0 
      this.productservice.selectedproducts.forEach(emp =>{
      this.cartTotal += (emp.qty * emp.price)
      })
      this.productservice.deletecartitem(_id).subscribe((res) => {
      this.cartTotal=0 
      this.productservice.selectedproducts.forEach(emp =>{
      this.cartTotal += (emp.qty * emp.price)
      })
      this.showDeleteMessage=true;
      setTimeout(()=>this.showDeleteMessage=false,3000);
      })
    }
    }

    onEdit(emp,_id:number){
      this.productservice.updatecartdata(_id,emp).subscribe((res)=>{
        alert("Updated Successfully.");
      })
    }
  
    
    increament(emp) {
      emp.qty++;
      this.cartTotal = (emp.qty * emp.price)
      this.cartTotal=0 
      this.productservice.selectedproducts.forEach(emp =>{
      this.cartTotal += (emp.qty * emp.price)
      })
    }
    
    decreament(emp) {
      emp.qty--;
      this.cartTotal = (emp.qty * emp.price)
      this.cartTotal=0 
      this.productservice.selectedproducts.forEach(emp =>{
      this.cartTotal += (emp.qty * emp.price)
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
