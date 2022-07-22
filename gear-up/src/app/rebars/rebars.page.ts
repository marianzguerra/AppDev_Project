import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rebars',
  templateUrl: './rebars.page.html',
  styleUrls: ['./rebars.page.scss'],
})
export class RebarsPage implements OnInit {

  public rebars: any= [
    {id: 1, name: 'Carbon Steel Rebar', size: "#3", manu: "Huayaosteel", length: "13.5 meters", cat: 'rebars'},
    {id: 2, name: 'Hot Dipped Welded Wire Fabric', size: "#4", manu:"Fenghuasteel", length: "20 feet", cat: 'rebars'},
    {id: 3, name: ' Glass Fiber Reinforced Polymer Rebar', size: "38mm", manufacturer: "Armastek Philippines", length: "15mm", cat: 'rebars'},
    {id: 4, name: 'Epoxy Coated Rebar', size: "#4", manu: "SteelAsia", length: "42.7", cat: 'rebars'},
    {id: 5, name: 'Stainless Steel Rebar', size: "3/8", manu: "SteelAsia", length: "20 ft", cat: 'rebars'}
]

constructor( private router:Router) { }

ngOnInit() {
}

back(){
  this.router.navigate(['view-item']);
}

}
