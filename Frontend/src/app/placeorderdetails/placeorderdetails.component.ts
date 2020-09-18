import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { Product } from '../shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import { Billing } from '../shared/billing.model';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-placeorderdetails',
  templateUrl: './placeorderdetails.component.html',
  styleUrls: ['./placeorderdetails.component.css']
})
export class PlaceorderdetailsComponent implements OnInit {
  dateVal  =new Date();
  cartTotal=50;
  
  constructor(public product:ProductService,public msg:MessangersService,public userService:UserService,private toaster: ToastrService,public contactservice:ContactService) { }
 

  ngOnInit(): void {
    this.refreshcartList();
    this.refreshBillingList();
    this.refreshUserList();
    this.resetForm();
  }

  refreshcartList(){
    this.product.getcartdata().subscribe((res)=> {
    this.product.selectedproducts=res as Product[];
    this.product.selectedproducts.forEach(emp =>{
    this.cartTotal += (emp.qty * emp.price)
      })
    });
   }
   
  refreshBillingList(){
    this.product.getbillingList().subscribe((res)=> {
      this.product.Billing=res as Billing[];
    });
  }

 refreshUserList(){
      this.userService.getUserList().subscribe((res)=> {
        this.userService.users=res as User[];
      });
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
