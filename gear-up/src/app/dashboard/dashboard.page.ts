import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add(){
    this.router.navigate(['add-item']);
  }
  view(){
    this.router.navigate(['view-item']);
  }
  edit(){
    this.router.navigate(['edit-item']);
  }
  delete(){
    this.router.navigate(['delete-item']);
  }
  

}
