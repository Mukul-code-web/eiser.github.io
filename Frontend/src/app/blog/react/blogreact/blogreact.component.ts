import { Component, OnInit,Input } from '@angular/core';
import {Blog} from 'src/app/shared/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogreact',
  templateUrl: './blogreact.component.html',
  styleUrls: ['./blogreact.component.css']
})
export class BlogreactComponent implements OnInit {

  @Input() blogItem:Blog
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getNavigation(link, id){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }

}
