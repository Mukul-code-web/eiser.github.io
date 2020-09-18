import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  selectedComment:Comment;
  comments:Comment[];

  readonly baseURL = 'http://localhost:8080/comments';

  constructor(private http:HttpClient) { }

  postComment(com:Comment){
    return this.http.post(this.baseURL,com);
  }

  getCommentList(){
    return this.http.get(this.baseURL);
  }
}
