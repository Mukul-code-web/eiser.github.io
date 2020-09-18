import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Review} from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  selectedReview:Review;
  Reviews:Review[];
  

  readonly baseURL = 'http://localhost:8080/reviews';
  readonly baseURL1 = 'http://localhost:8080/reviews/reviewCount';
  readonly baseURL3 = 'http://localhost:8080/reviews/reviewCount/average';

  constructor(private http:HttpClient) { }

  postReview(com:Review){
    return this.http.post(this.baseURL,com);
  }
 

  getReviewData(){
    return this.http.get(this.baseURL);
  }

  getReviewDataCount(){
    return this.http.get(this.baseURL1);
  }

  getReviewDataCountStarAverage(){
    return this.http.get(this.baseURL3);
  }
}
