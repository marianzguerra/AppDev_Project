import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.page.html',
  styleUrls: ['./delete-item.page.scss'],
})
export class DeleteItemPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['dashboard']);
  }
  wood(){
    this.router.navigate(['woodprod']);
  }

  concrete(){
    this.router.navigate(['concreting']);
  }
  pipes(){
    this.router.navigate(['pipes']);
  }
  rebar(){
    this.router.navigate(['rebar']);
  }
  insulation(){
    this.router.navigate(['insulation']);
  }
  paint(){
    this.router.navigate(['paint']);
  }
}
