import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userService:UserService,public router:Router,private toaster: ToastrService,public contactservice:ContactService) { 
    
  }

  ngOnInit(): void {
    this.resetForm();
  }

   onLogout(){
     this.userService.deleteToken();
     this.router.navigate(['SignIn']);
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
