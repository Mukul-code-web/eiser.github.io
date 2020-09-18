import { Component, OnInit,Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Product} from 'src/app/shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import {CommentService} from '../shared/comment.service';
import {ReviewService} from '../shared/review.service';
import { NgForm } from '@angular/forms';
import {Comment} from '../shared/comment.model';
import {Review} from '../shared/review.model';
import { ToastrService } from 'ngx-toastr';
import {ContactService} from '../shared/contact.service';
declare const myShow: any;
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  togglePanel: any = {};
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  ReviewsCount:any;
  Average:any;
  dateVal  =new Date();
  showSuccessMessagee:boolean;
  productID: number;
  productData:Product[];
  showSuccessMessage:boolean;
  showMessage:boolean;
  serverErrorMessages:String;
  server:boolean;
  url="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

  constructor(public msg:MessangersService,public productservice:ProductService,public router:Router, public actRoute: ActivatedRoute,public wishlistservice:WishlistService,public commentservice:CommentService,public reviewservice:ReviewService,private toaster: ToastrService,public contactservice:ContactService) { }
 
  ngOnInit(): void {
    this.productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
    this.resetForm();
    this.refreshEmployeeList();
    this.resettForm();
    this.refreshReviewList();
    this.refreshReviewCountList();
    this.refreshReviewDataCountStarAverage();
    this.resetttForm();
    
  }

 

  loadProductDetails(id:number){
    this.productservice.getcartdatadetails(id).subscribe(res=>{
      this.productData=res as Product[];
    });
  }

  handleAddtoCart(productData){
    this.productservice.postcartdata(productData).subscribe(res =>{
      if(res){
        this.showSuccessMessage=true;
      setTimeout(()=>this.showSuccessMessage=false,3000); 
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

increament(productData){
productData.qty++;
}

decreament(productData) {
productData.qty--;
}

resetForm(form?:any) {
  if (form)
    form.reset();
  this.commentservice.selectedComment = {
    fullname: "",
    image: "",
    phonenumber: null,
    email: "",
    message:"",
    date:""
  }
}

resettForm(form?:any){
  if (form)
  form.reset();
  this.reviewservice.selectedReview={
    name:"",
    emailaddress:"",
    mobilenumber:null,
    reviewmessage:"",
    reviewstar:null,
    image:""
  }
}


onSubmit(form?:NgForm){
  this.commentservice.postComment(form.value).subscribe((res) => {
    this.resetForm(form);
    this.refreshEmployeeList()
    this.showSuccessMessagee=true;
    setTimeout(()=>this.showSuccessMessagee=false,3000);
  })
}

refreshEmployeeList(){
  this.commentservice.getCommentList().subscribe((res)=> {
    this.commentservice.comments=res as Comment[];
  });
}

refreshReviewList(){
  this.reviewservice.getReviewData().subscribe((res)=>{
    this.reviewservice.Reviews=res as Review[];
  })
}

refreshReviewCountList(){
  this.reviewservice.getReviewDataCount().subscribe((res)=>{
    this.ReviewsCount=res as any;
  })
}

refreshReviewDataCountStarAverage(){
  this.reviewservice.getReviewDataCountStarAverage().subscribe((res)=>{
    this.Average=res as any;
  })
}

countStar(star) {
  this.selectedValue = star;
  console.log('Value of star', star);
}

onSubmitt(form){
this.reviewservice.postReview(form.value).subscribe((res)=>{
  this.resettForm(form);
  this.refreshReviewList()
  this.showMessage=true;
  setTimeout(()=> this.showMessage=false,3000);
})
}

resetttForm(form?:any){
  if (form)
  form.reset();
  this.contactservice.selectedSubscribed={
    EMAIL:"",
  }
}

onSubmittt(form?:NgForm){
  this.contactservice.postSubscribed(form.value).subscribe((res) => {
    this.resetttForm(form);
    this.toaster.show('Subscribed!!');
  })
}

}
