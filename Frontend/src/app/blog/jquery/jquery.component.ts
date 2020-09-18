import { Component, OnInit } from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  blogList:Blog[]=[];

  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogservice.getJqueryBlog();
  }

  function(){
    alert("Sorry No More Pages!!")
  }


}
