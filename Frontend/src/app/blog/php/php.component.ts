import { Component, OnInit } from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import {BlogService} from 'src/app/shared/blog.service';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {

  blogList:Blog[]=[];

  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogservice.getPhpBlog();
  }

  function(){
    alert("Sorry No More Pages!!")
  }

}
