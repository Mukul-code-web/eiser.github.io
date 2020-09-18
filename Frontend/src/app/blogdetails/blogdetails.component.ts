import { Component, OnInit,HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
import { NgForm } from '@angular/forms';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';
import {Router, ActivatedRoute} from "@angular/router";
import {BlogcommentService} from 'src/app/shared/blogcomment.service';
import {Blogcomment} from '../shared/blogcomment.model';
import {UserService} from '../shared/user.service';
declare var $: any;

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  serverErrorMessages:String;
  server:boolean;
  addedToWishlist:boolean;
  BlogCommentsCount:any;
  LikeCount:any;
  togglePanel: any = {};
  showSuccessMessage:boolean;
  blogData:Blog[];
  blogID: number;
  isShow: boolean;
  topPosToStartShowing = 2000;
  url="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
 

  constructor(private toaster: ToastrService,public contactservice:ContactService,public blogservice:BlogService, public actRoute: ActivatedRoute,public blogcommentservice:BlogcommentService,private userService : UserService,private router : Router) { }

  ngOnInit(): void {
    this.blogID = this.actRoute.snapshot.params['id'];
    this.loadBlogDetails(this.blogID);
    this.resetForm();
    this.resettForm();
    this.refreshBlogCommentList();
    this.refreshBlogCommentCountList();
    this.refreshLikeCountList();

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
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

  loadBlogDetails(id:number){
    this.blogservice.getblogdatadetails(id).subscribe(res=>{
      this.blogData=res as Blog[];
    });
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

  function(){
    alert("Sorry no more posts.")
  }

  resettForm(form?:any){
    if (form)
    form.reset();
    this.blogcommentservice.selectedBlogComment={
      fullname:"",
      email:"",
      phonenumber:null,
      message:"",
      date:"",
      image:""
    }
  }

  onSubmitt(form?:NgForm){
    this.blogcommentservice.postBlogComment(form.value).subscribe((res) => {
      this.resettForm(form);
      this.refreshBlogCommentList()
      this.showSuccessMessage=true;
      setTimeout(()=>this.showSuccessMessage=false,3000);
    })
  }
  
  refreshBlogCommentList(){
    this.blogcommentservice.getBlogCommentList().subscribe((res)=> {
      this.blogcommentservice.blogcomments=res as Blogcomment[];
    });
  }

  refreshBlogCommentCountList(){
    this.blogcommentservice.getBlogCommentDataCount().subscribe((res)=>{
      this.BlogCommentsCount=res as any;
    })
  }



  function0(){
    if (!this.userService.isLoggedIn()) {
      alert("Please,SignIn First Then Go To Like This Post.")
      this.router.navigate(['SignIn']);
      this.userService.deleteToken();
      return false;
    }

    else {
      var token = this.userService.getToken();
      if (token) {
        var userPayload = atob(token.split('.')[1]);
        var parseuserPayload = JSON.parse(userPayload);
        console.log(parseuserPayload);
                 }
        else
        return null;

      this.blogcommentservice.postLikeData(parseuserPayload).subscribe(res=>{
        if(res){
      this.addedToWishlist=true;
       setTimeout(()=>this.addedToWishlist=false,3000);
       this.toaster.show('Liked!!');
        }
      },
      err=>{
        if(err.status === 422){
          this.serverErrorMessages=err.error;
          this.server=true;
        setTimeout(()=>this.server=false,3000);
        }} 
        );

      
         }
        return true;
  }
  
  refreshLikeCountList(){
    this.blogcommentservice.getLikeDataCount().subscribe((res)=>{
      this.LikeCount=res as any;
    })
  }


}
