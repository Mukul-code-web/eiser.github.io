import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
 
})
export class SigninComponent implements OnInit {
  serverErrorMessages: string;
  server:boolean;

  constructor(public userService:UserService,public router:Router,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.resetForm();
    this.resettForm();
  }

  resetForm(form?:any) {
    if (form)
      form.reset();
    this.userService.selectedUser = {
      _id: "",
      username:"",
      email:"",
      password:""
    }
  }

  onSubmit(form?:NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.userService.setToken(res['token']);
        this.router.navigate(['Profile']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
        this.server=true;
        setTimeout(()=>this.server=false,3000);
      }
    );
  }

  resettForm(form?:any){
    if (form)
    form.reset();
    this.contactservice.selectedSubscribed={
      EMAIL:"",
    }
  }

  onSubmitt(form?:NgForm){
    this.contactservice.postSubscribed(form.value).subscribe((res) => {
      this.resetForm(form);
      this.toaster.show('Subscribed!!');
    })
  }

}
