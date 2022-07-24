import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.page.html',
  styleUrls: ['./masonry.page.scss'],
})
export class MasonryPage implements OnInit {

  public masonry: any= [
      {id: 1, name: 'Cement', brand: "Phinma Corporation", type:"Low Heat Cement", cap: "300 Pounds", qty: 100, cat: 'masonry'},
      {id: 2, name: 'Hollow Blocks', brand: "Allied Concrete", type: "Partition block", cap: "1/2 inches", qty: 250, cat: 'masonry'},
      {id: 3, name: 'Magnesium Hand Floats', brand: "Marshalltwon", type: "Broken-In", qty: 30, cat: 'masonry'},
      {id: 4, name: 'Wheel Barrow', brand: "Creston", type: "Deep Type", qty: 10, cat: 'masonry'},
      {id: 5, name: 'Cement Mixer Manual', brand: "Phinma Corporation", type: "Pan Type Mixer", cap: "300 Pounds", qty: 7, cat: 'masonry'}
  ]

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['view-item']);
  }

}
