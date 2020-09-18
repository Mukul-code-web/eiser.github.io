import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { Product } from '../shared/product.model';
import { empty } from 'rxjs';
import {MessangersService} from 'src/app/shared/messangers.service';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { Billing } from '../shared/billing.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.css']
})
export class ProductcheckoutComponent implements OnInit {

  cartTotal=50;
  i;
  serverErrorMessages:String;

  constructor(public product:ProductService,public msg:MessangersService,public employeeService:EmployeeService,public router:Router,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.refreshcartList();
    this.refreshEmployeeList();
    this.refreshBillingList();
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

   refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res)=> {
      this.employeeService.employees=res as Employee[];
    });
  }

 
  refreshBillingList(){
    this.product.getbillingList().subscribe((res)=> {
      this.product.Billing=res as Billing[];
    });
  }

  
  templateForm(value: any) {
    this.product.postbilling(value).subscribe(res => {
      this.router.navigate(['PlaceOrder']);
  },
  err=>{
    if(err.status === 422){
      this.serverErrorMessages=err.error;
     alert(this.serverErrorMessages);
    }} 
  );
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
