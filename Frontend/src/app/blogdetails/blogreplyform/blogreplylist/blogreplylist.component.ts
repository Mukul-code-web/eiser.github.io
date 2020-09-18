import { Component, OnInit,Input} from '@angular/core';
import {Commentreply} from 'src/app/shared/commentreply.model';
import {CommentreplyService } from 'src/app/shared/commentreply.service';

@Component({
  selector: 'app-blogreplylist',
  templateUrl: './blogreplylist.component.html',
  styleUrls: ['./blogreplylist.component.css']
})
export class BlogreplylistComponent implements OnInit {

  constructor(public commentreplyservice:CommentreplyService) { }

  togglePanell: any = {};
  url="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  @Input('blogcommentId') blogcommentId: string;

  ngOnInit(): void {
    this.refreshCommentReplyList();
  }

  refreshCommentReplyList(){
    this.commentreplyservice.getReplyCommentList().subscribe((res) => {
      this.commentreplyservice.replycomments=res as Commentreply[];
    });
  }

}
