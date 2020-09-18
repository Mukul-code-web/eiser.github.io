import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blogcomment} from './blogcomment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogcommentService {

  selectedBlogComment:Blogcomment;
  blogcomments:Blogcomment[];

  readonly baseURL = 'http://localhost:8080/blogcomments';
  readonly baseURL1 = 'http://localhost:8080/blogcomments/blogcommentCount';
  readonly baseURL2 = 'http://localhost:8080/Like';
  readonly baseURL3 = 'http://localhost:8080/Like/LikeCount';

  constructor(private http:HttpClient) { }

  postBlogComment(com:Comment){
    return this.http.post(this.baseURL,com);
  }

  getBlogCommentList(){
    return this.http.get(this.baseURL);
  }

  getBlogCommentDataCount(){
    return this.http.get(this.baseURL1);
  }

  postLikeData(_id:any){
    return this.http.post(this.baseURL2,_id);
  }

  getLikeDataCount(){
    return this.http.get(this.baseURL3);
  }
}
