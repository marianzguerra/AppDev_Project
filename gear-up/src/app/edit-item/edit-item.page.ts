import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['dashboard']);
  }

}
