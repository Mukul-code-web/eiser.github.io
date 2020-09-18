import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/shared/product.model';
import {ProductService} from 'src/app/shared/product.service';
import {WishlistService } from 'src/app/shared/wishlist.service';

@Component({
  selector: 'app-tshirtcollection',
  templateUrl: './tshirtcollection.component.html',
  styleUrls: ['./tshirtcollection.component.css']
})
export class TshirtcollectionComponent implements OnInit {

  shopList:Product[]=[];
  wishlist:number[]=[]

  constructor(public productService:ProductService,public wishlistservice:WishlistService) { }

  ngOnInit(): void {
    this.shopList=this.productService.getmentshirtproducts();
    this.loadWishList();
  }

  loadWishList(){
    this.wishlistservice.getWishList().subscribe(productIds=>{
    this.wishlist=productIds
    })
  }

}
