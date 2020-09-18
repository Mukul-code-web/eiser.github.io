import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import {Employee} from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  showSuccessMessage:boolean;
  showDeleteMessage:boolean;
  showUpdateMessage:boolean;

  constructor(public employeeService:EmployeeService,private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
    this.resettForm();
  }
 
  resetForm(form?:any) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      address: "",
      phone: null,
      pincode: null
    }
  }

  onSubmit(form?:NgForm) {
    if(form.value._id==""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList()
        this.showSuccessMessage=true;
        setTimeout(()=>this.showSuccessMessage=false,3000);
      })
    }
    else{
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        this.showUpdateMessage=true;
        setTimeout(()=>this.showUpdateMessage=false,3000);
      });
    }
    }

    refreshEmployeeList(){
      this.employeeService.getEmployeeList().subscribe((res)=> {
        this.employeeService.employees=res as Employee[];
      });
    }

    onEdit(emp:any){
      this.employeeService.selectedEmployee=emp;
    }

    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this Address ?') == true) {
        this.employeeService.deleteEmployee(_id).subscribe((res) => {
          this.refreshEmployeeList();
          this.resetForm(form);
          this.showDeleteMessage=true;
          setTimeout(()=>this.showDeleteMessage=false,3000);
        });
      }
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
