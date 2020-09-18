import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Creditcard } from './creditcard.model';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  selectedCreditCard:Creditcard;
  CreditCards:Creditcard[];

  readonly baseURL = 'http://localhost:8080/creditcarddetails';

  constructor(private http:HttpClient) { }

  postCreditCardDetails(Cre:Creditcard){
    return this.http.post(this.baseURL,Cre);
  }
}
