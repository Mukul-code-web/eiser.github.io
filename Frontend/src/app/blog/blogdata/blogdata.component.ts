import { Component, OnInit,Input} from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';


@Component({
  selector: 'app-blogdata',
  templateUrl: './blogdata.component.html',
  styleUrls: ['./blogdata.component.css']
})
export class BlogdataComponent implements OnInit {

  blogList:Blog[]=[];

  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogservice.getJavaScriptBlog();
  }

  function(){
    alert("Sorry No More Pages!!")
  }

}
