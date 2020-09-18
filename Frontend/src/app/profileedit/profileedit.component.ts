import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {ProfileeditService} from '../shared/profileedit.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {

  showUpdateMessage:boolean;
  data:any;

  constructor(private toaster: ToastrService,public contactservice:ContactService,public router:Router,public userService:UserService,public profileeditService:ProfileeditService) {
   }

  ngOnInit(): void {
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

  function(){
    this.profileeditService.selectedUser=this.data[0];
    console.log(this.data[0]);
  }

  onSubmitt(form?:NgForm){
    this.profileeditService.putUser(form.value).subscribe((res) => {
    this.refreshUserList();
    this.showUpdateMessage=true;
    setTimeout(()=>this.showUpdateMessage=false,3000);
  });
}
  

  }


  


