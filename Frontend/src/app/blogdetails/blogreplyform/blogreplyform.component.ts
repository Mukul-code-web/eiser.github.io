import { Component, OnInit,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Commentreply} from 'src/app/shared/commentreply.model';
import {Comment} from 'src/app/shared/comment.model';
import {CommentreplyService } from 'src/app/shared/commentreply.service';
declare var $: any;

@Component({
  selector: 'app-blogreplyform',
  templateUrl: './blogreplyform.component.html',
  styleUrls: ['./blogreplyform.component.css']
})
export class BlogreplyformComponent implements OnInit {

  @Input('blogcommentId') blogcommentId: string;
  showFormTime:boolean;
  showSuccessMessagee:boolean;
  constructor(public commentreplyservice:CommentreplyService) { }


  ngOnInit(): void {
    this.refreshCommentReplyList();
    this.resetForm();

    $(document).ready(function(){
      $("#hide").click(function(){
        $("#p01").hide();
      });
    });
  }

  get bcID() {
    return this.blogcommentId;
  }

  resetForm(form?:any) {
    if (form)
      form.reset();
    this.commentreplyservice.selectedReplyComment = {
      fullname: "",
      image: "",
      email: "",
      message:"",
      date:"",
      commentId:""
    }
  }

  refreshCommentReplyList(){
    this.commentreplyservice.getReplyCommentList().subscribe((res) => {
      this.commentreplyservice.replycomments=res as Commentreply[];
    });
  }


  onSubmit(form?:NgForm){
    this.commentreplyservice.postReplyComment(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshCommentReplyList()
      this.showSuccessMessagee=true;
      setTimeout(()=>this.showSuccessMessagee=false,3000); 
    })
  }

}
