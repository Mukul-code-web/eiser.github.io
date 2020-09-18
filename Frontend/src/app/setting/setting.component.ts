import { Component, OnInit } from '@angular/core';
declare var $: any;
declare const myFunction: any;
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import { Router } from '@angular/router';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  url="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  data:any;
  constructor(private toaster: ToastrService,public contactservice:ContactService,public userService:UserService,public router:Router,public employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshUserList();
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

  refreshUserList(){
    this.userService.getUserList().subscribe((res)=> {
      this.userService.users=res as User[];
      this.data=res as User[];
    });
  }


  function1(){
    this.router.navigate(['ShopCart']);
  }

  function2(){
    this.router.navigate(['WishList']);
  }

  function3(){
    this.router.navigate(['Addresses']);
  }

  function4(){
    this.router.navigate(['ResetPassword']);
  }

  function5(){
    this.userService.selectedUser=this.data[0];
    this.router.navigate(['ProfileEdit']);
  }

  function6(){
    this.router.navigate(['CreditCard'])
  }

  function7(){
    this.router.navigate(['EiserCoupons'])
  }

}
