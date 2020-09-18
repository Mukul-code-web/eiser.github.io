import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {

  constructor(private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.resetForm();
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
