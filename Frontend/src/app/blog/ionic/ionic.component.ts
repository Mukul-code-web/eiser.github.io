import { Component, OnInit } from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.css']
})
export class IonicComponent implements OnInit {

  blogList:Blog[]=[];

  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogservice.getIonicBlog();
  }

  function(){
    alert("Sorry No More Pages!!")
  }

}
