import { Component, OnInit } from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  blogList:Blog[]=[];

  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogservice.getAngularBlog();
  }

  function(){
    alert("Sorry No More Pages!!")
  }

}
