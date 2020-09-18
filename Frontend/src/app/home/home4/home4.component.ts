import { Component, OnInit,Input} from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import { Router } from '@angular/router';
import {BlogcommentService} from 'src/app/shared/blogcomment.service';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {


  BlogCommentsCount:any;
  @Input() productItem:Blog
  constructor(private router: Router,public blogcommentservice:BlogcommentService) { }

  ngOnInit(): void {
    this.refreshBlogCommentCountList();
  }

  getNavigation(link, id){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }

  refreshBlogCommentCountList(){
    this.blogcommentservice.getBlogCommentDataCount().subscribe((res)=>{
      this.BlogCommentsCount=res as any;
    })
  }

}
