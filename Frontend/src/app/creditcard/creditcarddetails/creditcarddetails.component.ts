import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from 'src/app/shared//contact.service';
import { NgForm } from '@angular/forms';
import {CreditcardService} from 'src/app/shared//creditcard.service';

@Component({
  selector: 'app-creditcarddetails',
  templateUrl: './creditcarddetails.component.html',
  styleUrls: ['./creditcarddetails.component.css']
})
export class CreditcarddetailsComponent implements OnInit {

  showSuccessMessagee:boolean;

  constructor(private toaster: ToastrService,public contactservice:ContactService,public creditcardservice:CreditcardService) { }

  ngOnInit(): void {
    this.resetForm();
    this.resettForm();
  }

  resetForm(form?:any){
    if (form)
    form.reset();
    this.contactservice.selectedSubscribed={
      EMAIL:"",
    }
  }

  resettForm(form?:any) {
    if (form)
      form.reset();
    this.creditcardservice.selectedCreditCard = {
      username: "",
      cardNumber: null,
      month: null,
      year: null,
      cvv: null
    }
  }

  onSubmit(form?:NgForm){
    this.contactservice.postSubscribed(form.value).subscribe((res) => {
      this.resetForm(form);
      this.toaster.show('Subscribed!!');
    })
  }

  onSubmitt(data:any){
  this.creditcardservice.postCreditCardDetails(data.value).subscribe((res) => {
    this.resettForm(data);
    this.showSuccessMessagee=true;
    setTimeout(()=>this.showSuccessMessagee=false,3000);
  })
}

function(){
  alert("Last 3 digits printed on the back of the card")
}

}
