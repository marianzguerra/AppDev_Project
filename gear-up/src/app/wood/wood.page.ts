import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wood',
  templateUrl: './wood.page.html',
  styleUrls: ['./wood.page.scss'],
})
export class WoodPage implements OnInit {

  public wood: any= [
      {id: 1, name: 'Lumber', Size: "2x4 inches", thick: "3/4 inches", qty: 140, cat: 'wood'},
      {id: 2, name: 'Plywood', Size: "4x8 ft", thick: " 1/2 inches", qty: 140, cat: 'wood'},
      {id: 3, name: 'Cross Laminated timbers', Size: "4x12 meters", thick: "2 inches", qty: 140, cat: 'wood'},
      {id: 4, name: 'Hardboard', Size: "4x8 inches", thick: "1/8 inches", qty: 140, cat: 'wood'},
      {id: 5, name: 'Palochina Wood Plank', Size: "2x4x8 ft", thick: ".85 inches", qty: 140, cat: 'wood'}
  ]

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['view-item']);
  }

}
