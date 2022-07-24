import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roofing',
  templateUrl: './roofing.page.html',
  styleUrls: ['./roofing.page.scss'],
})
export class RoofingPage implements OnInit {

  public roofing: any= [
    {id: 1, name: 'A-Grade Fiberglass Roofing', size: "#32", manu: "Polymer Products", thick: "1.5mm", qty: 95, cat: 'roofing'},
    {id: 2, name: 'Bitumen Roofing Sheets', size: "950mm x 2000mm", manu:"Apo Galfan", thick: "2.6mm", qty: 100, cat: 'roofing'},
    {id: 3, name: 'Metal Corrugated Roofing Sheets', size: "960mm x 1200mm", manu: "Puyat Steel Corp", qty: 90, thick: "1.2mm", cat: 'roofing'},
    {id: 4, name: 'Stone-coated Metal Roofing', size: "53 x 17", manu: "Kawara", thick: "29-gauge", qty: 60, cat: 'roofing'},
    {id: 5, name: 'Asphalt Shingle Roof', size: "13 1/4 x 12", manu: "Atlas Roofing Corp.", thick: "3/16", qty: 105, cat: 'roofing'}
]

constructor( private router:Router) { }

ngOnInit() {
}

back(){
  this.router.navigate(['view-item']);
}

}
