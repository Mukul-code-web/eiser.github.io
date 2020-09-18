import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commentreply} from './commentreply.model';
import {Comment} from './comment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentreplyService {

  selectedReplyComment:Commentreply;
  replycomments:Commentreply[];

  readonly baseURL = 'http://localhost:8080/commentsreply';

  constructor(private http:HttpClient) {
   }

  postReplyComment(rep:Commentreply){
    return this.http.post(this.baseURL,rep);
  }

 
  

  getReplyCommentList(){
    return this.http.get(this.baseURL);
  }
}
