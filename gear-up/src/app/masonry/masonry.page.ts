import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.page.html',
  styleUrls: ['./masonry.page.scss'],
})
export class MasonryPage implements OnInit {

  public masonry: any= [
      {id: 1, name: 'Cement', brand: "Phinma Corporation", type:"Low Heat Cement", cap: "300 Pounds", cat: 'masonry'},
      {id: 2, name: 'Hollow Blocks', brand: "Allied Concrete", type: "Partition block", cap: "1/2 inches", cat: 'masonry'},
      {id: 3, name: 'Magnesium Hand Floats', brand: "Marshalltwon", type: "Broken-In", cat: 'masonry'},
      {id: 4, name: 'Wheel Barrow', brand: "Creston", type: "Deep Type", cat: 'masonry'},
      {id: 5, name: 'Cement Mixer Manual', brand: "Phinma Corporation", type: "Pan Type Mixer", cap: "300 Pounds",cat: 'masonry'}
  ]

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['view-item']);
  }

}
