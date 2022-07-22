import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['dashboard']);
  }
  wood(){
    this.router.navigate(['wood']);
  }
  masonry(){
    this.router.navigate(['masonry']);
  }
  rebars(){
    this.router.navigate(['rebars']);
  }
  plumbing(){
    this.router.navigate(['plumbing']);
  }

}
