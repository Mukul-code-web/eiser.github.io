import { Component, OnInit,Input} from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {MessangersService} from 'src/app/shared/messangers.service';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-wishlistdata',
  templateUrl: './wishlistdata.component.html',
  styleUrls: ['./wishlistdata.component.css']
})
export class WishlistdataComponent implements OnInit {

  showSuccessMessage:boolean;
  serverErrorMessages:String;
  server:boolean;
  @Input() productItem:Product

  constructor(public msg:MessangersService,public productservice:ProductService,private router: Router,public wishlistservice:WishlistService) { }

  ngOnInit(): void {
  }

  handleAddtoCart(){
    this.productservice.postcartdata(this.productItem).subscribe(res =>{
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

}
