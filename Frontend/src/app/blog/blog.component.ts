import { Component, OnInit,HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 2000;
 
  constructor(private toaster: ToastrService,public contactservice:ContactService) { }

  ngOnInit(): void {
    this.resetForm();

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
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

  @HostListener('window:scroll')
  checkScroll() {
   const scrollPosition=window.pageYOffset;
   if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
  }

  gotoTop() {
    window.scroll({ 
      top:300, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
