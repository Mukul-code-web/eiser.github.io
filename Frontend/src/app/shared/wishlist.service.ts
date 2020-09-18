import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Wishlist} from './wishlist.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

 

  readonly baseURL = 'http://localhost:8080/wishlist';
  readonly baseURL1 = 'http://localhost:8080/wishlistdata';

  constructor(private http:HttpClient) { }

getWishList(){
 return this.http.get(this.baseURL).pipe(
   map((result:any[])=>{
     let productIds=[]
     result.forEach(item=>productIds.push(item.id))
     return productIds
   })
 )
}

getWishListData(){
  return this.http.get(this.baseURL1);
}

addToWishList(_id:number){
  return this.http.post(this.baseURL,{_id:_id});
}

removeFromWishList(_id:number){
  return this.http.delete(this.baseURL + `/${_id}`);
}

postWishList(product:Product){
return this.http.post(this.baseURL1,product)
}

deleteWishList(_id:number){
  return this.http.delete(this.baseURL1 + `/${_id}`)
}

}
